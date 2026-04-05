import { motion } from "framer-motion";
import {
  X, MapPin, Award, Recycle, Leaf, Wind, Factory,
  CheckCircle, AlertCircle, Shield
} from "lucide-react";
import { gradeColors } from "../data/mockData";
import { useCartStore } from "../store/cartStore";

function ScoreRing({ score }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 85 ? "#6b8f71" : score >= 65 ? "#d4956a" : "#e05c5c";

  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-label={`Transparency score ${score} out of 100`}>
      <circle cx="36" cy="36" r={r} fill="none" stroke="#e5e7eb" strokeWidth="6" />
      <circle
        cx="36" cy="36" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
      <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
        {score}
      </text>
    </svg>
  );
}

function MaterialBar({ material }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-slate">{material.name}</span>
        <span className="text-xs font-bold text-sage">{material.percentage}%</span>
      </div>
      <div className="h-2 bg-sage/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${material.percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-sage/70 to-sage"
        />
      </div>
    </div>
  );
}

export default function ProductPassport({ product, onClose }) {
  const addItem = useCartStore((s) => s.addItem);
  const grade = gradeColors[product.sustainabilityGrade];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-slate/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <motion.div
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`Product passport for ${product.name}`}
      >
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate/70 via-transparent to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close product passport"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-4 left-4">
            <p className="text-cream/80 text-xs font-medium">{product.brand}</p>
            <h2 className="text-white font-bold text-xl leading-tight">{product.name}</h2>
          </div>
          <div className={`absolute bottom-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold border ${grade.bg} ${grade.text} ${grade.border}`}>
            Grade {product.sustainabilityGrade}
          </div>
        </div>

        {/* Passport Header */}
        <div className="px-5 py-4 bg-white border-b border-sage/15 flex items-center gap-2">
          <Shield className="w-4 h-4 text-sage" />
          <span className="text-xs font-bold text-slate uppercase tracking-widest">Digital Product Passport</span>
        </div>

        <div className="px-5 py-5 space-y-6">
          {/* Carbon summary */}
          <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-sage/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <Wind className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <p className="text-xs text-slate/50 font-medium">Total Carbon Footprint</p>
                <p className="text-2xl font-bold text-slate">{product.carbonGrams}g <span className="text-sm font-normal text-slate/60">CO₂e</span></p>
              </div>
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${grade.bg} ${grade.text} border ${grade.border}`}>
              {product.sustainabilityGrade === "A" ? "Best in class" :
               product.sustainabilityGrade === "B" ? "Above average" : "Average"}
            </div>
          </div>

          {/* CO2 breakdown mini bars */}
          <div>
            <h3 className="text-xs font-bold text-slate/50 uppercase tracking-widest mb-3">Carbon Breakdown</h3>
            <div className="space-y-2">
              {product.co2Breakdown.map((item) => {
                const pct = Math.round((item.grams / product.carbonGrams) * 100);
                return (
                  <div key={item.phase} className="flex items-center gap-3">
                    <span className="text-xs text-slate/60 w-28 shrink-0">{item.phase}</span>
                    <div className="flex-1 h-1.5 bg-terracotta/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-full bg-terracotta/60"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate w-10 text-right">{item.grams}g</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-xs font-bold text-slate/50 uppercase tracking-widest mb-3">Material Composition</h3>
            <div className="bg-white rounded-xl border border-sage/15 p-4">
              {product.materials.map((m) => (
                <MaterialBar key={m.name} material={m} />
              ))}
            </div>
          </div>

          {/* Factory */}
          <div>
            <h3 className="text-xs font-bold text-slate/50 uppercase tracking-widest mb-3">Factory & Origin</h3>
            <div className="bg-white rounded-xl border border-sage/15 p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Factory className="w-3.5 h-3.5 text-sage" />
                    <p className="font-semibold text-slate text-sm">{product.factory.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate/40" />
                    <p className="text-xs text-slate/60">{product.factory.location}</p>
                  </div>
                </div>
                <ScoreRing score={product.factory.transparencyScore} />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-sage/5">
                  <p className="text-slate/50 mb-0.5">Workers</p>
                  <p className="font-semibold text-slate">{product.factory.workers} employees</p>
                </div>
                <div className="p-2.5 rounded-lg bg-sage/5">
                  <p className="text-slate/50 mb-0.5">Avg. Wage</p>
                  <p className="font-semibold text-slate">{product.factory.avgWage}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate/50 mb-2 font-medium">Certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.factory.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-semibold"
                    >
                      <Award className="w-2.5 h-2.5" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* End of Life */}
          <div>
            <h3 className="text-xs font-bold text-slate/50 uppercase tracking-widest mb-3">End-of-Life</h3>
            <div className="bg-white rounded-xl border border-sage/15 p-4">
              <div className="flex items-center gap-2 mb-3">
                {product.endOfLife.compostable ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    <Leaf className="w-3 h-3 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">Compostable</span>
                  </div>
                ) : null}
                {product.endOfLife.recyclable ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                    <Recycle className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700">Recyclable</span>
                  </div>
                ) : null}
                {!product.endOfLife.compostable && !product.endOfLife.recyclable && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200">
                    <AlertCircle className="w-3 h-3 text-orange-600" />
                    <span className="text-xs font-semibold text-orange-700">Rehome / Donate</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-slate/70 leading-relaxed">{product.endOfLife.instructions}</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { addItem(product); onClose(); }}
            aria-label={`Add ${product.name} to cart`}
            className="w-full py-3.5 bg-sage text-cream font-semibold rounded-xl hover:bg-sage/90 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Add to Cart — ${product.price}
          </button>

          <p className="text-center text-[10px] text-slate/40 pb-4">
            Passport ID: GT-{product.id.toUpperCase()} · Verified by Green-Trace Protocol v2.1
          </p>
        </div>
      </motion.div>
    </>
  );
}
