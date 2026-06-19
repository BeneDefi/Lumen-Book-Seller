import HeroSection from '@/app/components/HeroSection';
import TrendingSection from '@/app/components/TrendingSection';
import BestSellerSection from '@/app/components/BestSellerSection';
import FlashSalesSection from '@/app/components/FlashSaleSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <BestSellerSection />
      <FlashSalesSection />
    </>
  )
}

export default page
