export const products = [
  {
    id: 'p001',
    name: 'Ocean-Reclaimed Tote',
    brand: 'TidalGoods',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80',
    category: 'Accessories',
    sustainabilityGrade: 'A',
    carbonGrams: 120,
    shortDesc:
      'Handwoven from reclaimed ocean plastics, designed to last decades.',
    materials: [
      { name: 'Recycled Ocean Plastic (rPET)', percentage: 72 },
      { name: 'Organic Cotton Lining', percentage: 18 },
      { name: 'Natural Rubber Handles', percentage: 10 },
    ],
    factory: {
      name: 'CoastalCraft Cooperative',
      location: 'Porto, Portugal',
      transparencyScore: 94,
      certifications: ['B-Corp', 'Fair Trade', 'OEKO-TEX'],
      workers: 68,
      avgWage: '3.2× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle',
      instructions:
        'Return via our take-back program or drop at any rPET collection point. The rubber handles compost in 18 months.',
      recyclable: true,
      compostable: false,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 48 },
      { phase: 'Manufacturing', grams: 32 },
      { phase: 'Shipping', grams: 28 },
      { phase: 'Packaging', grams: 12 },
    ],
  },
  {
    id: 'p002',
    name: 'Bamboo Carry Bottle',
    brand: 'FlowRoot',
    price: 34,
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80',
    category: 'Kitchenware',
    sustainabilityGrade: 'A',
    carbonGrams: 85,
    shortDesc:
      'Triple-walled, bamboo-wrapped stainless steel. Zero plastic, forever durable.',
    materials: [
      { name: 'Food-Grade Stainless Steel (304)', percentage: 65 },
      { name: 'FSC-Certified Bamboo Wrap', percentage: 25 },
      { name: 'Recycled Silicone Seal', percentage: 10 },
    ],
    factory: {
      name: 'Yunnan Precision Works',
      location: 'Yunnan, China',
      transparencyScore: 81,
      certifications: ['ISO 14001', 'SA8000'],
      workers: 142,
      avgWage: '2.1× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Remove bamboo sleeve (home-compostable in 90 days). Steel body is infinitely recyclable at your local scrap facility.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 22 },
      { phase: 'Manufacturing', grams: 30 },
      { phase: 'Shipping', grams: 25 },
      { phase: 'Packaging', grams: 8 },
    ],
  },
  {
    id: 'p003',
    name: 'Organic Linen Overshirt',
    brand: 'Roota Studio',
    price: 128,
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    category: 'Apparel',
    sustainabilityGrade: 'B',
    carbonGrams: 340,
    shortDesc:
      'Slow-fashion overshirt made from rain-fed linen, naturally dyed.',
    materials: [
      { name: 'GOTS Certified Organic Linen', percentage: 88 },
      { name: 'Natural Indigo Dye', percentage: 6 },
      { name: 'Recycled Metal Buttons', percentage: 6 },
    ],
    factory: {
      name: 'Atelier Nord',
      location: 'Vilnius, Lithuania',
      transparencyScore: 89,
      certifications: ['GOTS', 'Fair Wear Foundation'],
      workers: 34,
      avgWage: '1.8× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        '100% biodegradable. Remove metal buttons (recyclable). The linen fabric will fully compost in a home bin within 6 months.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 140 },
      { phase: 'Manufacturing', grams: 80 },
      { phase: 'Shipping', grams: 90 },
      { phase: 'Packaging', grams: 30 },
    ],
  },
  {
    id: 'p004',
    name: 'Mycelium Desk Pad',
    brand: 'SporeForm',
    price: 62,
    image:
      'https://images.unsplash.com/photo-1752867494500-9ea9322f58c9?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Office',
    sustainabilityGrade: 'A',
    carbonGrams: 95,
    shortDesc:
      'Grown, not made. Mushroom-root leather desk mat, carbon-negative process.',
    materials: [
      { name: 'Mycelium Composite (Mushroom Root)', percentage: 80 },
      { name: 'Hemp Fiber Substrate', percentage: 15 },
      { name: 'Natural Cork Backing', percentage: 5 },
    ],
    factory: {
      name: 'BioFab Labs',
      location: 'Utrecht, Netherlands',
      transparencyScore: 97,
      certifications: ['B-Corp', 'Cradle to Cradle Gold'],
      workers: 22,
      avgWage: '2.9× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Fully home-compostable within 45 days. No separation needed — the entire pad is one material stream.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 15 },
      { phase: 'Manufacturing', grams: 40 },
      { phase: 'Shipping', grams: 32 },
      { phase: 'Packaging', grams: 8 },
    ],
  },
  {
    id: 'p005',
    name: 'Reclaimed Teak Shelf',
    brand: 'Forét Forms',
    price: 215,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    category: 'Furniture',
    sustainabilityGrade: 'B',
    carbonGrams: 820,
    shortDesc:
      'Each shelf is unique — salvaged teak from 100-year-old demolished buildings.',
    materials: [
      { name: 'Reclaimed Solid Teak', percentage: 90 },
      { name: 'Water-Based Linseed Finish', percentage: 6 },
      { name: 'Recycled Steel Brackets', percentage: 4 },
    ],
    factory: {
      name: 'Jogja Woodcraft Guild',
      location: 'Yogyakarta, Indonesia',
      transparencyScore: 76,
      certifications: ['FSC Reclaimed', 'SVLK'],
      workers: 18,
      avgWage: '2.4× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle / Donate',
      instructions:
        'Teak lasts generations — please rehome before discarding. The linseed finish does not prevent composting after 50+ years.',
      recyclable: false,
      compostable: false,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 80 },
      { phase: 'Manufacturing', grams: 200 },
      { phase: 'Shipping', grams: 480 },
      { phase: 'Packaging', grams: 60 },
    ],
  },
  {
    id: 'p006',
    name: 'Solar Beeswax Candle Set',
    brand: 'LuxLumina',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1616423492443-5322d910aedb?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 60,
    shortDesc:
      'Pure beeswax from solar-powered apiaries. Burns clean, smells like honey.',
    materials: [
      { name: '100% Beeswax', percentage: 90 },
      { name: 'Organic Cotton Wick', percentage: 5 },
      { name: 'Terracotta Vessel', percentage: 5 },
    ],
    factory: {
      name: 'Alentejo Apiary Collective',
      location: 'Évora, Portugal',
      transparencyScore: 92,
      certifications: ['EU Organic', 'Rainforest Alliance'],
      workers: 12,
      avgWage: '2.6× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Reuse',
      instructions:
        'The beeswax and wick are home-compostable. The terracotta vessel is a perfect plant pot — use it!',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 18 },
      { phase: 'Manufacturing', grams: 14 },
      { phase: 'Shipping', grams: 22 },
      { phase: 'Packaging', grams: 6 },
    ],
  },
  {
    id: 'p007',
    name: 'Hemp Seed Skincare Kit',
    brand: 'Verdant Ritual',
    price: 74,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    category: 'Beauty',
    sustainabilityGrade: 'A',
    carbonGrams: 75,
    shortDesc:
      'Three-step routine. Zero synthetics, zero plastic packaging, zero compromise.',
    materials: [
      { name: 'Cold-Pressed Hemp Seed Oil', percentage: 55 },
      { name: 'Organic Aloe Vera', percentage: 25 },
      { name: 'Shea Butter (Fair Trade)', percentage: 20 },
    ],
    factory: {
      name: 'PureForm Labs',
      location: 'Glasgow, Scotland',
      transparencyScore: 91,
      certifications: ['Leaping Bunny', 'COSMOS Organic', 'B-Corp'],
      workers: 27,
      avgWage: '1.9× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'All packaging is kraft paper and glass. Compost the paper, return glass via our deposit scheme for a £2 credit.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 20 },
      { phase: 'Manufacturing', grams: 22 },
      { phase: 'Shipping', grams: 24 },
      { phase: 'Packaging', grams: 9 },
    ],
  },
  {
    id: 'p008',
    name: 'Cork Yoga Block Set',
    brand: 'GroundForm',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80',
    category: 'Wellness',
    sustainabilityGrade: 'A',
    carbonGrams: 110,
    shortDesc:
      'Naturally antimicrobial cork harvested without harming the tree.',
    materials: [
      { name: 'FSC-Certified Cork (harvest, not cut)', percentage: 100 },
    ],
    factory: {
      name: 'Montado Cork Guild',
      location: 'Alentejo, Portugal',
      transparencyScore: 88,
      certifications: ['FSC', 'EU Ecolabel'],
      workers: 45,
      avgWage: '2.0× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Natural cork composts in 3-4 years. Alternatively, grind and use as garden mulch for a nutrient boost.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 20 },
      { phase: 'Manufacturing', grams: 35 },
      { phase: 'Shipping', grams: 42 },
      { phase: 'Packaging', grams: 13 },
    ],
  },
  {
    id: 'p009',
    name: 'Biodegradable Phone Case',
    brand: 'EcoShield',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    category: 'Tech Accessories',
    sustainabilityGrade: 'A',
    carbonGrams: 45,
    shortDesc:
      'Plant-based polymer case that decomposes naturally without toxic chemicals.',
    materials: [
      { name: 'Mycelium-Based Biopolymer', percentage: 70 },
      { name: 'Recycled Ocean Plastic', percentage: 20 },
      { name: 'Natural Rubber Grip', percentage: 10 },
    ],
    factory: {
      name: 'GreenTech Manufacturing',
      location: 'Bristol, UK',
      transparencyScore: 90,
      certifications: ['B-Corp', 'Carbon Neutral'],
      workers: 35,
      avgWage: '2.2× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Fully home-compostable within 6 months. No separation needed.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 12 },
      { phase: 'Manufacturing', grams: 18 },
      { phase: 'Shipping', grams: 10 },
      { phase: 'Packaging', grams: 5 },
    ],
  },
  {
    id: 'p010',
    name: 'Organic Cotton Socks Bundle',
    brand: 'PureThread',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    category: 'Apparel',
    sustainabilityGrade: 'A',
    carbonGrams: 95,
    shortDesc:
      'Five pairs of GOTS certified organic cotton socks that never lose elasticity.',
    materials: [
      { name: 'GOTS Organic Cotton', percentage: 92 },
      { name: 'Natural Rubber Elastic', percentage: 5 },
      { name: 'Recycled Polyester Thread', percentage: 3 },
    ],
    factory: {
      name: 'Tamil Nadu Textile Guild',
      location: 'Chennai, India',
      transparencyScore: 85,
      certifications: ['GOTS', 'SA8000', 'Fair Trade'],
      workers: 89,
      avgWage: '2.3× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Remove elastic (recycle), cotton fibers fully compost in 5-6 months. Perfect for upcycling into rags first.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 35 },
      { phase: 'Manufacturing', grams: 30 },
      { phase: 'Shipping', grams: 20 },
      { phase: 'Packaging', grams: 10 },
    ],
  },
  {
    id: 'p011',
    name: 'Recycled Paper Notebook',
    brand: 'PageTree',
    price: 16,
    image:
      'https://images.unsplash.com/photo-1648235982809-61e2a66f5c01?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Office',
    sustainabilityGrade: 'A',
    carbonGrams: 52,
    shortDesc:
      'A-series hardcover notebook made from post-consumer recycled paper. Acid-free, forever.',
    materials: [
      { name: '100% Post-Consumer Waste Paper', percentage: 85 },
      { name: 'Soy-Based Ink', percentage: 10 },
      { name: 'Linen Binding', percentage: 5 },
    ],
    factory: {
      name: 'Papier Collective',
      location: 'Munich, Germany',
      transparencyScore: 92,
      certifications: ['FSC Recycled', 'EU Ecolabel'],
      workers: 42,
      avgWage: '2.7× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle + Compost',
      instructions:
        'Fully recyclable at your paper recycling bin. Linen binding decomposes with the paper.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 20 },
      { phase: 'Manufacturing', grams: 15 },
      { phase: 'Shipping', grams: 12 },
      { phase: 'Packaging', grams: 5 },
    ],
  },
  {
    id: 'p012',
    name: 'Organic Linen Bedsheet Set',
    brand: 'SleepWeave',
    price: 156,
    image:
      'https://plus.unsplash.com/premium_photo-1670869815097-4af200de78f0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Apparel',
    sustainabilityGrade: 'A',
    carbonGrams: 420,
    shortDesc:
      'Queen-size pure linen bedsheets that get softer with every wash. GOTS certified.',
    materials: [{ name: 'GOTS Certified Organic Linen', percentage: 100 }],
    factory: {
      name: 'Flax Nordic Workshop',
      location: 'Riga, Latvia',
      transparencyScore: 88,
      certifications: ['GOTS', 'Fair Wear Foundation'],
      workers: 56,
      avgWage: '2.1× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        '100% natural fiber — home compostable in 8-12 months. Can be upcycled into pillowcases or curtains first.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 160 },
      { phase: 'Manufacturing', grams: 100 },
      { phase: 'Shipping', grams: 110 },
      { phase: 'Packaging', grams: 50 },
    ],
  },
  {
    id: 'p013',
    name: 'Bamboo Cutting Board Set',
    brand: 'CulinaryRoot',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80',
    category: 'Kitchenware',
    sustainabilityGrade: 'A',
    carbonGrams: 128,
    shortDesc:
      'Three eco-friendly bamboo cutting boards with natural antimicrobial properties.',
    materials: [
      { name: 'FSC-Certified Bamboo', percentage: 95 },
      { name: 'Food-Safe Mineral Oil Finish', percentage: 5 },
    ],
    factory: {
      name: 'Bamboo Valley Collective',
      location: 'Zhejiang, China',
      transparencyScore: 79,
      certifications: ['FSC', 'ISO 14001'],
      workers: 67,
      avgWage: '2.0× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Naturally renewable resource — compostable after 15+ years of use. Can be burned for energy.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 30 },
      { phase: 'Manufacturing', grams: 40 },
      { phase: 'Shipping', grams: 35 },
      { phase: 'Packaging', grams: 23 },
    ],
  },
  {
    id: 'p014',
    name: 'Recycled Glass Dinner Set',
    brand: 'CircleGlass',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80',
    category: 'Kitchenware',
    sustainabilityGrade: 'A',
    carbonGrams: 85,
    shortDesc:
      'Beautiful 12-piece dinner set crafted from 100% post-consumer recycled glass.',
    materials: [{ name: '100% Recycled Glass', percentage: 100 }],
    factory: {
      name: 'EuroGlass Atelier',
      location: 'Bohemia, Czech Republic',
      transparencyScore: 87,
      certifications: ['EU Ecolabel', 'ISO 14001'],
      workers: 94,
      avgWage: '1.9× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle',
      instructions:
        'Infinitely recyclable — glass has no lifecycle limit. Return to local recycling for another round.',
      recyclable: true,
      compostable: false,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 15 },
      { phase: 'Manufacturing', grams: 35 },
      { phase: 'Shipping', grams: 28 },
      { phase: 'Packaging', grams: 7 },
    ],
  },
  {
    id: 'p015',
    name: 'Natural Jute Area Rug',
    brand: 'TextileRoot',
    price: 178,
    image:
      'https://images.unsplash.com/photo-1687227624172-a1e3d4f8d194?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Furniture',
    sustainabilityGrade: 'B',
    carbonGrams: 650,
    shortDesc:
      '8x10 ft rug made from 100% natural jute fiber with organic cotton border.',
    materials: [
      { name: 'Natural Jute Fiber', percentage: 85 },
      { name: 'Organic Cotton Border', percentage: 10 },
      { name: 'Natural Latex Backing', percentage: 5 },
    ],
    factory: {
      name: 'Bengal Textile Guild',
      location: 'Dhaka, Bangladesh',
      transparencyScore: 81,
      certifications: ['Fair Trade', 'OEKO-TEX', 'SA8000'],
      workers: 156,
      avgWage: '2.2× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Jute naturally decomposes in 2-3 years. Cotton border compostable. Latex backing recyclable.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 180 },
      { phase: 'Manufacturing', grams: 220 },
      { phase: 'Shipping', grams: 200 },
      { phase: 'Packaging', grams: 50 },
    ],
  },
  {
    id: 'p016',
    name: 'Organic Meditation Pillow',
    brand: 'Serenity & Stems',
    price: 35,
    image:
      'https://plus.unsplash.com/premium_photo-1763466939515-4765458ac36c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 68,
    shortDesc:
      'Organic cotton pillow filled with dried from biodynamic farming.',
    materials: [
      { name: 'GOTS Organic Cotton Cover', percentage: 60 },
      { name: 'Dried Organic', percentage: 35 },
      { name: 'Recycled Polyester Thread', percentage: 5 },
    ],
    factory: {
      name: 'Provence Cooperative',
      location: 'Valensole, France',
      transparencyScore: 93,
      certifications: ['GOTS', 'Demeter Biodynamic', 'Leaping Bunny'],
      workers: 18,
      avgWage: '2.5× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Fully compostable — cotton and break down within 4-5 months. Scent benefits garden soil.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 18 },
      { phase: 'Manufacturing', grams: 20 },
      { phase: 'Shipping', grams: 18 },
      { phase: 'Packaging', grams: 12 },
    ],
  },
  {
    id: 'p017',
    name: 'Recycled Aluminum Water Bottle',
    brand: 'AltraFlow',
    price: 44,
    image:
      'https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Kitchenware',
    sustainabilityGrade: 'A',
    carbonGrams: 92,
    shortDesc:
      'Ultra-light 18oz bottle from 100% recycled aluminum with permanent non-slip coating.',
    materials: [
      { name: '100% Recycled Aluminum', percentage: 94 },
      { name: 'BPA-Free Plastic Cap', percentage: 4 },
      { name: 'Recycled Silicone Gasket', percentage: 2 },
    ],
    factory: {
      name: 'Nordic Aluminum Works',
      location: 'Stockholm, Sweden',
      transparencyScore: 94,
      certifications: ['B-Corp', 'Carbon Neutral', 'ISO 14001'],
      workers: 51,
      avgWage: '2.8× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle',
      instructions:
        'Aluminum is infinitely recyclable with zero loss of quality. Remove plastic cap and silicone gasket (recycle separately).',
      recyclable: true,
      compostable: false,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 28 },
      { phase: 'Manufacturing', grams: 32 },
      { phase: 'Shipping', grams: 22 },
      { phase: 'Packaging', grams: 10 },
    ],
  },
  {
    id: 'p018',
    name: 'Natural Wool Sweater',
    brand: 'Alpine Knits',
    price: 95,
    image:
      'https://images.unsplash.com/photo-1758981400268-1181291b9503?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Apparel',
    sustainabilityGrade: 'B',
    carbonGrams: 280,
    shortDesc:
      'Hand-knitted pure merino wool sweater from regenerative farms in New Zealand.',
    materials: [{ name: 'Regenerative Merino Wool', percentage: 100 }],
    factory: {
      name: 'Highland Knitting Mill',
      location: 'Dunedin, New Zealand',
      transparencyScore: 89,
      certifications: ['Regenerative Organic', 'Fair Trade'],
      workers: 34,
      avgWage: '2.4× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Donate',
      instructions:
        'Wool is fully biodegradable. Donate to thrift stores for multiple lifetimes, or compost after 7-10 years.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 110 },
      { phase: 'Manufacturing', grams: 90 },
      { phase: 'Shipping', grams: 60 },
      { phase: 'Packaging', grams: 20 },
    ],
  },
  {
    id: 'p019',
    name: 'Stainless Steel Lunch Box',
    brand: 'MetalMate',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1645739468853-9fc3fa15010b?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Kitchenware',
    sustainabilityGrade: 'A',
    carbonGrams: 110,
    shortDesc:
      'BPA-free stainless steel lunch container with silicone lids. Dishwasher safe.',
    materials: [
      { name: 'Food-Grade Stainless Steel', percentage: 88 },
      { name: 'Recycled Silicone Lids', percentage: 12 },
    ],
    factory: {
      name: 'EcoMetal Industries',
      location: 'Surat, India',
      transparencyScore: 82,
      certifications: ['ISO 9001', 'SA8000'],
      workers: 128,
      avgWage: '2.1× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle',
      instructions:
        'Steel is infinitely recyclable. Silicone lids can be composted or recycled as industrial rubber.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 32 },
      { phase: 'Manufacturing', grams: 40 },
      { phase: 'Shipping', grams: 25 },
      { phase: 'Packaging', grams: 13 },
    ],
  },
  {
    id: 'p020',
    name: 'Vegan Leather Backpack',
    brand: 'VeganTrail',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    category: 'Accessories',
    sustainabilityGrade: 'A',
    carbonGrams: 185,
    shortDesc:
      'Durable pineapple leather (Piñ-atex) backpack with recycled polyester lining.',
    materials: [
      { name: 'Pineapple Leather (Piñ-atex)', percentage: 70 },
      { name: 'Recycled Polyester', percentage: 20 },
      { name: 'Recycled Metal Hardware', percentage: 10 },
    ],
    factory: {
      name: 'Manila Vegan Works',
      location: 'Manila, Philippines',
      transparencyScore: 86,
      certifications: ['B-Corp', 'Fair Trade', 'Vegan'],
      workers: 45,
      avgWage: '2.3× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Pineapple leather is compostable. Remove metal hardware (recycle). Polyester lining recyclable.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 55 },
      { phase: 'Manufacturing', grams: 65 },
      { phase: 'Shipping', grams: 45 },
      { phase: 'Packaging', grams: 20 },
    ],
  },
  {
    id: 'p021',
    name: 'Seedpaper Greeting Cards',
    brand: 'Bloomwrite',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1634228598047-b86287f4e10d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Office',
    sustainabilityGrade: 'A',
    carbonGrams: 35,
    shortDesc:
      'Pack of 8 plantable greeting cards embedded with wildflower seeds.',
    materials: [
      { name: 'Recycled Paper Base', percentage: 85 },
      { name: 'Native Wildflower Seeds', percentage: 10 },
      { name: 'Soy-Based Ink', percentage: 5 },
    ],
    factory: {
      name: 'Seed & Paper Studio',
      location: 'Boulder, Colorado',
      transparencyScore: 91,
      certifications: ['B-Corp', 'FSC Recycled'],
      workers: 12,
      avgWage: '2.6× local minimum wage',
    },
    endOfLife: {
      method: 'Plant + Compost',
      instructions:
        'Plant in soil to grow wildflowers. Or compost the entire card within 3-4 months.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 10 },
      { phase: 'Manufacturing', grams: 12 },
      { phase: 'Shipping', grams: 8 },
      { phase: 'Packaging', grams: 5 },
    ],
  },
  {
    id: 'p022',
    name: 'Organic Tea Collection',
    brand: 'LeafLove',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1728034261780-94beccf0eaec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Food & Beverage',
    sustainabilityGrade: 'A',
    carbonGrams: 72,
    shortDesc:
      'Premium loose-leaf organic teas from high-altitude farms. Six varieties included.',
    materials: [
      { name: 'USDA Organic Tea Leaves', percentage: 92 },
      { name: 'Glass Storage Jar', percentage: 5 },
      { name: 'Kraft Paper Pouches', percentage: 3 },
    ],
    factory: {
      name: 'Fair Trade Tea Estate',
      location: 'Darjeeling, India',
      transparencyScore: 88,
      certifications: ['Fair Trade', 'USDA Organic', 'Rainforest Alliance'],
      workers: 267,
      avgWage: '2.2× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Tea leaves are compostable. Glass jar infinitely recyclable. Paper pouches compostable.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 20 },
      { phase: 'Manufacturing', grams: 18 },
      { phase: 'Shipping', grams: 28 },
      { phase: 'Packaging', grams: 6 },
    ],
  },
  {
    id: 'p023',
    name: 'Recycled Rubber Yoga Mat',
    brand: 'GripFlow',
    price: 52,
    image:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80',
    category: 'Wellness',
    sustainabilityGrade: 'A',
    carbonGrams: 135,
    shortDesc:
      'Non-slip yoga mat made from 100% recycled rubber with jute backing.',
    materials: [
      { name: '100% Recycled Rubber', percentage: 75 },
      { name: 'Natural Jute', percentage: 20 },
      { name: 'Natural Rubber Adhesive', percentage: 5 },
    ],
    factory: {
      name: 'RubberCycle Works',
      location: 'Portland, Oregon',
      transparencyScore: 90,
      certifications: ['B-Corp', 'Carbon Neutral'],
      workers: 28,
      avgWage: '2.7× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle + Compost',
      instructions:
        'Rubber is recyclable at dedicated facilities. Jute backing naturally composts in 2-3 years.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 38 },
      { phase: 'Manufacturing', grams: 45 },
      { phase: 'Shipping', grams: 35 },
      { phase: 'Packaging', grams: 17 },
    ],
  },
  {
    id: 'p024',
    name: 'Flax Linen Napkin Set',
    brand: 'TableWeave',
    price: 26,
    image:
      'https://images.unsplash.com/photo-1625471592808-3b848a6e9ffd?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 88,
    shortDesc:
      'Pack of 6 pure linen napkins from European linen flax. Durable and elegant.',
    materials: [{ name: 'EU Organic Linen', percentage: 100 }],
    factory: {
      name: 'Flanders Linen Mill',
      location: 'Courtrai, Belgium',
      transparencyScore: 91,
      certifications: ['EU Ecolabel', 'GOTS'],
      workers: 52,
      avgWage: '2.5× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        '100% biodegradable linen compost in 6-8 months. No washing chemicals required.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 28 },
      { phase: 'Manufacturing', grams: 25 },
      { phase: 'Shipping', grams: 22 },
      { phase: 'Packaging', grams: 13 },
    ],
  },
  {
    id: 'p025',
    name: 'Zero-Waste Bamboo Toothbrush Set',
    brand: 'SmileBamboo',
    price: 14,
    image:
      'https://plus.unsplash.com/premium_photo-1737259351142-376ca1f3a64f?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Health & Hygiene',
    sustainabilityGrade: 'A',
    carbonGrams: 42,
    shortDesc:
      'Pack of 4 biodegradable bamboo toothbrushes with compostable bristles.',
    materials: [
      { name: 'FSC Bamboo Handle', percentage: 60 },
      { name: 'Plant-Based Bristles (Castor Oil)', percentage: 35 },
      { name: 'Recycled Paper Packaging', percentage: 5 },
    ],
    factory: {
      name: 'EcoBrush Manufacturing',
      location: 'Hangzhou, China',
      transparencyScore: 80,
      certifications: ['FSC', 'ISO 14001'],
      workers: 95,
      avgWage: '1.9× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Entire toothbrush is compostable within 5-6 months. Bristles break down faster than handle.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 8 },
      { phase: 'Manufacturing', grams: 12 },
      { phase: 'Shipping', grams: 15 },
      { phase: 'Packaging', grams: 7 },
    ],
  },
  {
    id: 'p026',
    name: 'Natural Wool Felted Coasters',
    brand: 'FeltCraft Studio',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1610413758908-21e06cc71d7e?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 56,
    shortDesc:
      'Handmade set of 4 wool coasters crafted from upcycled merino wool scraps.',
    materials: [{ name: 'Upcycled Merino Wool', percentage: 100 }],
    factory: {
      name: 'Artisan Felt Works',
      location: 'Dublin, Ireland',
      transparencyScore: 87,
      certifications: ['Certified Organic Wool', 'Fair Trade'],
      workers: 8,
      avgWage: '2.3× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Pure wool fully composts in 4-5 years. Completely biodegradable, no synthetic dyes used.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 8 },
      { phase: 'Manufacturing', grams: 18 },
      { phase: 'Shipping', grams: 20 },
      { phase: 'Packaging', grams: 10 },
    ],
  },
  {
    id: 'p027',
    name: 'Organic Soap Bar Collection',
    brand: 'PureEssence',
    price: 24,
    image:
      'https://plus.unsplash.com/premium_photo-1677776519079-184fdc8f5c6d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Beauty',
    sustainabilityGrade: 'A',
    carbonGrams: 68,
    shortDesc:
      'Set of 4 handmade soaps with organic oils and botanical extracts. Plastic-free.',
    materials: [
      { name: 'Organic Plant Oils', percentage: 65 },
      { name: 'Vegetable Glycerin', percentage: 20 },
      { name: 'Natural Botanical Extracts', percentage: 15 },
    ],
    factory: {
      name: 'Artisan Soap House',
      location: 'Provence, France',
      transparencyScore: 92,
      certifications: ['COSMOS Organic', 'Leaping Bunny', 'Vegan'],
      workers: 11,
      avgWage: '2.4× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Fully compostable soap residues and packaging. No harmful chemicals in waterways.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 16 },
      { phase: 'Manufacturing', grams: 18 },
      { phase: 'Shipping', grams: 22 },
      { phase: 'Packaging', grams: 12 },
    ],
  },
  {
    id: 'p028',
    name: 'Recycled Denim Tote Bag',
    brand: 'DenimRevived',
    price: 36,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    category: 'Accessories',
    sustainabilityGrade: 'B',
    carbonGrams: 145,
    shortDesc:
      'Sturdy tote crafted from reclaimed denim jeans with vintage leather accents.',
    materials: [
      { name: 'Reclaimed Denim Jeans', percentage: 75 },
      { name: 'Recycled Cotton Lining', percentage: 15 },
      { name: 'Reclaimed Leather', percentage: 10 },
    ],
    factory: {
      name: 'Vintage Circle Co.',
      location: 'Austin, Texas',
      transparencyScore: 84,
      certifications: ['B-Corp', 'Carbon Neutral'],
      workers: 16,
      avgWage: '2.5× local minimum wage',
    },
    endOfLife: {
      method: 'Donate + Compost',
      instructions:
        'Donate for multiple lifetimes. When worn out, denim and cotton are compostable (6-8 months).',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 25 },
      { phase: 'Manufacturing', grams: 52 },
      { phase: 'Shipping', grams: 45 },
      { phase: 'Packaging', grams: 23 },
    ],
  },
  {
    id: 'p029',
    name: 'Natural Rubber Dog Bed',
    brand: 'PetEarth',
    price: 78,
    image:
      'https://plus.unsplash.com/premium_photo-1718646036725-6372ade1ba24?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'B',
    carbonGrams: 280,
    shortDesc:
      'Orthopedic dog bed filled with natural latex foam, organic cotton cover.',
    materials: [
      { name: 'Natural Latex Foam', percentage: 60 },
      { name: 'GOTS Organic Cotton Cover', percentage: 35 },
      { name: 'Recycled Polyester Zipper', percentage: 5 },
    ],
    factory: {
      name: 'PetCare Manufacturing',
      location: 'Kuala Lumpur, Malaysia',
      transparencyScore: 81,
      certifications: ['GOTS', 'ISO 14001'],
      workers: 78,
      avgWage: '2.0× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Latex foam composts in 1-2 years. Cotton cover compostable. Zipper recyclable separately.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 95 },
      { phase: 'Manufacturing', grams: 85 },
      { phase: 'Shipping', grams: 70 },
      { phase: 'Packaging', grams: 30 },
    ],
  },
  {
    id: 'p030',
    name: 'Hand-Poured Soy Candles',
    brand: 'WickSustain',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 65,
    shortDesc:
      'Three scented soy candles in glass jars. Sustainable ingredients, zero waste.',
    materials: [
      { name: '100% Soy Wax', percentage: 80 },
      { name: 'Organic Cotton Wick', percentage: 12 },
      { name: 'Essential Oils', percentage: 8 },
    ],
    factory: {
      name: 'Slow Candle Studio',
      location: 'Copenhagen, Denmark',
      transparencyScore: 93,
      certifications: ['B-Corp', 'Vegan'],
      workers: 14,
      avgWage: '2.8× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Reuse',
      instructions:
        'Soy wax and cotton wick are compostable. Glass jars perfect for storage or plant pots.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 14 },
      { phase: 'Manufacturing', grams: 20 },
      { phase: 'Shipping', grams: 18 },
      { phase: 'Packaging', grams: 13 },
    ],
  },
  {
    id: 'p031',
    name: 'Recycled Ocean Bracelet',
    brand: 'TidalGems',
    price: 22,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    category: 'Accessories',
    sustainabilityGrade: 'A',
    carbonGrams: 38,
    shortDesc:
      'Colorful bracelet made from reclaimed ocean plastic with a portion saved.',
    materials: [{ name: 'Recycled Ocean Plastic', percentage: 100 }],
    factory: {
      name: 'Ocean Cleanup Crafts',
      location: 'Amsterdam, Netherlands',
      transparencyScore: 95,
      certifications: ['B-Corp', '1% For The Planet'],
      workers: 19,
      avgWage: '2.6× local minimum wage',
    },
    endOfLife: {
      method: 'Recycle',
      instructions:
        'Recycle through our take-back program. 50% of proceeds fund ocean cleanup initiatives.',
      recyclable: true,
      compostable: false,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 10 },
      { phase: 'Manufacturing', grams: 12 },
      { phase: 'Shipping', grams: 10 },
      { phase: 'Packaging', grams: 6 },
    ],
  },
  {
    id: 'p032',
    name: 'Organic Cotton Underwear Set',
    brand: 'ComfyOrganic',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    category: 'Apparel',
    sustainabilityGrade: 'A',
    carbonGrams: 85,
    shortDesc:
      'Pack of 3 GOTS certified organic cotton basics. Breathable, durable, hypoallergenic.',
    materials: [
      { name: 'GOTS Organic Cotton', percentage: 98 },
      { name: 'Recycled Elastic', percentage: 2 },
    ],
    factory: {
      name: 'South India Cotton Mills',
      location: 'Coimbatore, India',
      transparencyScore: 86,
      certifications: ['GOTS', 'Fair Trade', 'SA8000'],
      workers: 145,
      avgWage: '2.2× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Donate',
      instructions:
        'Donate first! When worn out, 100% compostable in 4-5 months.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 28 },
      { phase: 'Manufacturing', grams: 25 },
      { phase: 'Shipping', grams: 18 },
      { phase: 'Packaging', grams: 14 },
    ],
  },
  {
    id: 'p033',
    name: 'Bamboo Hairbrush with Case',
    brand: 'GreenScalp',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1633878351657-d5188a7ce7b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Health & Hygiene',
    sustainabilityGrade: 'A',
    carbonGrams: 48,
    shortDesc:
      'Eco-friendly hairbrush with natural boar bristles and bamboo handle + travel case.',
    materials: [
      { name: 'FSC Bamboo Handle', percentage: 65 },
      { name: 'Natural Boar Bristles', percentage: 25 },
      { name: 'Recycled Cardboard Case', percentage: 10 },
    ],
    factory: {
      name: 'EcoBeauty Tools',
      location: 'Nanjing, China',
      transparencyScore: 78,
      certifications: ['FSC', 'ISO 14001'],
      workers: 67,
      avgWage: '1.8× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Bamboo handle composts in 2-3 years. Bristles recyclable. Cardboard case fully recyclable.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 10 },
      { phase: 'Manufacturing', grams: 16 },
      { phase: 'Shipping', grams: 14 },
      { phase: 'Packaging', grams: 8 },
    ],
  },
  {
    id: 'p034',
    name: 'Recycled Plastic Plant Pot',
    brand: 'GrowGreen',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
    category: 'Home & Garden',
    sustainabilityGrade: 'A',
    carbonGrams: 52,
    shortDesc:
      '8-inch biodegradable plant pot made from 100% recycled agricultural plastic.',
    materials: [
      { name: '100% Recycled Agricultural Plastic', percentage: 100 },
    ],
    factory: {
      name: 'AgricultureCycle Industries',
      location: 'Tamil Nadu, India',
      transparencyScore: 83,
      certifications: ['B-Corp', 'ISO 14001'],
      workers: 156,
      avgWage: '2.0× local minimum wage',
    },
    endOfLife: {
      method: 'Compost + Recycle',
      instructions:
        'Can be recycled multiple times or left in soil to slowly degrade (3-5 years). Safe for plants.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 12 },
      { phase: 'Manufacturing', grams: 18 },
      { phase: 'Shipping', grams: 15 },
      { phase: 'Packaging', grams: 7 },
    ],
  },
  {
    id: 'p035',
    name: 'Natural Beige Linen Curtains',
    brand: 'WindowsNature',
    price: 110,
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    category: 'Home',
    sustainabilityGrade: 'A',
    carbonGrams: 195,
    shortDesc:
      'Pair of premium linen curtains in natural beige. Block light, naturally wrinkled look.',
    materials: [{ name: 'EU Organic Linen', percentage: 100 }],
    factory: {
      name: 'Baltic Linen Weaving',
      location: 'Riga, Latvia',
      transparencyScore: 90,
      certifications: ['GOTS', 'EU Ecolabel'],
      workers: 73,
      avgWage: '2.2× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        '100% biodegradable. Compost in 8-10 months. No synthetic dyes or treatments.',
      recyclable: false,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 65 },
      { phase: 'Manufacturing', grams: 55 },
      { phase: 'Shipping', grams: 50 },
      { phase: 'Packaging', grams: 25 },
    ],
  },
  {
    id: 'p036',
    name: 'Cork & Rubber Desk Organizer',
    brand: 'DesktopEco',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1641247565151-fe622e1067d0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home Office',
    sustainabilityGrade: 'A',
    carbonGrams: 76,
    shortDesc:
      'Modular desk organizer made from sustainably harvested cork and natural rubber.',
    materials: [
      { name: 'FSC Cork', percentage: 70 },
      { name: 'Natural Rubber Base', percentage: 25 },
      { name: 'Recycled Wood Frame', percentage: 5 },
    ],
    factory: {
      name: 'ModularDesign Studio',
      location: 'Lisbon, Portugal',
      transparencyScore: 89,
      certifications: ['FSC', 'B-Corp'],
      workers: 22,
      avgWage: '2.4× local minimum wage',
    },
    endOfLife: {
      method: 'Compost',
      instructions:
        'Cork composts in 2-3 years. Rubber degrades in 4-5 years. Wood frame fully recyclable.',
      recyclable: true,
      compostable: true,
    },
    co2Breakdown: [
      { phase: 'Raw Material', grams: 18 },
      { phase: 'Manufacturing', grams: 22 },
      { phase: 'Shipping', grams: 20 },
      { phase: 'Packaging', grams: 16 },
    ],
  },
]

export const gradeColors = {
  A: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    border: 'border-emerald-300',
  },
  B: { bg: 'bg-lime-100', text: 'text-lime-800', border: 'border-lime-300' },
  C: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-300',
  },
  D: {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    border: 'border-orange-300',
  },
  E: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
}

export const shippingOptions = [
  {
    id: 'standard',
    label: 'Standard Shipping',
    subLabel: '5–7 business days',
    price: 0,
    carbonGrams: 420,
    icon: 'truck',
  },
  {
    id: 'carbon-neutral',
    label: 'Carbon Neutral Shipping',
    subLabel: '5–7 days · Plants a tree on delivery',
    price: 1,
    carbonGrams: 0,
    icon: 'leaf',
  },
]
