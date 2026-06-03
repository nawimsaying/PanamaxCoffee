import { Pool } from "pg";

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

export interface Product {
    id: number;
    title: string;
    type: string;
    description: string;
    sizes: string[];
    prices: string[];
    image_url: string;
    created_at: string;
}

export async function GET() {
    try {
        const result = await pool.query(
            "SELECT id, title, type, description, sizes, prices, image_url, created_at FROM products ORDER BY created_at DESC"
        );

        const products: Product[] = result.rows;

        return Response.json({ success: true, data: products });
    } catch (error) {
        console.error("GET /api/products error:", error);

        return Response.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, type, description, sizes, prices, image_url } = body;

        // Validation
        if (!title || !type || !description || !sizes || !prices) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!Array.isArray(sizes) || !Array.isArray(prices)) {
            return Response.json(
                { error: "Sizes and prices must be arrays" },
                { status: 400 }
            );
        }

        if (sizes.length !== prices.length) {
            return Response.json(
                { error: "Sizes and prices arrays must have same length" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `INSERT INTO products (title, type, description, sizes, prices, image_url)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING *`,
            [title, type, description, sizes, prices, image_url || null]
        );

        return Response.json(
            { success: true, data: result.rows[0] },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST /api/products error:", error);

        return Response.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}
