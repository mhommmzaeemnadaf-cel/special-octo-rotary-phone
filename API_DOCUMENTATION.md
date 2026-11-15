# ASTRONAUT-X — NASA API & External Service Documentation

This document describes the technical architecture, endpoints, authentication requirements, data formats, limitations, attribution, and graceful fallback behaviors for all external NASA data integrations in **ASTRONAUT-X**.

---

## 1. NASA Image and Video Library API (Primary Integration)

* **Documentation**: [https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)
* **Base URL**: `https://images-api.nasa.gov`
* **Authentication**: **None required**. Publicly accessible REST API.
* **Service Implementation**: `src/services/nasa/nasaMediaService.ts`

### Endpoints Implemented

#### A. Multi-Media Search
* **Endpoint**: `GET https://images-api.nasa.gov/search`
* **Query Parameters**:
  * `q` *(string)*: Free-text search terms (e.g. `perseverance`, `apollo 11`, `carina nebula`)
  * `media_type` *(string)*: Comma-separated media types: `image`, `video`, `audio`, or `image,video`
  * `page` *(number)*: Page index (1-indexed)
  * `page_size` *(number)*: Result items per page (default: 16–20)
* **Response Format**: JSON (`collection.items[]`)
* **Data Sanitization**:
  * Missing or `http://` thumbnail links are converted to secure `https://`
  * Missing descriptions default to standardized archival notice
  * Null items or items without renderable assets are safely filtered out

#### B. Asset Manifest
* **Endpoint**: `GET https://images-api.nasa.gov/asset/{nasa_id}`
* **Purpose**: Returns the list of all file assets for a given `nasa_id` across resolutions.
* **Response Format**: JSON array of asset URLs (`.mp4`, `.webm`, `.jpg`, `.png`, `.vtt`, `.srt`)
* **Filtering & Quality Selection**:
  * Mobile/medium MP4 streams are prioritized over multi-gigabyte original master files to maintain fast buffering.
  * Direct webm / mp4 compatibility checks prevent broken video player states.

#### C. Metadata Endpoint
* **Endpoint**: `GET https://images-api.nasa.gov/metadata/{nasa_id}`
* **Purpose**: Retrieves location of extended JSON technical metadata for the asset.

#### D. Video Captions / Subtitles
* **Endpoint**: `GET https://images-api.nasa.gov/captions/{nasa_id}`
* **Purpose**: WebVTT (`.vtt`) and SubRip (`.srt`) accessibility closed caption files.

### Caching & Fallback Architecture
1. **In-Memory & LocalStorage Cache**: All successful API responses are cached locally with a 1-hour TTL.
2. **Request Timeouts & Cancellation**: Every request uses an `AbortController` with an 8.5-second timeout.
3. **Curated Bundled Fallback**: If network is offline, rate-limited, or blocked by local firewalls, the service automatically serves authentic bundled NASA records (Perseverance Sky Crane touchdown `PIA23764`, Ingenuity flight `PIA24482`, Curiosity selfie `PIA24925`, Artemis I Earth-Moon view, Apollo 11 surface photo `AS11-40-5903`, JWST Carina Nebula `weic2208a`, etc.) with a clear UI archival banner.

---

## 2. NASA Open APIs (`api.nasa.gov`)

* **Documentation**: [https://api.nasa.gov/](https://api.nasa.gov/)
* **Base URL**: `https://api.nasa.gov`
* **Authentication**: API Key via `?api_key=...`. Default fallback uses NASA's public `DEMO_KEY` (30 requests/hour, 50/day).
* **Endpoints Used**:
  * `GET /planetary/apod`: Astronomy Picture of the Day.
* **Fallback Behavior**: If the rate limit is exceeded (HTTP 429), the interface automatically renders a verified high-resolution NASA APOD asset (JWST Carina Nebula Cosmic Cliffs).

---

## 3. NASA Exoplanet Archive (Caltech / IPAC)

* **Documentation**: [https://exoplanetarchive.ipac.caltech.edu/](https://exoplanetarchive.ipac.caltech.edu/)
* **Service**: Curated catalog of confirmed Earth-sized Habitable Zone exoplanets (TRAPPIST-1e, Kepler-452b, Proxima Centauri b, TOI-700d).
* **Interactive Tool**: Transit Photometry Light Curve Simulator modeling fractional stellar flux decrements ($\Delta F / F \approx (R_p / R_*)^2$).
* **Authentication**: None required for public catalog queries.

---

## 4. NASA GIBS & Earthdata Worldview

* **Documentation**: [https://www.earthdata.nasa.gov/data/tools/gibs](https://www.earthdata.nasa.gov/data/tools/gibs)
* **Purpose**: Global satellite imagery layers for Earth observation, climate, oceans, and natural disasters.
* **Layers Referenced**:
  * MODIS Terra (True Color Surface Albedo)
  * VIIRS Earth at Night (Nighttime lights & atmospheric emissions)
  * AIRS Atmospheric Infrared Sounder

---

## 5. NASA Eyes Interactive 3D Suite

* **Documentation**: [https://eyes.nasa.gov/](https://eyes.nasa.gov/)
* **Purpose**: Direct mission links for real-time 3D planetary exploration:
  * Eyes on the Solar System
  * Eyes on Exoplanets
  * Eyes on the Earth
  * Eyes on Asteroids (Planetary Defense)

---

## 6. NASA Scientific Visualization Studio (SVS)

* **Documentation**: [https://svs.gsfc.nasa.gov/](https://svs.gsfc.nasa.gov/)
* **Purpose**: Peer-reviewed scientific visualizations illustrating black hole accretion disks, magnetic reconnections, and climate models.
