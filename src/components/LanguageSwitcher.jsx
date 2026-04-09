import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguageCode, t } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguageCode('fr')}
        aria-label="Français"
      >
        FR
      </button>
      <span className="lang-separator">|</span>
      <button 
        className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
        onClick={() => setLanguageCode('ar')}
        aria-label="العربية"
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
