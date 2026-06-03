import { Pool } from "pg";

// simple in-memory rate limit store
const rateLimitMap = new Map<string, number>();

type GlobalWithPgPool = typeof globalThis & {
    __pgPool?: Pool;
};

const globalWithPgPool = globalThis as GlobalWithPgPool;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("Missing DATABASE_URL environment variable");
}

const pool =
    globalWithPgPool.__pgPool ?? new Pool({ connectionString });

if (!globalWithPgPool.__pgPool) {
    globalWithPgPool.__pgPool = pool;
}

export async function POST(req: Request) {
    try {
        // get IP
        const ip =
            req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip") ||
            "unknown";

        const now = Date.now();
        const lastRequest = rateLimitMap.get(ip);

        // 10 seconds cooldown
        const LIMIT_MS = 10_000;

        if (lastRequest && now - lastRequest < LIMIT_MS) {
            return Response.json(
                { error: "Too many requests" },
                { status: 429 }
            );
        }

        // save request time
        rateLimitMap.set(ip, now);

        const body = await req.json();
        const { name, email, message, website } = body;

        // Honeypot
        if (website) {
            return Response.json(
                { error: "Spam detected" },
                { status: 400 }
            );
        }

        // validation
        if (!name || !email) {
            return Response.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        await pool.query(
            `INSERT INTO contact_messages (name, email, message, created_at)
             VALUES ($1, $2, $3, $4)`,
            [name, email, message || "", new Date()]
        );

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact route error:", error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
