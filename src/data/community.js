// Community directory data - African student associations and resources by city

const communityData = {
  "New York City": [
    {
      id: "nyc-1",
      name: "African Students Association – Columbia University",
      category: "Student Associations",
      description: "One of the oldest and most active African student organizations in NYC. They host cultural nights, academic workshops, and connect students with alumni across the continent.",
      location: "Columbia University, Morningside Heights",
      website: "https://columbia.edu/asa",
      contact: "asa.columbia@columbia.edu"
    },
    {
      id: "nyc-2",
      name: "NYU African Students Union",
      category: "Student Associations",
      description: "A vibrant community of African students at NYU promoting cultural awareness, academic excellence, and social networking. Known for their annual Africa Week celebration.",
      location: "New York University, Greenwich Village",
      website: "https://nyu.edu/asu",
      contact: "asu@nyu.edu"
    },
    {
      id: "nyc-3",
      name: "African Professionals Network NYC",
      category: "Career & Networking",
      description: "A networking hub for African professionals and students in the greater NYC area. Monthly meetups, mentorship programs, and career panels with industry leaders.",
      location: "Various locations across Manhattan",
      website: "https://apn-nyc.org",
      contact: "info@apn-nyc.org"
    },
    {
      id: "nyc-4",
      name: "Harlem African Restaurant Row",
      category: "Food & Lifestyle",
      description: "A cluster of West African restaurants along 116th Street in Harlem. Great spots for jollof rice, egusi soup, and suya. The unofficial gathering place for African students craving home-cooked meals.",
      location: "116th Street, Harlem",
      website: null,
      contact: null
    },
    {
      id: "nyc-5",
      name: "African Dance & Drum Collective",
      category: "Cultural & Social",
      description: "Weekly African dance and drumming classes open to all skill levels. A great way to stay connected to your culture and meet fellow Africans in a fun, energetic environment.",
      location: "Brooklyn Cultural Center",
      website: "https://africandancenyc.com",
      contact: "dance@africandancenyc.com"
    },
    {
      id: "nyc-6",
      name: "Mama Africa Grocery",
      category: "Food & Lifestyle",
      description: "The go-to African grocery store in the Bronx. Stocks ingredients from across the continent — palm oil, fufu flour, berbere spice, and more. Also carries African hair products.",
      location: "Bronx, NY",
      website: null,
      contact: null
    }
  ],

  "Boston": [
    {
      id: "bos-1",
      name: "Harvard African Students Association",
      category: "Student Associations",
      description: "The premier African student organization at Harvard. Hosts the annual Africa Business Conference and numerous cultural events throughout the academic year.",
      location: "Harvard University, Cambridge",
      website: "https://hasa.harvard.edu",
      contact: "hasa@harvard.edu"
    },
    {
      id: "bos-2",
      name: "MIT Africa Innovate",
      category: "Student Associations",
      description: "An MIT student group focused on African innovation and entrepreneurship. Runs startup incubator programs and connects students with Africa-focused venture capital.",
      location: "MIT, Cambridge",
      website: "https://africainnovate.mit.edu",
      contact: "africa-innovate@mit.edu"
    },
    {
      id: "bos-3",
      name: "Boston African Festival Committee",
      category: "Cultural & Social",
      description: "The organizing body behind the annual Boston African Festival. Volunteers are always welcome, and it's a fantastic way to connect with the broader African community in Boston.",
      location: "Various locations",
      website: "https://bostonafricanfestival.org",
      contact: "info@bostonafricanfestival.org"
    },
    {
      id: "bos-4",
      name: "African Bridge Network",
      category: "Career & Networking",
      description: "A nonprofit helping skilled African immigrants and students transition into the US job market. Offers resume workshops, interview prep, and networking events.",
      location: "Downtown Boston",
      website: "https://africanbn.org",
      contact: "support@africanbn.org"
    },
    {
      id: "bos-5",
      name: "Fasika Ethiopian Restaurant",
      category: "Food & Lifestyle",
      description: "One of Boston's best Ethiopian restaurants. Popular with African students for its authentic injera and doro wat. Great for group dinners and celebrations.",
      location: "South End, Boston",
      website: "https://fasikaboston.com",
      contact: null
    }
  ],

  "Chicago": [
    {
      id: "chi-1",
      name: "University of Chicago African Students Association",
      category: "Student Associations",
      description: "A tight-knit community of African students at UChicago. Known for their mentorship programs pairing new students with upperclassmen and alumni.",
      location: "University of Chicago, Hyde Park",
      website: "https://uchicago.edu/asa",
      contact: "asa@uchicago.edu"
    },
    {
      id: "chi-2",
      name: "Northwestern African Students Alliance",
      category: "Student Associations",
      description: "The umbrella organization for African student groups at Northwestern. Coordinates between country-specific groups and hosts pan-African events.",
      location: "Northwestern University, Evanston",
      website: "https://northwestern.edu/asa",
      contact: "african-alliance@northwestern.edu"
    },
    {
      id: "chi-3",
      name: "Chicago African Network",
      category: "Career & Networking",
      description: "A professional network for African immigrants and professionals in Chicagoland. Runs industry-specific meetups for tech, finance, healthcare, and more.",
      location: "Loop, Chicago",
      website: "https://chicagoafricannetwork.org",
      contact: "connect@chicagoafricannetwork.org"
    },
    {
      id: "chi-4",
      name: "African Festival of the Arts",
      category: "Cultural & Social",
      description: "The largest African cultural festival in the Midwest, held annually in Washington Park. Music, art, food, and community — a must-attend event.",
      location: "Washington Park, Chicago",
      website: "https://aihusa.org/festival",
      contact: null
    },
    {
      id: "chi-5",
      name: "Yassa African Restaurant",
      category: "Food & Lifestyle",
      description: "A beloved West African restaurant in Roscoe Village. The owner is known for making every guest feel at home. Try the thieboudienne.",
      location: "Roscoe Village, Chicago",
      website: null,
      contact: null
    }
  ],

  "Los Angeles": [
    {
      id: "la-1",
      name: "UCLA African Student Union",
      category: "Student Associations",
      description: "One of the largest African student organizations on the West Coast. Hosts the annual Afrikan Culture Night, a spectacular showcase of African talent.",
      location: "UCLA, Westwood",
      website: "https://ucla.edu/asu",
      contact: "asu@ucla.edu"
    },
    {
      id: "la-2",
      name: "USC African Students Organization",
      category: "Student Associations",
      description: "A dynamic community of African students at USC. Strong focus on community service and leadership development alongside cultural programming.",
      location: "USC, Downtown LA",
      website: "https://usc.edu/aso",
      contact: "aso@usc.edu"
    },
    {
      id: "la-3",
      name: "African Communities Public Health Coalition",
      category: "Career & Networking",
      description: "A nonprofit focused on health equity for African communities in LA. Great for public health and pre-med students looking for volunteer opportunities.",
      location: "Various LA locations",
      website: "https://acphc.org",
      contact: "info@acphc.org"
    },
    {
      id: "la-4",
      name: "Little Ethiopia Los Angeles",
      category: "Food & Lifestyle",
      description: "A stretch of Fairfax Avenue with Ethiopian restaurants, shops, and cultural spaces. The heart of LA's Ethiopian community and a great place to find familiar flavors.",
      location: "Fairfax District, LA",
      website: null,
      contact: null
    },
    {
      id: "la-5",
      name: "Pan African Film Festival",
      category: "Cultural & Social",
      description: "The largest Black film festival in the US, featuring films from across Africa and the diaspora. Held annually in February — a highlight of LA's cultural calendar.",
      location: "Baldwin Hills Crenshaw Plaza",
      website: "https://paff.org",
      contact: "info@paff.org"
    }
  ],

  "San Francisco": [
    {
      id: "sf-1",
      name: "Stanford African Students Association",
      category: "Student Associations",
      description: "A thriving community of African students at Stanford. Strong ties to the Bay Area tech ecosystem, with many alumni founding successful startups.",
      location: "Stanford University, Palo Alto",
      website: "https://stanford.edu/asa",
      contact: "asa@stanford.edu"
    },
    {
      id: "sf-2",
      name: "UC Berkeley African Students Association",
      category: "Student Associations",
      description: "One of the most politically active African student groups in the country. Known for advocacy work alongside cultural programming and community building.",
      location: "UC Berkeley",
      website: "https://callink.berkeley.edu/asa",
      contact: "asa@berkeley.edu"
    },
    {
      id: "sf-3",
      name: "Africa Tech SF",
      category: "Career & Networking",
      description: "A networking group for Africans in the Bay Area tech scene. Hosts monthly tech talks, startup pitches, and connects students with internship opportunities.",
      location: "South of Market, San Francisco",
      website: "https://africatechsf.com",
      contact: "hello@africatechsf.com"
    },
    {
      id: "sf-4",
      name: "Oakland African American Chamber of Commerce",
      category: "Career & Networking",
      description: "While broader than just African immigrants, this chamber is very welcoming to international students and offers mentorship and business resources.",
      location: "Oakland, CA",
      website: "https://oaacc.org",
      contact: "info@oaacc.org"
    },
    {
      id: "sf-5",
      name: "Cafe Ethiopia",
      category: "Food & Lifestyle",
      description: "A cozy Ethiopian cafe in Berkeley known for its authentic coffee ceremony. A perfect study spot and a taste of home.",
      location: "Telegraph Avenue, Berkeley",
      website: null,
      contact: null
    }
  ],

  "Houston": [
    {
      id: "hou-1",
      name: "Rice African Students Association",
      category: "Student Associations",
      description: "A close-knit community at Rice University. Known for their hospitality and strong alumni network in Houston's energy and healthcare sectors.",
      location: "Rice University, Houston",
      website: "https://rice.edu/asa",
      contact: "asa@rice.edu"
    },
    {
      id: "hou-2",
      name: "University of Houston African Student Organization",
      category: "Student Associations",
      description: "One of the largest African student groups in Texas. Very active in the Houston community and runs an annual African culture show.",
      location: "University of Houston",
      website: "https://uh.edu/aso",
      contact: "aso@uh.edu"
    },
    {
      id: "hou-3",
      name: "Nigerian Professionals Houston",
      category: "Career & Networking",
      description: "A professional network for Nigerian professionals in Houston, open to all Africans. Strong in energy, healthcare, and finance sectors.",
      location: "Galleria area, Houston",
      website: "https://nphhouston.org",
      contact: "info@nphhouston.org"
    },
    {
      id: "hou-4",
      name: "Houston African Market",
      category: "Food & Lifestyle",
      description: "A large African grocery store in southwest Houston. Stocks ingredients from Nigeria, Ghana, Ethiopia, and more. Also sells African movies and music.",
      location: "Southwest Houston",
      website: null,
      contact: null
    },
    {
      id: "hou-5",
      name: "Afrikafest Houston",
      category: "Cultural & Social",
      description: "An annual celebration of African culture in Houston featuring live music, dance performances, fashion, and food from across the continent.",
      location: "Miller Outdoor Theatre",
      website: "https://afrikafesthouston.com",
      contact: null
    }
  ],

  "Atlanta": [
    {
      id: "atl-1",
      name: "Emory African Students Association",
      category: "Student Associations",
      description: "A vibrant community at Emory with strong connections to Atlanta's healthcare and public health sectors. Runs mentorship and professional development programs.",
      location: "Emory University, Atlanta",
      website: "https://emory.edu/asa",
      contact: "asa@emory.edu"
    },
    {
      id: "atl-2",
      name: "Georgia Tech African Graduate Association",
      category: "Student Associations",
      description: "A graduate student organization at Georgia Tech connecting African engineers, scientists, and tech professionals. Strong industry connections.",
      location: "Georgia Tech, Midtown",
      website: "https://gatech.edu/aga",
      contact: "aga@gatech.edu"
    },
    {
      id: "atl-3",
      name: "African Business Roundtable Atlanta",
      category: "Career & Networking",
      description: "A professional network for African entrepreneurs and business leaders in Atlanta. Quarterly events, pitch competitions, and investor connections.",
      location: "Buckhead, Atlanta",
      website: "https://abratl.org",
      contact: "connect@abratl.org"
    },
    {
      id: "atl-4",
      name: "Atlanta African Dance & Drum Festival",
      category: "Cultural & Social",
      description: "An annual festival celebrating African dance, music, and culture. Workshops, performances, and community gatherings throughout the weekend.",
      location: "Various Atlanta venues",
      website: "https://atlantaafricandance.org",
      contact: null
    },
    {
      id: "atl-5",
      name: "Desta Ethiopian Kitchen",
      category: "Food & Lifestyle",
      description: "A popular Ethiopian restaurant in Atlanta. Great for group dinners and a favorite among African students for its generous portions and authentic flavors.",
      location: "East Atlanta",
      website: "https://destakitchen.com",
      contact: null
    }
  ],

  "Washington": [
    {
      id: "dc-1",
      name: "Georgetown African Society",
      category: "Student Associations",
      description: "A politically engaged student group at Georgetown with strong connections to DC's policy and international development sectors.",
      location: "Georgetown University, DC",
      website: "https://georgetown.edu/africansociety",
      contact: "africansociety@georgetown.edu"
    },
    {
      id: "dc-2",
      name: "Howard University Pan-African Student Forum",
      category: "Student Associations",
      description: "A student organization at the historically Black university connecting African and African-American students. Known for powerful cultural programming.",
      location: "Howard University, DC",
      website: "https://howard.edu/pasf",
      contact: "pasf@howard.edu"
    },
    {
      id: "dc-3",
      name: "Africa Center DC",
      category: "Career & Networking",
      description: "A think tank and cultural center focused on US-Africa relations. Hosts policy forums, networking events, and cultural exhibitions.",
      location: "Dupont Circle, DC",
      website: "https://africacenterdc.org",
      contact: "info@africacenterdc.org"
    },
    {
      id: "dc-4",
      name: "Ethiopian Cultural Center",
      category: "Cultural & Social",
      description: "A cultural center serving DC's large Ethiopian community. Offers language classes, cultural events, and community support services.",
      location: "Adams Morgan, DC",
      website: "https://ethioculturalcenter.org",
      contact: null
    },
    {
      id: "dc-5",
      name: "U Street African Corridor",
      category: "Food & Lifestyle",
      description: "A stretch of U Street NW with Ethiopian and Eritrean restaurants, coffee shops, and businesses. The heart of DC's African community.",
      location: "U Street, DC",
      website: null,
      contact: null
    }
  ],

  "Philadelphia": [
    {
      id: "phi-1",
      name: "Penn African Students Association",
      category: "Student Associations",
      description: "A well-established organization at UPenn known for their speaker series bringing African leaders to campus and strong alumni engagement.",
      location: "University of Pennsylvania",
      website: "https://upenn.edu/asa",
      contact: "asa@upenn.edu"
    },
    {
      id: "phi-2",
      name: "Temple University African Student Organization",
      category: "Student Associations",
      description: "A diverse community at Temple representing students from across Africa. Very active in community service and cultural programming.",
      location: "Temple University, North Philadelphia",
      website: "https://temple.edu/aso",
      contact: "aso@temple.edu"
    },
    {
      id: "phi-3",
      name: "African Cultural Alliance of North America",
      category: "Cultural & Social",
      description: "A nonprofit promoting African culture in the greater Philadelphia area. Hosts cultural events, educational programs, and community initiatives.",
      location: "West Philadelphia",
      website: "https://acana-philly.org",
      contact: "info@acana-philly.org"
    },
    {
      id: "phi-4",
      name: "Dahlak Eritrean Restaurant",
      category: "Food & Lifestyle",
      description: "A beloved Eritrean and Ethiopian restaurant in West Philly. Known for its injera and vegetarian combo plates. Student-friendly prices.",
      location: "West Philadelphia",
      website: null,
      contact: null
    }
  ],

  "Durham": [
    {
      id: "dur-1",
      name: "Duke African Students Association",
      category: "Student Associations",
      description: "A vibrant community at Duke connecting African students across undergraduate and graduate programs. Strong ties to the Research Triangle's innovation ecosystem.",
      location: "Duke University, Durham",
      website: "https://duke.edu/asa",
      contact: "asa@duke.edu"
    },
    {
      id: "dur-2",
      name: "UNC-Chapel Hill African Students Congress",
      category: "Student Associations",
      description: "An umbrella organization for African students at UNC. Coordinates between country-specific groups and hosts pan-African events.",
      location: "UNC Chapel Hill",
      website: "https://unc.edu/asc",
      contact: "asc@unc.edu"
    },
    {
      id: "dur-3",
      name: "Triangle African Business Network",
      category: "Career & Networking",
      description: "A professional network for Africans in the Raleigh-Durham-Chapel Hill area. Strong connections in healthcare, pharma, and tech sectors.",
      location: "Research Triangle Park",
      website: "https://triangleabn.org",
      contact: "connect@triangleabn.org"
    },
    {
      id: "dur-4",
      name: "Zweli's Kitchen",
      category: "Food & Lifestyle",
      description: "A South African restaurant in Durham serving authentic cuisine. A rare find in the South and a gathering spot for African students.",
      location: "Downtown Durham",
      website: "https://zweliskitchen.com",
      contact: null
    }
  ],

  "Miami": [
    {
      id: "mia-1",
      name: "University of Miami African Students Association",
      category: "Student Associations",
      description: "A growing community of African students at UM. Known for their Caribbean-African cultural fusion events and strong sense of community.",
      location: "University of Miami, Coral Gables",
      website: "https://miami.edu/asa",
      contact: "asa@miami.edu"
    },
    {
      id: "mia-2",
      name: "FIU African Diaspora Student Association",
      category: "Student Associations",
      description: "A student organization at Florida International University connecting African students with the broader African diaspora community.",
      location: "Florida International University",
      website: "https://fiu.edu/adsa",
      contact: "adsa@fiu.edu"
    },
    {
      id: "mia-3",
      name: "Miami African Business Association",
      category: "Career & Networking",
      description: "A professional network connecting African entrepreneurs and professionals in South Florida. Focus on trade, real estate, and hospitality sectors.",
      location: "Brickell, Miami",
      website: "https://miamiaba.org",
      contact: "info@miamiaba.org"
    },
    {
      id: "mia-4",
      name: "Little Haiti Cultural Complex",
      category: "Cultural & Social",
      description: "A cultural center in Little Haiti hosting events, art exhibitions, and community gatherings. A hub for African diaspora culture in Miami.",
      location: "Little Haiti, Miami",
      website: "https://littlehaiticulturalcenter.com",
      contact: null
    }
  ],

  "Dallas": [
    {
      id: "dal-1",
      name: "SMU African Students Association",
      category: "Student Associations",
      description: "A community of African students at Southern Methodist University. Known for their annual African Culture Night and strong alumni network.",
      location: "SMU, University Park",
      website: "https://smu.edu/asa",
      contact: "asa@smu.edu"
    },
    {
      id: "dal-2",
      name: "UT Dallas African Student Organization",
      category: "Student Associations",
      description: "A growing organization at UTD serving the diverse African student population. Strong focus on STEM career development.",
      location: "UT Dallas, Richardson",
      website: "https://utdallas.edu/aso",
      contact: "aso@utdallas.edu"
    },
    {
      id: "dal-3",
      name: "African Business Council DFW",
      category: "Career & Networking",
      description: "A professional network for African entrepreneurs and professionals in the Dallas-Fort Worth metroplex. Regular networking events and business resources.",
      location: "Downtown Dallas",
      website: "https://abcdfw.org",
      contact: "info@abcdfw.org"
    },
    {
      id: "dal-4",
      name: "Dallas African American Museum",
      category: "Cultural & Social",
      description: "While focused on African-American history, the museum hosts events celebrating African heritage and provides a space for cultural exploration.",
      location: "Fair Park, Dallas",
      website: "https://aamdallas.org",
      contact: null
    }
  ],

  "Seattle": [
    {
      id: "sea-1",
      name: "University of Washington African Students Association",
      category: "Student Associations",
      description: "The main African student organization at UW. Very active in the Seattle community and runs mentorship programs for incoming students.",
      location: "University of Washington",
      website: "https://uw.edu/asa",
      contact: "asa@uw.edu"
    },
    {
      id: "sea-2",
      name: "Africa Tech Seattle",
      category: "Career & Networking",
      description: "A networking group connecting Africans in Seattle's tech industry. Strong ties to Amazon, Microsoft, and startup ecosystem.",
      location: "South Lake Union, Seattle",
      website: "https://africatechseattle.com",
      contact: "hello@africatechseattle.com"
    },
    {
      id: "sea-3",
      name: "Ethiopian Community Center Seattle",
      category: "Cultural & Social",
      description: "A cultural center serving Seattle's Ethiopian and Eritrean community. Language classes, cultural events, and community support.",
      location: "Central District, Seattle",
      website: "https://eccs.org",
      contact: null
    },
    {
      id: "sea-4",
      name: "Cafe Selam",
      category: "Food & Lifestyle",
      description: "An Ethiopian cafe and restaurant in the Central District. Known for its injera, coffee ceremony, and welcoming atmosphere.",
      location: "Central District, Seattle",
      website: null,
      contact: null
    }
  ],

  "Minneapolis": [
    {
      id: "min-1",
      name: "University of Minnesota African Students Association",
      category: "Student Associations",
      description: "A large and active organization serving the Twin Cities' vibrant African student community. Strong connections to the Somali and East African communities.",
      location: "University of Minnesota, Twin Cities",
      website: "https://umn.edu/asa",
      contact: "asa@umn.edu"
    },
    {
      id: "min-2",
      name: "African Development Center",
      category: "Career & Networking",
      description: "A nonprofit helping African immigrants build financial capability and economic self-sufficiency. Offers financial education and small business support.",
      location: "Minneapolis",
      website: "https://adcminnesota.org",
      contact: "info@adcminnesota.org"
    },
    {
      id: "min-3",
      name: "Somali Museum of Minnesota",
      category: "Cultural & Social",
      description: "The first museum in North America dedicated to Somali culture and history. A wonderful cultural resource for the Twin Cities community.",
      location: "Minneapolis",
      website: "https://somalimuseum.org",
      contact: null
    },
    {
      id: "min-4",
      name: "Safari Restaurant",
      category: "Food & Lifestyle",
      description: "A popular Somali restaurant in Cedar-Riverside. Authentic cuisine in the heart of Minneapolis' Little Mogadishu neighborhood.",
      location: "Cedar-Riverside, Minneapolis",
      website: null,
      contact: null
    }
  ],

  "Detroit": [
    {
      id: "det-1",
      name: "University of Michigan African Students Association",
      category: "Student Associations",
      description: "A well-established organization at U-M connecting African students across Ann Arbor and the greater Detroit area.",
      location: "University of Michigan, Ann Arbor",
      website: "https://umich.edu/asa",
      contact: "asa@umich.edu"
    },
    {
      id: "det-2",
      name: "Detroit African American Network",
      category: "Career & Networking",
      description: "A professional network open to Africans and African-Americans in Detroit. Focus on automotive, tech, and entrepreneurship sectors.",
      location: "Downtown Detroit",
      website: "https://detroitaan.org",
      contact: "info@detroitaan.org"
    },
    {
      id: "det-3",
      name: "Museum of African American History",
      category: "Cultural & Social",
      description: "The world's largest museum dedicated to African American history. Hosts cultural events and educational programming.",
      location: "Midtown Detroit",
      website: "https://thewright.org",
      contact: null
    }
  ],

  "Austin": [
    {
      id: "aus-1",
      name: "UT Austin African Students Association",
      category: "Student Associations",
      description: "A vibrant community at the University of Texas connecting African students across campus. Known for their annual Africa Week celebration.",
      location: "University of Texas at Austin",
      website: "https://utexas.edu/asa",
      contact: "asa@utexas.edu"
    },
    {
      id: "aus-2",
      name: "McCombs Africa Business Group",
      category: "Career & Networking",
      description: "A student-led organization at McCombs School of Business focused on African business opportunities and connecting MBA students with Africa-focused companies.",
      location: "McCombs School of Business, UT Austin",
      website: "https://mccombs.utexas.edu/abg",
      contact: "abg@mccombs.utexas.edu"
    },
    {
      id: "aus-3",
      name: "Austin African Business Network",
      category: "Career & Networking",
      description: "A professional network for African entrepreneurs and professionals in the Austin tech scene. Regular meetups and startup pitch events.",
      location: "Downtown Austin",
      website: "https://austinabn.org",
      contact: "connect@austinabn.org"
    },
    {
      id: "aus-4",
      name: "Taste of Ethiopia Austin",
      category: "Food & Lifestyle",
      description: "A popular Ethiopian restaurant on East 7th Street. Known for authentic injera and friendly atmosphere. Great for study groups.",
      location: "East Austin",
      website: "https://tasteofethiopiaaustin.com",
      contact: null
    },
    {
      id: "aus-5",
      name: "African American Cultural & Heritage Facility",
      category: "Cultural & Social",
      description: "A community center in East Austin celebrating African and African American culture. Hosts events, exhibitions, and educational programs.",
      location: "East Austin",
      website: "https://austintexas.gov/aachf",
      contact: null
    }
  ],

  "Denver": [
    {
      id: "den-1",
      name: "University of Denver African Students Association",
      category: "Student Associations",
      description: "A growing community at DU supporting African students. Strong focus on academic success and cultural programming.",
      location: "University of Denver",
      website: "https://du.edu/asa",
      contact: "asa@du.edu"
    },
    {
      id: "den-2",
      name: "Colorado African Organization",
      category: "Cultural & Social",
      description: "A nonprofit serving the African community in Colorado. Hosts cultural festivals, provides resources, and builds community connections.",
      location: "Aurora, CO",
      website: "https://coloradoafrican.org",
      contact: "info@coloradoafrican.org"
    },
    {
      id: "den-3",
      name: "African Chamber of Commerce Colorado",
      category: "Career & Networking",
      description: "A business organization connecting African entrepreneurs and professionals across Colorado. Networking events and business resources.",
      location: "Denver Metro Area",
      website: "https://africancoccolorado.org",
      contact: "info@africancoccolorado.org"
    },
    {
      id: "den-4",
      name: "Ethiopian Restaurant Row",
      category: "Food & Lifestyle",
      description: "A cluster of Ethiopian restaurants along East Colfax Avenue. Great for authentic cuisine and connecting with the local African community.",
      location: "East Colfax, Denver",
      website: null,
      contact: null
    }
  ],

  "Nashville": [
    {
      id: "nas-1",
      name: "Vanderbilt African Students Association",
      category: "Student Associations",
      description: "A close-knit community at Vanderbilt connecting African students. Known for their mentorship programs and cultural showcases.",
      location: "Vanderbilt University",
      website: "https://vanderbilt.edu/asa",
      contact: "asa@vanderbilt.edu"
    },
    {
      id: "nas-2",
      name: "Owen Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Vanderbilt Owen Graduate School of Management focused on Africa business opportunities for MBA students.",
      location: "Owen School of Management",
      website: "https://owen.vanderbilt.edu/abc",
      contact: "africa.business@owen.vanderbilt.edu"
    },
    {
      id: "nas-3",
      name: "Nashville African Community",
      category: "Cultural & Social",
      description: "A community organization supporting African immigrants and students in Nashville. Cultural events, resources, and community support.",
      location: "Nashville",
      website: "https://nashvilleafrican.org",
      contact: "info@nashvilleafrican.org"
    },
    {
      id: "nas-4",
      name: "Gojo Ethiopian Restaurant",
      category: "Food & Lifestyle",
      description: "Nashville's premier Ethiopian restaurant. Authentic cuisine and a gathering spot for the African community.",
      location: "Nolensville Pike, Nashville",
      website: "https://gojoethiopian.com",
      contact: null
    }
  ],

  "Charlotte": [
    {
      id: "cha-1",
      name: "UNC Charlotte African Students Organization",
      category: "Student Associations",
      description: "An active student organization connecting African students at UNC Charlotte. Cultural events and academic support programs.",
      location: "UNC Charlotte",
      website: "https://uncc.edu/aso",
      contact: "aso@uncc.edu"
    },
    {
      id: "cha-2",
      name: "African American Chamber of Commerce Charlotte",
      category: "Career & Networking",
      description: "A business chamber supporting Black-owned businesses including African entrepreneurs. Networking and business development resources.",
      location: "Uptown Charlotte",
      website: "https://aacc-charlotte.org",
      contact: "info@aacc-charlotte.org"
    },
    {
      id: "cha-3",
      name: "Charlotte African Professionals Network",
      category: "Career & Networking",
      description: "A networking group for African professionals in Charlotte's banking, healthcare, and tech sectors.",
      location: "Uptown Charlotte",
      website: "https://charlotteapn.org",
      contact: "connect@charlotteapn.org"
    },
    {
      id: "cha-4",
      name: "Motherland Cuisine",
      category: "Food & Lifestyle",
      description: "A West African restaurant serving Nigerian, Ghanaian, and other West African cuisines. Popular with African students.",
      location: "South Boulevard, Charlotte",
      website: null,
      contact: null
    }
  ],

  "San Diego": [
    {
      id: "sd-1",
      name: "UC San Diego African Students Union",
      category: "Student Associations",
      description: "A student organization uniting African students at UCSD. Cultural programs, academic support, and community building.",
      location: "UC San Diego, La Jolla",
      website: "https://ucsd.edu/asu",
      contact: "asu@ucsd.edu"
    },
    {
      id: "sd-2",
      name: "San Diego African Alliance",
      category: "Cultural & Social",
      description: "A community organization celebrating African culture in San Diego. Annual festivals, cultural events, and community programs.",
      location: "San Diego",
      website: "https://sdafricanalliance.org",
      contact: "info@sdafricanalliance.org"
    },
    {
      id: "sd-3",
      name: "Flavors of East Africa",
      category: "Food & Lifestyle",
      description: "An East African restaurant serving authentic Ethiopian and Eritrean cuisine. Great injera and friendly service.",
      location: "City Heights, San Diego",
      website: null,
      contact: null
    }
  ],

  "Phoenix": [
    {
      id: "phx-1",
      name: "Arizona State University African Students Association",
      category: "Student Associations",
      description: "A large and diverse African student community at ASU. Cultural showcases, academic support, and professional development.",
      location: "Arizona State University, Tempe",
      website: "https://asu.edu/asa",
      contact: "asa@asu.edu"
    },
    {
      id: "phx-2",
      name: "Thunderbird Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Thunderbird School of Global Management focused on Africa business development and networking.",
      location: "Thunderbird School, ASU",
      website: "https://thunderbird.asu.edu/abc",
      contact: "africaclub@thunderbird.asu.edu"
    },
    {
      id: "phx-3",
      name: "African Community Center Phoenix",
      category: "Cultural & Social",
      description: "A community center supporting African refugees and immigrants in Phoenix. Cultural events, ESL classes, and community resources.",
      location: "Central Phoenix",
      website: "https://africancommunitycenter.org",
      contact: "info@africancommunitycenter.org"
    },
    {
      id: "phx-4",
      name: "Cafe Lalibela",
      category: "Food & Lifestyle",
      description: "An Ethiopian restaurant in Tempe near ASU. Authentic cuisine and a gathering spot for African students.",
      location: "Tempe, AZ",
      website: "https://cafelalibelaphoenix.com",
      contact: null
    }
  ],

  "Pittsburgh": [
    {
      id: "pit-1",
      name: "Carnegie Mellon African Students Association",
      category: "Student Associations",
      description: "A vibrant community at CMU connecting African students in tech, business, and arts programs. Strong alumni network.",
      location: "Carnegie Mellon University",
      website: "https://cmu.edu/asa",
      contact: "asa@cmu.edu"
    },
    {
      id: "pit-2",
      name: "University of Pittsburgh African Students Organization",
      category: "Student Associations",
      description: "An active student group at Pitt fostering African culture and community. Cultural nights and academic support programs.",
      location: "University of Pittsburgh",
      website: "https://pitt.edu/aso",
      contact: "aso@pitt.edu"
    },
    {
      id: "pit-3",
      name: "Tepper Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Tepper School of Business focused on Africa-related business opportunities for MBA students.",
      location: "Tepper School, CMU",
      website: "https://tepper.cmu.edu/abc",
      contact: "africaclub@tepper.cmu.edu"
    },
    {
      id: "pit-4",
      name: "Tana Ethiopian Cuisine",
      category: "Food & Lifestyle",
      description: "Pittsburgh's beloved Ethiopian restaurant. Authentic food and a welcoming space for the African community.",
      location: "East Liberty, Pittsburgh",
      website: "https://tanaethiopiancuisine.com",
      contact: null
    }
  ],

  "Portland": [
    {
      id: "por-1",
      name: "Portland African American Leadership Forum",
      category: "Career & Networking",
      description: "A coalition supporting Black community development including African immigrants. Leadership development and community advocacy.",
      location: "Portland, OR",
      website: "https://paalf.org",
      contact: "info@paalf.org"
    },
    {
      id: "por-2",
      name: "Africa House Portland",
      category: "Cultural & Social",
      description: "A cultural center celebrating African arts, culture, and community. Exhibitions, performances, and educational programs.",
      location: "Northeast Portland",
      website: "https://africahousepdx.org",
      contact: "info@africahousepdx.org"
    },
    {
      id: "por-3",
      name: "Portland State African Students Union",
      category: "Student Associations",
      description: "A student organization at PSU supporting African students. Cultural events and community building.",
      location: "Portland State University",
      website: "https://pdx.edu/asu",
      contact: "asu@pdx.edu"
    },
    {
      id: "por-4",
      name: "Queen of Sheba Ethiopian Restaurant",
      category: "Food & Lifestyle",
      description: "A family-owned Ethiopian restaurant in Northeast Portland. Known for authentic cuisine and warm hospitality.",
      location: "Northeast Portland",
      website: null,
      contact: null
    }
  ],

  "Ithaca": [
    {
      id: "ith-1",
      name: "Cornell African Students Association",
      category: "Student Associations",
      description: "One of the most active African student groups in the Ivy League. Strong academic support and cultural programming.",
      location: "Cornell University",
      website: "https://cornell.edu/asa",
      contact: "asa@cornell.edu"
    },
    {
      id: "ith-2",
      name: "Johnson Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Cornell Johnson School of Business focused on Africa investment and business development.",
      location: "Johnson School of Management",
      website: "https://johnson.cornell.edu/abc",
      contact: "africaclub@johnson.cornell.edu"
    },
    {
      id: "ith-3",
      name: "Taste of Africa Ithaca",
      category: "Food & Lifestyle",
      description: "A small African eatery near campus serving West African dishes. A taste of home for African students.",
      location: "Collegetown, Ithaca",
      website: null,
      contact: null
    }
  ],

  "New Haven": [
    {
      id: "nh-1",
      name: "Yale African Students Association",
      category: "Student Associations",
      description: "A prestigious African student organization at Yale. Known for their Africa Business Conference and strong alumni network.",
      location: "Yale University",
      website: "https://yale.edu/asa",
      contact: "asa@yale.edu"
    },
    {
      id: "nh-2",
      name: "Yale SOM Africa Business Club",
      category: "Career & Networking",
      description: "A student club at Yale School of Management focused on Africa business opportunities, investment, and development.",
      location: "Yale School of Management",
      website: "https://som.yale.edu/abc",
      contact: "africaclub@som.yale.edu"
    },
    {
      id: "nh-3",
      name: "Lalibela Ethiopian Restaurant",
      category: "Food & Lifestyle",
      description: "New Haven's beloved Ethiopian restaurant. Popular with Yale students for its authentic food and cozy atmosphere.",
      location: "Chapel Street, New Haven",
      website: "https://lalibela-newhaven.com",
      contact: null
    }
  ],

  "Charlottesville": [
    {
      id: "cva-1",
      name: "UVA African Students Association",
      category: "Student Associations",
      description: "A community of African students at the University of Virginia. Cultural events, mentorship, and academic support.",
      location: "University of Virginia",
      website: "https://virginia.edu/asa",
      contact: "asa@virginia.edu"
    },
    {
      id: "cva-2",
      name: "Darden Africa Club",
      category: "Career & Networking",
      description: "A student organization at Darden School of Business connecting MBA students with Africa business opportunities.",
      location: "Darden School of Business, UVA",
      website: "https://darden.virginia.edu/africaclub",
      contact: "africaclub@darden.virginia.edu"
    },
    {
      id: "cva-3",
      name: "Revolutionary Soup",
      category: "Food & Lifestyle",
      description: "While not exclusively African, this community cafe occasionally features African-inspired dishes and is a student gathering spot.",
      location: "Downtown Charlottesville",
      website: "https://revolutionarysoup.com",
      contact: null
    }
  ],

  "Hanover": [
    {
      id: "han-1",
      name: "Dartmouth African Students Association",
      category: "Student Associations",
      description: "A close-knit community at Dartmouth supporting African students. Known for their strong mentorship programs.",
      location: "Dartmouth College",
      website: "https://dartmouth.edu/asa",
      contact: "asa@dartmouth.edu"
    },
    {
      id: "han-2",
      name: "Tuck Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Tuck School of Business focused on Africa private equity, consulting, and development.",
      location: "Tuck School of Business",
      website: "https://tuck.dartmouth.edu/abc",
      contact: "africaclub@tuck.dartmouth.edu"
    }
  ],

  "Stanford": [
    {
      id: "sta-1",
      name: "Stanford African Students Association",
      category: "Student Associations",
      description: "A dynamic community connecting African students at Stanford. Strong ties to Silicon Valley's tech and startup ecosystem.",
      location: "Stanford University",
      website: "https://stanford.edu/asa",
      contact: "asa@stanford.edu"
    },
    {
      id: "sta-2",
      name: "GSB Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Stanford Graduate School of Business focused on Africa investment and entrepreneurship.",
      location: "Stanford GSB",
      website: "https://gsb.stanford.edu/abc",
      contact: "africaclub@gsb.stanford.edu"
    },
    {
      id: "sta-3",
      name: "Africa Diaspora High Table",
      category: "Cultural & Social",
      description: "A quarterly dinner series at Stanford bringing together African students, faculty, and alumni for networking and discussion.",
      location: "Stanford Campus",
      website: null,
      contact: null
    }
  ],

  "Cambridge": [
    {
      id: "cam-1",
      name: "Harvard African Students Association",
      category: "Student Associations",
      description: "One of the most prestigious African student organizations in the US. Hosts the renowned Africa Business Conference.",
      location: "Harvard University",
      website: "https://hasa.harvard.edu",
      contact: "hasa@harvard.edu"
    },
    {
      id: "cam-2",
      name: "HBS Africa Business Club",
      category: "Career & Networking",
      description: "A powerful network at Harvard Business School connecting MBA students with Africa investment and business opportunities.",
      location: "Harvard Business School",
      website: "https://hbs.edu/abc",
      contact: "africaclub@hbs.edu"
    },
    {
      id: "cam-3",
      name: "MIT Sloan Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at MIT Sloan focused on African tech, innovation, and entrepreneurship.",
      location: "MIT Sloan School",
      website: "https://mitsloan.edu/abc",
      contact: "africaclub@sloan.mit.edu"
    },
    {
      id: "cam-4",
      name: "Asmara Restaurant",
      category: "Food & Lifestyle",
      description: "A beloved Ethiopian and Eritrean restaurant in Cambridge. Popular with Harvard and MIT students for its authentic cuisine.",
      location: "Central Square, Cambridge",
      website: "https://asmaracambridge.com",
      contact: null
    }
  ],

  "Ann Arbor": [
    {
      id: "aa-1",
      name: "Michigan African Students Association",
      category: "Student Associations",
      description: "A vibrant community at University of Michigan. Cultural events, academic support, and strong alumni connections.",
      location: "University of Michigan",
      website: "https://umich.edu/asa",
      contact: "asa@umich.edu"
    },
    {
      id: "aa-2",
      name: "Ross Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Ross School of Business connecting MBAs with Africa-focused firms and opportunities.",
      location: "Ross School of Business",
      website: "https://ross.umich.edu/abc",
      contact: "africaclub@ross.umich.edu"
    },
    {
      id: "aa-3",
      name: "Blue Nile Restaurant",
      category: "Food & Lifestyle",
      description: "Ann Arbor's popular Ethiopian restaurant. A gathering spot for African students and the broader community.",
      location: "Downtown Ann Arbor",
      website: "https://bluenileannarbor.com",
      contact: null
    }
  ],

  "Evanston": [
    {
      id: "eva-1",
      name: "Northwestern African Students Alliance",
      category: "Student Associations",
      description: "The umbrella organization for African student groups at Northwestern. Coordinates pan-African events and resources.",
      location: "Northwestern University",
      website: "https://northwestern.edu/asa",
      contact: "asa@northwestern.edu"
    },
    {
      id: "eva-2",
      name: "Kellogg Africa Business Club",
      category: "Career & Networking",
      description: "A student organization at Kellogg School of Management focused on Africa business, consulting, and development.",
      location: "Kellogg School of Management",
      website: "https://kellogg.northwestern.edu/abc",
      contact: "africaclub@kellogg.northwestern.edu"
    }
  ]
};

export default communityData;
