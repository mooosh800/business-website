import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';

export function NotFound() {
  const { t } = useLocale();

  return (
    <>
      <Seo title="404" description={t.notFound.text} />
      <section className="container-shell flex min-h-[65vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-8xl font-bold text-gold">404</p>
        <h1 className="mt-5 text-3xl font-bold text-star">{t.notFound.title}</h1>
        <p className="mt-3 text-muted">{t.notFound.text}</p>
        <Link to="/" className="btn-primary mt-9">
          {t.common.backHome}
          <ArrowLeft aria-hidden="true" size={18} />
        </Link>
      </section>
    </>
  );
}
