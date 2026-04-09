import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="apropos" className="apropos">
      <div className="apropos-glass">
        <div className="apropos-text">
          <h3>{t('about.title')}</h3>
          <p>{t('about.description')}</p>
          <div className="apropos-buttons">
            <a href="#menu" className="btn-primary">{t('about.cta1')}</a>
            <a href="#contact" className="btn-outline">{t('about.cta2')}</a>
          </div>
        </div>
        <div className="apropos-img">
          <img src="/images/Apropos.png" alt="SweetCake" />
        </div>
      </div>
    </section>
  );
};

export default About;
