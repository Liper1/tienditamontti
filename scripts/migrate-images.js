#!/usr/bin/env node
/**
 * Script de migración de imágenes a Supabase Storage
 * Sube todas las imágenes de productos y actualiza la base de datos
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase configuration
const SUPABASE_URL = 'https://opljkexcomkcajchcybr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbGprZXhjb21rY2FqY2hjeWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjY2NjQsImV4cCI6MjA4NzU0MjY2NH0.f-nn5HgYydB_mBvosJPLE228vn_iskO1qGVsG1BkRXk';
const BUCKET_NAME = 'imagenes';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Images directory
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'assets', 'products');

// Mapping from image filename to product data
const IMAGE_TO_PRODUCT = {
  'reloj1.jpeg': { name: 'Reloj Elegante + Pulsera Morada Variante 1' },
  'reloj2.jpeg': { name: 'Reloj Elegante + Pulsera Negra Variante 1' },
  'reloj3.jpeg': { name: 'Reloj Elegante + Pulsera Verde' },
  'reloj4.jpeg': { name: 'Reloj Elegante + Pulsera Morada Variante 2' },
  'reloj5.jpeg': { name: 'Reloj 5' },
  'reloj_pulsera_negro_variante2.jpeg': { name: 'Reloj Elegante + Pulsera Negra Variante 2' },
  'aro1.jpeg': { name: 'Aros Argolla Variante 1' },
  'aro2.jpeg': { name: 'Aros Argolla Variante 2' },
  'aro3.jpeg': { name: 'Aros Argolla Variante 3' },
  'aro4.jpeg': { name: 'Aros Argolla Variante 4' },
  'aro5.jpeg': { name: 'Aros Argolla Variante 5' },
  'aro6.jpeg': { name: 'Aros Argolla Variante 6' },
  'aro7.jpeg': { name: 'Aros Argolla Variante 7' },
  'aro8.jpeg': { name: 'Aros Argolla Variante 8' },
  'aro9.jpeg': { name: 'Aros Argolla Variante 9' },
  'aros_brillantes.jpeg': { name: 'Aros Brillantes' },
  'aros_brillosos.jpeg': { name: 'Aros Brillantes' },
  'pulsera1.jpeg': { name: 'Pulsera Dorada Variante 1' },
  'pulsera2.jpeg': { name: 'Pulsera Dorada Variante 2' },
  'pulsera3.jpeg': { name: 'Pulsera Dorada Variante 3' },
  'pulsera4.jpeg': { name: 'Pulsera Dorada Variante 4' },
  'pulsera5.jpeg': { name: 'Pulsera Dorada Variante 5' },
  'pulseras_van_cleef.jpeg': { name: 'Pulseras Van Cleef' },
  'pulseras_de_hilo.jpeg': { name: 'Pulseras de Hilo' },
  'collar_cinta1.jpeg': { name: 'Collar Cinta Variante 1' },
  'collar_cinta2.jpeg': { name: 'Collar Cinta Variante 2' },
  'collar_cinta3.jpeg': { name: 'Collar Cinta Variante 3' },
  'collar_cinta4.jpeg': { name: 'Collar Cinta Variante 4' },
  'collar_cinta5.jpeg': { name: 'Collar Cinta Variante 5' },
  'collar_doble_1.jpeg': { name: 'Collar Rose Doble' },
  'collar_doble2.jpeg': { name: 'Collar Rose Doble Variante 2' },
  'collar_triple_variante1.jpeg': { name: 'Collar Triple Variante 1' },
  'collar_triple_variante2.jpeg': { name: 'Collar Triple Variante 2' },
  'conjunto_trebol_blanco.jpeg': { name: 'Set Van Cleef Trébol Blanco' },
  'conjunto_blanco_corazones.jpeg': { name: 'Set Van Cleef Corazones Blanco' },
  'conjunto_trebol_negro.jpeg': { name: 'Set Van Cleef Trébol Negro' },
  'conjunto_negro_corazones.jpeg': { name: 'Set Van Cleef Corazones Negro' },
};

/**
 * Upload a single image to Supabase Storage
 */
const uploadImage = async (fileName) => {
  const filePath = path.join(IMAGES_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    return { success: false, error: `File not found: ${filePath}` };
  }

  const fileBuffer = fs.readFileSync(filePath);
  const contentType = 'image/jpeg';

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, fileBuffer, {
      contentType,
      cacheControl: '3600',
      upsert: true,
    });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
};

/**
 * Get public URL for an uploaded image
 */
const getPublicUrl = (fileName) => {
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(fileName);
  return data.publicUrl;
};

/**
 * Update product in database with new image URL
 */
const updateProductImage = async (productName, imageUrl) => {
  const { data, error } = await supabase
    .from('products')
    .update({ image_url: imageUrl, updated_at: new Date().toISOString() })
    .eq('name', productName)
    .select();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
};

/**
 * Main migration function
 */
const migrateImages = async () => {
  console.log('🚀 Iniciando migración de imágenes a Supabase Storage...\n');

  // Get list of images
  const imageFiles = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.jpeg'));
  console.log(`📁 Encontradas ${imageFiles.length} imágenes para migrar\n`);

  const results = {
    uploaded: [],
    updated: [],
    errors: [],
  };

  for (const fileName of imageFiles) {
    process.stdout.write(`⏳ Procesando: ${fileName}... `);

    // Upload image
    const uploadResult = await uploadImage(fileName);
    
    if (!uploadResult.success) {
      console.log(`❌ Error al subir: ${uploadResult.error}`);
      results.errors.push({ fileName, stage: 'upload', error: uploadResult.error });
      continue;
    }

    results.uploaded.push(fileName);
    const publicUrl = getPublicUrl(fileName);

    // Update product in database if mapping exists
    const productInfo = IMAGE_TO_PRODUCT[fileName];
    if (productInfo) {
      const updateResult = await updateProductImage(productInfo.name, publicUrl);
      
      if (!updateResult.success) {
        console.log(`⚠️ Subida OK, pero error al actualizar DB: ${updateResult.error}`);
        results.errors.push({ fileName, stage: 'database', error: updateResult.error });
      } else if (updateResult.data && updateResult.data.length > 0) {
        console.log(`✅ OK`);
        results.updated.push({ fileName, product: productInfo.name });
      } else {
        console.log(`⚠️ Subida OK, producto no encontrado en DB`);
      }
    } else {
      console.log(`✅ Subida OK (sin mapeo a producto)`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN DE MIGRACIÓN');
  console.log('='.repeat(50));
  console.log(`✅ Imágenes subidas: ${results.uploaded.length}`);
  console.log(`✅ Productos actualizados: ${results.updated.length}`);
  console.log(`❌ Errores: ${results.errors.length}`);

  if (results.errors.length > 0) {
    console.log('\n⚠️ Errores encontrados:');
    results.errors.forEach(err => {
      console.log(`   - ${err.fileName} (${err.stage}): ${err.error}`);
    });
  }

  console.log('\n🎉 Migración completada!\n');
};

// Run migration
migrateImages().catch(console.error);
