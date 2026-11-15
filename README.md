# ASTRONAUT-X
### *THE NEXT GENERATION OF SPACE EXPLORERS STARTS HERE.*
#### **TRAIN. EXPLORE. DISCOVER. BECOME A COMMANDER.**
##### Developed for NASA Space Apps Challenge 2026

---

## 🏆 Project Purpose & Executive Overview

**ASTRONAUT-X** is an immersive, NASA-resource-powered educational space exploration platform engineered to world-class standards.

Designed for students, aspiring astronauts, and educators, ASTRONAUT-X synthesizes primary aerospace science, the official **NASA Image and Video Library**, interactive 3D WebGL orbital mechanics, authentic Web Audio acoustic physics, playable simulation labs (Rocket Builder, Space Agriculture, Mars Base Builder, Rover Challenge), and the **ASTRA AI** educational flight mentor.

> **Mandatory Disclaimer**:  
> *ASTRONAUT-X is an independent educational project. It is not affiliated with, endorsed by, or operated by NASA. NASA media and scientific data are credited to their respective missions and centers.*

---

## 🚀 Key Feature Highlights

### 1. 🔭 Official NASA Image & Video Library Integration (`images-api.nasa.gov`)
* **Multi-Media Search**: Real-time debounced queries querying 140,000+ authentic NASA photos, panoramas, and videos without requiring an API key.
* **Curated Search Categories**:
  * **Mars Exploration**: Perseverance Rover, Curiosity, Ingenuity Helicopter, Martian Landscapes, Missions.
  * **Moon Exploration**: Artemis Program, Apollo 11, Lunar Surface, Moon Missions.
  * **Human Spaceflight**: International Space Station (ISS), Astronaut Spacewalks (EVA), Life in Space, Extravehicular Mobility Suits.
  * **Deep Space**: James Webb Space Telescope (JWST), Hubble, Galaxies, Nebulae, Black Holes.
  * **Earth Science**: Earth from Space, Oceans, Forests, Climate Observations, Natural Disasters.
  * **Rocket Engineering**: Launches, Spacecraft, Rocket Engines, Space Stations.
* **Asset Manifest Video Player**: Resolves medium-bitrate MP4 streams from asset manifests to ensure fast, low-bandwidth video playback with WebVTT closed captions.
* **Interactive Media Detail Modal**: Displays NASA ID, date created, center credit, photographer, high-resolution zoom, and an integrated **"Explain with ASTRA AI"** educational bridge.
* **Offline & Network Resilience**: Includes in-memory and `localStorage` caching (1-hour TTL), 8.5-second `AbortController` timeouts, and an authentic curated NASA fallback archive.

### 2. 🎓 Astronaut Academy (10-Step Scientific Curriculum)
Rigorous, age-appropriate educational lessons adhering to a standardized 10-step pedagogical structure:
1. **Learning Objective**: Precise scientific goal.
2. **Introduction**: Conceptual overview in clear language.
3. **Scientific Explanation & Mathematics**: Equations ($F = G \frac{m_1 m_2}{r^2}$, Tsiolkovsky $\Delta v$, SOEC electrolysis).
4. **Visual NASA Evidence**: Real archival imagery.
5. **Real-World Space Mission**: Case studies (MRO, Perseverance, Apollo).
6. **Interactive Experiment**: Live parameter sliders (Orbital altitude vs velocity, MOXIE temperature).
7. **Knowledge Check**: Guided inquiry.
8. **5-Question Certification Quiz**: Instant scoring and flight readiness assessment.
9. **Explanation of Answers**: Detailed physics explanations for both correct and incorrect answers.
10. **Completion Status & Accreditation**: Real-time XP reward credited to the student's dossier.

### 3. 🤖 ASTRA AI — Educational Flight Copilot
* **3 Explanation Depth Tiers**:
  * **BEGINNER**: Simple, relatable analogies for young students.
  * **EXPLORER**: Detailed engineering explanations with real mission examples.
  * **SCIENTIST**: Rigorous mathematical equations, thermodynamic principles, and citations.
* **4 Clear Classification Badges**:
  1. *Verified Scientific Physics*
  2. *Simplified Educational Model*
  3. *Simulated Game Scenario*
  4. *Educational Suggestion*
* **Offline Child-Safe Knowledge Base**: Immediate, deterministic answers to queries about gravity, MOXIE, rocketry, JWST, and Jezero Crater without harvesting personal information.

### 4. 🔬 Interactive Engineering & Simulation Laboratories
* **Rocket Propulsion Builder**: Configure first-stage engines (Merlin 1D, Raptor 3, RS-25, SRB), fuel types, propellant mass, upper stages, and payloads (CubeSats, Mars Rover, Habitation Modules). Calculates Thrust-to-Weight Ratio (TWR) and Delta-V ($\Delta v$) with an animated launch simulator, Max-Q aerodynamic pressure graphs, and engineering failure analysis.
* **Space Agriculture Simulator**: Controlled Environment Agriculture (CEA) on Mars. Balance LED photoperiods (Red/Blue spectra), irrigation, temperature, and nutrient delivery (hydroponic, aeroponic, treated regolith) to harvest biomass, calories, and oxygen.
* **0.38g Ballistics Playground**: 2D ballistic projectile simulator comparing trajectories across Earth ($9.81\text{ m/s}^2$), Mars ($3.72\text{ m/s}^2$), the Moon ($1.62\text{ m/s}^2$), and Jupiter ($24.79\text{ m/s}^2$).
* **Jezero Rover Challenge**: Canvas-based navigation game navigating hazards, energy limits, and collecting sedimentary core samples.
* **Martian Colony Hab Builder**: Sandbox colony builder balancing power (solar/nuclear), oxygen domes, Sabatier water recyclers, and living quarters.
* **Live JPL Perseverance Weather Station**: Real-time ticking Martian Local Solar Time (LMST), surface atmospheric pressure ($738\text{ Pa}$), ground temperature, and speed-of-light communication latency calculator.

### 5. 🎖️ Unified Progression Engine & Flight Wings Certificate
* **Single Source of Truth (`useProgress`)**: Centralized tracking for calls, astronaut ranks (Junior Cadet $\rightarrow$ Flight Specialist $\rightarrow$ Mission Specialist $\rightarrow$ Flight Commander $\rightarrow$ Expedition Director), XP, certified quizzes, and 11 collectible flight badges.
* **Data Backup**: Export and Import student progress as downloadable `.json` dossiers.
* **Museum-Grade Flight Wings Certificate**: Generates an official, printable certificate featuring student callsign, specialization, XP, achievements, unique verification hash, and NASA educational disclaimer.

### 6. 🏆 Judges Hackathon Guided Demo Mode
* Single-click guided 11-step interactive tour bar (`[D]` shortcut) guiding judges through the platform's core capabilities in under 3 minutes:
  `Welcome` $\rightarrow$ `Academy` $\rightarrow$ `Lesson` $\rightarrow$ `Quiz` $\rightarrow$ `NASA Media Explorer` $\rightarrow$ `Mission Control` $\rightarrow$ `Sky Crane EDL Sim` $\rightarrow$ `Base Builder` $\rightarrow$ `Crisis Triage` $\rightarrow$ `Innovation Lab` $\rightarrow$ `Flight Wings Certificate`.

---

## 💻 Tech Stack

* **Frontend Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS v4 + Space Grotesk / Inter / JetBrains Mono typography
* **3D Graphics**: Three.js WebGL (Interactive Mars Albedo, MOLA Elevation & THEMIS Infrared globes)
* **Acoustics**: Procedural Web Audio API Synthesizer (Martian wind, Apollo Quindar tones, binaural drones)
* **Icons & Animation**: Lucide React + Canvas Confetti
* **APIs**: NASA Image and Video Library, NASA Open APIs (APOD), NASA Exoplanet Archive, NASA GIBS

---

## ⚡ Installation & Quick Start

### 1. Prerequisites
* Node.js v18+ or v20+
* npm or pnpm

### 2. Clone & Install
```bash
# Navigate to the project root
cd /Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## ⌨️ Global Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`[Space]`** | Instantly launch the Mission Flight Deck Simulator |
| **`[D]`** | Open the Judges Hackathon Guided Demo Tour |
| **`[A]`** | Toggle the ASTRA AI Educational Assistant |
| **`[C]`** | Open the Printable Flight Wings Certificate |
| **`[M]`** | Toggle procedural Martian wind & deep space ambience |
| **`[P]`** | Open the Built-in Pitch Deck Presentation |

---

## 📜 Documentation Index

* [`API_DOCUMENTATION.md`](file:///Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut/API_DOCUMENTATION.md) — Technical details of all NASA endpoints, manifest schemas, and caching.
* [`NASA_SOURCES.md`](file:///Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut/NASA_SOURCES.md) — Directory of external scientific databases and academic papers.
* [`NASA_MEDIA_ATTRIBUTION.md`](file:///Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut/NASA_MEDIA_ATTRIBUTION.md) — Credits, asset IDs, and rights compliance.
* [`DEVELOPMENT_STATUS.md`](file:///Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut/DEVELOPMENT_STATUS.md) — Ledger of completed modules, roadmap, and test status.
* [`.env.example`](file:///Users/mohamadzaeemallisabnadaf/.gemini/antigravity/scratch/mars-junior-astronaut/.env.example) — Example environment variables for optional API keys.

---

## 🛡️ Limitations & Privacy Commitments

1. **Child Safety**: ASTRONAUT-X does not collect names, emails, passwords, or geolocation data. All student progress is stored strictly client-side via `localStorage`.
2. **NASA Brand Compliance**: ASTRONAUT-X does not use the official NASA "meatball" or "worm" logos as its own branding, nor claim NASA endorsement.
3. **Offline Operation**: While the live NASA Image and Video Library requires an internet connection, all simulators, lessons, physics engines, quizzes, and ASTRA AI are 100% operational offline via bundled archival datasets.
