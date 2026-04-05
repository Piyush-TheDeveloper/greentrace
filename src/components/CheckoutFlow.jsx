import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, Leaf, CheckCircle, Wind, CreditCard, Lock } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { shippingOptions } from "../data/mockData";

function ConfettiCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#6b8f71", "#d4956a", "#f0e6d3", "#3d4f4a", "#a8c5a0", "#e8956a"];
    const particles = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: -20,
      r: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4 + 2,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 6,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));

    let frame;
    let active = true;

    function draw() {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - p.y / canvas.height);
        if (p.shape === "rect") {
          ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotV;
        p.vy += 0.05;
      });
      frame = requestAnimationFrame(draw);
    }

    draw();
    return () => { active = false; cancelAnimationFrame(frame); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      aria-hidden="true"
    />
  );
}

const STEPS = ["Details", "Shipping", "Payment", "Confirm"];

export default function CheckoutFlow({ onClose }) {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState("standard");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalPrice = useCartStore((s) => s.items.reduce((n, i) => n + i.price * i.qty, 0));
  const totalCarbon = useCartStore((s) => s.items.reduce((n, i) => n + i.carbonGrams * i.qty, 0));

  const selectedShipping = shippingOptions.find((o) => o.id === shipping);
  const finalPrice = totalPrice + selectedShipping.price;
  const finalCarbon = shipping === "carbon-neutral" ? 0 : totalCarbon + selectedShipping.carbonGrams;

  const handleOrder = async () => {
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1800));
    setProcessing(false);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <>
        <ConfettiCanvas />
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate/50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
            role="dialog"
            aria-label="Order success"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-5"
            >
              <CheckCircle className="w-10 h-10 text-sage" />
            </motion.div>

            <h2 className="text-2xl font-bold text-slate mb-2">Order Confirmed!</h2>
            <p className="text-slate/60 text-sm mb-6">
              Thank you for choosing sustainability. Your order is on its way.
            </p>

            <div className="bg-sage/8 rounded-2xl p-4 mb-6 space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-slate/60">Order total</span>
                <span className="font-bold text-slate">${finalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate/60">Shipping</span>
                <span className="font-medium text-slate">{selectedShipping.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate/60">Carbon impact</span>
                <span className={`font-semibold ${finalCarbon === 0 ? "text-sage" : "text-terracotta"}`}>
                  {finalCarbon === 0 ? "Carbon Neutral ✓" : `${finalCarbon}g CO₂`}
                </span>
              </div>
              {shipping === "carbon-neutral" && (
                <div className="flex items-center gap-2 pt-1">
                  <Leaf className="w-3.5 h-3.5 text-sage" />
                  <span className="text-xs text-sage font-medium">A tree will be planted in your name</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-sage text-cream font-semibold rounded-xl hover:bg-sage/90 transition-colors"
            >
              Continue Shopping
            </button>
            <p className="text-[10px] text-slate/40 mt-3">
              Order ID: GT-{Date.now().toString(36).toUpperCase()}
            </p>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate/40 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-cream w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Checkout"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-sage/15">
          <div>
            <h2 className="font-bold text-slate">Eco-Checkout</h2>
            <p className="text-xs text-slate/50">Step {step + 1} of {STEPS.length}: {STEPS[step]}</p>
          </div>
          <button onClick={onClose} aria-label="Close checkout" className="p-2 rounded-full hover:bg-sage/10 transition-colors">
            <X className="w-4 h-4 text-slate" />
          </button>
        </div>

        {/* Progress */}
        <div className="flex px-6 pt-4 gap-1.5">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-sage" : "bg-sage/15"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-semibold text-slate mb-4">Your Details</h3>
                <div className="space-y-3">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { key: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
                    { key: "address", label: "Delivery Address", type: "text", placeholder: "123 Green Lane, Eco City" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label htmlFor={key} className="text-xs font-semibold text-slate/60 uppercase tracking-wider block mb-1.5">
                        {label}
                      </label>
                      <input
                        id={key}
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate placeholder:text-slate/30 focus:outline-none focus:border-sage/60 focus:ring-2 focus:ring-sage/10 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-semibold text-slate mb-4">Choose Shipping</h3>
                <div className="space-y-3">
                  {shippingOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setShipping(opt.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        shipping === opt.id
                          ? "border-sage bg-sage/8"
                          : "border-sage/15 bg-white hover:border-sage/40"
                      }`}
                      aria-pressed={shipping === opt.id}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${opt.id === "carbon-neutral" ? "bg-sage/20" : "bg-slate/10"}`}>
                            {opt.id === "carbon-neutral"
                              ? <Leaf className="w-4 h-4 text-sage" />
                              : <Truck className="w-4 h-4 text-slate/60" />}
                          </div>
                          <div>
                            <p className="font-semibold text-slate text-sm">{opt.label}</p>
                            <p className="text-xs text-slate/50">{opt.subLabel}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-3">
                          <p className="font-bold text-slate text-sm">
                            {opt.price === 0 ? "Free" : `+$${opt.price}`}
                          </p>
                          <div className="flex items-center gap-1 justify-end mt-0.5">
                            <Wind className="w-2.5 h-2.5 text-terracotta/60" />
                            <p className="text-[10px] text-terracotta/80">
                              {opt.carbonGrams === 0 ? "0g (offset)" : `+${opt.carbonGrams}g CO₂`}
                            </p>
                          </div>
                        </div>
                      </div>
                      {opt.id === "carbon-neutral" && (
                        <p className="mt-2 text-xs text-sage/80 pl-12">
                          $1 goes directly to verified reforestation projects via One Tree Planted.
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-semibold text-slate mb-4">Payment</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate/60 uppercase tracking-wider block mb-1.5">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      maxLength={19}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate placeholder:text-slate/30 focus:outline-none focus:border-sage/60 focus:ring-2 focus:ring-sage/10 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate/60 uppercase tracking-wider block mb-1.5">Expiry</label>
                      <input type="text" placeholder="MM / YY" className="w-full px-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate placeholder:text-slate/30 focus:outline-none focus:border-sage/60 focus:ring-2 focus:ring-sage/10 transition-all" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate/60 uppercase tracking-wider block mb-1.5">CVV</label>
                      <input type="text" placeholder="···" className="w-full px-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate placeholder:text-slate/30 focus:outline-none focus:border-sage/60 focus:ring-2 focus:ring-sage/10 transition-all" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-sage/8 border border-sage/15">
                    <Lock className="w-3.5 h-3.5 text-sage shrink-0" />
                    <p className="text-xs text-sage">This is a mock checkout — no real payment processed. Your data is never stored.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-semibold text-slate mb-4">Order Summary</h3>
                <div className="space-y-2 mb-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-sage/10">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate truncate">{item.name}</p>
                        <p className="text-xs text-slate/50">Qty {item.qty}</p>
                      </div>
                      <span className="font-bold text-slate text-sm">${item.price * item.qty}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-sage/15 p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate/60">Subtotal</span>
                    <span className="font-medium text-slate">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate/60">{selectedShipping.label}</span>
                    <span className="font-medium text-slate">{selectedShipping.price === 0 ? "Free" : `$${selectedShipping.price}`}</span>
                  </div>
                  <div className="border-t border-sage/10 pt-2 flex justify-between">
                    <span className="font-bold text-slate">Total</span>
                    <span className="font-bold text-slate text-lg">${finalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1">
                    <div className="flex items-center gap-1">
                      <Wind className="w-3 h-3 text-terracotta/70" />
                      <span className="text-slate/50">Carbon impact</span>
                    </div>
                    <span className={`font-semibold ${finalCarbon === 0 ? "text-sage" : "text-terracotta"}`}>
                      {finalCarbon === 0 ? "🌱 Carbon Neutral" : `${finalCarbon}g CO₂`}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-sage/15 bg-white flex gap-3">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-3 rounded-xl border border-sage/30 text-slate text-sm font-semibold hover:bg-sage/5 transition-colors"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex-1 py-3 bg-sage text-cream rounded-xl text-sm font-semibold hover:bg-sage/90 active:scale-[0.98] transition-all"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleOrder}
              disabled={processing}
              className="flex-1 py-3 bg-sage text-cream rounded-xl text-sm font-semibold hover:bg-sage/90 active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              aria-label="Place order"
            >
              {processing ? (
                <>
                  <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Place Order · ${finalPrice.toFixed(2)}
                </>
              )}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
