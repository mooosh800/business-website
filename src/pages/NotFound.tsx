import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';

export function NotFound() {
  const { t } = useLocale();

  return (
    <>
      <Seo title="404" description={t.notFound.text} />
      <section className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-7xl font-extrabold text-accentDark">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-ink">{t.notFound.title}</h1>
        <p className="mt-3 text-muted">{t.notFound.text}</p>
        <Link to="/" className="btn-primary mt-8">
          {t.common.backHome}
          <ArrowLeft aria-hidden="true" size={18} />
        </Link>
      </section>
    </>
  );
}
