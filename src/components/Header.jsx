import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const { t } = useLanguage();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-modern">
          {/* Logo - Left */}
          <a href="#home" className="logo-modern">
            <div className="logo-cake">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Plateau */}
                <ellipse cx="50" cy="90" rx="35" ry="8" fill="#8B4513" />
                {/* Base gâteau */}
                <path d="M20 55 Q20 50 25 50 L75 50 Q80 50 80 55 L80 75 Q80 80 75 80 L25 80 Q20 80 20 75 Z" fill="#D2691E" />
                {/* Glaçage base */}
                <path d="M18 55 Q25 45 35 52 Q45 42 55 50 Q65 40 75 50 Q82 45 82 55 Q80 58 75 55 Q65 62 55 55 Q45 62 35 55 Q25 62 18 55" fill="#C9A961" />
                {/* Étape milieu */}
                <path d="M30 35 Q30 30 35 30 L65 30 Q70 30 70 35 L70 50 Q70 53 65 53 L35 53 Q30 53 30 50 Z" fill="#CD853F" />
                {/* Glaçage milieu */}
                <path d="M28 35 Q35 25 42 32 Q50 22 58 30 Q65 22 72 30 Q78 28 72 35 Q70 38 65 35 Q58 42 50 35 Q42 42 35 35 Q30 38 28 35" fill="#D4AF37" />
                {/* Étape haut */}
                <ellipse cx="50" cy="28" rx="18" ry="8" fill="#A0522D" />
                {/* Glaçage haut */}
                <ellipse cx="50" cy="26" rx="16" ry="6" fill="#E8D5A3" />
                {/* Cerise */}
                <circle cx="50" cy="18" r="6" fill="#DC143C" />
                <path d="M50 12 Q52 8 55 6" stroke="#228B22" strokeWidth="2" fill="none" />
                {/* Décoration étoiles */}
                <text x="35" y="68" fontSize="8" fill="#FFF">✦</text>
                <text x="50" y="68" fontSize="8" fill="#FFF">✦</text>
                <text x="65" y="68" fontSize="8" fill="#FFF">✦</text>
              </svg>
            </div>
            <div className="logo-brand">
              <span className="logo-text">Cherry</span>
              <span className="logo-subtext">Cake</span>
            </div>
          </a>

          {/* Navigation - Center */}
          <nav className="nav-center">
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={menuOpen ? 'menu-open' : ''}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
              <li><a href="#menu" onClick={() => setMenuOpen(false)}>{t('nav.menu')}</a></li>
              <li><a href="#apropos" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
            </ul>
          </nav>

          {/* Controls - Right */}
          <div className="nav-right">
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="cart-pill" href="#cart">
              <span className="cart-icon">🛒</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </a>
            <a className="nav-cta" href="#contact">Commander</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
