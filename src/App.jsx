import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';

function App() {
  return (
    <CartProvider>
      <Header />
      
      <main className="container">
        <Hero />

        <section id="menu" className="panel products-panel">
          <h3>Menu</h3>
          <div className="products">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px', marginTop: '36px' }}>
          <div>
            <About />
            <Contact />
          </div>
          <Cart />
        </div>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
