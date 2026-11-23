export type ProductCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  whatsappTopic: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "vitres-et-pare-brise",
    title: "Vitres et pare-brise",
    shortTitle: "Vitrage",
    excerpt:
      "Pare-brise avant, vitres latérales et lunettes arrière pour la visibilité et la sécurité de votre véhicule.",
    description:
      "Nous commercialisons des éléments de vitrage automobile : pare-brise avant, vitres latérales et lunettes arrière. Chaque demande est étudiée selon la marque, le modèle et l’année du véhicule afin de vous orienter vers la pièce adaptée.",
    details: [
      "Pare-brise avant",
      "Vitres latérales",
      "Lunettes arrière",
      "Orientation selon marque et modèle",
    ],
    image: "/images/vitres-pare-brise.jpg",
    imageAlt: "Pare-brise avant automobile et vitrage de carrosserie sur support d’exposition",
    whatsappTopic: "un pare-brise ou une vitre",
  },
  {
    slug: "pare-chocs",
    title: "Pare-chocs avant et arrière",
    shortTitle: "Pare-chocs",
    excerpt:
      "Boucliers avant et arrière, grilles, supports et éléments de fixation pour l’habillage et la protection du véhicule.",
    description:
      "Notre offre de carrosserie comprend les pare-chocs avant et arrière, ainsi que les éléments associés tels que les grilles, supports et pièces de fixation. L’objectif est de rétablir la ligne, la protection et la cohérence visuelle du véhicule.",
    details: [
      "Boucliers avant",
      "Boucliers arrière",
      "Grilles et habillages",
      "Supports et éléments de fixation",
    ],
    image: "/images/pare-chocs.jpg",
    imageAlt: "Pare-chocs avant automobile complet avec calandre et prises d’air",
    whatsappTopic: "un pare-chocs",
  },
  {
    slug: "phares-avant",
    title: "Phares avant",
    shortTitle: "Phares",
    excerpt:
      "Blocs optiques et projecteurs avant pour l’éclairage, la signalisation et le style du véhicule.",
    description:
      "Nous proposons des phares avant — blocs optiques et projecteurs — destinés au remplacement ou à la remise en conformité de l’éclairage. Une identification précise du véhicule permet d’éviter les incompatibilités de montage.",
    details: [
      "Blocs optiques avant",
      "Projecteurs",
      "Éléments d’éclairage avant",
      "Conseil d’adéquation au modèle",
    ],
    image: "/images/phares-avant.jpg",
    imageAlt: "Bloc optique avant projecteur LED et signature lumineuse haute précision",
    whatsappTopic: "un phare avant",
  },
  {
    slug: "feux-arriere",
    title: "Feux arrière",
    shortTitle: "Feux arrière",
    excerpt:
      "Feux arrière complets et éléments de signalisation pour la visibilité et la sécurité du véhicule.",
    description:
      "Les feux arrière complets et les éléments de signalisation arrière font partie de nos spécialités. Nous vous aidons à identifier la pièce correspondant à votre véhicule avant toute commande ou intervention.",
    details: [
      "Feux arrière complets",
      "Éléments de signalisation arrière",
      "Remplacement après choc ou usure",
      "Accompagnement pour le bon modèle",
    ],
    image: "/images/feux-arriere.jpg",
    imageAlt: "Bloc feux arrière automobile complet avec signature LED rouge rubis",
    whatsappTopic: "un feu arrière",
  },
  {
    slug: "accessoires-carrosserie",
    title: "Autres accessoires et pièces de carrosserie",
    shortTitle: "Accessoires",
    excerpt:
      "Accessoires extérieurs et pièces complémentaires destinés à l’habillage et à la protection de la carrosserie.",
    description:
      "Au-delà des familles principales, nous commercialisons des accessoires extérieurs et des pièces complémentaires de carrosserie. Décrivez votre besoin : nous vous indiquons si une solution peut être proposée.",
    details: [
      "Accessoires extérieurs",
      "Pièces complémentaires de carrosserie",
      "Habillage et protection",
      "Demandes étudiées au cas par cas",
    ],
    image: "/images/accessoires-carrosserie.jpg",
    imageAlt: "Accessoires de carrosserie : coques de rétroviseur carbone, spoiler et calandre sport",
    whatsappTopic: "un accessoire ou une pièce de carrosserie",
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}
