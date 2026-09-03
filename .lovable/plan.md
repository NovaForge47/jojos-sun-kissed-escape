# Ελληνικά / English language toggle

Add a simple EL / EN switch so visitors can read the whole page in either language. Greek stays the default.

## What the visitor sees

- A small pill switch in the top nav: **ΕΛ | EN**. Compact on mobile (next to the logo / call button), inline with the menu on desktop.
- Tapping it instantly re-renders every text on the page — nav labels, hero tagline and CTAs, About paragraphs, section titles, Events placeholder copy, review intro and the reviews, contact labels, footer.
- The choice is remembered on the device, so a returning visitor lands in the language they picked.
- First-time visitors whose browser is set to English get English automatically; everyone else gets Greek.

## Content in both languages

- Greek copy stays exactly as it is today — nothing is rewritten.
- English versions are written for the same content: tagline "The ultimate summer destination in Porto Rafti", "Beach bar all day", About, Events "Coming soon", Reviews, Location & Contact.
- The three real reviews: Andrea Dawson's review is shown in its original English text when EN is active; the two short ones get natural English equivalents.
- Facts that don't translate stay identical: address, phone, email, hours, social links, map.

## SEO handling

- The page keeps Greek as the indexed default: server-rendered HTML, `lang="el"`, title, description, canonical and structured data stay Greek. The toggle is a client-side view switch, so no duplicate URLs or split ranking signals.
- The `lang` attribute on the page content updates when English is selected, so screen readers and browser translation behave correctly.
- If you later want an indexable `/en` page with its own English title/description and hreflang tags, that's a separate follow-up — say the word and I'll add it.

## Technical notes

- New `src/lib/i18n.ts`: a `content` object keyed `el` / `en` holding every string currently hardcoded in `src/routes/index.tsx`, plus a small `LanguageProvider` + `useLanguage()` hook (React context, `localStorage` key `jojo-lang`, hydration-safe — reads storage in `useEffect`, first paint is Greek to avoid an SSR mismatch).
- `src/routes/index.tsx` swaps literals for `t.*` lookups; arrays (NAV, GALLERY alts, REVIEWS, SOCIALS labels) move into the dictionary.
- The provider wraps the page inside `index.tsx`; `head()` metadata is untouched.
- No backend, no new dependencies.
