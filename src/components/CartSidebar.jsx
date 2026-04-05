import { motion } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, Wind } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { useCartStore } from "../store/cartStore";

const GRADE_COLORS = { A: "#6b8f71", B: "#8fbb70", C: "#d4c56a", D: "#d4956a", E: "#e05c5c" };

function CarbonTooltip({ active, payload }) {
  if (active && payload?.length) {
    return (
      <div className="bg-white px-3 py-2 rounded-lg border border-sage/20 shadow-md text-xs">
        <p className="font-semibold text-slate">{payload[0].payload.name}</p>
        <p className="text-terracotta">{payload[0].value}g CO₂</p>
      </div>
    );
  }
  return null;
}

export default function CartSidebar({ onClose, onCheckout }) {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  const totalPrice = useCartStore((s) => s.items.reduce((n, i) => n + i.price * i.qty, 0));
  const totalCarbon = useCartStore((s) => s.items.reduce((n, i) => n + i.carbonGrams * i.qty, 0));

  const chartData = items.map((i) => ({
    name: i.name.split(" ").slice(0, 2).join(" "),
    carbon: i.carbonGrams * i.qty,
    grade: i.sustainabilityGrade,
  }));

  return (
    <>
      <motion.div
        key="cart-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-slate/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.aside
        key="cart-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[420px] bg-cream shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage/15 bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-sage" />
            <h2 className="font-semibold text-slate">Your Cart</h2>
            {items.length > 0 && (
              <span className="px-2 py-0.5 bg-sage/10 text-sage text-xs font-bold rounded-full">
                {items.reduce((n, i) => n + i.qty, 0)} items
              </span>
            )}
          </div>
          <button onClick={onClose} aria-label="Close cart" className="p-2 rounded-full hover:bg-sage/10 transition-colors">
            <X className="w-4 h-4 text-slate" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-sage/50" />
              </div>
              <p className="font-semibold text-slate/70 mb-1">Your cart is empty</p>
              <p className="text-xs text-slate/40">Add some sustainable products to see your carbon impact here.</p>
              <button onClick={onClose} className="mt-4 text-sage text-sm underline">Browse products</button>
            </div>
          ) : (
            <div className="p-5 space-y-5">
              {/* Cart Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-3 p-3 bg-white rounded-xl border border-sage/15"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-sage font-semibold uppercase tracking-wide">{item.brand}</p>
                      <p className="text-sm font-medium text-slate truncate">{item.name}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Wind className="w-2.5 h-2.5 text-terracotta/70" />
                        <span className="text-[10px] text-terracotta/80">{item.carbonGrams * item.qty}g CO₂</span>
                      </div>
                      <div className="flex items-center justify-between mt-1.5">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                            className="w-6 h-6 rounded-full border border-sage/30 flex items-center justify-center hover:bg-sage/10 transition-colors"
                          >
                            <Minus className="w-3 h-3 text-slate" />
                          </button>
                          <span className="text-sm font-semibold text-slate w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                            className="w-6 h-6 rounded-full border border-sage/30 flex items-center justify-center hover:bg-sage/10 transition-colors"
                          >
                            <Plus className="w-3 h-3 text-slate" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate">${item.price * item.qty}</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="p-1 rounded hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-slate/40 hover:text-red-400 transition-colors" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Carbon Calculator */}
              <div className="bg-white rounded-xl border border-sage/15 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Wind className="w-4 h-4 text-terracotta" />
                  <h3 className="text-xs font-bold text-slate uppercase tracking-widest">Carbon Calculator</h3>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate/50 mb-0.5">Total Carbon Debt</p>
                    <motion.p
                      key={totalCarbon}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold text-terracotta"
                    >
                      {totalCarbon}g
                    </motion.p>
                    <p className="text-[10px] text-slate/40">CO₂ equivalent</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate/50 mb-0.5">Offset equivalent</p>
                    <p className="text-sm font-semibold text-sage">{Math.ceil(totalCarbon / 21000)} tree(s)</p>
                    <p className="text-[10px] text-slate/40">planted to neutralise</p>
                  </div>
                </div>

                {chartData.length > 0 && (
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart data={chartData} margin={{ top: 4, right: 0, left: -30, bottom: 0 }}>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 9, fill: "#64748b" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CarbonTooltip />} />
                      <Bar dataKey="carbon" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, i) => (
                          <Cell
                            key={i}
                            fill={GRADE_COLORS[entry.grade] || "#6b8f71"}
                            fillOpacity={0.8}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}

                <p className="text-[10px] text-slate/40 mt-2 text-center">
                  Bar color reflects each product's sustainability grade
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sage/15 bg-white px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate/60">Subtotal</span>
              <span className="font-bold text-slate">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-sage text-cream font-semibold rounded-xl hover:bg-sage/90 active:scale-[0.98] transition-all duration-150"
              aria-label="Proceed to checkout"
            >
              Proceed to Eco-Checkout
            </button>
            <p className="text-center text-[10px] text-slate/40">
              Free returns · Verified sustainable · Carbon tracked
            </p>
          </div>
        )}
      </motion.aside>
    </>
  );
}
