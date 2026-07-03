import React from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../lib/motion";

export const TermsOfService = () => {
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
            Terms of Service
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
            Welcome to Solvane Estate. By using our website, purchasing our
            products, joining our Wine Club, or booking a tasting at our
            Rutherford estate, you agree to be bound by the following Terms of
            Service.
          </p>

          <div className="w-16 h-[1px] bg-[#722F37]/30" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              1. Age Requirement &amp; Verification
            </h2>
            <p className="text-[#5C5450] font-light">
              You must be at least 21 years of age to purchase wine from Solvane
              Estate or book a tasting experience. We verify age at checkout
              using automated verification partners and require a valid,
              government-issued photo ID upon physical delivery of our wines or
              when checking in at our tasting room.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              2. Wine Club Memberships &amp; Allocations
            </h2>
            <p className="text-[#5C5450] font-light">
              Membership in the Solvane Wine Club involves automatic recurring
              shipments of curated estate allocations. Members agree to a
              minimum of two shipments before cancellation is permitted.
              Shipments are billed automatically to the credit card on file
              prior to fulfillment.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              3. Tasting Reservations &amp; Cancellations
            </h2>
            <p className="text-[#5C5450] font-light">
              Tasting reservations are subject to availability and must be
              booked in advance. Due to our limited capacity and regulatory
              requirements, cancellations must be requested at least 48 hours
              prior to your scheduled time to receive a full refund.
              Cancellations made within 48 hours are non-refundable.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              4. Accuracy of Product Allocations &amp; Pricing
            </h2>
            <p className="text-[#5C5450] font-light">
              Solvane Estate reserves the right to limit the quantity of
              allocations purchased by any individual. All prices are in USD and
              are subject to change without notice. We make every effort to
              display the details, vintages, and prices of our library reserves
              accurately, but errors may occur, in which case we reserve the
              right to cancel affected orders.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              5. Intellectual Property
            </h2>
            <p className="text-[#5C5450] font-light">
              All content on this website, including logos, typography, visual
              layouts, and winery ledger details, is the exclusive property of
              Solvane Estate. Any unauthorized duplication or distribution is
              strictly prohibited.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              6. Governing Law
            </h2>
            <p className="text-[#5C5450] font-light">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of California, without
              giving effect to any principles of conflicts of law. Any legal
              actions must be filed in Napa County, California.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
