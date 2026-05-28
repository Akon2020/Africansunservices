/**
 * GALLERY DATA CONFIGURATION
 * ==========================
 * 
 * Ajoutez vos URLs d'images et videos ici.
 * Les URLs peuvent provenir de UploadThing, Cloudinary, ou tout autre service d'hebergement.
 * 
 * Pour les videos:
 * - YouTube: utilisez le format "https://www.youtube.com/embed/VIDEO_ID"
 * - Vimeo: utilisez le format "https://player.vimeo.com/video/VIDEO_ID"
 * - Videos directes: utilisez l'URL du fichier MP4
 * 
 * Categories disponibles:
 * - construction
 * - logistics
 * - agriculture
 * - equipment
 * - environment
 * - events
 * - partnerships
 */

export type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;           // URL complete de l'image/video
  thumbnail: string;     // URL de la miniature (pour les videos, utilisez une image)
  title: string;         // Titre affiche dans la galerie
  titleEn?: string;      // Titre en anglais (optionnel)
  category: string;      // Categorie pour le filtre
  location?: string;     // Lieu (optionnel)
};

/**
 * GALLERY ITEMS
 * =============
 * Remplacez les URLs Unsplash par vos propres URLs UploadThing.
 * 
 * Exemple avec UploadThing:
 * {
 *   id: 1,
 *   type: 'image',
 *   src: 'https://utfs.io/f/votre-fichier-id.jpg',
 *   thumbnail: 'https://utfs.io/f/votre-fichier-id.jpg',
 *   title: 'Mon Projet',
 *   category: 'construction',
 *   location: 'Lubumbashi',
 * }
 */
export const galleryItems: MediaItem[] = [
  // =====================
  // CONSTRUCTION
  // =====================
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
    title: 'Projet de Construction',
    titleEn: 'Construction Project',
    category: 'construction',
    location: 'Lubumbashi',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=80',
    title: 'Chantier en Cours',
    titleEn: 'Ongoing Construction Site',
    category: 'construction',
    location: 'Kinshasa',
  },

  // =====================
  // LOGISTICS
  // =====================
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    title: 'Operations Logistiques',
    titleEn: 'Logistics Operations',
    category: 'logistics',
    location: 'Kinshasa',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
    title: 'Commerce International',
    titleEn: 'International Trade',
    category: 'logistics',
    location: 'International',
  },

  // =====================
  // AGRICULTURE
  // =====================
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80',
    title: 'Champs Agricoles',
    titleEn: 'Agricultural Fields',
    category: 'agriculture',
    location: 'Sud-Kivu',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop&q=80',
    title: 'Recolte',
    titleEn: 'Harvest',
    category: 'agriculture',
    location: 'Haut-Katanga',
  },

  // =====================
  // EQUIPMENT
  // =====================
  {
    id: 7,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',  // Remplacez par votre video
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=80',
    title: 'Presentation Equipements',
    titleEn: 'Equipment Showcase',
    category: 'equipment',
    location: 'Bukavu',
  },
  {
    id: 8,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
    title: 'Materiel Lourd',
    titleEn: 'Heavy Equipment',
    category: 'equipment',
    location: 'Lubumbashi',
  },

  // =====================
  // ENVIRONMENT
  // =====================
  {
    id: 9,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80',
    title: 'Services Environnementaux',
    titleEn: 'Environmental Services',
    category: 'environment',
    location: 'Haut-Katanga',
  },
  {
    id: 10,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&auto=format&fit=crop&q=80',
    title: 'Protection Naturelle',
    titleEn: 'Nature Protection',
    category: 'environment',
    location: 'Sud-Kivu',
  },

  // =====================
  // EVENTS
  // =====================
  {
    id: 11,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&auto=format&fit=crop&q=80',
    title: 'Evenement d\'Equipe',
    titleEn: 'Team Event',
    category: 'events',
    location: 'Lubumbashi',
  },
  {
    id: 12,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',  // Remplacez par votre video
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    title: 'Presentation Entreprise',
    titleEn: 'Company Overview',
    category: 'events',
    location: 'RD Congo',
  },

  // =====================
  // PARTNERSHIPS
  // =====================
  {
    id: 13,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
    title: 'Reunion Partenaires',
    titleEn: 'Partnership Meeting',
    category: 'partnerships',
    location: 'Lubumbashi',
  },
  {
    id: 14,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    title: 'Signature de Contrat',
    titleEn: 'Contract Signing',
    category: 'partnerships',
    location: 'Kinshasa',
  },
];

/**
 * CATEGORIES
 * ==========
 * Liste des categories pour le filtre.
 * Ajoutez de nouvelles categories ici si necessaire.
 */
export const categories = [
  'all',
  'construction',
  'logistics',
  'agriculture',
  'equipment',
  'environment',
  'events',
  'partnerships',
] as const;

export type Category = (typeof categories)[number];

/**
 * GALLERY PREVIEW ITEMS
 * =====================
 * Elements affiches sur la page d'accueil (limite a 6)
 */
export const galleryPreviewItems = galleryItems.slice(0, 6);
