import React from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../lib/motion";

export const ShippingPolicy = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left pt-32 pb-24 bg-[#FBF8F3]"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="border-b border-[#722F37]/15 pb-8 mb-12">
          <span className="font-sans text-[10px] tracking-[0.35em] font-extrabold text-[#D98E96] uppercase mb-3 block">
            Legal &amp; Compliance
          </span>
          <h1 className="font-sans text-4xl md:text-5xl font-light text-[#722F37] uppercase tracking-wide">
            Shipping &amp; Returns
          </h1>
          <p className="font-sans text-xs text-[#5C5450] mt-3 italic">
            Effective Date: July 1, 2026
          </p>
        </div>

        {/* Content Body */}
        <motion.div
          variants={fadeInUp(0.1)}
          className="font-sans text-sm text-[#201A18] leading-relaxed space-y-10"
        >
          <p className="text-base text-[#5C5450] font-light">
            Due to the strict legal regulations surrounding the transportation
            of alcoholic beverages, Solvane Estate adheres to special shipping
            and delivery conditions. Please review our shipping policy and
            return options prior to checkout.
          </p>

          <div className="w-16 h-[1px] bg-[#722F37]/30" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              1. Adult Signature Requirement
            </h2>
            <p className="text-[#5C5450] font-light font-semibold">
              IMPORTANT: All wine shipments require an adult signature (21 years
              or older) upon delivery.
            </p>
            <p className="text-[#5C5450] font-light">
              Couriers (FedEx or UPS) will ask for a valid government-issued
              photo ID showing proof of age. We strongly recommend shipping your
              order to a business address or local pickup point where an adult
              is present during normal business hours to prevent missed
              deliveries. Wine shipments cannot be left at the door or sent to
              P.O. boxes.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              2. Weather Holds
            </h2>
            <p className="text-[#5C5450] font-light">
              Wine is a living product that is highly sensitive to extreme
              temperatures. To preserve the quality and cork seal integrity of
              our allocations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5C5450] font-light">
              <li>
                We monitor temperature patterns along transit routes. If
                temperatures are too high (above 85°F) or too low (below 35°F),
                we will automatically place your order on a{" "}
                <strong className="text-[#201A18]">Weather Hold</strong>.
              </li>
              <li>
                We will contact you to coordinate shipping via
                temperature-controlled shipping trucks or arrange a delayed ship
                date when weather permits.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              3. Eligible Shipping States
            </h2>
            <p className="text-[#5C5450] font-light">
              We ship to states that permit direct-to-consumer wine shipments
              under state regulations. Due to local state laws, we are currently
              unable to ship wine to:
            </p>
            <p className="text-[#722F37] font-semibold tracking-wider text-[11px] uppercase bg-[#722F37]/5 px-4 py-2.5 rounded-sm border border-[#722F37]/10 inline-block">
              Utah (UT), Mississippi (MS), Alabama (AL), and Delaware (DE).
            </p>
            <p className="text-[#5C5450] font-light mt-2">
              If your state is not eligible, please contact our estate
              coordinator to learn about alternative storage or regional wine
              retailers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              4. Return &amp; Exchange Policy
            </h2>
            <p className="text-[#5C5450] font-light">
              Due to state regulations, food and beverage products cannot be
              returned or refunded once shipped. However:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5C5450] font-light">
              <li>
                If your bottle is damaged, cork-spoiled (corked), or displays
                structural defects upon delivery, please contact our customer
                team at{" "}
                <a
                  href="mailto:allocations@solvaneestate.com"
                  className="text-[#722F37] underline hover:text-[#D98E96] transition-colors"
                >
                  allocations@solvaneestate.com
                </a>{" "}
                within 30 days of purchase.
              </li>
              <li>
                We will happily arrange a replacement bottle of the same vintage
                (subject to cellar availability) or credit your account.
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ShippingPolicy;
