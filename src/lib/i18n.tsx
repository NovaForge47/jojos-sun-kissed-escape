import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "el" | "en";

const STORAGE_KEY = "jojo-lang";

export const content = {
  el: {
    nav: [
      { href: "#about", label: "Σχετικά" },
      { href: "#gallery", label: "Gallery" },
      { href: "#events", label: "Events" },
      { href: "#reviews", label: "Κριτικές" },
      { href: "#contact", label: "Επικοινωνία" },
    ],
    navCall: "Καλέστε",
    hero: {
      logoAlt: "Λογότυπο JOJO Porto Rafti",
      imageAlt: "Beach bar JOJO στο Πόρτο Ράφτη το ηλιοβασίλεμα",
      tagline: "Ο απόλυτος καλοκαιρινός προορισμός στο Πόρτο Ράφτη",
      subtext: "Beach bar όλη μέρα 🏖️",
      call: "Καλέστε μας",
      map: "Δείτε στον χάρτη",
      hours: "Ανοιχτά καθημερινά · 09:00 – 03:00",
    },
    about: {
      kicker: "beach bar",
      title: "Σχετικά με το JOJO",
      paragraphs: [
        "Το JOJO είναι ένα all day beach bar στο Πόρτο Ράφτη, λίγα μόλις λεπτά από την Αθήνα. Ξαπλώστρες δίπλα στο κύμα, απαλή μουσική και η θάλασσα μπροστά σου — εδώ η μέρα ξεκινάει χαλαρά με καφέ στον ήλιο και τελειώνει αργά το βράδυ με ποτό κάτω από τα αστέρια.",
        "Από το πρωί στις 9 μέχρι τις 3 τα ξημερώματα, σε περιμένουν φροντισμένα cocktails, νόστιμο φαγητό και μια κουζίνα που δουλεύει όλη μέρα. Είτε έρθεις για μπάνιο και μεσημεριανό, είτε για sunset drinks με παρέα, βρίσκεις πάντα τη θέση σου.",
        "Αυτό που κρατάει τον κόσμο εδώ είναι η φιλοξενία: ζεστή, προσεγμένη εξυπηρέτηση που σε κάνει να νιώθεις οικεία από την πρώτη στιγμή. Γι' αυτό το JOJO δεν είναι απλώς μια στάση στη διαδρομή — είναι ο καλοκαιρινός σου προορισμός.",
      ],
    },
    gallery: {
      kicker: "στιγμές",
      title: "Gallery",
      alts: [
        "Ξαπλώστρες με ομπρέλες macramé στην παραλία του JOJO Porto Rafti",
        "Ξαπλώστρες δίπλα στη θάλασσα στο beach bar JOJO στο Πόρτο Ράφτη",
        "Τραπέζια στο deck του JOJO Porto Rafti με θέα στο ηλιοβασίλεμα",
        "Ο εσωτερικός χώρος του JOJO Porto Rafti με ξύλινο deck και θέα στη θάλασσα",
        "Η είσοδος του beach bar JOJO στο Πόρτο Ράφτη",
      ],
    },
    events: {
      kicker: "μουσική & βραδιές",
      title: "Events",
      soon: "Έρχονται σύντομα",
      text: "Ετοιμάζουμε τις καλοκαιρινές μας βραδιές με μουσική, DJ sets και ξεχωριστά parties δίπλα στη θάλασσα. Ακολούθησέ μας στα social ή πάρε μας τηλέφωνο για το πρόγραμμα.",
      instagram: "Δες το Instagram",
      call: "Καλέστε μας",
    },
    reviews: {
      kicker: "τι λένε οι επισκέπτες",
      title: "Κριτικές",
      count: "139 κριτικές",
      starsLabel: "5 αστέρια",
      items: [
        {
          name: "Andrea Dawson",
          text: "Περάσαμε ένα υπέροχο απόγευμα χαλαρώνοντας σε ξαπλώστρα στην παραλία. Ο σερβιτόρος μας ήταν καταπληκτικός — προσεκτικός, ευγενικός και αποτελεσματικός όλο το απόγευμα. Τα ποτά ήταν εξαιρετικά, το φαγητό νόστιμο, και όλη η ατμόσφαιρα υπέροχη. Σίγουρα θα ξανάρθουμε!",
        },
        { name: "Dimitris Marantis", text: "Ωραίο beach bar 🌊" },
        { name: "Bo Pro", text: "Υπέροχα cocktails, υπέροχο προσωπικό!" },
      ],
    },
    contact: {
      kicker: "θα σε βρούμε εδώ",
      title: "Τοποθεσία & Επικοινωνία",
      mapTitle: "Χάρτης — JOJO Porto Rafti, Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη",
      addressLabel: "Διεύθυνση",
      address: "Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη, Αθήνα, 19003",
      phoneLabel: "Τηλέφωνο",
      emailLabel: "Email",
      hoursLabel: "Ώρες λειτουργίας",
      hours: "Ανοιχτά καθημερινά, 09:00 – 03:00",
      directions: "Πάρτε οδηγίες",
      call: "Καλέστε μας",
      followLabel: "Ακολουθήστε μας",
    },
    footer: {
      script: "beach bar",
      line: "Λεωφόρος Αυλακίου 62, Πόρτο Ράφτη · Καθημερινά 09:00 – 03:00",
    },
    floatingCall: "📞 Καλέστε μας",
    langLabel: "Γλώσσα",
  },
  en: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#gallery", label: "Gallery" },
      { href: "#events", label: "Events" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ],
    navCall: "Call",
    hero: {
      logoAlt: "JOJO Porto Rafti logo",
      imageAlt: "JOJO beach bar in Porto Rafti at sunset",
      tagline: "The ultimate summer destination in Porto Rafti",
      subtext: "Beach bar all day 🏖️",
      call: "Call us",
      map: "See on the map",
      hours: "Open daily · 09:00 – 03:00",
    },
    about: {
      kicker: "beach bar",
      title: "About JOJO",
      paragraphs: [
        "JOJO is an all-day beach bar in Porto Rafti, just minutes from Athens. Sunbeds by the water, easy music and the sea right in front of you — here the day starts slowly with coffee in the sun and ends late at night with a drink under the stars.",
        "From 9 in the morning until 3 after midnight you'll find carefully made cocktails, tasty food and a kitchen that runs all day. Whether you come for a swim and lunch or for sunset drinks with friends, there is always a spot for you.",
        "What keeps people coming back is the hospitality: warm, attentive service that makes you feel at home from the very first moment. That's why JOJO isn't just a stop along the way — it's your summer destination.",
      ],
    },
    gallery: {
      kicker: "moments",
      title: "Gallery",
      alts: [
        "Sunbeds with macramé umbrellas on the beach at JOJO Porto Rafti",
        "Sunbeds by the sea at the JOJO beach bar in Porto Rafti",
        "Tables on the JOJO Porto Rafti deck with a sunset view",
        "The interior of JOJO Porto Rafti with a wooden deck and sea view",
        "The entrance of the JOJO beach bar in Porto Rafti",
      ],
    },
    events: {
      kicker: "music & nights",
      title: "Events",
      soon: "Coming soon",
      text: "We're putting together our summer nights with music, DJ sets and special parties by the sea. Follow us on social media or give us a call for the schedule.",
      instagram: "See our Instagram",
      call: "Call us",
    },
    reviews: {
      kicker: "what our guests say",
      title: "Reviews",
      count: "139 reviews",
      starsLabel: "5 stars",
      items: [
        {
          name: "Andrea Dawson",
          text: "We spent a wonderful afternoon relaxing on a sunbed on the beach. Our waiter was fantastic — attentive, polite and efficient the whole afternoon. The drinks were excellent, the food delicious, and the whole atmosphere lovely. We'll definitely be back!",
        },
        { name: "Dimitris Marantis", text: "Lovely beach bar 🌊" },
        { name: "Bo Pro", text: "Amazing cocktails, amazing staff!" },
      ],
    },
    contact: {
      kicker: "find us here",
      title: "Location & Contact",
      mapTitle: "Map — JOJO Porto Rafti, Leoforos Avlakiou 62, Porto Rafti",
      addressLabel: "Address",
      address: "Leoforos Avlakiou 62, Porto Rafti, Athens, 19003",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening hours",
      hours: "Open daily, 09:00 – 03:00",
      directions: "Get directions",
      call: "Call us",
      followLabel: "Follow us",
    },
    footer: {
      script: "beach bar",
      line: "Leoforos Avlakiou 62, Porto Rafti · Daily 09:00 – 03:00",
    },
    floatingCall: "📞 Call us",
    langLabel: "Language",
  },
} as const;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof content)["el"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");

  useEffect(() => {
    let next: Lang | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "el" || stored === "en") next = stored;
    } catch {
      /* storage unavailable */
    }
    if (!next && typeof navigator !== "undefined") {
      const prefersEnglish = navigator.languages?.some((l) =>
        l.toLowerCase().startsWith("en"),
      );
      const prefersGreek = navigator.languages?.some((l) =>
        l.toLowerCase().startsWith("el"),
      );
      if (prefersEnglish && !prefersGreek) next = "en";
    }
    if (next && next !== "el") setLangState(next);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: content[lang] as (typeof content)["el"] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
