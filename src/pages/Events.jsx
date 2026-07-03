import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { pageVariants } from "../lib/motion";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import { Check } from "lucide-react";
import gallery3 from "../assets/gallery3.png";
import gallery5 from "../assets/gallery5.png";
import heroBackground from "../assets/hero_background.png";

const eventSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  guestCount: z.string().min(1, { message: "Please estimate guest count." }),
  preferredDate: z.string().min(1, { message: "Preferred date is required." }),
  notes: z.string().optional(),
});

export const Events = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = (data) => {
    if (!data) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 1200);
  };

  const eventPackages = [
    {
      name: "Ridgetop Wedding",
      capacity: "Up to 120 Guests",
      description:
        "Exchange vows at our highest elevation block overlooking the Napa Valley at sunset, followed by an open-air reception between the vine rows.",
      image: gallery3,
    },
    {
      name: "Caves Dinner",
      capacity: "Up to 30 Guests",
      description:
        "Host a private candlelight dinner deep inside our historical stone barrel caves. Features a custom 5-course menu prepared by our estate chef.",
      image: gallery5,
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left bg-[#FBF8F3]"
    >
      {/* Hero */}
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
            Gather at Solvane
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            Private Events & Weddings
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Commemorate milestones amidst rolling hillsides, oak barrel cellars,
            and vintage sunset views.
          </p>
        </div>
      </div>

      {/* Packages list */}
      <section className="py-24 px-6 select-none">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Venues"
            title="Exclusive Event Formats"
            subtitle="Solvane Estate offers private, single-booking events to ensure absolute seclusion and dedicated sommelier service for your guests."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {eventPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-[#F6EFE2]/45 border border-[#722F37]/5 p-6 rounded-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden rounded-xs mb-6">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-sans text-2xl font-bold text-[#722F37]">
                      {pkg.name}
                    </h3>
                    <Badge variant="cabernet">{pkg.capacity}</Badge>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-[#5C5450] leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form section */}
      <section className="py-20 px-6 bg-[#F6EFE2] border-t border-[#722F37]/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans italic text-base text-[#521D23] mb-2 block">
              Reservations
            </span>
            <h2 className="font-sans text-3xl font-medium text-[#722F37]">
              Submit Event Inquiry
            </h2>
            <p className="font-sans text-xs text-[#5C5450] mt-2">
              Our events coordinator will reply containing details, dates, and
              cellar rates within 24 business hours.
            </p>
          </div>

          {!success ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#FBF8F3] border border-[#722F37]/5 p-8 rounded-xs flex flex-col gap-5 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Contact Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus Vance"
                    {...register("name")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {errors.name && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Contact Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="marcus@solvaneestate.com"
                    {...register("email")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {errors.email && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Event type */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Event Format
                  </label>
                  <select
                    {...register("eventType")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                  >
                    <option value="">Select Format</option>
                    <option value="wedding">Wedding / Ceremony</option>
                    <option value="dinner">Corporate / Private Dinner</option>
                    <option value="party">Tasting Celebration</option>
                  </select>
                  {errors.eventType && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.eventType.message}
                    </span>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("preferredDate")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37]"
                  />

                  {errors.preferredDate && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.preferredDate.message}
                    </span>
                  )}
                </div>

                {/* Guest Count */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Est. Guest Count
                  </label>
                  <select
                    {...register("guestCount")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                  >
                    <option value="">Select Capacity</option>
                    <option value="1-15">1-15 guests</option>
                    <option value="16-30">16-30 guests</option>
                    <option value="31-60">31-60 guests</option>
                    <option value="61-120">61-120 guests</option>
                  </select>
                  {errors.guestCount && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.guestCount.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Special Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                  Tell Us About Your Vision
                </label>
                <textarea
                  placeholder="Share details regarding culinary requests, wine preferences, or specific timelines..."
                  rows={4}
                  {...register("notes")}
                  className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] resize-none"
                />
              </div>

              <div className="border-t border-[#722F37]/10 pt-6 mt-2 flex justify-end">
                <Button
                  type="submit"
                  variant="solid-cabernet"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-[#FBF8F3] border border-[#722F37] p-10 rounded-xs text-center flex flex-col items-center gap-4.5 shadow-lg animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-[#722F37]" />
              </div>
              <h3 className="font-sans text-2xl font-semibold text-[#722F37]">
                Inquiry Successfully Lodged
              </h3>
              <p className="font-sans text-xs text-[#5C5450] max-w-sm leading-relaxed">
                Thank you. Our private events manager will review your preferred
                date and contact you directly with a customized quote and
                itinerary details.
              </p>
              <Button
                variant="outline-dark"
                onClick={() => setSuccess(false)}
                className="mt-2 !py-2.5 !px-6 !text-[10px]"
              >
                Send Another Request
              </Button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Events;
