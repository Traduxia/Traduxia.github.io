// Configuración editable de la agencia.
// Cambia aquí los datos de contacto y se propagan a toda la web.

export const PENDIENTE = 'Por confirmar';

export const empresa = {
  nombre: 'Traduxia Idiomas',
  eslogan: 'Traducimos palabras, conservamos voces',
  descripcion:
    'Traduxia Idiomas: traducimos palabras, conservamos voces. Agencia de traducción e interpretación en más de 30 idiomas. Pide presupuesto por WhatsApp.',

  // Dominio y URLs absolutas (necesarias para SEO / Open Graph).
  // Sitio de GitHub Pages; cambiar cuando haya dominio propio.
  dominio: 'https://traduxia.github.io',

  // Contacto
  email: 'ag.traduxiaidiomas@gmail.com',
  telefono: '635 993 000',
  // Número en formato internacional sin "+" ni espacios, p. ej. '34635993000'.
  whatsapp: '34635993000',
  mensajeWhatsapp: 'Hola, me gustaría pedir un presupuesto de traducción',

  // Sede: Facultad de Filosofía y Letras (Universidad de Córdoba).
  direccion: {
    calle: 'Facultad de Filosofía y Letras, Pza. del Cardenal Salazar, 3',
    cp: '14003',
    localidad: 'Córdoba',
    provincia: 'Córdoba',
    pais: 'ES',
    lat: 37.8789,
    lng: -4.7794,
    // Búsqueda específica para el mapa: como nombre de lugar conocido en
    // Google Maps geolocaliza mejor que reconstruir la dirección postal.
    mapaQuery: 'Facultad de Filosofía y Letras, Universidad de Córdoba',
  },

  horario: '7:00 - 15:00',
  // Para el JSON-LD (schema.org).
  openingHours: ['Mo-Fr 07:00-15:00'],
};

// Enlaces de navegación (nav del Header y del Footer).
export const enlaces = [
  { href: '#servicios', texto: 'Servicios' },
  { href: '#nosotros', texto: 'Nosotros' },
  { href: '#idiomas', texto: 'Idiomas' },
  { href: '#ubicacion', texto: 'Dónde estamos' },
  { href: '#contacto', texto: 'Contacto' },
];

// Enlace a WhatsApp con mensaje prellenado.
export function enlaceWhatsapp() {
  const numero = empresa.whatsapp || '34000000000';
  const texto = encodeURIComponent(empresa.mensajeWhatsapp);
  return `https://wa.me/${numero}?text=${texto}`;
}

// Dirección en una línea (para footer, JSON-LD legible, etc.)
export function direccionUnaLinea() {
  const d = empresa.direccion;
  return `${d.calle}, ${d.cp} ${d.localidad} (${d.provincia})`;
}
