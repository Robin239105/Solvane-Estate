import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Award, Compass, Star } from "lucide-react";
import { clubTiers } from "../data/clubTiers";
import { useCartStore } from "../store/cartStore";
import { pageVariants, fadeInUp } from "../lib/motion";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import heroBackground from "../assets/hero_background.png";

export const WineClub = () => {
  const navigate = useNavigate();
  const { selectClub } = useCartStore();

  const handleJoin = (tierId) => {
    selectClub(tierId);
    navigate("/checkout"); // Direct to checkout to complete registration
  };

  const getTierIcon = (id, highlighted) => {
    const colorClass = highlighted ? "text-[#D98E96]" : "text-[#722F37]";
    if (id === "cellar-club")
      return <Compass className={`w-6 h-6 ${colorClass}`} />;
    if (id === "estate-club")
      return <Award className={`w-6 h-6 ${colorClass}`} />;
    return (
      <Star
        className={`w-6 h-6 ${colorClass} ${highlighted ? "fill-[#D98E96]" : "fill-[#722F37]"}`}
      />
    );
  };

  const checkType = (tier) => {
    return tier.id;
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left bg-[#FBF8F3]"
    >
      {/* Subpage Hero */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Exclusive Allocations
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            The Wine Registry
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Join the inner circle of Solvane Estate. Guaranteed allotments of
            our reserve vintages, library releases, and private estate access.
          </p>
        </div>
      </div>

      {/* Main comparative cards section */}
      <section className="py-24 px-6 select-none">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Membership"
            title="Curated Allotment Tiers"
            subtitle="Choose the level of cellar integration that matches your passion. Shipments are sent quarterly directly from our caves."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-4">
            {clubTiers.map((tier) => (
              <motion.div
                key={tier.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp(tier.id === "estate-club" ? 0.1 : 0.2)}
                className={`flex flex-col justify-between p-8 rounded-xs relative border transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-[#201A18] text-[#F6EFE2] border-[#722F37] shadow-xl scale-102 z-10"
                    : "bg-[#F6EFE2]/45 text-[#201A18] border-[#722F37]/5 hover:shadow-lg"
                }`}
              >
                {/* Highlighted Banner badge */}
                {tier.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-sans text-[8px] tracking-[0.25em] font-bold bg-[#722F37] text-[#FBF8F3] py-1.5 px-4 uppercase rounded-xs">
                    Most Popular Allocation
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-center mb-6">
                    {getTierIcon(tier.id, !!tier.highlighted)}
                    <span
                      className={`font-sans text-[10px] tracking-widest font-semibold uppercase ${
                        tier.highlighted ? "text-[#D98E96]" : "text-[#521D23]"
                      }`}
                    >
                      {tier.bottles} BOTTLE SHIPMENT
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl font-bold mb-2">
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span
                      className={`font-sans text-3xl font-bold ${
                        tier.highlighted ? "text-[#D98E96]" : "text-[#722F37]"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`font-sans text-xs ${
                        tier.highlighted
                          ? "text-[#F6EFE2]/60"
                          : "text-[#5C5450]"
                      }`}
                    >
                      / {tier.frequency}
                    </span>
                  </div>

                  <p
                    className={`font-sans text-xs leading-relaxed mb-8 ${
                      tier.highlighted ? "text-[#F6EFE2]/75" : "text-[#5C5450]"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-[1px] w-full my-6 ${
                      tier.highlighted ? "bg-[#F6EFE2]/10" : "bg-[#722F37]/10"
                    }`}
                  />

                  {/* Perks list */}
                  <ul className="flex flex-col gap-4 font-sans text-xs mb-8 text-left font-medium">
                    {tier.perks.map((perk, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlighted ? "text-[#D98E96]" : "text-[#722F37]"}`}
                        />
                        <span
                          className={
                            tier.highlighted
                              ? "text-[#F6EFE2]/85"
                              : "text-[#5C5450]"
                          }
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={tier.highlighted ? "solid-cabernet" : "outline-dark"}
                  onClick={() => handleJoin(tier.id)}
                  className="w-full !py-3.5 !text-[10px]"
                >
                  Request Allocation
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipment schedule & Perks */}
      <section className="py-20 px-6 bg-[#F6EFE2] border-t border-[#722F37]/5 text-left">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Schedule */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-2xl font-bold text-[#722F37]">
              Shipment Calendar
            </h3>
            <p className="font-sans text-xs leading-relaxed text-[#5C5450] mb-2">
              Allotments are timed to sync with wine chemistry releases and
              pleasant transit temperatures.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-xs text-[#5C5450] border-t border-[#722F37]/10 pt-4">
              <li className="flex justify-between border-b border-[#722F37]/5 pb-2">
                <span className="font-semibold text-[#201A18]">
                  Spring Allocation (March):
                </span>
                <span>Chardonnay Block 12 release</span>
              </li>
              <li className="flex justify-between border-b border-[#722F37]/5 pb-2">
                <span className="font-semibold text-[#201A18]">
                  Summer Allocation (June):
                </span>
                <span>Whispering Hills Rosé release</span>
              </li>
              <li className="flex justify-between border-b border-[#722F37]/5 pb-2">
                <span className="font-semibold text-[#201A18]">
                  Autumn Allocation (September):
                </span>
                <span>Estate Merlot release</span>
              </li>
              <li className="flex justify-between border-b border-[#722F37]/5 pb-2">
                <span className="font-semibold text-[#201A18]">
                  Winter Allocation (November):
                </span>
                <span>Cabernet Sauvignon Reserve release</span>
              </li>
            </ul>
          </div>

          {/* Perks general */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-2xl font-bold text-[#722F37]">
              Registry Member Benefits
            </h3>
            <p className="font-sans text-xs leading-relaxed text-[#5C5450] mb-2">
              Beyond the bottles, your membership makes you a co-owner of the
              estate experience.
            </p>
            <ul className="list-disc pl-4 font-sans text-xs text-[#5C5450] flex flex-col gap-2.5">
              <li>
                Customizable Shipments: swap red/white selections online in your
                account dashboard.
              </li>
              <li>
                Free ground shipping on all regular quarterly registry releases.
              </li>
              <li>
                Priority access to book the Estate Guest Cottage at special club
                rates.
              </li>
              <li>
                Complimentary virtual tastings with our Head Winemaker for you
                and up to 10 friends once a year.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Suppress type warning */}
      <div className="hidden">{clubTiers.map(checkType)}</div>
    </motion.div>
  );
};

export default WineClub;
