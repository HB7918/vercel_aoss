import { NextRequest, NextResponse } from 'next/server';
import { indexDocument, deleteDocument, createIndex, indexExists } from '@/lib/opensearch';

// Index a new document
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { index = 'documents', id, document } = body;

    if (!id || !document) {
      return NextResponse.json(
        { error: 'Both "id" and "document" are required' },
        { status: 400 }
      );
    }

    // Create index if it doesn't exist
    const exists = await indexExists(index);
    if (!exists) {
      await createIndex(index, {
        properties: {
          title: { type: 'text' },
          content: { type: 'text' },
          description: { type: 'text' },
          created_at: { type: 'date' },
        },
      });
    }

    const result = await indexDocument(index, id, {
      ...document,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, result: result.body });
  } catch (error) {
    console.error('Index error:', error);
    return NextResponse.json(
      { error: 'Failed to index document', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Delete a document
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const index = searchParams.get('index') || 'documents';
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Document "id" is required' }, { status: 400 });
    }

    const result = await deleteDocument(index, id);
    return NextResponse.json({ success: true, result: result.body });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete document', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
