export interface City {
  slug: string;
  name: string;
  state: 'VA' | 'MD' | 'DC';
  phone: string;
  phoneHref: string;
  neighborhoods: string[];
  landmarks: string[];
  nearbyAreas: string[];
  nearbyAreaSlugs: string[];
  intro: string;
  localFAQ: { q: string; a: string }[];
}

export const cities: City[] = [
  // ─── VIRGINIA ───────────────────────────────────────────────────
  {
    slug: 'arlington-va',
    name: 'Arlington',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Clarendon', 'Ballston', 'Rosslyn', 'Lyon Village', 'Shirlington', 'Pentagon City', 'Columbia Pike', 'Aurora Highlands'],
    landmarks: ['Clarendon Metro', 'Ballston Quarter', 'Pentagon', 'Arlington National Cemetery'],
    nearbyAreas: ['Alexandria', 'Falls Church', 'McLean', 'Washington D.C.'],
    nearbyAreaSlugs: ['alexandria-va', 'falls-church-va', 'mclean-va', 'washington-dc'],
    intro: "Arlington homeowners get fast appliance repair from DMV Appliance Repair — the same family-owned service that has been fixing refrigerators, washers, and dryers across the DMV since 2007. Whether you're in Clarendon, Ballston, or along Columbia Pike, Pir comes prepared with common parts on the truck so most repairs are done the same day, in a single visit.",
    localFAQ: [
      {
        q: 'How fast can you get to Arlington for an appliance repair?',
        a: 'We offer same-day service 7 days a week in Arlington. Call us at 703-866-7776 and we\'ll tell you our next available slot — we typically have morning and afternoon appointments available. We get back to all requests within 30 minutes.',
      },
      {
        q: 'Do you charge more for appliance repair on weekends in Arlington?',
        a: 'No — we charge the same rate every day of the week including weekends and holidays. No upcharges. What we quote is what you pay.',
      },
      {
        q: 'What appliance brands do you service in Arlington?',
        a: 'All major brands — Samsung, LG, GE, Whirlpool, Bosch, KitchenAid, Miele, Sub-Zero, Viking, and many more. If the brand name is on it, we\'ve likely seen it.',
      },
    ],
  },
  {
    slug: 'alexandria-va',
    name: 'Alexandria',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Old Town', 'Del Ray', 'Potomac Yard', 'Seminary Hill', 'Eisenhower Valley', 'Arlandria', 'Rosemont'],
    landmarks: ['Old Town waterfront', 'King Street Metro', 'Mount Vernon Trail', 'Torpedo Factory'],
    nearbyAreas: ['Arlington', 'Fairfax', 'Springfield', 'Washington D.C.'],
    nearbyAreaSlugs: ['arlington-va', 'fairfax-va', 'springfield-va', 'washington-dc'],
    intro: "Alexandria homeowners from Old Town to Del Ray rely on DMV Appliance Repair for fast, honest appliance service. We've been serving Alexandria since 2007 — Pir knows these neighborhoods well and comes with the parts needed to finish most jobs in one visit. No second appointments, no waiting for parts to ship.",
    localFAQ: [
      {
        q: 'Do you service appliances in Old Town Alexandria?',
        a: 'Yes — Old Town is one of our regular service areas. We\'re familiar with the mix of older homes and newer condos in the area, and we service all appliance brands and configurations. Call 703-866-7776 for same-day availability.',
      },
      {
        q: 'How much does appliance repair cost in Alexandria?',
        a: 'Most repairs in Alexandria run $100–$200 including parts. We offer a $60 discount on every completed repair, and the service call is free when we do the work. We give you a firm quote before touching anything.',
      },
    ],
  },
  {
    slug: 'fairfax-va',
    name: 'Fairfax',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['City of Fairfax', 'Fair City Mall area', 'Mantua', 'North Springfield', 'Fair Lakes', 'Penderbrook', 'Greenbriar'],
    landmarks: ['Fairfax City Hall', 'Fair Oaks Mall', 'GMU', 'Burke Lake Park'],
    nearbyAreas: ['Chantilly', 'Springfield', 'Vienna', 'Centreville', 'Annandale'],
    nearbyAreaSlugs: ['chantilly-va', 'springfield-va', 'vienna-va', 'centreville-va', 'annandale-va'],
    intro: "Fairfax homeowners get same-day appliance repair from DMV Appliance Repair, a family-owned business that has been serving Fairfax County since 2007. Whether you're near GMU, Fair Oaks, or in a Greenbriar neighborhood, Pir arrives with the parts needed to fix most appliances in a single visit.",
    localFAQ: [
      {
        q: 'How fast can you get to Fairfax for same-day appliance repair?',
        a: 'Fairfax is one of our most frequent service areas. We offer same-day appointments 7 days a week — call 703-866-7776 for next available times. We respond to all requests within 30 minutes.',
      },
      {
        q: 'My refrigerator stopped cooling this morning. Can you come to Fairfax today?',
        a: 'Yes. A refrigerator that stops cooling is exactly the kind of urgent repair we prioritize. Call 703-866-7776 now and we\'ll get a technician out today.',
      },
    ],
  },
  {
    slug: 'chantilly-va',
    name: 'Chantilly',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Greenbriar', 'South Riding', 'Westfields', 'Kingstowne East', 'Pleasant Valley'],
    landmarks: ['Chantilly High School', 'Dulles Town Center', 'Steven F. Udvar-Hazy Center', 'Route 50 corridor'],
    nearbyAreas: ['Centreville', 'South Riding', 'Herndon', 'Reston', 'Fair Oaks', 'Fairfax', 'Dulles'],
    nearbyAreaSlugs: ['centreville-va', 'herndon-va', 'reston-va', 'fairfax-va', 'ashburn-va'],
    intro: "Chantilly homeowners get fast appliance repair from DMV Appliance Repair — a family-owned service that has been working the Greenbriar neighborhoods, Westfields, and the Route 50 corridor since 2007. Pir carries common parts on the truck and gets most repairs done in one visit, so you\'re not waiting around for a second appointment.",
    localFAQ: [
      {
        q: 'How fast can you get to Chantilly for appliance repair?',
        a: 'We offer same-day service in Chantilly 7 days a week. Call 703-866-7776 and we\'ll give you our next available window. We typically respond within 30 minutes.',
      },
      {
        q: 'How much does appliance repair cost in Chantilly?',
        a: 'Most appliance repairs in Chantilly run $100–$200 including parts and labor. We discount $60 off every completed repair and the service call is free when we do the work. We quote before we start — no surprises.',
      },
      {
        q: 'Do you service appliances in the Dulles area?',
        a: 'Yes — we regularly service Chantilly, the Dulles corridor, and nearby areas including South Riding, Herndon, and Ashburn. Call or text and we\'ll confirm we can reach you.',
      },
    ],
  },
  {
    slug: 'reston-va',
    name: 'Reston',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Reston Town Center', 'Lake Anne', 'North Point', 'South Lakes', 'Hunters Woods'],
    landmarks: ['Reston Town Center', 'Lake Anne Village', 'W&OD Trail', 'Dulles Toll Road'],
    nearbyAreas: ['Herndon', 'Chantilly', 'Ashburn', 'Sterling', 'Vienna'],
    nearbyAreaSlugs: ['herndon-va', 'chantilly-va', 'ashburn-va', 'sterling-va', 'vienna-va'],
    intro: "Reston is a mix of townhomes, high-rise condos, and single-family homes — all with appliances that occasionally break down. DMV Appliance Repair has been serving Reston homeowners since 2007, covering everything from a stacked washer-dryer in a Lake Anne condo to a full kitchen in a South Lakes neighborhood home.",
    localFAQ: [
      {
        q: 'Do you service high-rise condos in Reston Town Center?',
        a: 'Yes. We work in condos and apartments throughout Reston, including Reston Town Center buildings. We carry tools for stacked laundry units and tight kitchen installations. Call 703-866-7776 for same-day availability.',
      },
      {
        q: 'Can you repair Sub-Zero or Wolf appliances in Reston?',
        a: 'Yes — we service premium brands including Sub-Zero, Wolf, Thermador, and Miele. These brands are common in Reston\'s newer developments and we\'re familiar with their diagnostic systems.',
      },
    ],
  },
  {
    slug: 'herndon-va',
    name: 'Herndon',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Herndon Town Center', 'Franklin Farm', 'Worldgate', 'Sugarland Run'],
    landmarks: ['Herndon Community Center', 'Historic downtown Herndon', 'Dulles Access Road', 'W&OD Trail trailhead'],
    nearbyAreas: ['Reston', 'Sterling', 'Ashburn', 'Chantilly', 'Dulles'],
    nearbyAreaSlugs: ['reston-va', 'sterling-va', 'ashburn-va', 'chantilly-va'],
    intro: "Herndon homeowners from Franklin Farm to Sugarland Run call DMV Appliance Repair for fast, reliable appliance service. We\'ve been covering Herndon and the surrounding Dulles corridor since 2007 — Pir knows these neighborhoods and arrives prepared to finish most repairs in one visit.",
    localFAQ: [
      {
        q: 'Do you offer weekend appliance repair in Herndon?',
        a: 'Yes, every weekend including holidays, at the same rate as weekday service. Call 703-866-7776 Saturday or Sunday morning for same-day availability in Herndon.',
      },
    ],
  },
  {
    slug: 'vienna-va',
    name: 'Vienna',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Town of Vienna', 'Tysons Corner', 'Wolf Trap', 'Vienna Metro area', 'Westwood Village'],
    landmarks: ['Wolf Trap National Park', 'Vienna Metro Station', 'Maple Avenue shopping', 'Tysons Corner Center'],
    nearbyAreas: ['McLean', 'Reston', 'Fairfax', 'Falls Church', 'Tysons Corner'],
    nearbyAreaSlugs: ['mclean-va', 'reston-va', 'fairfax-va', 'falls-church-va'],
    intro: "Vienna homeowners trust DMV Appliance Repair for same-day appliance service in their neighborhood. From Maple Avenue to Wolf Trap, Pir has been servicing refrigerators, washers, and ovens for Vienna families since 2007 — arriving prepared so most repairs are wrapped up without a return visit.",
    localFAQ: [
      {
        q: 'Can you repair high-end appliances in Vienna?',
        a: 'Yes. Vienna has a mix of premium appliances — Viking, Sub-Zero, Bosch, Miele — and we service all of them. We carry diagnostic tools for complex systems and will give you a straight answer on repair vs. replacement.',
      },
    ],
  },
  {
    slug: 'mclean-va',
    name: 'McLean',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Downtown McLean', 'Langley', 'Westgate', 'Chain Bridge Road corridor', 'Dolley Madison area'],
    landmarks: ['Tysons Corner Center', 'CIA/Langley campus area', 'Chain Bridge', 'Dolley Madison Boulevard'],
    nearbyAreas: ['Vienna', 'Falls Church', 'Arlington', 'Bethesda'],
    nearbyAreaSlugs: ['vienna-va', 'falls-church-va', 'arlington-va', 'bethesda-md'],
    intro: "McLean is one of our primary service areas — we've been repairing premium and standard appliances throughout McLean since 2007. Whether it's a Sub-Zero in a Langley estate or a GE in a Chain Bridge Road townhome, Pir brings the right parts and the experience to fix it in one visit.",
    localFAQ: [
      {
        q: 'Do you service luxury appliances like Sub-Zero and Wolf in McLean?',
        a: 'Absolutely. McLean has a high concentration of luxury kitchens and we service Sub-Zero, Wolf, Viking, Thermador, and Miele regularly. These brands require specific diagnostic procedures and parts — Pir is experienced with all of them.',
      },
    ],
  },
  {
    slug: 'springfield-va',
    name: 'Springfield',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Springfield Town Center', 'Franconia', 'Newington', 'Old Keene Mill', 'Rolling Valley'],
    landmarks: ['Springfield Town Center', 'Franconia-Springfield Metro', 'I-95/I-495 interchange', 'Northern Virginia Community College'],
    nearbyAreas: ['Burke', 'Lorton', 'Annandale', 'Fairfax', 'Woodbridge'],
    nearbyAreaSlugs: ['burke-va', 'lorton-va', 'annandale-va', 'fairfax-va', 'woodbridge-va'],
    intro: "Springfield homeowners have been calling DMV Appliance Repair for fast appliance service since 2007. From Franconia to Rolling Valley, Pir covers the entire Springfield area — same-day, every day of the week, with common parts already on the truck.",
    localFAQ: [
      {
        q: 'How quickly can you get to Springfield for appliance repair?',
        a: 'Springfield is well within our core service area and we typically offer same-day appointments. Call 703-866-7776 for availability. We respond to all requests within 30 minutes.',
      },
    ],
  },
  {
    slug: 'annandale-va',
    name: 'Annandale',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Little River Turnpike corridor', 'Annandale Village', 'Columbia Pike area', 'Bren Mar'],
    landmarks: ['Wakefield Park', 'Annandale High School', 'Little River Turnpike', 'Accotink Creek trail'],
    nearbyAreas: ['Fairfax', 'Springfield', 'Falls Church', 'Alexandria'],
    nearbyAreaSlugs: ['fairfax-va', 'springfield-va', 'falls-church-va', 'alexandria-va'],
    intro: "Annandale is a close-knit community and we've been a reliable appliance repair option for its homeowners since 2007. From the Little River Turnpike corridor to Bren Mar and beyond, DMV Appliance Repair offers same-day service, honest pricing, and most repairs completed in one visit.",
    localFAQ: [
      {
        q: 'Do you do same-day appliance repair in Annandale?',
        a: 'Yes, 7 days a week. Call 703-866-7776 and we\'ll confirm availability. We typically have morning and afternoon windows, including weekends.',
      },
    ],
  },
  {
    slug: 'falls-church-va',
    name: 'Falls Church',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['City of Falls Church', 'Seven Corners', 'Pimmit Hills', 'Shreve Road corridor'],
    landmarks: ['Falls Church City Hall', 'Seven Corners Shopping Center', 'Falls Church Metro', 'Cherry Hill Farm Park'],
    nearbyAreas: ['Vienna', 'Arlington', 'McLean', 'Fairfax'],
    nearbyAreaSlugs: ['vienna-va', 'arlington-va', 'mclean-va', 'fairfax-va'],
    intro: "Falls Church homeowners get the same reliable service from DMV Appliance Repair as their neighbors across Fairfax County. We've been covering the City of Falls Church and surrounding neighborhoods since 2007, offering same-day appliance repair 7 days a week with no weekend upcharges.",
    localFAQ: [
      {
        q: 'Can you repair appliances in Falls Church City on weekends?',
        a: 'Yes — we work every day of the week including weekends and holidays. No additional charge for Saturday or Sunday service in Falls Church.',
      },
    ],
  },
  {
    slug: 'burke-va',
    name: 'Burke',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Burke Centre', 'Lake Barton', 'Kings Park', 'White Oaks'],
    landmarks: ['Burke Lake Park', 'Burke Centre Village Center', 'VRE Burke Centre Station'],
    nearbyAreas: ['Springfield', 'Fairfax', 'Lorton', 'Centreville'],
    nearbyAreaSlugs: ['springfield-va', 'fairfax-va', 'lorton-va', 'centreville-va'],
    intro: "Burke homeowners near Burke Centre, Kings Park, and Burke Lake Park count on DMV Appliance Repair for straightforward appliance service. We've been serving this part of Fairfax County since 2007 — same-day availability, honest quotes, and most repairs done in one visit.",
    localFAQ: [
      {
        q: 'Do you service appliances in Burke Centre and Burke Lake Road area?',
        a: 'Yes — Burke is a core part of our Fairfax County service area. Call 703-866-7776 for same-day availability.',
      },
    ],
  },
  {
    slug: 'centreville-va',
    name: 'Centreville',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Centreville Commons', 'Virginia Run', 'Bull Run Mountain Estates', 'Sully Station', 'Little Rocky Run'],
    landmarks: ['Centreville Road (Route 28)', 'Sully Historic Site', 'Bull Run Regional Park', 'Compton Road corridor'],
    nearbyAreas: ['Chantilly', 'Fairfax', 'Manassas', 'Gainesville', 'Ashburn'],
    nearbyAreaSlugs: ['chantilly-va', 'fairfax-va', 'manassas-va', 'ashburn-va'],
    intro: "Centreville spans western Fairfax County and we've been covering it from Virginia Run to Little Rocky Run since 2007. When your washer or refrigerator gives out in a Centreville neighborhood, DMV Appliance Repair responds fast — same-day availability, parts on the truck, one-visit repairs.",
    localFAQ: [
      {
        q: 'Do you cover the Sully Station and Little Rocky Run neighborhoods in Centreville?',
        a: 'Yes — those neighborhoods are part of our regular Centreville service area. Call 703-866-7776 for same-day availability.',
      },
    ],
  },
  {
    slug: 'woodbridge-va',
    name: 'Woodbridge',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Lake Ridge', 'Dale City', 'Potomac Mills area', 'Occoquan', 'Montclair', 'Rippon Landing'],
    landmarks: ['Potomac Mills', 'Occoquan Historic District', 'Prince William Parkway', 'Leesylvania State Park'],
    nearbyAreas: ['Manassas', 'Lorton', 'Dale City', 'Lake Ridge', 'Springfield'],
    nearbyAreaSlugs: ['manassas-va', 'lorton-va', 'springfield-va'],
    intro: "Woodbridge and Dale City are some of our most active service areas in Prince William County. From Montclair townhomes to Lake Ridge single-family homes, DMV Appliance Repair has been fixing refrigerators, washers, dryers, and dishwashers throughout the area since 2007.",
    localFAQ: [
      {
        q: 'Do you service appliances in Woodbridge and Dumfries?',
        a: 'Yes — we cover Woodbridge, Dale City, Lake Ridge, and the broader Prince William County area. Call 703-866-7776 for same-day availability.',
      },
    ],
  },
  {
    slug: 'ashburn-va',
    name: 'Ashburn',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Ashburn Village', 'Broadlands', 'Brambleton', 'One Loudoun', 'Belmont Ridge'],
    landmarks: ['One Loudoun', 'Dulles Landing', 'Silver Line Metro (Ashburn)', 'Loudoun County campus area'],
    nearbyAreas: ['Sterling', 'Herndon', 'Leesburg', 'Chantilly', 'Dulles'],
    nearbyAreaSlugs: ['sterling-va', 'herndon-va', 'chantilly-va'],
    intro: "Ashburn is Loudoun County's fastest-growing area, and DMV Appliance Repair has been serving homeowners here since 2007. Whether you're in Broadlands, Brambleton, or near One Loudoun, Pir comes prepared to fix most appliances in a single visit — no waiting around for a second appointment.",
    localFAQ: [
      {
        q: 'Do you service newer homes in Ashburn with high-end appliances?',
        a: 'Yes. Ashburn\'s newer developments often have Bosch, KitchenAid, and Samsung appliances — all brands we work with regularly. Call 703-866-7776 for same-day service.',
      },
    ],
  },
  {
    slug: 'sterling-va',
    name: 'Sterling',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Sterling Park', 'Cascades', 'Countryside', 'Sugarland Run'],
    landmarks: ['Cascades Marketplace', 'Claude Moore Park', 'Potomac River overlooks', 'Dulles Toll Road'],
    nearbyAreas: ['Herndon', 'Ashburn', 'Leesburg', 'Reston'],
    nearbyAreaSlugs: ['herndon-va', 'ashburn-va', 'reston-va'],
    intro: "Sterling homeowners in Cascades, Countryside, and Sterling Park have counted on DMV Appliance Repair since 2007 for same-day appliance service. We cover all of Loudoun County's eastern corridor — call for a same-day appointment, any day of the week.",
    localFAQ: [
      {
        q: 'Do you offer same-day appliance repair in the Cascades area of Sterling?',
        a: 'Yes. Sterling is a regular stop for us. Call 703-866-7776 for same-day availability 7 days a week.',
      },
    ],
  },
  {
    slug: 'lorton-va',
    name: 'Lorton',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Lorton Station', 'Laurel Hill', 'Pohick Bay area', 'Newington Forest'],
    landmarks: ['Lorton Station VRE', 'Laurel Hill Golf Club', 'Pohick Bay Regional Park', 'Workhouse Arts Center'],
    nearbyAreas: ['Springfield', 'Woodbridge', 'Fairfax', 'Burke'],
    nearbyAreaSlugs: ['springfield-va', 'woodbridge-va', 'fairfax-va', 'burke-va'],
    intro: "Lorton homeowners in Lorton Station, Laurel Hill, and Newington Forest get fast appliance service from DMV Appliance Repair. We've been serving southern Fairfax County since 2007, with same-day availability and most repairs wrapped in one visit.",
    localFAQ: [
      {
        q: 'Do you cover Lorton Station and the Laurel Hill area?',
        a: 'Yes — Lorton is within our southern Fairfax County service area. Call 703-866-7776 for availability.',
      },
    ],
  },
  {
    slug: 'manassas-va',
    name: 'Manassas',
    state: 'VA',
    phone: '703-866-7776',
    phoneHref: 'tel:+17038667776',
    neighborhoods: ['Manassas City', 'Manassas Park', 'Sudley Road area', 'Yorkshire'],
    landmarks: ['Manassas National Battlefield Park', 'Prince William County Fairgrounds', 'VRE Manassas Line', 'Manassas City Historic District'],
    nearbyAreas: ['Woodbridge', 'Centreville', 'Gainesville', 'Bristow'],
    nearbyAreaSlugs: ['woodbridge-va', 'centreville-va'],
    intro: "Manassas homeowners from the historic district to Yorkshire and Sudley Road call DMV Appliance Repair for dependable appliance service. We've been covering Prince William County since 2007 — same-day service, honest pricing, and Pir brings the parts needed to finish most repairs in one visit.",
    localFAQ: [
      {
        q: 'Do you service appliances in Manassas Park as well as Manassas City?',
        a: 'Yes — we cover both Manassas City and Manassas Park, as well as the surrounding Prince William County area. Call 703-866-7776.',
      },
    ],
  },

  // ─── MARYLAND ───────────────────────────────────────────────────
  {
    slug: 'bethesda-md',
    name: 'Bethesda',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Downtown Bethesda', 'Chevy Chase', 'Friendship Heights', 'Kenwood', 'Burning Tree', 'Sumner'],
    landmarks: ['Bethesda Row', 'NIH Campus', 'Walter Reed', 'Capital Crescent Trail', 'Bethesda Metro'],
    nearbyAreas: ['Chevy Chase', 'Rockville', 'Potomac', 'Silver Spring', 'Washington D.C.'],
    nearbyAreaSlugs: ['chevy-chase-md', 'rockville-md', 'potomac-md', 'silver-spring-md', 'washington-dc'],
    intro: "Bethesda homeowners count on DMV Appliance Repair for reliable appliance service in this upscale Montgomery County community. From Kenwood estates to Friendship Heights condos, Pir has been fixing refrigerators, washers, and high-end appliances in Bethesda since 2007 — same-day availability and most repairs done in one visit.",
    localFAQ: [
      {
        q: 'How fast can you get to Bethesda for appliance repair?',
        a: 'Bethesda is one of our core Maryland service areas. We offer same-day service 7 days a week. Call 301-907-6666 for availability — we respond within 30 minutes.',
      },
      {
        q: 'Do you repair Sub-Zero and other high-end brands in Bethesda?',
        a: 'Yes — Bethesda has a high concentration of premium appliances and we service Sub-Zero, Wolf, Miele, Thermador, and Viking regularly. We carry diagnostic tools for these brands.',
      },
    ],
  },
  {
    slug: 'silver-spring-md',
    name: 'Silver Spring',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Downtown Silver Spring', 'Woodside', 'Four Corners', 'Colesville', 'Kemp Mill', 'Burnt Mills'],
    landmarks: ['Discovery Communications HQ', 'AFI Silver Theatre', 'Silver Spring Metro', 'Sligo Creek Trail'],
    nearbyAreas: ['Takoma Park', 'Bethesda', 'College Park', 'Hyattsville', 'Washington D.C.'],
    nearbyAreaSlugs: ['takoma-park-md', 'bethesda-md', 'college-park-md', 'hyattsville-md', 'washington-dc'],
    intro: "Silver Spring homeowners from Downtown to Four Corners and Kemp Mill get fast appliance service from DMV Appliance Repair. We've been covering Silver Spring and eastern Montgomery County since 2007 — same-day 7 days a week, and Pir arrives ready to fix most appliances without a return visit.",
    localFAQ: [
      {
        q: 'Do you service appliances in the Kemp Mill and Four Corners areas of Silver Spring?',
        a: 'Yes — we cover all of Silver Spring including Kemp Mill, Four Corners, Woodside, and Colesville. Call 301-907-6666 for same-day availability.',
      },
    ],
  },
  {
    slug: 'rockville-md',
    name: 'Rockville',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Rockville Town Center', 'King Farm', 'Fallsgrove', 'Twinbrook', 'Lincoln Park'],
    landmarks: ['Rockville Town Square', 'Rockville Metro', 'Millennium Tower', 'Richard Montgomery High School', 'Cabin John Regional Park'],
    nearbyAreas: ['Bethesda', 'Germantown', 'Potomac', 'Gaithersburg', 'North Bethesda'],
    nearbyAreaSlugs: ['bethesda-md', 'germantown-md', 'potomac-md'],
    intro: "Rockville homeowners from King Farm to Twinbrook count on DMV Appliance Repair for fast, straightforward appliance service. We\'ve been covering central Montgomery County since 2007 — call 301-907-6666 for same-day availability any day of the week.",
    localFAQ: [
      {
        q: 'Do you service the King Farm and Fallsgrove communities in Rockville?',
        a: 'Yes — those newer Rockville neighborhoods are a regular part of our route. We service all appliance brands and offer same-day appointments. Call 301-907-6666.',
      },
    ],
  },
  {
    slug: 'germantown-md',
    name: 'Germantown',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Kingsview', 'Churchill Village', 'Clopper Road area', 'Black Hill area', 'Seneca Farms'],
    landmarks: ['BlackRock Center for the Arts', 'Seneca Creek State Park', 'Germantown Town Center', 'Great Seneca Highway'],
    nearbyAreas: ['Rockville', 'Gaithersburg', 'Boyds', 'Clarksburg', 'Damascus'],
    nearbyAreaSlugs: ['rockville-md', 'potomac-md'],
    intro: "Germantown stretches across upper Montgomery County and we've been serving homeowners here since 2007. Whether you're in Churchill Village, Kingsview, or near Seneca Creek, DMV Appliance Repair offers same-day appliance service every day of the week.",
    localFAQ: [
      {
        q: 'Do you offer same-day appliance repair in Germantown on weekends?',
        a: 'Yes — same-day service 7 days a week including weekends, at the same rate as weekdays. Call 301-907-6666.',
      },
    ],
  },
  {
    slug: 'potomac-md',
    name: 'Potomac',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Avenel', 'Kendale', 'Cabin John', 'Persimmon Tree Road area', 'Seven Locks'],
    landmarks: ['Congressional Country Club', 'C&O Canal towpath', 'Great Falls Park', 'Falls Road corridor'],
    nearbyAreas: ['Bethesda', 'Rockville', 'Chevy Chase', 'Great Falls'],
    nearbyAreaSlugs: ['bethesda-md', 'rockville-md', 'chevy-chase-md'],
    intro: "Potomac is one of the DMV\'s most prestigious communities and its homes often feature premium appliance brands. DMV Appliance Repair has been serving Potomac homeowners since 2007 — Pir is experienced with Sub-Zero, Wolf, Miele, and other high-end brands, and arrives prepared for same-day repairs.",
    localFAQ: [
      {
        q: 'Can you repair Wolf and Thermador appliances in Potomac?',
        a: 'Yes — we work with Wolf, Thermador, Sub-Zero, Miele, and Viking regularly in Potomac and the surrounding areas. Call 301-907-6666 for same-day availability.',
      },
    ],
  },
  {
    slug: 'chevy-chase-md',
    name: 'Chevy Chase',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Chevy Chase Village', 'Chevy Chase Section 5', 'North Chevy Chase', 'Rock Creek Hills'],
    landmarks: ['Friendship Heights Metro', 'Chevy Chase Club', 'Rock Creek Park', 'Wisconsin Avenue corridor'],
    nearbyAreas: ['Bethesda', 'Silver Spring', 'Takoma Park', 'Washington D.C.'],
    nearbyAreaSlugs: ['bethesda-md', 'silver-spring-md', 'takoma-park-md', 'washington-dc'],
    intro: "Chevy Chase sits at the border of D.C. and Maryland and we cover both sides. DMV Appliance Repair has been serving Chevy Chase homeowners since 2007 — same-day appliance service, premium brand experience, and honest pricing.",
    localFAQ: [
      {
        q: 'Do you service both Maryland and D.C. sides of Chevy Chase?',
        a: 'Yes — we cover Chevy Chase Village, Chevy Chase MD, and the D.C. side of Chevy Chase. Call 301-907-6666 for Maryland or 202-783-2055 for the D.C. side.',
      },
    ],
  },
  {
    slug: 'bowie-md',
    name: 'Bowie',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Bowie Town Center', 'Mitchellville', 'Woodmore', 'Glenn Dale', 'Pointer Ridge'],
    landmarks: ['Bowie Town Center', 'Six Flags America', 'Allen Pond Park', 'Patuxent Research Refuge'],
    nearbyAreas: ['Upper Marlboro', 'College Park', 'Hyattsville', 'Crofton', 'Laurel'],
    nearbyAreaSlugs: ['college-park-md', 'hyattsville-md'],
    intro: "Bowie homeowners get same-day appliance repair from DMV Appliance Repair, serving Prince George\'s County since 2007. From Bowie Town Center neighborhoods to Mitchellville, we\'re in your area regularly — same rate any day of the week, most repairs done in one visit.",
    localFAQ: [
      {
        q: 'Do you service Mitchellville and Woodmore in Bowie?',
        a: 'Yes — those neighborhoods are part of our Prince George\'s County service area. Call 301-907-6666 for same-day availability.',
      },
    ],
  },
  {
    slug: 'college-park-md',
    name: 'College Park',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Old Town College Park', 'Calvert Hills', 'Hollywood', 'Lakeland', 'Paint Branch'],
    landmarks: ['University of Maryland', 'College Park Metro', 'Paint Branch Trail', 'Adelphi Road area'],
    nearbyAreas: ['Hyattsville', 'Bowie', 'Silver Spring', 'Greenbelt', 'Laurel'],
    nearbyAreaSlugs: ['hyattsville-md', 'bowie-md', 'silver-spring-md'],
    intro: "College Park homeowners and off-campus residents rely on DMV Appliance Repair for fast appliance service in Prince George\'s County. We\'ve been covering College Park and the University of Maryland area since 2007 — call 301-907-6666 for same-day availability.",
    localFAQ: [
      {
        q: 'Do you repair appliances in apartment complexes near UMD in College Park?',
        a: 'Yes — we work in apartments and condos throughout College Park. Call 301-907-6666 to confirm same-day availability.',
      },
    ],
  },
  {
    slug: 'hyattsville-md',
    name: 'Hyattsville',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Arts District Hyattsville', 'West Hyattsville', 'Queens Chapel Road area', 'Prince George\'s Plaza area'],
    landmarks: ['Arts District Hyattsville', 'Prince George\'s Plaza Metro', 'Queens Chapel Road', 'WSSC Building'],
    nearbyAreas: ['College Park', 'Takoma Park', 'Silver Spring', 'Riverdale', 'Washington D.C.'],
    nearbyAreaSlugs: ['college-park-md', 'takoma-park-md', 'silver-spring-md', 'washington-dc'],
    intro: "Hyattsville is one of the DMV\'s most dynamic communities and we\'ve been serving its homeowners since 2007. From the Arts District to West Hyattsville, DMV Appliance Repair offers same-day appliance service with honest pricing and no surprise fees.",
    localFAQ: [
      {
        q: 'Can you do same-day appliance repair in Hyattsville on weekends?',
        a: 'Yes — same-day service every day including weekends. Same rate as weekdays. Call 301-907-6666.',
      },
    ],
  },
  {
    slug: 'takoma-park-md',
    name: 'Takoma Park',
    state: 'MD',
    phone: '301-907-6666',
    phoneHref: 'tel:+13019076666',
    neighborhoods: ['Old Takoma', 'Carroll Avenue', 'Columbia Heights neighborhood', 'Sligo Creek area', 'Flower Avenue'],
    landmarks: ['Takoma Metro', 'Flower Avenue Park', 'Sligo Creek Trail', 'Old Town Takoma commercial strip'],
    nearbyAreas: ['Silver Spring', 'Hyattsville', 'Washington D.C.', 'Wheaton'],
    nearbyAreaSlugs: ['silver-spring-md', 'hyattsville-md', 'washington-dc'],
    intro: "Takoma Park is a walkable, diverse community right on the D.C. border, and its homeowners call DMV Appliance Repair for fast, honest appliance service. We\'ve been serving Takoma Park and the adjacent Silver Spring area since 2007 — same-day availability, no weekend surcharges, and Pir arrives prepared.",
    localFAQ: [
      {
        q: 'Do you service older homes in Takoma Park that may have older appliances?',
        a: 'Yes. Takoma Park has a mix of vintage and newer appliances and we\'re comfortable working on both. Older Whirlpool and GE models are among our most common repairs.',
      },
    ],
  },

  // ─── WASHINGTON D.C. ────────────────────────────────────────────
  {
    slug: 'washington-dc',
    name: 'Washington D.C.',
    state: 'DC',
    phone: '202-783-2055',
    phoneHref: 'tel:+12027832055',
    neighborhoods: ['Georgetown', 'Capitol Hill', 'Dupont Circle', 'Adams Morgan', 'Tenleytown', 'Brookland', 'Shaw', 'Columbia Heights', 'Petworth', 'Woodley Park', 'Chevy Chase DC', 'Cleveland Park'],
    landmarks: ['Georgetown waterfront', 'Eastern Market', 'U Street Corridor', 'National Mall', 'Dupont Circle fountain'],
    nearbyAreas: ['Arlington', 'Alexandria', 'Bethesda', 'Silver Spring', 'Chevy Chase'],
    nearbyAreaSlugs: ['arlington-va', 'alexandria-va', 'bethesda-md', 'silver-spring-md', 'chevy-chase-md'],
    intro: "DMV Appliance Repair serves all quadrants and neighborhoods across Washington D.C. — from Capitol Hill to Georgetown, Dupont Circle to Brookland. Since 2007, Pir has been fixing refrigerators, washers, ovens, and dishwashers for D.C. homeowners, condo dwellers, and renters. Same-day service, every day, at the same rate.",
    localFAQ: [
      {
        q: 'Do you repair appliances in D.C. condos and row houses?',
        a: 'Yes — we work in all types of D.C. residences: row houses, condos, apartments, and townhomes. We bring the right tools for stacked laundry units, built-in microwaves, and space-constrained kitchen setups.',
      },
      {
        q: 'How fast can you get to Washington D.C. for appliance repair?',
        a: 'We offer same-day service in D.C. 7 days a week. Call 202-783-2055 for next available times — we respond to all requests within 30 minutes.',
      },
      {
        q: 'Is the service call fee waived for D.C. repairs?',
        a: 'Yes — the service call fee is free when we complete the repair. We also offer a $60 discount on every completed repair. You get a firm quote first so there are no surprises.',
      },
    ],
  },
];
