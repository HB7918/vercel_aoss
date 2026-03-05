import { Client, Connection } from '@opensearch-project/opensearch';
import { sign, Request as Aws4Request, Credentials } from 'aws4';

const endpoint = process.env.OPENSEARCH_ENDPOINT!;
const region = process.env.AWS_REGION || 'us-east-1';

// Custom connection class that signs requests for OpenSearch Serverless
class AwsSigV4Connection extends Connection {
  request(
    params: Parameters<Connection['request']>[0],
    callback: Parameters<Connection['request']>[1]
  ): ReturnType<Connection['request']> {
    const url = new URL(endpoint);
    
    const requestToSign: Aws4Request = {
      host: url.host,
      hostname: url.hostname,
      method: params.method,
      path: params.path ?? '/',
      headers: params.headers as Record<string, string>,
      body: typeof params.body === 'string' ? params.body : undefined,
      service: 'aoss', // OpenSearch Serverless service
      region,
    };

    const credentials: Credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      sessionToken: process.env.AWS_SESSION_TOKEN,
    };

    sign(requestToSign, credentials);

    // Update params with signed headers
    const signedParams = {
      ...params,
      headers: requestToSign.headers as Record<string, string>,
    };

    return super.request(signedParams, callback);
  }
}

let client: Client | null = null;

export function getOpenSearchClient(): Client {
  if (!client) {
    client = new Client({
      node: endpoint,
      Connection: AwsSigV4Connection,
    });
  }
  return client;
}

// Index a document
export async function indexDocument<T extends Record<string, unknown>>(
  index: string,
  id: string,
  document: T
) {
  const osClient = getOpenSearchClient();
  return osClient.index({
    index,
    id,
    body: document,
    refresh: true,
  });
}

// Search documents
export async function searchDocuments<T>(
  index: string,
  query: Record<string, unknown>
): Promise<T[]> {
  const osClient = getOpenSearchClient();
  const response = await osClient.search({
    index,
    body: { query },
  });
  
  return response.body.hits.hits.map((hit: { _id: string; _source: unknown }) => ({
    id: hit._id,
    ...(hit._source as object),
  })) as T[];
}

// Delete a document
export async function deleteDocument(index: string, id: string) {
  const osClient = getOpenSearchClient();
  return osClient.delete({
    index,
    id,
    refresh: true,
  });
}

// Check if index exists
export async function indexExists(index: string): Promise<boolean> {
  const osClient = getOpenSearchClient();
  const response = await osClient.indices.exists({ index });
  return response.body;
}

// Create index with mappings
export async function createIndex(
  index: string,
  mappings?: Record<string, unknown>
) {
  const osClient = getOpenSearchClient();
  return osClient.indices.create({
    index,
    body: mappings ? { mappings } : undefined,
  });
}
