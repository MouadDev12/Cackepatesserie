import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderSection from './components/OrderSection';
import { PRODUCTS, CATEGORIES } from './data/products';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showOrder, setShowOrder] = useState(false);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Header onOpenOrder={() => setShowOrder(true)} />
      
          <main className="container">
            <Hero />

            <section id="menu" className="panel products-panel">
              <h3>Menu</h3>
              <CategoryFilter 
                categories={CATEGORIES} 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory}
              />
              <div className="products">
                {filteredProducts.map(product => (
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
          <OrderSection isOpen={showOrder} onClose={() => setShowOrder(false)} />
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
