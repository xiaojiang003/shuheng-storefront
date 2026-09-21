import { AppShell } from '@/components/layout/AppShell';
import { AboutPage } from '@/pages/AboutPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { CasesPage } from '@/pages/CasesPage';
import { CollectionPage } from '@/pages/CollectionPage';
import { ContactPage } from '@/pages/ContactPage';
import { FaqPage } from '@/pages/FaqPage';
import { FitFinderPage } from '@/pages/FitFinderPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { ProductPage } from '@/pages/ProductPage';
import { SilhouettePage } from '@/pages/SilhouettePage';
import { SizingGuidePage } from '@/pages/SizingGuidePage';
import { TermsPage } from '@/pages/TermsPage';
import { UseCasePage } from '@/pages/UseCasePage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'collection', element: <CollectionPage /> },
      { path: 'collection/:category', element: <CollectionPage /> },
      { path: 'product/:slug', element: <ProductPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'sizing-guide', element: <SizingGuidePage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'cases', element: <CasesPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'use-case/:slug', element: <UseCasePage /> },
      { path: 'silhouette/:key', element: <SilhouettePage /> },
      { path: 'fit-finder', element: <FitFinderPage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
