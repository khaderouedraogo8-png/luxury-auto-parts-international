import { useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";
import { productCategories } from "../data/products";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

export function ProductsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    category: "Vitres et pare-brise",
    serviceOption: "Pièce seule",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleCategorySelect = (categoryTitle: string) => {
    setFormData((prev) => ({ ...prev, category: categoryTitle }));
    const formElement = document.getElementById("demande-piece");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `*Demande de pièce automobile — ${company.legalName}*`,
      `• Nom : ${formData.name}`,
      `• Téléphone : ${formData.phone}`,
      `• Véhicule : ${formData.brand} ${formData.model} (${formData.year})`,
      `• Catégorie : ${formData.category}`,
      `• Option : ${formData.serviceOption}`,
      formData.notes ? `• Précisions : ${formData.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappUrl(msg);
    setWaLink(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Seo
        title={`Nos pièces de carrosserie — ${company.legalName}`}
        description="Catalogue officiel des pièces de carrosserie automobile : vitres et pare-brise, pare-chocs avant et arrière, phares avant, feux arrière et accessoires. Fourniture et pose."
        path="/produits"
      />

      {/* Introduction visuelle */}
      <section className="bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold">
              Fourniture de pièces automobiles
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.1] text-dark-on-surface text-balance">
              Des pièces de carrosserie sélectionnées pour votre véhicule.
            </h1>
            <p className="font-body text-base md:text-lg text-dark-on-surface-variant text-pretty max-w-prose leading-relaxed">
              Commandez la pièce seule ou associez-la à notre prestation de pose professionnelle. Chaque demande est vérifiée selon la marque, le modèle et l'année de votre véhicule.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-dark-outline-variant bg-dark-surface-container-low shadow-lg">
              <img
                src="/images/intro.jpg"
                alt="Sélection de pièces de carrosserie automobile"
                className="w-full aspect-[4/3] object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille des catégories */}
      <section className="bg-light-surface-container-low py-16 md:py-20 border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-light-on-surface">
              Catégories disponibles
            </h2>
            <p className="font-body text-base text-light-on-surface-variant">
              Sélectionnez une catégorie pour pré-remplir votre demande de renseignements ci-dessous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-4">
            {productCategories.map((item, index) => {
              const isWide = index === 4;
              return (
                <article
                  key={item.slug}
                  className={`flex flex-col h-full bg-light-surface border border-light-outline-variant rounded-lg overflow-hidden transition-all duration-150 hover:border-argent-metallique shadow-sm ${
                    isWide ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className={isWide ? "grid grid-cols-1 md:grid-cols-2 h-full" : "flex flex-col h-full"}>
                    <div
                      className={`aspect-[4/3] w-full bg-noir-profond overflow-hidden ${
                        isWide ? "md:aspect-auto h-full" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className={`p-6 flex flex-col justify-between gap-4 flex-1 ${
                        isWide ? "md:p-8" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="font-title text-xl font-semibold text-light-on-surface">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-light-on-surface-variant text-pretty leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>
                      <footer className="pt-4 border-t border-light-outline-variant mt-2 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => handleCategorySelect(item.title)}
                          className="inline-flex items-center gap-2 font-label text-sm font-semibold text-light-primary hover:text-noir-profond transition-colors duration-150 text-left"
                        >
                          <span>Demander des informations</span>
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            arrow_downward
                          </span>
                        </button>
                        <Link
                          to={`/produits/${item.slug}`}
                          className="font-label text-xs text-light-outline hover:text-light-on-surface transition-colors"
                        >
                          Détails
                        </Link>
                      </footer>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire spécialisé */}
      <section id="demande-piece" className="bg-light-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-widest text-light-primary font-semibold">
              Formulaire spécialisé
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-light-on-surface">
              Demande de pièce automobile
            </h2>
            <p className="font-body text-base text-light-on-surface-variant text-pretty">
              Renseignez les caractéristiques de votre véhicule afin que nous identifions la pièce exacte et vous proposions un devis.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Nom et prénom *</span>
                <input
                  type="text"
                  required
                  placeholder="Ex. : Moussa Ouédraogo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-sm text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Numéro de téléphone *</span>
                <div className="relative flex items-center">
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px] text-light-outline absolute left-3 pointer-events-none">
                    call
                  </span>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="+226 70 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded border border-light-outline-variant bg-light-surface pl-10 pr-3.5 py-2.5 font-mono text-sm text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Marque du véhicule *</span>
                <input
                  type="text"
                  required
                  placeholder="Ex. : Toyota, Mercedes..."
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-sm text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Modèle du véhicule *</span>
                <input
                  type="text"
                  required
                  placeholder="Ex. : Prado, C-Class..."
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-sm text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Année du véhicule *</span>
                <input
                  type="number"
                  required
                  min="1980"
                  max="2030"
                  inputMode="numeric"
                  placeholder="Ex. : 2021"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-mono text-sm tabular-nums text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Catégorie de pièce recherchée *</span>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-sm text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                >
                  <option value="Vitres et pare-brise">Vitres et pare-brise</option>
                  <option value="Pare-chocs avant et arrière">Pare-chocs avant et arrière</option>
                  <option value="Phares avant">Phares avant</option>
                  <option value="Feux arrière">Feux arrière</option>
                  <option value="Accessoires et composants de carrosserie">Accessoires et composants de carrosserie</option>
                </select>
              </label>

              <div className="flex flex-col gap-1.5">
                <span className="font-label text-sm font-semibold text-light-on-surface">Option souhaitée *</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center gap-2.5 px-3.5 py-2.5 rounded border border-light-outline-variant bg-light-surface cursor-pointer">
                    <input
                      type="radio"
                      name="service-option"
                      value="Pièce seule"
                      checked={formData.serviceOption === "Pièce seule"}
                      onChange={(e) => setFormData({ ...formData, serviceOption: e.target.value })}
                      className="text-light-primary focus:ring-light-primary"
                    />
                    <span className="font-body text-sm text-light-on-surface">Pièce seule</span>
                  </label>
                  <label className="flex items-center gap-2.5 px-3.5 py-2.5 rounded border border-light-outline-variant bg-light-surface cursor-pointer">
                    <input
                      type="radio"
                      name="service-option"
                      value="Fourniture + Pose"
                      checked={formData.serviceOption === "Fourniture + Pose"}
                      onChange={(e) => setFormData({ ...formData, serviceOption: e.target.value })}
                      className="text-light-primary focus:ring-light-primary"
                    />
                    <span className="font-body text-sm text-light-on-surface">Fourniture + Pose</span>
                  </label>
                </div>
              </div>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-sm font-semibold text-light-on-surface">Description du besoin</span>
              <textarea
                rows={3}
                placeholder="Précisez le côté (gauche/droit, avant/arrière) ou toute information utile..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-sm text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors duration-150 hover:bg-noir-profond"
              >
                <span>Envoyer la demande</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              <a
                href={company.whatsapp.baseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-label text-sm font-semibold text-light-on-surface hover:text-light-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  chat
                </span>
                <span>Envoyer directement via WhatsApp</span>
              </a>
            </div>

            {submitted && (
              <div className="p-4 rounded border border-success bg-light-surface text-light-on-surface flex flex-col gap-2" role="status">
                <div className="flex items-center gap-2 text-success font-label text-sm font-semibold">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    check_circle
                  </span>
                  <span>Récapitulatif de votre demande prêt</span>
                </div>
                <p className="font-body text-sm text-light-on-surface-variant">
                  Transférez votre récapitulatif directement via WhatsApp ou appelez le {company.phone.display} pour validation immédiate.
                </p>
                <div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-noir-profond text-dark-on-surface font-label text-xs font-semibold hover:bg-light-primary transition-colors"
                  >
                    <span>Transmettre sur WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export function ProductCategoryPage({ slug }: { slug: string }) {
  const item = productCategories.find((c) => c.slug === slug);
  if (!item) return null;

  return (
    <>
      <Seo
        title={`${item.title} — ${company.legalName}`}
        description={`${item.description} Fourniture et pose professionnelle à Ouagadougou.`}
        path={`/produits/${slug}`}
      />

      <section className="bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-3">
          <Link
            to="/produits"
            className="inline-flex items-center gap-1 font-label text-xs text-argent-metallique hover:text-dark-on-surface uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_back
            </span>
            <span>Retour au catalogue</span>
          </Link>
          <span className="font-label text-xs uppercase tracking-widest text-argent-metallique font-semibold mt-2">
            Catégorie de carrosserie
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-on-surface">
            {item.title}
          </h1>
          <p className="font-body text-base md:text-lg text-dark-on-surface-variant max-w-2xl leading-relaxed">
            {item.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-light-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 rounded-lg overflow-hidden border border-light-outline-variant bg-noir-profond shadow-md">
            <img src={item.image} alt={item.imageAlt} className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-headline text-2xl font-semibold text-light-on-surface">
                Caractéristiques et détails
              </h2>
              <p className="font-body text-base text-light-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="border-t border-light-outline-variant pt-4">
              <h3 className="font-title text-base font-semibold text-light-on-surface mb-3">
                Éléments couverts dans cette famille :
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 font-body text-sm text-light-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-light-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                to="/produits#demande-piece"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-sm font-semibold transition-colors hover:bg-noir-profond"
              >
                <span>Demander un devis pour cette pièce</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <a
                href={whatsappUrl(inquiryMessage({ topic: item.whatsappTopic }))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-light-outline-variant font-label text-sm font-semibold text-light-on-surface hover:border-noir-profond transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  chat
                </span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
