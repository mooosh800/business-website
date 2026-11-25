import { Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-void/80 py-9">
      <div className="container-shell flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2 font-semibold text-star">
          <Sparkles aria-hidden="true" size={16} className="text-gold" />
          {businessConfig.name}
        </span>
        <span>
          © 2026 {t.footer.rights} — {businessConfig.displayName}
        </span>
      </div>
    </footer>
  );
}
