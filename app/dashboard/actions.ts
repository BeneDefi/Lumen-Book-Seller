"use server";

import { revalidatePath } from 'next/cache';
import { addBook } from '@/lib/data';

export async function addBookAction(formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const price = parseFloat(formData.get('price') as string);
  const description = formData.get('description') as string;
  const coverImageUrl = formData.get('coverImageUrl') as string;
  const category = formData.get('category') as string;

  await addBook({ title, author, price, description, coverImageUrl, category });

  revalidatePath('/books');
  revalidatePath('/dashboard');
}
