import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function Home() {
  const { t, locale } = useLocale();

  return (
    <>
      <Seo
        title={t.nav.home}
        description={`${businessConfig.hero.description} ${businessConfig.hero.tagline}`}
      />

      <section className="relative isolate min-h-[92vh] overflow-hidden bg-void">
        <img
          src={businessConfig.hero.image}
          alt=""
          aria-hidden="true"
          loading="eager"
          className={`absolute inset-0 h-full w-full object-cover opacity-45 ${
            locale === 'ar' ? '-scale-x-100' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(104,72,190,0.18),transparent_45%)]" />

        <div className="container-shell relative flex min-h-[92vh] items-center py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {t.home.heroEyebrow} {businessConfig.displayName}
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.18] tracking-tight text-star sm:text-6xl lg:text-7xl">
              {businessConfig.hero.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-loose text-silver/85 sm:text-xl">
              {businessConfig.hero.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <Sparkles aria-hidden="true" size={16} className="text-gold" />
              {businessConfig.type}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton label={t.common.createMemory} />
              <Link to="/services" className="btn-outline">
                <span>{t.home.servicesLink}</span>
                <ArrowLeft aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow">01</p>
            <h2 className="mt-4 text-3xl font-bold text-star sm:text-4xl">
              {t.home.aboutTitle}
            </h2>
            <div className="mt-7 h-px w-24 bg-gold/60" />
          </div>
          <p className="max-w-3xl text-xl leading-loose text-silver/85">
            {businessConfig.about}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-night/40 py-24 lg:py-32">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">02</p>
              <h2 className="mt-4 text-3xl font-bold text-star sm:text-4xl">
                {t.home.servicesTitle}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-star"
            >
              {t.home.servicesLink}
              <ArrowLeft aria-hidden="true" size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {businessConfig.services.map((service, index) => (
              <article key={service.id} className="card-surface">
                <div className="image-frame aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-star">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-loose text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-32">
        <div className="card-surface relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <p className="eyebrow">03</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-snug text-star sm:text-5xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-loose text-silver/80">
              {t.home.ctaText}
            </p>
            <div className="mt-9 flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
