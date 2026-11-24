import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../../data/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Emblem */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-argent-metallique"
        >
          <img
            src={company.logo.emblem}
            alt={company.legalName}
            className="h-10 w-auto object-contain"
            width={44}
            height={32}
          />
          <div className="flex flex-col leading-none">
            <span className="font-headline text-[17px] font-semibold tracking-wide text-dark-on-surface uppercase">
              Luxury Auto Parts
            </span>
            <span className="font-label text-[11px] font-semibold tracking-[0.2em] text-argent-metallique uppercase">
              International
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-label text-sm font-semibold tracking-wide py-1 transition-colors duration-150 ${
                isActive
                  ? "text-dark-on-surface border-b-2 border-rouge-profond"
                  : "text-argent-metallique hover:text-dark-on-surface"
              }`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/produits"
            className={({ isActive }) =>
              `font-label text-sm font-semibold tracking-wide py-1 transition-colors duration-150 ${
                isActive
                  ? "text-dark-on-surface border-b-2 border-rouge-profond"
                  : "text-argent-metallique hover:text-dark-on-surface"
              }`
            }
          >
            Nos pièces
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-label text-sm font-semibold tracking-wide py-1 transition-colors duration-150 ${
                isActive
                  ? "text-dark-on-surface border-b-2 border-rouge-profond"
                  : "text-argent-metallique hover:text-dark-on-surface"
              }`
            }
          >
            Nos prestations
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `font-label text-sm font-semibold tracking-wide py-1 transition-colors duration-150 ${
                isActive
                  ? "text-dark-on-surface border-b-2 border-rouge-profond"
                  : "text-argent-metallique hover:text-dark-on-surface"
              }`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-label text-sm font-semibold tracking-wide py-1 transition-colors duration-150 ${
                isActive
                  ? "text-dark-on-surface border-b-2 border-rouge-profond"
                  : "text-argent-metallique hover:text-dark-on-surface"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact#devis"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold tracking-wide transition-colors duration-150 hover:bg-dark-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-argent-metallique"
          >
            <span>Demander un devis</span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu-drawer"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded border border-dark-outline-variant bg-dark-surface-container-low text-dark-on-surface transition-colors hover:bg-dark-surface-container"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-dark-surface-container-low border-t border-dark-outline-variant px-5 py-6"
        >
          <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-3 rounded font-label text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-dark-surface-container text-dark-on-surface border-l-2 border-rouge-profond"
                    : "text-argent-metallique hover:bg-dark-surface-container hover:text-dark-on-surface"
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/produits"
              className={({ isActive }) =>
                `px-4 py-3 rounded font-label text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-dark-surface-container text-dark-on-surface border-l-2 border-rouge-profond"
                    : "text-argent-metallique hover:bg-dark-surface-container hover:text-dark-on-surface"
                }`
              }
            >
              Nos pièces
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-4 py-3 rounded font-label text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-dark-surface-container text-dark-on-surface border-l-2 border-rouge-profond"
                    : "text-argent-metallique hover:bg-dark-surface-container hover:text-dark-on-surface"
                }`
              }
            >
              Nos prestations
            </NavLink>
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                `px-4 py-3 rounded font-label text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-dark-surface-container text-dark-on-surface border-l-2 border-rouge-profond"
                    : "text-argent-metallique hover:bg-dark-surface-container hover:text-dark-on-surface"
                }`
              }
            >
              À propos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-3 rounded font-label text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-dark-surface-container text-dark-on-surface border-l-2 border-rouge-profond"
                    : "text-argent-metallique hover:bg-dark-surface-container hover:text-dark-on-surface"
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-3 border-t border-dark-outline-variant grid grid-cols-1 gap-2">
              <Link
                to="/contact#devis"
                className="inline-flex items-center justify-center px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold"
              >
                Demander un devis
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={company.phone.href}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-dark-outline-variant text-dark-on-surface font-label text-xs font-semibold"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    call
                  </span>
                  <span>Appeler</span>
                </a>
                <a
                  href={company.whatsapp.baseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-dark-outline-variant text-dark-on-surface font-label text-xs font-semibold"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    chat
                  </span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
