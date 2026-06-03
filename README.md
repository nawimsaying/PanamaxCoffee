This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Local Postgres + pgAdmin

This repo includes a `docker-compose.yml` to run a local Postgres server and pgAdmin (DB manager).

Start services:

```bash
npm run db:up
```

Open pgAdmin at: http://localhost:8080

Login with:
- Email: admin@admin.com
- Password: admin

Then add a new server with these connection values:
- Host name/address: db
- Port: 5432
- Maintenance database: panamax
- Username: postgres
- Password: postgres

To stop services:

```bash
npm run db:down
```

The API uses `DATABASE_URL` (see `.env.local.example`).

## Managing Products

### View Products

GET http://localhost:3000/api/products

Returns all products in JSON format.

### Add a New Product

POST http://localhost:3000/api/products

Request body (JSON):
```json
{
  "title": "Product Name",
  "type": "натуральный",
  "description": "Product description",
  "sizes": ["250 гр", "1000 гр"],
  "prices": ["1259 руб", "3778 руб"],
  "image_url": "/product_1.png"
}
```

Example using curl:
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Coffee",
    "type": "натуральный",
    "description": "Best coffee ever",
    "sizes": ["250 гр", "1000 гр"],
    "prices": ["1500 руб", "4500 руб"],
    "image_url": "/product_1.png"
  }'
```

Products added through the API will automatically appear on the website.

### View/Edit Products in pgAdmin

1. Open http://localhost:8080
2. Login with email/password shown above
3. Add a new server with host `db`, port `5432`, user `postgres`, password `postgres`
4. Select the `products` table to view, edit, or delete entries

