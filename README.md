# BELLA~B — Official Artist Website

**Live site:** [djbellab.com](https://djbellab.com)  
**Repository:** [github.com/jasoncookdesign/djbellab](https://github.com/jasoncookdesign/djbellab)

---

## Technology Stack

This is a **static HTML/CSS website** with no build tools, no JavaScript framework, and no server-side dependencies.

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styles | Single CSS file (`styles.css`) |
| Fonts | Google Fonts — Manrope, Space Grotesk |
| Icons | Inline SVG (social icons embedded directly in HTML) |
| Hosting | GitHub Pages |
| Domain | Custom domain via `CNAME` file (`djbellab.com`) |

There is no package manager, no build step, and no deployment pipeline beyond a standard GitHub Pages setup. Editing any `.html` or `.css` file and pushing to the `main` branch will publish the change live within seconds.

---

## Project Structure

```
/
├── index.html          # Home page (hero, releases preview, mixtapes preview,
│                       #   calendar, gallery preview, about)
├── releases.html       # Full releases page
├── mixtapes.html       # Full mixtapes / set archive page
├── gallery.html        # Full photo gallery page
├── press.html          # Press & media reference page
├── styles.css          # All site styles (single file)
├── CNAME               # GitHub Pages custom domain config (djbellab.com)
└── assets/
    ├── gallery/        # Performance and artist photos
    ├── icons/
    │   └── socials/    # SVG copies of social icons (for reference)
    ├── images/
    │   └── mixtapes/   # Mixtape cover artwork
    ├── press/          # Press kit assets (currently empty)
    └── releases/       # Release cover artwork
```

Image naming convention: lowercase, kebab-case (e.g., `space-rave-2026.jpg`).  
Preferred formats: WebP or AVIF where quality allows; JPEG for photographs.  
Source images should be kept high resolution; serve responsive sizes via the `srcset` attribute where page load is a concern.

---

## Hosting & Deployment

The site is hosted on **GitHub Pages** from the `main` branch of this repository. No separate build or deploy step is required — pushing to `main` publishes the change.

### GitHub Repository Settings

1. Go to **Settings → Pages** in the GitHub repository.
2. Source should be set to **Deploy from a branch → `main` / `(root)`**.
3. The custom domain field should show `djbellab.com`.

### Taking Over Hosting

To transfer the site to a new owner/developer:

1. **Transfer the GitHub repository** to the new owner's GitHub account:  
   Settings → General → Transfer ownership.  
   If a direct transfer is not possible, fork the repo and enable GitHub Pages on the fork, then update the DNS (see below).

2. **Update the DNS** at the domain registrar:  
   The `CNAME` file in this repo tells GitHub Pages to serve the site at `djbellab.com`, but the DNS record at the registrar must point to GitHub's servers. The registrar account (wherever `djbellab.com` is registered) must be transferred or have its DNS records updated to point to the new repository owner's GitHub Pages. Follow [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for the required `A` and `CNAME` DNS records.

3. **Update the booking email** (`booking@djbellab.com`) throughout the site if the artist's contact address changes. It appears in the navigation "Book" button, the footer, and several call-to-action links across all pages.

---

## Social Links

The following social profiles are linked throughout the site. Confirm these are still active / owned before handoff.

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/dj.bellab.ig/ |
| SoundCloud | https://soundcloud.com/djbellab/ |
| Facebook | https://www.facebook.com/dj.BellaB.IG/ |
| Mixcloud | https://www.mixcloud.com/BellaB123/ |

---

## Current Content Status

### ✅ Done

- Full site layout and visual design, including the glass-panel dark aesthetic, responsive grid, and reveal animations.
- Navigation across all pages, including `aria-current="page"` for accessibility.
- **Hero section** (`index.html`) — copy, social links, and layout are complete. The hero image is currently a placeholder (see Gallery below).
- **About section** (`index.html`) — artist bio copy is complete.
- **Releases page** (`releases.html`) — spotlight layout and release grid structure are complete.
  - "HerO Way" is fully populated: cover art (`assets/releases/release-hero-way.jpg`), label (SIGIL.ZERO), release date (April 21, 2026), and descriptive copy are all in place.
- **Mixtapes page** (`mixtapes.html`) — spotlight and archive grid structure are complete.
  - *Space Rave 2026 – Live In Denver* is fully populated with cover art and a live SoundCloud link.
  - *Symphony of Hearts* is fully populated with cover art and a live SoundCloud link.
- **Press page** (`press.html`) — page structure, highlight cards, scene notes, and media reference block are in place.
- All inline SVG social icons are embedded and rendering.

---

### 🔲 Still To Do

#### Releases

The releases section currently contains **one real release** ("HerO Way"). The release grid on `releases.html` has two additional placeholder cards ("Title TBD"). As new releases are confirmed:

1. Add the release cover art file to `assets/releases/`.
2. Copy an existing `<article class="release-index-card">` block in `releases.html` and fill in the title, label, date, and link.
3. Add or update the corresponding preview card in the `#releases` section of `index.html`.
4. Update the pre-save/listen/view action links in the spotlight block (`releases.html`, `.spotlight-actions`) — they currently point to `#` and need real URLs once the release is live.

#### Mixtapes

The mixtape archive contains **two mixes with real links** (Space Rave 2026 and Symphony of Hearts). Four additional cards exist with placeholder `#` links and no artwork:
- *Afterhours Control* (Denver Late Session / 1H 24M / Mar 2026)
- *Club Signal* (Main Room Capture / 1H 02M / Jan 2026)
- *Warehouse Systems 007* (Live Cut / 49M / Apr 2026)

*(A fourth placeholder card appears on `index.html` as "Space Rave Control Pass" but is not present in the `mixtapes.html` archive.)*

For each new or existing mix:
1. Add cover artwork to `assets/images/mixtapes/` and populate the `<figure>` element.
2. Replace the `href="#"` on the listen/play link with the real SoundCloud (or other platform) URL.
3. Add a `target="_blank" rel="noopener noreferrer"` attribute to any external link.

#### Calendar

**All calendar entries are placeholder.** The venue names (Riot House, Signal Terrace, Bar Standard, The Deckline) and event names are invented. Before the site goes live or is handed off for active use, every `<li>` in the `#calendar` section of `index.html` should be replaced with real confirmed bookings, or the section should be hidden/removed until real dates are available. Each entry uses this structure:

```html
<li>
  <time datetime="YYYY-MM-DD">Mon DD</time>
  <div class="event-main">
    <strong>Event Name</strong>
    <span>Venue: Venue Name</span>
  </div>
  <span class="event-city">City</span>
  <a class="event-link" href="EVENT_URL_OR_BOOKING_EMAIL">Status / Role</a>
</li>
```

#### Gallery

**Every image in the gallery is a placeholder.** All `<img>` elements across `index.html` and `gallery.html` (including the hero image) reference `assets/gallery/artist-image-anime.png`. Real performance photography needs to be:

1. Exported and placed in `assets/gallery/` using descriptive kebab-case filenames (e.g., `riot-house-denver-2026.jpg`).
2. Referenced by updating the `src` and `alt` attributes of each `<img>` tag.

The `<figcaption>` text for each gallery tile is already written to describe the intended shot — use those as a guide for which photos to source.

#### Press

The press page is **a stub**. The envisioned end state is a full press kit. Items still needed:

- **Real press quotes or features** — the "Industry Comments" cards currently contain generic scene notes without attribution. Replace with actual pull quotes from real press coverage, interviews, or industry contacts, each attributed to a name, publication, or platform.
- **Downloadable press kit** — add a downloadable PDF press kit (bio, high-res photos, technical rider) to `assets/press/` and link it from `press.html`. A button with a link to the file can be added in the "Media Reference" section.
- **High-resolution press photos** — place approved hi-res artist photos in `assets/press/` and add a download link or a grid of downloadable images.
- **Press clips/coverage** — if and when reviews, features, blog posts, or podcast appearances are published, add them as cards in the highlight grid or a new "In the Press" section.
