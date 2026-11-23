export type ServiceItem = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  whatsappTopic: string;
};

export const services: ServiceItem[] = [
  {
    slug: "pose",
    title: "Pose de pièces automobiles",
    excerpt:
      "Montage et installation soignée des vitrages, pare-brise, pare-chocs et optiques.",
    description:
      "La pose professionnelle consiste à monter et installer les pièces de carrosserie dans les règles de l’art : vitrages, pare-brise, pare-chocs et optiques. L’intervention vise un ajustement précis, une finition propre et un fonctionnement conforme de l’élément posé.",
    points: [
      "Montage des vitrages et pare-brise",
      "Pose de pare-chocs",
      "Installation d’optiques",
      "Contrôle d’ajustement et de finition",
    ],
    image: "/images/service-pose.jpg",
    imageAlt: "Technicien carrossier en tenue officielle ajustant un pare-chocs et un bloc optique en atelier",
    whatsappTopic: "une pose de pièce automobile",
  },
  {
    slug: "remplacement",
    title: "Remplacement de pièces",
    excerpt:
      "Dépose des éléments endommagés et mise en place des pièces neuves.",
    description:
      "Le remplacement comprend la dépose des éléments endommagés et la mise en place des pièces neuves. Cette prestation s’adresse notamment aux véhicules ayant subi un choc, une casse de vitrage ou une défaillance d’éclairage.",
    points: [
      "Dépose des éléments endommagés",
      "Mise en place de pièces neuves",
      "Interventions liées aux vitres et pare-brise",
      "Remise en état extérieure du véhicule",
    ],
    image: "/images/service-remplacement.jpg",
    imageAlt: "Technicien carrossier ajustant et montant un phare LED neuf sur un véhicule en atelier",
    whatsappTopic: "un remplacement de pièce",
  },
  {
    slug: "installation",
    title: "Installation d’équipements",
    excerpt:
      "Ajustement et fixation des accessoires et équipements de carrosserie.",
    description:
      "L’installation d’accessoires et d’équipements de carrosserie porte sur l’ajustement et la fixation des éléments extérieurs. L’accompagnement technique complète la commercialisation des pièces pour une mise en place maîtrisée.",
    points: [
      "Ajustement des accessoires",
      "Fixation des équipements de carrosserie",
      "Accompagnement de la pièce à l’installation",
      "Conseil selon le besoin du véhicule",
    ],
    image: "/images/service-installation.jpg",
    imageAlt: "Ensemble d'accessoires de carrosserie et équipements prêts pour installation",
    whatsappTopic: "une installation d’équipement",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}
