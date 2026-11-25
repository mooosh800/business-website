import { MessageCircle } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { buildGeneralWhatsAppUrl } from '../utils/whatsapp';

type WhatsAppButtonProps = {
  variant?: 'solid' | 'outline' | 'floating';
  label?: string;
  href?: string;
  className?: string;
};

export function WhatsAppButton({
  variant = 'solid',
  label,
  href,
  className = '',
}: WhatsAppButtonProps) {
  const { t } = useLocale();
  const text = label ?? t.common.whatsapp;
  const url = href ?? buildGeneralWhatsAppUrl();

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsapp}
        className={`fixed bottom-6 start-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-void shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-star ${className}`}
      >
        <MessageCircle aria-hidden="true" size={24} strokeWidth={2.4} />
      </a>
    );
  }

  const classes = variant === 'solid' ? 'btn-primary' : 'btn-outline bg-surface/40';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} ${className}`}
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={2.4} />
      <span>{text}</span>
    </a>
  );
}
