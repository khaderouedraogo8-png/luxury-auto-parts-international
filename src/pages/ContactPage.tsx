import { useState, useEffect, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function ContactPage() {
  const location = useLocation();

  // Quote Form State
  const [qName, setQName] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qBrand, setQBrand] = useState("");
  const [qModel, setQModel] = useState("");
  const [qYear, setQYear] = useState("");
  const [qCategory, setQCategory] = useState("Pare-brise et vitres");
  const [qService, setQService] = useState("Fourniture + Pose / Installation");
  const [qNotes, setQNotes] = useState("");
  const [quoteWaUrl, setQuoteWaUrl] = useState<string | null>(null);

  // Quick Contact Form State
  const [cName, setCName] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cMsg, setCMsg] = useState("");
  const [contactWaUrl, setContactWaUrl] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash === "#devis") {
      const el = document.getElementById("devis");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Bonjour ${company.legalName}, demande de devis : ${qCategory} (${qService}) pour ${qBrand} ${qModel} ${qYear}. Contact : ${qName} (${qPhone}).`;
    if (qNotes.trim()) {
      text += ` Précisions : ${qNotes.trim()}`;
    }
    const cleanNumber = company.whatsapp.e164;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    setQuoteWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Bonjour ${company.legalName}, message de ${cName} (${cPhone}) : ${cMsg}`;
    const cleanNumber = company.whatsapp.e164;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    setContactWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Seo
        title={`Contact & Demande de Devis — ${company.legalName}`}
        description={`Contactez ${company.legalName} par téléphone au ${company.phone.display} ou WhatsApp au ${company.whatsapp.display}. Devis immédiat pour pièces de carrosserie et pose à Ouagadougou.`}
        path="/contact"
      />

      {/* En-tête Contact & Conversion */}
      <section className="bg-dark-surface text-dark-on-surface border-b border-dark-outline-variant">
        <div className="max-w-7xl mx-auto px-page-margin md:px-gutter-xl py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-label text-label-sm uppercase tracking-widest text-argent-metallique">
              Contact &amp; Devis
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-dark-on-surface text-balance">
              Parlons de votre véhicule.
            </h1>
            <p className="font-body text-body-lg text-dark-on-surface-variant text-pretty max-w-prose">
              Obtenez rapidement une réponse pour la fourniture d’une pièce de carrosserie ou pour une prestation complète de pose et remplacement à Ouagadougou.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-gutter-md">
            <a
              href={company.phone.href}
              className="flex items-center justify-between p-gutter-lg rounded-lg bg-dark-surface-container-low border border-dark-outline-variant hover:border-argent-metallique transition-colors duration-state-change group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase tracking-wider text-argent-metallique">
                  Téléphone direct
                </span>
                <span className="font-mono text-title-lg text-dark-on-surface tabular-nums">
                  {company.phone.display}
                </span>
              </div>
              <span className="w-11 h-11 rounded bg-light-primary text-light-on-primary inline-flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-state-change">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  call
                </span>
              </span>
            </a>

            <a
              href={`${company.whatsapp.baseUrl}?text=${encodeURIComponent("Bonjour Luxury Auto Parts International, je souhaite demander un devis.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-gutter-lg rounded-lg bg-dark-surface-container-low border border-dark-outline-variant hover:border-argent-metallique transition-colors duration-state-change group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-label text-label-sm uppercase tracking-wider text-argent-metallique">
                  WhatsApp direct
                </span>
                <span className="font-mono text-title-lg text-dark-on-surface tabular-nums">
                  {company.whatsapp.display}
                </span>
              </div>
              <span className="w-11 h-11 rounded bg-dark-surface-container text-dark-on-surface border border-argent-metallique inline-flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-state-change">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  chat
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Formulaires Contact + Devis détaillé */}
      <section id="devis" className="bg-light-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-page-margin md:px-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">

          {/* Formulaire de demande de devis détaillé */}
          <div className="lg:col-span-7 bg-light-surface-container-low border border-light-outline-variant rounded-lg p-gutter-lg md:p-gutter-xl flex flex-col gap-gutter-lg">
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-headline-md text-light-on-surface">
                Demande de devis détaillé
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Précisez votre véhicule et le type d’intervention souhaité.
              </p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-gutter-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Nom et prénom *</span>
                  <input
                    type="text"
                    required
                    value={qName}
                    onChange={(e) => setQName(e.target.value)}
                    placeholder="Votre nom complet"
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Téléphone / WhatsApp *</span>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    value={qPhone}
                    onChange={(e) => setQPhone(e.target.value)}
                    placeholder="+226 70 00 00 00"
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-mono text-mono-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Marque *</span>
                  <input
                    type="text"
                    required
                    value={qBrand}
                    onChange={(e) => setQBrand(e.target.value)}
                    placeholder="Ex. : Toyota"
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Modèle *</span>
                  <input
                    type="text"
                    required
                    value={qModel}
                    onChange={(e) => setQModel(e.target.value)}
                    placeholder="Ex. : Hilux"
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Année *</span>
                  <input
                    type="number"
                    required
                    min="1980"
                    max="2035"
                    inputMode="numeric"
                    value={qYear}
                    onChange={(e) => setQYear(e.target.value)}
                    placeholder="2022"
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-mono text-mono-md tabular-nums text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Catégorie de pièce *</span>
                  <select
                    value={qCategory}
                    onChange={(e) => setQCategory(e.target.value)}
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  >
                    <option value="Pare-brise et vitres">Pare-brise et vitres</option>
                    <option value="Pare-chocs avant et arrière">Pare-chocs avant et arrière</option>
                    <option value="Phares avant">Phares avant</option>
                    <option value="Feux arrière">Feux arrière</option>
                    <option value="Accessoires de carrosserie">Accessoires de carrosserie</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-lg text-light-on-surface">Prestation souhaitée *</span>
                  <select
                    value={qService}
                    onChange={(e) => setQService(e.target.value)}
                    className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  >
                    <option value="Fourniture + Pose / Installation">Fourniture + Pose / Installation</option>
                    <option value="Achat de pièce seule">Achat de pièce seule</option>
                    <option value="Installation / Remplacement uniquement">Installation / Remplacement uniquement</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">Détails complémentaires</span>
                <textarea
                  rows={3}
                  value={qNotes}
                  onChange={(e) => setQNotes(e.target.value)}
                  placeholder="Numéro de châssis / VIN si disponible, côté gauche/droit, précisions sur la finition..."
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-xl py-3 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-noir-profond transition-colors duration-state-change cursor-pointer"
              >
                <span>Envoyer ma demande de devis</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              {quoteWaUrl && (
                <div className="p-gutter-md rounded border border-success bg-light-surface flex flex-col gap-2" role="status">
                  <div className="flex items-center gap-2 text-success font-label text-label-lg">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">check_circle</span>
                    <span>Demande préparée avec succès</span>
                  </div>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    Si WhatsApp ne s’est pas ouvert automatiquement, cliquez ci-dessous pour transmettre votre demande à notre équipe :
                  </p>
                  <a
                    href={quoteWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start px-gutter-md py-2 rounded bg-noir-profond text-dark-on-surface font-label text-label-sm hover:bg-rouge-profond transition-colors duration-state-change"
                  >
                    <span>Ouvrir sur WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      open_in_new
                    </span>
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Formulaire de contact rapide */}
          <div className="lg:col-span-5 bg-light-surface border border-light-outline-variant rounded-lg p-gutter-lg md:p-gutter-xl flex flex-col gap-gutter-lg">
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-headline-md text-light-on-surface">
                Contact rapide
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Une question générale ou un renseignement immédiat ?
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-gutter-md">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">Nom *</span>
                <input
                  type="text"
                  required
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">Téléphone *</span>
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  value={cPhone}
                  onChange={(e) => setCPhone(e.target.value)}
                  placeholder="+226..."
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-mono text-mono-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">Message *</span>
                <textarea
                  rows={4}
                  required
                  value={cMsg}
                  onChange={(e) => setCMsg(e.target.value)}
                  placeholder="Votre question ou demande..."
                  className="w-full rounded border border-light-outline-variant bg-light-surface px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded border border-noir-profond text-noir-profond font-label text-label-lg hover:bg-noir-profond hover:text-dark-on-surface transition-colors duration-state-change cursor-pointer"
              >
                <span>Envoyer le message</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  chat
                </span>
              </button>

              {contactWaUrl && (
                <div className="p-gutter-md rounded border border-success bg-light-surface-container-low flex flex-col gap-2" role="status">
                  <span className="font-label text-label-sm text-success">
                    Message prêt pour WhatsApp
                  </span>
                  <a
                    href={contactWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start px-gutter-md py-2 rounded bg-noir-profond text-dark-on-surface font-label text-label-sm hover:bg-rouge-profond transition-colors duration-state-change"
                  >
                    <span>Ouvrir dans WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      open_in_new
                    </span>
                  </a>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
