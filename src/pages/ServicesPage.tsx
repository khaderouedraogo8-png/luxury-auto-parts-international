import { ButtonLink } from "../components/ui/ButtonLink";
import { Seo } from "../components/seo/Seo";
import { InquiryForm } from "../components/contact/InquiryForm";
import { company } from "../data/company";
import { services } from "../data/services";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

export function ServicesPage() {
  return (
    <>
      <Seo
        title={`Nos services — ${company.legalName}`}
        description="Prestations techniques : pose de pièces automobiles, remplacement d’éléments endommagés et installation d’équipements de carrosserie."
        path="/services"
      />

      <section className="border-b border-silver/10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crimson">
            Atelier
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] text-ivory sm:text-6xl">
            Nos services
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver">
            {company.legalName} complète la vente de pièces par un accompagnement technique pour
            la remise en état extérieure des véhicules : pose, remplacement et installation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {services.map((item, index) => (
          <article
            key={item.slug}
            id={item.slug}
            className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>img]:order-2" : ""}`}
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold uppercase text-ivory">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-silver">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-silver">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-crimson" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink
                  href={whatsappUrl(inquiryMessage({ topic: item.whatsappTopic }))}
                  external
                >
                  Demander cette intervention
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-silver/10 bg-carbon-soft px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-ivory">
              Demander une intervention
            </h2>
            <p className="mt-4 text-silver">
              Précisez la prestation souhaitée et, si possible, le véhicule concerné. Le message
              est transmis via WhatsApp.
            </p>
          </div>
          <InquiryForm intent="devis" />
        </div>
      </section>
    </>
  );
}
