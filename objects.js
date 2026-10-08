export const OBJECTS = [
  {
    id: 'smartphone',
    name: 'Smartphone',
    aliases: ['phone', 'smart phone', 'smartphone device', 'smart mobile', 'mobile phone', 'mobile telephone', 'mobile', 'cell phone', 'cellphone', 'cellular phone', 'cellular telephone', 'handset', 'smart handset', 'mobile device', 'touchscreen phone', 'touch phone', 'iphone', 'apple iphone', 'android phone', 'android mobile', 'samsung galaxy phone', 'galaxy phone', 'google pixel', 'pixel phone'],
    category: 'Personal tech',
    descriptor: 'Everyday technology',
    portable: true,
    powered: true,
    setting: 'personal use',
    finishedPrice: {
      range: '$100–$2,300 per unit',
      basis: 'Typical new retail price, before carrier plans, trade-ins or accessories.',
      tiers: [['Budget', '$100–$300'], ['Mainstream', '$300–$900'], ['Premium', '$900–$1,500'], ['Specialty', '$1,500–$2,300']],
    },
    guessMaterials: ['Copper', 'Cobalt', 'Lithium', 'Silicon', 'Rare earths'],
    materials: [
      ['Glass & ceramics', 55, 0.80], ['Aluminum', 22.18, 3.254], ['Electrolyte & binders', 16.2796, 10],
      ['Copper', 15.12, 14.74], ['Graphite', 10, 0.32], ['Plastics', 9.53, 1.50], ['Magnesium', 5.54, 3.50],
      ['Cobalt', 5.38, 39.14], ['Nickel', 4.50, 16.05], ['Epoxy & resins', 4, 5], ['Silicon', 3, 2.50],
      ['Adhesives & coatings', 3, 8], ['Lithium compounds', 2, 17.51], ['Manganese', 1.50, 2], ['Tin', 1.21, 54.20],
      ['Steel / iron', 0.88, 0.80], ['Tungsten', 0.44, 153.46], ['Silver', 0.31, 1951.50],
      ['Neodymium', 0.05, 154.85], ['Gold', 0.03, 133800], ['Tantalum', 0.02, 535],
      ['Praseodymium', 0.01, 130], ['Indium', 0.01, 350], ['Palladium', 0.01, 52000], ['Gallium', 0.0004, 400],
    ],
    stages: {
      components: [
        ['China', 30, null, ['Display modules', 'battery packs', 'circuit boards'], '156'],
        ['Taiwan', 16, null, ['Semiconductor fabrication', 'processor packages'], '158'],
        ['South Korea', 14, null, ['Memory chips', 'displays', 'battery cells'], '410'],
        ['Japan', 11, null, ['Image sensors', 'camera modules', 'electronic materials'], '392'],
        ['Vietnam', 7, null, ['Camera modules', 'electronic subassemblies'], '704'],
        ['Malaysia', 5, null, ['Chip packaging and testing', 'passive components'], '458'],
        ['Singapore', 4, null, ['Semiconductor fabrication', 'storage components'], null],
        ['United States', 4, null, ['Specialty chips', 'radio-frequency components'], '840'],
        ['Germany', 2, null, ['Sensors', 'power semiconductors'], '276'],
        ['Philippines', 2, null, ['Chip assembly and testing', 'passive components'], '608'],
        ['Thailand', 1.5, null, ['Circuit boards', 'electronic subassemblies'], '764'],
        ['Mexico', 1.5, null, ['Circuit boards', 'cable assemblies'], '484'],
        ['Other', 2, null, ['Connectors', 'speakers', 'minor modules'], null],
      ],
      assembly: [['China', 45], ['Vietnam', 14], ['India', 11], ['South Korea', 7], ['Brazil', 3], ['Indonesia', 3], ['Mexico', 2], ['Turkey', 2], ['Egypt', 1.5], ['Pakistan', 1.5], ['Bangladesh', 1], ['Japan', 1], ['Taiwan', 1], ['Other', 7]],
      buyers: [['United States', 18], ['China', 15], ['India', 9], ['Germany', 5], ['Japan', 4.5], ['United Kingdom', 4], ['Brazil', 3.5], ['Indonesia', 3.5], ['France', 3], ['Mexico', 3], ['Thailand', 3], ['Italy', 2.5], ['Spain', 2.5], ['South Korea', 2.5], ['Canada', 2.5], ['Russia', 2], ['Turkey', 2], ['Saudi Arabia', 2], ['Australia', 1.5], ['United Arab Emirates', 1.5], ['Netherlands', 1.5], ['Nigeria', 1], ['South Africa', 1], ['Argentina', 1], ['Poland', 1], ['Other', 4]],
      sources: [['China', 24, null, ['Graphite', 'rare earths', 'tungsten', 'gallium']], ['DR Congo', 18, null, ['Cobalt', 'copper', 'tantalum']], ['Australia', 11, null, ['Lithium', 'nickel', 'gold']], ['Chile', 8, null, ['Copper', 'lithium']], ['Peru', 6, null, ['Copper', 'silver', 'tin']], ['Indonesia', 6, null, ['Nickel', 'tin']], ['Russia', 4, null, ['Nickel', 'palladium']], ['Brazil', 4, null, ['Tantalum', 'tin', 'graphite']], ['Rwanda', 3, null, ['Tantalum', 'tungsten', 'tin']], ['Argentina', 3, null, ['Lithium', 'copper']], ['Philippines', 2, null, ['Nickel', 'copper']], ['South Africa', 2, null, ['Manganese', 'palladium']], ['Canada', 2, null, ['Nickel', 'cobalt', 'gold']], ['United States', 2, null, ['Copper', 'lithium', 'rare earths']], ['Other', 5, null, ['Silicon', 'aluminum ores', 'specialty metals']]],
      logistics: [['Hong Kong', 20], ['United Arab Emirates', 17], ['Netherlands', 11], ['Singapore', 10], ['Czechia', 7], ['Slovakia', 5], ['Belgium', 5], ['Germany', 5], ['Panama', 4], ['Malaysia', 4], ['Poland', 3], ['Turkey', 3], ['Mexico', 2], ['Saudi Arabia', 2], ['Other', 2]],
      waste: [['China', 19.5], ['United States', 12], ['India', 9], ['Japan', 5], ['Brazil', 4], ['Indonesia', 4], ['Russia', 4], ['Germany', 3.5], ['United Kingdom', 3], ['France', 3], ['Mexico', 3], ['Turkey', 2.5], ['South Korea', 2.5], ['Italy', 2.5], ['Nigeria', 2], ['Pakistan', 2], ['Vietnam', 2], ['Thailand', 2], ['Spain', 2], ['Poland', 1.5], ['Canada', 1.5], ['Australia', 1.5], ['Ghana', 1.5], ['South Africa', 1.5], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is made to travel with one person, not stay in one room.',
      'Its battery stores energy in lithium compounds and may contain cobalt.',
      'Its most valuable parts are tiny chips, even though glass and metals dominate its weight.',
      'It connects to cellular networks and usually has a touchscreen.',
    ],
    mapRoles: {
      '180': ['source'], '036': ['source', 'buyer', 'waste'], '152': ['source'], '604': ['source'],
      '643': ['source', 'buyer', 'waste'], '646': ['source'], '032': ['source', 'buyer'], '608': ['source'],
      '710': ['source', 'buyer', 'waste'], '124': ['source', 'buyer', 'waste'], '840': ['source', 'buyer', 'waste'],
      '158': ['assembly'], '392': ['assembly', 'buyer', 'waste'],
      '410': ['assembly', 'buyer', 'waste'], '156': ['source', 'assembly', 'buyer', 'waste'],
      '704': ['assembly', 'waste'], '356': ['assembly', 'buyer', 'waste'], '360': ['source', 'assembly', 'buyer', 'waste'],
      '484': ['assembly', 'logistics', 'buyer', 'waste'], '792': ['assembly', 'logistics', 'buyer', 'waste'],
      '818': ['assembly'], '586': ['assembly', 'waste'], '050': ['assembly'],
      '784': ['logistics', 'buyer', 'waste'], '528': ['logistics', 'buyer'], '702': ['logistics'],
      '203': ['logistics'], '703': ['logistics'], '056': ['logistics'], '591': ['logistics'],
      '458': ['logistics'], '616': ['logistics', 'buyer', 'waste'], '682': ['logistics', 'buyer'],
      '276': ['logistics', 'buyer', 'waste'], '076': ['source', 'assembly', 'buyer', 'waste'],
      '826': ['buyer', 'waste'], '250': ['buyer', 'waste'], '380': ['buyer', 'waste'], '724': ['buyer', 'waste'],
      '764': ['buyer', 'waste'], '566': ['buyer', 'waste'], '288': ['waste'],
    },
    mapLabels: [
      ['DR Congo', 563, 258, 'source'], ['Australia', 872, 319, 'source'], ['Chile', 303, 342, 'source'], ['Peru', 292, 278, 'source'],
      ['Taiwan', 836, 185, 'component'], ['Japan', 883, 147, 'component'], ['China', 789, 153, 'assembly'],
      ['Vietnam', 800, 206, 'assembly'], ['India', 719, 189, 'assembly'], ['UAE', 650, 183, 'logistics'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['United States', 222, 144, 'buyer'], ['Brazil', 356, 278, 'buyer'],
    ],
  },
  {
    id: 'metal-knife',
    name: 'Metal knife',
    aliases: ['knife', 'metal knife', 'kitchen knife', 'kitchen blade', 'chef knife', 'chefs knife', "chef's knife", 'cook knife', 'cooks knife', 'table knife', 'dinner knife', 'cutlery knife', 'stainless knife', 'stainless steel knife', 'steel knife', 'paring knife', 'utility knife', 'slicing knife', 'carving knife', 'butter knife', 'metal blade'],
    category: 'Kitchen tool',
    descriptor: 'Kitchen and dining',
    portable: true,
    powered: false,
    setting: 'kitchen use',
    finishedPrice: {
      range: '$5–$300 per unit',
      basis: 'Typical new retail range from basic stamped utensils to premium forged kitchen knives.',
      tiers: [['Basic', '$5–$25'], ['Everyday', '$25–$80'], ['Premium', '$80–$180'], ['Specialty', '$180–$300']],
    },
    guessMaterials: ['Steel', 'Chromium', 'Nickel', 'Manganese', 'Molybdenum'],
    materials: [
      ['Iron / steel', 139, 0.15], ['Chromium', 23.4, 10], ['Nickel', 9, 16.05],
      ['Manganese', 3.6, 2], ['Molybdenum', 1.8, 50], ['Silicon', 1.8, 2.5], ['Carbon', 1.4, 0.20],
    ],
    stages: {
      sources: [['Australia', 24, null, ['Iron ore', 'manganese', 'nickel']], ['South Africa', 16, null, ['Chromium', 'manganese', 'iron ore']], ['Indonesia', 14, null, ['Nickel', 'iron ore']], ['Brazil', 10, null, ['Iron ore', 'manganese']], ['China', 9, null, ['Molybdenum', 'silicon', 'iron ore']], ['India', 8, null, ['Iron ore', 'manganese', 'chromium']], ['Philippines', 5, null, ['Nickel', 'chromium']], ['Kazakhstan', 4, null, ['Chromium', 'molybdenum']], ['Zimbabwe', 3, null, ['Chromium', 'nickel']], ['Canada', 2, null, ['Nickel', 'iron ore', 'molybdenum']], ['Finland', 1, null, ['Chromium', 'nickel']], ['Other', 4, null, ['Carbon', 'silicon', 'alloying metals']]],
      components: [
        ['China', 34, null, ['Stamped blades', 'molded handles', 'fasteners'], '156'],
        ['Germany', 13, null, ['Forged blades', 'steel blanks'], '276'],
        ['Japan', 12, null, ['Blade steel', 'forged blades', 'wood handles'], '392'],
        ['India', 9, null, ['Steel blanks', 'molded handles'], '356'],
        ['Italy', 6, null, ['Forged blades', 'handles'], '380'],
        ['Brazil', 5, null, ['Steel blanks', 'wood handles'], '076'],
        ['Vietnam', 4, null, ['Stamped blades', 'handles'], '704'],
        ['Switzerland', 3, null, ['Precision blades', 'handle parts'], '756'],
        ['United States', 3, null, ['Blade blanks', 'composite handles'], '840'],
        ['Taiwan', 3, null, ['Stamped blades', 'fasteners'], '158'],
        ['France', 2, null, ['Forged blades', 'handles'], '250'],
        ['Portugal', 2, null, ['Cork and wood handles', 'blade parts'], '620'],
        ['Other', 4, null, ['Pins', 'bolsters', 'minor handle parts'], null],
      ],
      assembly: [['China', 48], ['Germany', 9], ['Japan', 8], ['Brazil', 6], ['Vietnam', 5], ['India', 5], ['Switzerland', 4], ['Italy', 3], ['Portugal', 2], ['Spain', 2], ['France', 1.5], ['Taiwan', 1.5], ['Pakistan', 1], ['Other', 4]],
      logistics: [['Hong Kong', 22], ['Germany', 13], ['Netherlands', 12], ['United Arab Emirates', 9], ['Singapore', 8], ['Belgium', 7], ['United States', 6], ['Switzerland', 5], ['Italy', 4], ['Turkey', 3], ['Mexico', 3], ['Panama', 2], ['Poland', 2], ['Other', 4]],
      buyers: [['United States', 15], ['China', 10], ['Germany', 7], ['Japan', 6], ['United Kingdom', 5], ['France', 5], ['Brazil', 5], ['India', 5], ['Italy', 4], ['Canada', 4], ['Spain', 4], ['South Korea', 3], ['Mexico', 3], ['Australia', 3], ['Netherlands', 2.5], ['Russia', 2.5], ['Turkey', 2], ['Saudi Arabia', 2], ['South Africa', 1.5], ['Sweden', 1.5], ['Switzerland', 1.5], ['Poland', 1.5], ['Indonesia', 1], ['United Arab Emirates', 1], ['Other', 4]],
      waste: [['China', 17], ['United States', 10.5], ['India', 10], ['Germany', 7], ['Japan', 6], ['Turkey', 5], ['Italy', 4], ['United Kingdom', 4], ['France', 4], ['Brazil', 4], ['Mexico', 3], ['South Korea', 3], ['Spain', 3], ['Poland', 2.5], ['Russia', 2.5], ['Canada', 2], ['Australia', 2], ['Netherlands', 1.5], ['Belgium', 1.5], ['South Africa', 1.5], ['United Arab Emirates', 1], ['Indonesia', 1], ['Other', 4]],
    },
    feedback: [
      'It is a hand-held tool used at a table or on a work surface.',
      'Almost all of its mass is an iron alloy designed to resist corrosion.',
      'Chromium protects its surface, while carbon helps its edge stay hard.',
      'It has a fixed cutting edge and is commonly found in a kitchen.',
    ],
    mapRoles: {
      '036': ['source', 'buyer', 'waste'], '710': ['source', 'buyer', 'waste'], '360': ['source', 'buyer', 'waste'],
      '076': ['source', 'assembly', 'buyer', 'waste'], '156': ['source', 'assembly', 'buyer', 'waste'],
      '356': ['source', 'assembly', 'buyer', 'waste'], '608': ['source'], '398': ['source'],
      '716': ['source'], '124': ['source', 'buyer', 'waste'], '246': ['source'],
      '276': ['assembly', 'logistics', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'],
      '704': ['assembly'], '756': ['assembly', 'logistics', 'buyer'], '380': ['assembly', 'logistics', 'buyer', 'waste'],
      '620': ['assembly'], '724': ['assembly', 'buyer', 'waste'], '250': ['assembly', 'buyer', 'waste'],
      '158': ['assembly'], '586': ['assembly'], '344': ['logistics'], '528': ['logistics', 'buyer', 'waste'],
      '784': ['logistics', 'buyer', 'waste'], '702': ['logistics'], '056': ['logistics', 'waste'],
      '840': ['logistics', 'buyer', 'waste'], '792': ['logistics', 'buyer', 'waste'],
      '484': ['logistics', 'buyer', 'waste'], '591': ['logistics'], '616': ['logistics', 'buyer', 'waste'],
      '826': ['buyer', 'waste'], '410': ['buyer', 'waste'], '643': ['buyer', 'waste'],
      '682': ['buyer'], '752': ['buyer'],
    },
    mapLabels: [
      ['Australia', 872, 319, 'source'], ['South Africa', 548, 337, 'source'], ['Indonesia', 823, 278, 'source'],
      ['China', 789, 153, 'assembly'], ['Germany', 528, 107, 'assembly'], ['Japan', 883, 147, 'assembly'],
      ['Brazil', 356, 278, 'assembly'], ['Hong Kong', 807, 181, 'logistics'], ['Netherlands', 514, 106, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['India', 719, 189, 'buyer'],
    ],
  },
  {
    id: 'office-chair',
    name: 'Office chair',
    aliases: ['chair', 'office seat', 'desk chair', 'desk seat', 'task chair', 'task seat', 'computer chair', 'computer desk chair', 'swivel chair', 'swivel office chair', 'rolling chair', 'rolling office chair', 'wheeled chair', 'wheeled office chair', 'ergonomic chair', 'ergonomic office chair', 'work chair', 'workplace chair', 'operator chair', 'secretarial chair', 'adjustable chair', 'adjustable office chair'],
    category: 'Furniture',
    descriptor: 'Workplace furnishing',
    portable: false,
    powered: false,
    setting: 'workplace use',
    finishedPrice: {
      range: '$60–$1,500 per unit',
      basis: 'Typical new retail range; refurbished premium chairs can cost substantially less.',
      tiers: [['Basic', '$60–$150'], ['Everyday', '$150–$350'], ['Ergonomic', '$350–$800'], ['Premium', '$800–$1,500']],
    },
    guessMaterials: ['Nylon', 'Steel', 'Polypropylene', 'Aluminum', 'Polyurethane'],
    materials: [
      ['Nylon', 5957, 2.20], ['Steel', 4171, 0.70], ['Polypropylene', 2216, 1.10],
      ['Aluminum', 625, 2.80], ['Polyurethane', 563, 2.50], ['Polyoxymethylene', 261, 2.70],
      ['Polyester textile', 90, 1.30], ['Glass fiber', 55, 1.00],
      ['Thermoplastic elastomer', 35, 2.20], ['Zinc alloy', 20, 3.00],
      ['Powder coatings', 12, 4.00], ['Adhesives', 7, 3.00],
    ],
    stages: {
      sources: [['China', 18, null, ['Steel', 'nylon feedstocks', 'polypropylene', 'aluminum']], ['Australia', 12, null, ['Iron ore', 'bauxite', 'nickel']], ['Brazil', 10, null, ['Iron ore', 'bauxite']], ['India', 9, null, ['Iron ore', 'steel', 'polypropylene feedstocks']], ['Guinea', 7, null, ['Bauxite']], ['Indonesia', 7, null, ['Nickel', 'petrochemical feedstocks']], ['South Africa', 6, null, ['Chromium', 'manganese', 'iron ore']], ['Russia', 5, null, ['Nickel', 'aluminum', 'petrochemical feedstocks']], ['Canada', 4, null, ['Aluminum', 'steel', 'petrochemical feedstocks']], ['United States', 4, null, ['Polyurethane feedstocks', 'steel', 'adhesives']], ['Saudi Arabia', 4, null, ['Polypropylene feedstocks', 'nylon feedstocks']], ['Vietnam', 3, null, ['Rubber', 'steel']], ['Chile', 3, null, ['Copper', 'molybdenum']], ['Sweden', 2, null, ['Iron ore', 'steel']], ['Finland', 2, null, ['Chromium', 'nickel']], ['Other', 4, null, ['Glass fiber', 'zinc', 'coating minerals']]],
      components: [
        ['China', 30, null, ['Bases', 'casters', 'gas lifts', 'molded shells'], '156'],
        ['United States', 12, null, ['Tilt mechanisms', 'foam', 'upholstery'], '840'],
        ['Germany', 9, null, ['Mechanisms', 'gas lifts', 'mesh'], '276'],
        ['Italy', 8, null, ['Molded shells', 'upholstery'], '380'],
        ['Poland', 7, null, ['Frames', 'foam', 'upholstery'], '616'],
        ['Taiwan', 6, null, ['Casters', 'seat mechanisms'], '158'],
        ['South Korea', 5, null, ['Mesh', 'molded parts'], '410'],
        ['Canada', 4, null, ['Wood shells', 'upholstery'], '124'],
        ['Mexico', 4, null, ['Metal frames', 'foam'], '484'],
        ['Vietnam', 4, null, ['Wood parts', 'upholstery'], '704'],
        ['Czechia', 3, null, ['Mechanisms', 'metal frames'], '203'],
        ['Turkey', 2, null, ['Textiles', 'foam'], '792'],
        ['Other', 6, null, ['Armrests', 'fasteners', 'minor fittings'], null],
      ],
      assembly: [['China', 34], ['United States', 12], ['Germany', 8], ['Poland', 7], ['Italy', 6], ['Canada', 5], ['Mexico', 5], ['Vietnam', 4], ['Turkey', 3], ['Czechia', 3], ['Romania', 2.5], ['Portugal', 2], ['Japan', 2], ['India', 2], ['Brazil', 1.5], ['Other', 3]],
      logistics: [['Germany', 14], ['Netherlands', 13], ['Belgium', 10], ['United States', 9], ['Singapore', 8], ['United Arab Emirates', 8], ['Poland', 6], ['Hong Kong', 6], ['Mexico', 5], ['Turkey', 4], ['Panama', 3], ['Czechia', 3], ['Malaysia', 3], ['Canada', 2], ['Other', 6]],
      buyers: [['United States', 19], ['Germany', 8], ['United Kingdom', 6], ['France', 5.5], ['China', 6], ['Japan', 4.5], ['Canada', 4.5], ['Italy', 4], ['Netherlands', 3.5], ['Spain', 3.5], ['Australia', 3], ['Poland', 3], ['Sweden', 2.5], ['South Korea', 2.5], ['Belgium', 2.5], ['Switzerland', 2], ['Austria', 2], ['Brazil', 2], ['Mexico', 2], ['India', 3], ['Norway', 1.5], ['Denmark', 1.5], ['United Arab Emirates', 1.5], ['Saudi Arabia', 1.5], ['South Africa', 1], ['Other', 4]],
      waste: [['United States', 14], ['China', 9], ['Germany', 8], ['United Kingdom', 6], ['France', 5], ['Japan', 5], ['Canada', 4.5], ['Italy', 4], ['India', 4], ['Brazil', 4], ['Poland', 3.5], ['Spain', 3.5], ['Netherlands', 3], ['Mexico', 3], ['Australia', 3], ['Russia', 2.5], ['Turkey', 2.5], ['South Korea', 2.5], ['Belgium', 2], ['Indonesia', 2], ['South Africa', 1.5], ['Vietnam', 1.5], ['United Arab Emirates', 1], ['Ghana', 1], ['Other', 4]],
    },
    feedback: [
      'It is built to stay in one room and support one person for long periods.',
      'Its largest material share is engineered nylon, followed by steel.',
      'Adjustment mechanisms and rolling movement matter more than portability.',
      'It usually has a backrest, a height-adjustable seat and a five-point base.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'buyer', 'waste'], '036': ['source', 'buyer', 'waste'],
      '076': ['source', 'assembly', 'buyer', 'waste'], '356': ['source', 'assembly', 'buyer', 'waste'],
      '324': ['source'], '360': ['source', 'waste'], '710': ['source', 'buyer', 'waste'],
      '643': ['source', 'waste'], '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '682': ['source', 'buyer'],
      '704': ['source', 'assembly', 'waste'], '152': ['source'], '752': ['source', 'buyer'],
      '246': ['source'], '276': ['assembly', 'logistics', 'buyer', 'waste'],
      '616': ['assembly', 'logistics', 'buyer', 'waste'], '380': ['assembly', 'buyer', 'waste'],
      '484': ['assembly', 'logistics', 'buyer', 'waste'], '792': ['assembly', 'logistics', 'waste'],
      '203': ['assembly', 'logistics'], '642': ['assembly'], '620': ['assembly'],
      '392': ['assembly', 'buyer', 'waste'], '528': ['logistics', 'buyer', 'waste'],
      '056': ['logistics', 'buyer', 'waste'], '702': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '344': ['logistics'], '591': ['logistics'], '458': ['logistics'],
      '826': ['buyer', 'waste'], '250': ['buyer', 'waste'], '724': ['buyer', 'waste'],
      '410': ['buyer', 'waste'], '756': ['buyer'], '040': ['buyer'], '578': ['buyer'],
      '208': ['buyer'], '288': ['waste'],
    },
    mapLabels: [
      ['Australia', 872, 319, 'source'], ['Brazil', 356, 278, 'source'], ['Guinea', 487, 226, 'source'],
      ['China', 789, 153, 'assembly'], ['United States', 222, 144, 'assembly'], ['Germany', 528, 107, 'assembly'],
      ['Poland', 553, 101, 'assembly'], ['Netherlands', 514, 106, 'logistics'],
      ['Singapore', 789, 247, 'logistics'], ['United Kingdom', 493, 96, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Ghana', 506, 238, 'waste'],
    ],
  },
  {
    id: 'glass-bottle',
    name: 'Glass bottle',
    aliases: ['bottle', 'glass bottle', 'glass container', 'glass drinks bottle', 'glass drink bottle', 'glass beverage bottle', 'beverage bottle', 'drink bottle', 'water bottle', 'glass water bottle', 'wine bottle', 'beer bottle', 'soda bottle', 'soft drink bottle', 'juice bottle', 'milk bottle', 'spirits bottle', 'liquor bottle', 'champagne bottle', 'reusable glass bottle', 'refillable glass bottle', 'returnable bottle'],
    category: 'Packaging',
    descriptor: 'Food and drink packaging',
    portable: true,
    powered: false,
    setting: 'food and drink use',
    finishedPrice: {
      range: '$0.25–$8 per unit',
      basis: 'Indicative empty-container price: high-volume wholesale at the low end, small retail packs and reusable designs at the high end.',
      tiers: [['Bulk standard', '$0.25–$0.75'], ['Small wholesale', '$0.75–$1.50'], ['Retail empty', '$1.50–$4'], ['Reusable / design', '$4–$8']],
    },
    guessMaterials: ['Recycled glass', 'Silica sand', 'Soda ash', 'Limestone', 'Steel'],
    materials: [
      ['Recycled glass cullet', 102, 0.06], ['Silica sand', 56, 0.05], ['Soda ash', 18, 0.30],
      ['Limestone', 10, 0.12], ['Dolomite', 5, 0.15], ['Steel', 3, 0.70],
      ['Paper', 2, 0.90], ['Plastic liner', 1.5, 1.50], ['Protective coatings', 1, 4.00],
      ['Adhesive', 0.5, 3.00], ['Printing inks', 0.5, 8.00], ['Mineral colorants', 0.5, 2.00],
    ],
    stages: {
      sources: [['China', 17, null, ['Silica sand', 'soda ash', 'limestone', 'colorants']], ['United States', 12, null, ['Soda ash', 'silica sand', 'recycled cullet']], ['Turkey', 9, null, ['Soda ash', 'limestone', 'dolomite']], ['India', 8, null, ['Silica sand', 'limestone', 'dolomite']], ['Germany', 7, null, ['Recycled cullet', 'silica sand', 'paper']], ['France', 6, null, ['Recycled cullet', 'limestone', 'paper']], ['Italy', 6, null, ['Recycled cullet', 'silica sand', 'coatings']], ['Spain', 5, null, ['Recycled cullet', 'silica sand', 'limestone']], ['Brazil', 5, null, ['Silica sand', 'limestone', 'paper']], ['Mexico', 4, null, ['Silica sand', 'soda ash', 'recycled cullet']], ['Australia', 4, null, ['Silica sand', 'limestone', 'recycled cullet']], ['South Africa', 4, null, ['Silica sand', 'limestone', 'colorants']], ['Egypt', 3, null, ['Silica sand', 'limestone']], ['Chile', 3, null, ['Silica sand', 'limestone']], ['Poland', 3, null, ['Recycled cullet', 'silica sand', 'paper']], ['Other', 4, null, ['Steel', 'plastic liner resin', 'inks', 'adhesives']]],
      components: [
        ['China', 22, null, ['Closures', 'labels', 'molded containers'], '156'],
        ['United States', 13, null, ['Closures', 'labels', 'glass containers'], '840'],
        ['Italy', 11, null, ['Glass containers', 'closures'], '380'],
        ['Germany', 9, null, ['Closures', 'labels', 'glass containers'], '276'],
        ['France', 8, null, ['Glass containers', 'labels'], '250'],
        ['Spain', 7, null, ['Glass containers', 'closures'], '724'],
        ['Mexico', 6, null, ['Glass containers', 'metal closures'], '484'],
        ['Turkey', 5, null, ['Glass containers', 'closures'], '792'],
        ['India', 5, null, ['Glass containers', 'closures'], '356'],
        ['Brazil', 4, null, ['Glass containers', 'labels'], '076'],
        ['Poland', 3, null, ['Glass containers', 'metal closures'], '616'],
        ['Portugal', 2, null, ['Glass containers', 'cork closures'], '620'],
        ['Other', 5, null, ['Liners', 'adhesives', 'minor label stock'], null],
      ],
      assembly: [['China', 20], ['United States', 12], ['Italy', 9], ['France', 8], ['Germany', 7], ['Spain', 6], ['Mexico', 6], ['Brazil', 5], ['India', 5], ['Russia', 4], ['Turkey', 4], ['Poland', 3], ['United Kingdom', 3], ['Japan', 2], ['South Africa', 2], ['Other', 4]],
      logistics: [['Netherlands', 14], ['Germany', 12], ['Belgium', 10], ['United States', 9], ['United Arab Emirates', 8], ['Singapore', 7], ['Mexico', 6], ['Spain', 5], ['France', 5], ['Panama', 4], ['United Kingdom', 4], ['Poland', 3], ['Turkey', 3], ['South Africa', 3], ['Other', 7]],
      buyers: [['United States', 14], ['China', 10], ['Germany', 7], ['France', 6], ['United Kingdom', 5], ['Italy', 5], ['Brazil', 4.5], ['Mexico', 4.5], ['Spain', 4], ['India', 4], ['Japan', 3.5], ['Russia', 3.5], ['Canada', 3], ['Turkey', 3], ['Poland', 2.5], ['South Africa', 2.5], ['Australia', 2], ['Netherlands', 2], ['Belgium', 2], ['Argentina', 2], ['Nigeria', 1.5], ['Indonesia', 1.5], ['Saudi Arabia', 1.5], ['United Arab Emirates', 1.5], ['Other', 4]],
      waste: [['China', 10], ['United States', 9], ['India', 7], ['Germany', 6], ['Brazil', 5], ['Mexico', 4], ['France', 5], ['United Kingdom', 5], ['Italy', 5], ['Russia', 4], ['Turkey', 4], ['Spain', 4], ['Japan', 3.5], ['Indonesia', 3.5], ['South Africa', 3], ['Nigeria', 3], ['Poland', 2.5], ['Canada', 2.5], ['Australia', 2], ['Netherlands', 2], ['Belgium', 2], ['Argentina', 2], ['Ghana', 1.5], ['United Arab Emirates', 1.5], ['Other', 3]],
    },
    feedback: [
      'It is portable packaging rather than a durable tool or device.',
      'More than half of its modeled mass can come from previously used material of the same kind.',
      'Silica sand, soda ash and limestone are melted together at high temperature.',
      'It is rigid, transparent or colored, and commonly sealed with a small closure.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '792': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '356': ['source', 'assembly', 'buyer', 'waste'],
      '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['source', 'assembly', 'buyer', 'waste'], '724': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'assembly', 'buyer', 'waste'], '484': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '036': ['source', 'buyer', 'waste'], '710': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '818': ['source'], '152': ['source'], '616': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '643': ['assembly', 'buyer', 'waste'], '826': ['assembly', 'logistics', 'buyer', 'waste'],
      '392': ['assembly', 'buyer', 'waste'], '528': ['logistics', 'buyer', 'waste'],
      '056': ['logistics', 'buyer', 'waste'], '784': ['logistics', 'buyer', 'waste'],
      '702': ['logistics'], '591': ['logistics'], '124': ['buyer', 'waste'],
      '032': ['buyer', 'waste'], '566': ['buyer', 'waste'], '360': ['buyer', 'waste'],
      '682': ['buyer'], '288': ['waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['United States', 222, 144, 'source'], ['Turkey', 591, 142, 'source'],
      ['Italy', 535, 130, 'assembly'], ['France', 509, 123, 'assembly'], ['Mexico', 191, 197, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Belgium', 510, 111, 'logistics'],
      ['Brazil', 356, 278, 'buyer'], ['India', 719, 189, 'buyer'], ['Ghana', 506, 238, 'waste'],
    ],
  },
  {
    id: 'paper',
    name: 'Paper',
    aliases: ['paper', 'sheet of paper', 'paper sheet', 'piece of paper', 'writing paper', 'printing paper', 'printer paper', 'printer sheet', 'copy paper', 'copier paper', 'office paper', 'office copy paper', 'white paper', 'blank paper', 'plain paper', 'a4 paper', 'a4 sheet', 'a4 printer paper', 'a4 copy paper', 'letter paper', 'letter-size paper', 'notebook paper', 'writing sheet', 'printout paper', 'ream paper'],
    category: 'Stationery',
    descriptor: 'Writing and printing material',
    portable: true,
    powered: false,
    setting: 'office, school and home use',
    finishedPrice: {
      range: '$0.01–$0.15 per unit',
      basis: 'Typical range for one blank A4 sheet: bulk office reams at the low end and premium, recycled or specialty sheets at the high end.',
      tiers: [['Bulk office', '$0.01–$0.03'], ['Everyday retail', '$0.03–$0.06'], ['Premium / recycled', '$0.06–$0.10'], ['Specialty sheet', '$0.10–$0.15']],
    },
    guessMaterials: ['Cellulose fiber', 'Calcium carbonate', 'Kaolin clay', 'Starch', 'Sizing agents'],
    materials: [
      ['Cellulose fiber', 3.82, 1.20], ['Calcium carbonate', 0.70, 0.15],
      ['Kaolin clay', 0.18, 0.18], ['Starch', 0.10, 0.55],
      ['Retained moisture', 0.10, 0.001], ['Sizing agents', 0.04, 2.50],
      ['Optical brightener', 0.02, 6.00], ['Retention aids', 0.02, 3.00],
      ['Dyes and pigments', 0.02, 4.00],
    ],
    stages: {
      sources: [['Brazil', 16, null, ['Eucalyptus pulp', 'starch']], ['United States', 14, null, ['Softwood pulp', 'recovered fiber']], ['Canada', 11, null, ['Softwood pulp', 'calcium carbonate']], ['Sweden', 9, null, ['Softwood pulp', 'recovered fiber']], ['Finland', 9, null, ['Softwood pulp', 'calcium carbonate']], ['Indonesia', 8, null, ['Acacia pulp', 'starch']], ['Chile', 7, null, ['Eucalyptus pulp', 'softwood pulp']], ['Uruguay', 5, null, ['Eucalyptus pulp']], ['Russia', 5, null, ['Softwood pulp', 'birch pulp']], ['Germany', 4, null, ['Recovered fiber', 'kaolin clay']], ['China', 4, null, ['Recovered fiber', 'calcium carbonate']], ['Australia', 2, null, ['Eucalyptus pulp', 'kaolin clay']], ['Portugal', 2, null, ['Eucalyptus pulp']], ['New Zealand', 1, null, ['Softwood pulp']], ['Other', 3, null, ['Starch', 'sizing agents', 'brighteners', 'pigments']]],
      components: [
        ['Brazil', 17, null, ['Bleached eucalyptus pulp', 'market pulp'], '076'],
        ['Canada', 13, null, ['Softwood kraft pulp', 'recycled fibre'], '124'],
        ['United States', 13, null, ['Pulp', 'recycled fibre', 'mineral fillers'], '840'],
        ['Finland', 10, null, ['Market pulp', 'coating materials'], '246'],
        ['Sweden', 9, null, ['Softwood pulp', 'mineral fillers'], '752'],
        ['Indonesia', 8, null, ['Hardwood pulp', 'starch'], '360'],
        ['Chile', 7, null, ['Softwood and hardwood pulp'], '152'],
        ['Uruguay', 5, null, ['Eucalyptus pulp'], '858'],
        ['Germany', 4, null, ['Pigments', 'sizing agents'], '276'],
        ['China', 4, null, ['Calcium carbonate', 'optical brighteners'], '156'],
        ['Austria', 3, null, ['Market pulp'], '040'],
        ['Portugal', 3, null, ['Eucalyptus pulp'], '620'],
        ['Other', 4, null, ['Starch', 'retention aids', 'minor additives'], null],
      ],
      assembly: [['China', 33], ['United States', 15], ['India', 5], ['Japan', 5], ['Germany', 5], ['Indonesia', 3], ['Brazil', 3], ['South Korea', 3], ['Russia', 3], ['Finland', 3], ['Sweden', 3], ['Canada', 2.5], ['Italy', 2], ['France', 2], ['Poland', 1.5], ['Austria', 1.5], ['Portugal', 1.5], ['Other', 8]],
      logistics: [['Germany', 11], ['United States', 9], ['China', 9], ['Sweden', 7], ['Finland', 6], ['Canada', 5], ['Indonesia', 5], ['Netherlands', 6], ['Belgium', 4], ['Singapore', 4], ['Austria', 3], ['France', 3], ['Russia', 3], ['Italy', 3], ['Malaysia', 3], ['United Arab Emirates', 3], ['Poland', 2], ['Turkey', 2], ['Mexico', 2], ['United Kingdom', 2], ['Brazil', 2], ['Portugal', 2], ['Panama', 1], ['South Africa', 1], ['Other', 2]],
      buyers: [['China', 12.5], ['United States', 11], ['Germany', 8], ['United Kingdom', 5], ['France', 4], ['India', 4], ['Japan', 4], ['Italy', 4], ['Poland', 4], ['Mexico', 3], ['Canada', 3], ['Spain', 3], ['Nigeria', 3], ['South Korea', 3], ['Brazil', 3], ['Netherlands', 3], ['Turkey', 2.5], ['Indonesia', 2.5], ['Australia', 2.5], ['Russia', 2], ['Belgium', 2], ['Austria', 2], ['South Africa', 2], ['Sweden', 1.5], ['United Arab Emirates', 1.5], ['Other', 4]],
      waste: [['China', 17], ['United States', 13], ['India', 7], ['Japan', 5], ['Germany', 5], ['United Kingdom', 4], ['France', 4], ['Brazil', 4], ['Indonesia', 3.5], ['Russia', 3.5], ['Italy', 3], ['Mexico', 3], ['South Korea', 3], ['Spain', 2.5], ['Poland', 2.5], ['Canada', 2], ['Turkey', 2], ['Nigeria', 2], ['Australia', 2], ['Netherlands', 1.5], ['Belgium', 1.5], ['South Africa', 1.5], ['Sweden', 1.5], ['Malaysia', 1], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is a very light, flat everyday medium found in offices, schools and homes.',
      'Most of its mass is cellulose fiber pressed into a thin, flexible layer.',
      'Mineral fillers improve brightness and opacity, while starch helps its surface behave consistently.',
      'A common version measures 210 × 297 mm and is made for writing, drawing or printing.',
    ],
    mapRoles: {
      '076': ['source', 'assembly', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '752': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '246': ['source', 'assembly', 'logistics'], '360': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '152': ['source'], '858': ['source'], '643': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '156': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '036': ['source', 'buyer', 'waste'], '620': ['source', 'assembly', 'logistics'], '554': ['source'],
      '356': ['assembly', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'], '410': ['assembly', 'buyer', 'waste'],
      '380': ['assembly', 'logistics', 'buyer', 'waste'], '250': ['assembly', 'logistics', 'buyer', 'waste'],
      '616': ['assembly', 'logistics', 'buyer', 'waste'], '040': ['assembly', 'logistics', 'buyer'],
      '528': ['logistics', 'buyer', 'waste'], '056': ['logistics', 'buyer', 'waste'], '702': ['logistics'],
      '458': ['logistics', 'waste'], '784': ['logistics', 'buyer', 'waste'], '792': ['logistics', 'buyer', 'waste'],
      '484': ['logistics', 'buyer', 'waste'], '826': ['logistics', 'buyer', 'waste'], '710': ['logistics', 'buyer', 'waste'],
      '724': ['buyer', 'waste'], '566': ['buyer', 'waste'],
    },
    mapLabels: [
      ['Brazil', 356, 278, 'source'], ['Canada', 214, 97, 'source'], ['Sweden', 544, 75, 'source'],
      ['Finland', 570, 73, 'component'], ['China', 789, 153, 'assembly'], ['United States', 222, 144, 'assembly'],
      ['India', 719, 189, 'assembly'], ['Germany', 528, 107, 'logistics'], ['Netherlands', 514, 106, 'logistics'],
      ['United Kingdom', 493, 96, 'buyer'], ['Nigeria', 500, 241, 'buyer'], ['Indonesia', 823, 278, 'waste'],
    ],
  },
  {
    id: 'ballpoint-pen',
    name: 'Ballpoint pen',
    aliases: ['pen', 'ballpoint pen', 'ball point pen', 'ball pen', 'biro', 'biro pen', 'writing pen', 'ink pen', 'plastic pen', 'disposable pen', 'stick pen', 'capped pen', 'click pen', 'retractable pen', 'office pen', 'school pen', 'blue pen', 'black pen', 'red pen', 'bic', 'bic pen', 'bic biro', 'bic cristal', 'cristal pen', 'roller pen', 'writing instrument'],
    category: 'Stationery',
    descriptor: 'Hand-held writing instrument',
    portable: true,
    powered: false,
    setting: 'office, school and home use',
    finishedPrice: {
      range: '$0.10–$5 per unit',
      basis: 'Typical new retail range for one mass-market ballpoint: bulk stick pens at the low end and branded refillable or multi-function models at the high end.',
      tiers: [['Bulk stick', '$0.10–$0.30'], ['Everyday branded', '$0.30–$1'], ['Refillable', '$1–$3'], ['Multi-function', '$3–$5']],
    },
    guessMaterials: ['Polystyrene', 'Polypropylene', 'Ink', 'Brass', 'Tungsten carbide'],
    materials: [
      ['Polystyrene', 3.45, 1.35], ['Polypropylene', 1.35, 1.15],
      ['Oil-based ink', 0.35, 8.00], ['Brass', 0.20, 6.00],
      ['Steel', 0.08, 0.70], ['Tungsten carbide', 0.05, 45.00],
      ['Pigments and dyes', 0.02, 12.00],
    ],
    stages: {
      sources: [['China', 19, null, ['Tungsten', 'plastics', 'pigments']], ['United States', 14, null, ['Styrene feedstocks', 'polypropylene']], ['Saudi Arabia', 12, null, ['Petrochemical feedstocks']], ['Chile', 10, null, ['Copper for brass']], ['Australia', 8, null, ['Zinc', 'iron ore']], ['Indonesia', 7, null, ['Petrochemical feedstocks', 'tin']], ['Peru', 6, null, ['Copper', 'zinc']], ['India', 5, null, ['Pigments', 'dyes', 'plastics']], ['Vietnam', 4, null, ['Tungsten']], ['Brazil', 3, null, ['Iron ore', 'petrochemical feedstocks']], ['South Africa', 3, null, ['Iron ore', 'manganese']], ['Rwanda', 2, null, ['Tungsten']], ['Bolivia', 2, null, ['Tungsten', 'zinc']], ['Germany', 1, null, ['Specialty dyes', 'ink additives']], ['Other', 4, null, ['Solvents', 'resins', 'lubricants']]],
      components: [
        ['China', 35, null, ['Barrels', 'ink reservoirs', 'tip assemblies'], '156'],
        ['Japan', 15, null, ['Ink', 'ball-tip assemblies'], '392'],
        ['Germany', 9, null, ['Ink', 'precision tips', 'polymers'], '276'],
        ['France', 7, null, ['Ink systems', 'molded parts'], '250'],
        ['United States', 6, null, ['Inks', 'engineering polymers'], '840'],
        ['India', 6, null, ['Barrels', 'ink', 'tips'], '356'],
        ['Switzerland', 4, null, ['Precision tips', 'specialty ink'], '756'],
        ['Italy', 4, null, ['Molded parts', 'metal clips'], '380'],
        ['Mexico', 3, null, ['Barrels', 'packaging parts'], '484'],
        ['South Korea', 3, null, ['Inks', 'polymers'], '410'],
        ['Taiwan', 3, null, ['Tips', 'molded parts'], '158'],
        ['Other', 5, null, ['Springs', 'plugs', 'minor fittings'], null],
      ],
      assembly: [['China', 34], ['Japan', 12], ['France', 8], ['Germany', 7], ['Mexico', 6], ['India', 5], ['United States', 5], ['Italy', 3], ['Switzerland', 3], ['Slovakia', 2.5], ['Poland', 2], ['Czechia', 2], ['Spain', 1.5], ['Netherlands', 1.5], ['Tunisia', 1], ['South Korea', 1], ['Kenya', 0.5], ['Turkey', 0.5], ['Other', 4.5]],
      logistics: [['Hong Kong', 16], ['Netherlands', 12], ['Germany', 10], ['Singapore', 8], ['United States', 7], ['Belgium', 6], ['United Arab Emirates', 5], ['Mexico', 5], ['France', 4], ['China', 4], ['Poland', 3], ['Spain', 3], ['United Kingdom', 3], ['Japan', 3], ['Panama', 2], ['Turkey', 2], ['Malaysia', 2], ['Canada', 2], ['South Africa', 1], ['Chile', 1], ['Other', 1]],
      buyers: [['United States', 20], ['France', 8], ['Germany', 6], ['Mexico', 5], ['United Kingdom', 4], ['Italy', 4], ['China', 4], ['Spain', 4], ['Netherlands', 3.5], ['Poland', 3.5], ['Canada', 3], ['South Korea', 3], ['Czechia', 3], ['Japan', 3], ['Saudi Arabia', 2.5], ['Switzerland', 2.5], ['Australia', 2.5], ['Indonesia', 2], ['Brazil', 2], ['Thailand', 2], ['Belgium', 2], ['India', 2], ['Romania', 1.5], ['Singapore', 1.5], ['South Africa', 1.5], ['Other', 4]],
      waste: [['China', 15], ['United States', 11], ['India', 7], ['France', 5], ['Germany', 5], ['Mexico', 4], ['United Kingdom', 4], ['Italy', 4], ['Indonesia', 3.5], ['Brazil', 3.5], ['Japan', 3], ['Spain', 3], ['Poland', 3], ['South Korea', 3], ['Canada', 2.5], ['Turkey', 2.5], ['Thailand', 2.5], ['Australia', 2], ['Russia', 2], ['South Africa', 2], ['Malaysia', 2], ['Nigeria', 2], ['Netherlands', 1.5], ['Belgium', 1.5], ['Philippines', 1.5], ['Other', 4]],
    },
    feedback: [
      'It is a small hand-held object used repeatedly at desks, schools and counters.',
      'Most of its mass is molded plastic, with tiny metal parts concentrated at one end.',
      'A viscous colored liquid moves through a narrow internal tube during use.',
      'A rolling carbide sphere transfers the liquid onto a surface to form lines and words.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '682': ['source', 'buyer'], '152': ['source', 'logistics'], '036': ['source', 'buyer', 'waste'],
      '360': ['source', 'buyer', 'waste'], '604': ['source'], '356': ['source', 'assembly', 'buyer', 'waste'],
      '704': ['source'], '076': ['source', 'buyer', 'waste'], '710': ['source', 'logistics', 'buyer', 'waste'],
      '646': ['source'], '068': ['source'], '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '392': ['assembly', 'logistics', 'buyer', 'waste'], '250': ['assembly', 'logistics', 'buyer', 'waste'],
      '484': ['assembly', 'logistics', 'buyer', 'waste'], '380': ['assembly', 'buyer', 'waste'],
      '756': ['assembly', 'buyer'], '703': ['assembly'], '616': ['assembly', 'logistics', 'buyer', 'waste'],
      '203': ['assembly', 'buyer'], '724': ['assembly', 'logistics', 'buyer', 'waste'], '528': ['assembly', 'logistics', 'buyer', 'waste'],
      '788': ['assembly'], '410': ['assembly', 'buyer', 'waste'], '404': ['assembly'], '792': ['assembly', 'logistics', 'waste'],
      '344': ['logistics'], '702': ['logistics', 'buyer'], '056': ['logistics', 'buyer', 'waste'],
      '784': ['logistics'], '591': ['logistics'], '826': ['logistics', 'buyer', 'waste'], '458': ['logistics', 'waste'],
      '124': ['logistics', 'buyer', 'waste'], '764': ['buyer', 'waste'], '642': ['buyer'],
      '643': ['waste'], '566': ['waste'], '608': ['waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['Saudi Arabia', 627, 187, 'source'], ['Chile', 328, 308, 'source'],
      ['Japan', 883, 147, 'assembly'], ['France', 509, 123, 'assembly'], ['Mexico', 191, 197, 'assembly'],
      ['Hong Kong', 807, 181, 'logistics'], ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['Brazil', 356, 278, 'waste'], ['India', 719, 189, 'waste'],
    ],
  },
  {
    id: 'beef',
    name: 'Beef',
    aliases: ['beef', 'beef meat', 'cow meat', 'cattle meat', 'red meat', 'steak', 'beef steak', 'raw beef', 'fresh beef', 'piece of beef', 'cut of beef', 'beef cut', 'sirloin', 'sirloin steak', 'rump steak', 'ribeye', 'rib eye', 'ribeye steak', 'fillet steak', 'tenderloin steak', 'minute steak', 'grilling steak', 'roast beef', 'beef portion', 'beef serving'],
    category: 'Food',
    descriptor: 'Fresh animal-protein food',
    portable: true,
    powered: false,
    setting: 'meal preparation and eating',
    finishedPrice: {
      range: '$2–$15 per unit',
      basis: 'Typical retail range for a 250 g raw serving: value cuts at the low end and premium steak cuts at the high end, excluding restaurant preparation.',
      tiers: [['Value cut', '$2–$4'], ['Everyday steak', '$4–$7'], ['Premium cut', '$7–$11'], ['Specialty / aged', '$11–$15']],
    },
    guessMaterials: ['Water', 'Muscle protein', 'Fat', 'Collagen', 'Minerals'],
    materials: [
      ['Water', 164, 0.001], ['Muscle protein', 50, 30.00],
      ['Fat', 27, 8.00], ['Collagen and connective protein', 5, 10.00],
      ['Minerals', 2.5, 1.00], ['Glycogen and sugars', 1, 2.00],
      ['Pigments and vitamins', 0.5, 20.00],
    ],
    stages: {
      sources: [['Brazil', 18, null, ['Pasture', 'soy feed', 'cattle']], ['United States', 15, null, ['Cattle', 'maize feed', 'pasture']], ['China', 10, null, ['Cattle', 'maize feed']], ['Argentina', 8, null, ['Pasture', 'cattle']], ['Australia', 8, null, ['Pasture', 'cattle']], ['India', 6, null, ['Bovines', 'crop residues']], ['Mexico', 5, null, ['Cattle', 'maize feed']], ['France', 4, null, ['Cattle', 'grass', 'grain']], ['Germany', 4, null, ['Cattle', 'grass', 'grain']], ['Ireland', 3, null, ['Grass', 'cattle']], ['Paraguay', 3, null, ['Pasture', 'cattle']], ['Canada', 4, null, ['Cattle', 'barley feed']], ['New Zealand', 4, null, ['Pasture', 'cattle']], ['Uruguay', 3, null, ['Pasture', 'cattle']], ['South Africa', 2, null, ['Cattle', 'maize feed']], ['Pakistan', 2, null, ['Cattle', 'fodder']], ['Other', 1, null, ['Feed grains', 'forage', 'water']]],
      assembly: [['Brazil', 20], ['United States', 19], ['China', 13], ['India', 7.5], ['Argentina', 5], ['Australia', 4.5], ['Mexico', 3.5], ['Russia', 2.5], ['Canada', 2], ['France', 2], ['Germany', 2], ['Italy', 1.5], ['Ireland', 1.5], ['United Kingdom', 1.5], ['New Zealand', 1.5], ['South Africa', 1], ['Japan', 1], ['Pakistan', 1], ['Paraguay', 1], ['Uruguay', 1], ['Colombia', 1], ['Turkey', 1], ['Egypt', 1], ['Indonesia', 1], ['Chile', 1], ['Other', 3]],
      logistics: [['Brazil', 18], ['Australia', 13], ['India', 7], ['United States', 7], ['Argentina', 7], ['New Zealand', 6], ['Canada', 5], ['Uruguay', 4], ['Paraguay', 4], ['Mexico', 3], ['Netherlands', 3], ['Germany', 3], ['Belgium', 2], ['United Arab Emirates', 2], ['Singapore', 2], ['Hong Kong', 2], ['Ireland', 1], ['Poland', 1], ['Spain', 1], ['France', 1], ['Chile', 1], ['South Africa', 1], ['Turkey', 1], ['Panama', 1], ['Other', 4]],
      buyers: [['China', 23], ['United States', 9], ['Japan', 7], ['South Korea', 6], ['Germany', 5], ['France', 5], ['Mexico', 4], ['United Kingdom', 4], ['Italy', 3], ['Netherlands', 3], ['Canada', 3], ['Chile', 3], ['Egypt', 2.5], ['Indonesia', 2.5], ['Spain', 2], ['Russia', 2], ['Saudi Arabia', 2], ['United Arab Emirates', 2], ['Brazil', 1.5], ['Australia', 1.5], ['Malaysia', 1.5], ['Philippines', 1.5], ['Turkey', 1], ['South Africa', 1], ['Other', 4]],
      waste: [['China', 19], ['United States', 10], ['Brazil', 8], ['India', 6], ['Germany', 5], ['France', 5], ['Japan', 4], ['Mexico', 4], ['United Kingdom', 3.5], ['Italy', 3.5], ['Argentina', 3], ['Russia', 3], ['Australia', 3], ['South Korea', 2.5], ['Canada', 2.5], ['Spain', 2], ['Indonesia', 2], ['Turkey', 2], ['South Africa', 1.5], ['Saudi Arabia', 1.5], ['Netherlands', 1.5], ['Egypt', 1.5], ['Malaysia', 1], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is a perishable everyday food rather than a durable manufactured object.',
      'Roughly two thirds of its mass is water, followed by protein and fat.',
      'Its upstream journey depends on pasture, feed crops, livestock and temperature-controlled transport.',
      'It is a red animal-derived food commonly sold as steaks, roasts or other cuts.',
    ],
    mapRoles: {
      '076': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '156': ['source', 'assembly', 'buyer', 'waste'], '032': ['source', 'assembly', 'logistics', 'waste'],
      '036': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '356': ['source', 'assembly', 'logistics', 'waste'],
      '484': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '372': ['source', 'assembly', 'logistics'],
      '600': ['source', 'assembly', 'logistics'], '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '554': ['source', 'assembly', 'logistics'], '858': ['source', 'assembly', 'logistics'], '710': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '586': ['source', 'assembly'], '643': ['assembly', 'buyer', 'waste'], '380': ['assembly', 'buyer', 'waste'],
      '826': ['assembly', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'], '170': ['assembly'],
      '792': ['assembly', 'logistics', 'buyer', 'waste'], '818': ['assembly', 'buyer', 'waste'],
      '360': ['assembly', 'buyer', 'waste'], '152': ['assembly', 'logistics', 'buyer'],
      '528': ['logistics', 'buyer', 'waste'], '056': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '702': ['logistics'], '344': ['logistics'], '616': ['logistics'], '724': ['logistics', 'buyer', 'waste'],
      '591': ['logistics'], '410': ['buyer', 'waste'], '682': ['buyer', 'waste'], '458': ['buyer', 'waste'],
      '608': ['buyer'],
    },
    mapLabels: [
      ['Brazil', 356, 278, 'source'], ['United States', 222, 144, 'source'], ['Argentina', 332, 343, 'source'],
      ['China', 789, 153, 'assembly'], ['India', 719, 189, 'assembly'], ['Australia', 872, 319, 'logistics'],
      ['New Zealand', 934, 371, 'logistics'], ['Netherlands', 514, 106, 'logistics'], ['Japan', 883, 147, 'buyer'],
      ['South Korea', 849, 164, 'buyer'], ['Mexico', 191, 197, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'muesli',
    name: 'Muesli',
    aliases: ['muesli', 'musli', 'müsli', 'cereal', 'breakfast cereal', 'cold cereal', 'oat cereal', 'oats cereal', 'mixed cereal', 'grain cereal', 'wholegrain cereal', 'whole grain cereal', 'muesli cereal', 'muesli mix', 'cereal mix', 'breakfast mix', 'oat mix', 'fruit and nut cereal', 'fruit cereal', 'nut cereal', 'granola', 'granola cereal', 'dry cereal', 'breakfast grains', 'rolled oat cereal'],
    category: 'Food',
    descriptor: 'Dry grain-based breakfast food',
    portable: true,
    powered: false,
    setting: 'breakfast and snack use',
    finishedPrice: {
      range: '$0.30–$2 per unit',
      basis: 'Typical retail equivalent for a 100 g dry serving: economy family packs at the low end and organic, high-nut or premium mixes at the high end.',
      tiers: [['Economy', '$0.30–$0.60'], ['Everyday', '$0.60–$1'], ['Organic', '$1–$1.50'], ['Premium nut mix', '$1.50–$2']],
    },
    guessMaterials: ['Rolled oats', 'Raisins', 'Wheat flakes', 'Almonds', 'Sunflower seeds'],
    materials: [
      ['Rolled oats', 60, 0.55], ['Raisins', 15, 2.80], ['Wheat flakes', 10, 0.45],
      ['Almonds', 5, 6.50], ['Sunflower seeds', 4, 1.60], ['Sugar or honey solids', 3, 1.10],
      ['Dried apple', 2, 5.00], ['Salt and minerals', 1, 0.25],
    ],
    stages: {
      sources: [['Canada', 14, null, ['Oats', 'wheat']], ['Russia', 12, null, ['Oats', 'wheat', 'sunflower seeds']], ['United States', 12, null, ['Almonds', 'oats', 'raisins']], ['Turkey', 10, null, ['Raisins', 'almonds']], ['Australia', 9, null, ['Oats', 'almonds', 'wheat']], ['Poland', 7, null, ['Oats', 'wheat', 'apples']], ['Finland', 6, null, ['Oats']], ['China', 6, null, ['Apples', 'raisins', 'wheat']], ['Ukraine', 5, null, ['Sunflower seeds', 'wheat']], ['Spain', 4, null, ['Almonds', 'raisins']], ['Chile', 3, null, ['Raisins', 'apples']], ['Argentina', 3, null, ['Sunflower seeds', 'wheat']], ['France', 2, null, ['Wheat', 'oats', 'apples']], ['Germany', 2, null, ['Oats', 'wheat', 'sugar']], ['Sweden', 1, null, ['Oats']], ['Other', 4, null, ['Honey', 'salt', 'minor fruits and nuts']]],
      assembly: [['United States', 16], ['Germany', 12], ['United Kingdom', 9], ['Switzerland', 8], ['France', 7], ['Australia', 6], ['Canada', 5], ['China', 5], ['Poland', 4], ['Netherlands', 4], ['Italy', 3], ['Spain', 3], ['Austria', 3], ['Sweden', 2], ['Finland', 2], ['Denmark', 2], ['New Zealand', 2], ['Japan', 1.5], ['South Korea', 1.5], ['South Africa', 1], ['Other', 3]],
      logistics: [['Netherlands', 13], ['Germany', 12], ['United States', 9], ['Belgium', 8], ['Singapore', 7], ['United Kingdom', 6], ['United Arab Emirates', 6], ['Canada', 5], ['Switzerland', 5], ['France', 4], ['Poland', 4], ['Australia', 3], ['Spain', 3], ['Hong Kong', 3], ['Turkey', 2], ['Panama', 2], ['South Africa', 2], ['Other', 6]],
      buyers: [['United States', 10], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Canada', 5], ['Australia', 5], ['China', 5], ['Switzerland', 4], ['Netherlands', 4], ['Italy', 4], ['Spain', 4], ['Japan', 4], ['Poland', 3], ['Sweden', 3], ['Austria', 3], ['Belgium', 3], ['South Korea', 3], ['Denmark', 2.5], ['Finland', 2.5], ['New Zealand', 2], ['South Africa', 2], ['United Arab Emirates', 1.5], ['Singapore', 1.5], ['Brazil', 1.5], ['Mexico', 1.5], ['Other', 4]],
      waste: [['United States', 13.5], ['China', 9], ['Germany', 7], ['United Kingdom', 6], ['France', 5], ['Canada', 4.5], ['Australia', 4.5], ['Italy', 4], ['Spain', 4], ['Japan', 4], ['Netherlands', 3.5], ['Poland', 3.5], ['Russia', 3], ['Sweden', 3], ['South Korea', 3], ['Belgium', 2.5], ['Austria', 2.5], ['Brazil', 2.5], ['Mexico', 2.5], ['South Africa', 2], ['Finland', 2], ['New Zealand', 1.5], ['Indonesia', 1.5], ['United Arab Emirates', 1.5], ['Other', 4]],
    },
    feedback: [
      'It is a shelf-stable food usually portioned from a bag or box.',
      'Its largest ingredient consists of flattened whole grains rather than flour or dough.',
      'Dried fruit, nuts and seeds add smaller but more valuable shares of the mix.',
      'It is commonly eaten cold at breakfast, often with milk or yogurt.',
    ],
    mapRoles: {
      '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '643': ['source', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '792': ['source', 'logistics'], '036': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '616': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '246': ['source', 'assembly', 'buyer', 'waste'], '156': ['source', 'assembly', 'buyer', 'waste'], '804': ['source'],
      '724': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '152': ['source'], '032': ['source'],
      '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '752': ['source', 'assembly', 'buyer', 'waste'], '826': ['assembly', 'logistics', 'buyer', 'waste'],
      '756': ['assembly', 'logistics', 'buyer'], '528': ['assembly', 'logistics', 'buyer', 'waste'],
      '380': ['assembly', 'buyer', 'waste'], '040': ['assembly', 'buyer', 'waste'], '208': ['assembly', 'buyer'],
      '554': ['assembly', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'], '410': ['assembly', 'buyer', 'waste'],
      '710': ['assembly', 'logistics', 'buyer', 'waste'], '056': ['logistics', 'buyer', 'waste'],
      '702': ['logistics', 'buyer'], '784': ['logistics', 'buyer', 'waste'], '344': ['logistics'], '591': ['logistics'],
      '076': ['buyer', 'waste'], '484': ['buyer', 'waste'], '360': ['waste'],
    },
    mapLabels: [
      ['Canada', 214, 97, 'source'], ['Russia', 675, 85, 'source'], ['Turkey', 591, 142, 'source'],
      ['Germany', 528, 107, 'assembly'], ['United Kingdom', 493, 96, 'assembly'], ['Switzerland', 525, 124, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['Australia', 872, 319, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Brazil', 356, 278, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'cheese',
    name: 'Cheese',
    aliases: ['cheese', 'cheese block', 'block of cheese', 'piece of cheese', 'cheese wedge', 'wedge of cheese', 'cheese slice', 'sliced cheese', 'hard cheese', 'semi hard cheese', 'semi-hard cheese', 'aged cheese', 'mature cheese', 'dairy cheese', 'cow milk cheese', "cow's milk cheese", 'cheddar', 'cheddar cheese', 'gouda', 'gouda cheese', 'emmental', 'emmentaler', 'swiss cheese', 'edam', 'colby', 'monterey jack', 'jack cheese', 'gruyere', 'gruyère', 'tomme', 'queso'],
    category: 'Food',
    descriptor: 'Refrigerated everyday food',
    portable: true,
    powered: false,
    setting: 'meal and snack use',
    finishedPrice: {
      range: '$2–$12 per unit',
      basis: 'Typical retail range for a 250 g block: supermarket own-label at the low end and long-aged or specialty styles at the high end.',
      tiers: [['Value', '$2–$3.50'], ['Everyday', '$3.50–$6'], ['Aged', '$6–$9'], ['Specialty', '$9–$12']],
    },
    guessMaterials: ['Milk solids', 'Milk fat', 'Casein protein', 'Salt', 'Starter culture'],
    materials: [
      ['Retained water', 92.5, 0.002], ['Milk fat', 82.5, 6.50], ['Casein and other protein', 62.5, 8.00],
      ['Lactose and lactic acid', 4, 1.20], ['Salt', 4.5, 0.25], ['Calcium and minerals', 3.5, 1.50],
      ['Starter culture and rennet', 0.5, 35.00],
    ],
    stages: {
      sources: [['India', 17, null, ['Cow and buffalo milk', 'salt']], ['United States', 12, null, ['Cow milk', 'starter cultures']], ['Pakistan', 7, null, ['Buffalo and cow milk']], ['China', 7, null, ['Cow milk', 'salt']], ['Brazil', 6, null, ['Cow milk', 'salt']], ['Germany', 6, null, ['Cow milk', 'starter cultures']], ['France', 5, null, ['Cow milk', 'rennet']], ['New Zealand', 5, null, ['Cow milk', 'milk solids']], ['Russia', 5, null, ['Cow milk']], ['Turkey', 4, null, ['Cow and sheep milk', 'salt']], ['Netherlands', 4, null, ['Cow milk', 'starter cultures']], ['United Kingdom', 4, null, ['Cow milk', 'rennet']], ['Poland', 4, null, ['Cow milk']], ['Italy', 3, null, ['Cow milk', 'rennet']], ['Argentina', 3, null, ['Cow milk']], ['Australia', 2, null, ['Cow milk', 'milk solids']], ['Canada', 2, null, ['Cow milk', 'starter cultures']], ['Other', 4, null, ['Milk', 'salt', 'cultures and enzymes']]],
      assembly: [['United States', 19], ['Germany', 11], ['France', 9], ['Italy', 8], ['Netherlands', 6], ['Poland', 5], ['Russia', 5], ['United Kingdom', 4], ['Canada', 4], ['Argentina', 4], ['New Zealand', 4], ['Australia', 3], ['Turkey', 3], ['Brazil', 3], ['Spain', 2], ['Denmark', 2], ['Ireland', 2], ['Austria', 1], ['Switzerland', 1], ['Other', 4]],
      logistics: [['Netherlands', 13], ['Germany', 10], ['Belgium', 8], ['France', 7], ['United States', 7], ['New Zealand', 6], ['Denmark', 5], ['Ireland', 5], ['Italy', 5], ['Poland', 4], ['United Kingdom', 4], ['Singapore', 4], ['United Arab Emirates', 4], ['Australia', 3], ['Spain', 3], ['Canada', 3], ['Switzerland', 2], ['Turkey', 2], ['Panama', 2], ['Other', 3]],
      buyers: [['United States', 12], ['Germany', 8], ['France', 7], ['Italy', 6], ['United Kingdom', 6], ['Russia', 5], ['Canada', 5], ['Spain', 4], ['Netherlands', 4], ['Japan', 4], ['Belgium', 3], ['Australia', 3], ['Switzerland', 3], ['Poland', 3], ['Sweden', 3], ['Austria', 3], ['Denmark', 2.5], ['South Korea', 2.5], ['Mexico', 2], ['China', 2], ['Saudi Arabia', 2], ['United Arab Emirates', 2], ['Brazil', 1.5], ['New Zealand', 1.5], ['Turkey', 1], ['Other', 4]],
      waste: [['United States', 11], ['China', 8], ['Germany', 6], ['France', 5], ['United Kingdom', 6], ['Italy', 5], ['India', 5], ['Russia', 4], ['Canada', 4], ['Spain', 4], ['Brazil', 4], ['Japan', 4], ['Poland', 3.5], ['Netherlands', 3.5], ['Australia', 3], ['Mexico', 3], ['Turkey', 3], ['South Korea', 2.5], ['Belgium', 2.5], ['Sweden', 2], ['Austria', 2], ['South Africa', 2], ['Indonesia', 2], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is a perishable food that usually stays chilled until it is served.',
      'Most of its mass is concentrated milk fat, protein and retained water.',
      'Bacterial cultures and enzymes transform its starting liquid, sometimes followed by months of aging.',
      'It is commonly sold as a block, wedge or slice and paired with bread or crackers.',
    ],
    mapRoles: {
      '356': ['source', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '586': ['source'], '156': ['source', 'buyer', 'waste'], '076': ['source', 'assembly', 'buyer', 'waste'],
      '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '554': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '643': ['source', 'assembly', 'buyer', 'waste'],
      '792': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '528': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '826': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '616': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '032': ['source', 'assembly'],
      '036': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '724': ['assembly', 'logistics', 'buyer', 'waste'], '208': ['assembly', 'logistics', 'buyer'],
      '372': ['assembly', 'logistics'], '040': ['assembly', 'buyer', 'waste'], '756': ['assembly', 'logistics', 'buyer'],
      '056': ['logistics', 'buyer', 'waste'], '702': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '591': ['logistics'], '392': ['buyer', 'waste'], '410': ['buyer', 'waste'], '752': ['buyer', 'waste'],
      '484': ['buyer', 'waste'], '682': ['buyer'], '710': ['waste'], '360': ['waste'],
    },
    mapLabels: [
      ['India', 719, 189, 'source'], ['United States', 222, 144, 'source'], ['Germany', 528, 107, 'assembly'],
      ['France', 509, 123, 'assembly'], ['Italy', 535, 130, 'assembly'], ['Netherlands', 514, 106, 'logistics'],
      ['Belgium', 510, 111, 'logistics'], ['New Zealand', 934, 371, 'logistics'], ['Japan', 883, 147, 'buyer'],
      ['Canada', 214, 97, 'buyer'], ['Brazil', 356, 278, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'bread',
    name: 'Bread',
    aliases: ['bread', 'loaf', 'bread loaf', 'loaf of bread', 'sliced bread', 'sandwich bread', 'toast bread', 'toasting bread', 'wheat bread', 'wheat loaf', 'white bread', 'white loaf', 'brown bread', 'brown loaf', 'whole wheat bread', 'whole-wheat bread', 'wholemeal bread', 'wholemeal loaf', 'whole grain bread', 'wholegrain bread', 'multigrain bread', 'seeded bread', 'packaged bread', 'bakery bread', 'fresh bread', 'table bread', 'pan bread', 'pullman loaf', 'pain de mie', 'sandwich loaf', 'toast loaf'],
    category: 'Food',
    descriptor: 'Baked everyday food',
    portable: true,
    powered: false,
    setting: 'meal and snack use',
    finishedPrice: {
      range: '$1.50–$8 per unit',
      basis: 'Typical retail range for one packaged or bakery loaf: basic supermarket bread at the low end and artisan, seeded or specialty loaves at the high end.',
      tiers: [['Value', '$1.50–$2.50'], ['Everyday', '$2.50–$4'], ['Wholegrain / seeded', '$4–$6'], ['Artisan / specialty', '$6–$8']],
    },
    guessMaterials: ['Wheat flour', 'Water', 'Vegetable oil', 'Yeast', 'Salt'],
    materials: [
      ['Wheat flour solids', 270, 0.55], ['Retained water', 190, 0.002], ['Vegetable oil and fat', 15, 1.20],
      ['Sugar and malt solids', 10, 0.80], ['Salt', 6, 0.25], ['Yeast', 5, 3.00],
      ['Milk or soy solids', 2, 2.50], ['Enzymes and improvers', 1, 12.00], ['Preservatives', 1, 5.00],
    ],
    stages: {
      sources: [['China', 15, null, ['Wheat', 'soy oil']], ['India', 13, null, ['Wheat', 'sugar']], ['Russia', 12, null, ['Wheat', 'sunflower oil']], ['United States', 10, null, ['Wheat', 'soy oil', 'yeast']], ['France', 6, null, ['Wheat', 'yeast']], ['Canada', 6, null, ['Wheat', 'canola oil']], ['Australia', 5, null, ['Wheat', 'sugar']], ['Pakistan', 4, null, ['Wheat', 'sugar']], ['Germany', 4, null, ['Wheat', 'yeast']], ['Turkey', 3, null, ['Wheat', 'sunflower oil']], ['Ukraine', 3, null, ['Wheat', 'sunflower oil']], ['Argentina', 3, null, ['Wheat', 'soy oil']], ['Kazakhstan', 2, null, ['Wheat']], ['Brazil', 2, null, ['Sugar', 'soy oil']], ['Romania', 2, null, ['Wheat', 'sunflower oil']], ['Poland', 2, null, ['Wheat', 'yeast']], ['United Kingdom', 2, null, ['Wheat', 'malt']], ['Mexico', 2, null, ['Wheat', 'sugar']], ['Other', 4, null, ['Salt', 'enzymes', 'milk solids and preservatives']]],
      assembly: [['China', 16], ['United States', 12], ['India', 10], ['Brazil', 6], ['Germany', 6], ['Russia', 6], ['United Kingdom', 5], ['France', 5], ['Turkey', 4], ['Mexico', 4], ['Japan', 4], ['Indonesia', 3], ['Pakistan', 3], ['Italy', 3], ['Spain', 2], ['Canada', 2], ['Australia', 2], ['Poland', 2], ['South Africa', 1], ['Other', 4]],
      logistics: [['Netherlands', 12], ['Germany', 10], ['Belgium', 8], ['United States', 8], ['Singapore', 7], ['United Arab Emirates', 7], ['France', 6], ['Turkey', 5], ['United Kingdom', 5], ['Mexico', 5], ['Poland', 4], ['Canada', 4], ['Spain', 4], ['Malaysia', 3], ['Panama', 3], ['Australia', 2], ['South Africa', 2], ['Italy', 1], ['Other', 4]],
      buyers: [['China', 12], ['United States', 10], ['India', 8], ['Germany', 6], ['United Kingdom', 4], ['France', 5], ['Brazil', 5], ['Russia', 4], ['Mexico', 4], ['Japan', 4], ['Turkey', 3.5], ['Italy', 3.5], ['Spain', 3], ['Indonesia', 3], ['Pakistan', 3], ['Canada', 2.5], ['Poland', 2.5], ['Australia', 2.5], ['South Africa', 2], ['Nigeria', 2], ['Saudi Arabia', 2], ['United Arab Emirates', 1.5], ['Philippines', 1.5], ['Argentina', 1.5], ['Other', 4]],
      waste: [['China', 13], ['United States', 10], ['India', 7], ['Germany', 5], ['United Kingdom', 5], ['France', 5], ['Brazil', 5], ['Russia', 4], ['Indonesia', 4], ['Mexico', 4], ['Japan', 4], ['Turkey', 3.5], ['Italy', 3.5], ['Spain', 3], ['Pakistan', 3], ['Nigeria', 3], ['Canada', 2.5], ['Poland', 2.5], ['Australia', 2.5], ['South Africa', 2], ['Philippines', 2], ['Argentina', 1.5], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is a short-lived food that is often bought several times a week.',
      'Wheat flour and retained water account for most of its finished mass.',
      'Yeast creates gas inside a dough before heat fixes its porous structure.',
      'It is commonly sold as a sliced loaf and used for toast or sandwiches.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'buyer', 'waste'], '356': ['source', 'assembly', 'buyer', 'waste'],
      '643': ['source', 'assembly', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '036': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '586': ['source', 'assembly', 'buyer', 'waste'],
      '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '792': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '804': ['source'], '032': ['source', 'buyer', 'waste'], '398': ['source'], '076': ['source', 'assembly', 'buyer', 'waste'],
      '642': ['source'], '616': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '826': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '484': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'],
      '360': ['assembly', 'buyer', 'waste'], '380': ['assembly', 'logistics', 'buyer', 'waste'],
      '724': ['assembly', 'logistics', 'buyer', 'waste'], '710': ['assembly', 'logistics', 'buyer', 'waste'],
      '528': ['logistics'], '056': ['logistics'], '702': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '458': ['logistics'], '591': ['logistics'], '410': ['buyer', 'waste'], '566': ['buyer', 'waste'],
      '682': ['buyer'], '608': ['buyer', 'waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['India', 719, 189, 'source'], ['Russia', 675, 85, 'source'],
      ['United States', 222, 144, 'assembly'], ['Germany', 528, 107, 'assembly'], ['Brazil', 356, 278, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['Mexico', 191, 197, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Nigeria', 500, 250, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'toothpaste',
    name: 'Toothpaste',
    aliases: ['toothpaste', 'tooth paste', 'dental paste', 'dentifrice', 'tooth gel', 'dental gel', 'oral care paste', 'oral-care paste', 'oral hygiene paste', 'fluoride toothpaste', 'fluoride paste', 'fluoridated toothpaste', 'mint toothpaste', 'whitening toothpaste', 'sensitive toothpaste', 'sensitivity toothpaste', 'anti cavity toothpaste', 'anticavity toothpaste', 'anti-cavity toothpaste', 'cavity protection toothpaste', 'tartar control toothpaste', 'gum care toothpaste', 'childrens toothpaste', "children's toothpaste", 'kids toothpaste', "kids' toothpaste", 'adult toothpaste', 'tooth cleaning paste', 'tooth cleaner', 'paste for teeth', 'tube of toothpaste', 'toothpaste tube', 'dental cream', 'tooth cream'],
    category: 'Personal care',
    descriptor: 'Daily personal-care product',
    portable: true,
    powered: false,
    setting: 'oral hygiene use',
    finishedPrice: {
      range: '$1–$15 per unit',
      basis: 'Typical retail equivalent for a roughly 100 g packaged tube: value formulas at the low end and specialty sensitivity, whitening or premium products at the high end.',
      tiers: [['Value', '$1–$3'], ['Everyday fluoride', '$3–$6'], ['Specialty', '$6–$10'], ['Premium', '$10–$15']],
    },
    guessMaterials: ['Hydrated silica', 'Sorbitol', 'Glycerin', 'Fluoride compound', 'Tube laminate'],
    materials: [
      ['Hydrated silica or calcium carbonate', 35, 0.45], ['Sorbitol and glycerin', 25, 1.10], ['Water', 20.24, 0.002],
      ['Aluminum–polyethylene tube laminate', 12, 3.20], ['Polypropylene cap', 2.76, 1.20],
      ['Cellulose gums and thickeners', 1.5, 4.00], ['Surfactants', 1.5, 2.20],
      ['Flavor oils and sweeteners', 1, 18.00], ['Preservatives and colorants', 0.76, 8.00],
      ['Fluoride compound', 0.24, 4.50],
    ],
    stages: {
      sources: [['China', 18, null, ['Silica', 'fluoride minerals', 'aluminum', 'glycerin']], ['United States', 10, null, ['Soda ash', 'silica', 'sorbitol']], ['India', 9, null, ['Calcium carbonate', 'glycerin', 'mint oil']], ['Brazil', 7, null, ['Sorbitol feedstock', 'glycerin']], ['Indonesia', 6, null, ['Glycerin', 'surfactant feedstocks']], ['Germany', 6, null, ['Cellulose gums', 'surfactants']], ['France', 5, null, ['Flavor oils', 'thickeners']], ['Thailand', 5, null, ['Glycerin', 'surfactant feedstocks']], ['Malaysia', 5, null, ['Glycerin', 'polyethylene feedstocks']], ['Australia', 4, null, ['Silica', 'fluoride minerals']], ['Mexico', 4, null, ['Fluorspar', 'calcium carbonate']], ['South Africa', 4, null, ['Fluorspar', 'silica']], ['Turkey', 3, null, ['Calcium carbonate', 'soda ash']], ['Morocco', 3, null, ['Phosphate rock', 'fluoride minerals']], ['Canada', 3, null, ['Aluminum', 'cellulose']], ['Spain', 2, null, ['Calcium carbonate', 'flavor oils']], ['Vietnam', 2, null, ['Glycerin', 'mint oil']], ['Other', 4, null, ['Sweeteners', 'preservatives', 'pigments and polymers']]],
      components: [
        ['China', 22, null, ['Laminated tubes', 'caps', 'precipitated silica'], '156'],
        ['United States', 14, null, ['Fluoride compounds', 'flavours', 'tubes'], '840'],
        ['India', 10, null, ['Calcium carbonate', 'tubes', 'flavours'], '356'],
        ['Germany', 8, null, ['Silica abrasives', 'tubes', 'flavours'], '276'],
        ['Mexico', 7, null, ['Tubes', 'caps', 'cartons'], '484'],
        ['Poland', 6, null, ['Tubes', 'caps', 'cartons'], '616'],
        ['Brazil', 6, null, ['Calcium carbonate', 'tubes'], '076'],
        ['France', 5, null, ['Flavours', 'tubes', 'cartons'], '250'],
        ['Thailand', 5, null, ['Tubes', 'caps'], '764'],
        ['Indonesia', 4, null, ['Sorbitol', 'tubes'], '360'],
        ['Turkey', 3, null, ['Calcium carbonate', 'cartons'], '792'],
        ['South Korea', 3, null, ['Silica', 'laminated tubes'], '410'],
        ['Other', 7, null, ['Minor formula inputs', 'liners', 'closures'], null],
      ],
      assembly: [['China', 26], ['United States', 12], ['India', 9], ['Germany', 7], ['Mexico', 6], ['Poland', 5], ['Brazil', 5], ['United Kingdom', 4], ['Thailand', 4], ['Indonesia', 3], ['Turkey', 3], ['France', 3], ['Italy', 2], ['Spain', 2], ['Japan', 2], ['South Korea', 2], ['South Africa', 1], ['Egypt', 1], ['Other', 3]],
      logistics: [['Netherlands', 12], ['Germany', 11], ['Singapore', 9], ['United Arab Emirates', 8], ['Belgium', 8], ['United States', 7], ['Hong Kong', 7], ['Mexico', 6], ['Poland', 5], ['Turkey', 4], ['Malaysia', 4], ['United Kingdom', 4], ['Panama', 3], ['Spain', 3], ['France', 3], ['South Africa', 2], ['Canada', 1], ['Other', 3]],
      buyers: [['United States', 13], ['China', 9], ['India', 7.5], ['Germany', 6], ['United Kingdom', 5], ['Brazil', 5], ['Japan', 4], ['France', 4], ['Mexico', 4], ['Indonesia', 3.5], ['Italy', 3.5], ['Spain', 3], ['Canada', 3], ['Russia', 3], ['Turkey', 3], ['South Korea', 2.5], ['Poland', 2.5], ['Australia', 2.5], ['Nigeria', 2], ['South Africa', 2], ['Saudi Arabia', 2], ['Thailand', 2], ['Philippines', 1.5], ['United Arab Emirates', 1.5], ['Argentina', 1], ['Other', 4]],
      waste: [['China', 12], ['United States', 10], ['India', 8], ['Brazil', 5], ['Indonesia', 5], ['Germany', 5], ['Mexico', 4], ['Japan', 4], ['Russia', 4], ['United Kingdom', 4], ['France', 4], ['Turkey', 3.5], ['Italy', 3.5], ['Nigeria', 3], ['Spain', 3], ['Pakistan', 3], ['South Korea', 2.5], ['Poland', 2.5], ['Thailand', 2], ['Philippines', 2], ['South Africa', 2], ['Canada', 1.5], ['Australia', 1.5], ['United Arab Emirates', 1], ['Other', 4]],
    },
    feedback: [
      'It is a small consumable personal-care product usually kept in a bathroom.',
      'Abrasive minerals and moisture-holding liquids make up most of what is inside its package.',
      'A regulated fluoride compound may appear in a fraction of one gram, alongside flavor and surfactant.',
      'A small amount is squeezed from a tube onto a brush during a daily cleaning routine.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '356': ['source', 'assembly', 'buyer', 'waste'], '076': ['source', 'assembly', 'buyer', 'waste'],
      '360': ['source', 'assembly', 'buyer', 'waste'], '276': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '250': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '764': ['source', 'assembly', 'buyer', 'waste'],
      '458': ['source', 'logistics'], '036': ['source', 'buyer', 'waste'], '484': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '710': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '792': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '504': ['source'], '124': ['source', 'logistics', 'buyer', 'waste'], '724': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '704': ['source'], '616': ['assembly', 'logistics', 'buyer', 'waste'], '826': ['assembly', 'logistics', 'buyer', 'waste'],
      '380': ['assembly', 'buyer', 'waste'], '392': ['assembly', 'buyer', 'waste'], '410': ['assembly', 'buyer', 'waste'],
      '818': ['assembly'], '528': ['logistics'], '702': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '056': ['logistics'], '344': ['logistics'], '591': ['logistics'], '643': ['buyer', 'waste'],
      '566': ['buyer', 'waste'], '682': ['buyer'], '608': ['buyer', 'waste'], '586': ['waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['United States', 222, 144, 'source'], ['India', 719, 189, 'source'],
      ['Germany', 528, 107, 'assembly'], ['Mexico', 191, 197, 'assembly'], ['Poland', 553, 101, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['Brazil', 356, 278, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Nigeria', 500, 250, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'sneakers',
    name: 'Sneakers',
    aliases: [
      'sneaker', 'sneakers', 'trainer', 'trainers', 'training shoe', 'training shoes',
      'running shoe', 'running shoes', 'sports shoe', 'sports shoes', 'athletic shoe',
      'athletic shoes', 'gym shoe', 'gym shoes', 'tennis shoe', 'tennis shoes',
      'casual shoe', 'casual shoes', 'walking shoe', 'walking shoes', 'sport footwear',
      'athletic footwear', 'rubber sole shoes', 'rubber-soled shoes', 'lace up shoes',
      'lace-up shoes', 'pair of sneakers', 'pair of trainers', 'pair of running shoes',
    ],
    category: 'Footwear',
    descriptor: 'Everyday athletic footwear',
    portable: true,
    powered: false,
    setting: 'walking, exercise and casual wear',
    finishedPrice: {
      range: '$25–$250 per unit',
      basis: 'Typical retail range for one adult pair, from mass-market basics to premium branded or technical models.',
      tiers: [['Value', '$25–$50'], ['Everyday', '$50–$100'], ['Performance', '$100–$170'], ['Premium / limited', '$170–$250']],
    },
    guessMaterials: ['Rubber', 'EVA foam', 'Polyester mesh', 'Polyurethane', 'Adhesives'],
    materials: [
      ['Rubber outsole compound', 210, 2.50], ['EVA midsole foam', 160, 2.80],
      ['Polyester mesh and lining', 120, 1.60], ['Polyurethane overlays', 75, 3.20],
      ['Collar and tongue foam', 55, 3.00], ['Thermoplastic supports', 30, 3.00],
      ['Adhesives and cements', 22, 6.00], ['Polyester laces and thread', 14, 2.00],
      ['Steel eyelets and shank parts', 8, 1.20], ['Pigments and surface coatings', 6, 10.00],
    ],
    stages: {
      sources: [
        ['China', 16, null, ['Synthetic rubber feedstocks', 'polyester', 'EVA chemicals']],
        ['Saudi Arabia', 12, null, ['Petrochemical feedstocks']],
        ['Thailand', 10, null, ['Natural rubber']], ['Indonesia', 9, null, ['Natural rubber', 'petrochemical feedstocks']],
        ['Vietnam', 8, null, ['Natural rubber']], ['United States', 7, null, ['Oil and gas feedstocks', 'adhesive chemicals']],
        ['Malaysia', 6, null, ['Natural rubber', 'petrochemical feedstocks']], ['Russia', 5, null, ['Oil and gas feedstocks']],
        ['India', 5, null, ['Natural rubber', 'cotton']], ['Brazil', 4, null, ['Natural rubber', 'iron ore']],
        ['United Arab Emirates', 3, null, ['Petrochemical feedstocks']], ['South Korea', 3, null, ['Polyester and polyurethane feedstocks']],
        ['Taiwan', 3, null, ['Polyester and EVA chemicals']], ['Japan', 2.5, null, ['Specialty polymers', 'pigments']],
        ['Qatar', 2.5, null, ['Petrochemical feedstocks']], ['Nigeria', 2, null, ['Oil feedstocks']],
        ["Côte d'Ivoire", 1.5, null, ['Natural rubber']], ['Other', 0.5, null, ['Rubber, metals and chemical inputs']],
      ],
      components: [
        ['China', 26, null, ['Rubber outsoles', 'EVA midsoles', 'textile uppers'], '156'],
        ['Vietnam', 15, null, ['Rubber soles', 'mesh uppers', 'laces'], '704'],
        ['Taiwan', 10, null, ['EVA foam', 'technical textiles', 'adhesives'], '158'],
        ['South Korea', 8, null, ['Polyester mesh', 'polyurethane films'], '410'],
        ['Indonesia', 7, null, ['Rubber soles', 'textile uppers'], '360'],
        ['Thailand', 5, null, ['Rubber compounds', 'molded soles'], '764'],
        ['India', 5, null, ['Rubber compounds', 'cotton textiles'], '356'],
        ['Japan', 4, null, ['Specialty foams', 'performance textiles'], '392'],
        ['Germany', 3, null, ['Adhesives', 'specialty polymers'], '276'],
        ['Italy', 3, null, ['Uppers', 'molded sole parts'], '380'],
        ['Malaysia', 3, null, ['Rubber compounds', 'foam parts'], '458'],
        ['Cambodia', 2, null, ['Stitched uppers', 'laces'], '116'],
        ['Brazil', 2, null, ['Rubber soles', 'textile uppers'], '076'],
        ['Mexico', 1.5, null, ['Molded soles', 'stitched uppers'], '484'],
        ['Portugal', 1.5, null, ['Uppers', 'insoles'], '620'],
        ['United States', 1, null, ['Technical foams', 'specialty components'], '840'],
        ['Other', 3, null, ['Eyelets, labels and minor components'], null],
      ],
      assembly: [
        ['China', 35], ['Vietnam', 23], ['Indonesia', 13], ['Cambodia', 7], ['India', 5],
        ['Bangladesh', 3], ['Turkey', 2.5], ['Italy', 2], ['Brazil', 2], ['Mexico', 1.5],
        ['Portugal', 1.5], ['Thailand', 1], ['Pakistan', 1], ['Germany', 0.5],
        ['United States', 0.5], ['Other', 1.5],
      ],
      logistics: [
        ['Netherlands', 15], ['Germany', 13], ['Hong Kong', 11], ['Singapore', 10], ['Belgium', 9],
        ['United Arab Emirates', 8], ['United States', 7], ['China', 6], ['Panama', 4], ['Turkey', 4],
        ['Malaysia', 3], ['Spain', 3], ['Mexico', 2], ['Poland', 2], ['Vietnam', 2], ['Other', 1],
      ],
      buyers: [
        ['United States', 21], ['China', 12], ['Germany', 8], ['United Kingdom', 6], ['Japan', 5],
        ['France', 5], ['Italy', 4.5], ['Spain', 4], ['Canada', 4], ['Brazil', 3.5], ['South Korea', 3],
        ['Australia', 3], ['Netherlands', 2.5], ['India', 2.5], ['Mexico', 2], ['Poland', 2],
        ['Saudi Arabia', 1.5], ['United Arab Emirates', 1.5], ['Sweden', 1.5], ['Belgium', 1.5],
        ['Turkey', 1], ['South Africa', 1], ['Other', 4],
      ],
      waste: [
        ['United States', 19], ['China', 10.5], ['Germany', 8], ['United Kingdom', 6], ['France', 5],
        ['India', 5], ['Japan', 4], ['Italy', 4], ['Brazil', 4], ['Canada', 3.5], ['Spain', 3.5],
        ['Australia', 3], ['Russia', 3], ['South Korea', 2.5], ['Mexico', 2.5], ['Poland', 2],
        ['Netherlands', 2], ['Sweden', 1.5], ['Belgium', 1.5], ['Turkey', 1.5], ['Indonesia', 1],
        ['South Africa', 1], ['Chile', 1], ['United Arab Emirates', 1], ['Other', 4],
      ],
    },
    feedback: [
      'It normally comes as a matched pair and repeatedly contacts the ground.',
      'A molded rubber layer and a lightweight foam layer make up more than half of its mass.',
      'Its upper is often breathable polyester mesh held together with stitching, laces and adhesive.',
      'It cushions the foot for walking, exercise or sport and is commonly called a trainer.',
    ],
    mapRoles: {
      '156': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '682': ['source', 'buyer'],
      '764': ['source', 'assembly'], '360': ['source', 'assembly', 'waste'], '704': ['source', 'assembly', 'logistics'],
      '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '458': ['source', 'logistics'],
      '643': ['source', 'waste'], '356': ['source', 'assembly', 'buyer', 'waste'],
      '076': ['source', 'assembly', 'buyer', 'waste'], '784': ['source', 'logistics', 'buyer', 'waste'],
      '410': ['source', 'buyer', 'waste'], '158': ['source'], '392': ['source', 'buyer', 'waste'],
      '634': ['source'], '566': ['source'], '384': ['source'], '116': ['assembly'],
      '050': ['assembly'], '792': ['assembly', 'logistics', 'buyer', 'waste'],
      '380': ['assembly', 'buyer', 'waste'], '484': ['assembly', 'logistics', 'buyer', 'waste'],
      '620': ['assembly'], '586': ['assembly'], '276': ['assembly', 'logistics', 'buyer', 'waste'],
      '528': ['logistics', 'buyer', 'waste'],
      '056': ['logistics', 'buyer', 'waste'], '591': ['logistics'], '724': ['logistics', 'buyer', 'waste'],
      '616': ['logistics', 'buyer', 'waste'], '826': ['buyer', 'waste'], '250': ['buyer', 'waste'],
      '124': ['buyer', 'waste'], '036': ['buyer', 'waste'], '752': ['buyer', 'waste'],
      '710': ['buyer', 'waste'], '152': ['waste'],
    },
    mapLabels: [
      ['Thailand', 792, 221, 'source'], ['Saudi Arabia', 634, 177, 'source'], ['Vietnam', 805, 205, 'assembly'],
      ['China', 789, 153, 'assembly'], ['Indonesia', 823, 278, 'assembly'], ['Netherlands', 514, 106, 'logistics'],
      ['Singapore', 789, 247, 'logistics'], ['United States', 222, 144, 'buyer'], ['Germany', 528, 107, 'buyer'],
      ['Brazil', 356, 278, 'waste'], ['India', 719, 189, 'waste'], ['Japan', 883, 147, 'buyer'],
    ],
  },
  {
    id: 'bar-soap',
    name: 'Bar soap',
    aliases: ['soap', 'bar soap', 'soap bar', 'hand soap', 'bath soap', 'body soap', 'toilet soap', 'washing soap', 'cleansing bar', 'bath bar', 'beauty bar', 'solid soap', 'soap cake', 'soap block', 'handwashing soap', 'personal soap', 'scented soap', 'unscented soap', 'castile soap', 'palm soap', 'coconut soap', 'glycerin soap'],
    category: 'Personal care',
    descriptor: 'Solid cleansing product',
    portable: true,
    powered: false,
    setting: 'bathroom and household washing',
    finishedPrice: {
      range: '$1–$15 per unit',
      basis: 'Typical retail range for one 100 g solid cleansing bar, from basic multipacks to specialty formulations.',
      tiers: [['Value', '$1–$2'], ['Everyday', '$2–$5'], ['Premium', '$5–$9'], ['Specialty', '$9–$15']],
    },
    guessMaterials: ['Palm oil', 'Palm-kernel or coconut oil', 'Sodium hydroxide', 'Salt', 'Glycerin'],
    materials: [
      ['Sodium salts of fatty acids', 78, 1.10], ['Water', 12, 0.002], ['Glycerin', 5, 1.20],
      ['Sodium chloride', 2, 0.10], ['Fragrance blend', 1.5, 25], ['Titanium dioxide', 1, 3.20],
      ['Chelating and antioxidant agents', 0.4, 8], ['Colorants', 0.1, 30],
    ],
    stages: {
      sources: [
        ['Indonesia', 25, null, ['Palm oil', 'palm-kernel oil']], ['Malaysia', 20, null, ['Palm oil', 'palm-kernel oil']],
        ['Philippines', 10, null, ['Coconut oil']], ['India', 8, null, ['Vegetable oils', 'salt']],
        ['China', 7, null, ['Salt', 'titanium minerals', 'vegetable oils']], ['United States', 5, null, ['Tallow', 'salt', 'fragrance feedstocks']],
        ['Brazil', 4, null, ['Tallow', 'vegetable oils']], ['Thailand', 4, null, ['Palm oil', 'coconut oil']],
        ['Nigeria', 3, null, ['Palm oil']], ['Colombia', 3, null, ['Palm oil']],
        ['Germany', 2, null, ['Fragrance and chelating inputs']], ['France', 2, null, ['Fragrance inputs']],
        ['Netherlands', 2, null, ['Refined vegetable oils']], ['Other', 5, null, ['Salt, oils, pigments and minor additives']],
      ],
      components: [
        ['Indonesia', 16, null, ['Refined palm oils', 'soap noodles'], '360'],
        ['Malaysia', 16, null, ['Refined palm oils', 'soap noodles'], '458'],
        ['China', 12, null, ['Soap noodles', 'pigments', 'fragrance compounds'], '156'],
        ['India', 10, null, ['Soap noodles', 'glycerin', 'fragrance compounds'], '356'],
        ['Germany', 8, null, ['Fragrance blends', 'chelating agents'], '276'],
        ['France', 7, null, ['Fragrance blends', 'specialty soap bases'], '250'],
        ['United States', 6, null, ['Soap bases', 'glycerin', 'fragrance blends'], '840'],
        ['Netherlands', 5, null, ['Refined oils', 'soap bases'], '528'],
        ['United Kingdom', 4, null, ['Fragrance blends', 'specialty bases'], '826'],
        ['Italy', 3, null, ['Specialty soap bases', 'fragrances'], '380'],
        ['Thailand', 3, null, ['Refined coconut and palm oils'], '764'],
        ['Brazil', 2, null, ['Tallow and vegetable soap bases'], '076'],
        ['Spain', 2, null, ['Olive-oil soap bases', 'fragrances'], '724'],
        ['Poland', 1, null, ['Soap bases', 'fragrances'], '616'],
        ['Philippines', 1, null, ['Refined coconut oil'], '608'],
        ['Other', 4, null, ['Colorants, antioxidants and minor additives'], null],
      ],
      assembly: [
        ['China', 17], ['India', 13], ['Indonesia', 10], ['Malaysia', 8], ['United States', 8],
        ['Germany', 6], ['France', 6], ['United Kingdom', 5], ['Turkey', 4], ['Brazil', 4],
        ['Mexico', 3], ['Poland', 3], ['Italy', 3], ['Thailand', 2], ['South Africa', 2],
        ['Kenya', 2], ['Nigeria', 1], ['Philippines', 1], ['Other', 2],
      ],
      logistics: [
        ['Netherlands', 15], ['Germany', 12], ['Singapore', 10], ['United Arab Emirates', 9],
        ['United States', 8], ['China', 7], ['Belgium', 7], ['Malaysia', 6], ['Turkey', 5],
        ['France', 4], ['United Kingdom', 4], ['Spain', 3], ['Mexico', 2], ['Panama', 2],
        ['Poland', 2], ['Other', 4],
      ],
      buyers: [
        ['United States', 18], ['China', 13], ['India', 10], ['Germany', 7], ['United Kingdom', 6],
        ['France', 5], ['Brazil', 5], ['Japan', 4], ['Indonesia', 4], ['Mexico', 4], ['Italy', 4],
        ['Canada', 3], ['Spain', 3], ['Nigeria', 3], ['South Africa', 2], ['Turkey', 2],
        ['Australia', 2], ['Saudi Arabia', 2], ['Poland', 1], ['United Arab Emirates', 1], ['Other', 1],
      ],
      waste: [
        ['United States', 15], ['China', 14], ['India', 10], ['Indonesia', 6], ['Brazil', 5],
        ['Germany', 5], ['United Kingdom', 5], ['France', 4], ['Nigeria', 4], ['Mexico', 4],
        ['Italy', 3], ['Japan', 3], ['Canada', 3], ['Spain', 3], ['South Africa', 3],
        ['Turkey', 2], ['Australia', 2], ['Poland', 2], ['Philippines', 2], ['Malaysia', 2], ['Other', 3],
      ],
    },
    feedback: [
      'It is a small solid item that gradually becomes smaller when used with water.',
      'Most of its mass is sodium salts made by reacting fats or vegetable oils with an alkali.',
      'Palm, palm-kernel or coconut oils commonly supply its long-chain fatty acids.',
      'It produces lather and is rubbed on wet skin or hands to lift away oils and dirt.',
    ],
    mapRoles: {
      '360': ['source', 'component', 'assembly', 'buyer', 'waste'], '458': ['source', 'component', 'assembly', 'logistics', 'waste'],
      '608': ['source', 'component', 'assembly', 'waste'], '356': ['source', 'component', 'assembly', 'buyer', 'waste'],
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'component', 'assembly', 'buyer', 'waste'], '764': ['source', 'component', 'assembly'],
      '566': ['source', 'assembly', 'buyer', 'waste'], '170': ['source'],
      '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '250': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '528': ['source', 'component', 'logistics'], '826': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['component', 'assembly', 'buyer', 'waste'], '724': ['component', 'logistics', 'buyer', 'waste'],
      '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '792': ['assembly', 'logistics', 'buyer', 'waste'],
      '484': ['assembly', 'logistics', 'buyer', 'waste'], '710': ['assembly', 'buyer', 'waste'],
      '404': ['assembly'], '784': ['logistics', 'buyer'], '056': ['logistics'],
      '591': ['logistics'], '392': ['buyer', 'waste'], '124': ['buyer', 'waste'],
      '036': ['buyer', 'waste'], '682': ['buyer'],
    },
    mapLabels: [
      ['Indonesia', 823, 278, 'source'], ['Malaysia', 798, 244, 'source'], ['Philippines', 855, 218, 'source'],
      ['India', 719, 189, 'component'], ['Germany', 528, 107, 'component'], ['China', 789, 153, 'assembly'],
      ['United States', 222, 144, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['UAE', 650, 183, 'logistics'],
      ['Brazil', 356, 278, 'buyer'], ['Nigeria', 512, 229, 'buyer'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'frying-pan',
    name: 'Frying pan',
    aliases: ['frying pan', 'fry pan', 'frypan', 'skillet', 'cooking pan', 'saute pan', 'sauté pan', 'nonstick pan', 'non-stick pan', 'aluminum pan', 'aluminium pan', 'kitchen pan', 'stovetop pan', 'omelette pan', 'omelet pan', 'shallow pan', 'handled pan', 'cooking skillet', 'nonstick skillet', 'aluminum skillet'],
    category: 'Cookware',
    descriptor: 'Shallow handled cooking vessel',
    portable: true,
    powered: false,
    setting: 'kitchen and cooking',
    finishedPrice: {
      range: '$15–$180 per unit',
      basis: 'Indicative retail range for one household pan; diameter, metal construction, coating and brand can change the price.',
      tiers: [['Value', '$15–$30'], ['Everyday', '$30–$65'], ['Premium', '$65–$110'], ['Specialty', '$110–$180']],
    },
    guessMaterials: ['Aluminum', 'Stainless steel', 'Phenolic resin', 'PTFE coating'],
    materials: [
      ['Cast or pressed aluminum body', 800, 2.40], ['Stainless-steel induction base', 150, 1.90],
      ['Phenolic-resin handle', 100, 3.20], ['PTFE nonstick coating', 20, 12.00],
      ['Steel fasteners and bracket', 20, 1.20], ['Pigments and bonding primers', 10, 8.00],
    ],
    stages: {
      sources: [
        ['Australia', 18, null, ['Bauxite', 'iron ore']], ['Guinea', 16, null, ['Bauxite']],
        ['China', 14, null, ['Bauxite', 'coal', 'iron ore']], ['Brazil', 10, null, ['Bauxite', 'iron ore']],
        ['India', 8, null, ['Bauxite', 'iron ore']], ['Indonesia', 7, null, ['Bauxite', 'petrochemical feedstocks']],
        ['Jamaica', 5, null, ['Bauxite']], ['Russia', 5, null, ['Aluminum', 'nickel', 'iron ore']],
        ['Saudi Arabia', 4, null, ['Petrochemical feedstocks', 'aluminum']], ['United States', 3, null, ['Fluorochemicals', 'resins']],
        ['Canada', 3, null, ['Primary aluminum', 'nickel']], ['South Africa', 2, null, ['Chromium', 'iron ore']],
        ['Turkey', 2, null, ['Chromium', 'bauxite']], ['Other', 3, null, ['Metals, pigments and chemical inputs']],
      ],
      components: [
        ['China', 30, null, ['Aluminum blanks', 'handles', 'nonstick coating systems'], '156'],
        ['Italy', 10, null, ['Aluminum blanks', 'stainless bases', 'handles'], '380'],
        ['Germany', 9, null, ['Coating systems', 'stainless bases', 'fasteners'], '276'],
        ['Turkey', 8, null, ['Aluminum blanks', 'handles'], '792'], ['India', 7, null, ['Aluminum blanks', 'stainless bases'], '356'],
        ['France', 6, null, ['Coating systems', 'aluminum blanks'], '250'], ['South Korea', 5, null, ['Aluminum blanks', 'coating systems'], '410'],
        ['United States', 5, null, ['Fluoropolymer coatings', 'handles'], '840'], ['Portugal', 4, null, ['Aluminum blanks', 'handles'], '620'],
        ['Spain', 4, null, ['Aluminum blanks', 'stainless bases'], '724'], ['Vietnam', 3, null, ['Handles', 'fasteners'], '704'],
        ['Indonesia', 2, null, ['Aluminum blanks', 'resin handles'], '360'], ['Poland', 2, null, ['Stainless bases', 'fasteners'], '616'],
        ['Other', 5, null, ['Primers, pigments and minor fittings'], null],
      ],
      assembly: [
        ['China', 34], ['Italy', 11], ['Turkey', 9], ['India', 8], ['France', 7], ['Germany', 6], ['South Korea', 5],
        ['United States', 4], ['Portugal', 4], ['Spain', 3], ['Vietnam', 3], ['Indonesia', 2], ['Poland', 2], ['Other', 2],
      ],
      logistics: [
        ['Netherlands', 15], ['Germany', 13], ['Belgium', 10], ['United States', 9], ['China', 8], ['Italy', 7],
        ['Turkey', 6], ['France', 5], ['Spain', 5], ['United Kingdom', 4], ['Portugal', 4],
        ['United Arab Emirates', 3], ['Poland', 3], ['Mexico', 2], ['Other', 6],
      ],
      buyers: [
        ['United States', 20], ['China', 11], ['Germany', 9], ['United Kingdom', 7], ['France', 6], ['Italy', 5],
        ['Japan', 5], ['Spain', 5], ['Canada', 4], ['Australia', 4], ['Netherlands', 3], ['Brazil', 3],
        ['South Korea', 3], ['Mexico', 3], ['Turkey', 2], ['Poland', 2], ['Belgium', 2], ['Other', 6],
      ],
      waste: [
        ['United States', 18], ['China', 14], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Italy', 5],
        ['India', 5], ['Brazil', 5], ['Canada', 4], ['Spain', 4], ['Japan', 4], ['Australia', 3],
        ['Mexico', 3], ['South Korea', 3], ['Netherlands', 3], ['Poland', 2], ['Belgium', 2], ['Turkey', 2],
        ['South Africa', 1], ['Other', 1],
      ],
    },
    feedback: [
      'It is a shallow, rigid household item with a long heat-resistant handle.',
      'A lightweight aluminum body makes up most of its mass, sometimes over a steel base.',
      'Its broad interior may carry a very thin fluoropolymer coating to reduce sticking.',
      'It sits over a stove burner to brown, sear or fry food.',
    ],
    mapRoles: {
      '036': ['source', 'buyer', 'waste'], '324': ['source'], '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'buyer', 'waste'], '356': ['source', 'component', 'assembly', 'buyer', 'waste'],
      '360': ['source', 'component', 'assembly'], '388': ['source'], '643': ['source'], '682': ['source'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '124': ['source', 'buyer', 'waste'],
      '710': ['source', 'waste'], '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '276': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '250': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '410': ['component', 'assembly', 'buyer', 'waste'],
      '620': ['component', 'assembly', 'logistics'], '724': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '704': ['component', 'assembly'], '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '528': ['logistics', 'buyer', 'waste'], '056': ['logistics', 'buyer', 'waste'], '826': ['logistics', 'buyer', 'waste'],
      '784': ['logistics'], '484': ['logistics', 'buyer', 'waste'], '392': ['buyer', 'waste'],
    },
    mapLabels: [
      ['Australia', 886, 336, 'source'], ['Guinea', 457, 245, 'source'], ['Brazil', 356, 278, 'source'],
      ['China', 789, 153, 'component'], ['Germany', 528, 107, 'component'], ['Italy', 532, 146, 'assembly'],
      ['Turkey', 598, 154, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Belgium', 505, 118, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['Japan', 883, 147, 'buyer'], ['India', 719, 189, 'waste'],
    ],
  },
  {
    id: 'ceramic-mug',
    name: 'Ceramic mug',
    aliases: ['mug', 'ceramic mug', 'coffee mug', 'tea mug', 'drinking mug', 'cup', 'ceramic cup', 'coffee cup', 'tea cup', 'stoneware mug', 'earthenware mug', 'porcelain mug', 'pottery mug', 'clay mug', 'handled cup', 'beverage mug', 'hot drink mug', 'kitchen mug', 'glazed mug', 'stoneware cup', 'porcelain cup', 'pottery cup'],
    category: 'Tableware',
    descriptor: 'Glazed ceramic vessel',
    portable: true,
    powered: false,
    setting: 'kitchen and dining',
    finishedPrice: {
      range: '$3–$45 per unit',
      basis: 'Indicative retail range for one glazed household mug; forming method, decoration and brand can change the price.',
      tiers: [['Value', '$3–$7'], ['Everyday', '$7–$15'], ['Premium', '$15–$28'], ['Studio or specialty', '$28–$45']],
    },
    guessMaterials: ['Kaolin or ball clay', 'Feldspar', 'Quartz', 'Glaze', 'Pigments'],
    materials: [
      ['Kaolin and ball clay body', 200, 0.25], ['Feldspar flux', 70, 0.35], ['Quartz and silica', 45, 0.18],
      ['Fritted glaze and oxides', 25, 1.80], ['Coloring oxides and pigments', 5, 8.00],
      ['Organic forming binders', 3, 2.50], ['Decorative decal medium', 2, 12.00],
    ],
    stages: {
      sources: [
        ['China', 20, null, ['Kaolin', 'ball clay', 'feldspar', 'silica']], ['India', 15, null, ['Kaolin', 'feldspar', 'quartz']],
        ['United States', 12, null, ['Kaolin', 'ball clay', 'feldspar']], ['Turkey', 9, null, ['Feldspar', 'kaolin']],
        ['Brazil', 8, null, ['Kaolin', 'feldspar']], ['Germany', 6, null, ['Kaolin', 'feldspar', 'pigments']],
        ['Italy', 5, null, ['Feldspar', 'glaze minerals']], ['Spain', 5, null, ['Feldspar', 'kaolin', 'glaze minerals']],
        ['United Kingdom', 4, null, ['Ball clay', 'kaolin']], ['France', 3, null, ['Kaolin', 'quartz']],
        ['Portugal', 3, null, ['Kaolin', 'feldspar']], ['South Africa', 2, null, ['Kaolin', 'silica']],
        ['Vietnam', 2, null, ['Kaolin', 'feldspar']], ['Thailand', 2, null, ['Kaolin', 'feldspar']],
        ['Other', 4, null, ['Clays, silica, fluxes and coloring oxides']],
      ],
      components: [
        ['China', 24, null, ['Prepared ceramic body', 'glaze frits', 'decals'], '156'],
        ['Germany', 11, null, ['Glaze frits', 'pigments', 'prepared bodies'], '276'],
        ['Italy', 10, null, ['Glaze frits', 'pigments', 'decorative decals'], '380'],
        ['Spain', 9, null, ['Prepared bodies', 'glaze frits'], '724'], ['Portugal', 8, null, ['Prepared stoneware body', 'glazes'], '620'],
        ['Turkey', 7, null, ['Prepared ceramic body', 'glazes'], '792'], ['India', 7, null, ['Prepared ceramic body', 'pigments'], '356'],
        ['United Kingdom', 5, null, ['Prepared bodies', 'glazes'], '826'], ['United States', 4, null, ['Glaze frits', 'decals'], '840'],
        ['Thailand', 4, null, ['Prepared ceramic body', 'glazes'], '764'], ['Poland', 3, null, ['Prepared bodies', 'decals'], '616'],
        ['Netherlands', 2, null, ['Pigments', 'decorative media'], '528'], ['France', 2, null, ['Pigments', 'glazes'], '250'],
        ['Other', 4, null, ['Binders, decals and minor additives'], null],
      ],
      assembly: [
        ['China', 30], ['Portugal', 13], ['Thailand', 10], ['Germany', 8], ['Poland', 7], ['Turkey', 6],
        ['Italy', 5], ['Spain', 5], ['United Kingdom', 4], ['India', 3], ['Netherlands', 2],
        ['United States', 2], ['France', 2], ['Vietnam', 1], ['Other', 2],
      ],
      logistics: [
        ['Netherlands', 16], ['Germany', 13], ['Belgium', 10], ['United States', 9], ['China', 8], ['Portugal', 7],
        ['Spain', 6], ['United Kingdom', 5], ['France', 5], ['Italy', 4], ['Turkey', 4], ['Poland', 3],
        ['United Arab Emirates', 3], ['Mexico', 2], ['Other', 5],
      ],
      buyers: [
        ['United States', 20], ['China', 11], ['Germany', 9], ['United Kingdom', 7], ['France', 6], ['Japan', 5],
        ['Italy', 5], ['Spain', 5], ['Canada', 4], ['Australia', 4], ['Netherlands', 3], ['Brazil', 3],
        ['South Korea', 3], ['Mexico', 3], ['Poland', 2], ['Belgium', 2], ['Turkey', 2], ['Other', 6],
      ],
      waste: [
        ['United States', 18], ['China', 14], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Italy', 5],
        ['India', 5], ['Brazil', 5], ['Canada', 4], ['Spain', 4], ['Japan', 4], ['Australia', 3],
        ['Mexico', 3], ['South Korea', 3], ['Netherlands', 3], ['Poland', 2], ['Belgium', 2], ['Turkey', 2],
        ['South Africa', 1], ['Other', 1],
      ],
    },
    feedback: [
      'It is a small rigid household item formed as one hollow body with a projecting loop.',
      'Most of its mass is fired clay blended with feldspar and quartz.',
      'A glass-like glaze seals the porous body and often carries colored decoration.',
      'Its handle lets someone hold a hot drink without gripping the vessel itself.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '356': ['source', 'component', 'assembly', 'waste'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'buyer', 'waste'], '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '724': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '826': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '250': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '620': ['source', 'component', 'assembly', 'logistics'], '710': ['source', 'waste'], '704': ['source', 'assembly'],
      '764': ['source', 'component', 'assembly'], '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '528': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '056': ['logistics', 'buyer', 'waste'],
      '784': ['logistics'], '484': ['logistics', 'buyer', 'waste'], '392': ['buyer', 'waste'],
      '124': ['buyer', 'waste'], '036': ['buyer', 'waste'], '410': ['buyer', 'waste'],
    },
    mapLabels: [
      ['India', 719, 189, 'source'], ['United States', 222, 144, 'source'], ['Germany', 528, 107, 'component'],
      ['Italy', 532, 146, 'component'], ['China', 789, 153, 'assembly'], ['Portugal', 486, 163, 'assembly'],
      ['Thailand', 792, 221, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Belgium', 505, 118, 'logistics'],
      ['United Kingdom', 473, 102, 'buyer'], ['Japan', 883, 147, 'buyer'], ['Brazil', 356, 278, 'waste'],
    ],
  },
  {
    id: 'bath-towel',
    name: 'Bath towel',
    aliases: ['towel', 'bath towel', 'bath sheet', 'terry towel', 'terry cloth towel', 'terrycloth towel', 'cotton towel', 'body towel', 'shower towel', 'drying towel', 'bathroom towel', 'large towel', 'hotel towel', 'beach towel', 'hand towel', 'wash towel', 'turkish towel', 'jacquard towel', 'woven towel', 'loop pile towel'],
    category: 'Household textile',
    descriptor: 'Absorbent woven textile',
    portable: true,
    powered: false,
    setting: 'bathroom and household washing',
    finishedPrice: {
      range: '$8–$80 per unit',
      basis: 'Indicative retail range for one full-size cotton bath towel; size, weight, finishing and brand can change the price.',
      tiers: [['Value', '$8–$15'], ['Everyday', '$15–$30'], ['Premium', '$30–$50'], ['Luxury', '$50–$80']],
    },
    guessMaterials: ['Cotton fiber', 'Polyester', 'Reactive dyes', 'Finishing agents'],
    materials: [
      ['Cotton pile and ground yarn', 650, 2.10], ['Polyester reinforcement yarn', 25, 1.60],
      ['Reactive dyes and pigments', 8, 12.00], ['Softening and finishing agents', 7, 3.50],
      ['Sewing thread', 5, 2.20], ['Care label and trim', 3, 4.00], ['Residual sizing agents', 2, 2.80],
    ],
    stages: {
      sources: [
        ['China', 20, null, ['Cotton', 'polyester feedstocks', 'dye chemicals']], ['India', 18, null, ['Cotton', 'dye plants']],
        ['United States', 14, null, ['Cotton']], ['Brazil', 12, null, ['Cotton']], ['Pakistan', 9, null, ['Cotton']],
        ['Turkey', 6, null, ['Cotton']], ['Australia', 5, null, ['Cotton']], ['Uzbekistan', 4, null, ['Cotton']],
        ['Greece', 3, null, ['Cotton']], ['Benin', 2, null, ['Cotton']], ['Côte d’Ivoire', 2, null, ['Cotton']],
        ['South Korea', 2, null, ['Polyester and dye feedstocks']], ['Germany', 1, null, ['Finishing chemicals']],
        ['Other', 2, null, ['Cotton, pigments and minor inputs']],
      ],
      components: [
        ['China', 24, null, ['Carded and combed cotton yarn', 'polyester yarn'], '156'],
        ['India', 20, null, ['Cotton yarn', 'sewing thread'], '356'], ['Pakistan', 16, null, ['Cotton yarn', 'terry greige fabric'], '586'],
        ['Turkey', 10, null, ['Cotton yarn', 'terry fabric'], '792'], ['Bangladesh', 6, null, ['Cotton yarn', 'woven labels'], '050'],
        ['Vietnam', 5, null, ['Cotton yarn', 'sewing thread'], '704'], ['Indonesia', 4, null, ['Cotton yarn', 'polyester yarn'], '360'],
        ['Portugal', 4, null, ['Terry fabric', 'decorative borders'], '620'], ['Italy', 3, null, ['Dyes', 'decorative yarns'], '380'],
        ['Germany', 2, null, ['Reactive dyes', 'finishing agents'], '276'], ['South Korea', 2, null, ['Polyester yarn', 'dyes'], '410'],
        ['United States', 1, null, ['Cotton yarn', 'finishing agents'], '840'], ['Other', 3, null, ['Labels, thread and minor trims'], null],
      ],
      assembly: [
        ['China', 24], ['India', 20], ['Pakistan', 17], ['Turkey', 10], ['Bangladesh', 6], ['Portugal', 5],
        ['Vietnam', 4], ['Egypt', 3], ['Indonesia', 3], ['United States', 2], ['Italy', 2],
        ['Germany', 1], ['United Kingdom', 1], ['Other', 2],
      ],
      logistics: [
        ['Netherlands', 15], ['Germany', 12], ['United States', 10], ['China', 9], ['Belgium', 8], ['Turkey', 7],
        ['United Kingdom', 6], ['United Arab Emirates', 6], ['Spain', 5], ['Portugal', 4], ['France', 4],
        ['Italy', 3], ['Malaysia', 2], ['Mexico', 2], ['Poland', 2], ['Other', 5],
      ],
      buyers: [
        ['United States', 20], ['China', 11], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Japan', 5],
        ['Italy', 5], ['Spain', 5], ['Canada', 4], ['Australia', 4], ['Netherlands', 3], ['Brazil', 3],
        ['South Korea', 3], ['Mexico', 3], ['Turkey', 2], ['Poland', 2], ['Belgium', 2], ['Other', 7],
      ],
      waste: [
        ['United States', 18], ['China', 13], ['India', 8], ['Germany', 7], ['United Kingdom', 6], ['France', 5],
        ['Italy', 5], ['Brazil', 5], ['Canada', 4], ['Spain', 4], ['Japan', 4], ['Australia', 4],
        ['Mexico', 3], ['South Korea', 3], ['Netherlands', 3], ['Turkey', 2], ['Poland', 2], ['Belgium', 2],
        ['South Africa', 1], ['Other', 1],
      ],
    },
    feedback: [
      'It is a flexible rectangular household textile with no rigid structure.',
      'Nearly all of its mass is cotton yarn woven with a raised loop pile.',
      'The loops greatly increase surface area and help the fabric absorb water.',
      'It is commonly used after bathing or washing to dry skin and hair.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '356': ['source', 'component', 'assembly', 'waste'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '076': ['source', 'buyer', 'waste'],
      '586': ['source', 'component', 'assembly'], '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '036': ['source', 'buyer', 'waste'], '860': ['source'], '300': ['source'], '204': ['source'], '384': ['source'],
      '410': ['source', 'component', 'buyer', 'waste'], '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '050': ['component', 'assembly'], '704': ['component', 'assembly'], '360': ['component', 'assembly'],
      '620': ['component', 'assembly', 'logistics'], '380': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '818': ['assembly'], '826': ['assembly', 'logistics', 'buyer', 'waste'], '528': ['logistics', 'buyer', 'waste'],
      '056': ['logistics', 'buyer', 'waste'], '784': ['logistics'], '724': ['logistics', 'buyer', 'waste'],
      '250': ['logistics', 'buyer', 'waste'], '458': ['logistics'], '484': ['logistics', 'buyer', 'waste'],
      '616': ['logistics', 'buyer', 'waste'], '392': ['buyer', 'waste'], '124': ['buyer', 'waste'],
      '710': ['waste'],
    },
    mapLabels: [
      ['United States', 222, 144, 'source'], ['Brazil', 356, 278, 'source'], ['India', 719, 189, 'component'],
      ['Pakistan', 682, 170, 'component'], ['China', 789, 153, 'assembly'], ['Turkey', 598, 154, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Belgium', 505, 118, 'logistics'], ['United Kingdom', 473, 102, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Australia', 886, 336, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'mattress',
    name: 'Mattress',
    aliases: ['mattress', 'bed mattress', 'sleeping mattress', 'spring mattress', 'sprung mattress', 'innerspring mattress', 'inner spring mattress', 'foam mattress', 'memory foam mattress', 'hybrid mattress', 'hybrid bed mattress', 'pocket spring mattress', 'pocket sprung mattress', 'latex mattress', 'double mattress', 'queen mattress', 'king mattress', 'single mattress', 'bed pad', 'sleeping pad', 'bed cushion', 'mattress pad', 'bed mat', 'foam bed', 'spring bed'],
    category: 'Bedding',
    descriptor: 'Layered sleep surface',
    portable: false,
    powered: false,
    setting: 'bedroom and sleeping',
    finishedPrice: {
      range: '$150–$3,000 per unit',
      basis: 'Indicative retail range for one standard household mattress; size, construction and brand can change the price substantially.',
      tiers: [['Entry', '$150–$400'], ['Everyday', '$400–$900'], ['Premium', '$900–$1,800'], ['Specialty', '$1,800–$3,000']],
    },
    guessMaterials: ['Steel', 'Polyurethane foam', 'Polyester', 'Cotton', 'Latex'],
    materials: [
      ['Steel springs and border wire', 12000, 0.80], ['Polyurethane comfort and support foam', 8000, 3.20],
      ['Polyester ticking and fiberfill', 3200, 2.10], ['Cotton batting', 2000, 2.40],
      ['Felt and coir support pads', 1500, 1.80], ['Latex foam', 1000, 5.00],
      ['Fire-barrier fibers', 800, 4.50], ['Polypropylene nonwoven', 600, 1.60],
      ['Water-based and hot-melt adhesives', 500, 3.80], ['Thread, zippers and labels', 400, 4.00],
    ],
    stages: {
      sources: [
        ['China', 18, null, ['Iron ore', 'coal', 'petrochemical feedstocks', 'cotton']], ['Australia', 12, null, ['Iron ore', 'metallurgical coal']],
        ['Saudi Arabia', 9, null, ['Petrochemical feedstocks']], ['United States', 8, null, ['Oil and gas feedstocks', 'cotton']],
        ['Brazil', 8, null, ['Iron ore', 'cotton']], ['India', 7, null, ['Cotton', 'iron ore', 'coir']],
        ['Russia', 6, null, ['Oil and gas feedstocks', 'iron ore']], ['Thailand', 5, null, ['Natural rubber', 'petrochemical feedstocks']],
        ['Indonesia', 5, null, ['Natural rubber', 'petrochemical feedstocks']], ['Malaysia', 4, null, ['Natural rubber', 'petrochemical feedstocks']],
        ['Vietnam', 3, null, ['Natural rubber']], ['Turkey', 3, null, ['Cotton', 'steel inputs']],
        ['Pakistan', 3, null, ['Cotton']], ['South Korea', 2, null, ['Petrochemical feedstocks']],
        ['Germany', 2, null, ['Specialty chemicals and fire-barrier inputs']], ['Other', 5, null, ['Textile fibers, minerals and chemical inputs']],
      ],
      components: [
        ['China', 22, null, ['Spring units', 'foam blocks', 'knitted ticking', 'nonwovens'], '156'],
        ['Poland', 11, null, ['Pocket-spring units', 'quilting assemblies', 'foam layers'], '616'],
        ['Germany', 9, null, ['Spring wire', 'specialty foams', 'fire barriers'], '276'],
        ['Turkey', 8, null, ['Knitted ticking', 'felt pads', 'spring units'], '792'],
        ['Italy', 7, null, ['Quilted covers', 'latex foam', 'spring units'], '380'],
        ['United States', 7, null, ['Polyurethane foam', 'spring units', 'fire barriers'], '840'],
        ['Portugal', 6, null, ['Textile covers', 'foam layers', 'spring units'], '620'],
        ['Romania', 5, null, ['Spring units', 'quilted covers'], '642'],
        ['Indonesia', 4, null, ['Latex foam', 'coir pads', 'textiles'], '360'],
        ['India', 4, null, ['Cotton batting', 'coir pads', 'textile covers'], '356'],
        ['Netherlands', 3, null, ['Foam layers', 'adhesives', 'textile covers'], '528'],
        ['Spain', 3, null, ['Spring units', 'foam layers'], '724'], ['Belgium', 2, null, ['Polyurethane foam', 'textile covers'], '056'],
        ['Mexico', 2, null, ['Spring units', 'foam layers'], '484'], ['Malaysia', 2, null, ['Latex foam', 'polyurethane foam'], '458'],
        ['Other', 5, null, ['Thread, labels, zippers and minor components'], null],
      ],
      assembly: [
        ['Poland', 14], ['China', 13], ['Turkey', 10], ['Indonesia', 8], ['Romania', 7], ['Portugal', 6], ['Germany', 6],
        ['Netherlands', 5], ['Spain', 5], ['Belgium', 4], ['Mexico', 4], ['United States', 4], ['Italy', 3], ['Malaysia', 3],
        ['United Kingdom', 2], ['France', 2], ['Philippines', 1], ['Thailand', 1], ['Other', 2],
      ],
      logistics: [
        ['Germany', 15], ['Netherlands', 14], ['Poland', 11], ['Belgium', 9], ['United States', 8], ['China', 7], ['Turkey', 6],
        ['Spain', 5], ['Portugal', 4], ['United Kingdom', 4], ['France', 4], ['Italy', 3], ['Mexico', 3], ['Romania', 2],
        ['Malaysia', 2], ['Other', 3],
      ],
      buyers: [
        ['United States', 19], ['China', 12], ['Germany', 9], ['United Kingdom', 7], ['France', 6], ['Italy', 5], ['Spain', 5],
        ['Canada', 4], ['Poland', 4], ['Japan', 4], ['Australia', 3], ['Netherlands', 3], ['Brazil', 3], ['Mexico', 3],
        ['South Korea', 3], ['Turkey', 2], ['Belgium', 2], ['Sweden', 1], ['South Africa', 1], ['Other', 4],
      ],
      waste: [
        ['United States', 18], ['China', 13], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Italy', 5], ['India', 5],
        ['Canada', 4], ['Spain', 4], ['Poland', 4], ['Japan', 3], ['Australia', 3], ['Brazil', 3], ['Mexico', 3],
        ['Netherlands', 3], ['South Korea', 2], ['Turkey', 2], ['Belgium', 2], ['South Africa', 1], ['Other', 4],
      ],
    },
    feedback: [
      'It is a large, soft, layered household item that is rarely moved once installed.',
      'Steel coils or dense foam provide most of its weight-bearing structure.',
      'Quilted textiles, batting and comfort foams cover the supportive core.',
      'It lies on a bed frame and supports a person while sleeping.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '036': ['source', 'buyer', 'waste'],
      '682': ['source'], '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'buyer', 'waste'], '356': ['source', 'component', 'buyer', 'waste'], '643': ['source'],
      '764': ['source', 'assembly'], '360': ['source', 'component', 'assembly'], '458': ['source', 'component', 'assembly', 'logistics'],
      '704': ['source'], '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '586': ['source'],
      '410': ['source', 'buyer', 'waste'], '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '380': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '620': ['component', 'assembly', 'logistics'], '642': ['component', 'assembly', 'logistics'],
      '528': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '724': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '056': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '484': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '826': ['assembly', 'logistics', 'buyer', 'waste'], '250': ['assembly', 'logistics', 'buyer', 'waste'], '608': ['assembly'],
      '124': ['buyer', 'waste'], '392': ['buyer', 'waste'], '752': ['buyer'], '710': ['buyer', 'waste'],
    },
    mapLabels: [
      ['Australia', 886, 336, 'source'], ['Saudi Arabia', 634, 177, 'source'], ['China', 789, 153, 'component'],
      ['Germany', 528, 107, 'component'], ['Poland', 553, 106, 'assembly'], ['Turkey', 598, 154, 'assembly'],
      ['Indonesia', 823, 278, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Belgium', 505, 118, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['Japan', 883, 147, 'buyer'], ['India', 719, 189, 'waste'],
    ],
  },
  {
    id: 'household-window',
    name: 'Household window',
    aliases: ['window', 'house window', 'household window', 'residential window', 'double glazed window', 'double-glazed window', 'double glazing', 'double-glazing', 'window unit', 'glazed window', 'upvc window', 'u-pvc window', 'vinyl window', 'casement window', 'insulated window', 'insulated glass window', 'insulating glass window', 'glass window', 'exterior window', 'replacement window', 'window frame', 'framed window', 'sealed window unit', 'insulated glass unit', 'igu', 'glazing unit'],
    category: 'Building component',
    descriptor: 'Residential glazed building element',
    portable: false,
    powered: false,
    setting: 'building envelope',
    finishedPrice: {
      range: '$250–$1,500 per unit',
      basis: 'Indicative retail and installation range for a standard residential double-glazed unit; dimensions, opening style and local labor can change the total substantially.',
      tiers: [['Basic fixed', '$250–$450'], ['Standard opening', '$450–$800'], ['High performance', '$800–$1,150'], ['Large or custom', '$1,150–$1,500']],
    },
    guessMaterials: ['Silica sand', 'Soda ash', 'Limestone', 'PVC resin', 'Steel'],
    materials: [
      ['Soda-lime float glass', 31000, 0.45], ['uPVC frame and sash', 9000, 1.40],
      ['Steel reinforcement', 2000, 0.80], ['Aluminum spacer bars', 800, 2.80],
      ['EPDM seals and gaskets', 650, 2.50], ['Desiccant', 450, 1.50],
      ['Silicone and polysulfide sealants', 500, 5.00], ['Steel, zinc and brass hardware', 450, 4.00],
      ['Argon fill', 50, 2.00], ['Pigments and stabilizers', 100, 6.00],
    ],
    stages: {
      sources: [
        ['China', 15, null, ['Silica sand', 'limestone', 'steel', 'aluminum']],
        ['United States', 11, null, ['Soda ash', 'silica sand', 'natural gas', 'steel']],
        ['Turkey', 11, null, ['Soda ash', 'limestone', 'chromium']],
        ['India', 9, null, ['Silica sand', 'limestone', 'steel']],
        ['Australia', 8, null, ['Silica sand', 'iron ore', 'bauxite']],
        ['Saudi Arabia', 7, null, ['Petrochemical feedstocks', 'silica sand']],
        ['Russia', 6, null, ['Natural gas', 'steel', 'aluminum']],
        ['Brazil', 5, null, ['Silica sand', 'iron ore', 'bauxite']],
        ['Canada', 5, null, ['Silica sand', 'natural gas', 'aluminum']],
        ['Germany', 4, null, ['Silica sand', 'limestone', 'chemical additives']],
        ['France', 3, null, ['Silica sand', 'limestone']],
        ['Mexico', 3, null, ['Silica sand', 'natural gas']],
        ['United Arab Emirates', 3, null, ['Silica sand', 'petrochemical feedstocks']],
        ['South Africa', 2, null, ['Silica sand', 'chromium', 'manganese']],
        ['Kazakhstan', 2, null, ['Chromium', 'limestone']],
        ['Egypt', 1, null, ['Silica sand', 'limestone']],
        ['Poland', 1, null, ['Silica sand', 'limestone']],
        ['Other', 4, null, ['Salt, zinc, pigments and sealant minerals']],
      ],
      components: [
        ['China', 18, null, ['Float-glass sheets', 'uPVC profiles', 'hardware'], '156'],
        ['Germany', 12, null, ['uPVC profiles', 'spacers', 'gaskets', 'hardware'], '276'],
        ['Poland', 10, null, ['Insulating-glass units', 'uPVC profiles'], '616'],
        ['Turkey', 8, null, ['Float glass', 'uPVC profiles', 'hardware'], '792'],
        ['Italy', 7, null, ['Hardware', 'spacers', 'sealants'], '380'],
        ['Belgium', 6, null, ['Float glass', 'coated glass'], '056'],
        ['France', 6, null, ['Float glass', 'sealants'], '250'],
        ['Austria', 5, null, ['uPVC profiles', 'hardware'], '040'],
        ['Czechia', 5, null, ['Insulating-glass units', 'spacers'], '203'],
        ['Slovakia', 4, null, ['uPVC profiles', 'insulating-glass units'], '703'],
        ['Taiwan', 4, null, ['Hardware', 'spacers', 'sealants'], '158'],
        ['United States', 4, null, ['Coated glass', 'vinyl profiles', 'sealants'], '840'],
        ['Spain', 3, null, ['Float glass', 'hardware'], '724'],
        ['Netherlands', 2, null, ['Coated glass', 'spacers'], '528'],
        ['United Kingdom', 2, null, ['Insulating-glass units', 'hardware'], '826'],
        ['Bosnia and Herzegovina', 1, null, ['uPVC profiles', 'sealed glazing units'], '070'],
        ['Other', 3, null, ['Desiccant, gaskets and minor fittings'], null],
      ],
      assembly: [
        ['China', 18], ['United States', 12], ['Germany', 10], ['Poland', 9], ['Turkey', 8],
        ['United Kingdom', 7], ['France', 6], ['Italy', 6], ['Austria', 4], ['Czechia', 4],
        ['Slovakia', 3], ['Bosnia and Herzegovina', 3], ['Canada', 3], ['Spain', 2],
        ['Mexico', 2], ['Netherlands', 1], ['Romania', 1], ['Other', 1],
      ],
      logistics: [
        ['Germany', 15], ['Netherlands', 13], ['Belgium', 10], ['Poland', 8], ['Turkey', 7],
        ['United States', 7], ['China', 6], ['Austria', 5], ['France', 4], ['Spain', 4],
        ['Italy', 4], ['United Kingdom', 3], ['Czechia', 3], ['Slovakia', 2], ['Canada', 2],
        ['Mexico', 2], ['Romania', 1], ['Other', 4],
      ],
      buyers: [
        ['United States', 18], ['China', 12], ['Germany', 9], ['United Kingdom', 7], ['France', 7],
        ['Italy', 6], ['Canada', 5], ['Spain', 5], ['Poland', 4], ['Netherlands', 4],
        ['Australia', 3], ['Japan', 3], ['South Korea', 3], ['Turkey', 2], ['Mexico', 2],
        ['Austria', 2], ['Sweden', 1], ['Belgium', 1], ['Other', 6],
      ],
      waste: [
        ['United States', 16], ['China', 13], ['Germany', 9], ['United Kingdom', 7], ['France', 6],
        ['Italy', 5], ['India', 5], ['Canada', 4], ['Spain', 4], ['Poland', 4],
        ['Netherlands', 3], ['Japan', 3], ['Australia', 3], ['Russia', 3], ['Turkey', 2],
        ['South Korea', 2], ['Mexico', 2], ['Sweden', 1], ['Belgium', 1], ['South Africa', 1],
        ['Other', 6],
      ],
    },
    feedback: [
      'It is fixed into an opening and separates indoor conditions from outdoor weather.',
      'Most of its mass is two large soda-lime glass panes held apart by a sealed gap.',
      'A rigid frame, gaskets, spacer and dry gas reduce air leakage and heat transfer.',
      'It admits daylight and views while protecting a building from wind and rain.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '356': ['source', 'waste'], '036': ['source', 'buyer', 'waste'], '682': ['source'],
      '643': ['source', 'waste'], '076': ['source'], '124': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '250': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '484': ['source', 'assembly', 'logistics', 'buyer', 'waste'], '784': ['source'],
      '710': ['source', 'waste'], '398': ['source'], '818': ['source'],
      '616': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '056': ['component', 'logistics', 'buyer', 'waste'], '040': ['component', 'assembly', 'logistics', 'buyer'],
      '203': ['component', 'assembly', 'logistics'], '703': ['component', 'assembly', 'logistics'],
      '158': ['component'], '724': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '528': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '826': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '070': ['component', 'assembly'], '642': ['assembly', 'logistics'],
      '392': ['buyer', 'waste'], '410': ['buyer', 'waste'], '752': ['buyer', 'waste'],
    },
    mapLabels: [
      ['United States', 222, 144, 'source'], ['Turkey', 574, 147, 'source'], ['Australia', 872, 319, 'source'],
      ['Belgium', 515, 110, 'component'], ['Poland', 551, 105, 'component'], ['Germany', 528, 107, 'assembly'],
      ['China', 789, 153, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['United Kingdom', 493, 98, 'buyer'],
      ['Canada', 220, 87, 'buyer'], ['India', 719, 189, 'waste'], ['South Africa', 548, 337, 'waste'],
    ],
  },
  {
    id: 'bed-pillow',
    name: 'Bed pillow',
    aliases: ['pillow', 'bed pillow', 'sleeping pillow', 'head pillow', 'standard pillow', 'standard bed pillow', 'polyester pillow', 'polyester-filled pillow', 'fiberfill pillow', 'fibre-fill pillow', 'fibre-filled pillow', 'fiber-filled pillow', 'synthetic pillow', 'down alternative pillow', 'down-alternative pillow', 'hypoallergenic pillow', 'bedroom pillow', 'soft pillow', 'washable pillow', 'polyfill pillow'],
    category: 'Bedding',
    descriptor: 'Soft filled bedding item',
    portable: true,
    powered: false,
    setting: 'bedroom and sleeping',
    finishedPrice: {
      range: '$8–$80 per unit',
      basis: 'Indicative retail range for one standard synthetic-fill sleeping pillow; specialty cooling, ergonomic and premium branded products can cost more.',
      tiers: [['Value', '$8–$15'], ['Everyday', '$15–$30'], ['Premium', '$30–$50'], ['Specialty', '$50–$80']],
    },
    guessMaterials: ['Polyester fibre fill', 'Cotton shell fabric', 'Polyester fabric', 'Sewing thread', 'Labels'],
    materials: [
      ['Polyester staple-fibre fill', 500, 1.30], ['Cotton woven shell fabric', 160, 3.00],
      ['Polyester shell fibre', 20, 1.50], ['Polyester sewing thread', 6, 4.00],
      ['Polypropylene piping and trim', 5, 1.60], ['Dyes and finishing agents', 4, 5.00],
      ['Polyester labels', 3, 4.00], ['Packaging retained at purchase', 2, 2.50],
    ],
    stages: {
      sources: [
        ['China', 18, null, ['Polyester feedstocks', 'cotton fibre']], ['United States', 10, null, ['Cotton fibre', 'petrochemical feedstocks']],
        ['Saudi Arabia', 9, null, ['Petrochemical feedstocks']], ['India', 9, null, ['Cotton fibre', 'polyester feedstocks']],
        ['Brazil', 8, null, ['Cotton fibre']], ['Australia', 7, null, ['Cotton fibre', 'petrochemical feedstocks']],
        ['Turkey', 7, null, ['Cotton fibre', 'polyester feedstocks']], ['South Korea', 6, null, ['Polyester feedstocks', 'finishing chemicals']],
        ['Indonesia', 5, null, ['Polyester feedstocks']], ['Taiwan', 4, null, ['Polyester feedstocks', 'dyes']],
        ['Pakistan', 4, null, ['Cotton fibre']], ['Malaysia', 3, null, ['Petrochemical feedstocks']],
        ['Egypt', 2, null, ['Cotton fibre']], ['Mexico', 2, null, ['Petrochemical feedstocks', 'cotton fibre']],
        ['Uzbekistan', 2, null, ['Cotton fibre']], ['Other', 4, null, ['Cotton, polymers, dyes and finishing chemicals']],
      ],
      components: [
        ['China', 25, null, ['Polyester fill', 'woven shell fabric', 'thread'], '156'],
        ['India', 12, null, ['Cotton fabric', 'polyester fill'], '356'],
        ['Turkey', 10, null, ['Woven shell fabric', 'polyester fill'], '792'],
        ['South Korea', 9, null, ['Polyester staple fibre', 'finishing agents'], '410'],
        ['Pakistan', 8, null, ['Cotton fabric', 'thread'], '586'],
        ['Taiwan', 6, null, ['Polyester fibre', 'labels', 'thread'], '158'],
        ['Indonesia', 6, null, ['Polyester staple fibre', 'woven fabric'], '360'],
        ['Malaysia', 5, null, ['Polyester staple fibre', 'trim'], '458'],
        ['United States', 4, null, ['Cotton fabric', 'specialty fibre fill'], '840'],
        ['Romania', 3, null, ['Polyester fill', 'shell fabric'], '642'],
        ['Poland', 3, null, ['Polyester fill', 'woven fabric'], '616'],
        ['Egypt', 2, null, ['Cotton fabric'], '818'], ['Germany', 2, null, ['Finishing agents', 'specialty fibres'], '276'],
        ['Mexico', 2, null, ['Shell fabric', 'labels'], '484'], ['Other', 3, null, ['Fill, fabric, thread, labels and trim'], null],
      ],
      assembly: [
        ['China', 38], ['India', 12], ['Pakistan', 10], ['Turkey', 8], ['Mexico', 6], ['Poland', 5],
        ['Romania', 4], ['Vietnam', 4], ['United States', 3], ['Germany', 2], ['Portugal', 2],
        ['Egypt', 2], ['Bangladesh', 1], ['Other', 3],
      ],
      logistics: [
        ['Netherlands', 14], ['Germany', 10], ['Belgium', 10], ['United States', 8], ['Singapore', 8],
        ['China', 7], ['Turkey', 6], ['United Arab Emirates', 6], ['Malaysia', 5], ['Spain', 4],
        ['United Kingdom', 4], ['Mexico', 4], ['Poland', 3], ['India', 3], ['Panama', 2], ['Other', 6],
      ],
      buyers: [
        ['United States', 18], ['China', 12], ['Germany', 8], ['United Kingdom', 7], ['France', 6], ['Japan', 6],
        ['Canada', 5], ['Italy', 5], ['Spain', 4], ['Australia', 4], ['South Korea', 4], ['India', 3],
        ['Brazil', 3], ['Mexico', 3], ['Netherlands', 2], ['Poland', 2], ['Sweden', 1],
        ['United Arab Emirates', 1], ['Saudi Arabia', 1], ['South Africa', 1], ['Other', 4],
      ],
      waste: [
        ['United States', 16], ['China', 12], ['India', 8], ['Germany', 7], ['United Kingdom', 6], ['France', 5],
        ['Japan', 5], ['Italy', 4], ['Brazil', 4], ['Canada', 4], ['Spain', 4], ['Australia', 3],
        ['Russia', 3], ['South Korea', 3], ['Mexico', 3], ['Poland', 2], ['Netherlands', 2], ['Turkey', 2],
        ['Indonesia', 2], ['South Africa', 1], ['Chile', 1], ['United Arab Emirates', 1], ['Other', 2],
      ],
    },
    feedback: [
      'It is a soft, lightweight household item used for long periods in one room.',
      'Most of its mass is loose crimped polyester staple fibre enclosed by woven fabric.',
      'A stitched rectangular shell traps springy fill while allowing it to compress and rebound.',
      'It supports a sleeper\'s head and neck on top of a mattress.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '682': ['source', 'buyer'], '356': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '076': ['source', 'buyer', 'waste'], '036': ['source', 'buyer', 'waste'], '792': ['source', 'component', 'assembly', 'logistics', 'waste'],
      '410': ['source', 'component', 'buyer', 'waste'], '360': ['source', 'component', 'waste'], '158': ['source', 'component'],
      '586': ['source', 'component', 'assembly'], '458': ['source', 'component', 'logistics'], '818': ['source', 'component', 'assembly'],
      '484': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '860': ['source'], '642': ['component', 'assembly'],
      '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '276': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '704': ['assembly'], '620': ['assembly'], '050': ['assembly'], '528': ['logistics', 'buyer', 'waste'],
      '056': ['logistics'], '702': ['logistics'], '784': ['logistics', 'buyer', 'waste'], '724': ['logistics', 'buyer', 'waste'],
      '826': ['logistics', 'buyer', 'waste'], '591': ['logistics'], '250': ['buyer', 'waste'], '392': ['buyer', 'waste'],
      '124': ['buyer', 'waste'], '380': ['buyer', 'waste'], '643': ['waste'], '752': ['buyer'], '710': ['buyer', 'waste'], '152': ['waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['United States', 222, 144, 'source'], ['India', 719, 189, 'component'],
      ['South Korea', 827, 167, 'component'], ['Pakistan', 703, 170, 'assembly'], ['Turkey', 574, 147, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['United Kingdom', 493, 98, 'buyer'],
      ['Japan', 883, 147, 'buyer'], ['Russia', 664, 91, 'waste'], ['Chile', 297, 340, 'waste'],
    ],
  },
  {
    id: 'electric-kettle',
    name: 'Electric kettle',
    aliases: ['kettle', 'electric kettle', 'electric water kettle', 'tea kettle', 'electric tea kettle', 'cordless kettle', 'cordless electric kettle', 'jug kettle', 'electric jug', 'hot water kettle', 'water boiler', 'electric water boiler', 'countertop kettle', 'stainless steel kettle', 'plastic kettle', 'rapid boil kettle', 'fast boil kettle', 'electric boiler', 'tea water boiler', 'kitchen kettle', 'automatic kettle', 'automatic shutoff kettle', '1.7 litre kettle', '1.7 liter kettle'],
    category: 'Kitchen appliance',
    descriptor: 'Countertop water-heating appliance',
    portable: true,
    powered: true,
    setting: 'kitchen and hot-drink preparation',
    finishedPrice: {
      range: '$15–$180 per unit',
      basis: 'Indicative retail range for a 1.5–1.7 litre cordless household model; temperature controls, finishes and premium brands raise the price.',
      tiers: [['Value', '$15–$30'], ['Everyday', '$30–$60'], ['Premium', '$60–$110'], ['Design / specialty', '$110–$180']],
    },
    guessMaterials: ['Stainless steel', 'Polypropylene', 'Copper wire', 'Cable insulation', 'Electronics'],
    materials: [
      ['Stainless-steel vessel and trim', 450, 2.40], ['Polypropylene housing, base and handle', 280, 1.40],
      ['Steel heating plate and fasteners', 120, 1.00], ['PVC and TPE cable insulation', 90, 1.60],
      ['Copper wiring and contacts', 80, 9.00], ['Control electronics', 20, 18.00],
      ['Rubber seals and feet', 20, 3.00], ['Aluminum parts', 20, 2.60],
      ['Glass or mineral-filled window', 15, 1.20], ['Tin solder and minor metals', 5, 28.00],
    ],
    stages: {
      sources: [
        ['China', 18, null, ['Steel', 'aluminum', 'polymers']], ['Chile', 10, null, ['Copper']],
        ['Australia', 9, null, ['Iron ore', 'bauxite', 'lithium']], ['Indonesia', 8, null, ['Nickel', 'tin']],
        ['DR Congo', 7, null, ['Copper', 'cobalt']], ['Peru', 7, null, ['Copper', 'zinc']],
        ['Saudi Arabia', 6, null, ['Petrochemical feedstocks']], ['United States', 6, null, ['Copper', 'petrochemical feedstocks']],
        ['Brazil', 5, null, ['Iron ore', 'bauxite']], ['South Africa', 4, null, ['Chromium', 'manganese']],
        ['Russia', 4, null, ['Nickel', 'steel inputs']], ['India', 4, null, ['Iron ore', 'chromium']],
        ['Turkey', 3, null, ['Chromium', 'copper']], ['Canada', 2, null, ['Nickel', 'aluminum']],
        ['Malaysia', 2, null, ['Tin', 'petrochemical feedstocks']], ['Other', 5, null, ['Silica, rubber, zinc and electronic minerals']],
      ],
      components: [
        ['China', 35, null, ['Heating controls', 'molded parts', 'cord sets'], '156'],
        ['Germany', 10, null, ['Thermostats', 'switches', 'heating controls'], '276'],
        ['South Korea', 8, null, ['Control electronics', 'polymers'], '410'],
        ['Taiwan', 7, null, ['Circuit boards', 'switches', 'connectors'], '158'],
        ['Japan', 6, null, ['Thermal controls', 'electronics'], '392'],
        ['Mexico', 6, null, ['Cord sets', 'metal stampings'], '484'],
        ['Italy', 5, null, ['Heating elements', 'steel vessels'], '380'],
        ['United States', 5, null, ['Thermostats', 'specialty polymers'], '840'],
        ['Malaysia', 4, null, ['Electronics', 'molded parts'], '458'],
        ['Poland', 3, null, ['Heating elements', 'cord sets'], '616'],
        ['Czechia', 3, null, ['Switches', 'metal parts'], '203'],
        ['Turkey', 2, null, ['Steel vessels', 'plastic parts'], '792'],
        ['Romania', 2, null, ['Cord sets', 'switches'], '642'], ['Other', 4, null, ['Seals, feet, fasteners and minor controls'], null],
      ],
      assembly: [
        ['China', 42], ['Mexico', 15], ['Germany', 8], ['Italy', 7], ['United States', 6], ['Egypt', 4],
        ['Malaysia', 4], ['Poland', 3], ['United Kingdom', 2], ['France', 2], ['Turkey', 2],
        ['Czechia', 2], ['Other', 3],
      ],
      logistics: [
        ['Netherlands', 14], ['Germany', 11], ['Belgium', 9], ['Singapore', 9], ['United States', 8],
        ['China', 8], ['Hong Kong', 7], ['United Arab Emirates', 6], ['Malaysia', 5], ['Mexico', 5],
        ['United Kingdom', 4], ['Spain', 3], ['Poland', 3], ['Panama', 2], ['Other', 6],
      ],
      buyers: [
        ['United States', 15], ['China', 11], ['Germany', 8], ['United Kingdom', 8], ['France', 6], ['Japan', 6],
        ['Canada', 5], ['Italy', 5], ['Australia', 5], ['Spain', 4], ['South Korea', 4], ['India', 3],
        ['Brazil', 3], ['Mexico', 3], ['Netherlands', 2], ['Poland', 2], ['Saudi Arabia', 2],
        ['United Arab Emirates', 2], ['South Africa', 1], ['Sweden', 1], ['Other', 4],
      ],
      waste: [
        ['United States', 13], ['China', 12], ['India', 8], ['Germany', 7], ['United Kingdom', 6], ['France', 5],
        ['Japan', 5], ['Italy', 4], ['Brazil', 4], ['Canada', 4], ['Spain', 4], ['Australia', 4],
        ['Russia', 3], ['South Korea', 3], ['Mexico', 3], ['Poland', 2], ['Netherlands', 2], ['Turkey', 2],
        ['Indonesia', 2], ['South Africa', 2], ['Chile', 1], ['United Arab Emirates', 1], ['Other', 3],
      ],
    },
    feedback: [
      'It is a small powered household appliance usually kept on a kitchen counter.',
      'A resistive metal element converts mains electricity into heat near the base.',
      'Its vessel, handle, lid, switch, thermostat and detachable power base surround a liquid chamber.',
      'It rapidly boils water for tea, coffee and other hot drinks, then switches itself off.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '152': ['source'], '036': ['source', 'buyer', 'waste'],
      '360': ['source', 'waste'], '180': ['source'], '604': ['source'], '682': ['source', 'buyer'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '076': ['source', 'buyer', 'waste'],
      '710': ['source', 'buyer', 'waste'], '643': ['source', 'waste'], '356': ['source', 'buyer', 'waste'],
      '792': ['source', 'component', 'assembly', 'waste'], '124': ['source', 'buyer', 'waste'], '458': ['source', 'component', 'assembly', 'logistics'],
      '276': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '410': ['component', 'buyer', 'waste'],
      '158': ['component'], '392': ['component', 'buyer', 'waste'], '484': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['component', 'assembly', 'buyer', 'waste'], '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '203': ['component', 'assembly'], '642': ['component'], '818': ['assembly'], '826': ['assembly', 'logistics', 'buyer', 'waste'],
      '250': ['assembly', 'buyer', 'waste'], '528': ['logistics', 'buyer', 'waste'], '056': ['logistics'], '702': ['logistics'],
      '344': ['logistics'], '784': ['logistics', 'buyer', 'waste'], '724': ['logistics', 'buyer', 'waste'], '591': ['logistics'], '752': ['buyer'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['Chile', 297, 340, 'source'], ['Indonesia', 823, 278, 'source'],
      ['Germany', 528, 107, 'component'], ['South Korea', 827, 167, 'component'], ['Mexico', 183, 208, 'assembly'],
      ['Italy', 535, 139, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'],
      ['United Kingdom', 493, 98, 'buyer'], ['Australia', 872, 319, 'buyer'], ['India', 719, 189, 'waste'],
    ],
  },
  {
    id: 'cotton-tshirt',
    name: 'Cotton T-shirt',
    aliases: ['t shirt', 't-shirt', 'tshirt', 'tee shirt', 'tee-shirt', 'tee', 'cotton t shirt', 'cotton t-shirt', 'cotton tshirt', 'cotton tee', 'cotton shirt', 'short sleeve shirt', 'short-sleeve shirt', 'short sleeved shirt', 'short-sleeved shirt', 'crew neck shirt', 'crew-neck shirt', 'crew neck tee', 'crew-neck tee', 'round neck shirt', 'round-neck shirt', 'jersey shirt', 'knit shirt', 'knitted shirt', 'casual shirt', 'graphic tee', 'graphic t shirt', 'graphic t-shirt', 'plain tee', 'plain t shirt', 'plain t-shirt', 'top', 'cotton top', 'short sleeve top', 'short-sleeve top', 'undershirt', 'vest shirt'],
    category: 'Clothing',
    descriptor: 'Everyday knitted clothing',
    portable: true,
    powered: false,
    setting: 'daily clothing and casual wear',
    finishedPrice: {
      range: '$5–$60 per unit',
      basis: 'Typical retail range for one adult cotton jersey garment: mass-market basics at the low end and heavier, branded, organic or premium products at the high end.',
      tiers: [['Value', '$5–$10'], ['Everyday', '$10–$25'], ['Premium', '$25–$40'], ['Designer / specialty', '$40–$60']],
    },
    guessMaterials: ['Cotton fibre', 'Knitted cotton fabric', 'Polyester thread', 'Reactive dyes', 'Labels'],
    materials: [
      ['Cotton knit fabric', 168, 1.80], ['Polyester sewing thread', 5, 1.20], ['Elastane neck rib', 3, 7.00],
      ['Dyes and pigments', 1.5, 8.00], ['Retained finishing agents', 1, 3.00],
      ['Polyester labels', 0.8, 4.00], ['Print ink or decoration', 0.7, 15.00],
    ],
    stages: {
      sources: [
        ['China', 29, null, ['Cotton fibre', 'polyester feedstocks']], ['India', 20, null, ['Cotton fibre', 'natural dyes']],
        ['Brazil', 15, null, ['Cotton fibre']], ['United States', 11, null, ['Cotton fibre']],
        ['Pakistan', 4, null, ['Cotton fibre']], ['Australia', 4, null, ['Cotton fibre']],
        ['Uzbekistan', 3, null, ['Cotton fibre']], ['Turkey', 2.5, null, ['Cotton fibre', 'dye minerals']],
        ['Benin', 1, null, ['Cotton fibre']], ['Greece', 1, null, ['Cotton fibre']],
        ['Mali', 1, null, ['Cotton fibre']], ['Burkina Faso', 1, null, ['Cotton fibre']],
        ['Turkmenistan', 1, null, ['Cotton fibre']], ['Argentina', 1, null, ['Cotton fibre']],
        ["Côte d'Ivoire", 1.5, null, ['Cotton fibre']], ['Other', 4, null, ['Cotton fibre', 'dyes', 'polyester and finishing chemicals']],
      ],
      components: [
        ['China', 25, null, ['Spun yarn', 'knit fabric', 'dyeing'], '156'],
        ['India', 14, null, ['Spun yarn', 'knit fabric', 'dyeing'], '356'],
        ['Pakistan', 10, null, ['Spun yarn', 'knit fabric'], '586'],
        ['Turkey', 8, null, ['Knit fabric', 'dyeing', 'finishing'], '792'],
        ['Bangladesh', 7, null, ['Knit fabric', 'dyeing'], '050'],
        ['Vietnam', 7, null, ['Knit fabric', 'labels'], '704'],
        ['Indonesia', 5, null, ['Spun yarn', 'knit fabric'], '360'],
        ['Uzbekistan', 4, null, ['Spun yarn', 'knit fabric'], '860'],
        ['South Korea', 4, null, ['Dyes', 'elastane', 'finishing'], '410'],
        ['Taiwan', 3, null, ['Polyester thread', 'labels', 'finishing'], '158'],
        ['Italy', 3, null, ['Dyeing', 'finishing', 'printing'], '380'],
        ['Germany', 2, null, ['Dyes', 'finishing chemicals'], '276'],
        ['Portugal', 2, null, ['Knit fabric', 'dyeing'], '620'],
        ['Mexico', 2, null, ['Knit fabric', 'labels'], '484'],
        ['Other', 4, null, ['Yarn', 'fabric', 'labels and finishing'], null],
      ],
      assembly: [
        ['China', 30], ['Bangladesh', 14], ['Vietnam', 11], ['Turkey', 7], ['India', 6], ['Indonesia', 4],
        ['Cambodia', 4], ['Pakistan', 4], ['Mexico', 3], ['Italy', 3], ['Germany', 2], ['Portugal', 2],
        ['Morocco', 2], ['Tunisia', 1.5], ['Honduras', 1.5], ['El Salvador', 1], ['United States', 1], ['Other', 3],
      ],
      logistics: [
        ['Netherlands', 12], ['Germany', 10], ['Singapore', 9], ['Belgium', 8], ['Hong Kong', 8],
        ['United Arab Emirates', 7], ['United States', 7], ['China', 6], ['Turkey', 5], ['Panama', 4],
        ['Malaysia', 4], ['Spain', 3], ['United Kingdom', 3], ['Mexico', 3], ['Vietnam', 2],
        ['France', 2], ['Canada', 3], ['Other', 4],
      ],
      buyers: [
        ['United States', 18], ['China', 10], ['Germany', 8], ['United Kingdom', 6], ['Japan', 5], ['France', 5],
        ['Italy', 4], ['Spain', 4], ['Canada', 4], ['Brazil', 4], ['India', 2.5], ['South Korea', 3],
        ['Australia', 3], ['Netherlands', 2.5], ['Poland', 2.5], ['Mexico', 2.5], ['Russia', 2],
        ['Saudi Arabia', 2], ['United Arab Emirates', 2], ['Sweden', 1.5], ['Belgium', 1.5],
        ['Switzerland', 1.5], ['Turkey', 1], ['South Africa', 0.5], ['Other', 4],
      ],
      waste: [
        ['United States', 16], ['China', 12], ['Germany', 7], ['United Kingdom', 6], ['France', 5], ['India', 5],
        ['Japan', 4], ['Italy', 4], ['Brazil', 4], ['Canada', 4], ['Spain', 3], ['Australia', 3], ['Russia', 3],
        ['South Korea', 3], ['Mexico', 3], ['Poland', 2], ['Netherlands', 2], ['Sweden', 1.5], ['Belgium', 1.5],
        ['Turkey', 1.5], ['Indonesia', 1.5], ['South Africa', 1.5], ['Chile', 1.5], ['United Arab Emirates', 1], ['Other', 4],
      ],
    },
    feedback: [
      'It is a lightweight item worn close to the upper body in everyday casual settings.',
      'Most of its mass is cellulose fibre harvested from fluffy seed bolls, then spun into yarn.',
      'Its fabric is usually knitted rather than woven, with short sleeves and a ribbed opening.',
      'It is pulled over the head and often carries a printed graphic, slogan or logo.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '356': ['source', 'component', 'assembly', 'buyer', 'waste'],
      '076': ['source', 'buyer', 'waste'], '840': ['source', 'assembly', 'logistics', 'buyer', 'waste'],
      '586': ['source', 'component', 'assembly'], '036': ['source', 'buyer', 'waste'], '860': ['source', 'component'],
      '792': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '204': ['source'], '300': ['source'],
      '466': ['source'], '854': ['source'], '795': ['source'], '032': ['source'], '384': ['source'],
      '050': ['component', 'assembly'], '704': ['component', 'assembly', 'logistics'], '360': ['component', 'assembly', 'waste'],
      '410': ['component', 'buyer', 'waste'], '158': ['component'], '380': ['component', 'assembly', 'buyer', 'waste'],
      '276': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '620': ['component', 'assembly'],
      '484': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '116': ['assembly'], '504': ['assembly'],
      '788': ['assembly'], '340': ['assembly'], '222': ['assembly'], '528': ['logistics', 'buyer', 'waste'],
      '702': ['logistics'], '056': ['logistics', 'buyer', 'waste'], '344': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '591': ['logistics'], '458': ['logistics'], '724': ['logistics', 'buyer', 'waste'], '826': ['logistics', 'buyer', 'waste'],
      '250': ['logistics', 'buyer', 'waste'], '124': ['logistics', 'buyer', 'waste'], '392': ['buyer', 'waste'],
      '643': ['buyer', 'waste'], '682': ['buyer'], '752': ['buyer', 'waste'], '756': ['buyer'], '710': ['buyer', 'waste'],
      '616': ['buyer', 'waste'], '152': ['waste'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['India', 719, 189, 'source'], ['Brazil', 356, 278, 'source'],
      ['Pakistan', 703, 170, 'component'], ['Bangladesh', 758, 186, 'component'], ['Vietnam', 805, 205, 'assembly'],
      ['Turkey', 574, 147, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['Japan', 883, 147, 'buyer'], ['Chile', 297, 340, 'waste'],
    ],
  },
  {
    id: 'manual-toothbrush',
    name: 'Manual toothbrush',
    aliases: ['toothbrush', 'tooth brush', 'manual toothbrush', 'manual tooth brush', 'dental brush', 'teeth brush', 'adult toothbrush', 'soft toothbrush', 'medium toothbrush', 'nylon toothbrush', 'plastic toothbrush', 'oral care brush', 'oral hygiene brush', 'hand toothbrush', 'non electric toothbrush', 'non-electric toothbrush', 'standard toothbrush', 'regular toothbrush', 'traditional toothbrush'],
    category: 'Personal care',
    descriptor: 'Everyday oral-care tool',
    portable: true,
    powered: false,
    setting: 'bathroom and personal care',
    finishedPrice: {
      range: '$1–$12 per unit',
      basis: 'Indicative retail range for one adult manual brush; multipacks reduce the per-brush price and specialist designs raise it.',
      tiers: [['Value', '$1–$2'], ['Everyday', '$2–$5'], ['Premium', '$5–$8'], ['Specialty', '$8–$12']],
    },
    guessMaterials: ['Polypropylene', 'Thermoplastic elastomer', 'Nylon bristles', 'Steel staples', 'Pigments'],
    materials: [
      ['Polypropylene handle core', 12, 1.25], ['Thermoplastic-elastomer grip', 3, 2.20],
      ['Nylon bristles', 2, 3.40], ['Stainless-steel bristle staples', 0.35, 2.40],
      ['Mineral filler', 0.4, 0.30], ['Pigments and additives', 0.25, 7.00],
    ],
    stages: {
      sources: [
        ['Saudi Arabia', 18, null, ['Petrochemical feedstocks']], ['United States', 14, null, ['Petrochemical feedstocks', 'steel']],
        ['China', 14, null, ['Polymer feedstocks', 'pigments', 'steel']], ['South Korea', 8, null, ['Polymer feedstocks']],
        ['India', 7, null, ['Petrochemical feedstocks', 'steel']], ['United Arab Emirates', 6, null, ['Petrochemical feedstocks']],
        ['Qatar', 5, null, ['Petrochemical feedstocks']], ['Canada', 4, null, ['Petrochemical feedstocks', 'nickel']],
        ['Russia', 4, null, ['Petrochemical feedstocks', 'nickel']], ['Indonesia', 4, null, ['Nickel', 'petrochemical feedstocks']],
        ['Australia', 3, null, ['Iron ore', 'nickel']], ['Brazil', 3, null, ['Iron ore']],
        ['Germany', 2, null, ['Polymer additives']], ['Japan', 2, null, ['Nylon intermediates']],
        ['Other', 6, null, ['Mineral fillers, pigments and alloy inputs']],
      ],
      components: [
        ['China', 32, null, ['Molded handles', 'nylon filaments', 'staples'], '156'],
        ['Germany', 14, null, ['Bristle filaments', 'mold tooling', 'elastomers'], '276'],
        ['India', 10, null, ['Molded handles', 'filaments'], '356'],
        ['United States', 8, null, ['Nylon filaments', 'elastomers'], '840'],
        ['Switzerland', 7, null, ['Bristle filaments', 'precision tooling'], '756'],
        ['Poland', 6, null, ['Molded handles', 'packaging'], '616'],
        ['Hungary', 5, null, ['Handles', 'bristle tufts'], '348'],
        ['Vietnam', 4, null, ['Molded handles', 'packaging'], '704'],
        ['Mexico', 3, null, ['Molded handles', 'packaging'], '484'],
        ['South Korea', 3, null, ['Polymer compounds', 'filaments'], '410'],
        ['Japan', 2, null, ['Fine nylon filaments'], '392'],
        ['Italy', 2, null, ['Mold tooling', 'packaging'], '380'],
        ['Other', 4, null, ['Pigments, staples and minor packaging']],
      ],
      assembly: [
        ['China', 42], ['Germany', 12], ['India', 12], ['Switzerland', 7], ['Poland', 6], ['Hungary', 5],
        ['United States', 4], ['Mexico', 3], ['Vietnam', 3], ['Brazil', 2], ['Other', 4],
      ],
      logistics: [
        ['Netherlands', 14], ['Germany', 12], ['Belgium', 10], ['Singapore', 10], ['Hong Kong', 9],
        ['United Arab Emirates', 8], ['United States', 7], ['Poland', 5], ['China', 5], ['Mexico', 4],
        ['Panama', 3], ['Malaysia', 3], ['Other', 10],
      ],
      buyers: [
        ['United States', 18], ['China', 10], ['Germany', 8], ['United Kingdom', 6], ['France', 5], ['Japan', 5],
        ['India', 5], ['Brazil', 4], ['Canada', 4], ['Italy', 4], ['Spain', 3], ['Mexico', 3],
        ['South Korea', 3], ['Australia', 3], ['Netherlands', 2], ['Poland', 2], ['Saudi Arabia', 2],
        ['United Arab Emirates', 2], ['South Africa', 1], ['Sweden', 1], ['Other', 9],
      ],
      waste: [
        ['United States', 15], ['China', 14], ['India', 10], ['Germany', 6], ['United Kingdom', 5], ['France', 5],
        ['Japan', 4], ['Brazil', 4], ['Canada', 3], ['Italy', 3], ['Spain', 3], ['Mexico', 3], ['Russia', 3],
        ['Indonesia', 3], ['Turkey', 2], ['Poland', 2], ['South Korea', 3], ['Australia', 2],
        ['South Africa', 2], ['United Arab Emirates', 1], ['Other', 7],
      ],
    },
    feedback: [
      'It is a lightweight unpowered personal-care item normally held in one hand.',
      'A molded polymer body accounts for most of its mass, with a softer grip on many models.',
      'Hundreds of fine nylon filaments are fixed into a small head by tiny metal staples.',
      'It is used with toothpaste to clean teeth and is usually replaced every few months.',
    ],
    mapRoles: {
      '682': ['source', 'buyer'], '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'],
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '410': ['source', 'component', 'buyer', 'waste'],
      '356': ['source', 'component', 'assembly', 'buyer', 'waste'], '784': ['source', 'logistics', 'buyer', 'waste'],
      '634': ['source'], '124': ['source', 'buyer', 'waste'], '643': ['source', 'waste'],
      '360': ['source', 'waste'], '036': ['source', 'buyer', 'waste'], '076': ['source', 'assembly', 'buyer', 'waste'],
      '276': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '392': ['source', 'component', 'buyer', 'waste'],
      '756': ['component', 'assembly'], '616': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '348': ['component', 'assembly'], '704': ['component', 'assembly'], '484': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '380': ['component', 'buyer', 'waste'], '528': ['logistics', 'buyer'], '056': ['logistics'],
      '702': ['logistics'], '344': ['logistics'], '591': ['logistics'], '458': ['logistics'],
      '826': ['buyer', 'waste'], '250': ['buyer', 'waste'], '724': ['buyer', 'waste'],
      '792': ['waste'], '710': ['buyer', 'waste'], '752': ['buyer'],
    },
    mapLabels: [
      ['Saudi Arabia', 650, 176, 'source'], ['United States', 222, 144, 'source'], ['China', 789, 153, 'assembly'],
      ['Germany', 528, 107, 'component'], ['India', 719, 189, 'assembly'], ['Switzerland', 521, 127, 'assembly'],
      ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['United Kingdom', 493, 98, 'buyer'],
      ['Brazil', 356, 278, 'buyer'], ['Indonesia', 823, 278, 'waste'],
    ],
  },
  {
    id: 'led-light-bulb',
    name: 'LED light bulb',
    aliases: ['light bulb', 'lightbulb', 'bulb', 'led bulb', 'led light bulb', 'led lightbulb', 'led lamp', 'electric light bulb', 'electric bulb', 'household bulb', 'household light bulb', 'energy efficient bulb', 'energy-efficient bulb', 'white led bulb', 'smart bulb', 'dimmable led bulb', 'a19 bulb', 'a60 bulb', 'e26 bulb', 'e27 bulb', 'screw base bulb', 'screw-in bulb', 'lamp bulb', 'lighting bulb', '9 watt bulb', '800 lumen bulb'],
    category: 'Lighting',
    descriptor: 'Household electric lighting',
    portable: true,
    powered: true,
    setting: 'indoor household lighting',
    finishedPrice: {
      range: '$2–$25 per unit',
      basis: 'Indicative retail range for one general-purpose 800-lumen LED lamp; dimming, color control and connected features raise the price.',
      tiers: [['Value', '$2–$4'], ['Everyday', '$4–$8'], ['Premium', '$8–$15'], ['Smart / specialty', '$15–$25']],
    },
    guessMaterials: ['Polycarbonate', 'Aluminum', 'Circuit board', 'Copper', 'LED phosphor'],
    materials: [
      ['Polycarbonate diffuser', 19, 2.20], ['Aluminum heat sink', 14, 2.60],
      ['Plastic driver housing', 9, 2.10], ['Steel and brass screw base', 8, 4.00],
      ['Circuit board and driver electronics', 7, 20.00], ['Copper wire and contacts', 3.5, 9.00],
      ['Silicone, potting and adhesives', 2, 5.00], ['LED packages and phosphor', 1, 95.00],
      ['Tin-based solder', 0.8, 28.00], ['Glass and ceramic insulation', 0.7, 1.20],
    ],
    stages: {
      sources: [
        ['China', 17, null, ['Rare earths', 'aluminum', 'polymer feedstocks']], ['Australia', 11, null, ['Bauxite', 'iron ore', 'rare earths']],
        ['Chile', 10, null, ['Copper']], ['DR Congo', 7, null, ['Copper', 'cobalt']], ['Indonesia', 7, null, ['Tin', 'nickel']],
        ['Peru', 6, null, ['Copper', 'zinc']], ['Brazil', 6, null, ['Bauxite', 'iron ore']], ['South Africa', 5, null, ['Manganese', 'chromium']],
        ['Saudi Arabia', 5, null, ['Petrochemical feedstocks']], ['United States', 5, null, ['Copper', 'petrochemical feedstocks']],
        ['Russia', 4, null, ['Nickel', 'aluminum']], ['Canada', 3, null, ['Aluminum', 'copper']],
        ['India', 3, null, ['Iron ore', 'electronics minerals']], ['Guinea', 3, null, ['Bauxite']],
        ['Malaysia', 2, null, ['Tin']], ['Other', 6, null, ['Silica, zinc and specialty electronic minerals']],
      ],
      components: [
        ['China', 33, null, ['LED packages', 'drivers', 'diffusers', 'bases'], '156'],
        ['Taiwan', 13, null, ['LED chips', 'driver boards', 'power semiconductors'], '158'],
        ['South Korea', 11, null, ['LED chips', 'phosphors', 'electronics'], '410'],
        ['Japan', 8, null, ['LED packages', 'phosphors', 'capacitors'], '392'],
        ['Malaysia', 7, null, ['Semiconductor packaging', 'driver electronics'], '458'],
        ['Germany', 6, null, ['Driver electronics', 'optical polymers'], '276'],
        ['United States', 5, null, ['LED packages', 'power electronics'], '840'],
        ['Mexico', 4, null, ['Bases', 'driver boards', 'wire'], '484'],
        ['Vietnam', 3, null, ['Driver boards', 'molded housings'], '704'],
        ['Thailand', 3, null, ['Driver boards', 'molded parts'], '764'],
        ['India', 2, null, ['Driver boards', 'bases'], '356'],
        ['Italy', 1, null, ['Optics', 'specialty housings'], '380'],
        ['Other', 4, null, ['Solder, adhesives and minor passive parts']],
      ],
      assembly: [
        ['China', 48], ['India', 12], ['Vietnam', 10], ['Poland', 6], ['Mexico', 5], ['Germany', 4],
        ['Indonesia', 3], ['United States', 3], ['Turkey', 2], ['Thailand', 2], ['Egypt', 1], ['Other', 4],
      ],
      logistics: [
        ['Netherlands', 14], ['Germany', 11], ['Singapore', 10], ['Belgium', 9], ['Hong Kong', 8],
        ['United Arab Emirates', 8], ['United States', 7], ['China', 6], ['Malaysia', 5], ['Mexico', 5],
        ['Poland', 4], ['Panama', 3], ['Turkey', 3], ['Other', 7],
      ],
      buyers: [
        ['United States', 17], ['China', 12], ['Germany', 8], ['United Kingdom', 6], ['Japan', 6], ['France', 5],
        ['India', 5], ['Canada', 4], ['Italy', 4], ['Brazil', 4], ['South Korea', 4], ['Spain', 3],
        ['Australia', 3], ['Mexico', 3], ['Netherlands', 2], ['Poland', 2], ['Saudi Arabia', 2],
        ['United Arab Emirates', 2], ['South Africa', 1], ['Sweden', 1], ['Other', 6],
      ],
      waste: [
        ['China', 15], ['United States', 14], ['India', 10], ['Germany', 7], ['United Kingdom', 5], ['Japan', 5],
        ['France', 4], ['Brazil', 4], ['Italy', 4], ['Canada', 3], ['Russia', 3], ['Mexico', 3],
        ['South Korea', 3], ['Indonesia', 3], ['Spain', 3], ['Poland', 2], ['Turkey', 2], ['Australia', 2],
        ['South Africa', 2], ['Chile', 1], ['United Arab Emirates', 1], ['Other', 4],
      ],
    },
    feedback: [
      'It is a small mains-powered household product that is installed rather than carried during use.',
      'A translucent polymer shell covers electronics, while an aluminum body moves heat away from them.',
      'Its driver converts alternating current before semiconductor packages emit light through a phosphor layer.',
      'It screws or locks into a lamp socket and commonly replaces a 60-watt incandescent source.',
    ],
    mapRoles: {
      '156': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '036': ['source', 'buyer', 'waste'],
      '152': ['source', 'waste'], '180': ['source'], '360': ['source', 'assembly', 'waste'], '604': ['source'],
      '076': ['source', 'buyer', 'waste'], '710': ['source', 'buyer', 'waste'], '682': ['source', 'buyer'],
      '840': ['source', 'component', 'assembly', 'logistics', 'buyer', 'waste'], '643': ['source', 'waste'],
      '124': ['source', 'buyer', 'waste'], '356': ['source', 'component', 'assembly', 'buyer', 'waste'], '324': ['source'],
      '458': ['source', 'component', 'logistics'], '158': ['component'], '410': ['component', 'buyer', 'waste'],
      '392': ['component', 'buyer', 'waste'], '276': ['component', 'assembly', 'logistics', 'buyer', 'waste'],
      '484': ['component', 'assembly', 'logistics', 'buyer', 'waste'], '704': ['component', 'assembly'],
      '764': ['component', 'assembly'], '380': ['component', 'buyer', 'waste'], '616': ['assembly', 'logistics', 'buyer', 'waste'],
      '792': ['assembly', 'logistics', 'waste'], '818': ['assembly'], '528': ['logistics', 'buyer'],
      '702': ['logistics'], '056': ['logistics'], '344': ['logistics'], '784': ['logistics', 'buyer', 'waste'],
      '591': ['logistics'], '826': ['buyer', 'waste'], '250': ['buyer', 'waste'], '724': ['buyer', 'waste'],
      '752': ['buyer'],
    },
    mapLabels: [
      ['China', 789, 153, 'source'], ['Australia', 872, 319, 'source'], ['Chile', 297, 340, 'source'],
      ['Taiwan', 836, 185, 'component'], ['South Korea', 827, 167, 'component'], ['India', 719, 189, 'assembly'],
      ['Vietnam', 805, 205, 'assembly'], ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'],
      ['United States', 222, 144, 'buyer'], ['United Kingdom', 493, 98, 'buyer'], ['Indonesia', 823, 278, 'waste'],
    ],
  },
{
  "id": "umbrella",
  "name": "Umbrella",
  "aliases": [
    "umbrella",
    "rain umbrella",
    "folding umbrella",
    "compact umbrella",
    "walking umbrella",
    "stick umbrella",
    "automatic umbrella",
    "travel umbrella",
    "pocket umbrella",
    "rain parasol",
    "weather umbrella",
    "collapsible umbrella",
    "telescopic umbrella",
    "handheld umbrella",
    "hand held umbrella",
    "brolly",
    "rain shade",
    "sun umbrella"
  ],
  "category": "Weather accessory",
  "descriptor": "Portable weather protection",
  "portable": true,
  "powered": false,
  "setting": "outdoors and travel",
  "finishedPrice": {
    "range": "$8–$80 per unit",
    "basis": "Indicative retail range for one personal rain umbrella; wind-resistant frames, automatic mechanisms and premium fabrics raise the price.",
    "tiers": [
      [
        "Value",
        "$8–$15"
      ],
      [
        "Everyday",
        "$15–$30"
      ],
      [
        "Wind-resistant",
        "$30–$50"
      ],
      [
        "Premium",
        "$50–$80"
      ]
    ]
  },
  "guessMaterials": [
    "Polyester canopy",
    "Steel frame",
    "Fiberglass ribs",
    "ABS handle",
    "Aluminum runner"
  ],
  "materials": [
    [
      "Steel shaft and ribs",
      210,
      0.85
    ],
    [
      "Polyester canopy",
      120,
      1.4
    ],
    [
      "Fiberglass rib sections",
      45,
      1.1
    ],
    [
      "ABS handle and tips",
      40,
      1.8
    ],
    [
      "Aluminum runner and fittings",
      20,
      2.6
    ],
    [
      "Steel fasteners and springs",
      10,
      1.2
    ],
    [
      "Water-repellent coating and thread",
      5,
      6.0
    ]
  ],
  "stages": {
    "sources": [
      [
        "China",
        20,
        null,
        [
          "Steel",
          "polyester feedstocks",
          "aluminum"
        ]
      ],
      [
        "Australia",
        12,
        null,
        [
          "Iron ore",
          "bauxite"
        ]
      ],
      [
        "Brazil",
        10,
        null,
        [
          "Iron ore",
          "bauxite"
        ]
      ],
      [
        "India",
        8,
        null,
        [
          "Iron ore",
          "polyester feedstocks"
        ]
      ],
      [
        "Saudi Arabia",
        8,
        null,
        [
          "Polyester and ABS feedstocks"
        ]
      ],
      [
        "United States",
        7,
        null,
        [
          "Petrochemical feedstocks",
          "steel"
        ]
      ],
      [
        "South Africa",
        6,
        null,
        [
          "Iron ore",
          "manganese"
        ]
      ],
      [
        "Indonesia",
        6,
        null,
        [
          "Nickel",
          "petrochemical feedstocks"
        ]
      ],
      [
        "Russia",
        5,
        null,
        [
          "Nickel",
          "steel inputs"
        ]
      ],
      [
        "South Korea",
        4,
        null,
        [
          "Polyester intermediates"
        ]
      ],
      [
        "Japan",
        3,
        null,
        [
          "Coating chemicals"
        ]
      ],
      [
        "Chile",
        3,
        null,
        [
          "Copper"
        ]
      ],
      [
        "Canada",
        3,
        null,
        [
          "Aluminum",
          "nickel"
        ]
      ],
      [
        "Other",
        5,
        null,
        [
          "Silica, pigments and coating inputs"
        ]
      ]
    ],
    "components": [
      [
        "China",
        45,
        null,
        [
          "Frames",
          "canopies",
          "handles"
        ]
      ],
      [
        "Germany",
        10,
        null,
        [
          "Mechanisms",
          "steel ribs"
        ]
      ],
      [
        "Taiwan",
        8,
        null,
        [
          "Ribs",
          "automatic openers"
        ]
      ],
      [
        "Japan",
        6,
        null,
        [
          "Coated fabrics",
          "mechanisms"
        ]
      ],
      [
        "Cambodia",
        6,
        null,
        [
          "Sewn canopies"
        ]
      ],
      [
        "Poland",
        5,
        null,
        [
          "Frames",
          "handles"
        ]
      ],
      [
        "Vietnam",
        4,
        null,
        [
          "Sewn canopies"
        ]
      ],
      [
        "India",
        4,
        null,
        [
          "Steel shafts",
          "canopies"
        ]
      ],
      [
        "United States",
        3,
        null,
        [
          "Specialty fabrics"
        ]
      ],
      [
        "Italy",
        3,
        null,
        [
          "Handles",
          "fashion canopies"
        ]
      ],
      [
        "Other",
        6,
        null,
        [
          "Tips, straps and fasteners"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        72
      ],
      [
        "Cambodia",
        8
      ],
      [
        "Germany",
        4
      ],
      [
        "Netherlands",
        3
      ],
      [
        "Poland",
        3
      ],
      [
        "Italy",
        2
      ],
      [
        "Spain",
        2
      ],
      [
        "United States",
        1
      ],
      [
        "Other",
        5
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a portable unpowered object normally carried only when the weather may change.",
    "A textile sheet provides most of its area, while a hinged metal framework provides most of its structure.",
    "A sliding runner spreads several ribs outward from a central shaft.",
    "It opens above one person to keep off rain or strong sun."
  ],
  "mapRoles": {
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "036": [
      "source",
      "buyer",
      "waste"
    ],
    "076": [
      "source",
      "buyer",
      "waste"
    ],
    "356": [
      "source",
      "component",
      "buyer",
      "waste"
    ],
    "682": [
      "source",
      "buyer"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "710": [
      "source",
      "buyer",
      "waste"
    ],
    "360": [
      "source",
      "waste"
    ],
    "643": [
      "source",
      "waste"
    ],
    "410": [
      "source",
      "buyer",
      "waste"
    ],
    "392": [
      "source",
      "component",
      "buyer",
      "waste"
    ],
    "152": [
      "source",
      "waste"
    ],
    "124": [
      "source",
      "buyer",
      "waste"
    ],
    "276": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "158": [
      "component"
    ],
    "116": [
      "component",
      "assembly"
    ],
    "616": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "704": [
      "component"
    ],
    "380": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "528": [
      "assembly",
      "logistics",
      "buyer"
    ],
    "724": [
      "assembly",
      "buyer",
      "waste"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "458": [
      "logistics"
    ],
    "484": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "250": [
      "buyer",
      "waste"
    ],
    "752": [
      "buyer"
    ],
    "792": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "China",
      789,
      153,
      "assembly"
    ],
    [
      "Australia",
      872,
      319,
      "source"
    ],
    [
      "Germany",
      528,
      107,
      "component"
    ],
    [
      "Cambodia",
      796,
      213,
      "assembly"
    ],
    [
      "Netherlands",
      514,
      106,
      "logistics"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
},
{
  "id": "backpack",
  "name": "Backpack",
  "aliases": [
    "backpack",
    "back pack",
    "rucksack",
    "ruck sack",
    "daypack",
    "day pack",
    "school backpack",
    "school bag",
    "book bag",
    "bookbag",
    "knapsack",
    "hiking backpack",
    "travel backpack",
    "laptop backpack",
    "student backpack",
    "shoulder backpack",
    "two strap bag",
    "two-strap bag",
    "carry pack",
    "back bag"
  ],
  "category": "Bag and luggage",
  "descriptor": "Wearable carrying bag",
  "portable": true,
  "powered": false,
  "setting": "school, work and travel",
  "finishedPrice": {
    "range": "$15–$250 per unit",
    "basis": "Indicative retail range for one textile daypack; technical suspension, weatherproof laminates and premium branding raise the price.",
    "tiers": [
      [
        "Value",
        "$15–$35"
      ],
      [
        "Everyday",
        "$35–$80"
      ],
      [
        "Technical",
        "$80–$150"
      ],
      [
        "Premium",
        "$150–$250"
      ]
    ]
  },
  "guessMaterials": [
    "Polyester fabric",
    "Polyurethane foam",
    "Zippers",
    "Nylon webbing",
    "Plastic buckles"
  ],
  "materials": [
    [
      "Polyester and nylon shell fabric",
      360,
      2.4
    ],
    [
      "Polyurethane back and strap foam",
      120,
      3.0
    ],
    [
      "Zippers and sliders",
      70,
      4.5
    ],
    [
      "Nylon webbing and binding",
      65,
      3.2
    ],
    [
      "Plastic buckles and adjusters",
      35,
      2.2
    ],
    [
      "Polyester sewing thread",
      20,
      2.0
    ],
    [
      "Water-resistant coating",
      15,
      5.5
    ],
    [
      "Metal hardware",
      15,
      3.5
    ]
  ],
  "stages": {
    "sources": [
      [
        "China",
        22,
        null,
        [
          "Polyester",
          "nylon",
          "steel"
        ]
      ],
      [
        "Saudi Arabia",
        10,
        null,
        [
          "Polymer feedstocks"
        ]
      ],
      [
        "United States",
        9,
        null,
        [
          "Polymer feedstocks",
          "foam inputs"
        ]
      ],
      [
        "India",
        9,
        null,
        [
          "Cotton",
          "polyester feedstocks"
        ]
      ],
      [
        "South Korea",
        8,
        null,
        [
          "Polyester and polyurethane intermediates"
        ]
      ],
      [
        "Taiwan",
        7,
        null,
        [
          "Nylon intermediates"
        ]
      ],
      [
        "Indonesia",
        7,
        null,
        [
          "Petrochemical feedstocks"
        ]
      ],
      [
        "Australia",
        5,
        null,
        [
          "Iron ore",
          "bauxite"
        ]
      ],
      [
        "Brazil",
        5,
        null,
        [
          "Iron ore"
        ]
      ],
      [
        "Vietnam",
        4,
        null,
        [
          "Rubber and textile inputs"
        ]
      ],
      [
        "Russia",
        4,
        null,
        [
          "Nickel and polymer feedstocks"
        ]
      ],
      [
        "Turkey",
        3,
        null,
        [
          "Textile fibers"
        ]
      ],
      [
        "Japan",
        2,
        null,
        [
          "Coating chemicals"
        ]
      ],
      [
        "Other",
        5,
        null,
        [
          "Pigments, zinc and fillers"
        ]
      ]
    ],
    "components": [
      [
        "China",
        30,
        null,
        [
          "Woven fabric",
          "zippers",
          "buckles"
        ]
      ],
      [
        "Taiwan",
        12,
        null,
        [
          "Technical fabrics",
          "webbing"
        ]
      ],
      [
        "South Korea",
        10,
        null,
        [
          "Coated textiles",
          "foam"
        ]
      ],
      [
        "Vietnam",
        9,
        null,
        [
          "Cut fabric panels",
          "webbing"
        ]
      ],
      [
        "Japan",
        7,
        null,
        [
          "Zippers",
          "coatings"
        ]
      ],
      [
        "Germany",
        6,
        null,
        [
          "Buckles",
          "technical textiles"
        ]
      ],
      [
        "India",
        6,
        null,
        [
          "Woven fabric",
          "thread"
        ]
      ],
      [
        "Indonesia",
        5,
        null,
        [
          "Woven fabric",
          "foam"
        ]
      ],
      [
        "United States",
        4,
        null,
        [
          "Foam",
          "specialty textiles"
        ]
      ],
      [
        "Italy",
        3,
        null,
        [
          "Premium fabrics",
          "hardware"
        ]
      ],
      [
        "Other",
        8,
        null,
        [
          "Labels, binding and minor fittings"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        45
      ],
      [
        "Vietnam",
        12
      ],
      [
        "Indonesia",
        10
      ],
      [
        "Cambodia",
        8
      ],
      [
        "Germany",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "India",
        3
      ],
      [
        "United States",
        2
      ],
      [
        "Other",
        7
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a flexible unpowered carrier designed to travel with one person.",
    "Woven synthetic fabric dominates its mass, with foam added where it touches the body.",
    "Zippers close several compartments while adjustable webbing carries the load.",
    "Two padded straps let it be worn across the back."
  ],
  "mapRoles": {
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "682": [
      "source",
      "buyer"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "356": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "410": [
      "source",
      "component",
      "buyer",
      "waste"
    ],
    "158": [
      "source",
      "component"
    ],
    "360": [
      "source",
      "component",
      "assembly",
      "waste"
    ],
    "036": [
      "source",
      "buyer",
      "waste"
    ],
    "076": [
      "source",
      "buyer",
      "waste"
    ],
    "704": [
      "source",
      "component",
      "assembly"
    ],
    "643": [
      "source",
      "waste"
    ],
    "792": [
      "source",
      "waste"
    ],
    "392": [
      "source",
      "component",
      "buyer",
      "waste"
    ],
    "276": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "380": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "116": [
      "assembly"
    ],
    "250": [
      "assembly",
      "buyer",
      "waste"
    ],
    "528": [
      "logistics",
      "buyer"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "458": [
      "logistics"
    ],
    "484": [
      "logistics",
      "buyer",
      "waste"
    ],
    "616": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "124": [
      "buyer",
      "waste"
    ],
    "724": [
      "buyer",
      "waste"
    ],
    "710": [
      "buyer",
      "waste"
    ],
    "752": [
      "buyer"
    ],
    "152": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "China",
      789,
      153,
      "component"
    ],
    [
      "Saudi Arabia",
      650,
      176,
      "source"
    ],
    [
      "Vietnam",
      805,
      205,
      "assembly"
    ],
    [
      "Indonesia",
      823,
      278,
      "assembly"
    ],
    [
      "Netherlands",
      514,
      106,
      "logistics"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
},
{
  "id": "alkaline-aa-battery",
  "name": "Alkaline AA battery",
  "aliases": [
    "aa battery",
    "aa cell",
    "double a battery",
    "double-a battery",
    "alkaline battery",
    "alkaline aa battery",
    "1.5 volt battery",
    "1.5v battery",
    "primary battery",
    "dry cell battery",
    "dry cell",
    "manganese battery",
    "zinc manganese battery",
    "zinc-manganese battery",
    "flashlight battery",
    "penlight battery",
    "lr6 battery",
    "lr6 cell",
    "disposable battery"
  ],
  "category": "Portable energy",
  "descriptor": "Single-use electrochemical cell",
  "portable": true,
  "powered": true,
  "setting": "small household electronics",
  "finishedPrice": {
    "range": "$0.30–$3 per unit",
    "basis": "Indicative per-cell retail range for one alkaline AA battery; multipacks lower the price and premium long-life brands raise it.",
    "tiers": [
      [
        "Bulk",
        "$0.30–$0.60"
      ],
      [
        "Everyday",
        "$0.60–$1.20"
      ],
      [
        "Premium",
        "$1.20–$2"
      ],
      [
        "Specialty",
        "$2–$3"
      ]
    ]
  },
  "guessMaterials": [
    "Manganese dioxide",
    "Zinc",
    "Steel can",
    "Potassium hydroxide",
    "Graphite"
  ],
  "materials": [
    [
      "Manganese-dioxide cathode mix",
      8.5,
      1.8
    ],
    [
      "Zinc anode powder",
      5.5,
      3.0
    ],
    [
      "Steel can and caps",
      4.5,
      0.9
    ],
    [
      "Potassium-hydroxide electrolyte and water",
      3,
      1.2
    ],
    [
      "Graphite and conductive carbon",
      0.8,
      2.5
    ],
    [
      "Paper separator",
      0.5,
      1.2
    ],
    [
      "Brass collector and contacts",
      0.3,
      5.0
    ],
    [
      "Polymer seal and printed label",
      0.4,
      3.0
    ]
  ],
  "stages": {
    "sources": [
      [
        "South Africa",
        18,
        null,
        [
          "Manganese ore"
        ]
      ],
      [
        "China",
        17,
        null,
        [
          "Manganese",
          "zinc",
          "steel"
        ]
      ],
      [
        "Australia",
        10,
        null,
        [
          "Manganese",
          "zinc",
          "iron ore"
        ]
      ],
      [
        "Gabon",
        8,
        null,
        [
          "Manganese ore"
        ]
      ],
      [
        "Brazil",
        7,
        null,
        [
          "Manganese",
          "iron ore"
        ]
      ],
      [
        "Peru",
        7,
        null,
        [
          "Zinc",
          "copper"
        ]
      ],
      [
        "Mexico",
        6,
        null,
        [
          "Zinc",
          "steel"
        ]
      ],
      [
        "Canada",
        5,
        null,
        [
          "Zinc",
          "nickel"
        ]
      ],
      [
        "Indonesia",
        5,
        null,
        [
          "Tin",
          "zinc"
        ]
      ],
      [
        "India",
        4,
        null,
        [
          "Manganese",
          "iron ore"
        ]
      ],
      [
        "United States",
        4,
        null,
        [
          "Zinc",
          "chemical feedstocks"
        ]
      ],
      [
        "Japan",
        3,
        null,
        [
          "Electrolyte chemicals"
        ]
      ],
      [
        "Other",
        6,
        null,
        [
          "Graphite, paper fiber and polymers"
        ]
      ]
    ],
    "components": [
      [
        "China",
        35,
        null,
        [
          "Cathode mix",
          "steel cans",
          "seals"
        ]
      ],
      [
        "Indonesia",
        14,
        null,
        [
          "Cell cans",
          "zinc mix"
        ]
      ],
      [
        "Poland",
        10,
        null,
        [
          "Cathode and anode mixes"
        ]
      ],
      [
        "Germany",
        9,
        null,
        [
          "Seals",
          "electrolyte chemicals"
        ]
      ],
      [
        "Belgium",
        8,
        null,
        [
          "Zinc powder",
          "electrolytes"
        ]
      ],
      [
        "Japan",
        6,
        null,
        [
          "Separators",
          "electrolytes"
        ]
      ],
      [
        "United States",
        5,
        null,
        [
          "Cathode mix",
          "seals"
        ]
      ],
      [
        "Malaysia",
        4,
        null,
        [
          "Steel cans",
          "labels"
        ]
      ],
      [
        "South Korea",
        3,
        null,
        [
          "Zinc powder",
          "separators"
        ]
      ],
      [
        "Singapore",
        2,
        null,
        [
          "Specialty chemicals"
        ]
      ],
      [
        "Other",
        4,
        null,
        [
          "Labels and minor contacts"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        40
      ],
      [
        "Indonesia",
        15
      ],
      [
        "Poland",
        10
      ],
      [
        "Germany",
        9
      ],
      [
        "Belgium",
        8
      ],
      [
        "United States",
        5
      ],
      [
        "Japan",
        3
      ],
      [
        "Malaysia",
        3
      ],
      [
        "Singapore",
        3
      ],
      [
        "Other",
        4
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a small powered product that stores energy chemically and is replaced rather than charged.",
    "Most of its mass is a dark manganese compound and zinc sealed inside a steel cylinder.",
    "An alkaline electrolyte lets electrons flow between one raised terminal and one flat terminal.",
    "Its familiar cylindrical size is marked AA and it supplies about 1.5 volts."
  ],
  "mapRoles": {
    "710": [
      "source",
      "buyer",
      "waste"
    ],
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "036": [
      "source",
      "buyer",
      "waste"
    ],
    "266": [
      "source"
    ],
    "076": [
      "source",
      "buyer",
      "waste"
    ],
    "604": [
      "source"
    ],
    "484": [
      "source",
      "logistics",
      "buyer",
      "waste"
    ],
    "124": [
      "source",
      "buyer",
      "waste"
    ],
    "360": [
      "source",
      "component",
      "assembly",
      "waste"
    ],
    "356": [
      "source",
      "buyer",
      "waste"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "392": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "616": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "276": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "056": [
      "component",
      "assembly",
      "logistics"
    ],
    "458": [
      "component",
      "assembly",
      "logistics"
    ],
    "410": [
      "component",
      "buyer",
      "waste"
    ],
    "702": [
      "component",
      "assembly",
      "logistics"
    ],
    "528": [
      "logistics",
      "buyer"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "250": [
      "buyer",
      "waste"
    ],
    "380": [
      "buyer",
      "waste"
    ],
    "724": [
      "buyer",
      "waste"
    ],
    "682": [
      "buyer"
    ],
    "752": [
      "buyer"
    ],
    "643": [
      "waste"
    ],
    "792": [
      "waste"
    ],
    "152": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "South Africa",
      548,
      337,
      "source"
    ],
    [
      "China",
      789,
      153,
      "assembly"
    ],
    [
      "Indonesia",
      823,
      278,
      "assembly"
    ],
    [
      "Poland",
      543,
      101,
      "assembly"
    ],
    [
      "Germany",
      528,
      107,
      "component"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
},
{
  "id": "toilet-paper-roll",
  "name": "Toilet-paper roll",
  "aliases": [
    "toilet paper",
    "toilet roll",
    "toilet paper roll",
    "bath tissue",
    "bathroom tissue",
    "bathroom paper",
    "loo roll",
    "lavatory paper",
    "toilet tissue",
    "tissue roll",
    "paper roll",
    "roll of toilet paper",
    "roll of tissue",
    "bathroom roll",
    "wc paper",
    "hygiene tissue"
  ],
  "category": "Household paper",
  "descriptor": "Disposable sanitary paper roll",
  "portable": true,
  "powered": false,
  "setting": "bathroom use",
  "finishedPrice": {
    "range": "$0.40–$3 per roll",
    "basis": "Indicative per-roll retail range; recycled content, ply count, sheet count and premium softness change the price.",
    "tiers": [
      [
        "Value",
        "$0.40–$0.80"
      ],
      [
        "Everyday",
        "$0.80–$1.40"
      ],
      [
        "Premium",
        "$1.40–$2.20"
      ],
      [
        "Specialty",
        "$2.20–$3"
      ]
    ]
  },
  "guessMaterials": [
    "Tissue fiber",
    "Paperboard tube",
    "Starch adhesive",
    "Wet-strength additives"
  ],
  "materials": [
    [
      "Tissue-grade cellulose fiber",
      105,
      0.95
    ],
    [
      "Recycled paperboard tube",
      8,
      0.45
    ],
    [
      "Starch adhesive",
      1,
      0.7
    ],
    [
      "Mineral and wet-strength additives",
      1,
      2.5
    ]
  ],
  "stages": {
    "sources": [
      [
        "Brazil",
        18,
        null,
        [
          "Eucalyptus pulp"
        ]
      ],
      [
        "Canada",
        15,
        null,
        [
          "Softwood pulp",
          "recovered paper"
        ]
      ],
      [
        "United States",
        13,
        null,
        [
          "Wood pulp",
          "recovered paper"
        ]
      ],
      [
        "Sweden",
        10,
        null,
        [
          "Softwood pulp"
        ]
      ],
      [
        "Finland",
        8,
        null,
        [
          "Softwood and birch pulp"
        ]
      ],
      [
        "Indonesia",
        7,
        null,
        [
          "Acacia pulp"
        ]
      ],
      [
        "China",
        6,
        null,
        [
          "Recovered paper",
          "bamboo pulp"
        ]
      ],
      [
        "Chile",
        5,
        null,
        [
          "Radiata pine and eucalyptus pulp"
        ]
      ],
      [
        "Portugal",
        4,
        null,
        [
          "Eucalyptus pulp"
        ]
      ],
      [
        "Russia",
        4,
        null,
        [
          "Softwood pulp"
        ]
      ],
      [
        "Germany",
        3,
        null,
        [
          "Recovered paper",
          "starch"
        ]
      ],
      [
        "Other",
        7,
        null,
        [
          "Fillers, additives and recovered paper"
        ]
      ]
    ],
    "components": [
      [
        "Brazil",
        18,
        null,
        [
          "Bleached pulp"
        ]
      ],
      [
        "Canada",
        14,
        null,
        [
          "Pulp rolls",
          "paperboard cores"
        ]
      ],
      [
        "United States",
        12,
        null,
        [
          "Tissue parent reels",
          "cores"
        ]
      ],
      [
        "Sweden",
        10,
        null,
        [
          "Bleached pulp",
          "parent reels"
        ]
      ],
      [
        "Finland",
        8,
        null,
        [
          "Bleached pulp"
        ]
      ],
      [
        "China",
        8,
        null,
        [
          "Tissue parent reels",
          "cores"
        ]
      ],
      [
        "Germany",
        7,
        null,
        [
          "Tissue parent reels",
          "additives"
        ]
      ],
      [
        "Indonesia",
        6,
        null,
        [
          "Bleached pulp"
        ]
      ],
      [
        "Italy",
        5,
        null,
        [
          "Embossed tissue reels"
        ]
      ],
      [
        "Poland",
        4,
        null,
        [
          "Cores",
          "converted rolls"
        ]
      ],
      [
        "Other",
        8,
        null,
        [
          "Adhesives and wrapping materials"
        ]
      ]
    ],
    "assembly": [
      [
        "Germany",
        12
      ],
      [
        "China",
        10
      ],
      [
        "Italy",
        8
      ],
      [
        "Poland",
        8
      ],
      [
        "Canada",
        7
      ],
      [
        "United States",
        7
      ],
      [
        "Sweden",
        6
      ],
      [
        "Indonesia",
        5
      ],
      [
        "Turkey",
        5
      ],
      [
        "Spain",
        4
      ],
      [
        "France",
        4
      ],
      [
        "Mexico",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Portugal",
        3
      ],
      [
        "Netherlands",
        3
      ],
      [
        "Other",
        10
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a lightweight disposable household product made almost entirely from plant fiber.",
    "Its thin embossed sheets are wound around a small recycled-paperboard core.",
    "The material is designed to soften and break apart quickly when wet.",
    "It is kept beside a toilet and torn off along perforated lines."
  ],
  "mapRoles": {
    "076": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "124": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "752": [
      "source",
      "component",
      "assembly",
      "buyer"
    ],
    "246": [
      "source",
      "component"
    ],
    "360": [
      "source",
      "component",
      "assembly",
      "waste"
    ],
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "152": [
      "source",
      "waste"
    ],
    "620": [
      "source",
      "assembly"
    ],
    "643": [
      "source",
      "waste"
    ],
    "276": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "380": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "616": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "792": [
      "assembly",
      "waste"
    ],
    "724": [
      "assembly",
      "buyer",
      "waste"
    ],
    "250": [
      "assembly",
      "buyer",
      "waste"
    ],
    "484": [
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "528": [
      "assembly",
      "logistics",
      "buyer"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "458": [
      "logistics"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "392": [
      "buyer",
      "waste"
    ],
    "356": [
      "buyer",
      "waste"
    ],
    "410": [
      "buyer",
      "waste"
    ],
    "036": [
      "buyer",
      "waste"
    ],
    "682": [
      "buyer"
    ],
    "710": [
      "buyer",
      "waste"
    ]
  },
  "mapLabels": [
    [
      "Brazil",
      356,
      278,
      "source"
    ],
    [
      "Canada",
      250,
      91,
      "source"
    ],
    [
      "Sweden",
      536,
      73,
      "component"
    ],
    [
      "Germany",
      528,
      107,
      "assembly"
    ],
    [
      "Italy",
      535,
      139,
      "assembly"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
},
{
  "id": "wooden-pencil",
  "name": "Wooden pencil",
  "aliases": [
    "pencil",
    "wooden pencil",
    "graphite pencil",
    "lead pencil",
    "writing pencil",
    "school pencil",
    "drawing pencil",
    "sketching pencil",
    "hb pencil",
    "number 2 pencil",
    "no 2 pencil",
    "#2 pencil",
    "hexagonal pencil",
    "yellow pencil",
    "eraser pencil",
    "cedar pencil",
    "sharpenable pencil",
    "standard pencil"
  ],
  "category": "Writing instrument",
  "descriptor": "Sharpenable wooden writing tool",
  "portable": true,
  "powered": false,
  "setting": "school, office and drawing",
  "finishedPrice": {
    "range": "$0.20–$5 per unit",
    "basis": "Indicative retail range for one wood-cased graphite pencil; multipacks reduce the price and artist grades raise it.",
    "tiers": [
      [
        "Bulk",
        "$0.20–$0.50"
      ],
      [
        "Everyday",
        "$0.50–$1"
      ],
      [
        "Premium",
        "$1–$2.50"
      ],
      [
        "Artist",
        "$2.50–$5"
      ]
    ]
  },
  "guessMaterials": [
    "Wood casing",
    "Graphite-clay core",
    "Lacquer",
    "Aluminum ferrule",
    "Rubber eraser"
  ],
  "materials": [
    [
      "Cedar or basswood casing",
      3.2,
      1.4
    ],
    [
      "Graphite and clay core",
      1.1,
      1.8
    ],
    [
      "Lacquer and pigment",
      0.7,
      5.0
    ],
    [
      "Aluminum ferrule",
      0.55,
      2.6
    ],
    [
      "Synthetic-rubber eraser",
      0.4,
      2.5
    ],
    [
      "Adhesive",
      0.05,
      3.5
    ]
  ],
  "stages": {
    "sources": [
      [
        "United States",
        15,
        null,
        [
          "Incense cedar",
          "graphite"
        ]
      ],
      [
        "Brazil",
        14,
        null,
        [
          "Plantation wood",
          "clay"
        ]
      ],
      [
        "China",
        12,
        null,
        [
          "Basswood",
          "graphite",
          "aluminum"
        ]
      ],
      [
        "Indonesia",
        10,
        null,
        [
          "Plantation wood",
          "rubber"
        ]
      ],
      [
        "Russia",
        8,
        null,
        [
          "Cedar and graphite"
        ]
      ],
      [
        "Canada",
        8,
        null,
        [
          "Softwood"
        ]
      ],
      [
        "Germany",
        6,
        null,
        [
          "Pigments and lacquer chemicals"
        ]
      ],
      [
        "India",
        5,
        null,
        [
          "Graphite and clay"
        ]
      ],
      [
        "Mexico",
        5,
        null,
        [
          "Cedar and pigments"
        ]
      ],
      [
        "South Africa",
        4,
        null,
        [
          "Graphite and clay"
        ]
      ],
      [
        "Japan",
        3,
        null,
        [
          "Graphite and lacquer"
        ]
      ],
      [
        "Austria",
        3,
        null,
        [
          "Wood slats"
        ]
      ],
      [
        "Other",
        7,
        null,
        [
          "Rubber, adhesives and metals"
        ]
      ]
    ],
    "components": [
      [
        "China",
        32,
        null,
        [
          "Wood slats",
          "cores",
          "ferrules"
        ]
      ],
      [
        "Germany",
        12,
        null,
        [
          "Graphite cores",
          "lacquer"
        ]
      ],
      [
        "Japan",
        10,
        null,
        [
          "Fine graphite cores",
          "erasers"
        ]
      ],
      [
        "Brazil",
        8,
        null,
        [
          "Wood slats",
          "cores"
        ]
      ],
      [
        "Indonesia",
        7,
        null,
        [
          "Wood slats",
          "erasers"
        ]
      ],
      [
        "Mexico",
        6,
        null,
        [
          "Cedar slats",
          "ferrules"
        ]
      ],
      [
        "India",
        5,
        null,
        [
          "Graphite cores",
          "erasers"
        ]
      ],
      [
        "Czechia",
        5,
        null,
        [
          "Wood slats",
          "cores"
        ]
      ],
      [
        "United States",
        4,
        null,
        [
          "Cedar slats",
          "erasers"
        ]
      ],
      [
        "France",
        3,
        null,
        [
          "Artist cores",
          "lacquer"
        ]
      ],
      [
        "Other",
        8,
        null,
        [
          "Adhesives and packaging"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        42
      ],
      [
        "Germany",
        10
      ],
      [
        "Brazil",
        7
      ],
      [
        "Indonesia",
        7
      ],
      [
        "Czechia",
        6
      ],
      [
        "India",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Vietnam",
        4
      ],
      [
        "France",
        3
      ],
      [
        "Japan",
        2
      ],
      [
        "United States",
        2
      ],
      [
        "Other",
        8
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a light unpowered hand tool used on paper and gradually consumed during use.",
    "A dark graphite-and-clay core is glued between two shaped pieces of wood.",
    "One end may carry a small rubber piece held by a crimped aluminum sleeve.",
    "It makes erasable marks and must be sharpened as its wooden body gets shorter."
  ],
  "mapRoles": {
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "076": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "360": [
      "source",
      "component",
      "assembly",
      "waste"
    ],
    "643": [
      "source",
      "waste"
    ],
    "124": [
      "source",
      "buyer",
      "waste"
    ],
    "276": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "356": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "484": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "710": [
      "source",
      "buyer",
      "waste"
    ],
    "392": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "040": [
      "source"
    ],
    "203": [
      "component",
      "assembly"
    ],
    "250": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "704": [
      "assembly"
    ],
    "528": [
      "logistics",
      "buyer"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "458": [
      "logistics"
    ],
    "616": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "380": [
      "buyer",
      "waste"
    ],
    "410": [
      "buyer",
      "waste"
    ],
    "724": [
      "buyer",
      "waste"
    ],
    "036": [
      "buyer",
      "waste"
    ],
    "682": [
      "buyer"
    ],
    "752": [
      "buyer"
    ],
    "792": [
      "waste"
    ],
    "152": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "United States",
      222,
      144,
      "source"
    ],
    [
      "Brazil",
      356,
      278,
      "source"
    ],
    [
      "China",
      789,
      153,
      "assembly"
    ],
    [
      "Germany",
      528,
      107,
      "component"
    ],
    [
      "Japan",
      883,
      147,
      "component"
    ],
    [
      "Netherlands",
      514,
      106,
      "logistics"
    ]
  ]
},
{
  "id": "over-ear-headphones",
  "name": "Over-ear headphones",
  "aliases": [
    "headphones",
    "head phones",
    "over ear headphones",
    "over-ear headphones",
    "wireless headphones",
    "wired headphones",
    "stereo headphones",
    "audio headphones",
    "headset",
    "audio headset",
    "bluetooth headphones",
    "noise cancelling headphones",
    "noise-canceling headphones",
    "noise canceling headphones",
    "ear cup headphones",
    "earcup headphones",
    "music headphones",
    "listening headphones",
    "gaming headset"
  ],
  "category": "Personal audio",
  "descriptor": "Wearable audio device",
  "portable": true,
  "powered": true,
  "setting": "personal listening and communication",
  "finishedPrice": {
    "range": "$20–$600 per unit",
    "basis": "Indicative retail range for one over-ear consumer headset; wireless electronics, active noise cancellation and premium drivers raise the price.",
    "tiers": [
      [
        "Value",
        "$20–$60"
      ],
      [
        "Everyday",
        "$60–$150"
      ],
      [
        "Premium",
        "$150–$350"
      ],
      [
        "Audiophile",
        "$350–$600"
      ]
    ]
  },
  "guessMaterials": [
    "ABS and polycarbonate",
    "Polyurethane foam",
    "Steel headband",
    "Copper wire",
    "Driver electronics"
  ],
  "materials": [
    [
      "ABS and polycarbonate housings",
      95,
      2.2
    ],
    [
      "Polyurethane ear-cushion foam",
      50,
      3.0
    ],
    [
      "Steel headband and fasteners",
      30,
      1.0
    ],
    [
      "Copper coils and wiring",
      20,
      9.0
    ],
    [
      "Circuit boards and electronics",
      18,
      24.0
    ],
    [
      "Synthetic leather and textiles",
      15,
      4.0
    ],
    [
      "Aluminum parts",
      10,
      2.6
    ],
    [
      "Permanent magnets",
      6,
      18.0
    ],
    [
      "Cable and insulation",
      5,
      3.0
    ],
    [
      "Adhesives and coatings",
      1,
      6.0
    ]
  ],
  "stages": {
    "sources": [
      [
        "China",
        16,
        null,
        [
          "Rare earths",
          "aluminum",
          "polymer feedstocks"
        ]
      ],
      [
        "Chile",
        10,
        null,
        [
          "Copper"
        ]
      ],
      [
        "Australia",
        10,
        null,
        [
          "Bauxite",
          "iron ore",
          "rare earths"
        ]
      ],
      [
        "DR Congo",
        9,
        null,
        [
          "Copper",
          "cobalt"
        ]
      ],
      [
        "Indonesia",
        8,
        null,
        [
          "Nickel",
          "tin"
        ]
      ],
      [
        "Peru",
        7,
        null,
        [
          "Copper",
          "zinc"
        ]
      ],
      [
        "South Africa",
        6,
        null,
        [
          "Manganese",
          "chromium"
        ]
      ],
      [
        "Saudi Arabia",
        6,
        null,
        [
          "Polymer feedstocks"
        ]
      ],
      [
        "United States",
        5,
        null,
        [
          "Copper",
          "polymer feedstocks"
        ]
      ],
      [
        "Brazil",
        5,
        null,
        [
          "Iron ore",
          "bauxite"
        ]
      ],
      [
        "Canada",
        4,
        null,
        [
          "Nickel",
          "aluminum"
        ]
      ],
      [
        "Russia",
        4,
        null,
        [
          "Nickel",
          "aluminum"
        ]
      ],
      [
        "India",
        3,
        null,
        [
          "Iron ore",
          "electronics minerals"
        ]
      ],
      [
        "Other",
        7,
        null,
        [
          "Silica, rubber and specialty metals"
        ]
      ]
    ],
    "components": [
      [
        "China",
        32,
        null,
        [
          "Speaker drivers",
          "housings",
          "boards"
        ]
      ],
      [
        "Taiwan",
        14,
        null,
        [
          "Driver electronics",
          "wireless modules"
        ]
      ],
      [
        "South Korea",
        12,
        null,
        [
          "Batteries",
          "memory",
          "electronics"
        ]
      ],
      [
        "Japan",
        10,
        null,
        [
          "Driver diaphragms",
          "magnets"
        ]
      ],
      [
        "Malaysia",
        7,
        null,
        [
          "Chip packaging",
          "boards"
        ]
      ],
      [
        "Germany",
        5,
        null,
        [
          "Acoustic components",
          "microphones"
        ]
      ],
      [
        "Vietnam",
        5,
        null,
        [
          "Cables",
          "molded housings"
        ]
      ],
      [
        "United States",
        4,
        null,
        [
          "Audio chips",
          "software electronics"
        ]
      ],
      [
        "Mexico",
        3,
        null,
        [
          "Cables",
          "boards"
        ]
      ],
      [
        "Thailand",
        2,
        null,
        [
          "Molded parts",
          "cables"
        ]
      ],
      [
        "Other",
        6,
        null,
        [
          "Cushions, hinges and adhesives"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        52
      ],
      [
        "Vietnam",
        14
      ],
      [
        "Malaysia",
        6
      ],
      [
        "Mexico",
        5
      ],
      [
        "Germany",
        4
      ],
      [
        "Netherlands",
        3
      ],
      [
        "United States",
        3
      ],
      [
        "Japan",
        3
      ],
      [
        "South Korea",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Other",
        6
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a portable powered product worn on the body rather than installed in a room.",
    "Two padded housings contain magnets, copper coils and thin vibrating diaphragms.",
    "A curved adjustable band joins the housings, while electronics may receive a wireless signal.",
    "It covers both ears to play private stereo sound and may include a microphone."
  ],
  "mapRoles": {
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "152": [
      "source",
      "waste"
    ],
    "036": [
      "source",
      "buyer",
      "waste"
    ],
    "360": [
      "source",
      "waste"
    ],
    "604": [
      "source"
    ],
    "710": [
      "source",
      "buyer",
      "waste"
    ],
    "682": [
      "source",
      "buyer"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "076": [
      "source",
      "buyer",
      "waste"
    ],
    "124": [
      "source",
      "buyer",
      "waste"
    ],
    "643": [
      "source",
      "waste"
    ],
    "356": [
      "source",
      "buyer",
      "waste"
    ],
    "158": [
      "component"
    ],
    "410": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "392": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "458": [
      "component",
      "assembly",
      "logistics"
    ],
    "276": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "704": [
      "component",
      "assembly"
    ],
    "484": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "764": [
      "component"
    ],
    "528": [
      "assembly",
      "logistics",
      "buyer"
    ],
    "616": [
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "250": [
      "buyer",
      "waste"
    ],
    "380": [
      "buyer",
      "waste"
    ],
    "724": [
      "buyer",
      "waste"
    ],
    "752": [
      "buyer"
    ],
    "792": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "China",
      789,
      153,
      "assembly"
    ],
    [
      "Chile",
      297,
      340,
      "source"
    ],
    [
      "Taiwan",
      836,
      185,
      "component"
    ],
    [
      "South Korea",
      827,
      167,
      "component"
    ],
    [
      "Vietnam",
      805,
      205,
      "assembly"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
},
{
  "id": "stainless-steel-cooking-pot",
  "name": "Stainless-steel cooking pot",
  "aliases": [
    "cooking pot",
    "pot",
    "stainless steel pot",
    "stainless-steel pot",
    "stock pot",
    "stockpot",
    "sauce pot",
    "saucepan",
    "cooking saucepan",
    "kitchen pot",
    "metal pot",
    "steel pot",
    "boiling pot",
    "lidded pot",
    "stew pot",
    "soup pot",
    "induction pot",
    "cookware pot",
    "stainless cookware"
  ],
  "category": "Cookware",
  "descriptor": "Lidded metal cooking vessel",
  "portable": true,
  "powered": false,
  "setting": "kitchen cooking",
  "finishedPrice": {
    "range": "$25–$300 per unit",
    "basis": "Indicative retail range for one medium stainless-steel cooking pot with lid; multi-ply construction, size and premium brands raise the price.",
    "tiers": [
      [
        "Value",
        "$25–$50"
      ],
      [
        "Everyday",
        "$50–$100"
      ],
      [
        "Multi-ply",
        "$100–$180"
      ],
      [
        "Premium",
        "$180–$300"
      ]
    ]
  },
  "guessMaterials": [
    "Stainless steel",
    "Aluminum heat-spreading base",
    "Glass lid",
    "Heat-resistant handles"
  ],
  "materials": [
    [
      "Stainless-steel body and lid rim",
      1700,
      2.4
    ],
    [
      "Aluminum heat-spreading base",
      350,
      2.6
    ],
    [
      "Tempered-glass lid",
      100,
      0.9
    ],
    [
      "Phenolic resin and silicone handles",
      40,
      3.2
    ],
    [
      "Steel rivets and fittings",
      10,
      1.2
    ]
  ],
  "stages": {
    "sources": [
      [
        "Australia",
        18,
        null,
        [
          "Iron ore",
          "bauxite",
          "nickel"
        ]
      ],
      [
        "Brazil",
        13,
        null,
        [
          "Iron ore",
          "bauxite"
        ]
      ],
      [
        "South Africa",
        11,
        null,
        [
          "Chromium",
          "manganese",
          "iron ore"
        ]
      ],
      [
        "Indonesia",
        10,
        null,
        [
          "Nickel",
          "bauxite"
        ]
      ],
      [
        "China",
        9,
        null,
        [
          "Steel inputs",
          "aluminum"
        ]
      ],
      [
        "India",
        8,
        null,
        [
          "Iron ore",
          "chromium"
        ]
      ],
      [
        "Guinea",
        7,
        null,
        [
          "Bauxite"
        ]
      ],
      [
        "Russia",
        5,
        null,
        [
          "Nickel",
          "aluminum"
        ]
      ],
      [
        "Canada",
        4,
        null,
        [
          "Nickel",
          "aluminum"
        ]
      ],
      [
        "Turkey",
        4,
        null,
        [
          "Chromium",
          "iron ore"
        ]
      ],
      [
        "United States",
        3,
        null,
        [
          "Steel scrap",
          "silica"
        ]
      ],
      [
        "Philippines",
        3,
        null,
        [
          "Nickel",
          "chromium"
        ]
      ],
      [
        "Other",
        5,
        null,
        [
          "Silica, copper and handle chemicals"
        ]
      ]
    ],
    "components": [
      [
        "China",
        28,
        null,
        [
          "Steel blanks",
          "glass lids",
          "handles"
        ]
      ],
      [
        "Germany",
        15,
        null,
        [
          "Clad metal discs",
          "precision lids"
        ]
      ],
      [
        "Italy",
        12,
        null,
        [
          "Cookware blanks",
          "handles"
        ]
      ],
      [
        "India",
        10,
        null,
        [
          "Steel blanks",
          "glass lids"
        ]
      ],
      [
        "Turkey",
        8,
        null,
        [
          "Steel sheets",
          "handles"
        ]
      ],
      [
        "France",
        6,
        null,
        [
          "Clad bases",
          "glass lids"
        ]
      ],
      [
        "United States",
        5,
        null,
        [
          "Clad metal discs",
          "handles"
        ]
      ],
      [
        "Vietnam",
        4,
        null,
        [
          "Steel stampings",
          "lids"
        ]
      ],
      [
        "Portugal",
        3,
        null,
        [
          "Cookware blanks",
          "handles"
        ]
      ],
      [
        "Brazil",
        3,
        null,
        [
          "Steel blanks",
          "glass lids"
        ]
      ],
      [
        "Other",
        6,
        null,
        [
          "Rivets, seals and packaging"
        ]
      ]
    ],
    "assembly": [
      [
        "China",
        38
      ],
      [
        "Germany",
        10
      ],
      [
        "Italy",
        10
      ],
      [
        "India",
        8
      ],
      [
        "Turkey",
        7
      ],
      [
        "France",
        5
      ],
      [
        "Vietnam",
        4
      ],
      [
        "United States",
        4
      ],
      [
        "Portugal",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Brazil",
        2
      ],
      [
        "Other",
        6
      ]
    ],
    "logistics": [
      [
        "Netherlands",
        15
      ],
      [
        "Germany",
        12
      ],
      [
        "Belgium",
        10
      ],
      [
        "Singapore",
        10
      ],
      [
        "Hong Kong",
        8
      ],
      [
        "United Arab Emirates",
        8
      ],
      [
        "United States",
        7
      ],
      [
        "China",
        7
      ],
      [
        "Malaysia",
        5
      ],
      [
        "Mexico",
        4
      ],
      [
        "Poland",
        4
      ],
      [
        "Panama",
        3
      ],
      [
        "Other",
        7
      ]
    ],
    "buyers": [
      [
        "United States",
        18
      ],
      [
        "China",
        12
      ],
      [
        "Germany",
        8
      ],
      [
        "United Kingdom",
        6
      ],
      [
        "Japan",
        6
      ],
      [
        "France",
        5
      ],
      [
        "India",
        5
      ],
      [
        "Canada",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "South Korea",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Australia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "Netherlands",
        2
      ],
      [
        "Poland",
        2
      ],
      [
        "Saudi Arabia",
        2
      ],
      [
        "United Arab Emirates",
        2
      ],
      [
        "South Africa",
        1
      ],
      [
        "Sweden",
        1
      ],
      [
        "Other",
        6
      ]
    ],
    "waste": [
      [
        "China",
        15
      ],
      [
        "United States",
        14
      ],
      [
        "India",
        10
      ],
      [
        "Germany",
        7
      ],
      [
        "United Kingdom",
        5
      ],
      [
        "Japan",
        5
      ],
      [
        "France",
        4
      ],
      [
        "Brazil",
        4
      ],
      [
        "Italy",
        4
      ],
      [
        "Canada",
        3
      ],
      [
        "Russia",
        3
      ],
      [
        "Mexico",
        3
      ],
      [
        "South Korea",
        3
      ],
      [
        "Indonesia",
        3
      ],
      [
        "Spain",
        3
      ],
      [
        "Poland",
        2
      ],
      [
        "Turkey",
        2
      ],
      [
        "Australia",
        2
      ],
      [
        "South Africa",
        2
      ],
      [
        "Chile",
        1
      ],
      [
        "United Arab Emirates",
        1
      ],
      [
        "Other",
        4
      ]
    ]
  },
  "feedback": [
    "It is a durable unpowered household object used on a hot work surface.",
    "Most of its mass is corrosion-resistant steel, often bonded to an aluminum heat-spreading layer.",
    "A deep cylindrical vessel has side handles and usually a separate glass or metal cover.",
    "It holds water, soup or other food over a stove for boiling and simmering."
  ],
  "mapRoles": {
    "036": [
      "source",
      "buyer",
      "waste"
    ],
    "076": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "710": [
      "source",
      "buyer",
      "waste"
    ],
    "360": [
      "source",
      "assembly",
      "waste"
    ],
    "156": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "356": [
      "source",
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "324": [
      "source"
    ],
    "643": [
      "source",
      "waste"
    ],
    "124": [
      "source",
      "buyer",
      "waste"
    ],
    "792": [
      "source",
      "component",
      "assembly",
      "waste"
    ],
    "840": [
      "source",
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "608": [
      "source"
    ],
    "276": [
      "component",
      "assembly",
      "logistics",
      "buyer",
      "waste"
    ],
    "380": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "250": [
      "component",
      "assembly",
      "buyer",
      "waste"
    ],
    "704": [
      "component",
      "assembly"
    ],
    "620": [
      "component",
      "assembly"
    ],
    "528": [
      "logistics",
      "buyer"
    ],
    "056": [
      "logistics"
    ],
    "702": [
      "logistics"
    ],
    "344": [
      "logistics"
    ],
    "784": [
      "logistics",
      "buyer",
      "waste"
    ],
    "458": [
      "logistics"
    ],
    "484": [
      "logistics",
      "buyer",
      "waste"
    ],
    "616": [
      "logistics",
      "buyer",
      "waste"
    ],
    "591": [
      "logistics"
    ],
    "826": [
      "buyer",
      "waste"
    ],
    "392": [
      "buyer",
      "waste"
    ],
    "410": [
      "buyer",
      "waste"
    ],
    "724": [
      "buyer",
      "waste"
    ],
    "682": [
      "buyer"
    ],
    "752": [
      "buyer"
    ],
    "152": [
      "waste"
    ]
  },
  "mapLabels": [
    [
      "Australia",
      872,
      319,
      "source"
    ],
    [
      "South Africa",
      548,
      337,
      "source"
    ],
    [
      "China",
      789,
      153,
      "assembly"
    ],
    [
      "Germany",
      528,
      107,
      "component"
    ],
    [
      "Italy",
      535,
      139,
      "assembly"
    ],
    [
      "United States",
      222,
      144,
      "buyer"
    ]
  ]
}
]
