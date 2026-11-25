import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { Starfield } from './Starfield';
import { useLocale } from '../context/LocaleContext';

export function Layout() {
  const { t } = useLocale();
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen bg-void">
      <Starfield />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-void"
      >
        {t.common.skip}
      </a>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </div>
    </div>
  );
}
