import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const OrderSection = ({ isOpen, onClose }) => {
  const { cart, total } = useCart();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="order-overlay" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button className="order-close" onClick={onClose}>×</button>
        
        {submitted ? (
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h3>Commande envoyée !</h3>
            <p>Nous vous contacterons bientôt pour confirmer votre commande.</p>
          </div>
        ) : (
          <>
            <h3>Passer votre commande</h3>
            
            {cart.length > 0 ? (
              <div className="order-summary">
                <h4>Votre sélection</h4>
                {cart.map(item => (
                  <div key={item.id} className="order-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{(item.price * item.quantity).toFixed(2)} DH</span>
                  </div>
                ))}
                <div className="order-total">
                  <strong>Total: {total.toFixed(2)} DH</strong>
                </div>
              </div>
            ) : (
              <p className="order-empty">Votre panier est vide. Ajoutez des produits d'abord !</p>
            )}

            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-group">
                <label>Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label>Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div className="form-group">
                <label>Adresse de livraison *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Votre adresse complète"
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label>Notes (optionnel)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Instructions spéciales..."
                  rows="2"
                />
              </div>

              <button 
                type="submit" 
                className="order-submit"
                disabled={cart.length === 0}
              >
                Confirmer la commande
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
