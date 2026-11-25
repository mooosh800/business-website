import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { buildServiceWhatsAppUrl } from '../utils/whatsapp';

export function Services() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.services.title} description={businessConfig.about} />

      <section className="relative isolate overflow-hidden border-b border-line bg-void py-24">
        <img
          src={businessConfig.hero.image}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        <div className="container-shell relative">
          <p className="eyebrow">{businessConfig.displayName}</p>
          <h1 className="mt-5 text-5xl font-bold text-star sm:text-6xl">{t.services.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-silver/80">{t.services.intro}</p>
        </div>
      </section>

      {businessConfig.services.map((service, index) => (
        <section
          key={service.id}
          className="container-shell py-16 lg:py-24"
          aria-labelledby={`${service.id}-title`}
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="image-frame float-slow">
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[380px]"
              />
            </div>

            <div>
              <p className="text-5xl font-bold text-gold/80">0{index + 1}</p>
              <h2
                id={`${service.id}-title`}
                className="mt-5 text-3xl font-bold leading-snug text-star sm:text-4xl"
              >
                {service.name}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-loose text-silver/85">
                {service.description}
              </p>
              {'note' in service && service.note && (
                <p className="mt-4 max-w-xl border-r-2 border-gold/60 pr-4 text-sm leading-loose text-muted">
                  {service.note}
                </p>
              )}
              <div className="mt-9">
                <WhatsAppButton
                  label={t.services.request}
                  href={buildServiceWhatsAppUrl(service.name)}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
