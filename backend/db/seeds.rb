# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Initial partial seed data
# horses = Horse.create([{ barn_name: 'Dottie', registered_name: 'Lenas Snow Chex' }, { barn_name: 'Christy', registered_name: 'Christys Image' }, { barn_name: 'Holly', registered_name: 'Sweet Hollywood Chic' }, { barn_name: 'Joy', registered_name: 'SHEZA HOLLYWOODLEGEND' }, { barn_name: 'Haley', registered_name: 'GUNNATRASHYA STYLE' }, { barn_name: 'Annie', registered_name: 'ANNIE GOTA GUN' }, { barn_name: 'Razberi', registered_name: 'Tinseltowns Razberi' }])
# Offspring.create(year: '2006', sex: 'colt', sire: 'Color Me Smart', horse: horses.first)

horses = Horse.create([
  { 
    barn_name: 'Dottie', 
    registered_name: 'Lenas Snow Chex',
    sire: 'Lenas Diamond Chex (Doc O Lena)', 
    dam: 'Q T Easter Lass', 
    dob: '4/6/1999', 
    color: 'Black', 
    pattern_type: 'TOB/OVR', 
    pedigree: 'http://www.allbreedpedigree.com/lenas+snow+chex', 
    registration: 'APHA', 
    tested: 'N/N Sabino & Splash 1,2 & 3, N/N-HERDA,LWO,PSSM1 -GBED/N', 
    tobiano_gene: 'Homozygous', 
    photo: './images/dottie.jpeg' 
  },
  { 
    barn_name: 'Christy', 
    registered_name: 'Christys Image',
    sire: 'Mark This Spot', 
    dam: 'Lenas Snow Chex', 
    dob: '5/31/2003', 
    color: 'Bay', 
    pattern_type: 'Tobiano', 
    pedigree: 'http://www.allbreedpedigree.com/christys+image', 
    registration: 'APHA', 
    tested: 'N/N Sabino & SW1,2&3, N/N HERDA,LWO,GBED,& PSSM1', 
    tobiano_gene: 'Homozygous', 
    photo: './images/christy.jpeg' 
  },
  { 
    barn_name: 'Holly', 
    registered_name: 'Sweet Hollywood Chic',
    sire: 'The Sweet Spot', 
    dam: 'LS Hollywood Chic', 
    dob: '4/16/2013', 
    color: 'Buckskin', 
    pattern_type: 'Tobiano', 
    pedigree: 'http://www.allbreedpedigree.com/sweet+hollywood+chic2', 
    registration: 'APHA', 
    tested: 'N/N HERDA,LWO,GBED,& PSSM1, IMM and MYH1 Myopathy N/N', 
    tobiano_gene: 'Triple Homozygous', 
    photo: './images/holly.jpeg' 
  },
  { 
    barn_name: 'Joy', 
    registered_name: 'SHEZA HOLLYWOODLEGEND',
    sire: 'HEZA HOLLYWOOD LEGEND', 
    dam: 'Lady Quintessa (Don Quintana)', 
    dob: '6/6/2015', 
    color: 'Palomino', 
    pattern_type: 'Tobiano', 
    pedigree: 'https://www.allbreedpedigree.com/sheza+hollywood+legend', 
    registration: 'APHA', 
    tested: 'N/N HERDA,LWO,GBED,& PSSM1, IMM and MYH1 Myopathy N/N', 
    tobiano_gene: 'Homozygous', 
    photo: './images/joy.jpeg' 
  },
  { 
    barn_name: 'Haley', 
    registered_name: 'GUNNATRASHYA STYLE',
    sire: 'Gunnatrashya', 
    dam: 'Christys Image', 
    dob: '4/15/2014', 
    color: 'Bay', 
    pattern_type: 'TOB/OVR', 
    pedigree: 'https://www.allbreedpedigree.com/gunnatrashya+style', 
    registration: 'APHA', 
    tested: 'N/N HERDA,LWO,GBED,& PSSM1, IMM and MYH1 Myopathy N/N', 
    tobiano_gene: 'Heterozygous', 
    photo: './images/haley.jpeg' 
  },
  { 
    barn_name: 'Annie', 
    registered_name: 'ANNIE GOTA GUN',
    sire: 'Spooks Gotta Whiz', 
    dam: 'Tina Gotta Gun (Colonels Lone Gun X Custom Come)', 
    dob: '4/5/2013', 
    color: 'Bay', 
    pattern_type: 'Overo', 
    pedigree: 'https://www.allbreedpedigree.com/annie+gota+gun', 
    registration: 'AQHA/APHA', 
    tested: 'N/N HERDA,LWO,PSSM1 - N/GBED, IMM and MYH1 Myopathy N/N, N/SW1 & N/SW2', 
    photo: './images/annie.jpeg' 
  },
  { 
    barn_name: 'Razberi', 
    registered_name: 'Tinseltowns Razberi',
    sire: 'HollywoodTinseltown', 
    dam: 'Smoking Gypsy Rose (Colonels Smoking Gun X Topsail Whiz)', 
    dob: '2/21/2015', 
    color: 'Red Roan', 
    pattern_type: 'Solid', 
    pedigree: 'https://www.allbreedpedigree.com/tinseltowns+razberi', 
    registration: 'AQHA/APHA', 
    tested: '6 panel negative: GBED n/n, HERDA n/n, HYPP n/n, MH n/n, PSSM1 n/n, LWO n/n, IMM and MYH1 Myopathy N/N AA, ee, D/nd2, W20/n, SW1/n', 
    photo: './images/razberi.jpeg' 
  }
])

Offspring.create([
  { 
    year: '2006',
    sex: 'colt',
    sire: 'Color Me Smart',
    horse: horses.first
  },
  { 
    year: '2008',
    sex: 'filly',
    sire: 'Matt Dillon Dun It',
    horse: horses.first
  },
  { 
    year: '2009',
    sex: 'filly',
    sire: 'Comander Riminic',
    horse: horses.first
  },
  { 
    year: '2010',
    sex: 'colt',
    sire: 'Colonels Lone Gun',
    horse: horses.first
  },
  { 
    year: '2011',
    sex: 'colt',
    sire: 'Gunners Indian',
    horse: horses.first
  },
  { 
    year: '2012',
    sex: 'filly',
    sire: 'The Sweet Spot',
    horse: horses.first
  },
  { 
    year: '2013',
    sex: 'filly',
    sire: 'The Sweet Spot',
    horse: horses.first
  },
  { 
    year: '2014',
    sex: 'filly',
    sire: 'Smoking Whiz',
    horse: horses.first
  },
  { 
    year: '2015',
    sex: 'filly',
    sire: 'Heza Hollywood Legend',
    horse: horses.first
  },
  { 
    year: '2016',
    sex: 'colt',
    sire: 'Heza Hollywood Legend',
    horse: horses.first
  },
  { 
    year: '2017',
    sex: 'filly',
    sire: 'The Sweet Spot',
    horse: horses.first
  },
  { 
    year: '2018',
    sex: 'colt',
    sire: 'A Sparkling Vintage',
    horse: horses.first
  },
  { 
    year: '2009',
    sex: 'colt',
    sire: 'Big Chex To Cash-Mark Mark This Chex',
    horse: horses.second
  },
  { 
    year: '2011',
    sex: 'colt',
    sire: 'Spooks Gotta Gun',
    horse: horses.second
  },
  { 
    year: '2013',
    sex: 'filly',
    sire: 'The Big Gun',
    horse: horses.second
  },
  { 
    year: '2014',
    sex: 'filly',
    sire: 'GUNNATRASHYA- Haley in broodmare band',
    horse: horses.second
  },
  { 
    year: '2015',
    sex: 'colt',
    sire: 'Show Me The Buckles',
    horse: horses.second
  },
  { 
    year: '2016',
    sex: 'colt',
    sire: 'Trashadeous',
    horse: horses.second
  },
  { 
    year: '2017',
    sex: 'colt',
    sire: 'Show Me The Buckles',
    horse: horses.second
  },
  { 
    year: '2019',
    sex: 'colt',
    sire: 'Mr Electric Spark',
    horse: horses.third
  },
  { 
    year: '2020',
    sex: 'filly',
    sire: 'Custom Legend',
    horse: horses.third
  },
  { 
    year: '2020',
    sex: 'filly',
    sire: 'Lil Dreaming Magnum',
    horse: horses.fourth
  },
  { 
    year: '2020',
    sex: 'colt',
    sire: 'Gotta Twist It Up',
    horse: horses.fifth
  },
  { 
    year: '2020',
    sex: 'filly',
    sire: 'Late Night Stopper',
    horse: horses.last
  }
])