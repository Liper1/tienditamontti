import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '../data/products';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.1 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const filteredProducts = getProductsByCategory(selectedCategory);

  // Animación al cambiar categoría
  const handleCategoryChange = (newCategory) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(newCategory);
      setIsTransitioning(false);
    }, 300);
  };

  // Abrir detalle de producto
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Bloquear scroll del body
  };

  // Cerrar detalle de producto
  const handleCloseDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restaurar scroll
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div 
          ref={titleRef}
          className={`section-header scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <h2 className="section-title">Nuestro Catálogo</h2>
          <p className="section-description">
            Explora nuestra colección exclusiva de joyería de acero inoxidable.
            Encuentra el complemento perfecto para tu estilo.
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="products-grid-wrapper">
          {filteredProducts.length > 0 ? (
            <div className={`products-grid ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  index={index}
                  onViewDetails={handleProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No hay productos disponibles en esta categoría.</p>
            </div>
          )}
        </div>

        <div className="products-cta">
          <p className="cta-text">¿No encuentras lo que buscas?</p>
          <a 
            href="https://wa.me/56987670078?text=Hola!%20Me%20gustaría%20ver%20más%20opciones%20de%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-cta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Contáctanos por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Modal de detalle de producto */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          onClose={handleCloseDetail}
          onProductSelect={handleProductClick}
        />
      )}
    </section>
  );
}

export default Products;
