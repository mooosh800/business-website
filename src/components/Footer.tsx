import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-surface py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="font-bold text-ink">{businessConfig.name}</span>
        <span>
          © 2026 {t.footer.rights} — {businessConfig.name}
        </span>
      </div>
    </footer>
  );
}
