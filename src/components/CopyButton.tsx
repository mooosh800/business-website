import { useEffect, useRef, useState } from 'react';
import { Copy } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

function fallbackCopy(value: string) {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export function CopyButton({ value }: { value: string }) {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = () => {
    const showCopied = () => {
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    };

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(value).then(showCopied).catch(() => {
        fallbackCopy(value);
        showCopied();
      });
    } else {
      fallbackCopy(value);
      showCopied();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleCopy} className="btn-outline">
        <Copy aria-hidden="true" size={18} />
        <span>{copied ? t.common.copied : t.common.copy}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? t.common.copied : ''}
      </span>
    </div>
  );
}
