import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Check,
  ShieldCheck,
  CreditCard,
  Truck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import { clubTiers } from "../data/clubTiers";
import { pageVariants } from "../lib/motion";
import Button from "../components/ui/Button";

// Multi-step validation schemas
const shippingSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  address: z.string().min(5, "Required"),
  city: z.string().min(2, "Required"),
  state: z.string().length(2, "Use 2-letter code (e.g. CA)"),
  zip: z.string().min(5, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
});

const billingSchema = z.object({
  cardName: z.string().min(4, "Required"),
  cardNumber: z.string().min(16, "Card number must be 16 digits").max(16),
  expiry: z.string().min(5, "Use MM/YY format"),
  cvv: z.string().min(3, "3 digits").max(4),
});

export const Checkout = () => {
  const [step, setStep] = useState(1); // 1 = Shipping, 2 = Age Gate, 3 = Payment, 4 = Success
  const [shippingData, setShippingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successRef, setSuccessRef] = useState("");

  const { items, clubSelection, clearCart, selectClub } = useCartStore();
  const selectedClubTier = clubTiers.find((t) => t.id === clubSelection);

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shippingFee = cartTotal > 150 ? 0 : 25; // free over $150
  const tax = Math.round(cartTotal * 0.0825); // 8.25% CA tax
  const orderTotal = cartTotal + (selectedClubTier ? 0 : shippingFee + tax);

  const shippingForm = useForm({
    resolver: zodResolver(shippingSchema),
  });

  const billingForm = useForm({
    resolver: zodResolver(billingSchema),
  });

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setStep(2); // Go to Age Verification
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Go to Payment
  };

  const handlePaymentSubmit = (data) => {
    if (!data) return;
    setLoading(true);

    // Simulate payment transaction
    setTimeout(() => {
      setLoading(false);
      const ref = `SVN-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setSuccessRef(ref);
      setStep(4); // Success screen
      clearCart(); // Clear cart after order is confirmed
      selectClub(null); // Clear active club signups
    }, 1500);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left pt-24 pb-20 px-6 bg-[#FBF8F3] min-h-screen"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Wizard Forms */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="flex justify-between items-center mb-10 border-b border-[#722F37]/10 pb-6 text-[9px] tracking-widest font-sans uppercase font-bold text-[#5C5450] select-none">
              <span className={step === 1 ? "text-[#722F37]" : ""}>
                1. Shipping
              </span>
              <span className="text-[#722F37]/25">&bull;</span>
              <span className={step === 2 ? "text-[#722F37]" : ""}>
                2. Age Sign-Off
              </span>
              <span className="text-[#722F37]/25">&bull;</span>
              <span className={step === 3 ? "text-[#722F37]" : ""}>
                3. Payment
              </span>
            </div>
          )}

          {/* STEP 1: SHIPPING DETAILS */}
          {step === 1 && (
            <div className="bg-[#F6EFE2]/45 border border-[#722F37]/5 p-8 rounded-xs text-left">
              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#722F37]" /> Delivery
                Coordinates
              </h3>

              <form
                onSubmit={shippingForm.handleSubmit(handleShippingSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Marcus"
                      {...shippingForm.register("firstName")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.firstName && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Vance"
                      {...shippingForm.register("lastName")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.lastName && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="4500 Solvane Way"
                    {...shippingForm.register("address")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {shippingForm.formState.errors.address && (
                    <span className="text-red-700 font-sans text-[10px]">
                      {shippingForm.formState.errors.address.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Rutherford"
                      {...shippingForm.register("city")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.city && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.city.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="CA"
                      maxLength={2}
                      {...shippingForm.register("state")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] uppercase"
                    />

                    {shippingForm.formState.errors.state && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.state.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="94573"
                      {...shippingForm.register("zip")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.zip && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.zip.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="marcus@solvaneestate.com"
                      {...shippingForm.register("email")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.email && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(707) 555-0190"
                      {...shippingForm.register("phone")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {shippingForm.formState.errors.phone && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {shippingForm.formState.errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="solid-cabernet"
                  className="mt-4 flex justify-center items-center gap-2"
                >
                  Verify Age Credentials <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          )}

          {/* STEP 2: AGE SIGN-OFF */}
          {step === 2 && (
            <div className="bg-[#F6EFE2]/45 border border-[#722F37]/5 p-8 rounded-xs text-left">
              <Button
                variant="text-dark"
                onClick={() => setStep(1)}
                className="!px-0 !py-1 !text-[10px] mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
              </Button>

              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#722F37]" /> Age
                Attestation
              </h3>
              <p className="font-sans text-xs text-[#5C5450] leading-relaxed mb-6">
                Federal and state laws require that all alcoholic beverages be
                shipped to an address where an adult (21 years of age or older)
                is present to sign for the package upon delivery. We cannot ship
                to P.O. Boxes.
              </p>

              <form onSubmit={handleAgeSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-[#722F37]/25 accent-[#722F37] rounded-xs mt-0.5 shrink-0"
                      required
                    />

                    <span className="font-sans text-xs text-[#5C5450] leading-relaxed">
                      I certify that I am at least 21 years of age, and that the
                      shipping address listed in Step 1 is an address where an
                      adult will be available during business hours to sign for
                      and receive wine deliveries.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="solid-cabernet"
                  className="mt-4 flex justify-center items-center gap-2"
                >
                  Proceed to Payment <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          )}

          {/* STEP 3: PAYMENT DETAILS */}
          {step === 3 && (
            <div className="bg-[#F6EFE2]/45 border border-[#722F37]/5 p-8 rounded-xs text-left">
              <Button
                variant="text-dark"
                onClick={() => setStep(2)}
                className="!px-0 !py-1 !text-[10px] mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
              </Button>

              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#722F37]" /> Vault
                Settlement
              </h3>

              <form
                onSubmit={billingForm.handleSubmit(handlePaymentSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus Vance"
                    {...billingForm.register("cardName")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {billingForm.formState.errors.cardName && (
                    <span className="text-red-700 font-sans text-[10px]">
                      {billingForm.formState.errors.cardName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4111222233334444"
                    maxLength={16}
                    {...billingForm.register("cardNumber")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {billingForm.formState.errors.cardNumber && (
                    <span className="text-red-700 font-sans text-[10px]">
                      {billingForm.formState.errors.cardNumber.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      {...billingForm.register("expiry")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {billingForm.formState.errors.expiry && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {billingForm.formState.errors.expiry.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] tracking-wider font-bold uppercase text-[#5C5450]">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={4}
                      {...billingForm.register("cvv")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                    />

                    {billingForm.formState.errors.cvv && (
                      <span className="text-red-700 font-sans text-[10px]">
                        {billingForm.formState.errors.cvv.message}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="solid-cabernet"
                  disabled={loading}
                  className="mt-4 flex justify-center items-center gap-2"
                >
                  {loading
                    ? "Processing Ledger..."
                    : `Authorize Settlement — $${orderTotal}`}
                </Button>
              </form>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="bg-white border border-[#722F37] p-8 md:p-10 rounded-xs text-center flex flex-col items-center gap-6 shadow-xl animate-fade-in text-left">
              <div className="w-16 h-16 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-[#722F37]" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-sans text-[10px] tracking-widest text-[#722F37] font-bold uppercase">
                  Settlement Confirmed
                </span>
                <h3 className="font-sans text-3xl font-semibold text-[#722F37]">
                  Cellar Allocation Booked
                </h3>
              </div>

              <div className="w-12 h-[1px] bg-[#722F37] my-2" />

              <div className="w-full bg-[#F6EFE2]/45 rounded-xs p-6 border border-[#722F37]/5 flex flex-col gap-3 font-sans text-xs text-[#5C5450] text-left">
                <div className="flex justify-between font-semibold">
                  <span className="text-[#722F37]">Receipt Reference:</span>
                  <span className="text-[#201A18] tracking-wider">
                    {successRef}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#722F37]/5 pt-3">
                  <span>Ship To:</span>
                  <span className="text-[#201A18] text-right font-medium">
                    {shippingData?.firstName} {shippingData?.lastName}
                    <br />
                    {shippingData?.address}, {shippingData?.city}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="text-[#201A18]">
                    Adult Signature Delivery (FedEx Climate-Controlled)
                  </span>
                </div>
              </div>

              <p className="font-sans text-[11px] leading-relaxed text-[#5C5450] max-w-md">
                Your wine allocation will ship in climate-controlled lockers to
                ensure juice integrity. A tracking link will be sent when the
                carrier registers the adult signature request.
              </p>

              <div className="flex gap-4 w-full max-w-xs mt-2 justify-center">
                <Button variant="solid-cabernet" to="/shop" className="flex-1">
                  Continue Shopping
                </Button>
                <Button variant="outline-dark" to="/" className="flex-1">
                  Home
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#F6EFE2] p-6 border border-[#722F37]/5 rounded-xs text-left">
            <h3 className="font-sans text-lg font-bold text-[#722F37] mb-4 pb-2 border-b border-[#722F37]/10">
              Allocation Summary
            </h3>

            {/* If signing up for Wine Club */}
            {selectedClubTier && (
              <div className="mb-6 p-4 bg-white border border-[#722F37] rounded-xs flex flex-col text-left gap-1">
                <span className="font-sans text-[9px] uppercase tracking-wider text-[#722F37] font-semibold">
                  Pending Registry Membership
                </span>
                <span className="font-sans text-base font-bold text-[#722F37]">
                  {selectedClubTier.name}
                </span>
                <span className="font-sans text-xs text-[#201A18] mt-1.5 font-semibold">
                  {selectedClubTier.price} / {selectedClubTier.frequency}
                </span>
                <span className="font-sans text-[10px] text-[#5C5450] mt-1 leading-normal">
                  Your first {selectedClubTier.bottles}-bottle shipment will be
                  billed and processed on the upcoming quarterly schedule (
                  {selectedClubTier.shippingSchedule.split(",")[0]}).
                </span>
              </div>
            )}

            {/* Standard Cart items */}
            {items.length > 0 ? (
              <div className="flex flex-col gap-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start gap-4 text-xs font-sans"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#201A18] line-clamp-1">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#5C5450] mt-0.5">
                        Vintage {item.vintage} x {item.quantity}
                      </span>
                    </div>
                    <span className="font-semibold text-[#201A18]">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              !selectedClubTier && (
                <p className="font-sans text-xs text-[#5C5450] italic mb-6">
                  No items in cart
                </p>
              )
            )}

            {/* Fee Calculations */}
            {!selectedClubTier && (
              <div className="border-t border-[#722F37]/10 pt-4 flex flex-col gap-3 font-sans text-xs text-[#5C5450]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#201A18]">${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Climate-Controlled Shipping</span>
                  <span className="text-[#201A18]">
                    {shippingFee === 0 ? "Free" : `$${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Taxes</span>
                  <span className="text-[#201A18]">${tax}</span>
                </div>
              </div>
            )}

            {/* Final Total */}
            <div className="border-t border-[#722F37]/10 pt-4 mt-4 flex justify-between items-baseline">
              <span className="font-sans text-xs uppercase tracking-widest text-[#5C5450] font-bold">
                {selectedClubTier ? "Due Today" : "Settlement Total"}
              </span>
              <span className="font-sans text-2xl font-bold text-[#722F37]">
                ${selectedClubTier ? 0 : orderTotal}
              </span>
            </div>

            {selectedClubTier && (
              <p className="font-sans text-[10px] text-[#5C5450] leading-normal mt-4">
                Wine Club memberships are billed quarterly. Today's registration
                auth holds $0.00 for billing address validation.
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
