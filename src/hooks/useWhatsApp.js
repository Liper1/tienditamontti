/**
 * Hook y utilidades para integración con WhatsApp Business
 */

const WHATSAPP_NUMBER = '56987670078';
const WHATSAPP_BASE_URL = 'https://wa.me/';

/**
 * Genera URL de WhatsApp con mensaje pre-llenado
 */
export const generateWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};

/**
 * Mensaje personalizado para consulta de producto
 */
export const getProductMessage = (productName, productPrice) => {
  return `¡Hola! Me interesa el producto: *${productName}* (${productPrice}). ¿Está disponible? ¿Me puedes dar más información?`;
};

/**
 * Mensaje general de consulta
 */
export const getGeneralMessage = () => {
  return '¡Hola! Me gustaría consultar sobre sus productos de joyería. ¿Pueden ayudarme?';
};

/**
 * Mensaje para consultar catálogo completo
 */
export const getCatalogMessage = () => {
  return '¡Hola! Me gustaría ver el catálogo completo de productos. ¿Me lo pueden compartir?';
};

/**
 * Mensaje para consulta por categoría
 */
export const getCategoryMessage = (categoryName) => {
  return `¡Hola! Estoy interesado/a en sus ${categoryName}. ¿Qué modelos tienen disponibles?`;
};

/**
 * Abre WhatsApp en nueva pestaña
 */
export const openWhatsApp = (message = '') => {
  const url = generateWhatsAppLink(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Hook para usar WhatsApp en componentes
 */
export const useWhatsApp = () => {
  const contactProduct = (productName, productPrice) => {
    const message = getProductMessage(productName, productPrice);
    openWhatsApp(message);
  };

  const contactGeneral = () => {
    const message = getGeneralMessage();
    openWhatsApp(message);
  };

  const contactCatalog = () => {
    const message = getCatalogMessage();
    openWhatsApp(message);
  };

  const contactCategory = (categoryName) => {
    const message = getCategoryMessage(categoryName);
    openWhatsApp(message);
  };

  return {
    contactProduct,
    contactGeneral,
    contactCatalog,
    contactCategory,
    openWhatsApp
  };
};

export default useWhatsApp;
