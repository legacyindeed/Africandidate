// Mobile carrier data with regional sentiment
export const carriers = [
  {
    name: "T-Mobile",
    priceTier: "Mid-Range",
    monthlyCost: 50,
    bestFor: "Best for Urban Areas",
    logo: "https://www.t-mobile.com/content/dam/t-mobile/ntm/branding/logos/corporate/tmo-logo-v4.svg",
    regions: {
      Northeast: {
        coverageRating: 4.5,
        sentiment: "T-Mobile performs excellently across the Northeast corridor, especially in NYC, Boston, and DC. Users report strong 5G coverage in downtown areas with fast speeds. Some complaints about signal drops in older buildings with thick walls, and rural Connecticut and Vermont can be spotty."
      },
      Southeast: {
        coverageRating: 4.2,
        sentiment: "Good coverage in Atlanta, Miami, and Charlotte metro areas. Users praise the 5G expansion in Florida cities. Rural areas in Georgia, Alabama, and Mississippi have noticeable gaps. Beach areas generally have solid signal."
      },
      Midwest: {
        coverageRating: 4.0,
        sentiment: "Strong in Chicago, Minneapolis, and Detroit urban centers. Coverage thins out quickly in rural Illinois, Iowa, and Wisconsin farmland. Users note that interstate highways generally maintain decent signal, but back roads can be problematic."
      },
      Southwest: {
        coverageRating: 4.3,
        sentiment: "Excellent in Texas metros — Houston, Dallas, Austin, and San Antonio all have strong T-Mobile coverage. Phoenix and Las Vegas are also well-served. Desert and mountain areas between cities can lose signal entirely."
      },
      "West Coast": {
        coverageRating: 4.6,
        sentiment: "Outstanding in California metros — LA, SF, San Diego, and San Jose have excellent 5G. Seattle and Portland also report great coverage. Some dead zones in the Central Valley and mountainous areas of Oregon and Washington."
      },
      Mountain: {
        coverageRating: 3.8,
        sentiment: "Denver and Salt Lake City have good coverage, but this is T-Mobile's weakest region. Mountain roads, ski resorts, and national parks often have no signal. Users recommend having a backup plan if you spend time outdoors."
      }
    }
  },
  {
    name: "AT&T",
    priceTier: "Premium",
    monthlyCost: 65,
    bestFor: "Best Overall Coverage",
    logo: "https://images.seeklogo.com/logo-png/45/1/att-saul-bass-globe-logo-png_seeklogo-456203.png",
    regions: {
      Northeast: {
        coverageRating: 4.6,
        sentiment: "AT&T has historically strong coverage in the Northeast. Excellent in NYC, Boston, Philly, and DC. Users appreciate reliability in suburban areas where T-Mobile can struggle. Good indoor penetration in office buildings."
      },
      Southeast: {
        coverageRating: 4.5,
        sentiment: "Very strong throughout the Southeast — AT&T has deep roots in this region. Atlanta, Miami, and Charlotte users report consistent service. Rural coverage is better than T-Mobile. Florida coverage is particularly good."
      },
      Midwest: {
        coverageRating: 4.3,
        sentiment: "Solid coverage in Chicago and other major cities. AT&T performs better than T-Mobile in rural Midwest areas — farmers and travelers often prefer it. Some users note higher prices don't always justify the coverage difference in cities."
      },
      Southwest: {
        coverageRating: 4.4,
        sentiment: "Good Texas coverage with strong rural performance. Phoenix and Las Vegas are reliable. Desert highway coverage is better than T-Mobile. Users note AT&T works better in remote Arizona and New Mexico areas."
      },
      "West Coast": {
        coverageRating: 4.3,
        sentiment: "Reliable in California metros though some users feel T-Mobile's 5G is faster in cities. Better coverage in California's Central Valley and rural Oregon. Some complaints about pricing not matching value in urban areas."
      },
      Mountain: {
        coverageRating: 4.2,
        sentiment: "AT&T is often the better choice in the Mountain region. Denver, SLC, and Boise have good coverage. Better performance on ski slopes and in national parks than T-Mobile, though still imperfect. Interstate highways are reliable."
      }
    }
  },
  {
    name: "Verizon",
    priceTier: "Premium",
    monthlyCost: 70,
    bestFor: "Best Rural Coverage",
    logo: "https://www.verizon.com/content/dam/verizon/global/v-logo.svg",
    regions: {
      Northeast: {
        coverageRating: 4.7,
        sentiment: "Verizon dominates the Northeast with the most consistent coverage. Users report the fewest dropped calls and dead zones. Excellent in NYC subways (with Transit Wireless), Boston T, and DC Metro. Premium pricing, but many feel it's worth it."
      },
      Southeast: {
        coverageRating: 4.6,
        sentiment: "Outstanding coverage throughout the Southeast, including rural areas where others struggle. Florida users particularly praise Verizon for beach and Everglades coverage. Slightly slower 5G rollout than T-Mobile in cities, but more reliable overall."
      },
      Midwest: {
        coverageRating: 4.5,
        sentiment: "The gold standard for Midwest coverage. Farmers, truckers, and rural residents swear by Verizon. Chicago coverage is excellent. Users note you pay a premium but get signal where AT&T and T-Mobile fail."
      },
      Southwest: {
        coverageRating: 4.5,
        sentiment: "Very strong across Texas and Arizona. Desert coverage between cities is the best among carriers. Las Vegas and Phoenix are excellent. Users note Verizon is often the only option with signal in remote Big Bend and Grand Canyon areas."
      },
      "West Coast": {
        coverageRating: 4.4,
        sentiment: "Reliable throughout California, Washington, and Oregon. 5G speeds in cities sometimes lag T-Mobile, but coverage consistency is better. Users praise coverage on Highway 1 and in Yosemite/Sequoia where others fail."
      },
      Mountain: {
        coverageRating: 4.4,
        sentiment: "The best carrier for the Mountain region, though still not perfect. Ski resorts, hiking trails, and national parks have better Verizon coverage than competitors. Denver and SLC are excellent. Highest price but most reliable for outdoor enthusiasts."
      }
    }
  },
  {
    name: "Mint Mobile",
    priceTier: "Budget",
    monthlyCost: 30,
    bestFor: "Best Value for Students",
    logo: "https://cdn.brandfetch.io/idinhy3-vU/theme/dark/logo.svg",
    regions: {
      Northeast: {
        coverageRating: 4.4,
        sentiment: "Mint uses T-Mobile's network, so coverage mirrors T-Mobile in the Northeast. Users love the price — often half of what major carriers charge. Some report deprioritization during peak hours in very congested areas like Times Square."
      },
      Southeast: {
        coverageRating: 4.1,
        sentiment: "Same T-Mobile network coverage in the Southeast. Atlanta, Miami, and Charlotte work well. Budget-conscious students appreciate the savings. Rural coverage has the same gaps as T-Mobile. Customer service is online-only."
      },
      Midwest: {
        coverageRating: 3.9,
        sentiment: "Good value in Chicago and Minneapolis metros. Rural Midwest coverage inherits T-Mobile's weaknesses. Users recommend Mint for students who stay in cities. Prepaid model means no credit check — great for international students."
      },
      Southwest: {
        coverageRating: 4.2,
        sentiment: "Excellent value for Texas metros. Works great in Houston, Dallas, Austin. Same T-Mobile coverage means similar desert dead zones. Students love the 3-month and annual prepaid plans for predictable budgeting."
      },
      "West Coast": {
        coverageRating: 4.5,
        sentiment: "Fantastic value for California students. Same great T-Mobile network at a fraction of the price. LA, SF, and Seattle all work well. Some data speed throttling reported during congested periods, but most users don't notice."
      },
      Mountain: {
        coverageRating: 3.7,
        sentiment: "Inherits T-Mobile's Mountain region weaknesses. Denver and SLC are fine, but outdoor enthusiasts may want a backup. Great for students who primarily stay in urban areas. The price can't be beat for budget-conscious MBA students."
      }
    }
  },
  {
    name: "Visible",
    priceTier: "Budget",
    monthlyCost: 25,
    bestFor: "Best Unlimited Budget Plan",
    logo: "https://www.visible.com/content/dam/visible-aem/header/visible-by-verizon-blue-logo.svg",
    features: ["Unlimited data on Verizon", "No contracts", "$25/month flat"],
    regions: {
      Northeast: {
        coverageRating: 4.5,
        sentiment: "Visible runs on Verizon's network, giving budget users access to premium coverage. NYC, Boston, and DC users report excellent service. Some deprioritization during peak hours, but less noticeable than Mint. Party Pay feature lets you get $25/month unlimited."
      },
      Southeast: {
        coverageRating: 4.4,
        sentiment: "Verizon's network means strong Southeast coverage at a budget price. Users in Atlanta, Miami, and Charlotte praise the value. Rural Florida and Georgia work better than T-Mobile-based options. Truly unlimited data with no caps."
      },
      Midwest: {
        coverageRating: 4.3,
        sentiment: "Great option for Midwest students wanting Verizon coverage without Verizon prices. Chicago works excellently. Rural areas have better coverage than Mint. Some users note slower speeds during peak hours in downtown areas."
      },
      Southwest: {
        coverageRating: 4.3,
        sentiment: "Solid coverage across Texas, Arizona, and Nevada. Desert highways work better than Mint. Phoenix, Las Vegas, and Texas metros are reliable. Great for road trips. $25 unlimited is hard to beat for the coverage you get."
      },
      "West Coast": {
        coverageRating: 4.2,
        sentiment: "Good coverage in California metros. Verizon's network provides reliability Mint can't match in some areas. Some users report speed throttling in congested San Francisco, but overall experience is positive for the price."
      },
      Mountain: {
        coverageRating: 4.2,
        sentiment: "The best budget option for the Mountain region thanks to Verizon's network. Ski resorts and hiking areas have better coverage than Mint. Denver and SLC are great. Outdoor enthusiasts on a budget should choose Visible over Mint."
      }
    }
  },
  {
    name: "Google Fi",
    priceTier: "Mid-Range",
    monthlyCost: 50,
    bestFor: "Best for International Students",
    logo: "https://images.seeklogo.com/logo-png/48/1/google-fi-wireless-logo-png_seeklogo-483598.png",
    features: ["Free international data in 200+ countries", "No contracts", "Uses T-Mobile network"],
    regions: {
      Northeast: {
        coverageRating: 4.4,
        sentiment: "Google Fi uses T-Mobile's network in the Northeast. Excellent coverage in NYC, Boston, and DC. The real value is for international students — free data in 200+ countries means you can use your phone when visiting home. Some deprioritization possible during peak hours."
      },
      Southeast: {
        coverageRating: 4.1,
        sentiment: "Good coverage in Atlanta, Miami, and Charlotte metro areas using T-Mobile's network. International students love the seamless connectivity when traveling abroad. Rural Southeast has the same gaps as T-Mobile. Great for students who travel home frequently."
      },
      Midwest: {
        coverageRating: 3.9,
        sentiment: "Solid in Chicago, Minneapolis, and Detroit urban centers. Coverage thins in rural areas like T-Mobile. The international features make it ideal for students planning trips home or international internships. Flexible plan option if you use little data."
      },
      Southwest: {
        coverageRating: 4.2,
        sentiment: "Excellent in Texas metros and Phoenix. T-Mobile network provides good urban coverage. International students appreciate free texting to 50+ countries and data in 200+ destinations. Desert dead zones exist like other T-Mobile MVNOs."
      },
      "West Coast": {
        coverageRating: 4.5,
        sentiment: "Outstanding coverage in California metros — LA, SF, San Diego. Google Fi shines for international students at West Coast schools who travel frequently. Premium data speeds and the international features justify the mid-range pricing."
      },
      Mountain: {
        coverageRating: 3.7,
        sentiment: "Denver and Salt Lake City have good coverage. Mountain and outdoor areas inherit T-Mobile's weaknesses. Best for urban-focused students. The international benefits are the main draw — if you don't travel abroad, Mint offers better value."
      }
    }
  },
  {
    name: "Boost Mobile",
    priceTier: "Budget",
    monthlyCost: 25,
    bestFor: "Best Budget with AT&T Network",
    logo: "https://s7d1.scene7.com/is/content/dish/Boost%20_%20Mobile?fmt=png-alpha",
    features: ["Uses AT&T network", "Price locked forever", "30-day money back guarantee"],
    regions: {
      Northeast: {
        coverageRating: 4.5,
        sentiment: "Boost Mobile now primarily uses AT&T's network, giving excellent coverage in NYC, Boston, and DC. At $25/month unlimited, it's a steal for the coverage quality. The 30GB premium data cap is generous for most students. Price is locked forever with autopay."
      },
      Southeast: {
        coverageRating: 4.4,
        sentiment: "Strong AT&T network coverage throughout the Southeast. Atlanta, Miami, and Charlotte all have excellent service. Rural areas benefit from AT&T's broader footprint compared to T-Mobile MVNOs. Great value for budget-conscious students."
      },
      Midwest: {
        coverageRating: 4.2,
        sentiment: "Good coverage in Chicago and major Midwest cities via AT&T. Rural coverage is better than T-Mobile-based options like Mint. The $25 price point makes it very competitive. Some speed throttling after 30GB but unlimited data overall."
      },
      Southwest: {
        coverageRating: 4.3,
        sentiment: "Solid AT&T coverage across Texas, Arizona, and Nevada. Works well in Houston, Dallas, Austin, and Phoenix. Desert highways have better coverage than T-Mobile MVNOs. Great budget option for Texas MBA students."
      },
      "West Coast": {
        coverageRating: 4.2,
        sentiment: "Good coverage in California metros using AT&T's network. LA, SF, and San Diego work well. 5G available in major cities. Slightly less urban speed than T-Mobile in some areas but more consistent overall coverage."
      },
      Mountain: {
        coverageRating: 4.1,
        sentiment: "AT&T's network gives Boost better Mountain region coverage than T-Mobile MVNOs. Denver and SLC are great. Outdoor areas like ski resorts have decent coverage. Best budget option for students who venture outside cities."
      }
    }
  },
  {
    name: "Lyca Mobile",
    priceTier: "Budget",
    monthlyCost: 19,
    bestFor: "Cheapest International Calling",
    logo: "https://cms-assets.ldsvcplatform.com/IRE/s3fs-public/2023-09/home_logo.png",
    features: ["Unlimited calls to 100+ countries", "Plans from $19/mo", "No contracts"],
    regions: {
      Northeast: {
        coverageRating: 4.3,
        sentiment: "Lyca Mobile uses T-Mobile's network (transitioning to AT&T). Good coverage in NYC, Boston, and DC. The main draw is the ultra-cheap international calling — unlimited calls to 100+ countries. Perfect for students who call family abroad frequently."
      },
      Southeast: {
        coverageRating: 4.0,
        sentiment: "Decent coverage in Atlanta, Miami, and Charlotte. Same T-Mobile network strengths and weaknesses. At $19/month with unlimited international calls, it's unbeatable for students who call home often. Rural coverage has gaps."
      },
      Midwest: {
        coverageRating: 3.8,
        sentiment: "Works well in Chicago and Minneapolis. Rural Midwest coverage is limited like other T-Mobile MVNOs. Best for urban students who prioritize international calling over coverage. The price can't be beat for what you get."
      },
      Southwest: {
        coverageRating: 4.0,
        sentiment: "Good in Texas metros and Phoenix. International calling to African and Asian countries is the main value proposition. Desert areas have coverage gaps. Great for budget students who need to stay connected with family abroad."
      },
      "West Coast": {
        coverageRating: 4.3,
        sentiment: "Strong coverage in California metros. LA, SF, and San Diego work well. Perfect for international students at West Coast schools who need cheap calls home. Data speeds may be deprioritized during congestion."
      },
      Mountain: {
        coverageRating: 3.6,
        sentiment: "Denver and SLC have decent coverage. Mountain and rural areas struggle like other T-Mobile MVNOs. Choose Lyca if international calling is your priority. For coverage, Boost or Visible are better budget options in this region."
      }
    }
  }
];

// Price tier colors
export const priceTierColors = {
  'Budget': 'badge-affordable',
  'Mid-Range': 'badge-moderate',
  'Premium': 'badge-expensive'
};
