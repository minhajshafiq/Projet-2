import { Container } from '../../components/ui/Container';
import type { Language } from '../../app/i18n/i18n';
import type { TranslationKey } from '../../app/i18n/i18n';

type NavBarProps = {
  lang: Language;
  onToggleLang: () => void;
  t: (key: TranslationKey) => string;
};

function NavBar({ lang, onToggleLang, t }: NavBarProps) {
  return (
    <header className="py-6">
      <Container className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center">
          <img src="/images/logo/Booki.png" alt="Booki" className="h-8 w-auto" />
        </a>
        <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-semibold">
          <a
            href="#hosting"
            className="relative pb-2 text-black hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            {t('nav.accommodation')}
          </a>
          <a
            href="#activity"
            className="relative pb-2 text-black hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            {t('nav.activities')}
          </a>
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Toggle language"
            className="text-sm font-semibold text-primary border border-primary rounded-full px-3 py-1 hover:bg-primary/10 transition-colors"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;

