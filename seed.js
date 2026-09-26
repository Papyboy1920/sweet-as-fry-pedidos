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

const CATALOG_VERSION = 2;

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
          name: "The house original",
          items: [
            { id: "original-4", name: "Original — 4 Rolls", price: 32.00, unit: "box", active: true, image: "rolls-original.jpg",
              tag: "The original",
              desc: "4 soft, gooey, glazed cinnamon rolls. The one that started it all. Small batch — only 25 orders per drop." },
            { id: "original-6", name: "Original — 6 Rolls", price: 45.00, unit: "box", active: true, image: "rolls-caramel.jpg",
              desc: "6 original cinnamon rolls with house glaze. Perfect for sharing (or not)." },
            { id: "original-12", name: "Original — 12 Rolls", price: 80.00, unit: "box", active: true, image: "rolls-box4.jpg",
              tag: "For the family",
              desc: "12 original cinnamon rolls. The big box for the house, the office, or the party." }
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
          name: "Flavors of the week — Oreo or Brown Butter",
          items: [
            { id: "specialty-4", name: "Specialty — 4 Rolls", price: 36.00, unit: "box", active: true, image: "rolls-oreo-box.jpg",
              desc: "4 rolls of the week's flavor (Oreo or Brown Butter). Mix & match available." },
            { id: "specialty-6", name: "Specialty — 6 Rolls", price: 50.00, unit: "box", active: true, image: "rolls-oreo-hands.jpg",
              tag: "Most ordered",
              desc: "6 specialty rolls — the repeat favorite. Oreo or Brown Butter, mix & match available." },
            { id: "specialty-12", name: "Specialty — 12 Rolls", price: 90.00, unit: "box", active: true, image: "rolls-cake.jpg",
              desc: "12 rolls of the week's specialty flavor. For the serious ones." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
