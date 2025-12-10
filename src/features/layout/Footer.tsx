import { Container } from '../../components/ui/Container';
import type { TranslationKey } from '../../app/i18n/i18n';

type FooterProps = {
  t: (key: TranslationKey) => string;
};

function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-muted mt-10">
      <Container className="grid gap-8 py-10 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black">{t('footer.about')}</h3>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.about.link1')}
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.about.link2')}
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.about.link3')}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black">{t('footer.hosting')}</h3>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.hosting.link1')}
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.hosting.link2')}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black">{t('footer.support')}</h3>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.support.link1')}
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-primary">
            {t('footer.support.link2')}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

