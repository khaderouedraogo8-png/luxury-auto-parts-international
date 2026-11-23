import { ButtonLink } from "../components/ui/ButtonLink";
import { Seo } from "../components/seo/Seo";
import { company } from "../data/company";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title={`Page introuvable — ${company.legalName}`}
        description="La page demandée n’existe pas."
        path="/404"
      />
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl font-bold uppercase text-ivory">Page introuvable</h1>
        <p className="mt-4 text-silver">Le lien suivi ne correspond à aucune page du site.</p>
        <div className="mt-8">
          <ButtonLink to="/">Retour à l’accueil</ButtonLink>
        </div>
      </section>
    </>
  );
}
