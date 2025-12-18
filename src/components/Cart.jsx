import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="panel cart-panel" id="cart">
        <h3>Panier</h3>
        <p className="small muted">Votre panier est vide</p>
      </div>
    );
  }

  return (
    <div className="panel cart-panel" id="cart">
      <h3>Panier ({cart.length})</h3>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} style={{ width: '50px', borderRadius: '8px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: 'var(--text)' }}>{item.name}</div>
            <div className="small">{item.price} MAD</div>
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
        <span>Total:</span>
        <span style={{ color: 'var(--accent)' }}>{getTotal()} MAD</span>
      </div>
      <a href="#contact" className="cta" style={{ display: 'block', textAlign: 'center', marginTop: '12px' }}>
        Finaliser la commande
      </a>
    </div>
  );
};

export default Cart;
