/* ===================================================================
   VILLA GALINI — SCRIPT
   Vanilla JS only. Handles: language switching (EN/GR), sticky nav
   state, mobile menu toggle, and the gallery lightbox.
   =================================================================== */

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     1. TRANSLATIONS
     All page copy lives here. To add a new language, duplicate the
     "en" block, translate the values, and add a button in the
     language switcher markup with the matching data-lang attribute.
     ----------------------------------------------------------------- */
  const translations = {
    en: {
      "nav.about": "About",
      "nav.amenities": "Amenities",
      "nav.gallery": "Gallery",
      "nav.location": "Location",
      "nav.contact": "Contact",

      "hero.eyebrow": " Seafront with Private Pool",
      "hero.tagline": "Where the sea meets stillness, and summer slows down.",
      "hero.cta": "Plan Your Stay",

      "about.eyebrow": "The Villa",
      "about.title": "A home carved from light and stone",
      "about.p1": "Escape to this stunning seafront villa just 50 km from Athens, offering breathtaking sea views and complete tranquility. Relax by the spacious private pool, enjoy the bright and sun-filled living spaces, and wake up to the soothing sound of the waves. It is the perfect choice for families, couples, or groups seeking privacy, comfort, and a peaceful getaway. An ideal destination to unwind while staying close to Athens and the beautiful coastal attractions of the area.",
      "about.p2": "On the ground floor, you will find a bright living room, a dining area, a fully equipped open-plan kitchen, and the master bedroom with an en-suite bathroom. The first floor features two double bedrooms and a shared bathroom, all offering beautiful views of the pool and the sea. The basement includes a table tennis area, an additional bathroom, and accommodation for two extra guests on single beds (with a fan instead of air conditioning). Outside, you can relax by the private pool or take a short walk to the beach, which is easily accessible via a small harbor.",
      "about.fact1": "Bedrooms",
      "about.fact2": "Bathrooms",
      "about.fact3": "Guests",
      "about.fact4": "Living Space",

      "amenities.eyebrow": "Comfort & Ease",
      "amenities.title": "Everything you need, nothing you don't",
      "amenities.wifi.title": "High-Speed WiFi",
      "amenities.wifi.desc": "Stay connected on the terrace or by the pool.",
      "amenities.ac.title": "Air Conditioning",
      "amenities.ac.desc": "Climate control in every bedroom and living space.",
      "amenities.kitchen.title": "Fully Equipped Kitchen",
      "amenities.kitchen.desc": "Everything you need to cook.",
      "amenities.parking.title": "Private Parking",
      "amenities.parking.desc": "Secure on-site parking for your vehicle.",
      "amenities.seaview.title": "Sea View",
      "amenities.seaview.desc": "Uninterrupted sea views from every terrace.",
      "amenities.family.title": "Family Friendly",
      "amenities.family.desc": "Safe, spacious and comfortable for all ages.",

      "gallery.eyebrow": "Take a Look",
      "gallery.title": "Experience Villa Georgia Dream",

      "location.eyebrow": "Find Us",
      "location.title": "Steps from the sea, close to everything",
      "location.desc": "Within approximately 200 meters of the villa, you will find tavernas, cafés, a bakery, a butcher shop, and a mini market, along with the option of food and essential item delivery. Just 5 km away lies a charming village with bars, tavernas, cafés, ice cream shops, and various stores. A short drive away, you can visit the Corinth Canal and the Loutraki Casino, two of the area’s most notable attractions.",
      "location.item1": "1 min walk to the nearest beach",
      "location.item2": "10 min drive to the village centre",
      "location.item3": "55 min from the airport",
      "location.item4": "Tavernas, cafés and bakery nearby",

      "contact.eyebrow": "Get in Touch",
      "contact.title": "Ready to plan your stay?",
      "contact.subtitle": "Reach out directly — we typically reply within a few hours.",
      "contact.call": "Call Us",
      "contact.email": "Email Us",
      "contact.whatsapp": "WhatsApp",
      "contact.whatsapp_cta": "Message us instantly",

      "footer.tagline": "A private holiday house.",
      "footer.rights": "All rights reserved."
    },

    gr: {
      "nav.about": "Σχετικά",
      "nav.amenities": "Παροχές",
      "nav.gallery": "Φωτογραφίες",
      "nav.location": "Τοποθεσία",
      "nav.contact": "Επικοινωνία",

      "hero.eyebrow": "Villa Georgia Dream — Παραθαλάσσια βίλα με ιδιωτική πισίνα",
      "hero.tagline": "Εκεί όπου η θάλασσα συναντά τη γαλήνη και το καλοκαίρι κυλά αργά.",
      "hero.cta": "Σχεδιάστε τη Διαμονή Σας",

      "about.eyebrow": "Η Βίλα",
      "about.title": "Ένα σπίτι σκαλισμένο από φως και πέτρα",
      "about.p1": "Αποδράστε στη Villa Georgia Dream, μια υπέροχη παραθαλάσσια βίλα, μόλις 50 χλμ. από την Αθήνα, με εκπληκτική θέα στη θάλασσα και απόλυτη ηρεμία. Χαλαρώστε στη μεγάλη ιδιωτική πισίνα, απολαύστε τους φωτεινούς, ηλιόλουστους χώρους και ξυπνήστε με τον ήχο των κυμάτων. Είναι η ιδανική επιλογή για οικογένειες, ζευγάρια ή παρέες που αναζητούν ιδιωτικότητα, άνεση και μια ήρεμη απόδραση. Ένας μοναδικός προορισμός για να ξεκουραστείτε, σε κοντινή απόσταση από την Αθήνα και τα όμορφα παραθαλάσσια αξιοθέατα της περιοχής.",
      "about.p2": "Στο ισόγειο υπάρχει φωτεινό καθιστικό, τραπεζαρία, πλήρως εξοπλισμένη κουζίνα αμερικανικού τύπου και η κύρια κρεβατοκάμαρα με ιδιωτικό μπάνιο. Στον πρώτο όροφο βρίσκονται δύο υπνοδωμάτια με διπλά κρεβάτια και ένα κοινόχρηστο μπάνιο, όλα με θέα στην πισίνα και τη θάλασσα. Στο υπόγειο υπάρχει τραπέζι πινγκ πονγκ, ένα επιπλέον μπάνιο και δυνατότητα φιλοξενίας δύο ακόμη ατόμων σε μονά κρεβάτια (με ανεμιστήρα και χωρίς κλιματισμό). Στον εξωτερικό χώρο μπορείτε να απολαύσετε την ιδιωτική πισίνα ή να περπατήσετε εύκολα μέχρι την παραλία μέσω ενός μικρού λιμανιού.",
      "about.fact1": "Υπνοδωμάτια",
      "about.fact2": "Μπάνια",
      "about.fact3": "Επισκέπτες",
      "about.fact4": "Χώρος Διαβίωσης",

      "amenities.eyebrow": "Άνεση & Ευκολία",
      "amenities.title": "Όλα όσα χρειάζεστε, τίποτα παραπάνω",
      "amenities.wifi.title": "Γρήγορο WiFi",
      "amenities.wifi.desc": "Μείνετε συνδεδεμένοι στη βεράντα ή δίπλα στην πισίνα.",
      "amenities.ac.title": "Κλιματισμός",
      "amenities.ac.desc": "Έλεγχος θερμοκρασίας σε κάθε δωμάτιο και χώρο διαβίωσης.",
      "amenities.kitchen.title": "Πλήρως Εξοπλισμένη Κουζίνα",
      "amenities.kitchen.desc": "Όλα όσα χρειάζεστε για να μαγειρέψετε.",
      "amenities.parking.title": "Ιδιωτική Θέση Στάθμευσης",
      "amenities.parking.desc": "Ασφαλής χώρος στάθμευσης για το όχημά σας.",
      "amenities.seaview.title": "Θέα στη Θάλασσα",
      "amenities.seaview.desc": "Απεριόριστη θέα στη θάλασσα από κάθε βεράντα.",
      "amenities.family.title": "Φιλικό προς Οικογένειες",
      "amenities.family.desc": "Ασφαλής, ευρύχωρος χώρος, άνετος για όλες τις ηλικίες.",

      "gallery.eyebrow": "Μια Γεύση",
      "gallery.title": "Ανακαλύψτε τη Villa Georgia Dream",

      "location.eyebrow": "Βρείτε Μας",
      "location.title": "Λίγα βήματα από τη θάλασσα, κοντά σε όλα",
      "location.desc": "Σε απόσταση περίπου 200 μέτρων από τη βίλα Villa Georgia Dream θα βρείτε ταβέρνες, καφέ, φούρνο, κρεοπωλείο και μίνι μάρκετ, ενώ υπάρχει και δυνατότητα διανομής φαγητού και ειδών πρώτης ανάγκης. Μόλις 5 χλμ. μακριά βρίσκεται ένα όμορφο χωριό με μπαρ, ταβέρνες, καφετέριες, παγωτατζίδικα και καταστήματα, ενώ σε μικρή απόσταση με το αυτοκίνητο μπορείτε να επισκεφθείτε τη Διώρυγα της Κορίνθου και το Καζίνο Λουτρακίου.",
      "location.item1": "1 λεπτό με τα πόδια από την παραλία",
      "location.item2": "10 λεπτά με το αυτοκίνητο από το κέντρο του χωριού",
      "location.item3": "55 λεπτά από το αεροδρόμιο",
      "location.item4": "Ταβέρνες, καφέ και φούρνος εδώ κοντά",

      "contact.eyebrow": "Επικοινωνήστε",
      "contact.title": "Έτοιμοι να σχεδιάσετε τη διαμονή σας;",
      "contact.subtitle": "Επικοινωνήστε απευθείας — απαντάμε συνήθως εντός λίγων ωρών.",
      "contact.call": "Καλέστε Μας",
      "contact.email": "Στείλτε Email",
      "contact.whatsapp": "WhatsApp",
      "contact.whatsapp_cta": "Μηνύματα άμεσα",

      "footer.tagline": "Ένα ιδιωτικό εξοχικό σπίτι - Villa Georgia Dream.",
      "footer.rights": "Με την επιφύλαξη παντός δικαιώματος."
    },

    fr: {
      "nav.about": "À propos",
      "nav.amenities": "Équipements",
      "nav.gallery": "Galerie",
      "nav.location": "Emplacement",
      "nav.contact": "Contact",

      "hero.eyebrow": "Villa en bord de mer avec piscine privée",
      "hero.tagline": "Là où la mer rencontre le calme, et où l'été ralentit.",
      "hero.cta": "Planifiez Votre Séjour",

      "about.eyebrow": "La Villa",
      "about.title": "Une maison sculptée de lumière et de pierre",
      "about.p1": "Échappez-vous dans cette magnifique villa en bord de mer, à seulement 50 km d’Athènes, offrant une vue imprenable sur la mer et une tranquillité absolue. Détendez-vous dans la grande piscine privée, profitez des espaces lumineux baignés de soleil et réveillez-vous au son des vagues. C’est le choix idéal pour les familles, les couples ou les groupes d’amis à la recherche d’intimité, de confort et d’une escapade paisible. Une destination unique pour se reposer, à proximité d’Athènes et des magnifiques sites côtiers de la région.",
      "about.p2": "Au rez-de-chaussée, il y a un salon lumineux, une salle à manger, une cuisine ouverte entièrement équipée de style américain et la chambre principale avec salle de bain privative, au premier étage se trouvent deux chambres doubles et une salle de bain commune avec vue sur la piscine et la mer, au sous-sol il y a une table de ping-pong, une salle de bain supplémentaire et la possibilité d’accueillir deux personnes supplémentaires dans des lits simples (avec ventilateur et sans climatisation), et à l’extérieur vous pouvez profiter de la piscine privée ou rejoindre facilement la plage à pied via un petit port.",
      "about.fact1": "Chambres",
      "about.fact2": "Salles de bain",
      "about.fact3": "Personnes",
      "about.fact4": "Surface Habitable",

      "amenities.eyebrow": "Confort & Simplicité",
      "amenities.title": "Tout ce qu'il faut, rien de superflu",
      "amenities.wifi.title": "WiFi Haut Débit",
      "amenities.wifi.desc": "Restez connecté sur la terrasse ou près de la piscine.",
      "amenities.ac.title": "Climatisation",
      "amenities.ac.desc": "Climatisation dans chaque chambre et espace de vie.",
      "amenities.kitchen.title": "Cuisine Entièrement Équipée",
      "amenities.kitchen.desc": "Tout ce qu'il faut pour cuisiner.",
      "amenities.parking.title": "Parking Privé",
      "amenities.parking.desc": "Stationnement sécurisé pour votre véhicule.",
      "amenities.seaview.title": "Vue sur la Mer",
      "amenities.seaview.desc": "Vue imprenable sur la mer depuis chaque terrasse.",
      "amenities.family.title": "Idéal pour les Familles",
      "amenities.family.desc": "Espace sûr et spacieux, confortable pour tous les âges.",

      "gallery.eyebrow": "Un Aperçu",
      "gallery.title": "Découvrez la Villa Georgia Dream",

      "location.eyebrow": "Nous Trouver",
      "location.title": "À deux pas de la mer, proche de tout",
      "location.desc": "À environ 200 mètres de la villa, vous trouverez des tavernes, des cafés, une boulangerie, une boucherie et une supérette, ainsi qu’un service de livraison de repas et de produits de première nécessité. À seulement 5 km se trouve un charmant village avec des bars, tavernes, cafés, glaciers et boutiques. À une courte distance en voiture, vous pourrez visiter le canal de Corinthe et le casino de Loutraki.",
      "location.item1": "1 min à pied de la plage la plus proche",
      "location.item2": "10 min en voiture du centre du village",
      "location.item3": "55 min de l'aéroport",
      "location.item4": "Tavernes, cafés et boulangerie à proximité",

      "contact.eyebrow": "Contactez-Nous",
      "contact.title": "Prêt à planifier votre séjour ?",
      "contact.subtitle": "Contactez-nous directement — nous répondons généralement en quelques heures.",
      "contact.call": "Appelez-Nous",
      "contact.email": "Envoyez un Email",
      "contact.whatsapp": "WhatsApp",
      "contact.whatsapp_cta": "Écrivez-nous instantanément",

      "footer.tagline": "Une maison de vacances privée.",
      "footer.rights": "Tous droits réservés."
    }
  };

  const STORAGE_KEY = "villa-georgio-dream-lang";

  /* -----------------------------------------------------------------
     2. LANGUAGE SWITCHER
     ----------------------------------------------------------------- */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const htmlLangMap = { en: "en", gr: "el", fr: "fr" };
    document.documentElement.setAttribute("lang", htmlLangMap[lang] || "en");

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable (e.g. private browsing) — fail silently */
    }
  }

  function initLanguageSwitcher() {
    const buttons = document.querySelectorAll(".lang-switch__btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
    });

    let savedLang = "en";
    try {
      savedLang = localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {
      savedLang = "en";
    }
    applyLanguage(savedLang);
  }

  /* -----------------------------------------------------------------
     3. STICKY NAVIGATION STATE
     ----------------------------------------------------------------- */
  function initStickyNav() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const toggleScrolledClass = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };

    toggleScrolledClass();
    window.addEventListener("scroll", toggleScrolledClass, { passive: true });
  }

  /* -----------------------------------------------------------------
     4. MOBILE MENU TOGGLE
     ----------------------------------------------------------------- */
  function initMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after a nav link is tapped
    menu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* -----------------------------------------------------------------
     5. GALLERY LIGHTBOX
     ----------------------------------------------------------------- */
  function initLightbox() {
    const items = Array.from(document.querySelectorAll(".gallery__item"));
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (!items.length || !lightbox || !lightboxImg) return;

    let currentIndex = 0;

    function showImage(index) {
      currentIndex = (index + items.length) % items.length;
      const item = items[currentIndex];
      const fullSrc = item.getAttribute("data-full");
      const altText = item.querySelector("img")?.getAttribute("alt") || "";

      lightboxImg.setAttribute("src", fullSrc);
      lightboxImg.setAttribute("alt", altText);
    }

    function openLightbox(index) {
      showImage(index);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.setAttribute("src", "");
      document.body.style.overflow = "";
    }

    items.forEach((item, index) => {
      item.addEventListener("click", () => openLightbox(index));
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

    // Click outside the image closes the lightbox
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard support: Escape closes, arrows navigate
    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    });
  }

  /* -----------------------------------------------------------------
     6. FOOTER YEAR
     ----------------------------------------------------------------- */
  function initFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------------
     INIT
     ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initStickyNav();
    initMobileMenu();
    initLightbox();
    initFooterYear();
  });
})();
