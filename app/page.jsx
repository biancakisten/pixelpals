import PixelPalsHero from '../components/PixelPalsHero';
import HomeBanner from '../components/HomeBanner';
import AIPlatform from '../components/AIPlatform';
import WhyPixelPals from '../components/WhyPixelPals';
import ProcessSection from '../components/ProcessSection';
import EndPageBanner from '../components/EndPageBanner';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <PixelPalsHero />
      <HomeBanner />
      <AIPlatform />
      <WhyPixelPals />
      <ProcessSection />
      <EndPageBanner />
      <Footer />
    </main>
  );
}
