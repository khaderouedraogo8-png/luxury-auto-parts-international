import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../../data/company";
import { navLinks } from "../../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b hairline transition-colors ${
        scrolled ? "border-silver/20 bg-carbon/95 backdrop-blur-md" : "border-transparent bg-carbon/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={company.logo.emblem}
            alt={company.legalName}
            className="h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[260px]"
            width={260}
            height={56}
          />
          <span className="sr-only">{company.legalName}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-ivory" : "text-silver hover:text-ivory"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phone.href}
            className="hidden items-center gap-2 border border-silver/20 px-3 py-2 text-sm text-silver transition-colors hover:border-ivory hover:text-ivory md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone.display}
          </a>
          <Link
            to="/contact"
            className="hidden bg-crimson px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-crimson-hover sm:inline-flex"
          >
            Nous contacter
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-silver/20 text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-silver/15 bg-carbon lg:hidden"
        >
          <nav className="flex flex-col px-4 py-4" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-silver/10 py-3.5 text-base ${
                    isActive ? "text-ivory" : "text-silver"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-crimson py-3 text-center font-display text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Nous contacter
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
