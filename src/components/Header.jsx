import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="brand">
            <div className="logo-mark">SC</div>
            <div>
              <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: 'var(--text)' }}>
                SweetCake
              </div>
              <div className="small muted">Pâtisserie artisanale</div>
            </div>
          </div>
          <nav>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            <ul className={menuOpen ? 'menu-open' : ''}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
              <li><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a className="cart-badge" href="#cart">
              🛒 {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </a>
            <a className="cta" href="#contact">Commander</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
