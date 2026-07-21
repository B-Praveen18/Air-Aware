// Illustrative figures for the report. Sources noted in-page for transparency.
// For any time-critical reporting, these should be refreshed against WHO / IQAir.

export const pollutants = [
  {
    symbol: "PM2.5",
    name: "Fine Particulate Matter",
    size: "≤ 2.5 µm",
    note: "Small enough to enter the bloodstream through the lungs.",
    sources: ["Combustion engines", "Wildfires", "Industry", "Cookstoves"],
    color: "var(--color-smog)",
  },
  {
    symbol: "NO₂",
    name: "Nitrogen Dioxide",
    size: "gas",
    note: "A sharp-smelling gas that inflames the airways.",
    sources: ["Diesel vehicles", "Power plants"],
    color: "var(--color-smog-deep)",
  },
  {
    symbol: "O₃",
    name: "Ground-level Ozone",
    size: "gas",
    note: "Not emitted directly — formed when sunlight cooks other pollutants.",
    sources: ["Traffic + sunlight", "Industrial solvents"],
    color: "var(--color-haze)",
  },
  {
    symbol: "SO₂",
    name: "Sulfur Dioxide",
    size: "gas",
    note: "Contributes to acid rain and respiratory distress.",
    sources: ["Coal & oil burning", "Smelters"],
    color: "var(--color-sky)",
  },
];

// Illustrative AQI trend data for the chart
export const aqiTrend = [
  { month: "Jan", delhi: 312, beijing: 145, london: 42, mumbai: 168 },
  { month: "Feb", delhi: 298, beijing: 138, london: 38, mumbai: 152 },
  { month: "Mar", delhi: 241, beijing: 112, london: 36, mumbai: 138 },
  { month: "Apr", delhi: 186, beijing: 98, london: 34, mumbai: 124 },
  { month: "May", delhi: 158, beijing: 88, london: 32, mumbai: 118 },
  { month: "Jun", delhi: 142, beijing: 82, london: 30, mumbai: 142 },
  { month: "Jul", delhi: 128, beijing: 76, london: 28, mumbai: 156 },
  { month: "Aug", delhi: 134, beijing: 84, london: 30, mumbai: 164 },
  { month: "Sep", delhi: 172, beijing: 96, london: 33, mumbai: 148 },
  { month: "Oct", delhi: 248, beijing: 118, london: 36, mumbai: 142 },
  { month: "Nov", delhi: 346, beijing: 162, london: 44, mumbai: 158 },
  { month: "Dec", delhi: 364, beijing: 178, london: 48, mumbai: 174 },
];

export const aqiBands = [
  { label: "Good", range: "0–50", color: "#5c7a3e", meaning: "Air quality is satisfactory." },
  { label: "Moderate", range: "51–100", color: "#c4a572", meaning: "Acceptable — some risk for very sensitive groups." },
  { label: "Unhealthy for Sensitive", range: "101–150", color: "#d4843a", meaning: "Children, elderly, asthmatics should limit exposure." },
  { label: "Unhealthy", range: "151–200", color: "#d4512a", meaning: "Everyone may begin to experience health effects." },
  { label: "Very Unhealthy", range: "201–300", color: "#a8391a", meaning: "Health alert: significant risk to the general population." },
  { label: "Hazardous", range: "301+", color: "#4a1a10", meaning: "Emergency conditions. Entire population affected." },
];

export const impacts = [
  {
    figure: "7M",
    unit: "deaths / year",
    caption: "linked globally to ambient and household air pollution, per WHO estimates.",
  },
  {
    figure: "99%",
    unit: "of people",
    caption: "breathe air that exceeds WHO guideline limits on at least one pollutant.",
  },
  {
    figure: "−2.2",
    unit: "years of life",
    caption: "on average, lost to particulate pollution worldwide (AQLI, University of Chicago).",
  },
  {
    figure: "1 in 8",
    unit: "global deaths",
    caption: "attributable to the combined effects of ambient and household air pollution.",
  },
];

export const actions = [
  {
    title: "At home",
    items: [
      "Ventilate when cooking — even electric stoves release fine particles.",
      "Switch to HEPA filtration in bedrooms if you live in an AQI hotspot.",
      "Choose induction or electric over gas when renovating kitchens.",
    ],
  },
  {
    title: "On the move",
    items: [
      "Walk, cycle, or take transit for trips under 3 km when possible.",
      "Combine errands — cold-starts emit disproportionately.",
      "If you drive, keep tyres properly inflated; brake-and-tyre wear is PM2.5.",
    ],
  },
  {
    title: "As a citizen",
    items: [
      "Check your municipality's clean-air plan — ask what it funds.",
      "Support urban tree cover and low-emission zones in your area.",
      "Track your local AQI; share it with neighbours who don't.",
    ],
  },
];
