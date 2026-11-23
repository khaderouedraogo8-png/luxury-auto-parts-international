import { MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "../components/contact/InquiryForm";
import { Seo } from "../components/seo/Seo";
import { ButtonLink } from "../components/ui/ButtonLink";
import { company } from "../data/company";
import { inquiryMessage, whatsappUrl } from "../lib/whatsapp";

export function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact — ${company.legalName}`}
        description={`Contactez ${company.legalName} par téléphone au ${company.phone.display} ou sur WhatsApp au ${company.whatsapp.display} pour un renseignement ou un devis.`}
        path="/contact"
      />

      <section className="border-b border-silver/10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crimson">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase text-ivory sm:text-6xl">
            Nous contacter
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver">
            Pour un renseignement, un devis ou une intervention, joignez l’équipe par appel
            direct ou WhatsApp. Les formulaires ci-dessous préparent un message clair.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-6 lg:col-span-4">
          <div className="border border-silver/15 bg-steel p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
              Appel
            </p>
            <p className="mt-2 font-display text-2xl text-ivory">{company.phone.display}</p>
            <div className="mt-5">
              <ButtonLink href={company.phone.href}>
                <Phone className="h-4 w-4" /> Appeler maintenant
              </ButtonLink>
            </div>
          </div>
          <div className="border border-silver/15 bg-steel p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
              WhatsApp
            </p>
            <p className="mt-2 font-display text-2xl text-ivory">{company.whatsapp.display}</p>
            <div className="mt-5">
              <ButtonLink href={whatsappUrl(inquiryMessage({}))} external>
                <MessageCircle className="h-4 w-4" /> Ouvrir WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="space-y-12 lg:col-span-8">
          <div>
            <h2 className="font-display text-2xl uppercase text-ivory">
              Demande de renseignements
            </h2>
            <p className="mt-2 mb-6 text-sm text-silver">
              Décrivez votre besoin. L’envoi ouvre WhatsApp avec un message prérempli.
            </p>
            <InquiryForm intent="renseignement" idPrefix="renseignement" />
          </div>
          <div className="border-t border-silver/15 pt-12">
            <h2 className="font-display text-2xl uppercase text-ivory">Demande de devis</h2>
            <p className="mt-2 mb-6 text-sm text-silver">
              Même formulaire, avec une mention explicite de demande de devis dans le message.
            </p>
            <InquiryForm intent="devis" idPrefix="devis" />
          </div>
        </div>
      </section>
    </>
  );
}
