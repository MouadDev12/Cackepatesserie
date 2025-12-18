import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Contact = () => {
  const { cart, getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let message = `Nom: ${formData.name}\nEmail/Téléphone: ${formData.email}\n\n`;
    
    if (cart.length > 0) {
      message += 'Commande:\n';
      cart.forEach(item => {
        message += `- ${item.name} x${item.quantity} = ${item.price * item.quantity} MAD\n`;
      });
      message += `\nTotal: ${getTotal()} MAD\n\n`;
    }
    
    message += `Message: ${formData.message}`;
    
    alert('Commande envoyée avec succès!\n\n' + message);
    setFormData({ name: '', email: '', message: '' });
    clearCart();
  };

  return (
    <section id="contact" style={{ marginTop: '36px' }}>
      <div className="panel">
        <h3>Contact & Commande</h3>
        <form onSubmit={handleSubmit}>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nom complet"
            className="contact-input"
          />
          <input
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email / Téléphone"
            className="contact-input"
          />
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="4"
            placeholder="Message ou détails de commande"
            className="contact-textarea"
          />
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <button className="cta" type="submit">Envoyer</button>
            <button type="button" onClick={() => setFormData({ name: '', email: '', message: '' })}>
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
