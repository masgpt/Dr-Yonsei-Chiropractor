## Privacy Audit Notes

This document records the third-party tracking surface and the consent behavior the site currently enforces.

### Current third-party exposures

1. **Google Fonts** – Lexend, Noto Sans, and Material Symbols load from `fonts.googleapis.com`/`fonts.gstatic.com` on every page load, transmitting IP, user agent, and referrer. These remain listed in the cookie policy and require consent in the future if gating is needed.
2. **Google Maps iframe** – The contact page loads `https://maps.google.com/maps?...` with the clinic address, which triggers Google cookies and telemetry whenever the page renders.
3. **Googleusercontent images** – Hero and review profile photos are served from `lh3.googleusercontent.com`, so each page load contacts Google’s CDN with cookies.

### Consent gating

- The banner toggles analytics, marketing, and preference categories. Analytics consent now gates the `i18next` cookie and prevents future language writes until allowed.
- Theme preference is only persisted once the visitor enables preference cookies, and the inline hydration script honors the last stored setting via the consent cookie.
- All future third-party embeds or analytics scripts must be documented here before inclusion, and the footer navigation now links to live policy pages.

> **Reminder for future changes**: If a new tracker, pixel, or embed is introduced, add it to this file, update the cookie policy section, and ensure it respects the `ConsentContext` gating logic.
