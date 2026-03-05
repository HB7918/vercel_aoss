import { NextRequest, NextResponse } from 'next/server';
import { searchDocuments } from '@/lib/opensearch';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const index = searchParams.get('index') || 'documents';

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
  }

  try {
    const results = await searchDocuments(index, {
      multi_match: {
        query,
        fields: ['title^2', 'content', 'description'],
        fuzziness: 'AUTO',
      },
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Search failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
