import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h4>SweetCake</h4>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-links">
          <h5>{t('footer.quickLinks')}</h5>
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#menu">{t('nav.menu')}</a></li>
            <li><a href="#apropos">{t('nav.about')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h5>{t('footer.contact')}</h5>
          <ul>
            <li>{t('footer.location')}</li>
            <li>{t('footer.phone')}</li>
            <li>{t('footer.email')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        {t('footer.copyright').replace('{year}', year)}
      </div>
    </footer>
  );
};

export default Footer;
