import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/gateau1.png',
    'https://images.unsplash.com/photo-1541592106381-3b3c8e3f8cc1?q=80&w=1200&auto=format&fit=crop'
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
        <div className="badge">NEW • Signature</div>
        <h1>Bite into <span style={{ color: 'var(--accent)' }}>Happiness.</span></h1>
        <p>
          Gâteaux artisanaux, viennoiseries fraîches et créations personnalisées. 
          Commande en ligne — livraison Rabat & environs.
        </p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
          <a className="cta" href="#menu">Voir le menu</a>
        </div>
      </div>
      <div className="hero-frame">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
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
