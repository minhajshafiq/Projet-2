import { useMemo, useState } from 'react';
import { hostingCards, popularCards, type HostingCard } from '../../app/data/hosting';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { RatingStars } from './RatingStars';
import { Button } from '../../components/ui/Button';
import type { TranslationKey } from '../../app/i18n/i18n';

type HostingSectionProps = {
  activeFilters: string[];
  searchQuery: string;
  lang?: 'fr' | 'en';
  t: (key: TranslationKey) => string;
};

function HostingSection({ activeFilters, searchQuery, lang = 'fr', t }: HostingSectionProps) {
  const [selected, setSelected] = useState<HostingCard | null>(null);

  const handleOpen = (card: HostingCard) => setSelected(card);
  const handleClose = () => setSelected(null);

  const filteredHosting = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return hostingCards.filter((card) => {
      const matchTags =
        !activeFilters.length ||
        (card.tags ? card.tags.some((t) => activeFilters.includes(t)) : false);
      const matchQuery =
        !query ||
        card.title.toLowerCase().includes(query) ||
        (card.description ? card.description.toLowerCase().includes(query) : false);
      return matchTags && matchQuery;
    });
  }, [activeFilters, searchQuery]);

  const filteredPopular = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return popularCards.filter((card) => {
      const matchTags =
        !activeFilters.length ||
        (card.tags ? card.tags.some((t) => activeFilters.includes(t)) : false);
      const matchQuery =
        !query ||
        card.title.toLowerCase().includes(query) ||
        (card.description ? card.description.toLowerCase().includes(query) : false);
      return matchTags && matchQuery;
    });
  }, [activeFilters, searchQuery]);

  return (
    <section id="hosting" className="py-8 bg-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] items-stretch">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold">{t('hosting.title')}</h2>
              <a href="#" className="text-primary font-semibold text-sm hover:underline">
                {t('hosting.showMore')}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredHosting.map((card) => {
                const title = lang === 'en' && card.titleEn ? card.titleEn : card.title;
                return (
                  <Card key={card.id} className="hover:-translate-y-1 transition-transform">
                    <button
                      type="button"
                      onClick={() => handleOpen(card)}
                      className="flex flex-col h-full text-left w-full appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-40 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="flex flex-col gap-2 p-4">
                        <h3 className="text-base font-semibold text-black">{title}</h3>
                        <p className="text-sm text-gray-700">
                          {t('hosting.pricePrefix')}{' '}
                          <strong className="text-black">{card.price}€</strong>
                        </p>
                        <RatingStars rating={card.rating} />
                      </div>
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>

          <aside className="bg-muted rounded-2xl p-4 sm:p-6 flex flex-col gap-6 h-full self-stretch">
            <div className="flex items-start justify-between">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                {t('popular.title')}
              </h2>
              <i className="fas fa-star text-black text-2xl" aria-hidden></i>
            </div>
            <div className="flex flex-col gap-5">
              {filteredPopular.map((card) => {
                const title = lang === 'en' && card.titleEn ? card.titleEn : card.title;
                return (
                  <Card
                    key={card.id}
                    className="hover:-translate-y-1 transition-transform shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => handleOpen(card)}
                      className="flex gap-4 sm:gap-5 h-full p-3 sm:p-4 text-left w-full appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-32 h-28 sm:w-36 sm:h-28 object-cover flex-shrink-0 rounded-xl"
                        loading="lazy"
                      />
                      <div className="flex flex-col justify-between py-1 gap-2">
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-semibold text-black">
                            {title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700">
                            {t('hosting.pricePrefix')}{' '}
                            <strong className="text-black">
                              {card.price}
                              €
                            </strong>
                          </p>
                        </div>
                        <div className="pt-1">
                          <RatingStars rating={card.rating} />
                        </div>
                      </div>
                    </button>
                  </Card>
                );
              })}
            </div>
          </aside>
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
            role="dialog"
            aria-modal="true"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col gap-4 p-6 md:w-1/2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-black">
                        {lang === 'en' && selected.titleEn ? selected.titleEn : selected.title}
                      </h3>
                      <p className="text-gray-700">
                        {t('hosting.pricePrefix')}{' '}
                        <strong className="text-black">
                          {selected.price}
                          €
                        </strong>
                      </p>
                      <RatingStars rating={selected.rating} />
                    </div>
                    <button
                      type="button"
                      onClick={handleClose}
                      aria-label={t('modal.close')}
                      className="text-gray-500 hover:text-black text-xl"
                    >
                      ×
                    </button>
                  </div>
                  {(selected.description || selected.descriptionEn) && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {lang === 'en' && selected.descriptionEn
                        ? selected.descriptionEn
                        : selected.description}
                    </p>
                  )}
                  {selected.highlights && selected.highlights.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {(lang === 'en' && selected.highlightsEn ? selected.highlightsEn : selected.highlights)!.map(
                        (item) => (
                          <li
                            key={item}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary"
                          >
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                  <div className="mt-auto flex items-center gap-3">
                    <Button className="px-5">{t('modal.reserve')}</Button>
                    <Button variant="ghost" onClick={handleClose}>
                      {t('modal.close')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default HostingSection;

