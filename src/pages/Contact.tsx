import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CopyButton } from '../components/CopyButton';

export function Contact() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.contact.title} description={businessConfig.hero.description} />

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
          <p className="eyebrow">{businessConfig.name}</p>
          <h1 className="mt-5 text-5xl font-bold text-star sm:text-6xl">{t.contact.title}</h1>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold/10 text-gold">
                <MessageCircle aria-hidden="true" size={22} />
              </span>
              <h2 className="text-2xl font-bold text-star">{t.contact.infoTitle}</h2>
            </div>

            <dl className="mt-9 space-y-8">
              <div>
                <dt className="text-sm font-semibold text-muted">{t.contact.numberLabel}</dt>
                <dd dir="ltr" className="mt-2 text-start text-xl font-bold text-star">
                  {businessConfig.contact.whatsappNumber}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-muted">{t.contact.addressLabel}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-star">
                  {businessConfig.contact.address}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton label={t.contact.direct} />
              <CopyButton value={businessConfig.contact.whatsappNumber} />
            </div>
          </div>

          <div className="card-surface">
            <h2 className="text-2xl font-bold text-star">{t.contact.locationTitle}</h2>
            <div className="mt-9 flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold">
                <MapPin aria-hidden="true" size={24} />
              </span>
              <p className="text-lg leading-relaxed text-star">
                {businessConfig.contact.address}
              </p>
            </div>

            {businessConfig.contact.mapsUrl && (
              <a
                href={businessConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-star"
              >
                <MapPin aria-hidden="true" size={18} />
                {t.contact.maps}
              </a>
            )}

            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-line bg-night/70 p-4 text-silver/80">
              <Phone aria-hidden="true" size={18} className="text-gold" />
              <span dir="ltr" className="text-start text-sm">
                {businessConfig.contact.whatsappNumber}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-night/40 py-24 text-center">
        <div className="container-shell">
          <p className="eyebrow">{businessConfig.displayName}</p>
          <h2 dir="ltr" className="mx-auto mt-5 max-w-4xl text-3xl font-bold text-star sm:text-5xl">
            {t.contact.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-silver/80">{t.contact.finalText}</p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
