import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();
  
  const images = [
    '/images/gateau1.png',
    'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
    '/images/gateau2.png',
    '/images/Red Velvet Strawberry Cheesecake.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div>
        <div className="badge">{t('hero.badge')}</div>
        <h1>{t('hero.title1')} <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{t('hero.title2')}</span></h1>
        <p>{t('hero.description')}</p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <a className="cta" href="#menu">{t('hero.cta')}</a>
        </div>
        
        {/* Indicateurs du slider */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          marginTop: '32px',
          justifyContent: 'flex-start'
        }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: currentSlide === idx ? 'var(--gold)' : 'rgba(201, 169, 97, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-frame">
        <div className="slider" style={{ transform: language === 'ar' ? `translateX(${currentSlide * 100}%)` : `translateX(-${currentSlide * 100}%)` }}>
          {images.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`Gâteau ${idx + 1}`}
              onError={(e) => {
                console.log(`Erreur de chargement pour l'image ${idx + 1}:`, img);
                e.target.style.display = 'none';
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
