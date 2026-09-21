import { MERCHANT } from '@/config/merchant';
import type { Product } from '@/types/product';
import type { JsonLdGraph } from '@/types/seo';

export function buildProductJsonLd(product: Product, siteUrl: string): JsonLdGraph {
  const productUrl = `${siteUrl}/product/${product.slug}`;
  const prices = product.priceTiers.map((t) => parseFloat(t.price));
  const lowPrice = Math.min(...prices).toFixed(2);
  const highPrice = Math.max(...prices).toFixed(2);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.title,
        sku: product.sku,
        mpn: product.sku.toUpperCase(),
        productID: product.sku,
        description: product.description,
        image: product.images.map((i) => `${siteUrl}${i.src}`),
        url: productUrl,
        category: 'Apparel & Accessories > Headwear > Caps',
        material: product.materials.map((m) => m.charAt(0).toUpperCase() + m.slice(1)),
        color: product.color,
        brand: { '@type': 'Brand', name: 'Shuheng' },
        manufacturer: {
          '@type': 'Organization',
          name: MERCHANT.legalName,
          address: {
            '@type': 'PostalAddress',
            addressLocality: MERCHANT.address.locality,
            addressRegion: MERCHANT.address.region,
            addressCountry: MERCHANT.address.country,
          },
        },
        audience: { '@type': 'BusinessAudience', audienceType: 'B2B buyer' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: product.currency,
          lowPrice,
          highPrice,
          offerCount: String(product.priceTiers.length),
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: productUrl,
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            minValue: product.moq,
            unitCode: 'C62',
          },
        },
        additionalProperty: Object.entries(product.specifications).map(([name, value]) => ({
          '@type': 'PropertyValue',
          name,
          value,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: product.category,
            item: `${siteUrl}/collection/${product.category}`,
          },
          { '@type': 'ListItem', position: 3, name: product.title, item: productUrl },
        ],
      },
    ],
  };
}

export function buildOrganizationJsonLd(siteUrl: string): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: MERCHANT.brandName,
        legalName: MERCHANT.legalName,
        url: siteUrl,
        logo: MERCHANT.logoUrl,
        foundingDate: String(MERCHANT.registrationYear),
        address: {
          '@type': 'PostalAddress',
          streetAddress: MERCHANT.address.street,
          addressLocality: MERCHANT.address.locality,
          addressRegion: MERCHANT.address.region,
          addressCountry: MERCHANT.address.country,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            availableLanguage: MERCHANT.languages,
          },
        ],
      },
    ],
  };
}

export function buildFaqJsonLdFromItems(
  items: { question: string; answer: string }[],
): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
}

export function buildFaqJsonLd(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I measure my hat size?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Measure 1 cm above the ears and across the mid-forehead using a soft tape.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum order quantity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'From 50 pieces per style.',
            },
          },
        ],
      },
    ],
  };
}
