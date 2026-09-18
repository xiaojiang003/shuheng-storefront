import { CapabilityIcons } from '@/components/home/CapabilityIcons';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { EnquiryBlock } from '@/components/home/EnquiryBlock';
import { HeroSection } from '@/components/home/HeroSection';
import { MaterialStrip } from '@/components/home/MaterialStrip';
import { NewArrivalsRail } from '@/components/home/NewArrivalsRail';
import { SilhouetteSlider } from '@/components/home/SilhouetteSlider';
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
      <CapabilityIcons />
      <NewArrivalsRail />
      <SilhouetteSlider />
      <MaterialStrip />
      <section className="py-16">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-brand">Trust & Quality</h2>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-muted">
            <li>Incoming fabric inspection</li>
            <li>In-line checks at panel joining</li>
            <li>Final AQL inspection before packing</li>
          </ol>
        </div>
      </section>
      <section className="bg-surface-alt py-12">
        <div className="container-content text-center">
          <h2 className="text-xl font-bold">Find your fit</h2>
          <p className="mt-2 text-sm text-muted">US, IN and CM sizing — no conversion required.</p>
          <Link to="/sizing-guide" className="mt-4 inline-block text-brand underline">
            View size mapping table
          </Link>
        </div>
      </section>
      <EnquiryBlock />
    </>
  );
}
