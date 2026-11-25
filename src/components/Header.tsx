import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Sparkles, X } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { WhatsAppButton } from './WhatsAppButton';
import { businessConfig } from '../config/business';

export function Header() {
  const { t } = useLocale();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/services', label: t.nav.services, end: false },
    { to: '/contact', label: t.nav.contact, end: false },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 px-1 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'border-gold text-star' : 'border-transparent text-muted hover:text-gold'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <Sparkles aria-hidden="true" size={20} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold text-star">
              {businessConfig.displayName}
            </span>
            <span className="block truncate text-[10px] font-semibold tracking-[0.22em] text-muted">
              {businessConfig.latinName}
            </span>
          </span>
        </Link>

        <nav aria-label={t.nav.menu} className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/70 text-star md:hidden"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={t.nav.menu}
          className="border-t border-line bg-surface/95 pb-6 pt-4 shadow-soft md:hidden"
        >
          <div className="container-shell flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                    isActive ? 'bg-gold text-void' : 'text-star hover:bg-night'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <WhatsAppButton className="mt-3 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
