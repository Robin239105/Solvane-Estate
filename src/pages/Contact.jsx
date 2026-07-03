import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, MapPin, Mail, Clock, Check } from "lucide-react";
import { pageVariants } from "../lib/motion";
import Button from "../components/ui/Button";
import teaserMain from "../assets/teaser_main.png";
import slide1 from "../assets/slide1.png";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select an inquiry topic." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
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

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left bg-[#FBF8F3] min-h-screen"
    >
      {/* Subpage Hero */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${teaserMain})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Connect
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            Contact the Estate
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Reach out for trade inquiries, press requests, private allocations,
            or directions to our caves.
          </p>
        </div>
      </div>

      {/* Contact Content Area */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Info & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-10 text-left">
            <div>
              <span className="font-sans italic text-base text-[#521D23] mb-2.5 block">
                At a Glance
              </span>
              <h2 className="font-sans text-3xl font-bold text-[#722F37] leading-snug">
                Coordinates & Hours
              </h2>
              <div className="w-12 h-[1px] bg-[#722F37] my-4" />
              <p className="font-sans text-xs md:text-sm text-[#5C5450] leading-relaxed">
                We invite you to experience the silence of our barrel caves.
                Advanced reservations are required for all tastings.
              </p>
            </div>

            {/* Coordinates detail blocks */}
            <div className="flex flex-col gap-6 font-sans text-xs text-[#5C5450] border-t border-[#722F37]/10 pt-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#722F37] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#201A18] uppercase tracking-wider mb-1">
                    Estate Address
                  </span>
                  <span>4500 Solvane Way, Rutherford, CA 94573</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-[#722F37] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#201A18] uppercase tracking-wider mb-1">
                    Direct Line
                  </span>
                  <span>Tastings: (707) 555-0190</span>
                  <span>Office: (707) 555-0199</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-[#722F37] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#201A18] uppercase tracking-wider mb-1">
                    Registry & Inquiries
                  </span>
                  <span>allocations@solvaneestate.com</span>
                  <span>trade@solvaneestate.com</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-[#722F37] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#201A18] uppercase tracking-wider mb-1">
                    Cellar Gates
                  </span>
                  <span>Tuesday &ndash; Sunday: 10:00 AM &ndash; 6:00 PM</span>
                  <span>Monday: Closed (Private Barrel work)</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-[#F6EFE2] rounded-xs border border-[#722F37]/5 overflow-hidden flex items-center justify-center relative select-none">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale"
                style={{
                  backgroundImage: `url(${slide1})`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-1.5">
                <span className="font-sans italic text-sm text-[#722F37] font-bold">
                  Rutherford, Napa Valley
                </span>
                <span className="font-sans text-[8px] uppercase tracking-widest text-[#201A18] font-bold bg-[#722F37]/90 px-3 py-1.5">
                  MAP DETAILS & DIRECTIONS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {!success ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#F6EFE2]/45 border border-[#722F37]/5 p-8 rounded-xs flex flex-col gap-5 text-left"
              >
                <div className="text-center md:text-left mb-4">
                  <h3 className="font-sans text-2xl font-bold text-[#722F37]">
                    Send a Message
                  </h3>
                  <p className="font-sans text-xs text-[#5C5450] mt-1">
                    Please fill out the form below. We will route your inquiry
                    to the appropriate cellar desk.
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Your Name
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

                {/* Email */}
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

                {/* Subject Topic */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Subject / Department
                  </label>
                  <select
                    {...register("subject")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] select-none"
                  >
                    <option value="">Select Department</option>
                    <option value="allocation">
                      Cellar Registry Allocations
                    </option>
                    <option value="trade">Trade / Wholesale Inquiries</option>
                    <option value="press">Press & Media Relations</option>
                    <option value="other">General Inquiries</option>
                  </select>
                  {errors.subject && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-widest font-bold uppercase text-[#5C5450]">
                    Message
                  </label>
                  <textarea
                    placeholder="Describe your inquiry in detail..."
                    rows={6}
                    {...register("message")}
                    className="bg-[#FBF8F3] border border-[#722F37]/10 text-xs px-4 py-3 tracking-wider rounded-xs focus:outline-none focus:border-[#722F37] resize-none"
                  />

                  {errors.message && (
                    <span className="text-red-700 font-sans text-[10px] mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="border-t border-[#722F37]/10 pt-6 mt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="solid-cabernet"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-[#F6EFE2]/45 border border-[#722F37] p-10 rounded-xs text-center flex flex-col items-center gap-4.5 shadow-lg animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#722F37]" />
                </div>
                <h3 className="font-sans text-2xl font-semibold text-[#722F37]">
                  Message Successfully Sent
                </h3>
                <p className="font-sans text-xs text-[#5C5450] max-w-sm leading-relaxed">
                  Thank you. We have routed your inquiry to the respective
                  cellar desk. A representative from the estate will reply to
                  you shortly.
                </p>
                <Button
                  variant="outline-dark"
                  onClick={() => setSuccess(false)}
                  className="mt-2 !py-2.5 !px-6 !text-[10px]"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
