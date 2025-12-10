import { useState } from 'react';
import ActivitiesSection from './features/activities/ActivitiesSection';
import Footer from './features/layout/Footer';
import HostingSection from './features/hosting/HostingSection';
import NavBar from './features/layout/NavBar';
import SearchSection from './features/search/SearchSection';
import { t, type Language } from './app/i18n/i18n';

function App() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState<Language>('fr');

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));

  const translate = (key: Parameters<typeof t>[1]) => t(lang, key);

  return (
    <div className="bg-white text-text">
      <NavBar lang={lang} onToggleLang={toggleLang} t={translate} />
      <main>
        <SearchSection
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          onSearchSubmit={setSearchQuery}
          t={translate}
        />
        <HostingSection
          activeFilters={activeFilters}
          searchQuery={searchQuery}
          t={translate}
          lang={lang}
        />
        <ActivitiesSection t={translate} lang={lang} />
      </main>
      <Footer t={translate} />
    </div>
  );
}

export default App;

