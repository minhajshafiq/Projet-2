export type Language = 'fr' | 'en';

export type TranslationKey =
  | 'nav.accommodation'
  | 'nav.activities'
  | 'nav.language'
  | 'search.title'
  | 'search.subtitle'
  | 'search.placeholder'
  | 'search.button'
  | 'filters.title'
  | 'filters.info'
  | 'filters.eco'
  | 'filters.family'
  | 'filters.romantic'
  | 'filters.pets'
  | 'hosting.title'
  | 'hosting.showMore'
  | 'hosting.pricePrefix'
  | 'popular.title'
  | 'modal.reserve'
  | 'modal.close'
  | 'modal.discover'
  | 'activities.title'
  | 'footer.about'
  | 'footer.about.link1'
  | 'footer.about.link2'
  | 'footer.about.link3'
  | 'footer.hosting'
  | 'footer.hosting.link1'
  | 'footer.hosting.link2'
  | 'footer.support'
  | 'footer.support.link1'
  | 'footer.support.link2';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    'nav.accommodation': 'Hébergement',
    'nav.activities': 'Activités',
    'nav.language': 'FR',
    'search.title': 'Trouvez votre hébergement pour des vacances de rêve',
    'search.subtitle': 'En plein centre de ville ou en pleine nature',
    'search.placeholder': 'Marseille, France',
    'search.button': 'Rechercher',
    'filters.title': 'Filtres',
    'filters.info': 'Plus de 500 logements disponibles dans cette ville',
    'filters.eco': 'Économique',
    'filters.family': 'Familial',
    'filters.romantic': 'Romantique',
    'filters.pets': 'Animaux autorisés',
    'hosting.title': 'Hébérgements à Marseille',
    'hosting.showMore': 'Afficher plus',
    'hosting.pricePrefix': 'Nuit à partir de',
    'popular.title': 'Les plus populaires',
    'modal.reserve': 'Réserver',
    'modal.close': 'Fermer',
    'modal.discover': 'Découvrir',
    'activities.title': 'Activités à Marseille',
    'footer.about': 'A propos',
    'footer.about.link1': 'Fonctionnement du site',
    'footer.about.link2': 'Conditions générales de vente',
    'footer.about.link3': 'Données et confidentialités',
    'footer.hosting': 'Nos hébergement',
    'footer.hosting.link1': 'Charte qualité',
    'footer.hosting.link2': 'Soumettre votre hôtel',
    'footer.support': 'Assitance',
    'footer.support.link1': "Centre d'aide",
    'footer.support.link2': 'Nous contacter',
  },
  en: {
    'nav.accommodation': 'Accommodations',
    'nav.activities': 'Activities',
    'nav.language': 'EN',
    'search.title': 'Find your dream stay',
    'search.subtitle': 'In the city center or in nature',
    'search.placeholder': 'Marseille, France',
    'search.button': 'Search',
    'filters.title': 'Filters',
    'filters.info': 'Over 500 places available in this city',
    'filters.eco': 'Budget',
    'filters.family': 'Family',
    'filters.romantic': 'Romantic',
    'filters.pets': 'Pets allowed',
    'hosting.title': 'Stays in Marseille',
    'hosting.showMore': 'Show more',
    'hosting.pricePrefix': 'Night from',
    'popular.title': 'Most popular',
    'modal.reserve': 'Book',
    'modal.close': 'Close',
    'modal.discover': 'Discover',
    'activities.title': 'Activities in Marseille',
    'footer.about': 'About',
    'footer.about.link1': 'How the site works',
    'footer.about.link2': 'Terms & conditions',
    'footer.about.link3': 'Data & privacy',
    'footer.hosting': 'Our stays',
    'footer.hosting.link1': 'Quality charter',
    'footer.hosting.link2': 'Submit your hotel',
    'footer.support': 'Support',
    'footer.support.link1': 'Help center',
    'footer.support.link2': 'Contact us',
  },
};

export function t(lang: Language, key: TranslationKey) {
  return translations[lang][key] ?? translations.fr[key] ?? key;
}

