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
  // RELOJES (5 productos)
  {
    id: 1,
    name: 'Reloj Elegante + Pulsera Morada Variante 1',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj1.jpeg'),
    description: 'Reloj elegante circular con pulsera morada con circones',
    featured: true
  },
  {
    id: 2,
    name: 'Reloj Elegante + Pulsera Negra Variante 1',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj2.jpeg'),
    description: 'Reloj elegante cuadrado con pulsera negra con circones',
    featured: false
  },
  {
    id: 3,
    name: 'Reloj Elegante + Pulsera Verde',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj3.jpeg'),
    description: 'Reloj elegante circular con pulsera verde con circones',
    featured: false
  },
  {
    id: 4,
    name: 'Reloj Elegante + Pulsera Morada Variante 2',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj4.jpeg'),
    description: 'Reloj elegante cuadrado con pulsera morada con circones',
    featured: false
  },
  {
    id: 25,
    name: 'Reloj Elegante + Pulsera Negra Variante 2',
    category: 'relojes',
    price: '$10.000',
    image: getImagePath('reloj_pulsera_negro_variante2.jpeg'),
    description: 'Reloj elegante circular con pulsera negra con circones',
    featured: false
  },

  // AROS (10 productos)
  {
    id: 5,
    name: 'Aros Argolla Variante 1',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro1.jpeg'),
    description: 'Aros argolla pareja en acero dorado brillante',
    featured: true
  },
  {
    id: 6,
    name: 'Aros Argolla Variante 2',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro2.jpeg'),
    description: 'Aros argolla con diseño de ancla',
    featured: false
  },
  {
    id: 7,
    name: 'Aros Argolla Variante 3',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro3.jpeg'),
    description: 'Aros argolla elegantes de acero inoxidable pulido',
    featured: false
  },
  {
    id: 8,
    name: 'Aros Argolla Variante 4',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro4.jpeg'),
    description: 'Aros largos con diseño colgante moderno',
    featured: false
  },
  {
    id: 9,
    name: 'Aros Argolla Variante 5',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro5.jpeg'),
    description: 'Aros argolla con diseño de corazón',
    featured: false
  },
  {
    id: 27,
    name: 'Aros Brillantes',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aros_brillosos.jpeg'),
    description: 'Aros con acabado brillante y cristales decorativos (precio por unidad)',
    featured: true
  },
  {
    id: 32,
    name: 'Aros Argolla Variante 6',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro6.jpeg'),
    description: 'Aros argolla con diseño geométrico moderno',
    featured: false
  },
  {
    id: 33,
    name: 'Aros Argolla Variante 7',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro7.jpeg'),
    description: 'Aros cuadrados con brillos decorativos',
    featured: false
  },
  {
    id: 34,
    name: 'Aros Argolla Variante 8',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro8.jpeg'),
    description: 'Aros argolla con pelotitas brillantes',
    featured: false
  },
  {
    id: 35,
    name: 'Aros Argolla Variante 9',
    category: 'aros',
    price: '$2.000',
    image: getImagePath('aro9.jpeg'),
    description: 'Aros argolla elegantes de acero inoxidable',
    featured: false
  },

  // PULSERAS (7 productos)
  {
    id: 10,
    name: 'Pulsera Dorada Variante 1',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera1.jpeg'),
    description: 'Pulsera dorada de acero quirúrgico con diseño spiral',
    featured: true
  },
  {
    id: 11,
    name: 'Pulsera Dorada Variante 2',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera2.jpeg'),
    description: 'Pulsera dorada de acero quirúrgico con estrellas de mar',
    featured: false
  },
  {
    id: 12,
    name: 'Pulsera Dorada Variante 3',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera3.jpeg'),
    description: 'Pulsera dorada de acero quirúrgico con conchas de mar',
    featured: false
  },
  {
    id: 13,
    name: 'Pulsera Dorada Variante 4',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera4.jpeg'),
    description: 'Pulsera dorada de acero quirúrgico con peces',
    featured: false
  },
  {
    id: 14,
    name: 'Pulsera Dorada Variante 5',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulsera5.jpeg'),
    description: 'Pulsera dorada de acero quirúrgico con mariposas',
    featured: false
  },
  {
    id: 24,
    name: 'Pulseras Van Cleef',
    category: 'pulseras',
    price: '$3.000',
    image: getImagePath('pulseras_van_cleef.jpeg'),
    description: 'Pulsera estilo Van Cleef en acero inoxidable premium (precio por unidad)',
    featured: true
  },
  {
    id: 26,
    name: 'Pulseras de Hilo',
    category: 'pulseras',
    price: '$2.000',
    image: getImagePath('pulseras_de_hilo.jpeg'),
    description: 'Pulsera tejida de hilo resistente y colorida (precio por unidad)',
    featured: false
  },

  // COLLARES (9 productos)
  {
    id: 15,
    name: 'Collar Cinta Variante 1',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta1.jpeg'),
    description: 'Collar cinta marino de acero inoxidable elegante',
    featured: true
  },
  {
    id: 16,
    name: 'Collar Cinta Variante 2',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta2.jpeg'),
    description: 'Collar cinta con dije de tortuga en acero dorado',
    featured: false
  },
  {
    id: 28,
    name: 'Collar Cinta Variante 3',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta3.jpeg'),
    description: 'Collar cinta con dije de caballo de mar en acero dorado',
    featured: false
  },
  {
    id: 29,
    name: 'Collar Cinta Variante 4',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta4.jpeg'),
    description: 'Collar cinta con dije de trébol en acero dorado',
    featured: false
  },
  {
    id: 30,
    name: 'Collar Cinta Variante 5',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_cinta5.jpeg'),
    description: 'Collar cinta con dije de cerezas en acero dorado',
    featured: false
  },
  {
    id: 17,
    name: 'Collar Rose Doble',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_doble_1.jpeg'),
    description: 'Collar rose doble con cristales brillantes',
    featured: false
  },
  {
    id: 31,
    name: 'Collar Rose Doble Variante 2',
    category: 'collares',
    price: '$4.500',
    image: getImagePath('collar_doble2.jpeg'),
    description: 'Collar rose doble con dije de concha de mar en acero dorado',
    featured: true
  },
  {
    id: 18,
    name: 'Collar Triple Variante 1',
    category: 'collares',
    price: '$3.500',
    image: getImagePath('collar_triple_variante1.jpeg'),
    description: 'Collar delicado con perla sintética central',
    featured: false
  },
  {
    id: 19,
    name: 'Collar Triple Variante 2',
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
    featured: false
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
    featured: false
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
