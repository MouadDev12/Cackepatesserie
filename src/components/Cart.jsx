import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const { t } = useLanguage();

  if (cart.length === 0) {
    return (
      <div className="panel cart-panel" id="cart">
        <h3>{t('cart.title')}</h3>
        <p className="small muted">{t('cart.empty')}</p>
      </div>
    );
  }

  return (
    <div className="panel cart-panel" id="cart">
      <h3>{t('cart.title')} ({cart.length})</h3>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} style={{ width: '50px', borderRadius: '8px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: 'var(--text)' }}>{item.name}</div>
            <div className="small">{item.price} {t('menu.currency')}</div>
          </div>
          <div className="qty">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#e74c3c' }}>
            🗑️
          </button>
        </div>
      ))}
      <div className="cart-summary">
        <span>{t('cart.total')}:</span>
        <span style={{ color: 'var(--accent)' }}>{getTotal()} {t('menu.currency')}</span>
      </div>
      <a href="#contact" className="cta" style={{ display: 'block', textAlign: 'center', marginTop: '12px' }}>
        {t('cart.checkout')}
      </a>
    </div>
  );
};

export default Cart;
