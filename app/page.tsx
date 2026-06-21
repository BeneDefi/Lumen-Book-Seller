import AboutPage from '@/app/books/about/page'

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <AboutPage />
    </>
  );
}
