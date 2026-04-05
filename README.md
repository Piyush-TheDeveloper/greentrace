# 🌿 Green-Trace

> **Sustainable commerce, fully transparent.** A Digital Product Passport platform that gives every product a verifiable environmental identity.

---

## The Problem We Solve

The modern consumer is drowning in greenwashing. "Eco-friendly," "sustainable," "green" — these words appear on millions of products with zero accountability behind them. Meanwhile, the supply chain responsible for 80% of global carbon emissions remains completely invisible to the buyer.

**Green-Trace changes the equation.** Every product on our platform carries a cryptographically verifiable **Digital Product Passport** — a complete lifecycle record covering raw materials, factory conditions, CO₂ emissions, and end-of-life instructions. We don't just sell products; we sell *provenance*.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🪪 **Digital Product Passport** | Full material breakdown, factory origin, transparency score, and certifications per product |
| 🧮 **Real-Time Carbon Calculator** | Live Recharts visualization of order CO₂ debt as items are added to cart |
| 🌱 **Eco-Checkout** | Carbon-neutral shipping option ($1 → verified tree planting via One Tree Planted) |
| 🎉 **Confetti Success State** | Canvas-based confetti animation on order completion |
| 🔍 **Smart Filters** | Filter by category, sustainability grade (A–E), sort by carbon / price |
| 💀 **Skeleton Loaders** | Simulated async data fetching with animated placeholder UI |
| ♿ **Full Accessibility** | ARIA labels, keyboard navigation, semantic HTML throughout |

---

## 🛠 Tech Stack

```
Frontend Framework    React 18 + Vite 5
Styling               Tailwind CSS 3 (custom earth-tone design tokens)
UI Components         Shadcn UI patterns (Dialog, Drawer)
Animations            Framer Motion 11 (spring physics, page transitions)
Charts                Recharts 2 (BarChart with grade-color Cells)
State Management      Zustand 4 (Cart + Carbon Calculator store)
Icons                 Lucide-React 0.383
Fonts                 DM Sans (Google Fonts — elegant, geometric)
Build Tool            Vite 5 (HMR, tree-shaking, ES modules)
```

---

## 🗂 Project Structure

```
green-trace/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with live carbon badge
│   │   ├── ProductGallery.jsx   # Grid with search, filter, sort
│   │   ├── ProductCard.jsx      # Grade badge, carbon badge, add-to-cart
│   │   ├── ProductSkeleton.jsx  # Animated loading placeholder
│   │   ├── ProductPassport.jsx  # Full-screen drawer with lifecycle data
│   │   ├── CartSidebar.jsx      # Slide-in cart + Recharts carbon viz
│   │   └── CheckoutFlow.jsx     # 4-step checkout + confetti success
│   ├── store/
│   │   └── cartStore.js         # Zustand store (items, carbon, price)
│   ├── data/
│   │   └── mockData.js          # 8 products with full passport data
│   ├── App.jsx                  # Root layout + AnimatePresence orchestration
│   ├── main.jsx                 # React DOM entry
│   └── index.css                # Tailwind + DM Sans + scrollbar styles
├── tailwind.config.js           # Custom color tokens (sage, cream, terracotta)
├── vite.config.js
├── postcss.config.js
├── package.json
└── index.html
```

---

## 🏗 System Architecture

```
graph TB
    subgraph UI ["UI Layer (React)"]
        A[Navbar] --> B[ProductGallery]
        B --> C[ProductCard]
        C -->|click| D[ProductPassport Drawer]
        C -->|add| E[CartSidebar]
        E -->|checkout| F[CheckoutFlow]
        F -->|success| G[Confetti + Success State]
    end

    subgraph STATE ["State Layer (Zustand)"]
        H[cartStore]
        H --> |items, qty| E
        H --> |totalCarbon| A
        H --> |totalPrice| F
    end

    subgraph DATA ["Data Layer (Mock API)"]
        I[mockData.js]
        I -->|products[]| B
        I -->|shippingOptions[]| F
    end

    subgraph VISUAL ["Visualization Layer"]
        J[Recharts BarChart] --> E
        K[Framer Motion] --> D
        K --> E
        K --> F
    end

    C -->|addItem| H
    D -->|addItem| H
    F -->|clearCart| H
```

```
Request Lifecycle (simplified):

 User visits /
      │
      ▼
 App.jsx mounts
      │
      ├─ 1.4s Skeleton loader (simulates API fetch)
      │
      ▼
 ProductGallery renders products from mockData.js
      │
      ├─ Click card ────────► ProductPassport opens (Framer spring drawer)
      │                            └─ "Add to Cart" → cartStore.addItem()
      │
      ├─ Cart icon ─────────► CartSidebar opens
      │                            ├─ Recharts BarChart (live CO₂ per item)
      │                            └─ "Checkout" → CheckoutFlow mounts
      │
      └─ CheckoutFlow ──────► Step 1: Details
                               Step 2: Shipping (Standard vs Carbon Neutral)
                               Step 3: Payment (mock)
                               Step 4: Confirm
                               └─ "Place Order" → cartStore.clearCart()
                                                   + ConfettiCanvas renders
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/green-trace.git
cd green-trace

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `sage` | `#6b8f71` | Primary actions, badges, accents |
| `cream` | `#f5f0e8` | Page background, surfaces |
| `slate` | `#3d4f4a` | Body text, headings |
| `terracotta` | `#c4704a` | Carbon indicators, warnings |

### Sustainability Grade System

| Grade | Meaning | Color |
|-------|---------|-------|
| **A** | Best-in-class, verified carbon-negative or minimal | Emerald |
| **B** | Above industry average, certified materials | Lime |
| **C** | Industry average, some certified components | Yellow |
| **D** | Below average, limited transparency | Orange |
| **E** | Minimum threshold for platform listing | Red |

---

## 🗺 Roadmap

### Phase 2 — AI-Driven Sourcing
- [ ] Integrate Claude API to analyze product descriptions and auto-score sustainability claims
- [ ] AI-powered supplier matching based on carbon budget and material preferences
- [ ] Natural language search: *"Show me vegan, carbon-neutral home products under $50"*

### Phase 3 — Blockchain Verification
- [ ] Deploy Digital Product Passports as NFT certificates on Polygon (low-energy PoS)
- [ ] Immutable audit trail: every factory inspection, certification renewal, and material change logged on-chain
- [ ] Consumer-scannable QR codes linking physical products to their on-chain passport

### Phase 4 — Supply Chain Intelligence
- [ ] Real-time satellite tracking of shipping routes with live CO₂ recalculation
- [ ] Supplier risk scoring using ESG data APIs (Sustainalytics, CDP)
- [ ] Carbon offset marketplace integrated directly into checkout

### Phase 5 — Circular Economy Loop
- [ ] Product take-back program management (schedule pickups, track returns)
- [ ] Resale marketplace with passport inheritance (used product = verified history)
- [ ] Compost/recycle facility locator using geolocation

---

## 📊 Product Data Schema

```javascript
// mockData.js — Product shape
{
  id: string,
  name: string,
  brand: string,
  price: number,
  image: string (URL),
  category: string,
  sustainabilityGrade: "A" | "B" | "C" | "D" | "E",
  carbonGrams: number,          // Total lifecycle CO₂ in grams
  materials: [
    { name: string, percentage: number }
  ],
  factory: {
    name: string,
    location: string,
    transparencyScore: number,  // 0–100
    certifications: string[],
    workers: number,
    avgWage: string,
  },
  endOfLife: {
    method: string,
    instructions: string,
    recyclable: boolean,
    compostable: boolean,
  },
  co2Breakdown: [
    { phase: "Raw Material" | "Manufacturing" | "Shipping" | "Packaging",
      grams: number }
  ]
}
```

---

## 🤝 Contributing

This is a college final project, but contributions and feedback are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/blockchain-passport`
3. Commit changes: `git commit -m "feat: add NFT passport minting"`
4. Push and open a Pull Request

---

## 📄 License

MIT — free to use, modify, and distribute. Attribution appreciated.

---

## 🙏 Acknowledgements

- Product photography via [Unsplash](https://unsplash.com)
- Sustainability grading methodology inspired by [Eco-Score](https://eco-score.org)
- Carbon offset model inspired by [One Tree Planted](https://onetreeplanted.org)

---

<div align="center">
  <strong>Built with 🌿 for a greener internet</strong><br/>
  <sub>Green-Trace · Project · 2026</sub>
</div>
