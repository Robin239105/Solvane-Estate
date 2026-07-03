import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import { cartDrawerVariants } from "../../lib/motion";
import Button from "../ui/Button";

export const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem } =
    useCartStore();

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-[#201A18] z-[100] cursor-pointer"
          />

          {/* Drawer panel */}
          <motion.div
            variants={cartDrawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-[#FBF8F3] text-[#201A18] z-[101] shadow-2xl flex flex-col justify-between animate-fade-in"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#722F37]/10">
              <div className="flex items-baseline gap-2">
                <h3 className="font-sans text-2xl font-semibold text-[#722F37]">
                  Your Allocation
                </h3>
                {items.length > 0 && (
                  <span className="font-sans text-xs text-[#5C5450]">
                    ({items.reduce((sum, i) => sum + i.quantity, 0)} items)
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-1 hover:text-[#722F37] text-[#5C5450] transition-colors focus:outline-none"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content items list */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <span className="text-4xl">🍷</span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-sans text-lg font-medium text-[#722F37]">
                      Your cellar is currently empty
                    </h4>
                    <p className="font-sans text-xs text-[#5C5450] max-w-[250px] leading-relaxed">
                      Explore our handcrafted collections and begin your custom
                      cellar allocation.
                    </p>
                  </div>
                  <Button
                    variant="outline-dark"
                    to="/shop"
                    onClick={closeCart}
                    className="mt-2 !py-2.5 !px-6 !text-[10px]"
                  >
                    Explore Shop
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-5 text-left">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 border-b border-[#722F37]/5 pb-5"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-24 bg-[#F6EFE2] rounded-xs overflow-hidden border border-[#722F37]/5 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col">
                          <span className="font-sans text-[10px] tracking-widest text-[#722F37] font-semibold uppercase">
                            Vintage {item.vintage}
                          </span>
                          <h4 className="font-sans text-sm font-semibold text-[#722F37] line-clamp-1">
                            {item.name}
                          </h4>
                          <span className="font-sans font-medium text-xs mt-1 text-[#201A18]">
                            ${item.price} each
                          </span>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border border-[#722F37]/15 rounded-xs bg-[#FBF8F3]">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1.5 hover:text-[#722F37] text-[#5C5450] transition-colors focus:outline-none"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 font-sans text-xs font-semibold text-[#201A18] select-none">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1.5 hover:text-[#722F37] text-[#5C5450] transition-colors focus:outline-none"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:text-red-700 text-[#5C5450] transition-colors focus:outline-none"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary & Action */}
            {items.length > 0 && (
              <div className="border-t border-[#722F37]/10 p-6 bg-[#F6EFE2] flex flex-col gap-4">
                <div className="flex justify-between items-baseline font-sans">
                  <span className="text-xs uppercase tracking-widest text-[#5C5450] font-medium">
                    Estimated Subtotal
                  </span>
                  <span className="font-sans text-2xl font-semibold text-[#722F37]">
                    ${cartTotal}
                  </span>
                </div>

                <p className="font-sans text-[10px] text-[#5C5450] leading-normal text-left">
                  Shipping, taxes, and adult signature delivery fees are
                  calculated at checkout. You must be 21+ to sign for package.
                </p>

                <div className="flex flex-col gap-2 mt-1">
                  <Button
                    variant="solid-cabernet"
                    to="/checkout"
                    onClick={closeCart}
                    className="w-full text-center py-4"
                  >
                    Proceed to Checkout
                  </Button>
                  <button
                    onClick={closeCart}
                    className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#722F37] hover:text-[#521D23] text-center py-1 mt-1 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
