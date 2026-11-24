import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Eye,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";
import { productCategories, type ProductCategory } from "../data/products";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

const pieceSpecs: Record<string, { badge: string; highlight: string; fits: string }> = {
  "vitres-et-pare-brise": {
    badge: "VERRE FEUILLETÉ SÉCURITÉ",
    highlight: "Double vitrage acoustique et traitement anti-UV",
    fits: "Berlines, SUV, 4x4 et utilitaires",
  },
  "pare-chocs": {
    badge: "ABS & POLYPROPYLÈNE HAUTE RÉSISTANCE",
    highlight: "Conformité géométrique d'origine et absorbeurs de chocs",
    fits: "Boucliers avant et arrière complets",
  },
  "phares-avant": {
    badge: "OPTIQUE LED & XÉNON CRISTALLIN",
    highlight: "Lentille polycarbonate traitée anti-jaunissement",
    fits: "Projecteurs avec signature lumineuse",
  },
  "feux-arriere": {
    badge: "SIGNATURE LED RUBIS",
    highlight: "Boîtier étanche IP67 et lentille fumée haute visibilité",
    fits: "Blocs complets et signalisation",
  },
  "accessoires-carrosserie": {
    badge: "FINITION CARBONE & SPORT",
    highlight: "Ajustement direct sur points d'ancrage d'origine",
    fits: "Rétroviseurs, calandres, spoilers",
  },
};

const protocolSteps = [
  {
    step: "01",
    title: "Diagnostic & Dépose sécurisée",
    desc: "Examen minutieux des points d'ancrage, dépose méticuleuse de l'élément endommagé sans altérer le châssis ni les faisceaux électriques.",
  },
  {
    step: "02",
    title: "Calage & Géométrie millimétrée",
    desc: "Ajustement millimétré des jeux d'interstices de carrosserie, alignement rigoureux des boucliers, optiques et vitrages avec les lignes d'origine du constructeur.",
  },
  {
    step: "03",
    title: "Contrôle d'étanchéité & Réglage faisceaux",
    desc: "Application de cordons d'étanchéité polymère haute résistance pour les pare-brise, et calibrage de la hauteur des projecteurs avant pour une visibilité nocturne optimale.",
  },
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickCategory, setQuickCategory] = useState("Pare-brise / Vitrage");
  const [quickVehicle, setQuickVehicle] = useState("");

  const filteredProducts =
    selectedCategory === "all"
      ? productCategories
      : productCategories.filter((item) => item.slug === selectedCategory);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const vehicleText = quickVehicle.trim() || "Véhicule à préciser";
    const msg = `Bonjour LUXURY AUTO PARTS INTERNATIONAL,\nJe recherche la pièce suivante : *${quickCategory}*\nPour mon véhicule : *${vehicleText}*.\n\nPouvez-vous me confirmer la disponibilité et le tarif ? Merci.`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Seo
        title={`${company.legalName} — Pièces de carrosserie & pose automobile`}
        description="Spécialiste à Ouagadougou en pièces de carrosserie : pare-brise, vitres, pare-chocs, phares LED, feux arrière et prestations de pose en atelier. La qualité au service de votre véhicule."
        path="/"
      />

      {/* 1. HERO SECTION ASYMÉTRIQUE & CONFIGURATEUR EXPRESS */}
      <section className="relative overflow-hidden border-b hairline bg-carbon tech-grid">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Colonne Gauche : Titre tranchant & Recherche de disponibilité (7 cols) */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="inline-flex items-center gap-2.5 border hairline-border-strong bg-steel/90 px-3.5 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-silver">
                    Carrosserie • Vitrage • Éclairage Automobile
                  </span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.94] tracking-tight text-ivory sm:text-6xl lg:text-[68px]">
                  Pièces de carrosserie <br className="hidden sm:inline" />
                  <span className="text-silver">d’origine & adaptables.</span><br />
                  <span className="text-crimson">Pose de précision.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver sm:text-lg">
                  Fourniture et installation soignée à Ouagadougou de{" "}
                  <strong className="font-medium text-ivory">vitres et pare-brise, pare-chocs avant et arrière, blocs optiques LED, feux arrière</strong> et accessoires extérieurs pour berlines, 4x4 et utilitaires.
                </p>
              </div>

              {/* Module de Recherche Express de Pièce (WhatsApp direct) */}
              <div className="corner-tick mt-10 border hairline-border-strong bg-steel p-6 sm:p-7 glow-crimson">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-silver">
                    Recherche express de disponibilité
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-crimson">
                    RÉPONSE DIRECTE ATELIER
                  </span>
                </div>

                <form onSubmit={handleQuickSearch} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-12">
                  <div className="sm:col-span-5">
                    <label htmlFor="quickCat" className="sr-only">Famille de pièce</label>
                    <select
                      id="quickCat"
                      value={quickCategory}
                      onChange={(e) => setQuickCategory(e.target.value)}
                      className="w-full border hairline-border-strong bg-carbon px-3.5 py-3 text-sm text-ivory focus:border-crimson focus:outline-none"
                    >
                      <option value="Pare-brise / Vitrage">Vitres & Pare-brise</option>
                      <option value="Pare-chocs avant / arrière">Pare-chocs Av / Ar</option>
                      <option value="Phare avant LED / Xénon">Phares avant</option>
                      <option value="Feu arrière">Feux arrière</option>
                      <option value="Accessoire de carrosserie">Accessoires carrosserie</option>
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="quickVeh" className="sr-only">Modèle et année</label>
                    <input
                      id="quickVeh"
                      type="text"
                      placeholder="Ex: Toyota Prado 2020..."
                      value={quickVehicle}
                      onChange={(e) => setQuickVehicle(e.target.value)}
                      className="w-full border hairline-border-strong bg-carbon px-3.5 py-3 text-sm text-ivory placeholder-silver-dim focus:border-crimson focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      className="flex h-full w-full items-center justify-center gap-2 bg-crimson px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson-hover"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Demander
                    </button>
                  </div>
                </form>

                <p className="mt-3 font-mono text-[11px] text-silver-dim">
                  Orientation précise selon marque, modèle et année • Contrôle de compatibilité avant montage.
                </p>
              </div>
            </div>

            {/* Colonne Droite : Vitrine Visuelle Technique (5 cols) */}
            <div className="flex flex-col lg:col-span-5">
              <div className="relative min-h-[380px] flex-1 overflow-hidden border hairline-border-strong bg-steel sm:min-h-[460px]">
                <img
                  src="/images/intro.jpg"
                  alt="Carrosserie automobile et optiques de précision"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />

                {/* Repères techniques superposés façon schéma d'ingénierie */}
                <div className="absolute left-4 right-4 top-4 flex items-start justify-between font-mono text-[11px]">
                  <span className="border hairline bg-carbon/90 px-3 py-1 text-silver backdrop-blur-sm">
                    SPEC // ORIGINE & ADAPTABLE
                  </span>
                  <span className="bg-crimson px-3 py-1 font-semibold text-white">
                    POSE EN ATELIER
                  </span>
                </div>

                {/* Cartouche d'informations bas de vitrine */}
                <div className="absolute inset-x-0 bottom-0 border-t hairline bg-carbon/95 p-5 backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-3 text-left">
                    <div>
                      <div className="font-mono text-[10px] uppercase text-silver-dim">Vitrage</div>
                      <div className="mt-0.5 font-display text-sm font-semibold uppercase text-ivory sm:text-base">
                        Pare-brise
                      </div>
                    </div>
                    <div className="border-l hairline pl-3">
                      <div className="font-mono text-[10px] uppercase text-silver-dim">Protection</div>
                      <div className="mt-0.5 font-display text-sm font-semibold uppercase text-ivory sm:text-base">
                        Pare-chocs
                      </div>
                    </div>
                    <div className="border-l hairline pl-3">
                      <div className="font-mono text-[10px] uppercase text-silver-dim">Optiques</div>
                      <div className="mt-0.5 font-display text-sm font-semibold uppercase text-ivory sm:text-base">
                        Phares LED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATALOGUE DYNAMIQUE PAR FAMILLES DE PIÈCES */}
      <section id="catalogue" className="border-b hairline bg-carbon py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-crimson">
                01 / INVENTAIRE & PIÈCES DE CARROSSERIE
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ivory sm:text-5xl">
                Catalogue Pièces de Carrosserie
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-silver">
              Filtrez par famille ou sélectionnez la pièce recherchée. Chaque pièce est inspectée avant remise ou pose dans notre atelier.
            </p>
          </div>

          {/* Onglets de filtrage interactifs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`whitespace-nowrap px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                selectedCategory === "all"
                  ? "border border-crimson bg-crimson text-white"
                  : "border hairline bg-steel text-silver hover:border-silver/30 hover:text-white"
              }`}
            >
              Tout le catalogue
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`whitespace-nowrap px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  selectedCategory === cat.slug
                    ? "border border-crimson bg-crimson text-white"
                    : "border hairline bg-steel text-silver hover:border-silver/30 hover:text-white"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>

          {/* Grille des pièces de carrosserie */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item: ProductCategory) => {
              const spec = pieceSpecs[item.slug];
              const waItemMsg = `Bonjour LUXURY AUTO PARTS INTERNATIONAL, je souhaite vérifier la disponibilité et le tarif pour : *${item.title}*.`;

              return (
                <article
                  key={item.slug}
                  className="group flex flex-col justify-between border hairline-border-strong bg-steel transition-all duration-300 hover:border-crimson"
                >
                  <div>
                    {/* Image studio HD */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-carbon">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      {spec ? (
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                          <span className="bg-carbon/90 px-2 py-1 font-mono text-[10px] tracking-wider text-silver backdrop-blur-sm">
                            {spec.badge}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {/* Contenu technique */}
                    <div className="p-6">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-crimson">
                        FAMILLE CARROSSERIE
                      </div>
                      <h3 className="mt-1.5 font-display text-2xl font-bold uppercase tracking-wide text-ivory">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-silver">
                        {item.excerpt}
                      </p>

                      {/* Points clés d'équipement */}
                      <ul className="mt-5 space-y-2 border-t hairline pt-4 text-xs text-silver">
                        {item.details.slice(0, 3).map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-crimson" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions de la carte */}
                  <div className="border-t hairline bg-carbon/60 p-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={whatsappUrl(waItemMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-crimson py-2.5 text-center font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson-hover"
                      >
                        Demander sur WhatsApp
                      </a>
                      <Link
                        to={`/produits/${item.slug}`}
                        className="border hairline p-2.5 text-silver transition-colors hover:border-ivory hover:text-white"
                        title="Voir la fiche détaillée"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 border hairline px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-silver transition-colors hover:border-ivory hover:text-white"
            >
              Consulter l'ensemble de notre gamme <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. PROTOCOLE D'ATELIER & POSE DE PRÉCISION */}
      <section className="relative overflow-hidden border-b hairline bg-carbon-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Colonne gauche : Photo officielle technicien (5 cols) */}
            <div className="lg:col-span-5">
              <div className="corner-tick relative overflow-hidden border hairline-border-strong bg-steel">
                <img
                  src="/images/service-pose.jpg"
                  alt="Technicien carrossier professionnel en intervention"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-crimson">
                    ATELIER QUALIFIÉ
                  </span>
                  <p className="mt-1 font-display text-xl uppercase text-ivory">
                    Intervention soignée & ajustement garanti
                  </p>
                  <p className="mt-1 text-xs text-silver">
                    Chaque composant posé respecte les cotes et tolérances constructeur.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite : Les 3 étapes du protocole (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-crimson">
                02 / PROTOCOLE D'ATELIER
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-ivory sm:text-5xl">
                Pose, remplacement & installation professionnelle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-silver">
                Nous ne nous contentons pas de vendre des pièces : notre équipe assure l'ensemble du suivi technique sur votre véhicule.
              </p>

              <div className="mt-10 space-y-6">
                {protocolSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-5 border-l-2 border-crimson bg-steel/60 p-5 transition-colors hover:bg-steel"
                  >
                    <span className="font-mono text-2xl font-bold text-crimson">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase text-ivory">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-silver">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-crimson px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-crimson-hover"
                >
                  Découvrir tous les services atelier
                </Link>
                <a
                  href={company.phone.href}
                  className="inline-flex items-center gap-2 border hairline px-5 py-3 font-mono text-xs uppercase tracking-wider text-silver transition-colors hover:border-ivory hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Prendre rendez-vous atelier
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ENGAGEMENTS & RIGUEUR DE MÉTHODE */}
      <section className="border-b hairline bg-carbon py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-crimson">
              03 / NOS ENGAGEMENTS
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-ivory sm:text-4xl">
              Pourquoi confier votre carrosserie à {company.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-silver">
              Des principes clairs, sans fioritures marketing, centrés sur la sécurité et le rendu de votre véhicule.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border hairline bg-steel p-6">
              <ShieldCheck className="h-8 w-8 text-crimson" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ivory">
                Conformité des pièces
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-silver">
                Matériaux rigoureusement sélectionnés pour respecter les points de fixation et la sécurité passive.
              </p>
            </div>
            <div className="border hairline bg-steel p-6">
              <Eye className="h-8 w-8 text-crimson" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ivory">
                Clarté & Optiques LED
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-silver">
                Blocs optiques et feux certifiés garantissant faisceau net, étanchéité et transparence durable.
              </p>
            </div>
            <div className="border hairline bg-steel p-6">
              <Wrench className="h-8 w-8 text-crimson" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ivory">
                Savoir-faire Atelier
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-silver">
                Pose et calage réalisés par des techniciens carrossiers expérimentés et outillés.
              </p>
            </div>
            <div className="border hairline bg-steel p-6">
              <MessageCircle className="h-8 w-8 text-crimson" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ivory">
                Ligne directe réactive
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-silver">
                Échange immédiat par téléphone ou WhatsApp avec réponse concrète sur le stock et les délais.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BANDEAU D'INTERVENTION RAPIDE & CONTACT DIRECT */}
      <section className="bg-steel py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="corner-tick border hairline-border-strong bg-carbon p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-widest text-crimson">
                  URGENCE BRIS DE GLACE OU CHOC CARROSSERIE ?
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ivory sm:text-5xl">
                  Contactez l’atelier directement.
                </h2>
                <p className="mt-4 text-base text-silver">
                  Indiquez-nous la marque et le modèle de votre véhicule. Nous vous répondons immédiatement sur la disponibilité de la pièce et le créneau de pose.
                </p>
              </div>
              <div className="flex flex-col gap-3.5 sm:flex-row lg:col-span-4 lg:flex-col">
                <a
                  href={company.phone.href}
                  className="flex items-center justify-center gap-2.5 bg-crimson px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-white transition-colors hover:bg-crimson-hover"
                >
                  <Phone className="h-5 w-5" />
                  Appeler : {company.phone.display}
                </a>
                <a
                  href={whatsappUrl(inquiryMessage({}))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border hairline px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-ivory transition-colors hover:border-ivory hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  WhatsApp : {company.whatsapp.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
