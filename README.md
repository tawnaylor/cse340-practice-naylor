# cse340-practice-naylor
Practice project for CSE 340

## Run Locally

```sh
pnpm install
pnpm run dev
```

If pnpm is not installed globally, use `npx --yes pnpm@10` in place of `pnpm`.
The development script loads `.env` using Node's native `--env-file` flag.
Local configuration uses `PORT=3000` and `NODE_ENV=development`.
Visit http://127.0.0.1:3000. Development live reload uses the next port, 3001.

`pnpm run start` is a production-style launch: it does not load `.env`.
Provide environment variables through your shell or hosting service.

## MVC Structure

- `src/models/catalog/catalog.js`: course data, lookups, sorting, and department grouping.
- `src/controllers/catalog/catalog.js`: catalog and course detail handlers.
- `src/controllers/index.js`: basic page handlers and the test error handler.
- `src/controllers/routes.js`: Express Router connecting URLs to controllers.
- `src/middleware/global.js`: shared template locals.
- `src/middleware/demo/headers.js`: demo-only HTTP headers.
- `src/views/`: EJS pages, shared partials, and error templates.
- `public/`: static CSS and images.
- `server.js`: application setup, router mounting, error handling, and development WebSockets.

## Check Routes

Visit `/`, `/about`, `/catalog`, `/catalog/CS121`, and `/demo`.
Course sections support `?sort=professor`, `?sort=room`, or `?sort=time`;
time preserves the supplied order. Sorting never changes the source sections.
The catalog model contains seven courses across four departments.

`/demo?debug=true&test=middleware` displays shared query data and sets
`X-Demo-Page` and `X-Middleware-Demo` headers only on that route.
`/test-error` returns a custom 500 page; `/invalid` returns a custom 404 page.
Error details are shown only in development.
