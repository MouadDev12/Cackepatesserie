import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <div className="thumb">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="body">
        <h4>{product.name}</h4>
        <p className="small muted">{product.desc}</p>
        <div className="price">{product.price} MAD</div>
      </div>
      <div className="actions">
        <button className="cta" onClick={() => addToCart(product)}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
