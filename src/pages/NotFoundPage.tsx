import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title={`Page introuvable — ${company.legalName}`}
        description="La page demandée n’existe pas."
        path="/404"
      />
      <section className="bg-light-surface py-24 md:py-32 border-b border-light-outline-variant">
        <div className="max-w-2xl mx-auto px-page-margin text-center flex flex-col items-center gap-gutter-md">
          <span className="font-mono text-title-lg text-light-primary font-bold">404</span>
          <h1 className="font-display text-display-md-mobile md:text-display-md text-light-on-surface">
            Page introuvable
          </h1>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            Le lien suivi ne correspond à aucune page active du site Luxury Auto Parts International.
          </p>
          <div className="pt-gutter-sm">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-xl py-3.5 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-noir-profond transition-colors duration-state-change"
            >
              <span>Retour à l’accueil</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
