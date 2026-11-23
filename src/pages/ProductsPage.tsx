import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";
import { productCategories } from "../data/products";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

export function ProductsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return productCategories;
    return productCategories.filter((item) =>
      `${item.title} ${item.excerpt} ${item.details.join(" ")}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <Seo
        title={`Nos produits — ${company.legalName}`}
        description="Catalogue par catégories : vitres et pare-brise, pare-chocs, phares avant, feux arrière et accessoires de carrosserie. Demandez un renseignement ou un devis."
        path="/produits"
      />

      <section className="border-b border-silver/10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crimson">
            Catalogue
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] text-ivory sm:text-6xl">
            Nos produits
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver">
            Présentation par familles de pièces. Aucun stock ni tarif n’est affiché ici : chaque
            demande est étudiée selon votre véhicule. Utilisez le filtre pour retrouver une
            catégorie, puis contactez-nous.
          </p>
          <label className="mt-8 block max-w-md">
            <span className="sr-only">Filtrer les catégories</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une catégorie (pare-brise, phare…)"
              className="w-full border border-silver/20 bg-steel px-4 py-3 text-sm text-ivory placeholder:text-silver-dim focus:border-crimson focus:outline-none"
            />
          </label>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10">
          {filtered.length === 0 ? (
            <p className="text-silver">Aucune catégorie ne correspond à cette recherche.</p>
          ) : (
            filtered.map((item) => (
              <article
                key={item.slug}
                className="grid overflow-hidden border border-silver/15 bg-carbon-soft lg:grid-cols-2"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-64 w-full object-cover lg:h-full"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <h2 className="font-display text-3xl font-semibold uppercase text-ivory">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-silver">{item.description}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-silver">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-crimson" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink to={`/produits/${item.slug}`}>Voir la catégorie</ButtonLink>
                    <ButtonLink
                      href={whatsappUrl(inquiryMessage({ topic: item.whatsappTopic }))}
                      external
                      variant="secondary"
                    >
                      WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export function ProductCategoryPage({ slug }: { slug: string }) {
  const item = productCategories.find((entry) => entry.slug === slug);
  if (!item) return null;

  return (
    <>
      <Seo
        title={`${item.title} — ${company.legalName}`}
        description={item.excerpt}
        path={`/produits/${item.slug}`}
        image={item.image}
      />
      <section className="relative min-h-[42vh] overflow-hidden">
        <img src={item.image} alt={item.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 lg:px-8">
          <div>
            <Link to="/produits" className="text-sm text-silver hover:text-ivory">
              ← Nos produits
            </Link>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase text-ivory sm:text-6xl">
              {item.title}
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-silver">{item.description}</p>
          <ul className="mt-6 space-y-2 text-silver">
            {item.details.map((detail) => (
              <li key={detail} className="border-b border-silver/10 py-2">
                {detail}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-silver-dim">
            Pour une identification précise, indiquez la marque, le modèle et l’année de votre
            véhicule. Les disponibilités sont confirmées lors de l’échange.
          </p>
        </div>
        <aside className="border border-silver/15 bg-steel p-6 lg:col-span-5">
          <h2 className="font-display text-2xl uppercase text-ivory">Demander un renseignement</h2>
          <p className="mt-3 text-sm text-silver">
            Un message WhatsApp prérempli mentionnant cette catégorie.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink
              href={whatsappUrl(inquiryMessage({ topic: item.whatsappTopic }))}
              external
            >
              WhatsApp — {item.shortTitle}
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Formulaire de contact
            </ButtonLink>
          </div>
        </aside>
      </section>
    </>
  );
}
