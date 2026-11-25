import { MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CopyButton } from '../components/CopyButton';

export function Contact() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.contact.title} description={businessConfig.contact.address} />

      <section className="bg-ink py-20 text-paper">
        <div className="container-shell">
          <p className="eyebrow-light">{businessConfig.type}</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">{t.contact.title}</h1>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface">
            <h2 className="text-2xl font-extrabold text-ink">{t.contact.infoTitle}</h2>

            <dl className="mt-8 space-y-7">
              <div>
                <dt className="text-sm font-bold text-muted">{t.contact.numberLabel}</dt>
                <dd dir="ltr" className="mt-2 text-start text-xl font-bold text-ink">
                  {businessConfig.contact.whatsappNumber}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-muted">{t.contact.addressLabel}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-ink">
                  {businessConfig.contact.address}
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton label={t.contact.direct} />
              <CopyButton value={businessConfig.contact.whatsappNumber} />
            </div>
          </div>

          <div className="card-surface">
            <h2 className="text-2xl font-extrabold text-ink">{t.contact.locationTitle}</h2>
            <div className="mt-8 flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-paper">
                <MapPin aria-hidden="true" size={24} />
              </span>
              <p className="text-lg leading-relaxed text-ink">
                {businessConfig.contact.address}
              </p>
            </div>

            {businessConfig.contact.mapsUrl && (
              <a
                href={businessConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accentDark hover:text-ink"
              >
                <MapPin aria-hidden="true" size={18} />
                {t.contact.maps}
              </a>
            )}

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-paper p-4 text-muted">
              <Phone aria-hidden="true" size={18} />
              <span dir="ltr" className="text-start text-sm">
                {businessConfig.contact.whatsappNumber}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-center text-paper">
        <div className="container-shell">
          <h2 dir="ltr" className="text-3xl font-extrabold sm:text-5xl">
            {t.contact.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-paper/75">{t.contact.finalText}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
