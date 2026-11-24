import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function AboutPage() {
  return (
    <>
      <Seo
        title={`À propos — ${company.legalName}`}
        description={`${company.legalName} à Ouagadougou : spécialiste de la fourniture de pièces de carrosserie automobile et des prestations techniques de pose, remplacement et installation. ${company.slogan}`}
        path="/a-propos"
      />

      {/* Introduction institutionnelle */}
      <section className="bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant">
        <div className="max-w-7xl mx-auto px-page-margin md:px-gutter-xl py-12 md:py-20 flex flex-col gap-gutter-xl">
          <div className="max-w-3xl flex flex-col gap-gutter-md">
            <span className="font-label text-label-sm uppercase tracking-widest text-argent-metallique">
              À propos
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-dark-on-surface text-balance">
              {company.legalName}
            </h1>
            <p className="font-body text-body-lg text-dark-on-surface-variant text-pretty">
              « {company.slogan} » — Votre partenaire spécialisé dans la fourniture de pièces de carrosserie automobile et les prestations techniques de pose, remplacement et installation à Ouagadougou.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-dark-outline-variant bg-dark-surface-container-low">
            <img
              src="/images/about.jpg"
              alt="Atelier et centre automobile Luxury Auto Parts International"
              className="w-full aspect-[16/9] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Positionnement et deux domaines d'activité */}
      <section className="bg-light-surface py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-page-margin md:px-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
          <div className="lg:col-span-5 flex flex-col gap-gutter-md">
            <span className="font-label text-label-sm uppercase tracking-widest text-light-primary">
              Positionnement
            </span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-light-on-surface text-balance">
              Une expertise dédiée à la carrosserie et au vitrage.
            </h2>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
              Luxury Auto Parts International répond aux besoins des conducteurs et professionnels exigeants en réunissant sous une même enseigne l’approvisionnement en pièces de carrosserie et l’exécution technique de leur pose.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                inventory_2
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">
                Fourniture de pièces automobiles
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Vitres et pare-brise, pare-chocs avant et arrière, phares avant, feux arrière et accessoires de carrosserie adaptés à chaque véhicule.
              </p>
            </div>
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                handyman
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">
                Prestations techniques
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Pose de pièces automobiles, remplacement de composants endommagés, installation de pare-brise et vitres et interventions liées à la carrosserie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements qualité et service */}
      <section className="bg-light-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-page-margin md:px-gutter-xl flex flex-col gap-gutter-xl">
          <div className="max-w-2xl flex flex-col gap-gutter-sm">
            <span className="font-label text-label-sm uppercase tracking-widest text-light-primary">
              Nos engagements
            </span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-light-on-surface">
              Qualité, clarté et accompagnement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-sm">
              <h3 className="font-title text-title-lg text-light-on-surface">
                Exigence de qualité
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Chaque pièce proposée et chaque intervention technique vise à préserver l’esthétique, la sécurité et la durabilité du véhicule.
              </p>
            </div>
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-sm">
              <h3 className="font-title text-title-lg text-light-on-surface">
                Liberté de choix
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Le client choisit librement entre l’achat de la pièce seule ou un accompagnement complet incluant la fourniture et la pose.
              </p>
            </div>
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-sm">
              <h3 className="font-title text-title-lg text-light-on-surface">
                Écoute et réactivité
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Un interlocuteur direct par téléphone ou WhatsApp pour étudier chaque besoin avec attention et précision.
              </p>
            </div>
          </div>

          <div className="pt-gutter-md flex flex-col sm:flex-row items-start sm:items-center gap-gutter-md">
            <Link
              to="/contact#devis"
              className="inline-flex items-center justify-center px-gutter-xl py-3.5 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-noir-profond transition-colors duration-state-change"
            >
              Demander un devis
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center justify-center px-gutter-xl py-3.5 rounded border border-noir-profond text-light-on-surface font-label text-label-lg hover:bg-light-surface transition-colors duration-state-change"
            >
              Découvrir nos pièces
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
