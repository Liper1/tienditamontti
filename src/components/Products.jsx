import React from 'react';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Anillo de Acero Plateado',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Collar Minimalista',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Pulsera Cadena Fina',
      price: '$18.99',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Aretes Circulares',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Collar Colgante Corazón',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Set de Anillos',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <p className="section-description">
          Explora nuestra selección de joyas de acero inoxidable de alta calidad
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
