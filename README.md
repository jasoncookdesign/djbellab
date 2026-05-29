# BELLA~B Official Website

Live site: <https://djbellab.com>  
Repository: <https://github.com/jasoncookdesign/djbellab>

## Overview

This repository contains the public website for BELLA~B. It is a static site deployed via GitHub Pages and built with hand-authored HTML, CSS, and a small vanilla JavaScript enhancement layer.

The README was revised against commit history after the original README commit (`8faf100`) so it reflects shipped behavior that landed later (gallery content, calendar updates, lightbox interactions, release link updates, favicon support, and embedded Spotify player).

## Stack

- HTML5 (multi-page static site)
- Single stylesheet: `styles.css`
- Vanilla JavaScript: `lightbox.js`
- Google Fonts: Manrope, Space Grotesk
- GitHub Pages hosting + custom domain via `CNAME`

There is no build step, package manager, or framework.

## Current Site Structure

```text
/
|- index.html            # Home: hero, releases preview, mixtapes preview, calendar, gallery preview, about
|- releases.html         # Release spotlight, embedded Spotify player, stream/buy links, release grid
|- mixtapes.html         # Mixtape spotlight and selected set archive
|- gallery.html          # Full gallery with lightbox-enabled images
|- press.html            # Press/recognition profile and media reference
|- lightbox.js           # Gallery lightbox + clickable card behavior on homepage cards
|- styles.css            # Global styles for all pages
|- CNAME                 # Custom domain config for GitHub Pages
`- assets/
   |- gallery/           # Gallery and hero images
   |- images/mixtapes/   # Mixtape artwork
   |- releases/          # Release artwork
   |- icons/site/        # Favicon/site icon set + webmanifest
   |- icons/socials/     # Social icon files
   `- press/             # Press assets (if added)
```

## What Is Current

- Gallery imagery is populated with multiple real photos across home and gallery pages.
- Calendar entries on the homepage are populated (including dated listings and event links/contact CTAs).
- `releases.html` includes an embedded Spotify player for "HerO Way".
- Release links were expanded to major platforms (Spotify, SoundCloud, YouTube Music, Apple Music, Amazon Music, Beatport, Bandcamp).
- Homepage cards are keyboard/click navigable via `lightbox.js` "hot card" behavior.
- Gallery has a functioning lightbox with keyboard and touch support.
- Site favicon/app icons are wired on all pages through files in `assets/icons/site/`.

## What is Placeholder

The press page is a stub. The envisioned end state is a full press kit. Items still needed:

- Real press quotes or features — the "Industry Comments" cards currently contain generic scene notes without attribution. Replace with actual pull quotes from real press coverage, interviews, or industry contacts, each attributed to a name, publication, or platform.
- Downloadable press kit — add a downloadable PDF press kit (bio, high-res photos, technical rider) to assets/press/ and link it from press.html. A button with a link to the file can be added in the "Media Reference" section.
- High-resolution press photos — place approved hi-res artist photos in assets/press/ and add a download link or a grid of downloadable images.
- Press clips/coverage — if and when reviews, features, blog posts, or podcast appearances are published, add them as cards in the highlight grid or a new "In the Press" section.

## Editing Guide

### 1. Update Releases

- Edit spotlight content in `releases.html` (`.release-spotlight`).
- Update grid cards in `releases.html` (`.release-index-grid`).
- Keep homepage release preview in `index.html` (`#releases`) aligned with release page updates.
- Add artwork in `assets/releases/` and update corresponding `img src` + `alt` text.

### 2. Update Mixtapes

- Edit featured mix and archive cards in `mixtapes.html`.
- Keep homepage mixtape previews in `index.html` (`#mixtapes`) in sync.
- Add artwork in `assets/images/mixtapes/` and update references.

### 3. Update Calendar

- Homepage calendar lives in `index.html` (`#calendar`).
- Each row uses this pattern:

```html
<li>
  <time datetime="YYYY-MM-DD">Month D</time>
  <div class="event-main">
    <strong>Event Name</strong>
    <span>Venue or event context</span>
  </div>
  <span class="event-city">City</span>
  <a class="event-link" href="...">CTA</a>
</li>
```

### 4. Update Gallery

- Homepage preview tiles are in `index.html` (`#gallery`).
- Full gallery is in `gallery.html` (`.cinematic-grid`).
- Add new images to `assets/gallery/`, then update `img src`, `alt`, and optional `figcaption` text.
- Lightbox behavior is automatic for matching selectors in `lightbox.js`.

### 5. Update Press

- Press page content blocks are in `press.html`.
- Add downloadable assets to `assets/press/` and link from the media reference section when needed.

## Deploy

Deployment is automatic via GitHub Pages from the `main` branch root.

Basic Pages configuration:

1. GitHub repository Settings -> Pages
2. Source: Deploy from a branch
3. Branch: `main` / `(root)`
4. Custom domain: `djbellab.com`

## Linked Social Profiles

- Instagram: <https://www.instagram.com/dj.bellab.ig/>
- SoundCloud: <https://soundcloud.com/djbellab/>
- Beatport: <https://www.beatport.com/artist/bellab/2325309>
- Facebook: <https://www.facebook.com/dj.BellaB.IG/>
- Mixcloud: <https://www.mixcloud.com/BellaB123/>
