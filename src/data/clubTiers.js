export const clubTiers = [
  {
    id: "cellar-club",
    name: "Cellar Club",
    price: "$89",
    frequency: "quarterly",
    bottles: 3,
    description:
      "A curated introduction to the Solvane catalog, delivering estate-grown releases directly to your door.",
    perks: [
      "3 bottles of estate wines per shipment (10% discount included)",
      "Complimentary classic flights for up to 2 guests per visit (annual limit: 4 flights)",
      "10% savings on all additional wine purchases",
      "Early access to new vintage releases",
    ],
    shippingSchedule: "March, June, September, November",
  },
  {
    id: "estate-club",
    name: "Estate Club",
    price: "$159",
    frequency: "quarterly",
    bottles: 6,
    description:
      "Our most popular tier, offering a wider selection including small-lot allocations and reserve selections.",
    perks: [
      "6 bottles of estate & reserve wines per shipment (15% discount included)",
      "Complimentary reserve flights for up to 4 guests per visit (annual limit: 6 flights)",
      "15% savings on all additional wine purchases",
      "Guaranteed allocations of limited Reserve Series",
      "Invitation to our annual Harvest Celebration dinner",
    ],
    shippingSchedule: "March, June, September, November",
    highlighted: true,
  },
  {
    id: "reserve-club",
    name: "Reserve Club",
    price: "$299",
    frequency: "quarterly",
    bottles: 6,
    description:
      "The pinnacle of Solvane membership. Dedicated to library releases, magnums, and single-barrel selections.",
    perks: [
      "6 bottles of strictly reserve-tier & library-release wines (20% discount included)",
      "Unlimited private estate tours & tastings for up to 6 guests",
      "20% savings on all additional wine purchases",
      "First priority on single-barrel allocations and library catalog sales",
      "Complimentary stay at the Solvane Estate Guest Cottage (1 night annually)",
      "Direct contact line to our Head Sommelier for cellar advice",
    ],
    shippingSchedule: "March, June, September, November",
  },
];
