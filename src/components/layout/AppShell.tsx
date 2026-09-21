import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { FloatingContact } from '@/components/layout/FloatingContact';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const QuickQuoteModal = lazy(() =>
  import('@/components/inquiry/QuickQuoteModal').then((m) => ({ default: m.QuickQuoteModal })),
);

export function AppShell() {
  const { pathname } = useLocation();
  const transparentHeader = pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header transparent={transparentHeader} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      <Suspense fallback={null}>
        <QuickQuoteModal />
      </Suspense>
    </div>
  );
}
