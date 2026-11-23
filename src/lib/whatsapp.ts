import { company, defaultWhatsAppMessage } from "../data/company";

export function whatsappUrl(message: string = defaultWhatsAppMessage) {
  const params = new URLSearchParams({ text: message });
  return `${company.whatsapp.baseUrl}?${params.toString()}`;
}

export function inquiryMessage(options: {
  topic?: string;
  vehicle?: string;
  name?: string;
  phone?: string;
  details?: string;
}) {
  const lines = [
    `Bonjour ${company.legalName},`,
    options.topic
      ? `je souhaite obtenir des renseignements sur ${options.topic} pour mon véhicule.`
      : "je souhaite obtenir des renseignements concernant une pièce automobile.",
  ];

  if (options.vehicle) {
    lines.push(`Véhicule : ${options.vehicle}.`);
  }
  if (options.name) {
    lines.push(`Nom : ${options.name}.`);
  }
  if (options.phone) {
    lines.push(`Téléphone : ${options.phone}.`);
  }
  if (options.details) {
    lines.push(`Message : ${options.details}`);
  }

  return lines.join(" ");
}
