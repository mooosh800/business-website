import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { businessConfig } from '../config/business';
import { useLocale } from '../context/LocaleContext';
import { WhatsAppButton } from './WhatsAppButton';

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
    `border-b-2 px-1 py-2 text-sm font-bold transition-colors ${
      isActive ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="min-w-0">
          <span className="block truncate text-base font-extrabold text-ink sm:text-lg">
            {businessConfig.name}
          </span>
          <span className="block truncate text-[11px] font-medium text-muted">
            {businessConfig.type}
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
        >
          {open ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={t.nav.menu}
          className="border-t border-line bg-surface px-5 pb-6 pt-4 shadow-soft md:hidden"
        >
          <div className="container-shell flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                    isActive ? 'bg-ink text-paper' : 'text-ink hover:bg-paper'
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
