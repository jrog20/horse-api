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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/225133_2051337482044_3502382_n.jpg?_nc_cat=107&ccb=3&_nc_sid=cdbe9c&_nc_ohc=7WljgzoJ_XYAX-yyIDq&_nc_ht=scontent-bos3-1.xx&oh=b13c64b6bf3e39578afb28220038e7a3&oe=606758F6' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/3058_1161984488775_6472453_n.jpg?_nc_cat=111&ccb=3&_nc_sid=cdbe9c&_nc_ohc=VkddKK2r11EAX_KtqSz&_nc_ht=scontent-bos3-1.xx&oh=2577079ae19751aba5717f708d04a4b7&oe=6064B335' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t31.0-8/15585108_10211764133437800_8071880724056335815_o.jpg?_nc_cat=109&ccb=3&_nc_sid=cdbe9c&_nc_ohc=J_RNaojMzl0AX8A-Gnv&_nc_ht=scontent-bos3-1.xx&oh=1bb5d19f7a8f16b41c7855046dfb2646&oe=606748FA' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/p526x296/148982996_10225130479948109_4433688681266723526_o.jpg?_nc_cat=102&ccb=3&_nc_sid=0debeb&_nc_ohc=2UoqcjfiEawAX_4C0YN&_nc_ht=scontent-bos3-1.xx&tp=6&oh=26f4ec2344d722f64c4d3e126a1d5469&oe=60684890' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/p180x540/149724172_10225130284743229_7602360448640183862_o.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=R-5CYpX-IGAAX8EhwJR&_nc_ht=scontent-bos3-1.xx&tp=6&oh=1f3290431b776a0eb846ff3a0539da75&oe=606814DA' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/s600x600/150229122_10225130706633776_4280830010255588534_o.jpg?_nc_cat=111&ccb=3&_nc_sid=0debeb&_nc_ohc=xZAFjI7U4g8AX_1E0ht&_nc_ht=scontent-bos3-1.xx&tp=7&oh=e3a09d7d54207dec8a16a98b99f5d99a&oe=60675F0E' 
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
    photo: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/s640x640/148734167_10225130831516898_1306375484119730387_o.jpg?_nc_cat=103&ccb=3&_nc_sid=0debeb&_nc_ohc=Z-zGv7DF9loAX_zxcuX&_nc_ht=scontent-bos3-1.xx&tp=7&oh=23199e2a61d33ca89b37f1aed41c5308&oe=606748B1' 
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