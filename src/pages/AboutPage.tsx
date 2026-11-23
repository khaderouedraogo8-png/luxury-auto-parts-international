import { Seo } from "../components/seo/Seo";
import { ButtonLink } from "../components/ui/ButtonLink";
import { company } from "../data/company";
import { productCategories } from "../data/products";

export function AboutPage() {
  return (
    <>
      <Seo
        title={`À propos — ${company.legalName}`}
        description={`${company.legalName} commercialise des pièces de carrosserie automobile et propose des prestations de pose, de remplacement et d’installation. ${company.slogan}`}
        path="/a-propos"
      />

      <section className="relative overflow-hidden border-b border-silver/10">
        <img
          src="/images/about.jpg"
          alt="Ligne de carrosserie d’un véhicule"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crimson">
            Identité
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] text-ivory sm:text-6xl">
            {company.legalName}
          </h1>
          <p className="mt-6 max-w-xl text-xl italic text-ivory">« {company.slogan} »</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold uppercase text-ivory">
            Notre domaine d’activité
          </h2>
          <p className="mt-5 text-base leading-relaxed text-silver">
            {company.legalName} est une entreprise spécialisée dans la commercialisation de pièces
            de carrosserie automobile et dans les services professionnels de pose, de remplacement
            et d’installation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-silver">
            L’offre s’adresse aux automobilistes comme aux professionnels à la recherche d’un
            interlocuteur clair pour le vitrage, les pare-chocs, l’éclairage et les accessoires
            extérieurs. Chaque demande est traitée à partir des informations du véhicule et du
            besoin exprimé.
          </p>
          <p className="mt-4 text-base leading-relaxed text-silver">
            La proposition de valeur repose sur trois piliers : des pièces de carrosserie
            sélectionnées pour leur usage, une compétence technique pour la mise en place, et un
            contact direct pour avancer sans détour.
          </p>
        </div>
        <aside className="mt-10 border border-silver/15 bg-steel p-6 lg:col-span-5 lg:mt-0">
          <h2 className="font-display text-xl uppercase text-ivory">Spécialités</h2>
          <ul className="mt-4 space-y-3 text-sm text-silver">
            {productCategories.map((item) => (
              <li key={item.slug} className="border-b border-silver/10 pb-3">
                {item.title}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ButtonLink to="/contact">Nous contacter</ButtonLink>
          </div>
        </aside>
      </section>
    </>
  );
}
