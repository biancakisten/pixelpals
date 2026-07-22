import PixelPalsHero from '../components/PixelPalsHero';
import HomeBanner from '../components/HomeBanner';
import AIPlatform from '../components/AIPlatform';
import WhyPixelPals from '../components/WhyPixelPals';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <PixelPalsHero />
      <HomeBanner />
      <AIPlatform />
      <WhyPixelPals />
      <ProcessSection />
      <Footer />
    </main>
  );
}
