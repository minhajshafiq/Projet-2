import { useState } from 'react';
import { activities, type ActivityCard } from '../../app/data/activities';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import type { TranslationKey } from '../../app/i18n/i18n';

type ActivitiesSectionProps = {
  t: (key: TranslationKey) => string;
  lang?: 'fr' | 'en';
};

function ActivitiesSection({ t, lang = 'fr' }: ActivitiesSectionProps) {
  const [selected, setSelected] = useState<ActivityCard | null>(null);
  const open = (activity: ActivityCard) => setSelected(activity);
  const close = () => setSelected(null);

  return (
    <section id="activity" className="py-10 bg-white">
      <Container className="flex flex-col gap-6">
        <h2 className="text-xl sm:text-2xl font-bold">{t('activities.title')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense">
          {activities.map((activity) => {
            const isTall = activity.span === 'tall';
            const cardHeight = isTall ? 'h-[520px]' : 'h-[240px]';
            const rowSpan = isTall ? 'lg:row-span-2' : '';
            const title = lang === 'en' && activity.titleEn ? activity.titleEn : activity.title;

            return (
              <Card
                key={activity.id}
                className={`hover:-translate-y-1 transition-transform flex flex-col ${rowSpan}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    open(activity);
                  }}
                  className="flex flex-col h-full text-left w-full appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl"
                >
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    className={`${cardHeight} w-full object-cover`}
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-black">{title}</h3>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
            role="dialog"
            aria-modal="true"
            onClick={close}
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
                    <h3 className="text-xl font-bold text-black">
                      {lang === 'en' && selected.titleEn ? selected.titleEn : selected.title}
                    </h3>
                    <button
                      type="button"
                      onClick={close}
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
                    <Button className="px-5">{t('modal.discover')}</Button>
                    <Button variant="ghost" onClick={close}>
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

export default ActivitiesSection;

