export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImageUrl: string;
  category: string;
  createdAt: string;
  ratingsCount: number;
}

let books: Book[] = [
  {
    id: "1",
    slug: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 14.99,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    coverImageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    category: "Fiction",
    createdAt: new Date().toISOString(),
    ratingsCount: 1204
  },
  {
    id: "2",
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    price: 11.98,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    coverImageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    category: "Self-Help",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    ratingsCount: 5432
  },
  {
    id: "3",
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    price: 9.99,
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness.",
    coverImageUrl: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=600&auto=format&fit=crop",
    category: "Science Fiction",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    ratingsCount: 3210
  },
  {
    id: "4",
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 18.00,
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.",
    coverImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    category: "Science Fiction",
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    ratingsCount: 890
  },
  {
    id: "5",
    slug: "the-subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 15.00,
    description: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people.",
    coverImageUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=600&auto=format&fit=crop",
    category: "Self-Help",
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    ratingsCount: 2150
  },
  {
    id: "6",
    slug: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.50,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    coverImageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop",
    category: "Fiction",
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    ratingsCount: 4500
  }
];

const simulateLatency = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
};

export const getBooks = async (options?: { category?: string; sort?: 'price' | 'newest' }): Promise<Book[]> => {
  await simulateLatency();
  
  let result = [...books];

  if (options?.category) {
    result = result.filter(book => book.category.toLowerCase() === options.category?.toLowerCase());
  }

  if (options?.sort) {
    if (options.sort === 'price') {
      result.sort((a, b) => a.price - b.price);
    } else if (options.sort === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }

  return result;
};

export const getBookBySlug = async (slug: string): Promise<Book | undefined> => {
  await simulateLatency();
  return books.find(book => book.slug === slug);
};

export const getFeaturedBooks = async (): Promise<Book[]> => {
  await simulateLatency();
  return [...books].sort((a, b) => b.ratingsCount - a.ratingsCount).slice(0, 4);
};

export const getTrendingBooks = async (): Promise<Book[]> => {
  await simulateLatency();
  return [...books].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);
};

export const getRecommendedBooks = async (excludeSlug: string): Promise<Book[]> => {
  await simulateLatency();
  return books.filter(b => b.slug !== excludeSlug).slice(0, 3);
};

export const addBook = async (bookData: Omit<Book, 'id' | 'createdAt' | 'ratingsCount' | 'slug'>): Promise<Book> => {
  await simulateLatency();
  
  const newBook: Book = {
    ...bookData,
    id: (books.length + 1).toString(),
    slug: bookData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    createdAt: new Date().toISOString(),
    ratingsCount: 0
  };
  
  books.push(newBook);
  return newBook;
};
