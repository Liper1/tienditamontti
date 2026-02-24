// Supabase client for public store
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://opljkexcomkcajchcybr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbGprZXhjb21rY2FqY2hjeWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjY2NjQsImV4cCI6MjA4NzU0MjY2NH0.f-nn5HgYydB_mBvosJPLE228vn_iskO1qGVsG1BkRXk';
const storageUrl = `${supabaseUrl}/storage/v1/object/public/imagenes`;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Get full image URL from filename
 */
const getImageUrl = (imageUrl) => {
  if (!imageUrl) return '';
  // If already a full URL, return as-is
  if (imageUrl.startsWith('http')) return imageUrl;
  // Otherwise, build the full Supabase storage URL
  return `${storageUrl}/${imageUrl}`;
};

/**
 * Fetch all products from Supabase
 */
export const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('available', true)
    .order('category', { ascending: true });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  // Transform to match existing format
  return data.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    image: getImageUrl(product.image_url),
    description: product.description,
    featured: product.featured || false,
  }));
};

/**
 * Fetch all categories from Supabase
 */
export const fetchCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  // Add "all" category at the beginning
  const allCategory = { id: 'all', name: 'Todos', icon: '', color: '#d4af37' };
  
  const categories = data.map(cat => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon || '',
    color: cat.color || '#d4af37',
  }));

  return [allCategory, ...categories];
};

/**
 * Fetch products by category
 */
export const fetchProductsByCategory = async (categoryId) => {
  if (categoryId === 'all') {
    return fetchProducts();
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', categoryId)
    .eq('available', true)
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    image: getImageUrl(product.image_url),
    description: product.description,
    featured: product.featured || false,
  }));
};

/**
 * Fetch featured products
 */
export const fetchFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .eq('available', true)
    .limit(6);

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    image: getImageUrl(product.image_url),
    description: product.description,
    featured: true,
  }));
};
