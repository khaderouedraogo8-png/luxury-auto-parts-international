import { company } from "../../data/company";
import { whatsappUrl } from "../../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline-offset-4"
      aria-label={`Contacter ${company.legalName} sur WhatsApp`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.76 11.76 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.9 11.9 0 0 0 5.69 1.45h.01c6.54 0 11.87-5.33 11.87-11.86 0-3.17-1.24-6.15-3.4-8.45ZM12.05 21.7h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.8 9.8 0 0 1-1.5-5.23c0-5.43 4.43-9.85 9.88-9.85 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.96c0 5.43-4.44 9.86-9.87 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
