const locations = [
  // === Houston metro ===
  {
    name: "Burger King – Westheimer Rd",
    address: "5765 Westheimer Rd, Houston, TX 77057",
    lat: 29.7392, lng: -95.4691,
    score: 4.5, reviewCount: 1842,
    tags: ["Fast Service", "Clean", "Drive-Thru"],
    reviews: [
      { author: "Maria G.", stars: 5, text: "Best BK in Houston — always hot and fresh." },
      { author: "James T.", stars: 4, text: "Drive-thru was fast, order was perfect." }
    ]
  },
  {
    name: "Burger King – Bellaire Blvd",
    address: "6140 Bellaire Blvd, Houston, TX 77081",
    lat: 29.7057, lng: -95.4926,
    score: 4.2, reviewCount: 987,
    tags: ["Friendly Staff", "Accurate Orders"],
    reviews: [
      { author: "Kevin L.", stars: 4, text: "Staff was genuinely nice, order was spot-on." },
      { author: "Sandra R.", stars: 4, text: "Clean dining room, quick service." }
    ]
  },
  {
    name: "Burger King – I-10 & Gessner",
    address: "10002 Katy Fwy, Houston, TX 77055",
    lat: 29.7806, lng: -95.5067,
    score: 3.5, reviewCount: 612,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Fondren Rd",
    address: "9801 Fondren Rd, Houston, TX 77096",
    lat: 29.6801, lng: -95.5010,
    score: 3.8, reviewCount: 430,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Main St",
    address: "2020 Main St, Houston, TX 77002",
    lat: 29.7513, lng: -95.3680,
    score: 4.1, reviewCount: 763,
    tags: ["Downtown", "Mobile Order"],
    reviews: [
      { author: "Tyrone W.", stars: 4, text: "Great for a quick lunch downtown." }
    ]
  },
  {
    name: "Burger King – Telephone Rd",
    address: "3800 Telephone Rd, Houston, TX 77087",
    lat: 29.6948, lng: -95.3334,
    score: 3.2, reviewCount: 398,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Pearland Pkwy",
    address: "2525 Pearland Pkwy, Pearland, TX 77581",
    lat: 29.5573, lng: -95.3274,
    score: 4.6, reviewCount: 2104,
    tags: ["Playground", "Family-Friendly", "Fast Drive-Thru"],
    reviews: [
      { author: "Amber C.", stars: 5, text: "Kids love the play area. Staff always cheerful." },
      { author: "Darius P.", stars: 5, text: "Consistently the best BK in the area." }
    ]
  },
  {
    name: "Burger King – NASA Pkwy, Webster",
    address: "1100 NASA Pkwy, Webster, TX 77598",
    lat: 29.5449, lng: -95.1203,
    score: 4.3, reviewCount: 1120,
    tags: ["Near NASA", "Quick Service"],
    reviews: [
      { author: "Lisa H.", stars: 4, text: "Reliable stop after visiting Space Center." }
    ]
  },
  {
    name: "Burger King – Gulf Fwy, League City",
    address: "2850 Gulf Fwy, League City, TX 77573",
    lat: 29.4948, lng: -95.0861,
    score: 3.7, reviewCount: 515,
    tags: [],
    reviews: []
  },

  // === Dallas / Fort Worth metro ===
  {
    name: "Burger King – Greenville Ave, Dallas",
    address: "5710 Greenville Ave, Dallas, TX 75206",
    lat: 32.8507, lng: -96.7730,
    score: 4.7, reviewCount: 2390,
    tags: ["Best in Dallas", "Late Night", "Clean"],
    reviews: [
      { author: "Marcus B.", stars: 5, text: "Open late, always clean. My go-to after midnight." },
      { author: "Rachel S.", stars: 5, text: "Never had a wrong order here in 3 years." }
    ]
  },
  {
    name: "Burger King – Preston Rd, Plano",
    address: "3120 Preston Rd, Plano, TX 75093",
    lat: 33.0300, lng: -96.8022,
    score: 4.4, reviewCount: 1560,
    tags: ["Fast Drive-Thru", "Mobile Pickup"],
    reviews: [
      { author: "Jennifer K.", stars: 4, text: "Mobile order was ready exactly on time." },
      { author: "Sam T.", stars: 5, text: "Best Whopper I've had in a while." }
    ]
  },
  {
    name: "Burger King – Central Expy, Garland",
    address: "4850 N Central Expy, Garland, TX 75040",
    lat: 32.9255, lng: -96.6398,
    score: 3.4, reviewCount: 284,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – W 7th St, Fort Worth",
    address: "2730 W 7th St, Fort Worth, TX 76107",
    lat: 32.7457, lng: -97.3710,
    score: 4.5, reviewCount: 1880,
    tags: ["Near Cultural District", "Friendly Staff", "Clean"],
    reviews: [
      { author: "Brianna M.", stars: 5, text: "Cleanest fast food in the Cultural District area." },
      { author: "Dave F.", stars: 4, text: "Staff remembered my usual order. Really friendly." }
    ]
  },
  {
    name: "Burger King – Camp Bowie Blvd, Fort Worth",
    address: "5408 Camp Bowie Blvd, Fort Worth, TX 76107",
    lat: 32.7375, lng: -97.4077,
    score: 4.0, reviewCount: 672,
    tags: ["Consistent Quality"],
    reviews: [
      { author: "Tom R.", stars: 4, text: "Solid, consistent, no complaints." }
    ]
  },
  {
    name: "Burger King – Cooper St, Arlington",
    address: "1900 S Cooper St, Arlington, TX 76013",
    lat: 32.7026, lng: -97.1167,
    score: 3.6, reviewCount: 449,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – I-30, Grand Prairie",
    address: "2526 E I-30, Grand Prairie, TX 75050",
    lat: 32.7459, lng: -97.0100,
    score: 4.1, reviewCount: 820,
    tags: ["Highway Stop", "Fast Service"],
    reviews: [
      { author: "Elena V.", stars: 4, text: "Great highway stop, in and out in 5 minutes." }
    ]
  },
  {
    name: "Burger King – Mockingbird Ln, Dallas",
    address: "4334 W Mockingbird Ln, Dallas, TX 75209",
    lat: 32.8383, lng: -96.8341,
    score: 3.9, reviewCount: 533,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Belt Line Rd, Irving",
    address: "3700 W Airport Fwy, Irving, TX 75062",
    lat: 32.8320, lng: -97.0102,
    score: 4.0, reviewCount: 711,
    tags: ["Near DFW Airport", "Quick Service"],
    reviews: [
      { author: "Paul N.", stars: 4, text: "Perfect pre-flight bite. Fast and accurate." }
    ]
  },

  // === San Antonio ===
  {
    name: "Burger King – Broadway St, San Antonio",
    address: "3015 Broadway St, San Antonio, TX 78209",
    lat: 29.4676, lng: -98.4708,
    score: 4.6, reviewCount: 1733,
    tags: ["Near Brackenridge Park", "Family-Friendly", "Clean"],
    reviews: [
      { author: "Carlos M.", stars: 5, text: "Always fresh, staff is super friendly to families." },
      { author: "Nina R.", stars: 5, text: "Best BK in SA. Never disappointed." }
    ]
  },
  {
    name: "Burger King – Military Dr, San Antonio",
    address: "6550 S Military Dr, San Antonio, TX 78227",
    lat: 29.3784, lng: -98.5684,
    score: 3.3, reviewCount: 391,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – NW Loop 410",
    address: "7403 NW Loop 410, San Antonio, TX 78245",
    lat: 29.4761, lng: -98.6540,
    score: 4.2, reviewCount: 988,
    tags: ["Drive-Thru Only", "Fast"],
    reviews: [
      { author: "Roberto L.", stars: 4, text: "Drive-thru is amazingly fast even at lunch rush." }
    ]
  },
  {
    name: "Burger King – Fredericksburg Rd",
    address: "5602 Fredericksburg Rd, San Antonio, TX 78229",
    lat: 29.4936, lng: -98.5538,
    score: 3.7, reviewCount: 460,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Stone Oak Pkwy",
    address: "22602 US-281, San Antonio, TX 78258",
    lat: 29.6227, lng: -98.4809,
    score: 4.4, reviewCount: 1245,
    tags: ["North SA", "Clean", "Accurate Orders"],
    reviews: [
      { author: "Ashley P.", stars: 4, text: "New location, very clean and organized." },
      { author: "Mike D.", stars: 5, text: "They always get my complicated order right." }
    ]
  },

  // === Austin ===
  {
    name: "Burger King – Lamar Blvd, Austin",
    address: "4101 N Lamar Blvd, Austin, TX 78756",
    lat: 30.3153, lng: -97.7381,
    score: 4.3, reviewCount: 1042,
    tags: ["Walk-Up Friendly", "Vegan Options"],
    reviews: [
      { author: "Zoe K.", stars: 4, text: "Love that they have the Impossible Whopper." },
      { author: "Hank W.", stars: 5, text: "Nicest staff of any fast food in Austin." }
    ]
  },
  {
    name: "Burger King – Ben White Blvd",
    address: "2300 W Ben White Blvd, Austin, TX 78704",
    lat: 30.2257, lng: -97.7825,
    score: 3.8, reviewCount: 567,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – I-35, Round Rock",
    address: "2251 N I-35, Round Rock, TX 78664",
    lat: 30.5370, lng: -97.6791,
    score: 4.5, reviewCount: 1634,
    tags: ["Highway Stop", "Fast Drive-Thru", "Clean Bathrooms"],
    reviews: [
      { author: "Cynthia L.", stars: 5, text: "Spotless. Best highway BK I've ever been to." },
      { author: "Trevor H.", stars: 4, text: "Drive-thru line moved crazy fast." }
    ]
  },
  {
    name: "Burger King – Research Blvd",
    address: "12901 Research Blvd, Austin, TX 78750",
    lat: 30.4228, lng: -97.8032,
    score: 3.5, reviewCount: 322,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Cedar Park",
    address: "1401 E Whitestone Blvd, Cedar Park, TX 78613",
    lat: 30.5204, lng: -97.8197,
    score: 4.1, reviewCount: 874,
    tags: ["Friendly Staff", "Quick Lunch"],
    reviews: [
      { author: "Brooke S.", stars: 4, text: "Always quick and the staff is really upbeat." }
    ]
  },

  // === El Paso ===
  {
    name: "Burger King – Montana Ave, El Paso",
    address: "7600 Montana Ave, El Paso, TX 79925",
    lat: 31.7735, lng: -106.3711,
    score: 4.2, reviewCount: 910,
    tags: ["East Side", "Clean", "Friendly"],
    reviews: [
      { author: "Adriana F.", stars: 4, text: "Consistent quality, never a bad visit." },
      { author: "Oscar T.", stars: 4, text: "Clean and staff is always polite." }
    ]
  },
  {
    name: "Burger King – Dyer St, El Paso",
    address: "3831 Dyer St, El Paso, TX 79930",
    lat: 31.8488, lng: -106.4302,
    score: 3.6, reviewCount: 388,
    tags: [],
    reviews: []
  },
  {
    name: "Burger King – Mesa St, El Paso",
    address: "5820 N Mesa St, El Paso, TX 79912",
    lat: 31.8290, lng: -106.5190,
    score: 4.0, reviewCount: 645,
    tags: ["West Side", "Quick Service"],
    reviews: [
      { author: "Diana L.", stars: 4, text: "Fast service, food was hot." }
    ]
  },

  // === Lubbock ===
  {
    name: "Burger King – 50th St, Lubbock",
    address: "4210 50th St, Lubbock, TX 79413",
    lat: 33.5479, lng: -101.9062,
    score: 4.4, reviewCount: 1120,
    tags: ["Tech Area", "Fast Service", "Clean"],
    reviews: [
      { author: "Jordan B.", stars: 5, text: "Go-to after Texas Tech games. Always packed but fast." },
      { author: "Nicole W.", stars: 4, text: "Really clean dining area." }
    ]
  },
  {
    name: "Burger King – 34th St, Lubbock",
    address: "4601 34th St, Lubbock, TX 79410",
    lat: 33.5680, lng: -101.9018,
    score: 3.4, reviewCount: 290,
    tags: [],
    reviews: []
  },

  // === Amarillo ===
  {
    name: "Burger King – Coulter St, Amarillo",
    address: "3911 Coulter St, Amarillo, TX 79109",
    lat: 35.1791, lng: -101.9260,
    score: 4.5, reviewCount: 978,
    tags: ["Panhandle Best", "Friendly Staff", "Clean"],
    reviews: [
      { author: "Chuck D.", stars: 5, text: "Best fast food in Amarillo, no contest." },
      { author: "Stacy M.", stars: 4, text: "Staff always greet you with a smile." }
    ]
  },
  {
    name: "Burger King – Soncy Rd, Amarillo",
    address: "7501 Soncy Rd, Amarillo, TX 79119",
    lat: 35.1655, lng: -101.9655,
    score: 3.9, reviewCount: 412,
    tags: [],
    reviews: []
  },

  // === Corpus Christi ===
  {
    name: "Burger King – S Padre Island Dr",
    address: "4802 S Padre Island Dr, Corpus Christi, TX 78411",
    lat: 27.7202, lng: -97.3870,
    score: 4.1, reviewCount: 834,
    tags: ["Near Beach", "Quick Stop"],
    reviews: [
      { author: "Megan C.", stars: 4, text: "Great stop before heading to the beach." }
    ]
  },
  {
    name: "Burger King – Leopard St",
    address: "3201 Leopard St, Corpus Christi, TX 78408",
    lat: 27.8041, lng: -97.4285,
    score: 3.3, reviewCount: 255,
    tags: [],
    reviews: []
  },

  // === Waco ===
  {
    name: "Burger King – Valley Mills Dr, Waco",
    address: "3320 Valley Mills Dr, Waco, TX 76710",
    lat: 31.5218, lng: -97.2005,
    score: 4.3, reviewCount: 764,
    tags: ["Magnolia Area", "Clean", "Friendly"],
    reviews: [
      { author: "Hannah B.", stars: 4, text: "Always a pleasant stop near the Silos." },
      { author: "Chad R.", stars: 5, text: "Consistently good food and service." }
    ]
  },
  {
    name: "Burger King – I-35, Waco",
    address: "1601 S I-35, Waco, TX 76706",
    lat: 31.5010, lng: -97.1424,
    score: 3.7, reviewCount: 341,
    tags: [],
    reviews: []
  },

  // === Midland / Odessa ===
  {
    name: "Burger King – Andrews Hwy, Midland",
    address: "3720 Andrews Hwy, Midland, TX 79703",
    lat: 31.9931, lng: -102.1203,
    score: 4.0, reviewCount: 590,
    tags: ["Oil Patch Stop", "Quick Service"],
    reviews: [
      { author: "Billy G.", stars: 4, text: "Good stop after work. Always fast." }
    ]
  },
  {
    name: "Burger King – JBS Pkwy, Odessa",
    address: "2740 JBS Pkwy, Odessa, TX 79762",
    lat: 31.8871, lng: -102.3430,
    score: 3.6, reviewCount: 318,
    tags: [],
    reviews: []
  },

  // === Abilene ===
  {
    name: "Burger King – S Clack St, Abilene",
    address: "3310 S Clack St, Abilene, TX 79606",
    lat: 32.4067, lng: -99.7556,
    score: 4.2, reviewCount: 703,
    tags: ["ACU Area", "Friendly Staff"],
    reviews: [
      { author: "Logan S.", stars: 4, text: "Staff is super friendly, food always hot." }
    ]
  },
  {
    name: "Burger King – N 1st St, Abilene",
    address: "1542 N 1st St, Abilene, TX 79601",
    lat: 32.4574, lng: -99.7307,
    score: 3.5, reviewCount: 275,
    tags: [],
    reviews: []
  },

  // === Laredo ===
  {
    name: "Burger King – San Dario Ave, Laredo",
    address: "5315 San Dario Ave, Laredo, TX 78041",
    lat: 27.5716, lng: -99.5023,
    score: 4.1, reviewCount: 867,
    tags: ["Border Town", "Bilingual Staff"],
    reviews: [
      { author: "Rosa M.", stars: 4, text: "Quick and friendly. Staff speaks English and Spanish." }
    ]
  },

  // === Tyler ===
  {
    name: "Burger King – S Broadway Ave, Tyler",
    address: "4001 S Broadway Ave, Tyler, TX 75701",
    lat: 32.3012, lng: -95.3078,
    score: 4.3, reviewCount: 812,
    tags: ["East Texas", "Clean", "Quick"],
    reviews: [
      { author: "Pam W.", stars: 5, text: "Best fast food in East Texas, easily." },
      { author: "Rick B.", stars: 4, text: "Always get my order right, every time." }
    ]
  },
  {
    name: "Burger King – Loop 323, Tyler",
    address: "3103 Loop 323, Tyler, TX 75702",
    lat: 32.3461, lng: -95.2924,
    score: 3.8, reviewCount: 369,
    tags: [],
    reviews: []
  },

  // === Beaumont ===
  {
    name: "Burger King – Dowlen Rd, Beaumont",
    address: "5985 Dowlen Rd, Beaumont, TX 77706",
    lat: 30.0993, lng: -94.1798,
    score: 4.4, reviewCount: 934,
    tags: ["West Beaumont", "Friendly", "Clean"],
    reviews: [
      { author: "Shirley H.", stars: 4, text: "Always great food, super nice staff." },
      { author: "Antoine J.", stars: 5, text: "Never had a bad experience here." }
    ]
  },
  {
    name: "Burger King – I-10, Beaumont",
    address: "3985 College St, Beaumont, TX 77701",
    lat: 30.0799, lng: -94.1252,
    score: 3.4, reviewCount: 302,
    tags: [],
    reviews: []
  }
];
