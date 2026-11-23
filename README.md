# LUXURY AUTO PARTS INTERNATIONAL — Site web

Site officiel de **LUXURY AUTO PARTS INTERNATIONAL**, spécialisé dans les pièces de carrosserie automobile et les prestations de pose, de remplacement et d’installation.

Slogan : *La qualité au service de votre véhicule.*

## Technologies

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

Les coordonnées, catégories et textes institutionnels sont centralisés dans `src/data/`.

## Prérequis

- Node.js 20 ou supérieur
- npm

## Installation et lancement

```bash
cd website
npm install
npm run dev
```

Le serveur de développement s’ouvre sur `http://localhost:5173`.

## Commandes

| Commande        | Rôle                          |
|-----------------|-------------------------------|
| `npm run dev`   | Serveur de développement      |
| `npm run build` | Compilation de production     |
| `npm run preview` | Prévisualisation du build   |
| `npm run lint`  | Analyse statique (oxlint)     |

## Configuration

Copiez `.env.example` vers `.env` si besoin :

```
VITE_SITE_URL=https://votre-domaine.com
```

Cette variable sert aux URL canoniques et Open Graph. Sans elle, le site fonctionne en relatif.

Avant mise en ligne, remplacez `https://VOTRE-DOMAINE` dans `public/sitemap.xml` et décommentez la ligne Sitemap de `public/robots.txt`.

## Formulaires et contact

Aucun backend e-mail n’est configuré. Les formulaires ouvrent **WhatsApp** (`+226 68 68 18 69`) avec un message prérempli. L’appel direct utilise `tel:+22654204870`.

## Contenu volontairement absent

Les éléments suivants n’ont **pas** été inventés, faute de source officielle :

- Adresse physique
- Horaires d’ouverture
- Réseaux sociaux
- Tarifs, stocks, références produits
- Témoignages, certifications, partenariats
- Chiffres d’activité

Le code pays du téléphone (`+226`) est reflété en données structurées (`areaServed: BF`) sans localisation plus précise.

## Structure

```
src/
  components/   mise en page, UI, formulaire
  data/         informations officielles
  lib/          WhatsApp, URL du site
  pages/        Accueil, Produits, Services, À propos, Contact
public/
  brand/        logo officiel et visuel Open Graph
  images/       photographies du site
```

## Mise en production

1. Définir le nom de domaine et `VITE_SITE_URL`.
2. Mettre à jour `sitemap.xml` et `robots.txt`.
3. `npm run build`
4. Déployer le dossier `dist/` (Netlify, Vercel, hébergement statique, etc.).
5. Vérifier les liens `tel:` et WhatsApp sur mobile réel.
6. Fournir éventuellement un e-mail ou un service d’envoi pour remplacer le flux WhatsApp.
