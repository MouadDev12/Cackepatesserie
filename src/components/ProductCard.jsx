import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  return (
    <div className="card">
      <div className="thumb">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="body">
        <h4>{product.name}</h4>
        <p className="small muted">{product.desc}</p>
        <div className="price">{product.price} {t('menu.currency')}</div>
      </div>
      <div className="actions">
        <button className="btn-add-to-cart" onClick={() => addToCart(product)}>
          <span className="btn-icon">+</span>
          <span className="btn-text">{t('menu.addToCart')}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
