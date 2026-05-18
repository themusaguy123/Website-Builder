export interface Service {
  slug: string;
  name: string;
  description: string;  // short, for cards
  intro: string;        // longer, for page hero
  icon: string;         // SVG string
  commonProblems: string[];
  faq: { q: string; a: string }[];
}

const iconWrench = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const services: Service[] = [
  {
    slug: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Not cooling, leaking, making strange noises, or showing error codes — we diagnose and fix all refrigerator issues.',
    intro: 'A refrigerator that stops cooling is a time-sensitive problem. We carry common refrigerator parts on the truck — compressor relays, start capacitors, evaporator fans, defrost heaters — which means most repairs are completed in one visit, not two.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 9h14" stroke="currentColor" stroke-width="2"/><path d="M8 14h.01M8 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Fridge not cooling or freezer not freezing',
      'Ice maker not producing ice or leaking',
      'Fridge running constantly or short-cycling',
      'Water pooling inside or on the floor',
      'Strange noises — clicking, buzzing, grinding',
      'Error codes on display panel (Samsung, LG, GE)',
      'Door seal not sealing properly',
      'Fridge freezing food in refrigerator section',
      'Condenser fan not running',
    ],
    faq: [
      {
        q: 'My fridge stopped cooling overnight. How urgent is this?',
        a: 'Very. Food safety is at risk after 4 hours above 40°F. Call us for same-day service — we typically diagnose and repair refrigerators in one visit because we carry common parts including compressor relays, defrost heaters, and thermistors.',
      },
      {
        q: 'Should I repair or replace my refrigerator?',
        a: 'The general rule: if the repair is less than half the cost of a replacement, repair it. We\'ll give you an honest quote first — if the repair doesn\'t make sense financially, we\'ll tell you. We\'d rather be straight with you than charge for a repair that won\'t hold.',
      },
      {
        q: 'Do you repair Samsung and LG refrigerators?',
        a: 'Yes, both. Samsung and LG models are common in the DMV and we\'re familiar with their typical failure points, including ice maker issues on Samsung French-door models and compressor problems on LG units.',
      },
      {
        q: 'What does refrigerator repair cost in the DMV?',
        a: 'Most refrigerator repairs fall between $100 and $200 including parts. We offer a $60 discount on every completed repair, and the service call is free when we do the work. We give you a firm quote before touching anything.',
      },
    ],
  },
  {
    slug: 'washing-machine-repair',
    name: 'Washing Machine Repair',
    description: 'Won\'t drain, spin, or start? We repair all brands and models of top-load and front-load washers.',
    intro: 'A washer that won\'t drain, won\'t spin, or throws error codes mid-cycle is one of the most disruptive appliance failures. We service both top-load and front-load machines from all major brands, and carry common parts so most repairs are done in a single visit.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/><path d="M7 7h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Washer won\'t drain or is leaving water in drum',
      'Not spinning or spinning at low speed only',
      'Won\'t start or won\'t advance through cycle',
      'Leaking from door (front-load) or bottom',
      'Excessive vibration or walking during spin',
      'Error codes: F21, OE, UE, 5E, LE',
      'Loud grinding or banging noise during spin',
      'Clothes still soaking wet after cycle',
      'Door latch won\'t engage (front-load)',
    ],
    faq: [
      {
        q: 'My LG washer shows error code OE. What does that mean?',
        a: 'OE is a drain error — the washer can\'t pump water out within the expected time. The usual culprits are a clogged drain pump filter, a kinked drain hose, or a failed drain pump. We carry replacement drain pumps for LG and can typically fix this in one visit.',
      },
      {
        q: 'My front-load washer smells like mildew. Is that a repair issue?',
        a: 'Usually not — mildew odor in front-loaders is a maintenance issue. Run a hot cycle with a washer cleaner tablet monthly, and leave the door ajar between uses to let the drum dry. If the smell persists, the door gasket may have mold in the folds, which we can replace.',
      },
      {
        q: 'Do you repair top-load and front-load washers?',
        a: 'Yes, both. We service all configurations — traditional agitator top-loaders, high-efficiency impeller top-loaders, and front-load washers from every major brand.',
      },
    ],
  },
  {
    slug: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'No heat, long dry times, or unusual sounds — we\'ll get your dryer running right, usually in one visit.',
    intro: 'A dryer that doesn\'t heat is almost always a heating element, thermal fuse, or igniter failure — parts we carry on the truck. If your dryer takes two cycles to dry a load, or makes a thumping noise when running, those are fixable problems we see regularly.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 7v2M12 15v2M7 12h2M15 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Dryer runs but produces no heat',
      'Takes multiple cycles to fully dry a load',
      'Dryer shuts off mid-cycle (overheating protection)',
      'Loud thumping, squealing, or grinding noise',
      'Drum not turning',
      'Dryer won\'t start at all',
      'Error codes on display',
      'Gas dryer igniter not firing',
      'Clothes coming out too hot',
    ],
    faq: [
      {
        q: 'My electric dryer runs but doesn\'t heat. What\'s wrong?',
        a: 'The most common cause is a blown thermal fuse — a safety device that trips when the dryer overheats, usually from a clogged lint trap or restricted exhaust duct. We carry thermal fuses and heating elements for most dryer brands and can usually fix this in one visit. We\'ll also check your exhaust duct to prevent it from happening again.',
      },
      {
        q: 'My gas dryer won\'t heat. Is that dangerous?',
        a: 'A gas dryer that won\'t heat typically has a failed igniter, gas valve coil, or thermal fuse — not a gas leak. If you smell gas, leave the house and call your gas company. If the dryer just isn\'t heating, it\'s a safe repair situation we can handle.',
      },
      {
        q: 'How often should I clean my dryer vent?',
        a: 'At least once a year, more often if you do many loads per week. A clogged dryer vent is the leading cause of dryer fires and the most common reason dryers overheat and fail. We can inspect the vent during your repair visit.',
      },
    ],
  },
  {
    slug: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Leaking, not cleaning, or failing to drain? Our technicians troubleshoot and fix dishwashers fast.',
    intro: 'A dishwasher that won\'t drain, leaves dishes dirty, or leaks onto your kitchen floor is a repair we handle regularly. Dishwasher problems often trace back to a clogged filter, failed pump, or faulty door latch — all parts we stock.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 9h18" stroke="currentColor" stroke-width="2"/><path d="M9 20v-3M15 20v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Dishwasher not draining — water standing in bottom',
      'Dishes coming out dirty or with film/residue',
      'Leaking from door or under the unit',
      'Not starting or not completing cycle',
      'Door latch won\'t close or latch is loose',
      'Dishes not getting hot / no heat cycle',
      'Loud noise during wash or drain cycle',
      'Error codes on display',
      'Detergent dispenser not opening',
    ],
    faq: [
      {
        q: 'My dishwasher has standing water at the bottom. What\'s the fix?',
        a: 'Most often it\'s a clogged filter — the mesh filter at the bottom of the dishwasher catches food debris and can get blocked. Clean it and see if that resolves it. If not, the drain pump or drain solenoid may have failed, which requires a repair.',
      },
      {
        q: 'My dishwasher isn\'t cleaning dishes well. Should I repair or replace it?',
        a: 'Before replacing, let us diagnose it. Poor cleaning is often a blocked spray arm (debris in the holes), low water temperature, or a failing wash pump — all fixable for less than the cost of a new dishwasher.',
      },
    ],
  },
  {
    slug: 'oven-and-range-repair',
    name: 'Oven & Range Repair',
    description: 'Not heating evenly, igniter issues, or broken elements — we service gas and electric ovens and ranges.',
    intro: 'Oven and range repairs cover a wide range of failures — from an electric element that won\'t glow to a gas igniter that clicks constantly or won\'t light. We service both gas and electric ovens and ranges, including self-cleaning models and wall ovens.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><rect x="7" y="9" width="10" height="7" rx="1" stroke="currentColor" stroke-width="2"/><path d="M7 4V2M12 4V2M17 4V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Oven not heating to the right temperature',
      'Bake or broil element not glowing (electric)',
      'Gas burner won\'t ignite or igniter clicks constantly',
      'Oven door not sealing or gasket torn',
      'Self-cleaning cycle won\'t start or getting too hot',
      'Control board errors or display issues',
      'Oven light not working',
      'Temperature running hot or cold',
      'Gas range pilot light issues',
    ],
    faq: [
      {
        q: 'My gas burner igniter clicks but won\'t light. What\'s wrong?',
        a: 'Constant clicking on a cold burner is usually a moisture issue — the igniter spark module is wet. Dry around the burner cap and try again. If it still won\'t light, the igniter itself or the gas valve may need replacement.',
      },
      {
        q: 'My electric oven bakes unevenly. Is that a repair?',
        a: 'Uneven baking is usually a partial bake element failure (one section has burned out) or a faulty temperature sensor. We can replace the element and recalibrate the oven temperature in one visit.',
      },
    ],
  },
  {
    slug: 'cooktop-and-stove-repair',
    name: 'Cooktop & Stove Repair',
    description: 'Burner won\'t light, uneven heating, or cracked surface? We handle all cooktop and stove repairs.',
    intro: 'Cooktops — whether gas, electric coil, or glass ceramic smooth-top — have their own failure modes. We repair burner switches, igniter assemblies, heating elements, and can assess cracked glass-ceramic surfaces.',
    icon: iconWrench,
    commonProblems: [
      'Gas burner won\'t ignite',
      'Electric coil burner not heating',
      'Glass ceramic cooktop element not working',
      'Cracked or chipped smooth-top glass',
      'Burner running at wrong heat level',
      'Control knob broken or loose',
      'Spark igniter not stopping clicking',
    ],
    faq: [
      {
        q: 'Can a cracked glass-ceramic cooktop be repaired?',
        a: 'Small chips on the edge can sometimes be smoothed, but a crack that runs across a burner zone means the cooktop surface needs to be replaced. We\'ll assess it and give you a straight answer on whether replacement makes financial sense.',
      },
    ],
  },
  {
    slug: 'garbage-disposal-repair',
    name: 'Garbage Disposal Repair',
    description: 'Jammed, humming but not spinning, or leaking underneath — we repair and replace garbage disposals.',
    intro: 'A garbage disposal that hums but doesn\'t spin has a jammed impeller plate — often fixable with a hex key in minutes. A disposal that leaks at the flange or drain connection is a seal or mounting issue. We handle both repairs and full replacements.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Humming but not spinning (jammed)',
      'Won\'t turn on at all (reset tripped)',
      'Leaking from bottom or side',
      'Grinding noise when running',
      'Slow to drain or backing up into sink',
      'Foul odor coming from disposal',
    ],
    faq: [
      {
        q: 'My disposal hums but won\'t spin. Can I fix it myself?',
        a: 'Yes, sometimes. Turn off power, find the hex key slot on the bottom of the unit, and use a 1/4" hex key (often taped to the side of the disposal) to manually turn the impeller plate and free the jam. Then press the reset button on the bottom. If it still won\'t spin after that, the motor may have failed.',
      },
      {
        q: 'Should I repair or replace my garbage disposal?',
        a: 'If the disposal is under 8 years old and the motor is still working, repairs usually make sense. For older units with motor failures, a replacement is often the better value — labor costs are similar and a new unit comes with a fresh warranty.',
      },
    ],
  },
  {
    slug: 'ice-maker-repair',
    name: 'Ice Maker Repair',
    description: 'Not producing ice, making small or cloudy cubes, or leaking? We fix built-in and standalone ice makers.',
    intro: 'Ice maker problems range from a frozen fill tube to a failed ice maker module. We service built-in refrigerator ice makers (including Samsung, LG, and GE models) as well as standalone under-counter ice makers.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Ice maker not producing any ice',
      'Ice cubes are too small or hollow',
      'Cloudy or bad-tasting ice',
      'Ice maker leaking water into freezer',
      'Ice maker frozen up — fill tube blocked',
      'Ice dispenser jammed or not dispensing',
      'Samsung ice maker leaking (known issue)',
    ],
    faq: [
      {
        q: 'My Samsung ice maker keeps freezing up. Is this a known issue?',
        a: 'Yes. Many Samsung French-door refrigerators have a design flaw in the ice maker that causes freeze-over. The fix involves modifying the ice maker drain or installing an aftermarket ice maker kit. We\'re familiar with this issue and can repair it.',
      },
    ],
  },
  {
    slug: 'microwave-repair',
    name: 'Microwave Repair',
    description: 'Not heating, sparking, or display issues — we service countertop and built-in microwaves.',
    intro: 'Microwaves that stop heating often have a failed magnetron, diode, or capacitor. Sparking inside the microwave is usually a damaged waveguide cover or a piece of metal — address it before it becomes a bigger problem. We service both countertop and over-the-range built-in units.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="13" rx="2" stroke="currentColor" stroke-width="2"/><rect x="18" y="9" width="1" height="7" rx="0.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 10h9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    commonProblems: [
      'Microwave runs but doesn\'t heat food',
      'Sparking or arcing inside the cavity',
      'Turntable not rotating',
      'Display not working or showing error',
      'Door latch broken or door won\'t close properly',
      'Exhaust fan on over-the-range unit not working',
      'Microwave making loud humming noise',
    ],
    faq: [
      {
        q: 'Is it worth repairing a microwave?',
        a: 'For built-in and over-the-range microwaves, repair is almost always worth it — replacement requires cabinet work and can cost $500–$1,000+ installed. For countertop models, weigh repair cost against a new unit. We\'ll give you an honest assessment.',
      },
      {
        q: 'My microwave sparks when I run it. Can I still use it?',
        a: 'No — stop using it until it\'s inspected. Sparking damages the interior walls and waveguide. The cause is often a damaged waveguide cover (the rectangular plastic or mica piece on the interior wall), which is usually a simple fix.',
      },
    ],
  },
];
