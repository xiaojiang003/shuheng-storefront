import { CapabilityIcons } from '@/components/home/CapabilityIcons';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { CertificationBadges } from '@/components/home/CertificationBadges';
import { EnquiryBlock } from '@/components/home/EnquiryBlock';
import { FactoryStats } from '@/components/home/FactoryStats';
import { FaqPreview } from '@/components/home/FaqPreview';
import { HeroSection } from '@/components/home/HeroSection';
import { MaterialStrip } from '@/components/home/MaterialStrip';
import { NewArrivalsRail } from '@/components/home/NewArrivalsRail';
import { ProductionProcess } from '@/components/home/ProductionProcess';
import { SilhouetteSlider } from '@/components/home/SilhouetteSlider';
import { Testimonials } from '@/components/home/Testimonials';
import { JsonLd } from '@/components/seo/JsonLd';
import { MERCHANT } from '@/config/merchant';
import { buildOrganizationJsonLd } from '@/lib/jsonLd';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <title>Shuheng — Custom Headwear Specialist</title>
      <meta name="description" content="Factory-direct custom caps for brands, teams and retailers. B2B headwear from Shijiazhuang, Hebei." />
      <JsonLd data={buildOrganizationJsonLd(MERCHANT.siteUrl)} />
      <HeroSection />
      <CategoryGrid />
      <FactoryStats />
      <NewArrivalsRail />
      <SilhouetteSlider />
      <CapabilityIcons />
      <ProductionProcess />
      <MaterialStrip />
      <CertificationBadges />
      <Testimonials />
      <section className="bg-surface-alt py-12">
        <div className="container-content text-center">
          <h2 className="text-xl font-bold">Find your fit</h2>
          <p className="mt-2 text-sm text-muted">US, IN and CM sizing — no conversion required.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link to="/sizing-guide" className="text-brand underline">
              View size mapping table
            </Link>
            <Link to="/fit-finder" className="text-brand underline">
              Take the Fit Finder quiz
            </Link>
          </div>
        </div>
      </section>
      <FaqPreview />
      <EnquiryBlock />
    </>
  );
}
