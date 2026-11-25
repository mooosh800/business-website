import { BadgeCheck, Layers3, Sparkles, type LucideIcon } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { buildServiceWhatsAppUrl } from '../utils/whatsapp';

const serviceIcons: LucideIcon[] = [Sparkles, Layers3, BadgeCheck];

export function Services() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.services.title} description={businessConfig.about} />

      <section className="bg-ink py-20 text-paper">
        <div className="container-shell">
          <p className="eyebrow-light">{businessConfig.type}</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">{t.services.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-paper/75">{t.services.intro}</p>
        </div>
      </section>

      {businessConfig.services.map((service, index) => {
        const Icon = serviceIcons[index];
        return (
          <section
            key={service.id}
            className={index % 2 === 0 ? 'bg-paper' : 'bg-surface'}
            aria-labelledby={`${service.id}-title`}
          >
            <div className="container-shell grid gap-8 py-16 lg:grid-cols-[0.35fr_1.2fr_0.9fr] lg:items-center lg:py-20">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-extrabold text-accentDark">
                  0{index + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-paper">
                  <Icon aria-hidden="true" size={24} />
                </span>
              </div>

              <div>
                <h2 id={`${service.id}-title`} className="text-3xl font-extrabold text-ink">
                  {service.name}
                </h2>
                <p className="mt-4 max-w-xl leading-loose text-muted">{service.description}</p>
              </div>

              <div className="lg:justify-self-end">
                <WhatsAppButton
                  href={buildServiceWhatsAppUrl(service.name)}
                  label={t.services.request}
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
