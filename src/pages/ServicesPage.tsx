import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function ServicesPage() {
  return (
    <>
      <Seo
        title={`Nos prestations techniques — ${company.legalName}`}
        description="Pose de pare-brise et vitres, remplacement de composants endommagés et installation soignée de pièces de carrosserie à Ouagadougou. Accompagnement technique complet."
        path="/services"
      />

      {/* En-tête prestations */}
      <section className="bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-4 max-w-3xl">
          <span className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold">
            Interventions techniques
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.1] text-dark-on-surface text-balance">
            Pose, remplacement et installation de carrosserie.
          </h1>
          <p className="font-body text-base md:text-lg text-dark-on-surface-variant text-pretty leading-relaxed">
            De la fourniture de la pièce jusqu'à son montage final sur votre véhicule, bénéficiez d'une prise en charge technique complète et rigoureuse.
          </p>
        </div>
      </section>

      {/* Les 3 prestations principales */}
      <section className="bg-light-surface py-16 md:py-24 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-16">
          {/* Prestation 1 : Pose de pare-brise et de vitres */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-light-outline-variant bg-noir-profond shadow-md">
                <img
                  src="/images/service-remplacement.jpg"
                  alt="Pose de pare-brise et de vitres automobiles"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
                Vitrage automobile
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-light-on-surface">
                Pose de pare-brise et de vitres
              </h2>
              <p className="font-body text-base text-light-on-surface-variant text-pretty leading-relaxed">
                Installation de pare-brise avant, lunettes arrière et vitres latérales avec un ajustement précis et une étanchéité maîtrisée. Nous assurons la fourniture du vitrage et sa pose complète.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact#devis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-noir-profond"
                >
                  <span>Demander un devis pour cette prestation</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Prestation 2 : Remplacement de composants endommagés */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="rounded-lg overflow-hidden border border-light-outline-variant bg-noir-profond shadow-md">
                <img
                  src="/images/service-pose.jpg"
                  alt="Remplacement de composants de carrosserie endommagés"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 flex flex-col gap-4">
              <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
                Remise en état
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-light-on-surface">
                Remplacement de composants endommagés
              </h2>
              <p className="font-body text-base text-light-on-surface-variant text-pretty leading-relaxed">
                Dépose des éléments fissurés ou détériorés (pare-chocs, phares avant, feux arrière, rétroviseurs) et remplacement par des pièces neuves adaptées à votre véhicule.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact#devis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-noir-profond"
                >
                  <span>Demander un devis pour cette prestation</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Prestation 3 : Installation de pièces de carrosserie */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-light-outline-variant bg-noir-profond shadow-md">
                <img
                  src="/images/accessoires-carrosserie.jpg"
                  alt="Installation de pièces de carrosserie et optiques"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
                Montage complet
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-light-on-surface">
                Installation de pièces de carrosserie
              </h2>
              <p className="font-body text-base text-light-on-surface-variant text-pretty leading-relaxed">
                Montage technique des éléments de carrosserie, blocs optiques et accessoires extérieurs avec contrôle d'alignement et de fixation sur votre véhicule.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact#devis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-noir-profond"
                >
                  <span>Demander un devis pour cette prestation</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complémentarité Fourniture + Installation */}
      <section className="bg-dark-surface-container-low text-dark-on-surface py-16 md:py-20 border-b border-dark-outline-variant">
        <div className="max-w-5xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold">
              Solution intégrée
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark-on-surface">
              Fourniture + Pose : un seul interlocuteur.
            </h2>
            <p className="font-body text-base text-dark-on-surface-variant text-pretty leading-relaxed">
              Associez la recherche de votre pièce de carrosserie à son installation technique pour gagner du temps et garantir la compatibilité sur votre véhicule.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/contact#devis"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold hover:bg-dark-surface-container transition-colors"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/22668681869?text=Bonjour%20Luxury%20Auto%20Parts%20International%2C%20je%20souhaite%20un%20devis%20Fourniture%20%2B%20Installation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-argent-metallique text-dark-on-surface font-label text-sm font-semibold hover:bg-dark-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                chat
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
