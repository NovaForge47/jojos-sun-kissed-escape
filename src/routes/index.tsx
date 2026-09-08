import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { LangToggle, SectionTitle, Wave } from "@/components/sections";


import heroAsset from "@/assets/hero-sunset.jpg.asset.json";
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
const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?client=safari&hs=EltV&sca_esv=d777865217e22ae8&hl=en-gr&sxsrf=APpeQnsMJYrHFVn_1NusD0fGTX0tFLwHhg:1788442797076&q=buddha+all-day+beach+bar+restaurant+porto+rafti+reviews&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4r9o8EtIr7w4auRdy15uM4Z4EHnbQu6rvVfO9wYzZ2msJbW-m2eVaFxBbTPfmUdG2Ey6UXDIdCvfr5q3ED1pp-sYosbGgf0ddhLt03GGUlGK0E6BmwDE7ISvc9eESAmKfDSoPCcMeP61r1GDt4_sN5Uzfk3HBIgh-mGgg_tSyI2upuY7Mifwx9G8KEldZmpOzNXx_REX_zmdltbtWYnuyiHnaPXmc&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_50HyrpuqFI335dM5CnVEHF9MSCyffo3V-4PSzLyvtyd8h9xJA7E_3bFmCD5MdVwV4DO9IVKTz-ZJwRpuMsKeyb5n0HPh5pXEnyNdAoJbDPvn4bcv3_VMYjVEUjgMBY1bjdIGhU%3D&sa=X&ved=2ahUKEwjQnfvMxNKWAxUHRvEDHct3CbcQxKsJKAF6BAgTEAE&ictx=1";
const TRIPADVISOR_REVIEW_LINK =
  "https://www.tripadvisor.com/UserReviewEdit-g1137879-d34407116-Jojo_Beach_Porto_Rafti-Porto_Rafti_East_Attica_Region_Attica.html";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JOJO Porto Rafti | Beach Bar στο Πόρτο Ράφτη" },
      {
        name: "description",
        content:
          "JOJO Porto Rafti beach bar: ξαπλώστρες στη θάλασσα, cocktails και φαγητό στο Πόρτο Ράφτη. Ανοιχτά καθημερινά 09:00–03:00. Τηλ. 694 931 8998.",
      },
      { property: "og:title", content: "JOJO Porto Rafti | Beach Bar στο Πόρτο Ράφτη" },
      {
        property: "og:description",
        content:
          "Ο απόλυτος καλοκαιρινός προορισμός στο Πόρτο Ράφτη. Beach bar όλη μέρα, καθημερινά 09:00–03:00.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:site_name", content: "JOJO Porto Rafti" },
      { property: "og:url", content: "https://jojo.gr/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JOJO Porto Rafti | Beach Bar στο Πόρτο Ράφτη" },
      {
        name: "twitter:description",
        content: "Beach bar όλη μέρα στο Πόρτο Ράφτη. Ξαπλώστρες, cocktails και φαγητό δίπλα στο κύμα.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "geo.region", content: "GR-A1" },
      { name: "geo.placename", content: "Πόρτο Ράφτη" },
      { name: "geo.position", content: "37.8836;24.0140" },
      { name: "ICBM", content: "37.8836, 24.0140" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://jojo.gr/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          "@id": "https://jojo.gr/#business",
          name: "JOJO Porto Rafti",
          alternateName: "JOJO Beach Bar Πόρτο Ράφτη",
          description:
            "All day beach bar στο Πόρτο Ράφτη με ξαπλώστρες στη θάλασσα, cocktails και φαγητό, ανοιχτά καθημερινά 09:00–03:00.",
          url: "https://jojo.gr/",
          image: [OG_IMAGE, "https://jojo.gr" + photo3.url],
          telephone: "+306949318998",
          email: "jojoportorafti@gmail.com",
          priceRange: "€€",
          currenciesAccepted: "EUR",
          servesCuisine: ["Cocktails", "Μεσογειακή", "Θαλασσινά"],
          areaServed: ["Πόρτο Ράφτη", "Μαρκόπουλο", "Αθήνα", "Ανατολική Αττική"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Λεωφόρος Αυλακίου 62",
            addressLocality: "Πόρτο Ράφτη",
            addressRegion: "Αττική",
            postalCode: "19003",
            addressCountry: "GR",
          },
          geo: { "@type": "GeoCoordinates", latitude: 37.8836, longitude: 24.014 },
          hasMap: MAPS_LINK,
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "03:00",
            },
          ],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "JOJO Porto Rafti",
          url: "https://jojo.gr/",
          inLanguage: "el",
        }),
      },
    ],

  }),
});

const GALLERY_SRC = [photo3.url, photo2.url, photo4.url, photo1.url, photo5.url];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/jojoportorafti" },
  { label: "Facebook", href: "https://www.facebook.com/p/JOJO-Porto-Rafti-61582420581969/" },
  { label: "TikTok", href: "https://www.tiktok.com/@jojoportorafti" },
  { label: "YouTube", href: "https://www.youtube.com/@JoJoPortoRafti" },
];

function GalleryCarousel({ alts }: { alts: readonly string[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.firstElementChild?.clientWidth ?? el.clientWidth;
    el.scrollBy({ left: dir * (step + 16), behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-lg shadow-soft transition-colors hover:bg-card sm:flex";

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {GALLERY_SRC.map((src, i) => (
          <li
            key={src}
            className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
          >
            <figure className="group overflow-hidden rounded-3xl shadow-soft">
              <img
                src={src}
                alt={alts[i]}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollBy(-1)}
        className={`${arrow} left-2`}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollBy(1)}
        className={`${arrow} right-2`}
      >
        ›
      </button>
    </div>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

function PageContent() {
  const { lang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background" lang={lang}>
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
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden items-center gap-6 md:flex">
              {t.nav.map((item) =>
                item.href === "/menu" ? (
                  <Link
                    key={item.href}
                    to="/menu"
                    className={`text-sm transition-colors hover:text-ocean ${
                      scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-colors hover:text-ocean ${
                      scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow"
                    }`}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>
            <LangToggle scrolled={scrolled} />
            <a
              href={PHONE_TEL}
              className="rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03] md:hidden"
            >
              {t.navCall}
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroAsset.url}
          alt={t.hero.imageAlt}
          width={1179}
          height={771}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

        <div className="mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-5 py-28 text-center">
          <img
            src={logoImg}
            alt={t.hero.logoAlt}
            width={816}
            height={816}
            className="fade-up h-28 w-28 object-contain sm:h-36 sm:w-36"
          />
          <h1 className="fade-up mt-5 text-4xl leading-tight text-white sm:text-6xl">
            JOJO <span className="italic text-champagne">Porto Rafti</span>
          </h1>
          <p className="fade-up mt-4 max-w-xl text-balance text-lg text-white/90 sm:text-xl">
            {t.hero.tagline}
          </p>
          <p className="fade-up mt-2 text-sm tracking-[0.2em] text-champagne uppercase">
            {t.hero.subtext}
          </p>

          <div className="fade-up mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={PHONE_TEL}
              className="rounded-full bg-ocean px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              {t.hero.call}
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
            >
              {t.hero.map}
            </a>
          </div>

          <p className="fade-up mt-8 text-sm text-white/80">{t.hero.hours}</p>
        </div>
      </header>

      <main>
        {/* ---------- Σχετικά ---------- */}
        <section id="about" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
          <SectionTitle kicker={t.about.kicker} title={t.about.title} />
          <div className="space-y-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>

        {/* ---------- Menu teaser ---------- */}
        <section id="menu" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-2xl px-5 text-center">
            <SectionTitle title={t.menu.title} />
            <p className="leading-relaxed text-muted-foreground sm:text-lg">
              {t.menuCta.text}
            </p>
            <Link
              to="/menu"
              className="mt-8 inline-block rounded-full bg-ocean px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              {t.menuCta.button}
            </Link>
          </div>
        </section>

        {/* ---------- Gallery ---------- */}
        <section id="gallery" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker={t.gallery.kicker} title={t.gallery.title} />
            <GalleryCarousel alts={t.gallery.alts} />
          </div>
        </section>

        {/* ---------- Events ----------
            TEMPLATE SECTION: no real event data yet.
            Add upcoming events to an `events` array (title, date, time,
            description, optional image) and render them in the grid.
            The empty state shows until then. */}
        <section id="events" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <SectionTitle kicker={t.events.kicker} title={t.events.title} />
          <div className="surface-card mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
            <Wave className="mx-auto" />
            <h3 className="mt-4 text-2xl">{t.events.soon}</h3>
            <p className="mt-3 text-muted-foreground">{t.events.text}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://www.instagram.com/jojoportorafti"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                {t.events.instagram}
              </a>
              <a
                href={PHONE_TEL}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                {t.events.call}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Κριτικές ---------- */}
        <section id="reviews" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker={t.reviews.kicker} title={t.reviews.title} />
            <div className="mb-10 flex justify-center">
              <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-soft">
                <span className="text-2xl font-semibold">4.2</span>
                <span className="text-xl text-champagne-deep">★</span>
                <span className="text-sm text-muted-foreground">{t.reviews.count}</span>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {t.reviews.items.map((r) => (
                <blockquote key={r.name} className="surface-card flex flex-col p-7">
                  <div className="text-champagne-deep" aria-label={t.reviews.starsLabel}>
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
          <SectionTitle kicker={t.contact.kicker} title={t.contact.title} />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-card overflow-hidden">
              <iframe
                title={t.contact.mapTitle}
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
                    {t.contact.addressLabel}
                  </dt>
                  <dd className="mt-1">{t.contact.address}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {t.contact.phoneLabel}
                  </dt>
                  <dd className="mt-1">
                    <a href={PHONE_TEL} className="font-semibold text-ocean hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {t.contact.emailLabel}
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
                    {t.contact.hoursLabel}
                  </dt>
                  <dd className="mt-1">{t.contact.hours}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ocean px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  {t.contact.directions}
                </a>
                <a
                  href={PHONE_TEL}
                  className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  {t.contact.call}
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {t.contact.followLabel}
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
        {/* ---------- Αφήστε κριτική ---------- */}
        <section id="leave-review" className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle kicker={t.leaveReview.kicker} title={t.leaveReview.title} />
            <div className="surface-card px-6 py-10 text-center sm:px-10">
              <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
                {t.leaveReview.text}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  ★ {t.leaveReview.google}
                </a>
                <a
                  href={TRIPADVISOR_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  ★ {t.leaveReview.tripadvisor}
                </a>
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
        <p className="script-accent mt-1 text-lg">{t.footer.script}</p>
        <p className="mt-4 text-xs text-primary-foreground/70">{t.footer.line}</p>
      </footer>

    </div>
  );
}

