import { useMemo, useState, type FormEvent } from "react";
import { productCategories } from "../../data/products";
import { services } from "../../data/services";
import { inquiryMessage, whatsappUrl } from "../../lib/whatsapp";

const options = [
  ...productCategories.map((item) => ({
    value: item.slug,
    label: item.title,
    topic: item.whatsappTopic,
  })),
  ...services.map((item) => ({
    value: item.slug,
    label: item.title,
    topic: item.whatsappTopic,
  })),
  { value: "autre", label: "Autre demande", topic: "une pièce automobile ou une prestation" },
];

type Errors = Partial<Record<"name" | "phone" | "need", string>>;

type Props = {
  defaultNeed?: string;
  intent?: "renseignement" | "devis";
  idPrefix?: string;
};

export function InquiryForm({ defaultNeed, intent = "renseignement", idPrefix = "inquiry" }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState(defaultNeed ?? "");
  const [vehicle, setVehicle] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const selected = useMemo(
    () => options.find((item) => item.value === need),
    [need],
  );

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "Indiquez votre nom.";
    if (!phone.trim()) next.phone = "Indiquez un numéro de téléphone.";
    else if (!/^[0-9+\s().-]{8,20}$/.test(phone.trim())) {
      next.phone = "Le numéro saisi ne semble pas valide.";
    }
    if (!need) next.need = "Sélectionnez le type de pièce ou de prestation.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    const prefix =
      intent === "devis"
        ? "Je souhaite obtenir un devis. "
        : "";
    const message = inquiryMessage({
      topic: selected?.topic,
      vehicle: vehicle.trim() || undefined,
      name: name.trim(),
      phone: phone.trim(),
      details: `${prefix}${details.trim()}`.trim() || undefined,
    });

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "mt-2 w-full border border-silver/20 bg-carbon px-4 py-3 text-sm text-ivory placeholder:text-silver-dim focus:border-crimson focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="text-sm text-silver">
            Nom <span className="text-crimson">*</span>
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
          {errors.name ? <p className="mt-1 text-sm text-crimson">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="text-sm text-silver">
            Téléphone <span className="text-crimson">*</span>
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
          />
          {errors.phone ? <p className="mt-1 text-sm text-crimson">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-need`} className="text-sm text-silver">
          Pièce ou prestation <span className="text-crimson">*</span>
        </label>
        <select
          id={`${idPrefix}-need`}
          name="need"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className={fieldClass}
        >
          <option value="">Sélectionnez une option</option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.need ? <p className="mt-1 text-sm text-crimson">{errors.need}</p> : null}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-vehicle`} className="text-sm text-silver">
          Marque et modèle du véhicule <span className="text-silver-dim">(facultatif)</span>
        </label>
        <input
          id={`${idPrefix}-vehicle`}
          name="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          placeholder="Exemple : Toyota Corolla 2018"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-details`} className="text-sm text-silver">
          Message <span className="text-silver-dim">(facultatif)</span>
        </label>
        <textarea
          id={`${idPrefix}-details`}
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-crimson py-3.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-crimson-hover sm:w-auto sm:px-8"
      >
        {intent === "devis" ? "Demander un devis sur WhatsApp" : "Envoyer via WhatsApp"}
      </button>

      <p className="text-xs leading-relaxed text-silver-dim">
        Le formulaire ouvre WhatsApp avec un message prérempli. Aucun serveur d’e-mail n’est
        configuré à ce stade : votre demande est transmise directement sur le numéro WhatsApp
        officiel de l’entreprise.
      </p>
    </form>
  );
}
