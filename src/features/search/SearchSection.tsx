import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { FilterChip } from './FilterChip';

const filters = [
  { id: 'eco', label: 'Économique', icon: 'fa-money-bill-wave' },
  { id: 'family', label: 'Familial', icon: 'fa-child' },
  { id: 'romantic', label: 'Romantique', icon: 'fa-heart' },
  { id: 'pets', label: 'Animaux autorisés', icon: 'fa-dog' },
];

type SearchSectionProps = {
  activeFilters: string[];
  onToggleFilter: (id: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
  t: (key: import('../../app/i18n/i18n').TranslationKey) => string;
};

function SearchSection({
  activeFilters,
  onToggleFilter,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  t,
}: SearchSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchValue.trim());
  };

  return (
    <section className="py-6">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">{t('search.title')}</h1>
          <p className="text-base text-gray-700">{t('search.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 sm:gap-0">
          <div className="flex items-center bg-muted rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center w-12 text-lg text-black">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('search.placeholder')}
              className="px-4 py-3 outline-none border-y border-muted bg-white text-base font-semibold w-56 sm:w-64"
            />
            <Button className="rounded-none rounded-r-2xl px-6" aria-label="Rechercher" type="submit">
              <span className="hidden sm:inline">{t('search.button')}</span>
              <i className="fas fa-search sm:hidden"></i>
            </Button>
          </div>
        </form>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold">{t('filters.title')}</h3>
            <ul className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <FilterChip
                  key={filter.id}
                  icon={filter.icon}
                  label={t(['filters', filter.id].join('.') as import('../../app/i18n/i18n').TranslationKey)}
                  selected={activeFilters.includes(filter.id)}
                  onClick={() => onToggleFilter(filter.id)}
                />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-primary">
              <i className="fas fa-info text-xs"></i>
            </div>
            <p className="text-sm sm:text-base">{t('filters.info')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SearchSection;

