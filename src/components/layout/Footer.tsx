import { Link } from "react-router-dom";
import { company } from "../../data/company";

export function Footer() {
  return (
    <footer className="bg-dark-surface-container-low text-dark-on-surface border-t border-dark-outline-variant">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Brand identity */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={company.logo.emblem}
              alt={company.legalName}
              className="h-9 w-auto object-contain"
              width={40}
              height={29}
            />
            <span className="font-headline text-base font-semibold text-dark-on-surface uppercase tracking-wide">
              Luxury Auto Parts International
            </span>
          </div>
          <p className="font-body text-sm text-argent-metallique leading-relaxed">
            « {company.slogan} »
          </p>
          <p className="font-body text-xs text-argent-metallique/80 max-w-sm">
            Fourniture spécialisée de pièces de carrosserie automobile et prestations professionnelles de pose, remplacement et installation.
          </p>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2 flex flex-col gap-2">
          <h3 className="font-label text-xs font-semibold uppercase tracking-wider text-dark-on-surface mb-2">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 font-body text-sm text-argent-metallique">
            <li>
              <Link to="/" className="hover:text-dark-on-surface transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/produits" className="hover:text-dark-on-surface transition-colors">
                Nos pièces
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-dark-on-surface transition-colors">
                Nos prestations
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-dark-on-surface transition-colors">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-dark-on-surface transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Pièces & Prestations */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <h3 className="font-label text-xs font-semibold uppercase tracking-wider text-dark-on-surface mb-2">
            Pièces & Prestations
          </h3>
          <ul className="flex flex-col gap-2 font-body text-sm text-argent-metallique">
            <li>
              <Link to="/produits/vitres-et-pare-brise" className="hover:text-dark-on-surface transition-colors">
                Pare-brise et vitres
              </Link>
            </li>
            <li>
              <Link to="/produits/pare-chocs" className="hover:text-dark-on-surface transition-colors">
                Pare-chocs avant et arrière
              </Link>
            </li>
            <li>
              <Link to="/produits/phares-avant" className="hover:text-dark-on-surface transition-colors">
                Phares avant & Feux arrière
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-dark-on-surface transition-colors">
                Pose, remplacement & installation
              </Link>
            </li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <h3 className="font-label text-xs font-semibold uppercase tracking-wider text-dark-on-surface mb-2">
            Coordonnées directes
          </h3>
          <div className="flex flex-col gap-2.5 font-body text-sm text-argent-metallique">
            <a
              href={company.phone.href}
              className="inline-flex items-center gap-2 hover:text-dark-on-surface font-mono text-sm tabular-nums transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-light-primary" aria-hidden="true">
                call
              </span>
              <span>{company.phone.display}</span>
            </a>
            <a
              href={company.whatsapp.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-dark-on-surface font-mono text-sm tabular-nums transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-light-primary" aria-hidden="true">
                chat
              </span>
              <span>{company.whatsapp.display}</span>
            </a>
            <span className="text-xs text-argent-metallique/70 mt-1">
              Burkina Faso • Zone d'intervention Ouagadougou et expédition
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-xs text-dark-outline">
          <span>© 2026 {company.legalName}. Tous droits réservés.</span>
          <Link to="/a-propos" className="hover:text-argent-metallique transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
