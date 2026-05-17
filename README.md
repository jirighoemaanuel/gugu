# gugu

Simple Node.js API server using Express, MongoDB, and Mongoose for a personal search engine.

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
- `GET /api/documents` - list indexed documents
- `GET /api/documents/search?q=scholarship` - search indexed documents
- `POST /api/documents` - create an indexed document

Example document payload:

```json
{
  "title": "MEXT Scholarship 2027",
  "url": "https://example.com/mext",
  "content": "MEXT scholarship is available for Nigerian students..."
}
```
