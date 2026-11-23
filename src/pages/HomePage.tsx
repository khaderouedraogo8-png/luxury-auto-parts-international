import { ArrowRight, MessageCircle, Phone, Shield, Sparkles, Wrench, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";
import { productCategories } from "../data/products";
import { services } from "../data/services";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

const reasons = [
  {
    icon: Sparkles,
    title: "Qualité des pièces",
    text: "Nous commercialisons des pièces de carrosserie choisies pour leur pertinence technique : vitrage, pare-chocs, phares, feux et accessoires.",
  },
  {
    icon: Shield,
    title: "Spécialisation automobile",
    text: "Notre activité est concentrée sur l’habillage extérieur, la protection et l’éclairage du véhicule — un domaine que nous traitons avec méthode.",
  },
  {
    icon: Wrench,
    title: "Prestations techniques",
    text: "La commercialisation s’accompagne de la pose, du remplacement et de l’installation, pour un suivi de la pièce jusqu’au véhicule.",
  },
  {
    icon: Handshake,
    title: "Accompagnement direct",
    text: "Vous échangez directement avec l’équipe par téléphone ou WhatsApp pour préciser le besoin et obtenir une orientation claire.",
  },
];

export function HomePage() {
  return (
    <>
      <Seo
        title={`${company.legalName} — Pièces de carrosserie et pose`}
        description="Pièces automobiles de carrosserie : vitres et pare-brise, pare-chocs, phares, feux arrière. Pose, remplacement et installation. La qualité au service de votre véhicule."
        path="/"
      />

      <section className="relative min-h-[88svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Véhicule moderne illustrant la carrosserie et l’éclairage automobile"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:px-8 lg:pb-24 lg:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-silver">
            {company.legalName}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            L’exigence de qualité
            <span className="block text-silver">pour chaque détail</span>
            <span className="block text-crimson">de votre véhicule.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg italic text-ivory/90">« {company.slogan} »</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-silver sm:text-lg">
            Découvrez notre sélection de pièces automobiles de carrosserie et nos prestations
            professionnelles de pose, de remplacement et d’installation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/produits">Découvrir nos produits</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Nous contacter
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-silver/10 bg-carbon-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden">
            <img
              src="/images/intro.jpg"
              alt="Travail de précision sur un véhicule"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-carbon/85 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-silver">
                Carrosserie · Vitrage · Éclairage
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="L’entreprise"
              title="Pièces de carrosserie et savoir-faire technique"
            />
            <p className="mt-6 text-base leading-relaxed text-silver">
              {company.legalName} commercialise des pièces automobiles dédiées à l’habillage
              extérieur, à la protection et à l’éclairage du véhicule. L’offre couvre le vitrage, les
              pare-chocs, les phares avant, les feux arrière et les accessoires de carrosserie.
            </p>
            <p className="mt-4 text-base leading-relaxed text-silver">
              En complément de la vente, l’entreprise propose un accompagnement technique : pose,
              remplacement et installation. L’objectif est simple : vous orienter vers la pièce
              adaptée, puis la mettre en place avec soin lorsque vous le souhaitez.
            </p>
            <div className="mt-8">
              <ButtonLink to="/a-propos" variant="secondary">
                En savoir plus
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-silver/15 pb-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Nos spécialités"
              title="Les familles de pièces que nous traitons"
              description="Une présentation commerciale par catégories, pour identifier rapidement votre besoin et demander un renseignement."
            />
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.16em] text-ivory hover:text-white"
            >
              Voir le catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((item, index) => (
              <article
                key={item.slug}
                className={`group overflow-hidden border border-silver/15 bg-steel ${
                  index === 0 ? "md:col-span-2 xl:col-span-1 xl:row-span-2" : ""
                }`}
              >
                <Link to={`/produits/${item.slug}`} className="block">
                  <div className={`overflow-hidden ${index === 0 ? "aspect-[16/10] xl:aspect-[4/5]" : "aspect-[16/10]"}`}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver">{item.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-crimson">
                      Demander un renseignement <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-silver/10">
        <img
          src="/images/services-band.jpg"
          alt="Atelier automobile"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-carbon/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Prestations techniques"
            title="Pose, remplacement et installation"
            description="LUXURY AUTO PARTS INTERNATIONAL ne se limite pas à la commercialisation : l’entreprise intervient aussi sur le véhicule."
          />
          <div className="mt-12 grid gap-px bg-silver/15 md:grid-cols-3">
            {services.map((item) => (
              <article key={item.slug} className="bg-carbon p-8">
                <h3 className="font-display text-2xl font-semibold uppercase text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/services">Demander une intervention</ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title={`Pourquoi choisir ${company.name} ?`}
            description="Quatre engagements de méthode, formulés sans promesses excessives : qualité, spécialisation, technique et contact direct."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((item) => (
              <article key={item.title} className="border-l-2 border-crimson pl-5">
                <item.icon className="h-5 w-5 text-silver" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-silver/10 bg-steel">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold uppercase leading-tight text-ivory sm:text-5xl">
              Vous recherchez une pièce automobile ou une prestation de pose ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-silver">
              Notre équipe est disponible pour vous renseigner et vous orienter vers la solution
              adaptée à votre besoin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={company.phone.href}>
                <Phone className="h-4 w-4" /> Appeler maintenant
              </ButtonLink>
              <ButtonLink href={whatsappUrl(inquiryMessage({}))} external variant="secondary">
                <MessageCircle className="h-4 w-4" /> Contacter sur WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
