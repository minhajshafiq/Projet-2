export type HostingCard = {
  id: string;
  title: string;
  titleEn?: string;
  price: number;
  image: string;
  alt: string;
  rating: number;
  description?: string;
  descriptionEn?: string;
  highlights?: string[];
  highlightsEn?: string[];
  tags?: string[]; 
};

export const hostingCards: HostingCard[] = [
  {
    id: 'auberge-cannebiere',
    title: 'Auberge La Cannebière',
    titleEn: 'La Cannebière Hostel',
    price: 25,
    image: '/images/hebergements/4_small/marcus-loke-WQJvWU_HZFo-unsplash.jpg',
    alt: 'Auberge la Cannebière',
    rating: 4,
    description: 'Auberge conviviale proche du Vieux-Port, idéale pour petits budgets.',
    descriptionEn: 'Friendly hostel near Vieux-Port, great for small budgets.',
    highlights: ['Wi-Fi', 'Cœur de ville', 'Petit-déjeuner disponible'],
    highlightsEn: ['Wi-Fi', 'City center', 'Breakfast available'],
    tags: ['eco', 'family'],
  },
  {
    id: 'hotel-port',
    title: 'Hôtel du port',
    titleEn: 'Port Hotel',
    price: 52,
    image: '/images/hebergements/4_small/fred-kleber-gTbaxaVLvsg-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 5,
    description: 'Hôtel moderne au port, chambres lumineuses et literie confortable.',
    descriptionEn: 'Modern hotel at the port, bright rooms and comfy bedding.',
    highlights: ['Vue port', 'Climatisation', 'Late check-in'],
    highlightsEn: ['Port view', 'Air conditioning', 'Late check-in'],
    tags: ['romantic'],
  },
  {
    id: 'hotel-mouettes',
    title: 'Hôtel Les mouettes',
    titleEn: 'Les Mouettes Hotel',
    price: 76,
    image: '/images/hebergements/4_small/reisetopia-B8WIgxA_PFU-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 4,
    description: 'Ambiance cosy, proche des plages, idéal pour week-end détente.',
    descriptionEn: 'Cozy vibe near the beaches, ideal for a relaxing weekend.',
    highlights: ['Proche plage', 'Wi-Fi', 'Parking'],
    highlightsEn: ['Near beach', 'Wi-Fi', 'Parking'],
    tags: ['romantic'],
  },
  {
    id: 'hotel-mer',
    title: 'Hôtel de la mer',
    titleEn: 'Sea Hotel',
    price: 46,
    image: '/images/hebergements/4_small/annie-spratt-Eg1qcIitAuA-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 3,
    description: 'Charmant hôtel de bord de mer, déco épurée et ambiance calme.',
    descriptionEn: 'Charming seaside hotel, clean decor and calm atmosphere.',
    highlights: ['Front de mer', 'Petit-déjeuner', 'Animaux ok'],
    highlightsEn: ['Seafront', 'Breakfast', 'Pets ok'],
    tags: ['pets', 'family'],
  },
  {
    id: 'auberge-panier',
    title: 'Auberge Le Panier',
    titleEn: 'Le Panier Hostel',
    price: 23,
    image: '/images/hebergements/4_small/nicate-lee-kT-ZyaiwBe0-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 4,
    description: 'Auberge chaleureuse dans le Panier, quartier historique.',
    descriptionEn: 'Warm hostel in Le Panier, the historic district.',
    highlights: ['Quartier historique', 'Cuisine partagée', 'Wi-Fi'],
    highlightsEn: ['Historic district', 'Shared kitchen', 'Wi-Fi'],
    tags: ['eco', 'family'],
  },
  {
    id: 'hotel-amina',
    title: 'Hôtel chez Amina',
    titleEn: 'Hotel Amina',
    price: 96,
    image: '/images/hebergements/4_small/febrian-zakaria-M6S1WvfW68A-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 5,
    description: 'Hôtel haut de gamme avec service personnalisé et chambres spacieuses.',
    descriptionEn: 'Upscale hotel with personalized service and spacious rooms.',
    highlights: ['Service 24/7', 'Vue mer', 'Room service'],
    highlightsEn: ['24/7 service', 'Sea view', 'Room service'],
    tags: ['romantic', 'family'],
  },
];

export const popularCards: HostingCard[] = [
  {
    id: 'hotel-soleil',
    title: 'Hôtel Le soleil du matin',
    titleEn: 'Morning Sun Hotel',
    price: 128,
    image: '/images/hebergements/4_small/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 5,
    description: 'Suite premium très lumineuse, parfaite pour un séjour romantique.',
    descriptionEn: 'Bright premium suite, perfect for a romantic stay.',
    highlights: ['Suite', 'Balcon', 'Climatisation'],
    highlightsEn: ['Suite', 'Balcony', 'Air conditioning'],
    tags: ['romantic'],
  },
  {
    id: 'coeur-eau',
    title: "Au coeur de l'eau Chambres d'hôtes",
    titleEn: 'Heart of Water Guesthouse',
    price: 71,
    image: '/images/hebergements/4_small/aw-creative-VGs8z60yT2c-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 4,
    description: 'Chambres d’hôtes de charme, atmosphère authentique et accueillante.',
    descriptionEn: 'Charming guesthouse with an authentic and warm atmosphere.',
    highlights: ['Accueil chaleureux', 'Petit-déjeuner maison', 'Centre-ville'],
    highlightsEn: ['Warm welcome', 'Homemade breakfast', 'City center'],
    tags: ['romantic', 'family'],
  },
  {
    id: 'tout-bleu',
    title: 'Hôtel Tout bleu et Blanc',
    titleEn: 'All Blue and White Hotel',
    price: 68,
    image: '/images/hebergements/4_small/febrian-zakaria-sjvU0THccQA-unsplash.jpg',
    alt: 'Chambre avec un lit superposé avec une fenêtre vue sur la ville.',
    rating: 4,
    description: 'Hôtel boutique à la déco soignée, idéal pour explorer Marseille.',
    descriptionEn: 'Boutique hotel with refined decor, ideal to explore Marseille.',
    highlights: ['Décor design', 'Wi-Fi', 'Proche Vieux-Port'],
    highlightsEn: ['Design decor', 'Wi-Fi', 'Near Vieux-Port'],
    tags: ['romantic'],
  },
];

