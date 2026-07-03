import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { bookingTiers } from "../data/bookingTiers";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import heroBackground from "../assets/hero_background.png";

// Zod schema for guest contact info validation
const guestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit phone number." }),
  confirmAge: z.boolean().refine((val) => val === true, {
    message: "You must confirm that all attendees are 21 or older.",
  }),
});

const addonOptions = [
  { id: "cheese", name: "Artisanal Cheese & Meat Platter", price: 45 },
  { id: "cave", name: "Extended Cave Tour (15 mins)", price: 20 },
  { id: "takehome", name: "Take-home Souvenir Zalto Glass", price: 65 },
];

export const TastingRoom = () => {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [partySize, setPartySize] = useState(2);
  const [selectedTime, setSelectedTime] = useState("");
  const [addons, setAddons] = useState([]);
  const [confirmationNumber, setConfirmationNumber] = useState("");

  const timeSlots = ["10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(guestSchema),
  });

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    setStep(2);
  };

  const handleSelectDateTime = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setStep(3); // Go to add-ons
  };

  const toggleAddon = (id) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((item) => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const handleAddonsSubmit = () => {
    setStep(4); // Go to contact details
  };

  const onFormSubmit = (data) => {
    if (!data) return;
    // Generate mock confirmation number
    const ref = `SVN-${Math.floor(1000 + Math.random() * 9000)}-${selectedTier?.name.substring(0, 3).toUpperCase()}`;
    setConfirmationNumber(ref);
    setStep(5); // Go to success screen
  };

  const calculateTotal = () => {
    if (!selectedTier) return 0;
    const tierCost = selectedTier.price * partySize;
    const addonsCost = addons.reduce((sum, id) => {
      const option = addonOptions.find((o) => o.id === id);
      return sum + (option ? option.price : 0);
    }, 0);
    return tierCost + addonsCost;
  };

  return (
    <div className="w-full text-left bg-[#FBF8F3]">
      {/* Hero Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Visit Us
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            Book a Tasting Experience
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Walk the historic hillsides, sit in our glass pavilion, and sip the
            sun-to-soil ledger.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Tracker header */}
          {step < 5 && (
            <div className="flex justify-between items-center mb-12 border-b border-[#722F37]/10 pb-6 text-[10px] tracking-wider font-sans uppercase font-bold text-[#5C5450] select-none">
              <span className={step === 1 ? "text-[#722F37]" : ""}>
                1. Choose Tier
              </span>
              <span className="text-[#722F37]/20">&bull;</span>
              <span className={step === 2 ? "text-[#722F37]" : ""}>
                2. Date & Time
              </span>
              <span className="text-[#722F37]/20">&bull;</span>
              <span className={step === 3 ? "text-[#722F37]" : ""}>
                3. Add-ons
              </span>
              <span className="text-[#722F37]/20">&bull;</span>
              <span className={step === 4 ? "text-[#722F37]" : ""}>
                4. Guest Details
              </span>
            </div>
          )}

          {/* STEP 1: SELECT EXPERIENCE */}
          {step === 1 && (
            <div className="flex flex-col gap-10 select-none animate-fade-in">
              <SectionHeading
                eyebrow="The Tastings"
                title="Select Your Experience"
                subtitle="All visits require advance reservations. Tasting fees are credited toward purchases of $150 or more."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {bookingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="bg-[#F6EFE2]/45 border border-[#722F37]/5 rounded-xs p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="aspect-16/10 rounded-xs overflow-hidden mb-5">
                        <img
                          src={tier.image}
                          alt={tier.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex justify-between items-baseline mb-4">
                        <h3 className="font-sans text-xl font-bold text-[#722F37]">
                          {tier.name}
                        </h3>
                        <span className="font-sans font-bold text-sm text-[#201A18]">
                          ${tier.price}pp
                        </span>
                      </div>
                      <span className="font-sans text-[10px] tracking-widest text-[#722F37] font-semibold block mb-3">
                        DURATION: {tier.duration}
                      </span>
                      <p className="font-sans text-xs text-[#5C5450] leading-relaxed mb-6">
                        {tier.description}
                      </p>
                    </div>

                    <Button
                      variant="outline-dark"
                      onClick={() => handleSelectTier(tier)}
                      className="w-full !py-3 !text-[10px]"
                    >
                      Book This Flight
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT DATE & TIME & PARTY SIZE */}
          {step === 2 && selectedTier && (
            <div className="bg-[#F6EFE2]/30 border border-[#722F37]/5 p-8 rounded-xs animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Button
                  variant="text-dark"
                  onClick={() => setStep(1)}
                  className="!px-0 !py-1 !text-[10px]"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
                </Button>
              </div>

              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-6">
                Tasting Logistics: {selectedTier.name}
              </h3>

              <form
                onSubmit={handleSelectDateTime}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Party Size */}
                  <div className="flex flex-col gap-2 text-left">
                    <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(parseInt(e.target.value))}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} Guests
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div className="flex flex-col gap-2 text-left">
                    <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                      Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                      required
                    />
                  </div>

                  {/* Time slot list */}
                  <div className="flex flex-col gap-2 text-left">
                    <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                      Time Slot
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="border-t border-[#722F37]/10 pt-6 flex justify-between items-center mt-4">
                  <div className="flex flex-col text-left font-sans">
                    <span className="text-[10px] tracking-wider text-[#5C5450] uppercase font-semibold">
                      Estimated Cost
                    </span>
                    <span className="font-sans text-xl font-bold text-[#201A18] mt-1">
                      ${selectedTier.price * partySize} (${selectedTier.price}
                      pp)
                    </span>
                  </div>

                  <Button
                    type="submit"
                    variant="solid-cabernet"
                    className="flex items-center gap-2"
                  >
                    Select Add-ons <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: SELECT ADDONS */}
          {step === 3 && selectedTier && (
            <div className="bg-[#F6EFE2]/30 border border-[#722F37]/5 p-8 rounded-xs text-left animate-fade-in">
              <Button
                variant="text-dark"
                onClick={() => setStep(2)}
                className="!px-0 !py-1 !text-[10px] mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
              </Button>

              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-3">
                Enhance Your Visit
              </h3>
              <p className="font-sans text-xs text-[#5C5450] mb-6 leading-relaxed">
                Add curated elements to customize your tasting experience.
                Selection is optional.
              </p>

              <div className="flex flex-col gap-4 mb-8 select-none">
                {addonOptions.map((opt) => {
                  const isChecked = addons.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleAddon(opt.id)}
                      className={`border p-4 rounded-xs flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#722F37] bg-[#D98E96]/10"
                          : "border-[#722F37]/10 bg-white hover:border-[#722F37]/25"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-xs border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "border-[#722F37] bg-[#722F37]"
                              : "border-[#722F37]/25 bg-[#FBF8F3]"
                          }`}
                        >
                          {isChecked && (
                            <Check className="w-3.5 h-3.5 text-[#201A18]" />
                          )}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-sans font-semibold text-xs text-[#201A18]">
                            {opt.name}
                          </span>
                        </div>
                      </div>
                      <span className="font-sans font-bold text-xs text-[#722F37]">
                        +${opt.price}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#722F37]/10 pt-6 flex justify-between items-center">
                <div className="flex flex-col text-left font-sans">
                  <span className="text-[10px] tracking-wider text-[#5C5450] uppercase font-semibold">
                    Running Total
                  </span>
                  <span className="font-sans text-xl font-bold text-[#201A18] mt-1">
                    ${calculateTotal()}
                  </span>
                </div>

                <Button
                  variant="solid-cabernet"
                  onClick={handleAddonsSubmit}
                  className="flex items-center gap-2"
                >
                  Guest Details <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: GUEST CONTACT INFO */}
          {step === 4 && selectedTier && (
            <div className="bg-[#F6EFE2]/30 border border-[#722F37]/5 p-8 rounded-xs text-left animate-fade-in">
              <Button
                variant="text-dark"
                onClick={() => setStep(3)}
                className="!px-0 !py-1 !text-[10px] mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
              </Button>

              <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-6">
                Guest Verification & Info
              </h3>

              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus Vance"
                    {...register("name")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                  />

                  {errors.name && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="marcus@solvaneestate.com"
                      {...register("email")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                    />

                    {errors.email && (
                      <span className="text-red-700 font-sans text-[10px] mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(707) 555-0190"
                      {...register("phone")}
                      className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                    />

                    {errors.phone && (
                      <span className="text-red-700 font-sans text-[10px] mt-1">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Age Agreement Checkbox */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("confirmAge")}
                      className="w-4 h-4 border border-[#722F37]/25 accent-[#722F37] rounded-xs mt-0.5"
                    />

                    <span className="font-sans text-xs text-[#5C5450] leading-relaxed">
                      I confirm that all members of my party are at least 21
                      years of age or older, and agree to present valid photo
                      identification upon arrival.
                    </span>
                  </label>
                  {errors.confirmAge && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.confirmAge.message}
                    </span>
                  )}
                </div>

                <div className="border-t border-[#722F37]/10 pt-6 flex justify-between items-center mt-4">
                  <div className="flex flex-col text-left font-sans">
                    <span className="text-[10px] tracking-wider text-[#5C5450] uppercase font-semibold">
                      Total Due at Winery
                    </span>
                    <span className="font-sans text-xl font-bold text-[#201A18] mt-1">
                      ${calculateTotal()}
                    </span>
                  </div>

                  <Button
                    type="submit"
                    variant="solid-cabernet"
                    className="flex items-center gap-2"
                  >
                    Confirm Booking <Check className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 5: SUCCESS CONFIRMATION */}
          {step === 5 && selectedTier && (
            <div className="bg-white border border-[#722F37] p-8 md:p-10 rounded-xs text-center flex flex-col items-center gap-6 shadow-xl animate-fade-in text-left">
              <div className="w-16 h-16 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-[#722F37]" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-sans text-[10px] tracking-widest text-[#722F37] font-bold uppercase">
                  Reservation Confirmed
                </span>
                <h3 className="font-sans text-3xl font-semibold text-[#722F37]">
                  We look forward to hosting you
                </h3>
              </div>

              <div className="w-12 h-[1px] bg-[#722F37] my-2" />

              {/* Summary details */}
              <div className="w-full bg-[#F6EFE2]/45 rounded-xs p-6 border border-[#722F37]/5 flex flex-col gap-3 font-sans text-xs text-[#5C5450] text-left">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#722F37]">
                    Reference Number:
                  </span>
                  <span className="font-semibold text-[#201A18] tracking-widest">
                    {confirmationNumber}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#722F37]/5 pt-3">
                  <span>Experience:</span>
                  <span className="font-sans font-bold text-sm text-[#722F37]">
                    {selectedTier.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Party Size:</span>
                  <span className="font-semibold text-[#201A18]">
                    {partySize} Guests
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span className="font-semibold text-[#201A18]">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                {addons.length > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons:</span>
                    <span className="font-semibold text-[#201A18]">
                      {addons.length} items
                    </span>
                  </div>
                )}
                <div className="flex justify-between border-t border-[#722F37]/5 pt-3 font-semibold">
                  <span className="text-[#722F37]">
                    Estimated Total (Pay at Winery):
                  </span>
                  <span className="text-[#201A18] text-sm">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>

              <p className="font-sans text-[11px] leading-relaxed text-[#5C5450] max-w-md">
                A confirmation email containing directions, dress guidelines,
                and cellar coordinates has been sent. Cancellations must be
                requested at least 48 hours prior to check-in.
              </p>

              <div className="flex gap-4 w-full max-w-sm mt-2 justify-center">
                <Button variant="solid-cabernet" to="/shop" className="flex-1">
                  Visit Cellar
                </Button>
                <Button variant="outline-dark" to="/" className="flex-1">
                  Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TastingRoom;
