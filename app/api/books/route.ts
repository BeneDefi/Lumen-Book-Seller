import { NextResponse } from 'next/server';
import { getBooks, addBook } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  const sort = searchParams.get('sort') as 'price' | 'newest' | undefined;
  
  const books = await getBooks({ category, sort });
  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newBook = await addBook(body);
  return NextResponse.json(newBook, { status: 201 });
}
