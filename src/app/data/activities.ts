export type ActivityCard = {
  id: string;
  title: string;
  titleEn?: string;
  image: string;
  alt: string;
  span?: 'tall' | 'normal';
  description?: string;
  descriptionEn?: string;
  highlights?: string[];
  highlightsEn?: string[];
};

export const activities: ActivityCard[] = [
  {
    id: 'vieux-port',
    title: 'Vieux Port',
    titleEn: 'Old Port',
    image: '/images/activites/4_small/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg',
    alt: 'Un port de plaisance rempli de bateaux en premier plan avec une ville dans le second plan',
    span: 'tall',
    description: 'Promenade sur le Vieux-Port avec vue sur Notre-Dame de la Garde et les bateaux.',
    descriptionEn: 'Walk on the Old Port with views of boats and Notre-Dame de la Garde.',
    highlights: ['Vue mer', 'Restaurants', 'Marché aux poissons'],
    highlightsEn: ['Sea view', 'Restaurants', 'Fish market'],
  },
  {
    id: 'fort-pomegues',
    title: 'Fort de Pomègues',
    titleEn: 'Pomègues Fort',
    image: '/images/activites/4_small/paul-hermann-QFTrLdQIRhI-unsplash.jpg',
    alt: 'Désert rocailleux beige avec un fort beige en arrière-plan',
    span: 'normal',
    description: 'Fort sur l’archipel du Frioul, panorama sur la rade de Marseille.',
    descriptionEn: 'Fort on the Frioul archipelago, panoramic view over Marseille bay.',
    highlights: ['Randonnée', 'Patrimoine', 'Vue panoramique'],
    highlightsEn: ['Hiking', 'Heritage', 'Panoramic view'],
  },
  {
    id: 'calanques',
    title: 'Parc National des Calanques',
    titleEn: 'Calanques National Park',
    image: '/images/activites/4_small/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg',
    alt: 'Roche et verdure en premier plan et grande mer bleue en second plan',
    span: 'tall',
    description: 'Falaises calcaires, eau turquoise et sentiers côtiers emblématiques.',
    descriptionEn: 'Limestone cliffs, turquoise water and iconic coastal trails.',
    highlights: ['Randonnée', 'Baignade', 'Nature'],
    highlightsEn: ['Hiking', 'Swimming', 'Nature'],
  },
  {
    id: 'notre-dame',
    title: 'Notre-Dame-de-la-Garde',
    titleEn: 'Notre-Dame de la Garde',
    image: '/images/activites/4_small/florian-wehde-xW9e8gdotxI-unsplash.jpg',
    alt: 'Grande ville plate avec colline mettant en valeur un bâtiment',
    span: 'normal',
    description: 'Basilique iconique offrant une vue imprenable sur toute la ville.',
    descriptionEn: 'Iconic basilica offering a stunning view over the whole city.',
    highlights: ['Point de vue', 'Patrimoine', 'Architecture'],
    highlightsEn: ['Viewpoint', 'Heritage', 'Architecture'],
  },
  {
    id: 'ile-frioul',
    title: 'Île du Frioul',
    titleEn: 'Frioul Island',
    image: '/images/activites/4_small/kevin-hikari-rV_Qd1l-VXg-unsplash.jpg',
    alt: 'Longue vue sur terre en premier plan, mer en second plan et île en troisième plan',
    span: 'normal',
    description: 'Archipel au large, criques sauvages et eaux claires pour se baigner.',
    descriptionEn: 'Offshore archipelago, wild coves and clear waters to swim.',
    highlights: ['Bateau', 'Criques', 'Snorkeling'],
    highlightsEn: ['Boat', 'Coves', 'Snorkeling'],
  },
  {
    id: 'parc-longchamp',
    title: 'Parc Longchamp',
    titleEn: 'Longchamp Park',
    image: '/images/activites/4_small/lena-paulin-wH2-EJoDcV0-unsplash.jpg',
    alt: "Majestueux bâtiment en pierres blanches doté d'une fontaine",
    span: 'normal',
    description: 'Parc historique avec palais, fontaines et vastes pelouses.',
    descriptionEn: 'Historic park with palace, fountains and large lawns.',
    highlights: ['Jardin', 'Musées', 'Fontaines'],
    highlightsEn: ['Garden', 'Museums', 'Fountains'],
  },
];

