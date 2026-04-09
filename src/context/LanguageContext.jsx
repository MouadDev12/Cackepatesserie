import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'ar' : 'fr');
  };

  const setLanguageCode = (code) => {
    setLanguage(code);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['fr']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      setLanguageCode, 
      t,
      isRTL: language === 'ar' 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
