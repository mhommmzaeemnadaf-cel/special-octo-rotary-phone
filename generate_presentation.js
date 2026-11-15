import pptxgen from 'pptxgenjs';

const pres = new pptxgen();

// Set 16:9 Widescreen
pres.layout = 'LAYOUT_16x9';
pres.author = 'NASA Space Apps 2026 Mission Crew';
pres.title = 'MARS — Junior Astronaut Mission Trainer';
pres.subject = 'NASA Space Apps Challenge 2026 Presentation';

// Color Palette
const C_BLACK = '080B12';
const C_NAVY = '101827';
const C_TERRACOTTA = 'C65B43';
const C_GLOW = 'FF7B59';
const C_WHITE = 'F5F1E8';
const C_GREY = '9298A3';
const C_CYAN = '38BDF8';
const C_GREEN = '34D399';
const C_AMBER = 'FBBF24';

function addHeader(slide, category, title, subtitle) {
  // Category Pill
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.5, w: 2.8, h: 0.35,
    rectRadius: 0.1,
    fill: { color: C_NAVY },
    line: { color: C_TERRACOTTA, width: 1 }
  });
  slide.addText(category, {
    x: 0.8, y: 0.5, w: 2.8, h: 0.35,
    fontSize: 10, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true, align: 'center', valign: 'middle'
  });

  // Slide Title
  slide.addText(title, {
    x: 0.8, y: 0.95, w: 11.5, h: 0.8,
    fontSize: 28, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true, valign: 'middle'
  });

  // Slide Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.7, w: 11.5, h: 0.4,
      fontSize: 12, fontFace: 'Courier New', color: C_GLOW, bold: true
    });
  }
}

// ==========================================
// SLIDE 1: COVER SLIDE
// ==========================================
const s1 = pres.addSlide();
s1.background = { color: C_BLACK };

s1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 1.2, w: 3.8, h: 0.4,
  rectRadius: 0.1,
  fill: { color: C_NAVY },
  line: { color: C_TERRACOTTA, width: 1.5 }
});
s1.addText('NASA SPACE APPS CHALLENGE 2026', {
  x: 0.8, y: 1.2, w: 3.8, h: 0.4,
  fontSize: 11, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true, align: 'center', valign: 'middle'
});

s1.addText('MARS — JUNIOR ASTRONAUT\nMISSION TRAINER', {
  x: 0.8, y: 1.8, w: 11.5, h: 2.0,
  fontSize: 44, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true, lineSpacing: 48
});

s1.addText('THE NEXT GIANT LEAP BEGINS WITH YOU', {
  x: 0.8, y: 4.0, w: 11.5, h: 0.5,
  fontSize: 18, fontFace: 'Courier New', color: C_GLOW, bold: true
});

s1.addText('“An extraordinary journey beyond Earth. Discover the challenges, make critical decisions, and experience life as an astronaut on Mars.”', {
  x: 0.8, y: 4.6, w: 10.0, h: 0.8,
  fontSize: 14, fontFace: 'Arial', color: C_GREY, italic: true
});

// 3 Metric Badges at bottom
const bWidth = 3.6;
const badges = [
  { num: 'TRACK', title: 'Planetary Science & STEM', desc: 'Space Apps Global Challenge' },
  { num: 'TECH', title: 'React 19 + Three.js', desc: '100% Procedural WebGL & Audio' },
  { num: 'SIMULATION', title: 'Jezero Crater Hab Alpha', desc: 'Sky Crane EDL & MOXIE Loops' }
];

badges.forEach((b, i) => {
  const bx = 0.8 + i * 3.9;
  s1.addShape(pres.ShapeType.roundRect, {
    x: bx, y: 5.6, w: 3.6, h: 1.2,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s1.addText(b.num, { x: bx + 0.3, y: 5.75, w: 3.0, h: 0.25, fontSize: 9, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true });
  s1.addText(b.title, { x: bx + 0.3, y: 6.05, w: 3.0, h: 0.35, fontSize: 13, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
  s1.addText(b.desc, { x: bx + 0.3, y: 6.4, w: 3.0, h: 0.3, fontSize: 10, fontFace: 'Arial', color: C_GREY });
});

s1.addNotes('Welcome judges! We are presenting MARS — Junior Astronaut Mission Trainer. Our mission is to move beyond static school presentations and give students a real, hands-on aerospace flight simulator for surviving on Mars.');

// ==========================================
// SLIDE 2: THE HOSTILE MARTIAN REALITY
// ==========================================
const s2 = pres.addSlide();
s2.background = { color: C_BLACK };
addHeader(s2, 'THE SCIENTIFIC CHALLENGE', 'THE HOSTILE MARTIAN REALITY', 'SURVIVING BEYOND EARTH IS A MATHEMATICAL TRIAGE');

const statCards = [
  { val: '738 Pa', title: 'SURFACE PRESSURE', desc: 'Less than 1% of Earth. Blood and bodily fluids boil at body temp without a 29.6 kPa suit.' },
  { val: '95.3%', title: 'CARBON DIOXIDE', desc: 'Completely unbreathable. Requires continuous MOXIE solid-oxide catalytic oxygen synthesis.' },
  { val: '0.38 g', title: 'SURFACE GRAVITY', desc: 'Rapid bone and muscle decay requires 2.5 hours of daily resistance training.' },
  { val: '14m 22s', title: 'COMMUNICATION LAG', desc: 'Speed-of-light delay prevents Houston from intervening in real time. Autonomous triage is mandatory.' }
];

statCards.forEach((c, i) => {
  const cx = 0.8 + i * 2.9;
  s2.addShape(pres.ShapeType.roundRect, {
    x: cx, y: 2.3, w: 2.7, h: 3.4,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s2.addText(c.val, { x: cx + 0.2, y: 2.5, w: 2.3, h: 0.7, fontSize: 28, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true });
  s2.addText(c.title, { x: cx + 0.2, y: 3.2, w: 2.3, h: 0.3, fontSize: 10, fontFace: 'Courier New', color: C_WHITE, bold: true });
  s2.addText(c.desc, { x: cx + 0.2, y: 3.6, w: 2.3, h: 1.8, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });
});

s2.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 5.9, w: 11.4, h: 0.9,
  rectRadius: 0.12,
  fill: { color: '18131B' },
  line: { color: C_TERRACOTTA, width: 1 }
});
s2.addText('CORE PROBLEM: Traditional textbooks describe Mars passively. Cadets need high-stakes experiential simulation to understand the life-or-death engineering trade-offs of human space exploration.', {
  x: 1.0, y: 6.0, w: 11.0, h: 0.7,
  fontSize: 12, fontFace: 'Arial', color: C_WHITE, italic: true
});

s2.addNotes('On Mars, physics is unforgiving. Bodily fluids boil at body temperature due to near-vacuum atmospheric pressure, and the speed of light creates a 14-minute communication delay. Our simulator makes these scientific truths tangible.');

// ==========================================
// SLIDE 3: 4-MEMBER CREW DELEGATION
// ==========================================
const s3 = pres.addSlide();
s3.background = { color: C_BLACK };
addHeader(s3, 'ENGINEERING ARCHITECTURE', 'THE 4-MEMBER EXPEDITION CREW', 'CROSS-DISCIPLINARY OWNERSHIP ACROSS CODE & SCIENCE');

const crew = [
  { role: 'MEMBER 1', name: '3D WebGL Lead', focus: 'Engineered Three.js 3D Mars globe, procedural crater albedo, and 3-channel spectral sensor modes (Natural, MOLA, THEMIS).', tag: 'THREE.JS / SHADERS' },
  { role: 'MEMBER 2', name: 'UI/UX & Audio Lead', focus: 'Designed the Apple/A24 design system & synthesized procedural Martian wind acoustics in Web Audio API.', tag: 'WEB AUDIO / TAILWIND' },
  { role: 'MEMBER 3', name: 'Planetary Scientist', focus: 'Integrated NASA PDS & Perseverance MEDA weather station with real-time Keplerian orbital distance algorithms.', tag: 'NASA PDS / TELEMETRY' },
  { role: 'MEMBER 4', name: 'Flight Sim Lead', focus: 'Programmed Sky Crane 7 Minutes of Terror descent physics loop, MOXIE ECLSS boot, & flight certification.', tag: 'PHYSICS / GAME ENGINE' }
];

crew.forEach((m, i) => {
  const mx = 0.8 + i * 2.9;
  s3.addShape(pres.ShapeType.roundRect, {
    x: mx, y: 2.3, w: 2.7, h: 4.4,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: C_CYAN, width: 1 }
  });
  s3.addText(m.role, { x: mx + 0.2, y: 2.5, w: 2.3, h: 0.3, fontSize: 10, fontFace: 'Courier New', color: C_CYAN, bold: true });
  s3.addText(m.name, { x: mx + 0.2, y: 2.85, w: 2.3, h: 0.5, fontSize: 18, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
  s3.addText(m.focus, { x: mx + 0.2, y: 3.4, w: 2.3, h: 2.4, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });

  s3.addShape(pres.ShapeType.roundRect, {
    x: mx + 0.2, y: 6.0, w: 2.3, h: 0.4,
    rectRadius: 0.08,
    fill: { color: '0D2438' },
    line: { color: C_CYAN, width: 0.8 }
  });
  s3.addText(m.tag, { x: mx + 0.2, y: 6.0, w: 2.3, h: 0.4, fontSize: 9, fontFace: 'Courier New', color: C_CYAN, bold: true, align: 'center', valign: 'middle' });
});

s3.addNotes('Our 4-member team divided the project into four specialized engineering pillars: 3D Graphics, Audio/Design, Planetary Data, and Physics Simulation.');

// ==========================================
// SLIDE 4: MEMBER 1 - 3D THREE.JS SENSORS
// ==========================================
const s4 = pres.addSlide();
s4.background = { color: C_BLACK };
addHeader(s4, 'MEMBER 1 TECHNICAL SPOTLIGHT', '3D PROCEDURAL MARS & SPECTRAL MODES', 'HIGH-FIDELITY WEBGL SPHERE WITH ZERO HEAVY ASSET LAG');

s4.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.3, w: 5.6, h: 4.4,
  rectRadius: 0.15,
  fill: { color: C_NAVY },
  line: { color: '22304A', width: 1 }
});
s4.addText('3 MULTI-SPECTRAL SENSOR CHANNELS', { x: 1.1, y: 2.5, w: 5.0, h: 0.35, fontSize: 14, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
s4.addText('1. NATURAL ALBEDO:\nProcedural high-res surface albedo, dark basalt plains (Syrtis Major), Olympus Mons caldera rim, and CO2/H2O polar ice caps.\n\n2. MOLA TOPOGRAPHIC ELEVATION:\nScientific false-color altitude heatmap: deep blue lowlands of Hellas Basin (-8 km) to crisp white peak of Olympus Mons (+21.9 km).\n\n3. THEMIS THERMAL INFRARED:\nNight-side infrared thermal emission revealing exposed high-inertia bedrock vs low-inertia fine dust mantle.', {
  x: 1.1, y: 2.9, w: 5.0, h: 3.5, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 18
});

s4.addShape(pres.ShapeType.roundRect, {
  x: 6.6, y: 2.3, w: 5.6, h: 4.4,
  rectRadius: 0.15,
  fill: { color: C_NAVY },
  line: { color: C_TERRACOTTA, width: 1 }
});
s4.addText('RAYLEIGH ATMOSPHERE & CAMERA FLY-TO', { x: 6.9, y: 2.5, w: 5.0, h: 0.35, fontSize: 14, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
s4.addText('• GLSL RAYLEIGH SCATTERING SHADER:\nCustom Fresnel shader calculates solar angle to project an authentic orange-to-indigo atmospheric scattering halo.\n\n• ORBITAL CAMERA INTERPOLATION:\nClicking landmarks (Jezero Crater, Olympus Mons, Valles Marineris) computes spherical coordinates (phi, theta) and smoothly glides camera position and rotation.\n\n• SATELLITE RECONNAISSANCE:\nModeled MRO (Mars Reconnaissance Orbiter) satellite trajectory ring and dual-layer drifting cirrus ice clouds.', {
  x: 6.9, y: 2.9, w: 5.0, h: 3.5, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 18
});

s4.addNotes('Member 1 speaking: I engineered the 3D Mars globe directly in Three.js. Rather than downloading heavy 40MB models, I synthesized textures and shaders mathematically, enabling instant 1-second loading and locked 60 FPS.');

// ==========================================
// SLIDE 5: MEMBER 2 - AUDIO & HARDWARE BLUEPRINT
// ==========================================
const s5 = pres.addSlide();
s5.background = { color: C_BLACK };
addHeader(s5, 'MEMBER 2 TECHNICAL SPOTLIGHT', 'NATIVE PROCEDURAL AUDIO & ROVER BLUEPRINT', 'WEB AUDIO SYNTHESIS & TACTILE AEROSPACE HARDWARE HUD');

const audioCards = [
  { title: 'MARTIAN WIND SYNTH', desc: 'Pink/brown noise buffer routed through dynamic bandpass filters with LFO modulation mimicking real NASA Perseverance microphone recordings.' },
  { title: '48Hz BINAURAL DRONE', desc: 'Sub-bass spatial sine waves create an intense physical sensation of desolate interplanetary space.' },
  { title: 'QUINDAR TONES (2525Hz)', desc: 'Authentic Apollo/Artemis communication quindar beeps and thruster rumble bursts provide acoustic feedback.' }
];

audioCards.forEach((c, i) => {
  const ax = 0.8 + i * 3.9;
  s5.addShape(pres.ShapeType.roundRect, {
    x: ax, y: 2.3, w: 3.6, h: 2.1,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s5.addText(c.title, { x: ax + 0.25, y: 2.5, w: 3.1, h: 0.35, fontSize: 13, fontFace: 'Trebuchet MS', color: C_AMBER, bold: true });
  s5.addText(c.desc, { x: ax + 0.25, y: 2.9, w: 3.1, h: 1.3, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });
});

s5.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.6, w: 11.4, h: 2.1,
  rectRadius: 0.15,
  fill: { color: C_NAVY },
  line: { color: C_TERRACOTTA, width: 1 }
});
s5.addText('INTERACTIVE ROVER BLUEPRINT (ROVEREXPLORER.JSX)', { x: 1.1, y: 4.8, w: 10.5, h: 0.35, fontSize: 14, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
s5.addText('• MMRTG NUCLEAR POWER: 4.8 kg Plutonium-238 decay heat producing 110W electrical energy unaffected by dust storms.\n• ROCKER-BOGIE 6WD: Patented NASA kinematic suspension climbing 40cm obstacles in 0.38g gravity.\n• MASTCAM-Z & SUPERCAM: 3D stereoscopic multispectral zoom and laser-induced breakdown spectroscopy at 7 meters.\n• CORING DRILL TURRET: 5-DOF robotic arm hermetically sealing core sample tubes for Earth return transit.', {
  x: 1.1, y: 5.2, w: 10.5, h: 1.3, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 18
});

s5.addNotes('Member 2 speaking: We used zero audio files. Every sound is generated in real time using the Web Audio API. I also designed the interactive rover blueprint allowing users to inspect the nuclear generator and Rocker-Bogie mobility.');

// ==========================================
// SLIDE 6: MEMBER 3 - PLANETARY SCIENCE & WEATHER
// ==========================================
const s6 = pres.addSlide();
s6.background = { color: C_BLACK };
addHeader(s6, 'MEMBER 3 TECHNICAL SPOTLIGHT', 'NASA PDS TELEMETRY & ORBITAL LINK', 'AUTHENTIC MEDA SENSORS & SPEED-OF-LIGHT CALCULATIONS');

const weatherCards = [
  { val: '738 Pa', title: 'DIURNAL PRESSURE', desc: 'Models polar CO2 sublimation cycles with diurnal tides from 720 to 760 Pa at Jezero.' },
  { val: '24h 39m', title: 'LMST SOL CLOCK', desc: 'A live ticking Local Solar Time clock calibrated to authentic Martian Sol seconds.' },
  { val: '14m 22s', title: 'SPEED-OF-LIGHT LAG', desc: 'Calculates real-time Earth-Mars distance (225M km) with interactive packet ping simulator.' }
];

weatherCards.forEach((c, i) => {
  const wx = 0.8 + i * 3.9;
  s6.addShape(pres.ShapeType.roundRect, {
    x: wx, y: 2.3, w: 3.6, h: 2.2,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s6.addText(c.val, { x: wx + 0.25, y: 2.5, w: 3.1, h: 0.5, fontSize: 26, fontFace: 'Courier New', color: C_GREEN, bold: true });
  s6.addText(c.title, { x: wx + 0.25, y: 3.05, w: 3.1, h: 0.3, fontSize: 11, fontFace: 'Courier New', color: C_WHITE, bold: true });
  s6.addText(c.desc, { x: wx + 0.25, y: 3.4, w: 3.1, h: 0.9, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });
});

s6.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.7, w: 11.4, h: 2.0,
  rectRadius: 0.15,
  fill: { color: C_NAVY },
  line: { color: C_CYAN, width: 1 }
});
s6.addText('COMPARATIVE PLANETARY SCIENCE ARCHIVE (DISCOVERMARSSECTION.JSX)', { x: 1.1, y: 4.9, w: 10.5, h: 0.35, fontSize: 14, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
s6.addText('• SURFACE CONDITIONS: -18°C day to -84°C night, 1/3 gravity, perchlorate regolith hazards.\n• WATER ICE: Subsurface glaciers at Utopia Planitia containing volume equal to Lake Superior.\n• GEOGRAPHY: Olympus Mons shield volcano (21.9 km) and Valles Marineris canyon (4,000 km).\n• 50 YEARS OF RECONNAISSANCE: Viking 1 & 2 (1976), Curiosity (2012), Perseverance & Ingenuity (2021).', {
  x: 1.1, y: 5.3, w: 10.5, h: 1.2, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 18
});

s6.addNotes('Member 3 speaking: I ensured every number in the simulator is scientifically authentic. I integrated data from NASA PDS and Perseverance MEDA, built the ticking LMST Sol clock, and programmed the speed-of-light orbital delay engine.');

// ==========================================
// SLIDE 7: MEMBER 4 - FLIGHT SIMULATOR & EDL
// ==========================================
const s7 = pres.addSlide();
s7.background = { color: C_BLACK };
addHeader(s7, 'MEMBER 4 TECHNICAL SPOTLIGHT', 'THE 6-STAGE MISSION FLIGHT DECK', 'PHYSICS-BASED SKY CRANE EDL DESCENT & CLOSED-LOOP ECLSS');

const simSteps = [
  { step: '01', title: 'CADET DOSSIER', desc: 'Select calls-sign & specialty role (Life Support, Rover Pilot, Nuclear Commander).' },
  { step: '02', title: 'SKY CRANE EDL', desc: '10Hz physics loop: throttle hydrazine retro-rockets against 0.38g gravity for touchdown < 3.5 m/s.' },
  { step: '03', title: 'ECLSS BOOT', desc: 'Tactile switches for Sabatier loops, CO2 scrubbers, and 800°C MOXIE thermal calibration.' },
  { step: '04', title: 'RADAR EXPEDITION', desc: 'Interactive vector radar map traversing Jezero delta from Octavia Butler site to collect core samples.' },
  { step: '05', title: 'DUST STORM TRIAGE', desc: 'Branching decision engine managing power shedding under 14-min communication latency.' },
  { step: '06', title: 'FLIGHT WINGS CERT', desc: 'Museum-grade personalized printable certificate with verification code & confetti celebration.' }
];

simSteps.forEach((s, i) => {
  const sx = 0.8 + (i % 3) * 3.9;
  const sy = 2.3 + Math.floor(i / 3) * 2.2;
  s7.addShape(pres.ShapeType.roundRect, {
    x: sx, y: sy, w: 3.6, h: 2.0,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s7.addText(`STAGE ${s.step}: ${s.title}`, { x: sx + 0.25, y: sy + 0.2, w: 3.1, h: 0.35, fontSize: 12, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true });
  s7.addText(s.desc, { x: sx + 0.25, y: sy + 0.6, w: 3.1, h: 1.2, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });
});

s7.addNotes('Member 4 speaking: I built the 6-stage flight simulator. Cadets control retro-rockets during the 7 Minutes of Terror Sky Crane landing, calibrate MOXIE, navigate the radar map, and earn an official printable NASA flight certificate.');

// ==========================================
// SLIDE 8: SUMMARY & STEM IMPACT
// ==========================================
const s8 = pres.addSlide();
s8.background = { color: C_BLACK };
addHeader(s8, 'COMPETITION CONCLUSION', 'THE NEXT GIANT LEAP IS READY', 'FREE, OPEN, AND INSPIRING NEXT-GEN ASTRONAUTS WORLDWIDE');

const sumCards = [
  { num: '01 / ACCESSIBILITY', title: '100% Client-Side & Open', desc: 'No accounts, no paywalls, zero cloud backend. Runs effortlessly on Chromebooks, tablets, and phones.' },
  { num: '02 / CINEMATIC UI', title: 'Apple & A24 Aesthetics', desc: 'Sophisticated typography, high-contrast dark palette, tactile buttons, and locked 60 FPS performance.' },
  { num: '03 / GLOBAL STEM', title: 'Inspiring Future Explorers', desc: 'Transforms abstract aerospace equations into visceral, interactive exploration that sparks lifelong scientific curiosity.' }
];

sumCards.forEach((c, i) => {
  const sx = 0.8 + i * 3.9;
  s8.addShape(pres.ShapeType.roundRect, {
    x: sx, y: 2.3, w: 3.6, h: 2.8,
    rectRadius: 0.15,
    fill: { color: C_NAVY },
    line: { color: '22304A', width: 1 }
  });
  s8.addText(c.num, { x: sx + 0.3, y: 2.55, w: 3.0, h: 0.3, fontSize: 10, fontFace: 'Courier New', color: C_TERRACOTTA, bold: true });
  s8.addText(c.title, { x: sx + 0.3, y: 2.9, w: 3.0, h: 0.45, fontSize: 15, fontFace: 'Trebuchet MS', color: C_WHITE, bold: true });
  s8.addText(c.desc, { x: sx + 0.3, y: 3.45, w: 3.0, h: 1.4, fontSize: 11, fontFace: 'Arial', color: C_GREY, lineSpacing: 16 });
});

s8.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 5.3, w: 11.4, h: 1.4,
  rectRadius: 0.15,
  fill: { color: '150E12' },
  line: { color: C_TERRACOTTA, width: 1.5 }
});
s8.addText('“Mars represents humanity’s next great frontier. But survival beyond Earth requires preparation, intelligence, and courage. The next giant leap begins with you.”', {
  x: 1.1, y: 5.5, w: 10.5, h: 0.6,
  fontSize: 13, fontFace: 'Arial', color: C_WHITE, italic: true
});
s8.addText('MARS — JUNIOR ASTRONAUT MISSION TRAINER • NASA SPACE APPS CHALLENGE 2026', {
  x: 1.1, y: 6.15, w: 10.5, h: 0.35,
  fontSize: 11, fontFace: 'Courier New', color: C_GREEN, bold: true
});

s8.addNotes('Thank you judges! Mars will not be explored by spectators, but by brave and prepared individuals. Our project equips the next generation with the knowledge, courage, and excitement to make humanity an interplanetary species.');

// Generate file
const fileName = 'MARS_Junior_Astronaut_NASA_Space_Apps_2026.pptx';
pres.writeFile({ fileName })
  .then(() => {
    console.log(`Successfully generated presentation: ${fileName}`);
  })
  .catch((err) => {
    console.error('Error generating presentation:', err);
    process.exit(1);
  });
