/* ============================================================
   FANIL — JavaScript principal
   ============================================================ */

/* =============================================
   UTILIDADES
   ============================================= */
function formatPrice(price) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/* Escapa texto para insertarlo de forma segura en HTML (evita XSS) */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

/* =============================================================
   PRODUCTOS
   IMPORTANTE: Actualiza los precios antes de publicar.
   Los precios están en pesos chilenos (CLP).
   ============================================================= */
const products = [
  // --- DETERGENTES ---
  {
    id: 1,
    name: "Detergente Brink's 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    originalPrice: 5500,
    image: "img/brinks-detergente-5lts.jpg",
    emoji: "🧺",
    badge: "popular",
    description: "Detergente líquido de alta eficiencia para toda la ropa."
  },
  {
    id: 2,
    name: "Detergente Brink's 4en1",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    image: "img/brinks-detergente-4en1.jpg",
    emoji: "🧺",
    description: "4 acciones en 1: limpia, suaviza, protege y perfuma."
  },
  {
    id: 3,
    name: "Detergente Brink's Suavizante 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    image: "img/brinks-detergente-suavizante-5lts.jpg",
    emoji: "🧺",
    description: "Con suavizante incluido. Deja la ropa perfecta y perfumada."
  },
  {
    id: 4,
    name: "Detergente Biofrescura 3L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 4500,
    originalPrice: 6200,
    image: "img/detergente-biofrescura-3lts.jpg",
    emoji: "🧺",
    description: "Fórmula concentrada para una limpieza profunda."
  },
  {
    id: 5,
    name: "Detergente Biofrescura Concentrado 3L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 4500,
    image: "img/detergente-biofrescura-concentrado-3lts.jpg",
    emoji: "🧺",
    description: "Alta concentración, rinde el doble. Aroma fresco duradero."
  },
  {
    id: 6,
    name: "Detergente Multiacción 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    image: "img/detergente-multiaccion-5lts.jpg",
    emoji: "🧺",
    description: "Elimina manchas difíciles con facilidad. Máximo rendimiento."
  },
  {
    id: 7,
    name: "Detergente RO 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3000,
    image: "img/detergente-ro-5lts.jpg",
    emoji: "🧺",
    description: "Ideal para lavadora y lavado a mano. Gran rendimiento."
  },
  {
    id: 17,
    name: "Detergente Brink's Suavizante Naranja 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    image: "img/brinks-detergente-suavizante-naranjo.jpg",
    emoji: "🧺",
    description: "Fragancia cítrica de naranja con suavizante integrado."
  },
  {
    id: 18,
    name: "Detergente Brink's Suavizante Sin Colorante 5L",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 3700,
    image: "img/brinks-detergente-suavizante-sin-colorante.jpg",
    emoji: "🧺",
    description: "Fórmula sin colorantes, suave para pieles sensibles."
  },
  {
    id: 19,
    name: "Detergente OMO 400ml",
    category: "detergentes",
    categoryLabel: "Detergentes",
    price: 1100,
    image: "img/detergente-omo-400ml.jpg",
    emoji: "🧺",
    badge: "nuevo",
    description: "Formato compacto de la marca líder. Eficaz en agua fría."
  },

  // --- LAVALOZAS ---
  {
    id: 8,
    name: "Lavaloza Concentrado 2L",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 2000,
    originalPrice: 2900,
    image: "img/lavalosas-concentrado-2l.jpg",
    emoji: "🍽️",
    description: "Fórmula concentrada que elimina la grasa al instante."
  },
  {
    id: 9,
    name: "Lavaloza Brink's Pomelo Menta 2L",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 2000,
    image: "img/brinks-lavaloza-pomelo-menta-2lts.jpg",
    emoji: "🍋",
    description: "Aroma cítrico y refrescante. Suave con tus manos."
  },
  {
    id: 10,
    name: "Lavaloza Brink's Concentrado 2L",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 2000,
    image: "img/brinks-lavalozas-concentrado-2lts.jpg",
    emoji: "🍽️",
    description: "Alta concentración para mayor rendimiento por litro."
  },
  {
    id: 11,
    name: "Lavaloza Teddy 500ml",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 1000,
    image: "img/lavaloza-teddy-500ml.jpg",
    emoji: "🍽️",
    description: "Formato práctico para uso diario. Eficaz y económico."
  },
  {
    id: 12,
    name: "Quix 500ml",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 1300,
    image: "img/quix_500ml.jpg",
    emoji: "🍽️",
    badge: "popular",
    description: "La marca clásica de confianza para el lavado de loza."
  },

  // --- JABONES Y LIMPIEZA ---
  {
    id: 13,
    name: "Jabón Lux",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 500,
    image: "img/jabon-lux.jpg",
    emoji: "🧼",
    description: "Jabón suave con hidratantes naturales. Piel suave y perfumada."
  },
  {
    id: 24,
    name: "Jabón Lux Jazmín",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 500,
    image: "img/jabon-lux-jasmine.jpg",
    emoji: "🧼",
    description: "Fragancia floral de jazmín. Hidrata y perfuma la piel."
  },
  {
    id: 14,
    name: "Jabón Popeye",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1000,
    image: "img/jabon-popeye.jpg",
    emoji: "🧼",
    description: "Jabón multiuso potente. Ideal para el lavado a mano."
  },
  {
    id: 25,
    name: "Jabón Dove",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1000,
    image: "img/jabon-barra-dove.jpg",
    emoji: "🧼",
    badge: "popular",
    description: "Con 1/4 de crema hidratante. Cuida tu piel en cada lavado."
  },
  {
    id: 26,
    name: "Jabón Protex Avena",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1000,
    image: "img/jabon-barra-protex-avena.jpg",
    emoji: "🧼",
    description: "Protección antibacterial con avena. Suave con la piel."
  },
  {
    id: 27,
    name: "Jabón Le Sancy Almendras",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-barra-lesancy-almendras.jpg",
    emoji: "🧼",
    description: "Enriquecido con aceite de almendras. Aroma suave y agradable."
  },
  {
    id: 28,
    name: "Jabón Le Sancy Karité",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-barra-lesancy-karite.jpg",
    emoji: "🧼",
    badge: "nuevo",
    description: "Con manteca de karité para una hidratación profunda."
  },
  {
    id: 29,
    name: "Jabón Le Sancy Higiénico",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-barra-lesancy-hygienic.jpg",
    emoji: "🧼",
    description: "Fórmula higiénica de limpieza profunda para toda la familia."
  },
  {
    id: 30,
    name: "Jabón Líquido Ballerina Avena",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-ballerina-avena.jpg",
    emoji: "🧴",
    description: "Jabón líquido con avena. Suave y nutritivo para las manos."
  },
  {
    id: 31,
    name: "Jabón Líquido Ballerina Eucalipto",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-ballerina-eucalipto.jpg",
    emoji: "🧴",
    description: "Aroma fresco a eucalipto. Limpieza efectiva con toque herbal."
  },
  {
    id: 32,
    name: "Jabón Cremoso Yogurt y Arándanos",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-cremoso-yogurt-arandanos.jpg",
    emoji: "🧴",
    description: "Textura cremosa con yogurt y arándanos. Piel suave y nutrida."
  },
  {
    id: 33,
    name: "Jabón Líquido Hipoalergénico",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-hipoalergenico.jpg",
    emoji: "🧴",
    description: "Formulado para pieles sensibles. Sin perfume ni colorantes."
  },
  {
    id: 34,
    name: "Jabón Líquido Io Avena",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-io-avena.jpg",
    emoji: "🧴",
    description: "Con extracto de avena. Hidrata y suaviza en cada lavado."
  },
  {
    id: 35,
    name: "Jabón Líquido Io Crema Humectante",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-io-crema-humectante.jpg",
    emoji: "🧴",
    description: "Crema humectante de uso diario. Deja las manos suaves y protegidas."
  },
  {
    id: 36,
    name: "Jabón Líquido Io Marina",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-io-marina.jpg",
    emoji: "🧴",
    badge: "nuevo",
    description: "Fragancia marina fresca y limpia. Ideal para el baño."
  },
  {
    id: 37,
    name: "Jabón Líquido Io Rosas",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-io-rosas.jpg",
    emoji: "🧴",
    description: "Delicada fragancia a rosas. Limpieza suave con aroma floral."
  },
  {
    id: 38,
    name: "Jabón Líquido Io Violeta",
    category: "jabones-limpieza",
    categoryLabel: "Jabones",
    price: 1300,
    image: "img/jabon-liquido-io-violeta.jpg",
    emoji: "🧴",
    description: "Aroma suave a violeta con fórmula hidratante para manos delicadas."
  },
  {
    id: 15,
    name: "Limpiapisos Cítrico",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 1000,
    image: "img/limpiapisos-citrico.jpg",
    emoji: "✨",
    description: "Limpieza profunda de pisos con agradable aroma cítrico."
  },
  {
    id: 16,
    name: "Virginia 1L",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 1300,
    image: "img/lavalozas-virginia1l.jpg",
    emoji: "🍽️",
    description: "Producto multipropósito para un hogar perfectamente limpio."
  },
  {
    id: 20,
    name: "Limpiapisos Brillex Lavanda 900ml",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 1000,
    image: "img/limpiapisos-brillex-900ml-lavanda.jpg",
    emoji: "✨",
    description: "Aroma relajante a lavanda. Limpia y brilla en un solo paso."
  },
  {
    id: 21,
    name: "Limpiapisos Brink's Lavanda 2L",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 1800,
    image: "img/limpiapisos-brinks-2lts-lavanda.jpg",
    emoji: "✨",
    description: "Formato familiar con fragancia suave a lavanda. Gran rendimiento."
  },
  {
    id: 22,
    name: "Limpiapisos Brink's Manzana-Canela 2L",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 1800,
    image: "img/limpiapisos-brinks-2lts-manzana-canela.jpg",
    emoji: "✨",
    description: "Fragancia cálida a manzana y canela. Deja el hogar perfumado."
  },
  {
    id: 23,
    name: "Limpiapisos Spum Variedades",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 2000,
    originalPrice: 2800,
    image: "img/limpiapisos-spum-variedades.jpg",
    emoji: "✨",
    description: "Disponible en múltiples aromas. Limpieza efectiva para todo tipo de pisos."
  },

  // --- LAVALOZAS (nuevos) ---
  {
    id: 45,
    name: "Lavaloza Concentrado Limón 500ml",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 1000,
    image: "img/lavaloza-teddy-concentrado-limon.webp",
    emoji: "🍋",
    description: "Fórmula concentrada con aroma a limón. Elimina la grasa al instante."
  },

  // --- CUIDADO PERSONAL ---
  {
    id: 39,
    name: "Nivea Crema Corporal 1L",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 8700,
    image: "img/nivea-crema-corporal-1000ml.jpg",
    emoji: "🧴",
    badge: "popular",
    description: "Para piel áspera y extra seca. Regeneración intensiva con glicerina."
  },
  {
    id: 156,
    name: "Nivea Crema Corporal Milk Nutritiva 1L",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 7700,
    image: "img/nivea-crema-milk-nutritiva-1l.jpg",
    emoji: "🧴",
    description: "Crema corporal Nivea Milk Nutritiva 1 litro. 48h de hidratación profunda con aceite de almendras y vitamina E."
  },
  {
    id: 157,
    name: "NUA Crema Capilar Argán 1000ml",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 3000,
    image: "img/nua-crema-capilar-argan-1000ml.jpg",
    emoji: "💆",
    description: "Crema capilar NUA Argán 1000ml. Anti ondulamiento con péptidos alisantes para cabello más liso y manejable."
  },
  {
    id: 158,
    name: "IO Crema Humectante Placenta 1000ml",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 3000,
    image: "img/io-crema-humectante-placenta-1000ml.jpg",
    emoji: "🧴",
    description: "Crema humectante IO Placenta 1000ml. Hidratación profunda para manos y cuerpo. Restaura elasticidad y suavidad."
  },
  {
    id: 159,
    name: "Nivea Crema Corporal Soft Milk 5en1 1000ml",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 7700,
    image: "img/nivea-crema-soft-milk-1000ml.jpg",
    emoji: "🧴",
    description: "Crema corporal Nivea Soft Milk 5 en 1 para piel seca. 48h de humectación, suavidad y sin sensación grasosa."
  },
  {
    id: 40,
    name: "Toallitas Desmaquillantes 25un",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/toallitas-desmaquillantes.jpg",
    emoji: "🧻",
    description: "25 toallitas por paquete. Suaves e hipoalergénicas para el cuidado facial."
  },
  {
    id: 123,
    name: "Toallas Húmedas Adulto Sin Alcohol Aloe Vera 50un",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1500,
    image: "img/toallas-humedas-adulto-aloe-vera-50un.webp",
    emoji: "🧻",
    description: "50 toallitas húmedas para adulto. Sin alcohol, con Aloe Vera. Hipoalergénicas y suaves."
  },
  {
    id: 124,
    name: "Toallitas Húmedas Mini 99% Agua 8un",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/toallitas-humedas-mini-8un.jpg",
    emoji: "🧻",
    description: "Pack de 8 toallitas húmedas mini con 99% agua. Ideales para llevar en cartera o bolsillo."
  },
  {
    id: 41,
    name: "Axe Desodorante Ice Chill 150ml",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 2000,
    image: "img/axe-desodorante-ice-chill-150ml.jpg",
    emoji: "💨",
    badge: "nuevo",
    description: "Fragancia Ice Chill. Protección 48h. Menta helada y limón."
  },

  // --- ACCESORIOS HOGAR ---
  {
    id: 42,
    name: "Virutex Esponja Multiuso 4un",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1200,
    image: "img/virutex-esponja-multiuso.jpg",
    emoji: "🧽",
    description: "Pack de 4 esponjas antibacteriales. Ideal para cocina y hogar."
  },
  {
    id: 43,
    name: "Don Ahorrito Bolsas 90×120",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 2500,
    image: "img/don-ahorrito-bolsas-90x120.jpg",
    emoji: "🗑️",
    description: "10 bolsas por paquete. Tamaño contenedor municipal 90×120 cm."
  },
  {
    id: 44,
    name: "Servilletas ProPaper 300un",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1000,
    image: "img/servilletas-propaper-300.jpg",
    emoji: "🧻",
    description: "300 servilletas absorbentes. Perfectas para el hogar o cualquier ocasión."
  },
  {
    id: 135,
    name: "Bid's Servilletas 300 unidades",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1000,
    image: "img/servilletas-bids-300un.jpg",
    emoji: "🧻",
    description: "300 servilletas Bid's 24×24 cm. Suaves, absorbentes y de calidad para el hogar y eventos."
  },
  {
    id: 136,
    name: "Today Servilletas 300 unidades",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1000,
    image: "img/servilletas-today-300un.jpg",
    emoji: "🧻",
    description: "300 servilletas Today 24×24 cm. Ultra suaves y absorbentes para uso diario en el hogar."
  },

  // --- SEGUNDA TANDA (catálogo) ---
  {
    id: 46,
    name: "Swan Papel Higiénico 48 Rollos",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 9600,
    image: "img/swan-papel-higienico-48-rollos.webp",
    emoji: "🧻",
    badge: "popular",
    description: "48 rollos × 20 m c/u. Doble hoja suave y resistente."
  },
  {
    id: 47,
    name: "Swan Rendidor Doble Hoja 6×20m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1200,
    image: "img/swan-doble-hoja-6x20m.jpg",
    emoji: "🧻",
    description: "6 rollos de 20 metros doble hoja. Rendidor y económico."
  },
  {
    id: 48,
    name: "Dove Men Desodorante 150ml",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 2300,
    image: "img/dove-men-sport-fresh-150ml.jpg",
    emoji: "💨",
    description: "Sport Fresh. Protección 72h antitranspirante para hombres activos."
  },
  {
    id: 49,
    name: "Paños Esponja 3 Unidades",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/panos-esponja-3un.jpg",
    emoji: "🧽",
    description: "Pack 3 paños esponja. Ultra absorbentes, multiuso para cocina y hogar."
  },
  {
    id: 50,
    name: "Desodorante Ambiental Antitabaco 400ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/don-ahorrito-ambiental-antitabaco.jpg",
    emoji: "🌿",
    description: "Don Ahorrito. Elimina el olor a tabaco al instante. 400 ml."
  },
  {
    id: 51,
    name: "Sweens Suavizante Concentrado 500ml",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 1200,
    image: "img/sweens-suavizante-floral-essence-500ml.jpg",
    emoji: "🌸",
    badge: "nuevo",
    description: "Floral Essence. Concentrado, rinde 22 lavados. Deja la ropa suave y perfumada."
  },
  {
    id: 52,
    name: "Swan Toalla de Papel 12m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1000,
    image: "img/swan-toalla-papel-12m.jpg",
    emoji: "🧻",
    description: "Paquete 3 rollos × 12 m. Doble hoja, alta absorción para la cocina."
  },
  {
    id: 53,
    name: "Trapero Húmedo Manzana-Canela 7un",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/trapero-humedo-manzana-canela.jpg",
    emoji: "🧹",
    description: "7 toallas húmedas por paquete. Aroma manzana-canela. Limpia y desinfecta."
  },
  {
    id: 125,
    name: "Trapero Húmedo Lavanda Fresca 7un",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/trapero-humedo-lavanda-7un.jpg",
    emoji: "🧹",
    description: "7 traperos húmedos por paquete. Aroma lavanda fresca. Para todo tipo de pisos."
  },
  {
    id: 126,
    name: "Trapero Húmedo Citrus 7un",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/trapero-humedo-citrus-7un.jpg",
    emoji: "🧹",
    description: "7 traperos húmedos por paquete. Aroma citrus refrescante. Para todo tipo de pisos."
  },
  {
    id: 127,
    name: "Teddy Virutilla Plateada Inoxidable",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 300,
    image: "img/teddy-virutilla-plateada.jpg",
    emoji: "🧽",
    description: "Virutilla plateada inoxidable Teddy 15g. Elimina suciedad difícil sin rayar. Ideal para ollas y utensilios."
  },
  {
    id: 128,
    name: "Teddy Virutilla Dorada",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 300,
    image: "img/teddy-virutilla-dorada.jpg",
    emoji: "🧽",
    description: "Virutilla dorada inoxidable Teddy 15g. Limpia y pule metales y utensilios de cocina sin dañar la superficie."
  },
  {
    id: 153,
    name: "Schick Máquina de Afeitar Hombre 4 hojas",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/schick-maquina-afeitar-hombre-4h.jpg",
    emoji: "🪒",
    description: "Máquina de afeitar Schick Quattro hombre 4 hojas. Recubrimiento titanio para afeitado preciso y sin irritación."
  },
  {
    id: 154,
    name: "Schick Máquina de Afeitar Femenina Piel Sensible",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/schick-maquina-afeitar-mujer-sensible.jpg",
    emoji: "🪒",
    description: "Máquina de afeitar Schick Quattro femenina 4 hojas, piel sensible. Banda lubricante con aloe vera y vitamina E."
  },

  /* PENDIENTE — agregar imagen manualmente:
  {
    id: 155,
    name: "TeddyMax 3 Prestobarba 3 hojas 2x1000",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/teddymax-prestobarba-3h.jpg",
    emoji: "🪒",
    description: "Pack 2 máquinas de afeitar TeddyMax prestobarba 3 hojas. Precio por pack de 2 unidades."
  }
  */
  {
    id: 146,
    name: "Teddy Paño Microfibra",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 500,
    image: "img/teddy-pano-microfibra.jpg",
    emoji: "🧹",
    description: "Paño de microfibra Teddy 38×38 cm. Alta absorción, no raya superficies. Precio por unidad."
  },
  {
    id: 147,
    name: "Teddy Trapero Microfibra con Ojal",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/teddy-trapero-microfibra-ojal.jpg",
    emoji: "🧹",
    description: "Trapero de microfibra Teddy con ojal 48×68 cm. Absorbe líquidos y polvo con eficacia. Precio por unidad."
  },
  {
    id: 148,
    name: "Paños Multiuso Microfibra 20 unidades",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1500,
    image: "img/panos-multiuso-microfibra-20un.webp",
    emoji: "🧹",
    description: "Pack de 20 paños multiuso de microfibra 20×20 cm. Suaves, reutilizables y sin rayas para todo tipo de superficies."
  },
  {
    id: 131,
    name: "Pala Basura",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/pala-basura.jpg",
    emoji: "🧹",
    description: "Pala plástica recogedor de basura resistente y duradera. Indispensable para el aseo del hogar."
  },
  {
    id: 132,
    name: "Virutex Escobillón Multiuso",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1800,
    image: "img/virutex-escobillon-multiuso.jpg",
    emoji: "🧹",
    description: "Escobillón multiuso Virutex. Fibra media para limpieza eficiente en todo tipo de superficies interiores."
  },
  {
    id: 133,
    name: "Teddy Toallas Húmedas Desinfectante 80un",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1500,
    image: "img/teddy-toallas-humedas-desinfectante-80un.jpg",
    emoji: "🧼",
    description: "80 toallas húmedas desinfectantes Teddy. Eliminan el 99,9% de bacterias. Ideales para superficies y manos."
  },
  {
    id: 134,
    name: "Virginia Lustramuebles Vainilla 250ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1600,
    image: "img/virginia-lustramuebles-vainilla-250ml.jpg",
    emoji: "✨",
    description: "Lustramuebles Virginia 250ml aroma vainilla. Nutre, protege y da brillo a muebles y superficies de madera."
  },
  {
    id: 149,
    name: "Tanax Mata Insectos 220cc",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1500,
    image: "img/tanax-mata-insectos-220cc.webp",
    emoji: "🐛",
    description: "Insecticida aerosol Tanax 220cc. Fórmula superactiva para moscas, mosquitos, cucarachas, hormigas y más."
  },
  {
    id: 150,
    name: "Tanax Insecticida en Polvo",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1000,
    image: "img/tanax-insecticida-polvo.jpg",
    emoji: "🐛",
    description: "Insecticida en polvo Tanax. Acción inmediata contra hormigas, cucarachas, pulgas y otros insectos rastreros."
  },
  {
    id: 151,
    name: "Tanax Moscas y Zancudos Sin Olor 390cc",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 2200,
    image: "img/tanax-moscas-zancudos-390cc.jpg",
    emoji: "🐛",
    description: "Insecticida aerosol Tanax 390cc sin olor. Fórmula acuosa especial para moscas y zancudos en interiores."
  },

  // --- ANIMALES ---
  {
    id: 152,
    name: "Turbo Clean Arena Sanitaria 2kg",
    category: "animales",
    categoryLabel: "Animales",
    price: 2000,
    image: "img/turbo-clean-arena-sanitaria-2kg.jpg",
    emoji: "🐱",
    description: "Arena sanitaria aglutinante Turbo Clean 2kg. Disponible en aromas manzana, lavanda, limón y talco de bebé."
  },
  {
    id: 129,
    name: "Brillex Cotonitos 200 unidades",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1000,
    image: "img/brillex-cotonitos-200un.jpg",
    emoji: "🩹",
    description: "200 cotonitos de algodón extra suaves 100% algodón. Ideales para limpieza facial, maquillaje y cuidado personal."
  },
  {
    id: 130,
    name: "Vaitiare Pétalos Desmaquillantes 80 unidades",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1200,
    image: "img/vaitiare-petalos-80un.jpg",
    emoji: "🌸",
    description: "80 pétalos desmaquillantes Vaitiare. Suaves y absorbentes para desmaquillar e hidratar con suavidad."
  },
  {
    id: 54,
    name: "Toallitas Húmedas 80 Unidades",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/toallitas-humedas-80un.jpg",
    emoji: "🧻",
    description: "80 toallitas húmedas con 99,9% agua. Suaves e hipoalergénicas."
  },
  {
    id: 55,
    name: "Limpiapisos Lavanda Desinfectante",
    category: "limpiapisos",
    categoryLabel: "Limpiapisos",
    price: 1000,
    image: "img/limpiapisos-lavanda-desinfectante.jpg",
    emoji: "✨",
    description: "Elimina 99,9% de bacterias y hongos. Aroma lavanda duradero."
  },
  {
    id: 56,
    name: "Colgate Gel Dental Kids Frutilla 50g",
    category: "cuidado-personal",
    categoryLabel: "Cuidado Personal",
    price: 1100,
    image: "img/colgate-gel-dental-kids-frutilla-50g.jpg",
    emoji: "🦷",
    description: "Gel dental con flúor para niños. Sabor frutilla que encanta a los más chicos."
  },
  {
    id: 57,
    name: "Don Ahorrito Ambiental Lavanda 400ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/don-ahorrito-ambiental-lavanda.jpg",
    emoji: "🌸",
    description: "Desodorante ambiental aroma lavanda. 400 ml. Elimina olores al instante."
  },
  {
    id: 58,
    name: "Igenix Cloro 1kg",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1000,
    image: "img/igenix-cloro-1kg.jpg",
    emoji: "🧪",
    description: "Cloro líquido desinfectante. Blanquea y desinfecta pisos, baños y cocinas."
  },
  {
    id: 59,
    name: "Lavaloza Excell + Cloro 500ml",
    category: "lavalozas",
    categoryLabel: "Lavalozas",
    price: 1000,
    image: "img/excell-lavaloza-cloro-500ml.jpg",
    emoji: "🍋",
    description: "Doypack 500ml. Limpieza con poder del cloro. Elimina grasa y desinfecta."
  },
  {
    id: 60,
    name: "Don Ahorrito Bolsas 50×70",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 500,
    image: "img/don-ahorrito-bolsas-50x70.jpg",
    emoji: "🗑️",
    description: "10 bolsas por paquete. Tamaño 50×70 cm para basureros pequeños."
  },
  {
    id: 61,
    name: "Bolsa de Basura 80×110",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1500,
    image: "img/bolsa-basura-80x110.jpg",
    emoji: "🗑️",
    description: "Rollo 10 unidades. Tamaño 80×110 cm, gran capacidad para el hogar."
  },
  {
    id: 62,
    name: "Limpiador Inodoro Teddy 500ml",
    category: "bano",
    categoryLabel: "Baño",
    price: 1000,
    image: "img/limpiador-inodoro-teddy-500ml.jpg",
    emoji: "🚽",
    description: "Limpia, desinfecta y perfuma el inodoro. Elimina sarro y bacterias."
  },
  {
    id: 63,
    name: "Teddy Pastilla Estanque 3×2",
    category: "bano",
    categoryLabel: "Baño",
    price: 1000,
    image: "img/teddy-pastilla-estanque-3x2.jpg",
    emoji: "🚽",
    description: "Pastillas azules para estanque WC. Limpia y aromatiza en cada descarga."
  },
  {
    id: 64,
    name: "Brillex Tableta Cloro WC 5un",
    category: "bano",
    categoryLabel: "Baño",
    price: 1000,
    image: "img/brillex-tableta-cloro-wc.jpg",
    emoji: "🚽",
    description: "5 tabletas de cloro para estanque WC. Desinfecta y blanquea."
  },
  {
    id: 65,
    name: "Swan Papel Higiénico 4×50m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 2000,
    image: "img/swan-papel-higienico-4x50m.jpg",
    emoji: "🧻",
    description: "4 rollos doble hoja de 50 metros c/u. Suave y resistente."
  },
  {
    id: 66,
    name: "Confort Papel Higiénico Mega 4×50m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 2250,
    image: "img/confort-papel-higienico-mega-4x50m.jpg",
    emoji: "🧻",
    description: "4 mega rollos de 50 metros doble hoja. Máximo rendimiento para el hogar."
  },
  {
    id: 67,
    name: "Noble Papel Higiénico 6×22m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1100,
    image: "img/noble-papel-higienico-6x22m.jpg",
    emoji: "🧻",
    description: "6 rollos doble hoja de 22 metros c/u. Económico y rendidor."
  },

  {
    id: 74,
    name: "Don Ahorrito Ambiental Brisas de Mar 400ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/don-ahorrito-ambiental-brisas-mar.jpg",
    emoji: "🌊",
    description: "Desodorante ambiental aroma brisas de mar. 400 ml. Refresca el ambiente."
  },
  {
    id: 75,
    name: "Don Ahorrito Ambiental Vainilla 400ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/don-ahorrito-ambiental-vainilla.jpg",
    emoji: "🍦",
    description: "Desodorante ambiental aroma vainilla. 400 ml. Aroma cálido y suave."
  },
  {
    id: 76,
    name: "Aileda Repuesto Aromatizador 250ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1500,
    image: "img/aileda-repuesto-250ml.jpg",
    emoji: "🌸",
    description: "Repuesto universal 250ml para aromatizador automático. Variedad de aromas."
  },
  {
    id: 77,
    name: "Teddy Aromatizador de Auto",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/teddy-aromatizador-auto.jpg",
    emoji: "🚗",
    description: "Aromatizador para auto en variedades de aroma. Mantiene tu auto fresco."
  },
  {
    id: 78,
    name: "Igenix Desinfectante Ambiente 480cc",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 2700,
    image: "img/igenix-desinfectante-ambiente-480cc.jpg",
    emoji: "🛡️",
    badge: "nuevo",
    description: "Mata el 99,9% de virus, bacterias y hongos en el ambiente. 480 cc."
  },
  {
    id: 73,
    name: "Don Ahorrito Ambiental Citrus 400ml",
    category: "ambiental",
    categoryLabel: "Ambiental",
    price: 1000,
    image: "img/don-ahorrito-ambiental-citrus.jpg",
    emoji: "🍊",
    description: "Desodorante ambiental aroma cítrico. 400 ml. Refresca y elimina olores."
  },

  // --- LIMPIEZA ---
  {
    id: 71,
    name: "Cloro Gel Limón 900ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1000,
    image: "img/cloro-gel-limon-900ml.jpg",
    emoji: "🍋",
    description: "Cloro gel antisarro aroma limón. Limpieza profunda. Elimina bacterias y hongos."
  },
  {
    id: 72,
    name: "Cloro Gel Tradicional 900ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1000,
    image: "img/cloro-gel-tradicional-900ml.webp",
    emoji: "🧪",
    description: "Cloro gel tradicional 900ml. Limpieza profunda y desinfección del hogar."
  },

  {
    id: 110,
    name: "Esponjas de Loza Power 4un",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 1000,
    image: "img/esponja-loza-power-4un.jpg",
    emoji: "🧽",
    description: "Pack 4 esponjas para lavar loza. Doble cara: fibra abrasiva y esponja suave."
  },

  // --- ACONDICIONADOR ---
  {
    id: 104,
    name: "Ballerina Acondicionador Granada 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1300,
    image: "img/ballerina-acondicionador-granada-750ml.jpg",
    emoji: "🍷",
    description: "Granada, Sin sal. Para cabello maltratado o teñido. Hidratación intensa."
  },
  {
    id: 105,
    name: "Ballerina Acondicionador Manzana & Frutilla 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1300,
    image: "img/ballerina-acondicionador-manzana-frutilla-750ml.jpg",
    emoji: "🍓",
    description: "Manzana y Frutilla con Probiótico y Biotina. Para cabello frágil y quebradizo."
  },
  {
    id: 106,
    name: "Familand Acondicionador Manzana Papaya 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1800,
    image: "img/familand-acondicionador-manzana-papaya-750ml.jpg",
    emoji: "🍎",
    description: "Manzana y Papaya BIO. Sin sal, para cabello graso. Extractos 100% naturales."
  },
  {
    id: 107,
    name: "Familand Acondicionador Moringa 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1800,
    image: "img/familand-acondicionador-moringa-750ml.jpg",
    emoji: "🌿",
    description: "Moringa BIO. Sin sal, sin siliconas. Purifica y protege el cabello."
  },
  {
    id: 108,
    name: "Ballerina Acondicionador Mango & Argán 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1300,
    image: "img/ballerina-acondicionador-mango-argan-750ml.jpg",
    emoji: "🥭",
    description: "Mango y aceite de Argán. Para ondas y rizos controlados. Sin sulfatos."
  },
  {
    id: 109,
    name: "Familand Acondicionador Manzanilla 750ml",
    category: "acondicionador",
    categoryLabel: "Acondicionador",
    price: 1800,
    image: "img/familand-acondicionador-manzanilla-750ml.jpg",
    emoji: "🌼",
    description: "Manzanilla BIO. Sin sal. Reflejos luminosos para cabellos claros y rubios."
  },

  // --- SHAMPOO ---
  {
    id: 94,
    name: "Ballerina Shampoo Coco & Cactus 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-coco-cactus-750ml.jpg",
    emoji: "🥥",
    description: "Agua de Coco y Flor de Cactus. Bajo en sulfatos. Para todo tipo de cabello."
  },
  {
    id: 95,
    name: "Ballerina Shampoo Mango & Argán 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-mango-argan-750ml.jpg",
    emoji: "🥭",
    description: "Mango y aceite de Argán. Ondas y rizos controlados, sin frizz."
  },
  {
    id: 96,
    name: "Ballerina Shampoo Coco & Jazmín 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-coco-jazmin-750ml.jpg",
    emoji: "🌸",
    description: "Aceite de Coco y Jazmín. Sin sal, para cabello seco. Hidratación profunda."
  },
  {
    id: 97,
    name: "Ballerina Shampoo Manzana & Frutilla 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-manzana-frutilla-750ml.jpg",
    emoji: "🍎",
    description: "Manzana y Frutilla con Probiótico y Biotina. Para cabello frágil y quebradizo."
  },
  {
    id: 98,
    name: "Ballerina Shampoo Palta & Almendras 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-palta-almendras-750ml.jpg",
    emoji: "🥑",
    description: "Palta/Aguacate y Almendras. Sin sal. Nutrición intensa para cabello dañado."
  },
  {
    id: 99,
    name: "IO Shampoo Placenta 1L",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/io-shampoo-placenta-1l.jpg",
    emoji: "💜",
    description: "Shampoo con Placenta 1 litro. Revitaliza y fortalece el cabello desde la raíz."
  },
  {
    id: 100,
    name: "Ballerina Shampoo Bambú & Ginseng 750ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/ballerina-shampoo-bambu-ginseng-750ml.jpg",
    emoji: "🎋",
    description: "Bambú y Ginseng con Colágeno. Para cabello fino y sin volumen."
  },

  {
    id: 101,
    name: "Head & Shoulders Control Caspa 375ml",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 3500,
    image: "img/head-shoulders-caspa-375ml.jpg",
    emoji: "💙",
    description: "Control de caspa hasta 100% desde la primera aplicación. 375 ml."
  },
  {
    id: 102,
    name: "IO Shampoo Camomila 1L",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/io-shampoo-camomila-1l.jpg",
    emoji: "🌼",
    description: "Camomila 1 litro doypack. Aporta brillo y suavidad. Acentúa los tonos claros."
  },
  {
    id: 103,
    name: "IO Shampoo Kids 1L",
    category: "shampoo",
    categoryLabel: "Shampoo",
    price: 1300,
    image: "img/io-shampoo-kids-1l.jpg",
    emoji: "🧒",
    description: "Shampoo para niños 1 litro. Fórmula suave sin parabenos. Cabello suave y limpio."
  },

  // --- HIGIENE BUCAL ---
  {
    id: 91,
    name: "Pepsodent Cepillo Plus Suave",
    category: "higiene-bucal",
    categoryLabel: "Higiene Bucal",
    price: 1000,
    image: "img/pepsodent-cepillo-plus-suave.jpg",
    emoji: "🦷",
    description: "Cepillo dental suave para cuidado diario. Limpieza efectiva y suave con las encías."
  },
  {
    id: 92,
    name: "Aileda Cepillo de Dientes 2un",
    category: "higiene-bucal",
    categoryLabel: "Higiene Bucal",
    price: 1000,
    image: "img/aileda-cepillo-dientes-2un.jpg",
    emoji: "🦷",
    description: "Pack 2 cepillos de dientes. Cerdas suaves para una limpieza completa."
  },
  {
    id: 93,
    name: "Oral-B Cepillo Medio",
    category: "higiene-bucal",
    categoryLabel: "Higiene Bucal",
    price: 1000,
    image: "img/oral-b-cepillo-medio.jpg",
    emoji: "🦷",
    description: "Cepillo dental Oral-B dureza media. Limpieza profunda entre dientes y encías."
  },

  // --- SUAVIZANTE Y QUITAMANCHAS ---
  {
    id: 86,
    name: "Sweens Suavizante Doypack 500ml",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 1200,
    image: "img/sweens-suavizante-doypack-500ml.jpg",
    emoji: "🌸",
    description: "Suavizante concentrado Floral Essence en doypack 500ml. Rinde 22 lavados."
  },
  {
    id: 87,
    name: "Fuzol Suavizante Hipoalergénico 1L",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 1300,
    image: "img/fuzol-suavizante-1l.jpg",
    emoji: "🌿",
    description: "Fórmula hipoalergénica para piel sensible. Suavizante concentrado 1 litro."
  },
  {
    id: 83,
    name: "Vanish Líquido Quitamanchas 300ml",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 1200,
    image: "img/vanish-liquido-300ml.jpg",
    emoji: "✨",
    description: "Quitamanchas líquido rosa para ropa de color. Elimina manchas difíciles."
  },
  {
    id: 84,
    name: "Vanish Polvo Ropa Blanca 30g",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 500,
    image: "img/vanish-polvo-blanco-30g.jpg",
    emoji: "✨",
    description: "Quitamanchas en polvo para ropa blanca Oxi Action. Deja la ropa impecable."
  },
  {
    id: 85,
    name: "Vanish Polvo Ropa Color 30g",
    category: "quitamanchas",
    categoryLabel: "Suavizante y Quitamanchas",
    price: 500,
    image: "img/vanish-polvo-rosa-30g.webp",
    emoji: "✨",
    description: "Quitamanchas en polvo para ropa de color Oxi Action. Colores brillantes."
  },

  {
    id: 81,
    name: "Abolengo Toalla de Papel XL 100m",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 2500,
    image: "img/abolengo-toalla-papel-xl-100m.jpg",
    emoji: "🧻",
    description: "Rollo gigante XL de 100 metros doble hoja. Alta absorción para hogar y negocio."
  },
  {
    id: 82,
    name: "Swan Toalla de Papel 70mts",
    category: "papeles",
    categoryLabel: "Papeles",
    price: 1800,
    image: "img/swan-toalla-papel-70m.jpg",
    emoji: "🧻",
    description: "Toalla de papel Swan 70 metros doble hoja. Suave, resistente y absorbente."
  },
  {
    id: 88,
    name: "Teddy Limpiador en Crema 500ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1300,
    image: "img/teddy-limpiador-crema-500ml.webp",
    emoji: "🫧",
    description: "Elimina manchas resistentes sin rayar. Ideal para baño, cocina y más superficies."
  },
  {
    id: 89,
    name: "Aileda Toallitas Desengrasante Cocina 50un",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 2200,
    image: "img/aileda-toallitas-desengrasante-50un.jpg",
    emoji: "🧽",
    description: "50 toallitas húmedas antigrasa multiuso 20×30 cm. Ideal para cocina."
  },
  {
    id: 90,
    name: "Wyn Antigrasa 450ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1200,
    image: "img/wyn-antigrasa-450ml.webp",
    emoji: "🍊",
    description: "Desengrasante potente en doypack 450ml. Limpia hornos, cocinas y superficies."
  },
  {
    id: 79,
    name: "Excell Limpia Vidrios Multiuso 500ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1000,
    image: "img/excell-limpia-vidrios-500ml.jpg",
    emoji: "🪟",
    description: "Limpia vidrios y superficies multiuso. Sin aureolas, rápido secado. 500 ml."
  },
  {
    id: 80,
    name: "Wyn Limpia Vidrios Multiuso 450ml",
    category: "limpieza",
    categoryLabel: "Limpieza",
    price: 1300,
    image: "img/wyn-limpia-vidrios-450ml.jpg",
    emoji: "🪟",
    description: "Limpiavidrios y multiuso Wyn 450 ml. Sin rayas, aroma lavanda."
  },

  // --- HIGIENE FEMENINA ---
  {
    id: 68,
    name: "Ladysoft Nocturna 7 Toallas",
    category: "higiene-femenina",
    categoryLabel: "Higiene Femenina",
    price: 1000,
    image: "img/ladysoft-nocturna-7un.jpg",
    emoji: "🌸",
    description: "Toalla nocturna ultradelgada. Protección y comodidad durante la noche."
  },
  {
    id: 69,
    name: "Ladysoft 16 Toallas Femeninas",
    category: "higiene-femenina",
    categoryLabel: "Higiene Femenina",
    price: 1900,
    image: "img/ladysoft-ultradelgada-16un.jpg",
    emoji: "🌸",
    description: "Tela ultraseca con alas. Ultradelgada para uso diario con máximo confort."
  },
  {
    id: 70,
    name: "Ladysoft Nocturna 14 Toallas",
    category: "higiene-femenina",
    categoryLabel: "Higiene Femenina",
    price: 1800,
    image: "img/ladysoft-nocturna-14un.jpg",
    emoji: "🌸",
    description: "Nocturna ultradelgada con alas. Mayor protección para toda la noche."
  },

  // --- CERA DE PISOS ---
  {
    id: 111,
    name: "RyR Cera Pintura 2L",
    category: "cera-pisos",
    categoryLabel: "Cera de Pisos",
    price: 2500,
    image: "img/cera-pintura-ryr-2lts.jpg",
    emoji: "🪣",
    description: "Cera pintura para pisos de cemento. Da color y brillo duradero en formato familiar de 2 litros."
  },
  {
    id: 112,
    name: "R&R Cera Pintura Premium 1L",
    category: "cera-pisos",
    categoryLabel: "Cera de Pisos",
    price: 1600,
    image: "img/cera-pintura-ryr-1lt.jpg",
    emoji: "🪣",
    description: "Cera pintura premium para pisos de cemento. Fórmula mejorada que protege y embellece en 1 litro."
  },
  {
    id: 113,
    name: "Brillina Cera Crema Tierra de Color 360cm³",
    category: "cera-pisos",
    categoryLabel: "Cera de Pisos",
    price: 1400,
    image: "img/cera-brillina-tierra-color-360cc.jpg",
    emoji: "🪣",
    description: "Cera crema que nutre, protege e impermeabiliza pisos renovando el color. Fórmula antideslizante de secado rápido."
  },

  // --- DESODORANTES ---
  {
    id: 137,
    name: "Axe Desodorante Black 150ml",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2000,
    image: "img/axe-desodorante-black-150ml.jpg",
    emoji: "🧴",
    description: "Desodorante aerosol Axe Black 150ml. 48h de protección con fragancia sofisticada y fresca."
  },
  {
    id: 138,
    name: "Axe Desodorante Apollo 150ml",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2000,
    image: "img/axe-desodorante-apollo-150ml.jpg",
    emoji: "🧴",
    description: "Desodorante aerosol Axe Apollo 150ml. Fragancia cítrica con notas maderosas. 48h de protección."
  },
  {
    id: 139,
    name: "Axe Desodorante Marine 150ml",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2000,
    image: "img/axe-desodorante-marine-150ml.jpg",
    emoji: "🧴",
    description: "Desodorante aerosol Axe Marine 150ml. Fragancia marina refrescante con notas cítricas. 48h de frescura."
  },
  {
    id: 140,
    name: "Axe Desodorante Musk 150ml",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2000,
    image: "img/axe-desodorante-musk-150ml.jpg",
    emoji: "🧴",
    description: "Desodorante aerosol Axe Musk 150ml. Fragancia cálida y masculina con notas de ámbar. 48h de protección."
  },
  {
    id: 141,
    name: "Dove Desodorante Anti-manchas 45g",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2300,
    image: "img/dove-desodorante-antimanchas-45g.jpg",
    emoji: "🧴",
    description: "Desodorante barra Dove 45g anti-manchas. No mancha la ropa, 72h de protección con crema humectante."
  },
  {
    id: 142,
    name: "Dove Desodorante Original 45g",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2300,
    image: "img/dove-desodorante-original-45g.jpg",
    emoji: "🧴",
    description: "Desodorante barra Dove Original 45g. 72h de protección antitranspirante con aroma fresco y suave."
  },
  {
    id: 143,
    name: "Rexona Desodorante Invisible 150ml",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 2300,
    image: "img/rexona-desodorante-invisible-150ml.jpg",
    emoji: "🧴",
    description: "Desodorante aerosol Rexona Invisible 150ml. 72h de protección. No mancha ropa clara ni oscura."
  },
  {
    id: 144,
    name: "Rexona Clinical Women 48g",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 3990,
    image: "img/rexona-clinical-women-48g.jpg",
    emoji: "🧴",
    description: "Desodorante crema Rexona Clinical mujer 48g. 3 veces más efectivo que un antitranspirante común."
  },
  {
    id: 145,
    name: "Rexona Clinical Men 48g",
    category: "desodorantes",
    categoryLabel: "Desodorantes",
    price: 3990,
    image: "img/rexona-clinical-men-48g.jpg",
    emoji: "🧴",
    description: "Desodorante crema Rexona Clinical hombre 48g. Máxima protección clínica contra transpiración y olor."
  },

  // --- UTENSILIOS DE COCINA ---
  {
    id: 116,
    name: "Exprimidor de Jugo",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 1000,
    image: "img/exprimidor-jugo.jpg",
    emoji: "🍊",
    description: "Exprimidor manual de jugos. Ideal para naranjas, limones y otras frutas cítricas. Precio por unidad."
  },
  {
    id: 117,
    name: "Ronson Chispero Cocina Grande",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 2000,
    image: "img/ronson-chispero-cocina.jpg",
    emoji: "🔥",
    description: "Encendedor piezoeléctrico Ronson para cocina. Tamaño grande para mayor comodidad y alcance."
  },
  {
    id: 118,
    name: "Fósforos Copihue Paquete 10 Cajas",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 1000,
    image: "img/fosforos-copihue-10-cajas.jpg",
    emoji: "🔥",
    description: "Pack de 10 cajas de fósforos de seguridad Copihue. Aproximadamente 38 palitos por caja."
  },
  {
    id: 119,
    name: "Eveready Pila AAA",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 300,
    image: "img/eveready-pila-aaa.jpg",
    emoji: "🔋",
    description: "Pila AAA Eveready carbón zinc 1.5V. Precio por unidad."
  },
  {
    id: 120,
    name: "Eveready Pila AA",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 350,
    image: "img/eveready-pila-aa.jpg",
    emoji: "🔋",
    description: "Pila AA Eveready carbón zinc 1.5V. Precio por unidad."
  },
  {
    id: 121,
    name: "Eveready Ampolleta 60W",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 1000,
    image: "img/eveready-ampolleta-60w.jpg",
    emoji: "💡",
    description: "Ampolleta LED Eveready 8W equivalente a 60W. Luz fría, bajo consumo y larga duración."
  },
  {
    id: 122,
    name: "Juego de Vasos Atlanta 6 unidades",
    category: "utensilios-cocina",
    categoryLabel: "Utensilios de Cocina",
    price: 2000,
    image: "img/vasos-atlanta-6un.jpg",
    emoji: "🥛",
    description: "Juego de 6 vasos de cristal Atlanta. Diseño clásico, resistente y elegante para uso diario."
  }

  /* PENDIENTES — agregar imagen manualmente:
  {
    id: 114,
    name: "ERO Pintura para Pisos 1Lt Roja",
    category: "cera-pisos",
    categoryLabel: "Cera de Pisos",
    price: 1100,
    image: "img/ero-pintura-pisos-1lt-roja.jpg",
    emoji: "🪣",
    description: "Pintura para pisos roja marca ERO 1 litro. Ideal para superficies de cemento."
  },
  {
    id: 115,
    name: "Multiacción Cera Pintura para Pisos 5L",
    category: "cera-pisos",
    categoryLabel: "Cera de Pisos",
    price: 4500,
    image: "img/multiaccion-cera-pintura-5lts.jpg",
    emoji: "🪣",
    description: "Cera pintura para pisos Multiacción en formato bidón de 5 litros. Gran rendimiento para superficies amplias."
  }
  */
];


/* =============================================
   CARRITO
   ============================================= */
let cart = JSON.parse(localStorage.getItem("fanilCart")) || [];

/* Re-sincroniza el carrito guardado con los datos actuales:
   actualiza precio/nombre/imagen y descarta productos que ya no existen. */
cart = cart
  .map(item => {
    const p = products.find(prod => prod.id === item.id);
    return p ? { ...p, quantity: item.quantity } : null;
  })
  .filter(Boolean);
localStorage.setItem("fanilCart", JSON.stringify(cart));

function saveCart() {
  localStorage.setItem("fanilCart", JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function buildCartWaMessage() {
  const lines = cart.map(item =>
    `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
  ).join('\n');
  const total = formatPrice(getCartTotal());
  return encodeURIComponent(`Hola Fanil! Quiero hacer un pedido:\n\n${lines}\n\nTotal: ${total}`);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} agregado al carrito`, "success");

  // Animación del badge
  const badge = document.getElementById("cartBadge");
  badge.classList.remove("pop");
  void badge.offsetWidth; // reflow para reiniciar animación
  badge.classList.add("pop");
  setTimeout(() => badge.classList.remove("pop"), 300);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) removeFromCart(productId);
  else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast("Carrito vaciado", "info");
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();
  const badge = document.getElementById("cartBadge");
  const empty = document.getElementById("cartEmpty");
  const items = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");

  // Badge
  badge.textContent = count;
  badge.setAttribute("data-count", count);

  // Vacío o con productos
  if (count === 0) {
    empty.style.display = "flex";
    items.style.display = "none";
    footer.style.display = "none";
  } else {
    empty.style.display = "none";
    items.style.display = "block";
    footer.style.display = "flex";

    // Renderizar items
    items.innerHTML = cart.map(item => `
      <div class="cart-item" id="ci-${item.id}">
        <img class="cart-item-img"
          src="${item.image}"
          alt="${item.name}"
          onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="cart-item-img" style="display:none; font-size:2rem; align-items:center; justify-content:center;">${item.emoji}</div>

        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
        </div>

        <div class="cart-item-controls" style="flex-direction:column; gap:6px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Eliminar">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </div>
    `).join("");
  }

  // Totales
  document.getElementById("cartSubtotal").textContent = formatPrice(total);
  document.getElementById("cartTotal").textContent = formatPrice(total);

  // Botón WhatsApp del carrito
  const waBtn = document.getElementById("cartWaBtn");
  if (waBtn) {
    waBtn.href = count > 0
      ? `https://wa.me/56912345678?text=${buildCartWaMessage()}`
      : "#";
  }
}


/* =============================================
   MODAL DE PAGO
   ============================================= */
function openCheckout() {
  if (cart.length === 0) return;

  // Llenar resumen
  const summary = document.getElementById("orderSummary");
  const modalTotal = document.getElementById("modalTotal");

  summary.innerHTML = cart.map(item => `
    <div class="order-item-row">
      <span>${item.name} x${item.quantity}</span>
      <span>${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join("");

  modalTotal.textContent = formatPrice(getCartTotal());

  // Mostrar modal
  closeCartSidebar();
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("clientName").focus();
}

document.getElementById("checkoutBtn").addEventListener("click", openCheckout);

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
});

document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove("open");
    document.body.style.overflow = "";
  }
});

/* Envío del formulario de checkout */
document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const address = document.getElementById("clientAddress").value.trim();

  if (!name || !email || !phone || !address) {
    showToast("Por favor completa todos los campos requeridos", "error");
    return;
  }

  /* -------------------------------------------------------
     INTEGRACIÓN MERCADOPAGO
     Cuando tengas tu cuenta de MercadoPago activa, aquí es
     donde conectarás el SDK para generar el pago.
     Por ahora muestra un mensaje de confirmación.
     ------------------------------------------------------- */
  showToast("Pedido recibido. Nos contactaremos pronto.", "success");

  // Limpiar todo
  cart = [];
  saveCart();
  updateCartUI();
  document.getElementById("checkoutForm").reset();
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
});


/* =============================================
   CARRITO LATERAL — abrir / cerrar
   ============================================= */
let lastFocusedEl = null;
function openCartSidebar() {
  lastFocusedEl = document.activeElement;
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("closeCart").focus();
}

function closeCartSidebar() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) { lastFocusedEl.focus(); lastFocusedEl = null; }
}

document.getElementById("cartToggle").addEventListener("click", openCartSidebar);
document.getElementById("closeCart").addEventListener("click", closeCartSidebar);
document.getElementById("cartOverlay").addEventListener("click", closeCartSidebar);
document.getElementById("clearCartBtn").addEventListener("click", clearCart);


/* =============================================
   PRODUCTOS — renderizar, filtrar, buscar, ordenar
   ============================================= */
let currentFilter = "todos";
let currentSearch = "";
let currentSort = "default";

function renderProducts(filter = currentFilter, search = currentSearch, sort = currentSort) {
  currentFilter = filter;
  currentSearch = search;
  currentSort = sort;

  const grid = document.getElementById("productsGrid");

  // 1. Filtrar por categoría
  let filtered = filter === "todos" ? [...products] : products.filter(p => p.category === filter);

  // 2. Filtrar por búsqueda
  if (search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  }

  // 3. Ordenar
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));

  // 4. Sin resultados
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="products-empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p>No se encontraron productos</p>
        <span>${search.trim() ? `Sin resultados para "${escapeHtml(search.trim())}"` : "No hay productos en esta categoría"}</span>
        ${search.trim() ? `<button onclick="clearProductSearch()">Limpiar búsqueda</button>` : ""}
      </div>`;
    return;
  }

  // 5. Renderizar cards
  grid.innerHTML = filtered.map(product => {
    const discount = product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;
    const waMsg = encodeURIComponent(`Hola Fanil, me interesa el producto: ${product.name}`);

    return `
      <div class="product-card${product.originalPrice ? ' product-card--offer' : ''}">
        <div class="product-img-wrapper" onclick="openQuickView(${product.id})" title="Ver detalle">
          <img
            class="product-img"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null; this.style.display='none'; this.parentElement.classList.add('img-error')">
          <div class="product-img-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Ver detalle</span>
          </div>
          ${discount > 0 ? `<span class="offer-badge">-${discount}%</span>` : ''}
          ${product.badge === 'popular' ? `<span class="product-badge badge-popular">Popular</span>` : ''}
          ${product.badge === 'nuevo' ? `<span class="product-badge badge-nuevo">Nuevo</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-category-tag">${product.categoryLabel}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-desc">${product.description}</div>
          <div class="product-footer">
            <div class="product-price-col">
              ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
              <span class="product-price">${formatPrice(product.price)}</span>
            </div>
            <div class="product-card-actions">
              <a class="btn-wa-card" href="https://wa.me/56912345678?text=${waMsg}" target="_blank" rel="noopener" title="Consultar por WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
              <button class="btn-add" onclick="addToCart(${product.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterProducts(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderProducts(filter, currentSearch, currentSort);
}

function clearProductSearch() {
  const input = document.getElementById("productSearch");
  if (input) { input.value = ""; }
  const clearBtn = document.getElementById("clearSearch");
  if (clearBtn) clearBtn.style.display = "none";
  currentSearch = "";
  renderProducts(currentFilter, "", currentSort);
}

function scrollToProducts() {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
}

// Botones de filtro
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => filterProducts(btn.dataset.filter));
});

// Búsqueda en tiempo real
const searchInput = document.getElementById("productSearch");
const clearSearchBtn = document.getElementById("clearSearch");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value;
    clearSearchBtn.style.display = currentSearch ? "flex" : "none";
    renderProducts(currentFilter, currentSearch, currentSort);
  });
}
if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    clearProductSearch();
    searchInput.focus();
  });
}

// Ordenar
const sortSelect = document.getElementById("productSort");
if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderProducts(currentFilter, currentSearch, currentSort);
  });
}

// Inicializar
renderProducts();


/* =============================================
   TEMA CLARO / OSCURO
   ============================================= */
const themeToggle = document.getElementById("themeToggle");

/* Logo único: cambia el src según color/tema activo (en vez de cargar 5 imágenes) */
const LOGO_LIGHT = {
  blue:   "img/logo-fanil-modo-claro-azul.jpg",
  green:  "img/logo-fanil-para-modo-claro.jpg",
  yellow: "img/logo-fanil-modo-claro-amarillo.jpg",
  purple: "img/logo-fanil-modo-claro-morado.jpg"
};
const LOGO_DARK = "img/logo-fanil.jpg";
function updateLogo() {
  const img = document.getElementById("logoImg");
  if (!img) return;
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  const color = document.documentElement.getAttribute("data-color") || "blue";
  img.src = theme === "dark" ? LOGO_DARK : (LOGO_LIGHT[color] || LOGO_LIGHT.blue);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("fanilTheme", theme);
  updateLogo();
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Restaurar tema guardado
const savedTheme = localStorage.getItem("fanilTheme");
if (savedTheme) applyTheme(savedTheme);


/* =============================================
   PALETA DE COLORES
   ============================================= */
const paletteToggle = document.getElementById("paletteToggle");
const colorPalette = document.getElementById("colorPalette");

paletteToggle.addEventListener("click", e => {
  e.stopPropagation();
  colorPalette.classList.toggle("open");
});

document.addEventListener("click", () => colorPalette.classList.remove("open"));
colorPalette.addEventListener("click", e => e.stopPropagation());

function applyColor(color) {
  document.documentElement.setAttribute("data-color", color);
  localStorage.setItem("fanilColor", color);
  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.classList.toggle("active", dot.dataset.color === color);
  });
  updateLogo();
}

document.querySelectorAll(".color-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    applyColor(dot.dataset.color);
    colorPalette.classList.remove("open");
  });
});

// Restaurar color guardado
const savedColor = localStorage.getItem("fanilColor");
if (savedColor) applyColor(savedColor);


/* =============================================
   NAVBAR — scroll y menú mobile
   ============================================= */
const navbar = document.getElementById("navbar");
let navTicking = false;
function updateNavOnScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  // Resaltar link activo según sección visible
  const sections = ["inicio", "categorias", "productos", "marcas", "nosotros", "testimonios", "contacto"];
  const scrollPos = window.scrollY + 100;
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    link.classList.toggle("active", scrollPos >= top && scrollPos < bottom);
  });
  navTicking = false;
}
window.addEventListener("scroll", () => {
  if (!navTicking) {
    window.requestAnimationFrame(updateNavOnScroll);
    navTicking = true;
  }
}, { passive: true });

// Menú hamburguesa
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("mobile-open");
  iconMenu.style.display = isOpen ? "none" : "block";
  iconClose.style.display = isOpen ? "block" : "none";
});

// Cerrar menú mobile al hacer clic en un link
navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    iconMenu.style.display = "block";
    iconClose.style.display = "none";
  });
});




/* =============================================
   AÑO DEL FOOTER
   ============================================= */
document.getElementById("footerYear").textContent = new Date().getFullYear();


/* =============================================
   TOAST (notificación emergente)
   ============================================= */
let toastTimeout;

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  clearTimeout(toastTimeout);

  toast.textContent = message;
  toast.className = `toast ${type} show`;

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


/* =============================================
   DATOS DINÁMICOS — stats y conteos de categorías
   ============================================= */
function initDynamicData() {
  const totalProducts = products.length;
  const uniqueCategories = [...new Set(products.map(p => p.category))].length;

  // Stats del hero
  const elProd = document.getElementById("statProducts");
  const elCat = document.getElementById("statCategories");
  const elBadge = document.getElementById("statBadge");
  if (elProd) elProd.textContent = totalProducts;
  if (elCat) elCat.textContent = uniqueCategories;
  if (elBadge) elBadge.textContent = totalProducts;

  // Marcas: cuenta de chips visibles (sin los duplicados del marquee marcados aria-hidden)
  const brandChips = [...document.querySelectorAll('.brand-chip:not([aria-hidden="true"])')]
    .map(c => c.textContent.trim());
  const uniqueBrands = new Set(brandChips).size;
  const elBrands = document.getElementById("statBrands");
  if (elBrands && uniqueBrands) elBrands.textContent = uniqueBrands;

  // Conteos en las tarjetas de categoría
  document.querySelectorAll(".category-card").forEach(card => {
    const match = (card.getAttribute("onclick") || "").match(/filterProducts\('([^']+)'\)/);
    if (!match) return;
    const cat = match[1];
    const count = products.filter(p => p.category === cat).length;
    const el = card.querySelector(".category-count");
    if (el) el.textContent = `${count} producto${count !== 1 ? "s" : ""}`;
  });
}


/* =============================================
   VISTA RÁPIDA DE PRODUCTO
   ============================================= */
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('qvImg').src = product.image;
  document.getElementById('qvImg').alt = product.name;
  document.getElementById('qvCategory').textContent = product.categoryLabel;
  document.getElementById('qvName').textContent = product.name;
  document.getElementById('qvDesc').textContent = product.description;
  document.getElementById('qvPrice').textContent = formatPrice(product.price);

  const origEl = document.getElementById('qvOriginalPrice');
  origEl.textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
  origEl.style.display = product.originalPrice ? 'block' : 'none';

  const waMsg = encodeURIComponent(`Hola Fanil, me interesa el producto: ${product.name}`);
  document.getElementById('qvWaBtn').href = `https://wa.me/56912345678?text=${waMsg}`;

  const addBtn = document.getElementById('qvAddBtn');
  addBtn.onclick = () => {
    addToCart(productId);
    closeQuickView();
  };

  document.getElementById('qvOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('qvClose').focus();
}

function closeQuickView() {
  document.getElementById('qvOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('qvClose').addEventListener('click', closeQuickView);
document.getElementById('qvOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeQuickView();
});

/* Accesibilidad de teclado para los 3 overlays: Escape cierra, Tab queda atrapado dentro */
function trapFocus(container, e) {
  const focusables = container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape' && e.key !== 'Tab') return;
  const qvOpen = document.getElementById('qvOverlay').classList.contains('open');
  const mdOpen = document.getElementById('modalOverlay').classList.contains('open');
  const csOpen = document.getElementById('cartSidebar').classList.contains('open');

  let container = null;
  if (qvOpen) container = document.getElementById('qvModal');
  else if (mdOpen) container = document.getElementById('checkoutModal');
  else if (csOpen) container = document.getElementById('cartSidebar');
  if (!container) return;

  if (e.key === 'Escape') {
    if (qvOpen) closeQuickView();
    else if (mdOpen) {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    } else {
      closeCartSidebar();
    }
  } else if (e.key === 'Tab') {
    trapFocus(container, e);
  }
});


/* =============================================
   ANIMACIONES AL HACER SCROLL
   ============================================= */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    ".section-header, .category-card, .feature-item, .about-content, .about-visual, .about-card"
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...(entry.target.parentElement?.children || [])];
      const idx = siblings.filter(c => c.classList.contains("anim-ready")).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add("anim-in"), Math.max(0, idx) * 90);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => {
    // Solo animar elementos que están por debajo del viewport al cargar la página
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      el.classList.add("anim-ready");
      io.observe(el);
    }
  });
}


/* =============================================
   BOTÓN VOLVER ARRIBA
   ============================================= */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* =============================================
   STICKY FILTER — detección de "pegado"
   ============================================= */
function initStickyFilter() {
  const area = document.querySelector('.filter-sticky-area');
  if (!area) return;

  // Sentinel de 1px justo antes del área para detectar cuando pasa el borde superior
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'height:1px;margin-bottom:-1px;pointer-events:none;visibility:hidden;';
  area.parentNode.insertBefore(sentinel, area);

  const navH = 68;
  new IntersectionObserver(
    ([entry]) => area.classList.toggle('is-stuck', !entry.isIntersecting),
    {
      rootMargin: `-${Math.round(
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--banner-h') || '40') + navH
      )}px 0px 0px 0px`,
      threshold: 1
    }
  ).observe(sentinel);
}


/* =============================================
   INICIALIZACIÓN
   ============================================= */
updateCartUI();
initDynamicData();
initScrollAnimations();
initBackToTop();
initStickyFilter();
updateLogo();

// Banner informativo — cerrar
const bannerClose = document.getElementById('bannerClose');
if (bannerClose) {
  bannerClose.addEventListener('click', () => {
    document.documentElement.setAttribute('data-banner-closed', '');
    sessionStorage.setItem('fanilBannerClosed', '1');
  });
  // Restaurar si ya fue cerrado en esta sesión
  if (sessionStorage.getItem('fanilBannerClosed')) {
    document.documentElement.setAttribute('data-banner-closed', '');
  }
}

// Suave aparición al cargar (con respaldos para no dejar la página en blanco)
document.body.style.opacity = "0";
function revealBody() {
  document.body.style.transition = "opacity 0.4s ease";
  document.body.style.opacity = "1";
}
window.addEventListener("load", revealBody);
document.addEventListener("DOMContentLoaded", () => setTimeout(revealBody, 50));
setTimeout(revealBody, 2000); // failsafe por si 'load' nunca dispara

/* =============================================
   AUTO-SCROLL BARRA DE FILTROS (hover en bordes)
   ============================================= */
(function initFilterBarScroll() {
  const EDGE_ZONE = 90;   // px desde el borde que activa el scroll
  const SPEED     = 6;    // px por frame
  let rafId       = null;

  function startScroll(bar, direction) {
    if (rafId) return;
    function step() {
      bar.scrollLeft += direction * SPEED;
      rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
  }

  function stopScroll() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function attachToBar(bar) {
    bar.addEventListener('mousemove', (e) => {
      const rect = bar.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      stopScroll();
      if (x < EDGE_ZONE)                  startScroll(bar, -1);
      else if (x > rect.width - EDGE_ZONE) startScroll(bar,  1);
    });
    bar.addEventListener('mouseleave', stopScroll);
  }

  // Aplica cuando el DOM ya existe, y re-aplica si el elemento se recrea
  function tryAttach() {
    const bar = document.querySelector('.filter-bar');
    if (bar && !bar._scrollAttached) {
      bar._scrollAttached = true;
      attachToBar(bar);
    }
  }

  document.addEventListener('DOMContentLoaded', tryAttach);
  window.addEventListener('load', tryAttach);
  setTimeout(tryAttach, 500);
})();
