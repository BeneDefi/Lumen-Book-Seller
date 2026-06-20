import HeroSection from '@/app/components/HeroSection';
import TrendingSection from '@/app/components/TrendingSection';
import BestSellerSection from '@/app/components/BestSellerSection';
import FlashSalesSection from '@/app/components/FlashSaleSection';
import FeaturedSales from '@/app/components/FeaturedBooks';
import Footer from '@/app/components/Footer';
import LumenBooksLatestNews from '@/app/components/LumenBooksLatestNews';
import LumenBooksTestimonials from '@/app/components/LumenBooksTestimonials';

const page = () => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <BestSellerSection />
      <FlashSalesSection />
      <FeaturedSales />
      <LumenBooksLatestNews />
      <LumenBooksTestimonials />
      <Footer />
    </>
  )
}

export default page
