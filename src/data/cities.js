// MBA School Cities - Cost of living data for Top 30 MBA program locations
// Rent data based on 2BR apartments near campus (2025-2026 market data)
// Cost Index: "Expensive" (total >$4,000/mo), "Moderate" ($2,500-$4,000), "Affordable" (<$2,500)

export const cities = [
  // ==================== NORTHEAST ====================

  // Pennsylvania - Wharton (UPenn)
  {
    name: "Philadelphia",
    state: "Pennsylvania",
    region: "Northeast",
    costIndex: "Moderate",
    school: "Wharton (UPenn)",
    costs: { rent: 2100, groceries: 520, transportation: 110, utilities: 180, diningOut: 350, mobilePlan: 45, healthInsurance: 300 }
  },

  // Pennsylvania - Tepper (CMU)
  {
    name: "Pittsburgh",
    state: "Pennsylvania",
    region: "Northeast",
    costIndex: "Moderate",
    school: "Tepper (CMU)",
    costs: { rent: 1650, groceries: 420, transportation: 110, utilities: 160, diningOut: 260, mobilePlan: 45, healthInsurance: 280 }
  },

  // Massachusetts - Harvard Business School
  {
    name: "Boston",
    state: "Massachusetts",
    region: "Northeast",
    costIndex: "Expensive",
    school: "Harvard Business School",
    costs: { rent: 3400, groceries: 600, transportation: 120, utilities: 200, diningOut: 450, mobilePlan: 50, healthInsurance: 340 }
  },

  // Massachusetts - MIT Sloan
  {
    name: "Cambridge",
    state: "Massachusetts",
    region: "Northeast",
    costIndex: "Expensive",
    school: "MIT Sloan",
    costs: { rent: 3600, groceries: 620, transportation: 110, utilities: 200, diningOut: 480, mobilePlan: 50, healthInsurance: 350 }
  },

  // Connecticut - Yale SOM
  {
    name: "New Haven",
    state: "Connecticut",
    region: "Northeast",
    costIndex: "Moderate",
    school: "Yale SOM",
    costs: { rent: 2000, groceries: 500, transportation: 110, utilities: 175, diningOut: 320, mobilePlan: 45, healthInsurance: 320 }
  },

  // New Hampshire - Tuck (Dartmouth)
  {
    name: "Hanover",
    state: "New Hampshire",
    region: "Northeast",
    costIndex: "Expensive",
    school: "Tuck (Dartmouth)",
    costs: { rent: 2600, groceries: 550, transportation: 115, utilities: 200, diningOut: 380, mobilePlan: 50, healthInsurance: 325 }
  },

  // New York - Columbia Business School & NYU Stern
  {
    name: "New York City",
    state: "New York",
    region: "Northeast",
    costIndex: "Expensive",
    school: "Columbia & NYU Stern",
    costs: { rent: 5500, groceries: 700, transportation: 130, utilities: 200, diningOut: 500, mobilePlan: 50, healthInsurance: 350 }
  },

  // New York - Johnson (Cornell)
  {
    name: "Ithaca",
    state: "New York",
    region: "Northeast",
    costIndex: "Moderate",
    school: "Johnson (Cornell)",
    costs: { rent: 1900, groceries: 480, transportation: 100, utilities: 180, diningOut: 300, mobilePlan: 45, healthInsurance: 300 }
  },

  // District of Columbia - McDonough (Georgetown)
  {
    name: "Washington",
    state: "District of Columbia",
    region: "Northeast",
    costIndex: "Expensive",
    school: "McDonough (Georgetown)",
    costs: { rent: 2800, groceries: 580, transportation: 140, utilities: 180, diningOut: 420, mobilePlan: 50, healthInsurance: 330 }
  },

  // ==================== SOUTHEAST ====================

  // North Carolina - Fuqua (Duke)
  {
    name: "Durham",
    state: "North Carolina",
    region: "Southeast",
    costIndex: "Moderate",
    school: "Fuqua (Duke)",
    costs: { rent: 1750, groceries: 440, transportation: 150, utilities: 150, diningOut: 280, mobilePlan: 45, healthInsurance: 275 }
  },

  // North Carolina - Kenan-Flagler (UNC)
  {
    name: "Chapel Hill",
    state: "North Carolina",
    region: "Southeast",
    costIndex: "Moderate",
    school: "Kenan-Flagler (UNC)",
    costs: { rent: 1850, groceries: 460, transportation: 140, utilities: 155, diningOut: 300, mobilePlan: 45, healthInsurance: 278 }
  },

  // Virginia - Darden (UVA)
  {
    name: "Charlottesville",
    state: "Virginia",
    region: "Southeast",
    costIndex: "Moderate",
    school: "Darden (UVA)",
    costs: { rent: 1800, groceries: 460, transportation: 130, utilities: 160, diningOut: 300, mobilePlan: 45, healthInsurance: 282 }
  },

  // Georgia - Goizueta (Emory) & Scheller (Georgia Tech)
  {
    name: "Atlanta",
    state: "Georgia",
    region: "Southeast",
    costIndex: "Moderate",
    school: "Goizueta (Emory) & Scheller (Georgia Tech)",
    costs: { rent: 1900, groceries: 480, transportation: 180, utilities: 175, diningOut: 350, mobilePlan: 45, healthInsurance: 290 }
  },

  // Tennessee - Owen (Vanderbilt)
  {
    name: "Nashville",
    state: "Tennessee",
    region: "Southeast",
    costIndex: "Moderate",
    school: "Owen (Vanderbilt)",
    costs: { rent: 2000, groceries: 460, transportation: 170, utilities: 170, diningOut: 340, mobilePlan: 45, healthInsurance: 285 }
  },

  // ==================== MIDWEST ====================

  // Illinois - Booth (UChicago)
  {
    name: "Chicago",
    state: "Illinois",
    region: "Midwest",
    costIndex: "Moderate",
    school: "Booth (UChicago)",
    costs: { rent: 2200, groceries: 520, transportation: 130, utilities: 160, diningOut: 400, mobilePlan: 50, healthInsurance: 310 }
  },

  // Illinois - Kellogg (Northwestern)
  {
    name: "Evanston",
    state: "Illinois",
    region: "Midwest",
    costIndex: "Expensive",
    school: "Kellogg (Northwestern)",
    costs: { rent: 2500, groceries: 560, transportation: 120, utilities: 165, diningOut: 380, mobilePlan: 50, healthInsurance: 320 }
  },

  // Michigan - Ross (UMich)
  {
    name: "Ann Arbor",
    state: "Michigan",
    region: "Midwest",
    costIndex: "Moderate",
    school: "Ross (UMich)",
    costs: { rent: 2100, groceries: 470, transportation: 110, utilities: 170, diningOut: 320, mobilePlan: 45, healthInsurance: 295 }
  },

  // Indiana - Kelley (Indiana University)
  {
    name: "Bloomington",
    state: "Indiana",
    region: "Midwest",
    costIndex: "Affordable",
    school: "Kelley (Indiana)",
    costs: { rent: 1300, groceries: 390, transportation: 110, utilities: 150, diningOut: 250, mobilePlan: 40, healthInsurance: 265 }
  },

  // Indiana - Mendoza (Notre Dame)
  {
    name: "South Bend",
    state: "Indiana",
    region: "Midwest",
    costIndex: "Affordable",
    school: "Mendoza (Notre Dame)",
    costs: { rent: 1200, groceries: 375, transportation: 125, utilities: 150, diningOut: 220, mobilePlan: 40, healthInsurance: 262 }
  },

  // Missouri - Olin (WUSTL)
  {
    name: "St. Louis",
    state: "Missouri",
    region: "Midwest",
    costIndex: "Affordable",
    school: "Olin (WUSTL)",
    costs: { rent: 1400, groceries: 380, transportation: 130, utilities: 150, diningOut: 250, mobilePlan: 45, healthInsurance: 265 }
  },

  // ==================== SOUTHWEST ====================

  // Texas - McCombs (UT Austin)
  {
    name: "Austin",
    state: "Texas",
    region: "Southwest",
    costIndex: "Moderate",
    school: "McCombs (UT Austin)",
    costs: { rent: 1900, groceries: 480, transportation: 170, utilities: 190, diningOut: 380, mobilePlan: 50, healthInsurance: 300 }
  },

  // Texas - Jones (Rice)
  {
    name: "Houston",
    state: "Texas",
    region: "Southwest",
    costIndex: "Moderate",
    school: "Jones (Rice)",
    costs: { rent: 1600, groceries: 450, transportation: 180, utilities: 190, diningOut: 340, mobilePlan: 45, healthInsurance: 290 }
  },

  // Texas - Mays (Texas A&M)
  {
    name: "College Station",
    state: "Texas",
    region: "Southwest",
    costIndex: "Affordable",
    school: "Mays (Texas A&M)",
    costs: { rent: 1300, groceries: 400, transportation: 140, utilities: 175, diningOut: 260, mobilePlan: 45, healthInsurance: 275 }
  },

  // ==================== WEST ====================

  // California - Stanford GSB
  {
    name: "Stanford",
    state: "California",
    region: "West",
    costIndex: "Expensive",
    school: "Stanford GSB",
    costs: { rent: 4200, groceries: 680, transportation: 150, utilities: 180, diningOut: 550, mobilePlan: 55, healthInsurance: 375 }
  },

  // California - Haas (UC Berkeley)
  {
    name: "Berkeley",
    state: "California",
    region: "West",
    costIndex: "Expensive",
    school: "Haas (UC Berkeley)",
    costs: { rent: 3400, groceries: 610, transportation: 120, utilities: 170, diningOut: 480, mobilePlan: 55, healthInsurance: 355 }
  },

  // California - Anderson (UCLA) & Marshall (USC)
  {
    name: "Los Angeles",
    state: "California",
    region: "West",
    costIndex: "Expensive",
    school: "Anderson (UCLA) & Marshall (USC)",
    costs: { rent: 3500, groceries: 580, transportation: 200, utilities: 175, diningOut: 450, mobilePlan: 50, healthInsurance: 340 }
  },

  // Washington - Foster (UW)
  {
    name: "Seattle",
    state: "Washington",
    region: "West",
    costIndex: "Expensive",
    school: "Foster (UW)",
    costs: { rent: 2700, groceries: 550, transportation: 140, utilities: 160, diningOut: 420, mobilePlan: 50, healthInsurance: 320 }
  }
];

// Helper function to get region from city
export const getRegionFromCity = (cityName) => {
  const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
  return city?.region || 'Unknown';
};

// Helper function to get school from city
export const getSchoolFromCity = (cityName) => {
  const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
  return city?.school || null;
};

// Map regions for carrier data - all 50 states + DC
export const regionMap = {
  // Northeast
  'Connecticut': 'Northeast',
  'Delaware': 'Northeast',
  'Maine': 'Northeast',
  'Maryland': 'Northeast',
  'Massachusetts': 'Northeast',
  'New Hampshire': 'Northeast',
  'New Jersey': 'Northeast',
  'New York': 'Northeast',
  'Pennsylvania': 'Northeast',
  'Rhode Island': 'Northeast',
  'Vermont': 'Northeast',
  'District of Columbia': 'Northeast',

  // Southeast
  'Alabama': 'Southeast',
  'Arkansas': 'Southeast',
  'Florida': 'Southeast',
  'Georgia': 'Southeast',
  'Kentucky': 'Southeast',
  'Louisiana': 'Southeast',
  'Mississippi': 'Southeast',
  'North Carolina': 'Southeast',
  'South Carolina': 'Southeast',
  'Tennessee': 'Southeast',
  'Virginia': 'Southeast',
  'West Virginia': 'Southeast',

  // Midwest
  'Illinois': 'Midwest',
  'Indiana': 'Midwest',
  'Iowa': 'Midwest',
  'Kansas': 'Midwest',
  'Michigan': 'Midwest',
  'Minnesota': 'Midwest',
  'Missouri': 'Midwest',
  'Nebraska': 'Midwest',
  'North Dakota': 'Midwest',
  'Ohio': 'Midwest',
  'South Dakota': 'Midwest',
  'Wisconsin': 'Midwest',

  // Southwest
  'Arizona': 'Southwest',
  'New Mexico': 'Southwest',
  'Oklahoma': 'Southwest',
  'Texas': 'Southwest',

  // West
  'Alaska': 'West',
  'California': 'West',
  'Colorado': 'West',
  'Hawaii': 'West',
  'Idaho': 'West',
  'Montana': 'West',
  'Nevada': 'West',
  'Oregon': 'West',
  'Utah': 'West',
  'Washington': 'West',
  'Wyoming': 'West',
};
