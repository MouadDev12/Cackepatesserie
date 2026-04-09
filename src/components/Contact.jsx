import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { cart, getTotal, clearCart } = useCart();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let message = `${t('contact.name')}: ${formData.name}\n${t('contact.email')}: ${formData.email}\n\n`;
    
    if (cart.length > 0) {
      message += `${t('contact.orderSummary')}:\n`;
      cart.forEach(item => {
        message += `- ${item.name} x${item.quantity} = ${item.price * item.quantity} ${t('menu.currency')}\n`;
      });
      message += `\n${t('cart.total')}: ${getTotal()} ${t('menu.currency')}\n\n`;
    }
    
    message += `${t('contact.message')}: ${formData.message}`;
    
    alert(`${t('contact.success')}\n\n${message}`);
    setFormData({ name: '', email: '', message: '' });
    clearCart();
  };

  return (
    <section id="contact" style={{ marginTop: '36px' }}>
      <div className="panel">
        <h3>Contact et Commander</h3>
        <form onSubmit={handleSubmit}>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('contact.name')}
            className="contact-input"
          />
          <input
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t('contact.email')}
            className="contact-input"
          />
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="4"
            placeholder={t('contact.message')}
            className="contact-textarea"
          />
          <div className="contact-buttons">
            <button className="btn-envoyer" type="submit">{t('contact.send')}</button>
            <button className="btn-reinitialiser" type="button" onClick={() => setFormData({ name: '', email: '', message: '' })}>
              {language === 'ar' ? 'إعادة تعيين' : 'Réinitialiser'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
