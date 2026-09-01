import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.png";
import photo1 from "@/assets/photo-1.jpg.asset.json";
import photo2 from "@/assets/photo-2.jpg.asset.json";
import photo3 from "@/assets/photo-3.jpg.asset.json";
import photo4 from "@/assets/photo-4.jpg.asset.json";
import photo5 from "@/assets/photo-5.jpg.asset.json";

const PHONE_DISPLAY = "694 931 8998";
const PHONE_TEL = "tel:+306949318998";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=JOJO+Porto+Rafti+Λεωφόρος+Αυλακίου+62+Πόρτο+Ράφτη";
const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη 19003") +
  "&hl=el&z=15&output=embed";
const OG_IMAGE = "https://jojo.gr" + photo4.url;


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JOJO Porto Rafti | All Day Beach Bar στο Πόρτο Ράφτη" },
      {
        name: "description",
        content:
          "JOJO Porto Rafti beach bar: ξαπλώστρες στη θάλασσα, cocktails και φαγητό στο Πόρτο Ράφτη. Ανοιχτά καθημερινά 09:00–03:00. Τηλ. 694 931 8998.",
      },
      { property: "og:title", content: "JOJO Porto Rafti | All Day Beach Bar" },
      {
        property: "og:description",
        content:
          "Ο απόλυτος καλοκαιρινός προορισμός στο Πόρτο Ράφτη. Beach bar όλη μέρα, καθημερινά 09:00–03:00.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "JOJO Porto Rafti",
          description: "All day beach bar στο Πόρτο Ράφτη.",
          telephone: "+306949318998",
          email: "jojoportorafti@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Λεωφόρος Αυλακίου 62",
            addressLocality: "Πόρτο Ράφτη",
            postalCode: "19003",
            addressCountry: "GR",
          },
          openingHours: "Mo-Su 09:00-03:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.2",
            reviewCount: "139",
          },
          sameAs: [
            "https://www.instagram.com/jojoportorafti",
            "https://www.facebook.com/p/JOJO-Porto-Rafti-61582420581969/",
            "https://www.tiktok.com/@jojoportorafti",
            "https://www.youtube.com/@JoJoPortoRafti",
          ],
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#about", label: "Σχετικά" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#reviews", label: "Κριτικές" },
  { href: "#contact", label: "Επικοινωνία" },
];

const GALLERY = [
  { src: photo3.url, alt: "Ξαπλώστρες με ομπρέλες macramé στην παραλία του JOJO Porto Rafti" },
  { src: photo2.url, alt: "Ξαπλώστρες δίπλα στη θάλασσα στο beach bar JOJO στο Πόρτο Ράφτη" },
  { src: photo4.url, alt: "Τραπέζια στο deck του JOJO Porto Rafti με θέα στο ηλιοβασίλεμα" },
  { src: photo1.url, alt: "Ο εσωτερικός χώρος του JOJO Porto Rafti με ξύλινο deck και θέα στη θάλασσα" },
  { src: photo5.url, alt: "Η είσοδος του beach bar JOJO στο Πόρτο Ράφτη" },
];


const REVIEWS = [
  {
    name: "Andrea Dawson",
    text: "Περάσαμε ένα υπέροχο απόγευμα χαλαρώνοντας σε ξαπλώστρα στην παραλία. Ο σερβιτόρος μας ήταν καταπληκτικός — προσεκτικός, ευγενικός και αποτελεσματικός όλο το απόγευμα. Τα ποτά ήταν εξαιρετικά, το φαγητό νόστιμο, και όλη η ατμόσφαιρα υπέροχη. Σίγουρα θα ξανάρθουμε!",
  },
  { name: "Dimitris Marantis", text: "Ωραίο beach bar 🌊" },
  { name: "Bo Pro", text: "Υπέροχα cocktails, υπέροχο προσωπικό!" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/jojoportorafti" },
  { label: "Facebook", href: "https://www.facebook.com/p/JOJO-Porto-Rafti-61582420581969/" },
  { label: "TikTok", href: "https://www.tiktok.com/@jojoportorafti" },
  { label: "YouTube", href: "https://www.youtube.com/@JoJoPortoRafti" },
];

function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      aria-hidden="true"
      className={`h-3 w-24 text-ocean ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M2 8c6-6 12-6 18 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 18 0" />
    </svg>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-8 text-center">
      <p className="script-accent text-lg">{kicker}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-3 flex justify-center">
        <Wave />
      </div>
    </header>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Top nav ---------- */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#hero" className="flex min-w-0 items-center gap-2">
            <img
              src={logoImg}
              alt="JOJO Porto Rafti"
              width={816}
              height={816}
              loading="lazy"
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span
              className={`truncate text-sm font-semibold tracking-[0.18em] ${
                scrolled ? "text-foreground" : "text-white drop-shadow"
              }`}
            >
              JOJO
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-ocean ${
                  scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            className="rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03] md:hidden"
          >
            Καλέστε
          </a>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Beach bar JOJO στο Πόρτο Ράφτη το ηλιοβασίλεμα"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

        <div className="mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-5 py-28 text-center">
          <img
            src={logoImg}
            alt="Λογότυπο JOJO Porto Rafti"
            width={816}
            height={816}
            className="fade-up h-28 w-28 object-contain sm:h-36 sm:w-36"
          />
          <h1 className="fade-up mt-5 text-4xl leading-tight text-white sm:text-6xl">
            JOJO <span className="italic text-champagne">Porto Rafti</span>
          </h1>
          <p className="fade-up mt-4 max-w-xl text-balance text-lg text-white/90 sm:text-xl">
            Ο απόλυτος καλοκαιρινός προορισμός στο Πόρτο Ράφτη
          </p>
          <p className="fade-up mt-2 text-sm tracking-[0.2em] text-champagne uppercase">
            Beach bar όλη μέρα 🏖️
          </p>

          <div className="fade-up mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={PHONE_TEL}
              className="rounded-full bg-ocean px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              Καλέστε μας
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/95 px-7 py-3.5 text-base font-semibold text-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
            >
              Δείτε στον χάρτη
            </a>
          </div>

          <p className="fade-up mt-8 text-sm text-white/80">
            Ανοιχτά καθημερινά · 09:00 – 03:00
          </p>
        </div>
      </header>

      <main>
        {/* ---------- Σχετικά ---------- */}
        <section id="about" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
          <SectionTitle kicker="beach bar" title="Σχετικά με το JOJO" />
          <div className="space-y-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Το JOJO είναι ένα all day beach bar στο Πόρτο Ράφτη, λίγα μόλις λεπτά από την
              Αθήνα. Ξαπλώστρες δίπλα στο κύμα, απαλή μουσική και η θάλασσα μπροστά σου — εδώ η
              μέρα ξεκινάει χαλαρά με καφέ στον ήλιο και τελειώνει αργά το βράδυ με ποτό κάτω
              από τα αστέρια.
            </p>
            <p>
              Από το πρωί στις 9 μέχρι τις 3 τα ξημερώματα, σε περιμένουν φροντισμένα cocktails,
              νόστιμο φαγητό και μια κουζίνα που δουλεύει όλη μέρα. Είτε έρθεις για μπάνιο και
              μεσημεριανό, είτε για sunset drinks με παρέα, βρίσκεις πάντα τη θέση σου.
            </p>
            <p>
              Αυτό που κρατάει τον κόσμο εδώ είναι η φιλοξενία: ζεστή, προσεγμένη εξυπηρέτηση
              που σε κάνει να νιώθεις οικεία από την πρώτη στιγμή. Γι' αυτό το JOJO δεν είναι
              απλώς μια στάση στη διαδρομή — είναι ο καλοκαιρινός σου προορισμός.
            </p>
          </div>
        </section>

        {/* ---------- Gallery ---------- */}
        <section id="gallery" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="στιγμές" title="Gallery" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {GALLERY.map((img, i) => (
                <figure
                  key={img.alt}
                  className={`group overflow-hidden rounded-3xl shadow-soft ${
                    i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Events ----------
            TEMPLATE SECTION: no real event data yet.
            Add upcoming events to the `events` array below (title, date, time,
            description, optional image) and the grid will render them.
            The empty state shows until then. */}
        <section id="events" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <SectionTitle kicker="μουσική & βραδιές" title="Events" />
          <div className="surface-card mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
            <Wave className="mx-auto" />
            <h3 className="mt-4 text-2xl">Έρχονται σύντομα</h3>
            <p className="mt-3 text-muted-foreground">
              Ετοιμάζουμε τις καλοκαιρινές μας βραδιές με μουσική, DJ sets και ξεχωριστά
              parties δίπλα στη θάλασσα. Ακολούθησέ μας στα social ή πάρε μας τηλέφωνο για το
              πρόγραμμα.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://www.instagram.com/jojoportorafti"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Δες το Instagram
              </a>
              <a
                href={PHONE_TEL}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Καλέστε μας
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Κριτικές ---------- */}
        <section id="reviews" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="τι λένε οι επισκέπτες" title="Κριτικές" />
            <div className="mb-10 flex justify-center">
              <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-soft">
                <span className="text-2xl font-semibold">4.2</span>
                <span className="text-xl text-champagne-deep">★</span>
                <span className="text-sm text-muted-foreground">139 κριτικές</span>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <blockquote key={r.name} className="surface-card flex flex-col p-7">
                  <div className="text-champagne-deep" aria-label="5 αστέρια">
                    ★★★★★
                  </div>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">“{r.text}”</p>
                  <footer className="mt-6 text-sm font-semibold">{r.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Τοποθεσία & Επικοινωνία ---------- */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <SectionTitle kicker="θα σε βρούμε εδώ" title="Τοποθεσία & Επικοινωνία" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-card overflow-hidden">
              <iframe
                title="Χάρτης — JOJO Porto Rafti, Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 sm:h-full sm:min-h-[420px]"
              />
            </div>

            <div className="surface-card p-7 sm:p-9">
              <dl className="space-y-6 text-base">
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    Διεύθυνση
                  </dt>
                  <dd className="mt-1">Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη, Αθήνα, 19003</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    Τηλέφωνο
                  </dt>
                  <dd className="mt-1">
                    <a href={PHONE_TEL} className="font-semibold text-ocean hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:jojoportorafti@gmail.com"
                      className="font-semibold text-ocean hover:underline"
                    >
                      jojoportorafti@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    Ώρες λειτουργίας
                  </dt>
                  <dd className="mt-1">Ανοιχτά καθημερινά, 09:00 – 03:00</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ocean px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  Πάρτε οδηγίες
                </a>
                <a
                  href={PHONE_TEL}
                  className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Καλέστε μας
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Ακολουθήστε μας
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-ocean-soft"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
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
        <p className="script-accent mt-1 text-lg">beach bar</p>
        <p className="mt-4 text-xs text-primary-foreground/70">
          Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη · Καθημερινά 09:00 – 03:00
        </p>
      </footer>

      {/* ---------- Floating call + WhatsApp (mobile-first) ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
        <div className="flex gap-3 sm:flex-col">
          <a
            href={PHONE_TEL}
            className="flex-1 rounded-full bg-ocean px-5 py-3 text-center text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            📞 Καλέστε μας
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
      <div className="h-16 sm:h-0" aria-hidden="true" />
    </div>
  );
}
