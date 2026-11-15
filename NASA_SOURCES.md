# ASTRONAUT-X — External NASA & Space Agency Primary Sources

This document catalogues all external scientific datasets, peer-reviewed publications, telemetry databases, and space agency sources integrated into **ASTRONAUT-X**.

---

## 1. Primary Agency Databases & Portals

### A. NASA Open APIs (`api.nasa.gov`)
* **Portal**: [https://api.nasa.gov/](https://api.nasa.gov/)
* **Endpoints Integrated**:
  * **APOD (Astronomy Picture of the Day)**: `GET /planetary/apod` — Daily high-resolution imagery and professional astrophysics commentary.
  * **DONKI API**: Space weather notifications for CMEs, Flares, and Geomagnetic Storms.
  * **InSight Mars Weather API**: Martian atmospheric pressure, temperature, and wind sensors.
* **Authentication**: Free programmatic access via `api_key=DEMO_KEY` with graceful fallback to bundled archival datasets.

### B. NASA Space Weather Database (DONKI)
* **Portal**: [https://ccmc.gsfc.nasa.gov/tools/DONKI/](https://ccmc.gsfc.nasa.gov/tools/DONKI/)
* **Service**: `src/services/nasa/nasaSpaceWeatherService.ts`
* **Endpoints**:
  * `GET /DONKI/CME` (Coronal Mass Ejections)
  * `GET /DONKI/FLR` (Solar Flares)
  * `GET /DONKI/GST` (Geomagnetic Storms)
* **Application**: Real coronal speeds ($km/s$), active regions (e.g. NOAA AR 3664), peak X-ray flux ($W/m^2$), and interplanetary shock arrival times ground the **Helios CME Magneto-Shield Defender** game and the **Space Weather Live Monitor** in actual conditions.

### C. NASA Open Science Data Repository (OSDR)
* **Portal**: [https://osdr.nasa.gov/bio/repo/](https://osdr.nasa.gov/bio/repo/)
* **Search API**: `https://osdr.nasa.gov/osdr/data/search?term=KEYWORD`
* **Service**: `src/services/nasa/nasaOsdrService.ts`
* **Component**: `src/features/space-biology/SpaceBiologyLab.tsx`
* **Published Investigations**:
  * `OSD-37`: Microgravity-induced bone mineral density reduction in rodent femoral trabeculae (NASA Ames).
  * `OSD-120`: Skeletal muscle atrophy and mitochondrial remodeling (NASA Twins Study).
  * `OSD-242`: T-cell receptor diversity and immunosuppression under cosmic radiation.
  * `OSD-454`: Plant morphogenesis and root gravitropism in spaceflight (Veggie/APH).
  * `OSD-512`: Cardiovascular remodeling and SANS (Spaceflight-Associated Neuro-ocular Syndrome).

### D. RadLab ISS Radiation Dosimetry Database
* **Portal**: [https://visualization.osdr.nasa.gov/radlab/gui/data-api/](https://visualization.osdr.nasa.gov/radlab/gui/data-api/)
* **Service**: `src/services/nasa/nasaOsdrService.ts`
* **Telemetry**: Real radiation dose measurements recorded by dosimetry instruments aboard the International Space Station contributed by NASA, ESA, JAXA, CSA, and Roscosmos:
  * ESA Columbus DOSIS 3D ($285.4\,\mu\text{Gy/day}$, $462.8\,\mu\text{Sv/day}$)
  * NASA Destiny US Lab TEPC ($312.6\,\mu\text{Gy/day}$, $538.1\,\mu\text{Sv/day}$)
  * JAXA Kibo PADLES ($298.0\,\mu\text{Gy/day}$)
  * Deep Space Lunar Gateway & Mars Transit models ($1,420-1,890\,\mu\text{Sv/day}$)

### E. NASA Mars Trek Topography & Elevation Portal
* **Portal**: [https://trek.nasa.gov/mars/](https://trek.nasa.gov/mars/)
* **Service**: `src/services/nasa/marsTrekService.ts`
* **Data Sources**: Mars Global Surveyor MOLA (Mars Orbiter Laser Altimeter), MRO HiRISE, and THEMIS infrared.
* **Featured Outpost Sites**:
  * **Jezero Crater Delta** ($18.38^\circ\text{N}, 77.58^\circ\text{E}$, Elev: $-2,530\text{ m}$)
  * **Arcadia Planitia** ($39.3^\circ\text{N}, 189.7^\circ\text{E}$, Elev: $-4,100\text{ m}$, vast shallow sheet water ice)
  * **Gale Crater & Mount Sharp** ($5.38^\circ\text{S}, 137.44^\circ\text{E}$, Elev: $-4,490\text{ m}$)
  * **Olympus Mons Summit Caldera** ($18.65^\circ\text{N}, 226.2^\circ\text{E}$, Elev: $+21,229\text{ m}$)
  * **Valles Marineris Coprates Chasma** ($14.6^\circ\text{S}, 301.7^\circ\text{E}$, Elev: $-6,800\text{ m}$)

### F. Canadian Space Agency (CSA) Partner Resources
* **STEM & Youth Outreach**: [https://www.asc-csa.gc.ca/eng/youth-educators/resources-stem-and-youth-organizations.asp](https://www.asc-csa.gc.ca/eng/youth-educators/resources-stem-and-youth-organizations.asp)
  * Free, bilingual STEM educational guides and hands-on science toolkits.
* **Food Production on the Moon & in Remote Areas**: [https://www.asc-csa.gc.ca/eng/youth-educators/toolkits/food-production/](https://www.asc-csa.gc.ca/eng/youth-educators/toolkits/food-production/)
  * Service: `src/services/partners/csaService.ts`
  * Deep Space Food Challenge models, microgreen hydroponics, aeroponics, and spirulina bioreactors.
  * Dual-Earth benefit: The **Naurvik Project** in Gjoa Haven, Nunavut, bringing fresh produce to -50°C Canadian Arctic communities using closed-loop space container technology.

### G. NASA Image and Video Library (`images-api.nasa.gov`)
* **Portal**: [https://images.nasa.gov](https://images.nasa.gov)
* **Rest API**: `https://images-api.nasa.gov`
* Real-time query, asset manifest resolution, medium-bitrate MP4 filtering, and WebVTT caption streaming.

### H. Caltech / IPAC NASA Exoplanet Archive
* **Portal**: [https://exoplanetarchive.ipac.caltech.edu](https://exoplanetarchive.ipac.caltech.edu)
* Confirmed exoplanet parameters, transit depths, and habitable zone boundaries.

### I. NASA Earthdata & GIBS
* **Portal**: [https://www.earthdata.nasa.gov](https://www.earthdata.nasa.gov)
* Near real-time satellite imagery layers via NASA Worldview.

### J. NASA Eyes on the Solar System
* **Portal**: [https://eyes.nasa.gov](https://eyes.nasa.gov)
* 3D spacecraft trajectories and planetary flybys.

---

## 2. Peer-Reviewed Academic & Technical Publications

* **Space Radiation & Human Health**:
  * Cucinotta, F. A., & Durante, M. (2006). *Cancer risk from exposure to galactic cosmic rays: implications for early exploration missions*. The Lancet Oncology, 7(5), 431-435.
* **Mars Oxygen ISRU Experiment (MOXIE)**:
  * Hecht, M., Hoffman, J., Rapp, D., et al. (2021). *Mars Oxygen ISRU Experiment (MOXIE) on the Mars 2020 Rover Mission*. Space Science Reviews, 217(1), 9.
* **Jezero Crater Sedimentology**:
  * Mangold, N., Gupta, S., Gasnault, O., et al. (2021). *Perseverance rover reveals an ancient delta-lake system and flood deposits at Jezero crater, Mars*. Science, 374(6568), 711-717.
* **Controlled Environment Agriculture (CEA) in Space**:
  * Wheeler, R. M. (2017). *Agriculture for Space: People and Places Paving the Way*. Open Agriculture, 2(1), 14-32.
* **Kinetic Impactor Deflection Physics (DART)**:
  * Cheng, A. F., et al. (2023). *Momentum Transfer from the DART Mission Kinetic Impact on Asteroid Dimorphos*. Nature, 616, 457-460.
