import { company } from "../../data/company";

export function WhatsAppFloat() {
  return (
    <a
      href={company.whatsapp.baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-noir-profond text-dark-on-surface border border-argent-metallique shadow-lg hover:bg-rouge-profond hover:border-rouge-profond transition-colors duration-150"
    >
      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
        chat
      </span>
      <span className="hidden sm:inline font-label text-xs font-semibold">WhatsApp</span>
    </a>
  );
}
