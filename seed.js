// ============================================================
// CATÁLOGO SEMILLA — Sweet As Fry (Kendall, Miami, FL)
// Dessert shop — cinnamon rolls de small batch, preorders semanales.
// IG: @sweet_as_fry
// Menú real de su price list #001 (sábado 08/29/2026).
// Moneda: USD. Pagos: efectivo / Zelle (pendiente de pago).
// Pickup: miércoles y sábado 12pm–8pm en Kendall.
// Delivery $8: Kendall, South Miami, Pinecrest, Coconut Grove,
// West Miami. Solo 25 órdenes por drop — se confirman con el pago.
// Fotos: Portal (recortadas de sus imágenes). No generar con IA.
// CATALOG_VERSION: subir para re-sembrar en el servidor.
// ============================================================

const CATALOG_VERSION = 1;

const SEED_CATALOG = {
  departments: [
    {
      id: "the-original",
      name: "The Original Roll",
      icon: "🌀",
      iconImg: "rolls-original.jpg",
      categories: [
        {
          id: "original-rolls",
          name: "El original de la casa",
          items: [
            { id: "original-4", name: "Original — 4 Rolls", price: 32.00, unit: "caja", active: true, image: "rolls-original.jpg",
              tag: "La original",
              desc: "4 cinnamon rolls suavecitos, glaseados y calientes. La que empezó todo. Small batch — solo 25 órdenes por drop." },
            { id: "original-6", name: "Original — 6 Rolls", price: 45.00, unit: "caja", active: true, image: "rolls-caramel.jpg",
              desc: "6 cinnamon rolls originales con glaseado de la casa. Perfectos para compartir (o no)." },
            { id: "original-12", name: "Original — 12 Rolls", price: 80.00, unit: "caja", active: true, image: "rolls-box4.jpg",
              tag: "Para la familia",
              desc: "12 cinnamon rolls originales. La caja grande para la casa, la oficina o el party." }
          ]
        }
      ]
    },
    {
      id: "specialty",
      name: "Specialty Flavors",
      icon: "✨",
      iconImg: "rolls-oreo-box.jpg",
      categories: [
        {
          id: "specialty-rolls",
          name: "Sabores de la semana — Oreo o Brown Butter",
          items: [
            { id: "specialty-4", name: "Specialty — 4 Rolls", price: 36.00, unit: "caja", active: true, image: "rolls-oreo-box.jpg",
              desc: "4 rolls del sabor de la semana (Oreo o Brown Butter). Se puede mix & match." },
            { id: "specialty-6", name: "Specialty — 6 Rolls", price: 50.00, unit: "caja", active: true, image: "rolls-oreo-hands.jpg",
              tag: "El más pedido",
              desc: "6 rolls specialty — el favorito de los que repiten. Oreo o Brown Butter, mix & match disponible." },
            { id: "specialty-12", name: "Specialty — 12 Rolls", price: 90.00, unit: "caja", active: true, image: "rolls-cake.jpg",
              desc: "12 rolls del sabor specialty de la semana. Para los que no juegan." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
