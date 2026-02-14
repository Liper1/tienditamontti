import React from 'react';
import { categories } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`category-filter scroll-reveal-up ${isRevealed ? 'revealed' : ''}`}
    >
      <div className="category-filter-wrapper">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-btn scroll-reveal-stagger ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <span className="category-name">{category.name}</span>
            {selectedCategory === category.id && (
              <span className="category-indicator"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;