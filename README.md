# gugu

Simple Node.js API server using Express, MongoDB, and Mongoose.

## Setup

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Update `MONGODB_URI` in `.env` if your MongoDB connection string is different.

## Run

Start the server:

```bash
npm start
```

Start with auto-reload during development:

```bash
npm run dev
```

Default URL:

```text
http://localhost:5000
```

## Endpoints

- `GET /` - server info
- `GET /health` - health check
- `GET /api/users` - list users
- `POST /api/users` - create a user

Example user payload:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com"
}
```
