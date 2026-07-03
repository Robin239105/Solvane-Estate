import React from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../lib/motion";

export const PrivacyPolicy = () => {
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
            Privacy Policy
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
            At Solvane Estate, we are committed to safeguarding the privacy of
            our visitors, club members, and patrons. This Privacy Policy details
            how we collect, utilize, and protect your personal information when
            you purchase our allocations, visit our tasting room, or browse our
            digital ledger.
          </p>

          <div className="w-16 h-[1px] bg-[#722F37]/30" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              1. Information We Collect
            </h2>
            <p className="text-[#5C5450] font-light">
              We collect personal information necessary to fulfill purchases,
              process allocations, and manage tasting room bookings. This
              includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5C5450] font-light">
              <li>
                <strong className="text-[#201A18]">
                  Identity Information:
                </strong>{" "}
                Full name, date of birth (required to verify legal drinking age
                of 21+), and billing/shipping coordinates.
              </li>
              <li>
                <strong className="text-[#201A18]">Contact Information:</strong>{" "}
                Email address, telephone number, and communication preferences.
              </li>
              <li>
                <strong className="text-[#201A18]">Transaction Details:</strong>{" "}
                Payment details processed securely through our compliance
                gateways (credit/debit credentials, billing statements).
              </li>
              <li>
                <strong className="text-[#201A18]">Digital Footprint:</strong>{" "}
                Device metadata, IP addresses, browser specifications, and
                cookie preferences compiled during your visit.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              2. How We Use Your Information
            </h2>
            <p className="text-[#5C5450] font-light">
              Your details are used strictly to perform our agreement with you
              and satisfy compliance protocols:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5C5450] font-light">
              <li>
                To verify legal drinking age (21+) prior to checkout or tasting
                entry.
              </li>
              <li>
                To fulfill product orders, coordinate temperature-controlled
                courier shipping, and manage Wine Club allocations.
              </li>
              <li>
                To authenticate reservations, process tasting seatings, and
                custom culinary additions.
              </li>
              <li>
                To distribute legal compliance documentation and newsletters
                related strictly to Solvane Estate allocations.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              3. Compliance &amp; Age Verification
            </h2>
            <p className="text-[#5C5450] font-light">
              Wine shipping and sales are strictly regulated. We utilize
              third-party age verification and regulatory compliance systems
              (such as ShipCompliant) to confirm your legal drinking age and
              shipping authorization in eligible states. Information is
              transferred securely and is never sold to marketing aggregators.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              4. Data Security
            </h2>
            <p className="text-[#5C5450] font-light">
              Solvane Estate implements modern Secure Socket Layer (SSL)
              encryption for all transactions. Our databases are secured against
              unauthorized access, maintaining strict cellaring records and
              membership details securely. Payment processing complies fully
              with Payment Card Industry Data Security Standards (PCI-DSS).
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-sans text-lg font-semibold text-[#722F37] uppercase tracking-wider">
              5. Contact Us
            </h2>
            <p className="text-[#5C5450] font-light">
              For inquiries regarding your personal records, deletion requests,
              or opt-out options, please contact our estate registrar directly
              at{" "}
              <a
                href="mailto:registrar@solvaneestate.com"
                className="text-[#722F37] underline hover:text-[#D98E96] transition-colors"
              >
                registrar@solvaneestate.com
              </a>
              .
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
