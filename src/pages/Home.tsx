import { Link } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, Layers3, Sparkles, type LucideIcon } from 'lucide-react';
import { businessConfig } from '../config/business';
import { themeConfig } from '../config/theme';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';

const serviceIcons: LucideIcon[] = [Sparkles, Layers3, BadgeCheck];

export function Home() {
  const { t } = useLocale();

  return (
    <>
      <Seo
        title={t.nav.home}
        description={`${businessConfig.hero.description} ${businessConfig.hero.tagline}`}
      />

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="container-shell grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow-light">
              {t.home.heroEyebrow} {businessConfig.name}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              {businessConfig.name}
            </h1>
            <p className="mt-4 text-lg font-bold text-paper/70">{businessConfig.type}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              {businessConfig.hero.description}
            </p>
            <p className="mt-3 max-w-xl text-xl font-bold text-accent">
              {businessConfig.hero.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton />
              <Link
                to="/services"
                className="btn-outline border-paper/30 bg-transparent text-paper hover:border-accent hover:text-accent"
              >
                <span>{t.home.servicesLink}</span>
                <ArrowLeft aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-6 rounded-[2.5rem] border border-paper/10 bg-gradient-to-br from-accent/25 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9rem] font-extrabold leading-none text-paper/10">
                {themeConfig.brandMark}
              </span>
            </div>
            <div className="absolute start-0 top-8 rounded-2xl bg-surface p-4 text-ink shadow-soft">
              <Sparkles size={28} className="text-accentDark" />
            </div>
            <div className="absolute end-2 top-1/3 rounded-2xl bg-surface p-4 text-ink shadow-soft">
              <Layers3 size={28} className="text-accentDark" />
            </div>
            <div className="absolute bottom-8 start-1/3 rounded-2xl bg-surface p-4 text-ink shadow-soft">
              <BadgeCheck size={28} className="text-accentDark" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow">01</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              {t.home.aboutTitle}
            </h2>
          </div>
          <p className="max-w-3xl text-xl leading-loose text-ink/80">{businessConfig.about}</p>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">02</p>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
                {t.home.servicesTitle}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-accentDark hover:text-ink"
            >
              {t.home.servicesLink}
              <ArrowLeft aria-hidden="true" size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {businessConfig.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.id} className="card-surface">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-paper">
                    <Icon aria-hidden="true" size={24} />
                  </div>
                  <p className="mt-6 text-xs font-bold tracking-widest text-accentDark">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-ink">{service.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper">
        <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mt-3 text-paper/75">{t.home.ctaText}</p>
          </div>
          <WhatsAppButton />
        </div>
      </section>
    </>
  );
}
