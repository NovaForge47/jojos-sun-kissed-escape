import { createFileRoute, Link } from "@tanstack/react-router";

import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { LangToggle, SectionTitle } from "@/components/sections";
import logoImg from "@/assets/logo.png";

const PHONE_TEL = "tel:+306949318998";

// Upcoming events are published as poster images. To add a new event,
// save the poster in public/images and append its local path to POSTERS below,
// then add a matching alt text in eventsPage.alts (el + en) in src/lib/i18n.tsx.
const POSTERS = ["/images/event-latin.jpg", "/images/event-trannos.jpg"];

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Upcoming Events | JOJO Porto Rafti Beach Bar" },
      {
        name: "description",
        content:
          "Τα επόμενα events στο JOJO Porto Rafti: Latin Live Party με Cuban Dancers Show και Live Beach Party με τον Trannos στο Πόρτο Ράφτη.",
      },
      { property: "og:title", content: "Upcoming Events | JOJO Porto Rafti" },
      {
        property: "og:description",
        content:
          "Live parties, DJ sets και μουσικές βραδιές δίπλα στη θάλασσα στο Πόρτο Ράφτη.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:site_name", content: "JOJO Porto Rafti" },
      { property: "og:url", content: "https://jojo.gr/events" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Upcoming Events | JOJO Porto Rafti" },
      {
        name: "twitter:description",
        content: "Δείτε τα επόμενα parties στο JOJO Porto Rafti.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://jojo.gr/events" }],
  }),
});

function EventsPage() {
  return (
    <LanguageProvider>
      <EventsContent />
    </LanguageProvider>
  );
}

function EventsContent() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img
              src={logoImg}
              alt="JOJO Porto Rafti"
              width={816}
              height={816}
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span className="truncate text-sm font-semibold tracking-[0.18em]">
              JOJO
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-ocean"
            >
              {t.menuPage.backHome}
            </Link>
            <LangToggle />
            <a
              href={PHONE_TEL}
              className="rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              {t.navCall}
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <SectionTitle kicker={t.eventsPage.kicker} title={t.eventsPage.title} />
        <p className="mx-auto -mt-4 mb-12 max-w-xl text-center leading-relaxed text-muted-foreground">
          {t.eventsPage.intro}
        </p>

        <ul className="grid gap-8 sm:grid-cols-2">
          {POSTERS.map((url, i) => (
            <li key={url} className="surface-card overflow-hidden rounded-3xl">
              <img
                src={url}
                alt={t.eventsPage.alts[i] ?? ""}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href={PHONE_TEL}
            className="inline-block rounded-full bg-ocean px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            {t.navCall}
          </a>
        </div>
      </main>

      <footer className="bg-primary py-10 text-center text-primary-foreground">
        <img
          src={logoImg}
          alt=""
          width={816}
          height={816}
          loading="lazy"
          className="mx-auto h-14 w-14 object-contain"
        />
        <p className="mt-3 text-sm tracking-[0.2em] uppercase">JOJO Porto Rafti</p>
        <p className="script-accent mt-1 text-lg">{t.footer.script}</p>
        <p className="mt-4 text-xs text-primary-foreground/70">{t.footer.line}</p>
      </footer>
    </div>
  );
}
