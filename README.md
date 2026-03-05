# Amazon OpenSearch Serverless V2 + Vercel

A Next.js application integrating Amazon OpenSearch Serverless with Vercel deployment.

## Setup

### 1. AWS OpenSearch Serverless

Create a collection in AWS Console:
1. Go to Amazon OpenSearch Service → Serverless → Collections
2. Create a new collection (Search type recommended)
3. Configure encryption, network, and data access policies
4. Note your collection endpoint

### 2. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your AWS credentials and OpenSearch endpoint.

### 3. Install & Run

```bash
npm install
npm run dev
```

### 4. Deploy to Vercel

```bash
vercel
```

Add environment variables in Vercel dashboard under Project Settings → Environment Variables.

## API Endpoints

- `GET /api/search?q=<query>` - Search documents
- `POST /api/documents` - Index a document
- `DELETE /api/documents?id=<id>` - Delete a document

## AWS IAM Policy

Your IAM user/role needs these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "aoss:APIAccessAll"
      ],
      "Resource": "arn:aws:aoss:*:*:collection/*"
    }
  ]
}
```
