import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navLinks } from "../../data/navigation";
import { productCategories } from "../../data/products";
import { services } from "../../data/services";
import { whatsappUrl } from "../../lib/whatsapp";

const copyrightYear = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="border-t border-silver/15 bg-carbon-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <img
            src={company.logo.emblem}
            alt={company.legalName}
            className="h-16 w-auto"
            width={220}
            height={64}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver">
            {company.legalName} — {company.activity}
          </p>
          <p className="mt-4 font-display text-lg italic tracking-wide text-ivory">
            « {company.slogan} »
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-silver transition-colors hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
            Produits
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {productCategories.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/produits/${item.slug}`}
                  className="text-silver transition-colors hover:text-ivory"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
            Prestations & contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/services"
                  className="text-silver transition-colors hover:text-ivory"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a href={company.phone.href} className="text-ivory hover:text-white">
                Téléphone : {company.phone.display}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-white"
              >
                WhatsApp : {company.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-silver/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-silver-dim sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {copyrightYear} {company.legalName}. Tous droits réservés.
          </p>
          <p>Pièces de carrosserie · Pose · Remplacement · Installation</p>
        </div>
      </div>
    </footer>
  );
}
