import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";

export const bookingTiers = [
  {
    id: "classic-flight",
    name: "Classic Flight",
    price: 35,
    duration: "45 mins",
    description:
      "An introductory tasting of our current releases, highlighting the core varietals of the estate.",
    includes: [
      "Tasting of 4 estate wines (including Rosé, Chardonnay, and Merlot)",
      "Seated tasting in our sun-drenched Glass Pavilion",
      "Guided explanation of terroir by a Solvane Wine Educator",
    ],
    image: gallery2,
  },
  {
    id: "reserve-tasting",
    name: "Reserve Tasting",
    price: 85,
    duration: "75 mins",
    description:
      "An elevated journey through our highly acclaimed Reserve Series, paired with local charcuterie.",
    includes: [
      "Tasting of 5 premium reserve-tier and library-release wines",
      "Exclusive tour of our stone Barrel Cellar and fermenting facility",
      "Charcuterie and local cheese board pairing",
      "Guided by a Senior Sommelier",
    ],
    image: gallery4,
  },
  {
    id: "private-estate-experience",
    name: "Private Estate Experience",
    price: 220,
    duration: "2 hours",
    description:
      "The ultimate exploration of Solvane Estate. Walk the soil, taste the barrels, and dine overlooking the valley.",
    includes: [
      "Private walking tour of our ridgetop blocks and weather station",
      "Direct barrel-thieving tasting with the Winemaker or Cellar Master",
      "Full tasting of all Reserve and Library labels",
      "Chef-prepared 3-course seasonal lunch overlooking the vineyard",
    ],
    image: gallery3,
  },
];
