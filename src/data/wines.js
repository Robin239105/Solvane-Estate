import wineCabernet from "../assets/wine_cabernet.png";
import wineChardonnay from "../assets/wine_chardonnay.png";
import wineSparkling from "../assets/wine_sparkling.png";
import wineMerlot from "../assets/wine_merlot.png";
import wineRose from "../assets/wine_rose.png";
import winePinot from "../assets/wine_pinot.png";

export const wines = [
  {
    id: "solvane-cab-sauv-2021",
    name: "Solvane Cabernet Sauvignon Reserve",
    slug: "solvane-cabernet-sauvignon-reserve-2021",
    type: "red",
    vintage: "2021",
    price: 145,
    rating: 98,
    abv: "14.5%",
    volume: "750ml",
    origin: "Rutherford AVA, Napa Valley",
    image: wineCabernet,
    description:
      "A towering expression of Napa Valley Cabernet. Sourced exclusively from our estate ridgetop blocks, this reserve vintage offers unparalleled depth, structure, and cellular integrity designed to age gracefully for decades.",
    tastingNotes: {
      nose: "Blackberry compote, crème de cassis, dried violets, and a whisper of sweet tobacco leaf.",
      palate:
        "Opulent layers of dark plum, unsweetened cocoa, and graphite. Structured by refined, muscular tannins.",
      finish:
        "Lingering and complex, with persistent dark fruit, espresso bean, and french oak spices.",
    },
    details: {
      harvestDate: "October 12, 2021",
      barrelAging: "22 Months in 100% French Oak (80% New)",
      ph: "3.62",
      acidity: "6.1 g/L",
    },
    pairings: [
      "Dry-aged ribeye steak with truffle butter",
      "Braised wild boar ragù",
      "Aged gouda or sharp cheddar cheese",
    ],
    servingTemp: "60-65°F (15-18°C)",
    isReserve: true,
  },
  {
    id: "solvane-chardonnay-2022",
    name: "Solvane Chardonnay Block 12",
    slug: "solvane-chardonnay-block-12-2022",
    type: "white",
    vintage: "2022",
    price: 85,
    rating: 95,
    abv: "13.8%",
    volume: "750ml",
    origin: "Carneros AVA, Sonoma",
    image: wineChardonnay,
    description:
      "An elegant, cool-climate Chardonnay that balances rich textures with vibrant mineral-driven acidity. Block 12 is situated on clay-loam soils exposed to morning marine fog, capturing perfect sun-to-soil harmony.",
    tastingNotes: {
      nose: "Meyer lemon zest, crisp green apple, white peach, and a delicate touch of toasted brioche.",
      palate:
        "Creamy and coating yet energetic. Salted caramel notes offset by stone fruit and lemon curd.",
      finish:
        "Clean, flinty finish with a subtle mineral salinity and vanilla cream.",
    },
    details: {
      harvestDate: "September 21, 2022",
      barrelAging: "11 Months in French Oak (35% New, 65% Neutral)",
      ph: "3.41",
      acidity: "6.7 g/L",
    },
    pairings: [
      "Pan-seared sea scallops in butter sauce",
      "Roasted organic chicken with herbs",
      "Truffle-infused triple cream brie",
    ],
    servingTemp: "50-55°F (10-13°C)",
  },
  {
    id: "solvane-merlot-2020",
    name: "Solvane Estate Merlot",
    slug: "solvane-estate-merlot-2020",
    type: "red",
    vintage: "2020",
    price: 95,
    rating: 94,
    abv: "14.2%",
    volume: "750ml",
    origin: "Oakville AVA, Napa Valley",
    image: wineMerlot,
    description:
      "Sourced from the gravelly loam soils of Oakville, this Merlot challenges conventions. Richly textured with velvety tannins, it represents winemaking craft at its most meticulous.",
    tastingNotes: {
      nose: "Black cherry, plum skin, crushed gravel, and a hint of fresh sage.",
      palate:
        "Generous core of dark red berries, black tea leaves, and baking spice. Supple and velvety.",
      finish: "Satisfyingly round with soft cocoa powder and warm cedar wood.",
    },
    details: {
      harvestDate: "October 3, 2020",
      barrelAging: "18 Months in French Oak (50% New)",
      ph: "3.55",
      acidity: "5.8 g/L",
    },
    pairings: [
      "Roasted duck breast with cherry reduction",
      "Pan-roasted lamb chops",
      "Wild mushroom risotto",
    ],
    servingTemp: "60-65°F (15-18°C)",
  },
  {
    id: "solvane-rose-2023",
    name: "Solvane Whispering Hills Rosé",
    slug: "solvane-whispering-hills-rose-2023",
    type: "rose",
    vintage: "2023",
    price: 55,
    rating: 92,
    abv: "12.5%",
    volume: "750ml",
    origin: "Russian River Valley, Sonoma",
    image: wineRose,
    description:
      "A Provence-style rosé crafted from estate Pinot Noir grapes. Delicate, crisp, and pale salmon in color, it represents the fresh morning dew and cool breezes of the Russian River.",
    tastingNotes: {
      nose: "Wild strawberry, watermelon rind, orange blossom, and damp river stones.",
      palate:
        "Zesty and bone-dry. Focused acidity with red currant, grapefruit, and chalky minerality.",
      finish:
        "Short and crisp with a bright citrus kick that invites another sip.",
    },
    details: {
      harvestDate: "September 2, 2023",
      barrelAging: "Stainless steel fermentation, no oak aging",
      ph: "3.25",
      acidity: "7.2 g/L",
    },
    pairings: [
      "Fresh oysters with mignonette",
      "Grilled prawns with garlic and lemon",
      "Watermelon, feta, and mint salad",
    ],
    servingTemp: "45-48°F (7-9°C)",
  },
  {
    id: "solvane-grand-cuvee-2018",
    name: "Solvane Grand Cuvée Sparkling",
    slug: "solvane-grand-cuvee-sparkling-2018",
    type: "sparkling",
    vintage: "2018",
    price: 180,
    rating: 97,
    abv: "12.0%",
    volume: "750ml",
    origin: "Los Carneros, Napa Valley",
    image: wineSparkling,
    description:
      "Produced using the traditional Méthode Champenoise from 60% Chardonnay and 40% Pinot Noir. Aged on the lees for five years, it delivers fine effervescence and remarkable complexity.",
    tastingNotes: {
      nose: "Toasted almonds, yellow apple, lemon curd, and chalky yeast autolysis.",
      palate:
        "Creamy mousse with a fine, persistent bead. Golden apple, baked pastry, and lemon tart.",
      finish:
        "Ultra-refined with lime blossom, ginger root, and mineral crunch.",
    },
    details: {
      harvestDate: "August 30, 2018",
      barrelAging: "Aged 60 months on lees in bottle; disgorged March 2024",
      ph: "3.18",
      acidity: "7.8 g/L",
    },
    pairings: [
      "Osetra caviar on blinis",
      "Crispy truffled french fries",
      "Pan-fried sole meunière",
    ],
    servingTemp: "42-45°F (5-7°C)",
    isReserve: true,
  },
  {
    id: "solvane-pinot-noir-2019",
    name: "Solvane Pinot Noir Block 8 (Library)",
    slug: "solvane-pinot-noir-block-8-2019",
    type: "red",
    vintage: "2019",
    price: 210,
    rating: 99,
    abv: "13.9%",
    volume: "750ml",
    origin: "Fort Ross-Seaview, Sonoma Coast",
    image: winePinot,
    description:
      "A prized selection from our library cellars. Growing on maritime cliffs above the fog line, these low-yielding vines produce an incredibly concentrated and aromatic Pinot Noir.",
    tastingNotes: {
      nose: "Dried cranberries, black tea, forest floor, pine needles, and exotic spices.",
      palate:
        "Silky and ethereal. Bright raspberry acidity balanced by earthy clay, orange peel, and dried mushrooms.",
      finish:
        "Epic length, showing red tea, dried cherries, and complex woodland forest spices.",
    },
    details: {
      harvestDate: "September 15, 2019",
      barrelAging: "16 Months in French Oak (40% New, 60% Used)",
      ph: "3.48",
      acidity: "6.3 g/L",
    },
    pairings: [
      "Pan-roasted duck breast with cherry sauce",
      "Roasted pheasant with herbs",
      "Chanterelle mushroom pasta",
    ],
    servingTemp: "55-60°F (13-15°C)",
    isReserve: true,
    isLibrary: true,
  },
];
