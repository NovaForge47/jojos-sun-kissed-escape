import { createFileRoute, Link } from "@tanstack/react-router";

import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { LangToggle, MenuSection } from "@/components/sections";
import logoImg from "@/assets/logo.png";

const PHONE_TEL = "tel:+306949318998";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Μενού | JOJO Porto Rafti Beach Bar" },
      {
        name: "description",
        content:
          "Το μενού του JOJO Porto Rafti: καφέδες, φρέσκοι χυμοί, smoothies, πρωινό, τοστ, ορεκτικά, bruschetta, pinza, παγωτό και γρανίτες δίπλα στη θάλασσα.",
      },
      { property: "og:title", content: "Μενού | JOJO Porto Rafti Beach Bar" },
      {
        property: "og:description",
        content:
          "Καφέδες, χυμοί, πρωινό, pinza, ορεκτικά και πολλά ακόμη — όλη μέρα στο Πόρτο Ράφτη.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:site_name", content: "JOJO Porto Rafti" },
      { property: "og:url", content: "https://jojo.gr/menu" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Μενού | JOJO Porto Rafti Beach Bar" },
      {
        name: "twitter:description",
        content: "Δείτε το μενού του JOJO Porto Rafti — καφές, φαγητό και γλυκά όλη μέρα.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://jojo.gr/menu" }],
  }),
});

function MenuPage() {
  return (
    <LanguageProvider>
      <MenuContent />
    </LanguageProvider>
  );
}

function MenuContent() {
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

      <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <MenuSection title={t.menu.title} categories={t.menu.categories} />
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
