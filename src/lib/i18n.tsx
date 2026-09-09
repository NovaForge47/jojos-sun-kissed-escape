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
      { href: "/menu", label: "Μενού" },
      { href: "#gallery", label: "Gallery" },
      { href: "/events", label: "Events" },
      { href: "#reviews", label: "Κριτικές" },
      { href: "#contact", label: "Επικοινωνία" },
    ],
    menuPage: { backHome: "← Αρχική σελίδα" },
    menuCta: {
      text: "Ξεκινήστε τη μέρα σας με καφέ στο κύμα, απολαύστε δροσερά cocktails, φρέσκους χυμούς και λαχταριστές γεύσεις από το πρωί ως τα μεσάνυχτα — όλα δίπλα στη θάλασσα.",
      button: "Δείτε το μενού",
    },
    navCall: "Καλέστε",
    hero: {
      logoAlt: "Λογότυπο JOJO Porto Rafti",
      imageAlt: "Beach bar JOJO στο Πόρτο Ράφτη το ηλιοβασίλεμα",
      tagline: "Ο απόλυτος καλοκαιρινός προορισμός στο Πόρτο Ράφτη",
      subtext: "Beach bar όλη μέρα 🏖️",
      call: "Καλέστε μας",
      map: "Δείτε στον χάρτη",
      events: "Upcoming Events",
      hours: "Ανοιχτά καθημερινά · 09:00 – 03:00",
    },
    eventsPage: {
      kicker: "μουσική & βραδιές",
      title: "Upcoming Events",
      intro:
        "Οι επόμενες βραδιές μας στο JOJO Porto Rafti. Για κρατήσεις καλέστε στο 694 931 8998.",
      cta: "Δείτε τα events",
      alts: [
        "Αφίσα: Latin Live Party με Cuban Dancers Show, Σάββατο 12 Σεπτεμβρίου, 21:00",
        "Αφίσα: Live Beach Party με τον Trannos, Κυριακή 13 Σεπτεμβρίου, 17:00",
      ],
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
    menu: {
      title: "Jojo Menu",
      categories: [
        {
          title: "ΚΑΦΕΔΕΣ / COFFEES",
          items: [
            { name: "Espresso (μονό / διπλό)", description: "single / double", price: "3,50 € / 4,50 €" },
            { name: "Espresso macchiato", price: "3,50 €" },
            { name: "Freddo espresso / cappuccino", price: "5,00 €" },
            { name: "Cappuccino (μονό / διπλό)", description: "single / double", price: "4,00 € / 5,00 €" },
            { name: "Cappuccino latte", price: "5,00 €" },
            { name: "Ελληνικό μονός / διπλός", description: "Greek coffee single / double", price: "3,50 € / 4,00 €" },
            { name: "Στιγμιαίος (φραπέ-νες)", description: "Frappé / Nescafé", price: "5,00 €" },
            { name: "Κλασσική Σοκολάτα", description: "Classic chocolate", price: "5,00 €" },
            { name: "Freddocino", price: "7,00 €" },
            { name: "Mochaccino", price: "6,00 €" },
            { name: "Έξτρα Γεύσεις", description: "Extra Flavors", price: "0,50 €" },
            { name: "Γάλα σόγιας, γάλα αμυγδάλου", description: "Soy milk, almond milk", price: "0,50 €" },
            { name: "Milkshake", description: "Βανίλια, σοκολάτα, μπανάνα, φράουλα / Vanilla, chocolate, banana, strawberry", price: "7,00 €" },
          ],
        },
        {
          title: "ΧΥΜΟΙ / JUICE",
          items: [
            { name: "Φυσικός χυμός πορτοκάλι", description: "Natural orange juice", price: "7,00 €" },
            { name: "Φυσικός χυμός ανάμεικτος με φρούτα εποχής", description: "Natural juice mixed with seasonal fruits", price: "8,00 €" },
            { name: "Χυμοί γεύσεις", description: "πορτοκάλι, λεμόνι, βύσσινο, ροδάκινο, ανανά, μήλο, βατόμουρο / orange, lemon, sour cherry, peach, pineapple, apple, raspberry", price: "4,00 €" },
          ],
        },
        {
          title: "SMOOTHIES",
          items: [
            { name: "Σμέουρο, μύρτιλο, μάνγκο", price: "8,00 €" },
            { name: "Φράουλα, ροδάκινο, μπανάνα", price: "8,00 €" },
            { name: "Ανανάς, αχλάδι, μάνγκο", price: "8,00 €" },
            { name: "Μήλο, σπανάκι, καρότο", price: "8,00 €" },
          ],
        },
        {
          title: "ΑΝΑΨΥΚΤΙΚΑ / REFRESHMENTS",
          items: [
            { name: "Pepsi / Pepsi Max", price: "4,50 €" },
            { name: "Πορτοκαλάδα (κόκκινη / μπλε)", price: "4,50 €" },
            { name: "Seven Up", price: "4,50 €" },
            { name: "Σόδα", price: "4,50 €" },
            { name: "Σόδα Γκόρντον", price: "5,50 €" },
            { name: "Τόνικ", price: "4,50 €" },
            { name: "Λεμονάδα", price: "4,50 €" },
            { name: "Νερό εμφιαλωμένο 0,5L", price: "0,50 €" },
            { name: "Perrier 330ml", price: "5,00 €" },
            { name: "Σουρωτή / Souroti 250ml", price: "5,00 €" },
          ],
        },
        {
          title: "ΚΡΥΟ ΤΣΑΪ / ICE TEA",
          items: [
            { name: "Lipton 500ml", price: "5,50 €" },
            { name: "Lipton Zero λεμόνι", description: "Lipton Zero lemon", price: "5,50 €" },
            { name: "Ροδάκινο, λεμόνι, πράσινο", description: "Peach, lemon, green tea", price: "" },
            { name: "Organic Tea / Βιολογικό Τσάι", description: "zero sugar / Χωρίς ζάχαρη", price: "6,00 €" },
          ],
        },
        {
          title: "RTD’s",
          items: [
            { name: "Red Bull 250ml", price: "7,00 €" },
            { name: "Gordon Space 275ml", price: "8,00 €" },
            { name: "Μηλοκλέφτης 330ml", price: "6,00 €" },
            { name: "Hell 250ml", price: "6,00 €" },
          ],
        },
        {
          title: "ΠΡΩΙΝΟ / BREAKFAST",
          items: [
            { name: "Ελληνικό / Kayiana", description: "3 αυγά, ελαιόλαδο, ντομάτα, φέτα, καγιανάς, 2 φέτες ψημένο ψωμί. Συνοδεύεται από ανάμεικτη σαλάτα / 3 eggs, olive oil, tomato, feta cheese, Greek-style scrambled eggs with tomato, 2 grilled slices of bread. Served with mixed salad", price: "11,00 €" },
            { name: "Jojo (ομελέτα)", description: "Ομελέτα (3 αυγά), ζαμπόν, μπέικον, πιπεριά, ντομάτα, τυρί Gouda, φέτα, μαϊντανό, 2 φέτες ψημένο ψωμί. Συνοδεύεται από ανάμεικτη σαλάτα / Omelette (3 eggs), ham, bacon, pepper, tomato, Gouda cheese, feta cheese, parsley, 2 grilled slices of bread. Served with mixed salad", price: "12,00 €" },
            { name: "Μάτια (3 αυγά)", description: "2 φέτες ψημένο ψωμί. Συνοδεύεται από ανάμεικτη σαλάτα / 2 slices of toasted bread. Accompanied by mixed salad", price: "9,00 €" },
            { name: "English Breakfast", description: "3 αυγά, μπέικον, λουκάνικο, ντομάτα, 2 φέτες ψημένο ψωμί. Συνοδεύεται από ανάμεικτη σαλάτα / 3 eggs, bacon, sausage, tomato, 2 slices of toasted bread. Accompanied by mixed salad", price: "14,00 €" },
          ],
        },
        {
          title: "ΤΟΣΤ / TOAST",
          note: "Της επιλογής σας σίτου ή ολικής / Your choice of white or wholemeal bread",
          items: [
            { name: "Τόστ ζαμπόν τυρί Gouda", description: "Ham toast, Gouda cheese (served with chips)", price: "4,00 €" },
            { name: "Τόστ γαλοπούλα τυρί Gouda", description: "Turkey toast, Gouda cheese (served with chips)", price: "4,00 €" },
            { name: "Τόστ special", description: "τυρί Gouda, κοτόπουλο, αυγό, ντομάτα (συνοδεύεται από πατατάκια) / Gouda cheese, chicken, egg, tomato (served with chips)", price: "6,00 €" },
          ],
        },
        {
          title: "ΟΡΕΚΤΙΚΑ / APPETIZERS",
          items: [
            { name: "Πατάτες τηγανητές", description: "French fries", price: "5,00 €" },
            { name: "Πατάτες τηγανητές με μπέικον, τυρί cheddar, σως του σεφ", description: "Fries with bacon, cheddar cheese, chef's sauce", price: "7,00 €" },
            { name: "Spring Rolls", description: "Συνοδεύονται από γλυκόξινη σάλτσα / Served with sweet and sour sauce", price: "7,00 €" },
            { name: "Φλογέρες τυρί", description: "Συνοδεύονται από σως σεφ, σως καίσαρα, κέτσαπ / Served with chef's sauce, caesar's sauce, ketchup", price: "7,00 €" },
          ],
        },
        {
          title: "ΜΠΡΟΥΣΚΕΤΕΣ / BRUSCHETTA",
          items: [
            { name: "Jojo (4 τεμάχια)", description: "τυρί κρέμα, προσούτο, chips μπέικον, ντοματίνια, ρόκα, τυρί παρμεζάνα, κρέμα μπαλσάμικου / cream cheese, prosciutto, chips bacon, cherry tomatoes, arugula, parmesan, balsamic cream", price: "12,00 €" },
            { name: "Σολομός (4 τεμάχια)", description: "τυρί κρέμα, καπνιστός σολομός, αβοκάντο, αγγούρι, κρέμα μπαλσάμικου με γεύση πορτοκαλιού / cream cheese, smoked salmon, avocado, cucumber, orange-flavored balsamic cream", price: "14,00 €" },
          ],
        },
        {
          title: "ΠΛΑΤΟ / PLATE",
          items: [
            { name: "Ποικιλία αλλαντικών και τυριών (2 άτομα)", description: "γκοργκοντζόλα, παρμεζάνα, κασέρι, γραβιέρα, σαλάμι Ιταλίας, προσούτο, μαρμελάδα, ξηροί καρποί, κριτσίνια / Assortment of cold cuts and cheeses (2 people): gorgonzola, parmesan, kasseri, gruyere, Italian salami, prosciutto, jam, nuts, breadsticks", price: "15,00 €" },
            { name: "Ποικιλία αλλαντικών και τυριών (4 άτομα)", description: "γκοργκοντζόλα, παρμεζάνα, κασέρι, γραβιέρα, σαλάμι Ιταλίας, προσούτο, μαρμελάδα, ξηροί καρποί, κριτσίνια / Assortment of cold cuts and cheeses (4 people): gorgonzola, parmesan, kasseri, gruyere, Italian salami, prosciutto, jam, nuts, breadsticks", price: "22,00 €" },
          ],
        },
        {
          title: "ΠΙΝΖΑ / PINZA",
          note: "Τα μανιτάρια είναι φρέσκα / Mushrooms are fresh",
          items: [
            { name: "Μαργαρίτα / Margarita", description: "Σάλτσα ντομάτας, τυρί μοτσαρέλα, βασιλικός / Tomato sauce, mozzarella cheese, basil", price: "11,00 €" },
            { name: "Jojo", description: "Σάλτσα ντομάτας, τυρί μοτσαρέλα, παρμεζάνα, προσούτο, ρόκα / Tomato sauce, mozzarella cheese, parmesan, prosciutto, arugula", price: "14,00 €" },
            { name: "Ελληνική / Greek", description: "Σάλτσα ντομάτας, τυρί μοτσαρέλα, ντομάτα, ελιές, κρεμμύδι, ρίγανη, φέτα, πράσινη πιπεριά / Tomato sauce, mozzarella cheese, tomato, olives, onion, oregano, feta cheese, green pepper", price: "13,00 €" },
            { name: "Special", description: "Σάλτσα ντομάτας, τυρί μοτσαρέλα, ζαμπόν, μπέικον, μανιτάρια, πιπεριά / Tomato sauce, mozzarella cheese, ham, bacon, mushrooms, pepper", price: "15,00 €" },
            { name: "Carbonara Pizza", description: "Κρέμα γάλακτος, τυρί μοτσαρέλα, ζαμπόν, μπέικον, μανιτάρια, παρμεζάνα / Cream, mozzarella cheese, ham, bacon, mushrooms, parmesan cheese", price: "14,00 €" },
            { name: "Pollo Rosso", description: "Σάλτσα ντομάτας, τυρί μοτσαρέλα, κοτόπουλο, μπέικον, ντοματίνια, μαϊντανός, σως του σεφ / Tomato sauce, mozzarella cheese, chicken, bacon, cherry tomatoes, parsley, chef's sauce", price: "15,00 €" },
            { name: "Λαχματζούν", description: "Κιμάς, σάλτσα ντομάτας, πάπρικα, κρεμμύδι, μαϊντανός, ντοματίνια / Minced meat, tomato sauce, paprika, onion, parsley, cherry tomatoes", price: "16,00 €" },
          ],
        },
        {
          title: "ΦΡΟΥΤΟΣΑΛΑΤΑ / FRUIT SALAD",
          items: [
            { name: "Φρούτα της εποχής (2–4 ατόμων)", description: "Seasonal fruits (serves 2–4 people)", price: "15,00 € / 22,00 €" },
          ],
        },
        {
          title: "ΠΑΓΩΤΟ / ICE CREAM",
          items: [
            { name: "Γεύσεις (μπάλα)", description: "Βανίλια Μαδαγασκάρης, σοκολάτα, μπανάνα, φράουλα, φυστίκι, μπισκότο / Madagascar’s vanilla, chocolate, banana, strawberry, peanut, cookies", price: "4,00 €" },
          ],
        },
        {
          title: "ΓΡΑΝΙΤΕΣ / GRANITA",
          items: [
            { name: "Γεύσεις", description: "Φράουλα, λεμόνι, καρπούζι, πεπόνι, ροδάκινο, φρούτα του δάσους / Strawberry, lemon, watermelon, melon, peach, forest fruits", price: "7,00 €" },
            { name: "Γρανίτες με αλκοόλ", description: "Granitas with alcohol", price: "10,00 €" },
          ],
        },
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
      whatsapp: "WhatsApp",
      followLabel: "Ακολουθήστε μας",
    },
    leaveReview: {
      kicker: "η γνώμη σου μετράει",
      title: "Αφήστε μας μια κριτική",
      text: "Πέρασες όμορφα στο JOJO; Μοιράσου την εμπειρία σου — μας βοηθάει πραγματικά και δείχνει τον δρόμο σε νέους επισκέπτες.",
      google: "Κριτική στη Google",
      tripadvisor: "Κριτική στο Tripadvisor",
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
      { href: "/menu", label: "Menu" },
      { href: "#gallery", label: "Gallery" },
      { href: "/events", label: "Events" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ],
    menuPage: { backHome: "← Back to home" },
    menuCta: {
      text: "Start your day with coffee by the waves, enjoy refreshing cocktails, fresh juices and delicious bites from morning until midnight — all by the sea.",
      button: "See our menu",
    },
    navCall: "Call",
    hero: {
      logoAlt: "JOJO Porto Rafti logo",
      imageAlt: "JOJO beach bar in Porto Rafti at sunset",
      tagline: "The ultimate summer destination in Porto Rafti",
      subtext: "Beach bar all day 🏖️",
      call: "Call us",
      map: "See on the map",
      events: "Upcoming Events",
      hours: "Open daily · 09:00 – 03:00",
    },
    eventsPage: {
      kicker: "music & nights",
      title: "Upcoming Events",
      intro:
        "Our next nights at JOJO Porto Rafti. For reservations call +30 694 931 8998.",
      cta: "See our events",
      alts: [
        "Poster: Latin Live Party with Cuban Dancers Show, Saturday 12 September, 21:00",
        "Poster: Live Beach Party with Trannos, Sunday 13 September, 17:00",
      ],
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
    menu: {
      title: "Jojo Menu",
      categories: [
        {
          title: "COFFEES",
          items: [
            { name: "Espresso (single / double)", price: "3,50 € / 4,50 €" },
            { name: "Espresso macchiato", price: "3,50 €" },
            { name: "Freddo espresso / cappuccino", price: "5,00 €" },
            { name: "Cappuccino (single / double)", price: "4,00 € / 5,00 €" },
            { name: "Cappuccino latte", price: "5,00 €" },
            { name: "Greek coffee (single / double)", price: "3,50 € / 4,00 €" },
            { name: "Frappé / Nescafé", price: "5,00 €" },
            { name: "Classic chocolate", price: "5,00 €" },
            { name: "Freddocino", price: "7,00 €" },
            { name: "Mochaccino", price: "6,00 €" },
            { name: "Extra flavors", price: "0,50 €" },
            { name: "Soy milk, almond milk", price: "0,50 €" },
            { name: "Milkshake", description: "Vanilla, chocolate, banana, strawberry", price: "7,00 €" },
          ],
        },
        {
          title: "JUICE",
          items: [
            { name: "Natural orange juice", price: "7,00 €" },
            { name: "Natural juice mixed with seasonal fruits", price: "8,00 €" },
            { name: "Juice flavors", description: "orange, lemon, sour cherry, peach, pineapple, apple, raspberry", price: "4,00 €" },
          ],
        },
        {
          title: "SMOOTHIES",
          items: [
            { name: "Raspberry, blueberry, mango", price: "8,00 €" },
            { name: "Strawberry, peach, banana", price: "8,00 €" },
            { name: "Pineapple, pear, mango", price: "8,00 €" },
            { name: "Apple, spinach, carrot", price: "8,00 €" },
          ],
        },
        {
          title: "REFRESHMENTS",
          items: [
            { name: "Pepsi / Pepsi Max", price: "4,50 €" },
            { name: "Orangeade (red / blue)", price: "4,50 €" },
            { name: "Seven Up", price: "4,50 €" },
            { name: "Soda", price: "4,50 €" },
            { name: "Gordon Soda", price: "5,50 €" },
            { name: "Tonic", price: "4,50 €" },
            { name: "Lemonade", price: "4,50 €" },
            { name: "Bottled water 0.5L", price: "0,50 €" },
            { name: "Perrier 330ml", price: "5,00 €" },
            { name: "Souroti 250ml", price: "5,00 €" },
          ],
        },
        {
          title: "ICE TEA",
          items: [
            { name: "Lipton 500ml", price: "5,50 €" },
            { name: "Lipton Zero lemon", price: "5,50 €" },
            { name: "Peach, lemon, green tea", price: "" },
            { name: "Organic Tea", description: "zero sugar", price: "6,00 €" },
          ],
        },
        {
          title: "RTD’s",
          items: [
            { name: "Red Bull 250ml", price: "7,00 €" },
            { name: "Gordon Space 275ml", price: "8,00 €" },
            { name: "Mylokleftis 330ml", price: "6,00 €" },
            { name: "Hell 250ml", price: "6,00 €" },
          ],
        },
        {
          title: "BREAKFAST",
          items: [
            { name: "Greek (Kajiana)", description: "3 eggs, olive oil, tomato, feta cheese, Greek-style scrambled eggs with tomato (kajiana), 2 grilled slices of bread. Served with mixed salad", price: "11,00 €" },
            { name: "Jojo (omelette)", description: "Omelette (3 eggs), ham, bacon, pepper, tomato, Gouda cheese, feta cheese, parsley, 2 grilled slices of bread. Served with mixed salad", price: "12,00 €" },
            { name: "Matia (3 eggs)", description: "2 slices of toasted bread. Accompanied by mixed salad", price: "9,00 €" },
            { name: "English Breakfast", description: "3 eggs, bacon, sausage, tomato, 2 slices of toasted bread. Accompanied by mixed salad", price: "14,00 €" },
          ],
        },
        {
          title: "TOAST",
          note: "Your choice of white or wholemeal bread",
          items: [
            { name: "Ham toast, Gouda cheese", description: "served with chips", price: "4,00 €" },
            { name: "Turkey toast, Gouda cheese", description: "served with chips", price: "4,00 €" },
            { name: "Special toast", description: "Gouda cheese, chicken, egg, tomato (served with chips)", price: "6,00 €" },
          ],
        },
        {
          title: "APPETIZERS",
          items: [
            { name: "French fries", price: "5,00 €" },
            { name: "Fries with bacon, cheddar cheese, chef's sauce", price: "7,00 €" },
            { name: "Spring Rolls", description: "Served with sweet and sour sauce", price: "7,00 €" },
            { name: "Cheese rolls", description: "Served with chef's sauce, caesar's sauce, ketchup", price: "7,00 €" },
          ],
        },
        {
          title: "BRUSCHETTA",
          items: [
            { name: "Jojo (4 pieces)", description: "cream cheese, prosciutto, chips bacon, cherry tomatoes, arugula, parmesan, balsamic cream", price: "12,00 €" },
            { name: "Salmon (4 pieces)", description: "cream cheese, smoked salmon, avocado, cucumber, orange-flavored balsamic cream", price: "14,00 €" },
          ],
        },
        {
          title: "PLATE",
          items: [
            { name: "Assortment of cold cuts and cheeses (2 people)", description: "gorgonzola, parmesan, kasseri, gruyere, Italian salami, prosciutto, jam, nuts, breadsticks", price: "15,00 €" },
            { name: "Assortment of cold cuts and cheeses (4 people)", description: "gorgonzola, parmesan, kasseri, gruyere, Italian salami, prosciutto, jam, nuts, breadsticks", price: "22,00 €" },
          ],
        },
        {
          title: "PINZA",
          note: "Mushrooms are fresh",
          items: [
            { name: "Margarita", description: "Tomato sauce, mozzarella cheese, basil", price: "11,00 €" },
            { name: "Jojo", description: "Tomato sauce, mozzarella cheese, parmesan, prosciutto, arugula", price: "14,00 €" },
            { name: "Greek", description: "Tomato sauce, mozzarella cheese, tomato, olives, onion, oregano, feta cheese, green pepper", price: "13,00 €" },
            { name: "Special", description: "Tomato sauce, mozzarella cheese, ham, bacon, mushrooms, pepper", price: "15,00 €" },
            { name: "Carbonara Pizza", description: "Cream, mozzarella cheese, ham, bacon, mushrooms, parmesan cheese", price: "14,00 €" },
            { name: "Pollo Rosso", description: "Tomato sauce, mozzarella cheese, chicken, bacon, cherry tomatoes, parsley, chef's sauce", price: "15,00 €" },
            { name: "Lahmatzoun", description: "Minced meat, tomato sauce, paprika, onion, parsley, cherry tomatoes", price: "16,00 €" },
          ],
        },
        {
          title: "FRUIT SALAD",
          items: [
            { name: "Seasonal fruits (serves 2–4 people)", price: "15,00 € / 22,00 €" },
          ],
        },
        {
          title: "ICE CREAM",
          items: [
            { name: "Flavours (scoop)", description: "Madagascar’s vanilla, chocolate, banana, strawberry, peanut, cookies", price: "4,00 €" },
          ],
        },
        {
          title: "GRANITA",
          items: [
            { name: "Flavours", description: "Strawberry, lemon, watermelon, melon, peach, forest fruits", price: "7,00 €" },
            { name: "Granitas with alcohol", price: "10,00 €" },
          ],
        },
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
      whatsapp: "WhatsApp",
      followLabel: "Follow us",
    },
    leaveReview: {
      kicker: "your opinion matters",
      title: "Leave us a review",
      text: "Did you enjoy your time at JOJO? Share your experience — it really helps us and guides new visitors our way.",
      google: "Review on Google",
      tripadvisor: "Review on Tripadvisor",
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
