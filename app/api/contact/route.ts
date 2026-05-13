import { google } from "googleapis";

// simple in-memory rate limit store
const rateLimitMap = new Map<string, number>();

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

        // auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key:
                    process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
                        /\\n/g,
                        "\n"
                    ),
            },
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({
            auth,
            version: "v4",
        });

        // append row
        await sheets.spreadsheets.values.append({
            spreadsheetId:
                process.env.GOOGLE_SHEETS_SPREADSHEET_ID,

            range: "Sheet1!A:D",

            valueInputOption: "USER_ENTERED",

            requestBody: {
                values: [
                    [
                        name,
                        email,
                        message || "",
                        new Date().toLocaleString(),
                    ],
                ],
            },
        });

        return Response.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}