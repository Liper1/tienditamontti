// Catálogo de productos - Tiendita Montti
// Organizados por categorías

// Helper para construir rutas de imágenes
const getImagePath = (filename) => `${import.meta.env.BASE_URL}assets/products/${filename}`;

export const categories = [
  { id: 'all', name: 'Todos', icon: '', color: '#d4af37' },
  { id: 'relojes', name: 'Relojes', icon: '', color: '#d4af37' },
  { id: 'aros', name: 'Aros', icon: '', color: '#f4d03f' },
  { id: 'pulseras', name: 'Pulseras', icon: '', color: '#d4d03f' },
  { id: 'collares', name: 'Collares', icon: '', color: '#f4d03f' },
  { id: 'conjuntos', name: 'Conjuntos', icon: '', color: '#b8930f' }
];

export const products = [
  // RELOJES (4 productos)
  {
    id: 1,
    name: 'Reloj Minimalista Gold',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj1.jpeg'),
    description: 'Reloj de acero inoxidable con detalles dorados, correa ajustable',
    featured: true
  },
  {
    id: 2,
    name: 'Reloj Clásico Negro',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj2.jpeg'),
    description: 'Reloj elegante en acero negro mate, resistente al agua',
    featured: false
  },
  {
    id: 3,
    name: 'Reloj Deportivo Premium',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj3.jpeg'),
    description: 'Reloj deportivo de acero con cronógrafo',
    featured: true
  },
  {
    id: 4,
    name: 'Reloj Elegante Plateado',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj4.jpeg'),
    description: 'Reloj clásico de acero plateado con cristal zafiro',
    featured: false
  },

  // AROS (5 productos)
  {
    id: 5,
    name: 'Aros Circulares Gold',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro1.jpeg'),
    description: 'Aros circulares medianos en acero dorado brillante',
    featured: true
  },
  {
    id: 6,
    name: 'Aros Mini Perla',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro2.jpeg'),
    description: 'Aros pequeños con detalle de perla sintética',
    featured: false
  },
  {
    id: 7,
    name: 'Aros Argolla Grande',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro3.jpeg'),
    description: 'Argollas grandes de acero inoxidable pulido',
    featured: true
  },
  {
    id: 8,
    name: 'Aros Colgantes Elegantes',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro4.jpeg'),
    description: 'Aros largos con diseño colgante moderno',
    featured: false
  },
  {
    id: 9,
    name: 'Aros Geométricos',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro5.jpeg'),
    description: 'Aros con diseño geométrico minimalista',
    featured: false
  },

  // PULSERAS (5 productos)
  {
    id: 10,
    name: 'Pulsera Cadena Fina',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera1.jpeg'),
    description: 'Pulsera de cadena delgada en acero dorado',
    featured: true
  },
  {
    id: 11,
    name: 'Pulsera Eslabones Gruesa',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera2.jpeg'),
    description: 'Pulsera de eslabones anchos estilo cubano',
    featured: false
  },
  {
    id: 12,
    name: 'Pulsera Dije Corazón',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera3.jpeg'),
    description: 'Pulsera delicada con dije de corazón',
    featured: true
  },
  {
    id: 13,
    name: 'Pulsera Rígida Gold',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera4.jpeg'),
    description: 'Brazalete rígido en acero dorado brillante',
    featured: false
  },
  {
    id: 14,
    name: 'Pulsera Triple Cadena',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera5.jpeg'),
    description: 'Pulsera con triple cadena entrelazada',
    featured: false
  },

  // COLLARES (5 productos)
  {
    id: 15,
    name: 'Collar Minimalista Fino',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta1.jpeg'),
    description: 'Collar de cadena fina simple y elegante',
    featured: true
  },
  {
    id: 16,
    name: 'Collar Colgante Corazón',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta2.jpeg'),
    description: 'Collar con dije de corazón en acero dorado',
    featured: true
  },
  {
    id: 17,
    name: 'Collar Cadena Gruesa',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_doble_1.jpeg'),
    description: 'Collar de eslabones medianos estilo moderno',
    featured: false
  },
  {
    id: 18,
    name: 'Collar Perla Elegante',
    category: 'collares',
    price: '$3.500',
    image: getImagePath('collar_triple_variante1.jpeg'),
    description: 'Collar delicado con perla sintética central',
    featured: false
  },
  {
    id: 19,
    name: 'Collar Capas Dorado',
    category: 'collares',
    price: '$3.500',
    image: getImagePath('collar_triple_variante2.jpeg'),
    description: 'Collar de múltiples capas en acero dorado',
    featured: false
  },

  // CONJUNTOS (4 productos)
  {
    id: 20,
    name: 'Set Van Cleef Trébol Blanco',
    category: 'conjuntos',
    price: '$7.000',
    image: getImagePath('conjunto_trebol_blanco.jpeg'),
    description: 'Conjunto inspirado en Van Cleef con diseño de trébol',
    featured: true
  },
  {
    id: 21,
    name: 'Set Van Cleef Corazones Blanco',
    category: 'conjuntos',
    price: '$7.000',
    image: getImagePath('conjunto_blanco_corazones.jpeg'),
    description: 'Set Van Cleef de 3 piezas con diseño de corazones elegante',
    featured: true
  },
  {
    id: 22,
    name: 'Set Van Cleef Trébol Negro',
    category: 'conjuntos',
    price: '$7.000',
    image: getImagePath('conjunto_trebol_negro.jpeg'),
    description: 'Conjunto Van Cleef con diseño de trébol en acabado negro',
    featured: false
  },
  {
    id: 23,
    name: 'Set Van Cleef Corazones Negro',
    category: 'conjuntos',
    price: '$7.000',
    image: getImagePath('conjunto_negro_corazones.jpeg'),
    description: 'Set completo Van Cleef con corazones en acabado negro elegante',
    featured: true
  }
];

// Función helper para obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
};

// Función helper para obtener productos destacados
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Función helper para obtener producto por ID
export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export default products;
