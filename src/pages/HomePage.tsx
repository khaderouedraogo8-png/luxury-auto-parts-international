import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function HomePage() {
  return (
    <>
      <Seo
        title={`${company.legalName} — Fourniture de pièces de carrosserie et pose`}
        description="Votre partenaire pour la fourniture de pièces de carrosserie automobile et leur installation professionnelle à Ouagadougou. Vitres, pare-brise, pare-chocs, phares et feux."
        path="/"
      />

      {/* B. Hero section */}
      <section className="relative bg-dark-surface text-dark-on-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 z-10">
            <p className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold">
              La qualité au service de votre véhicule.
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.1] text-dark-on-surface text-balance">
              L'excellence automobile, jusque dans les moindres détails.
            </h1>
            <p className="font-body text-base md:text-lg text-dark-on-surface-variant text-pretty max-w-prose leading-relaxed">
              Votre partenaire pour la fourniture de pièces de carrosserie et leur installation professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/produits"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-argent-metallique text-dark-on-surface font-label text-sm font-semibold transition-colors duration-150 hover:bg-dark-surface-container"
              >
                <span>Découvrir nos pièces</span>
              </Link>
              <Link
                to="/contact#devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-dark-surface-container"
              >
                <span>Demander un devis</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-dark-outline-variant bg-dark-surface-container-low shadow-xl">
              <img
                src="/images/hero.jpg"
                alt="Véhicule automobile haut de gamme mettant en valeur les phares, le pare-chocs avant et le pare-brise"
                className="w-full aspect-[16/10] object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* C. Section de présentation (Deux pôles complémentaires) */}
      <section className="bg-light-surface py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="max-w-3xl flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
              Fourniture & Installation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-light-on-surface leading-tight text-balance">
              Bien plus que des pièces automobiles. Une solution complète.
            </h2>
            <p className="font-body text-base text-light-on-surface-variant text-pretty leading-relaxed">
              Vous pouvez commander une pièce de carrosserie seule ou opter pour un accompagnement complet incluant la fourniture et l'intervention technique sur votre véhicule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
            {/* Bloc 1 : Fourniture */}
            <article className="flex flex-col h-full bg-light-surface-container-low border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden bg-noir-profond">
                <img
                  src="/images/intro.jpg"
                  alt="Pièces de carrosserie automobile sélectionnées et préparées pour la fourniture"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                <h3 className="font-headline text-2xl font-semibold text-light-on-surface">
                  Fourniture de pièces de carrosserie
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Pare-brise, vitres, pare-chocs avant et arrière, phares avant, feux arrière et accessoires de carrosserie adaptés à votre véhicule.
                </p>
                <div>
                  <Link
                    to="/produits"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Explorer nos catégories</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Bloc 2 : Prestations techniques */}
            <article className="flex flex-col h-full bg-light-surface-container-low border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden bg-noir-profond">
                <img
                  src="/images/service-pose.jpg"
                  alt="Technicien effectuant l'installation précise d'une pièce automobile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                <h3 className="font-headline text-2xl font-semibold text-light-on-surface">
                  Pose, remplacement et installation
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Intervention technique soignée pour la pose de pare-brise et vitres, le remplacement de composants endommagés et l'installation d'éléments de carrosserie.
                </p>
                <div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Découvrir nos prestations</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* D. Section catégories de pièces */}
      <section className="bg-light-surface-container-low py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
                Catalogue
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-light-on-surface">
                Nos pièces de carrosserie
              </h2>
            </div>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-on-surface hover:text-light-primary transition-colors duration-150"
            >
              <span>Voir toutes les pièces</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-4">
            {/* Catégorie 1 : Pare-brise et vitres */}
            <article className="flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full bg-noir-profond overflow-hidden">
                <img
                  src="/images/vitres-pare-brise.jpg"
                  alt="Pare-brise et vitres automobiles"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-title text-xl font-semibold text-light-on-surface">
                  Pare-brise et vitres
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Pare-brise avant, lunettes arrière et vitres latérales disponibles à la fourniture seule ou avec pose.
                </p>
                <footer className="pt-4 border-t border-light-outline-variant mt-2">
                  <Link
                    to="/produits/vitres-et-pare-brise"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Demander des informations</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </footer>
              </div>
            </article>

            {/* Catégorie 2 : Pare-chocs */}
            <article className="flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full bg-noir-profond overflow-hidden">
                <img
                  src="/images/pare-chocs.jpg"
                  alt="Pare-chocs avant et arrière"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-title text-xl font-semibold text-light-on-surface">
                  Pare-chocs
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Pare-chocs avant et arrière respectant les lignes et fixations d'origine de votre carrosserie.
                </p>
                <footer className="pt-4 border-t border-light-outline-variant mt-2">
                  <Link
                    to="/produits/pare-chocs"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Demander des informations</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </footer>
              </div>
            </article>

            {/* Catégorie 3 : Phares avant */}
            <article className="flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full bg-noir-profond overflow-hidden">
                <img
                  src="/images/phares-avant.jpg"
                  alt="Phares avant automobiles"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-title text-xl font-semibold text-light-on-surface">
                  Phares avant
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Blocs optiques avant pour restituer la visibilité nocturne et la signature lumineuse du véhicule.
                </p>
                <footer className="pt-4 border-t border-light-outline-variant mt-2">
                  <Link
                    to="/produits/phares-avant"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Demander des informations</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </footer>
              </div>
            </article>

            {/* Catégorie 4 : Feux arrière */}
            <article className="flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="aspect-[4/3] w-full bg-noir-profond overflow-hidden">
                <img
                  src="/images/feux-arriere.jpg"
                  alt="Feux arrière automobiles"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-title text-xl font-semibold text-light-on-surface">
                  Feux arrière
                </h3>
                <p className="font-body text-sm text-light-on-surface-variant text-pretty flex-1 leading-relaxed">
                  Feux arrière gauche, droit et ensembles de signalisation adaptés à l'année et au modèle.
                </p>
                <footer className="pt-4 border-t border-light-outline-variant mt-2">
                  <Link
                    to="/produits/feux-arriere"
                    className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                  >
                    <span>Demander des informations</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </footer>
              </div>
            </article>

            {/* Catégorie 5 : Accessoires de carrosserie */}
            <article className="flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden md:col-span-2 lg:col-span-2 transition-all duration-150 hover:border-argent-metallique shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="aspect-[4/3] md:aspect-auto w-full h-full bg-noir-profond overflow-hidden">
                  <img
                    src="/images/accessoires-carrosserie.jpg"
                    alt="Accessoires et composants de carrosserie"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title text-xl font-semibold text-light-on-surface">
                      Accessoires de carrosserie
                    </h3>
                    <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                      Rétroviseurs, grilles de calandre, moulures et autres composants extérieurs pour compléter ou restaurer l'esthétique de votre véhicule.
                    </p>
                  </div>
                  <footer className="pt-4 border-t border-light-outline-variant">
                    <Link
                      to="/produits/accessoires-carrosserie"
                      className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150"
                    >
                      <span>Demander des informations</span>
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        arrow_forward
                      </span>
                    </Link>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* E. Section prestations */}
      <section className="bg-light-surface py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-light-outline-variant bg-noir-profond shadow-md">
              <img
                src="/images/service-remplacement.jpg"
                alt="Intervention technique de pose et remplacement de carrosserie"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
                Prestations techniques
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-light-on-surface leading-tight text-balance">
                La précision dans chaque intervention.
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-light-outline-variant border-y border-light-outline-variant">
              <div className="py-4 flex items-start gap-4">
                <span className="material-symbols-outlined text-[24px] text-light-primary mt-0.5 shrink-0" aria-hidden="true">
                  build
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-body text-base font-semibold text-light-on-surface">
                    Installation de pare-brise et de vitres
                  </h3>
                  <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                    Pose soignée garantissant étanchéité, alignement et sécurité de conduite.
                  </p>
                </div>
              </div>
              <div className="py-4 flex items-start gap-4">
                <span className="material-symbols-outlined text-[24px] text-light-primary mt-0.5 shrink-0" aria-hidden="true">
                  autorenew
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-body text-base font-semibold text-light-on-surface">
                    Remplacement de composants endommagés
                  </h3>
                  <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                    Dépose propre et remplacement des optiques, pare-chocs ou vitrages fissurés.
                  </p>
                </div>
              </div>
              <div className="py-4 flex items-start gap-4">
                <span className="material-symbols-outlined text-[24px] text-light-primary mt-0.5 shrink-0" aria-hidden="true">
                  precision_manufacturing
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-body text-base font-semibold text-light-on-surface">
                    Pose de composants de carrosserie
                  </h3>
                  <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                    Montage et ajustement précis des pièces fournies directement sur votre véhicule.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-noir-profond text-dark-on-surface font-label text-sm font-semibold transition-colors duration-150 hover:bg-light-primary"
              >
                <span>Voir nos prestations</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* F. Section pourquoi nous choisir */}
      <section className="bg-light-surface-container-low py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
              Engagements
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-light-on-surface">
              Pourquoi choisir Luxury Auto Parts International
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-4">
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                layers
              </span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">
                Fourniture et installation
              </h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Une offre combinée permettant d'obtenir la pièce adaptée et sa pose professionnelle au même endroit.
              </p>
            </div>
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                verified
              </span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">
                Approche orientée qualité
              </h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Une sélection rigoureuse des pièces de carrosserie et un soin constant apporté aux finitions.
              </p>
            </div>
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                search_check
              </span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">
                Recherche accompagnée
              </h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Nous vous aidons à identifier la référence exacte selon la marque, le modèle et l'année du véhicule.
              </p>
            </div>
            <div className="bg-light-surface border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-light-primary" aria-hidden="true">
                support_agent
              </span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">
                Interlocuteur direct
              </h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Un contact rapide par téléphone ou WhatsApp pour étudier votre demande et préparer votre devis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* G. Section processus */}
      <section className="bg-light-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
              Méthode de travail
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-light-on-surface">
              Votre besoin. Notre expertise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-4">
            <div className="border-t-2 border-noir-profond pt-6 flex flex-col gap-2">
              <span className="font-mono text-sm font-semibold text-light-primary tabular-nums">Étape 1</span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">Identification</h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Vous identifiez la pièce de carrosserie ou la prestation d'installation recherchée.
              </p>
            </div>
            <div className="border-t-2 border-noir-profond pt-6 flex flex-col gap-2">
              <span className="font-mono text-sm font-semibold text-light-primary tabular-nums">Étape 2</span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">Transmission</h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Vous nous transmettez les informations sur votre véhicule (marque, modèle, année, photo).
              </p>
            </div>
            <div className="border-t-2 border-noir-profond pt-6 flex flex-col gap-2">
              <span className="font-mono text-sm font-semibold text-light-primary tabular-nums">Étape 3</span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">Étude technique</h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Nous étudions votre demande pour vérifier la correspondance exacte et les modalités d'intervention.
              </p>
            </div>
            <div className="border-t-2 border-rouge-profond pt-6 flex flex-col gap-2">
              <span className="font-mono text-sm font-semibold text-light-primary tabular-nums">Étape 4</span>
              <h3 className="font-title text-lg font-semibold text-light-on-surface">Proposition</h3>
              <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                Nous vous recontactons rapidement pour vous proposer une solution claire et personnalisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H. Section contact / conversion */}
      <section className="bg-dark-surface text-dark-on-surface py-16 md:py-24 border-t border-dark-outline-variant">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center flex flex-col items-center gap-6">
          <span className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold">
            Contact direct
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-dark-on-surface text-balance">
            Votre véhicule mérite les bonnes pièces.
          </h2>
          <p className="font-body text-base md:text-lg text-dark-on-surface-variant text-pretty max-w-2xl leading-relaxed">
            Besoin d'une pièce, d'un remplacement ou d'une installation ? Contactez-nous pour obtenir des informations ou demander un devis.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <Link
              to="/contact#devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-dark-surface-container"
            >
              <span>Demander un devis</span>
            </Link>
            <a
              href={company.whatsapp.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded border border-argent-metallique text-dark-on-surface font-label text-sm font-semibold transition-colors duration-150 hover:bg-dark-surface-container"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                chat
              </span>
              <span>Nous contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
