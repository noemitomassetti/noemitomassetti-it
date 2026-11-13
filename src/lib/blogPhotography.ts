import type { Language } from "./i18n/types";

/**
 * Curated editorial photography for every blog article, shared across four
 * languages. Sources checked on Unsplash in November 2026: individual
 * photographer pages expressly mark each as "Free to use under the Unsplash
 * License". Photographic provenance is linked for review; never treat
 * anonymous AI illustrations or unlicensed image-search previews as assets.
 *
 * The source ID + CDN image URL are recorded together for a verifiable audit.
 * Image requests are to Unsplash's public image CDN, not an OpenAI generator.
 */
export type BlogPhotograph = {
  readonly url: string;
  readonly photographer: string;
  readonly sourceUrl: string;
  readonly alt: Readonly<Record<Language,string>>;
  readonly license: "Unsplash License";
};
export const BLOG_PHOTOGRAPHS: Readonly<Record<number,BlogPhotograph>> = {
  1: {
    url: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&w=1200&q=75",
    photographer: "Eric Rothermel",
    sourceUrl: "https://unsplash.com/photos/FoKO4DpXamQ",
    alt: {it:"Agenda mensile aperta su una scrivania di legno",en:"Open monthly planner on a wooden desk",fr:"Agenda mensuel ouvert sur un bureau en bois",es:"Agenda mensual abierta sobre una mesa de madera"},
    license: "Unsplash License",
  },
  2: {
    url: "https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?auto=format&fit=crop&w=1200&q=75",
    photographer: "Vitaly Gariev",
    sourceUrl: "https://unsplash.com/photos/Cnsh9WwhVCw",
    alt: {it:"Professionisti che discutono attività e responsabilità durante una riunione",en:"Professionals discussing tasks in an office meeting",fr:"Professionnels échangeant sur leurs tâches pendant une réunion",es:"Profesionales organizando tareas durante una reunión"},
    license: "Unsplash License",
  },
  3: {
    url: "https://images.unsplash.com/photo-1665627394712-382cf226826d?auto=format&fit=crop&w=1200&q=75",
    photographer: "Bimbingan Islam",
    sourceUrl: "https://unsplash.com/photos/TILwnyF2xcw",
    alt: {it:"Postazione di lavoro con computer, smartphone e quaderno",en:"Desk with laptop, smartphone and notebook",fr:"Bureau équipé d'un ordinateur portable, d'un téléphone et d'un carnet",es:"Mesa de trabajo con portátil, teléfono y cuaderno"},
    license: "Unsplash License",
  },
  4: {
    url: "https://images.unsplash.com/photo-1678227547309-f25998d4fc86?auto=format&fit=crop&w=1200&q=75",
    photographer: "Kit (formerly ConvertKit)",
    sourceUrl: "https://unsplash.com/photos/Ymb6h8gUk3o",
    alt: {it:"Persona che gestisce comunicazioni al computer",en:"Person working on digital correspondence at a laptop",fr:"Personne travaillant sur sa correspondance sur ordinateur",es:"Persona gestionando correspondencia en un portátil"},
    license: "Unsplash License",
  },
  5: {
    url: "https://images.unsplash.com/photo-1588912914017-923900a34710?auto=format&fit=crop&w=1200&q=75",
    photographer: "Lewis Keegan",
    sourceUrl: "https://unsplash.com/photos/oB2aEeE8s4A",
    alt: {it:"Libri e dizionario aperti su una scrivania di studio",en:"Dictionary and study books on a wooden desk",fr:"Dictionnaire et manuels sur une table d'étude",es:"Diccionario y libros de consulta sobre una mesa"},
    license: "Unsplash License",
  },
  6: {
    url: "https://images.unsplash.com/photo-1649700028744-3de5d81dfba9?auto=format&fit=crop&w=1200&q=75",
    photographer: "Meggy Xue",
    sourceUrl: "https://unsplash.com/photos/2XgGHk4i4V8",
    alt: {it:"Computer e cuffie su una scrivania per l'apprendimento online",en:"Laptop and headphones on a desk for online learning",fr:"Ordinateur et casque sur un bureau pour une formation en ligne",es:"Portátil y auriculares en una mesa para un curso en línea"},
    license: "Unsplash License",
  },
  7: {
    url: "https://images.unsplash.com/photo-1741795843783-e6fc4c27386b?auto=format&fit=crop&w=1200&q=75",
    photographer: "My Spain Visa",
    sourceUrl: "https://unsplash.com/photos/4NkooaqwutU",
    alt: {it:"Computer, passaporto e documenti di viaggio pronti per la partenza",en:"Laptop, passport and travel documents prepared for a trip",fr:"Ordinateur, passeport et documents prêts pour le départ",es:"Ordenador, pasaporte y documentos preparados para el viaje"},
    license: "Unsplash License",
  },
  8: {
    url: "https://images.unsplash.com/photo-1675151638827-c0795a301e68?auto=format&fit=crop&w=1200&q=75",
    photographer: "Pew Nguyen",
    sourceUrl: "https://unsplash.com/photos/wRjgYHdVMx8",
    alt: {it:"Postazione informatica con cuffie per la comunicazione con i clienti",en:"Computer workstation with headphones for customer communication",fr:"Poste informatique avec casque pour les échanges avec les clients",es:"Puesto informático con auriculares para la atención al cliente"},
    license: "Unsplash License",
  },
  9: {
    url: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?auto=format&fit=crop&w=1200&q=75",
    photographer: "Towfiqu barbhuiya",
    sourceUrl: "https://unsplash.com/photos/bwOAixLG0uc",
    alt: {it:"Calendario con appuntamenti segnati da puntine rosse",en:"Calendar with dates marked by red drawing pins",fr:"Calendrier avec des rendez-vous signalés par des punaises rouges",es:"Calendario con fechas señaladas mediante chinchetas rojas"},
    license: "Unsplash License",
  },
  10: {
    url: "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1200&q=75",
    photographer: "Dose Media",
    sourceUrl: "https://unsplash.com/photos/bU6JyhSI6zo",
    alt: {it:"Taccuino a spirale e smartphone su una scrivania luminosa",en:"Spiral notebook and smartphone on a bright desk",fr:"Carnet à spirale et téléphone sur un bureau lumineux",es:"Cuaderno de espiral y teléfono en una mesa luminosa"},
    license: "Unsplash License",
  },
  11: {
    url: "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?auto=format&fit=crop&w=1200&q=75",
    photographer: "Kelly Sikkema",
    sourceUrl: "https://unsplash.com/photos/ml1IgjV8OvY",
    alt: {it:"Disegno a mano della struttura di un sito web su un quaderno",en:"Hand-drawn website wireframes on a notebook",fr:"Maquettes de pages web dessinées à la main dans un carnet",es:"Bocetos de páginas web dibujados a mano en un cuaderno"},
    license: "Unsplash License",
  },
  12: {
    url: "https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?auto=format&fit=crop&w=1200&q=75",
    photographer: "Yen Vu",
    sourceUrl: "https://unsplash.com/photos/07d1RdYYRjM",
    alt: {it:"Libri di metodologia, appunti e materiali di ricerca su una scrivania",en:"Research methodology books and handwritten notes on a desk",fr:"Livres de méthodologie et notes de recherche sur un bureau",es:"Libros de metodología y notas de investigación sobre una mesa"},
    license: "Unsplash License",
  },
  13: {
    url: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=1200&q=75",
    photographer: "Wesley Tingey",
    sourceUrl: "https://unsplash.com/photos/snNHKZ-mGfE",
    alt: {it:"Fascicoli cartacei ordinati in pile per la documentazione di procedure",en:"Stacks of paper files for documenting working procedures",fr:"Dossiers empilés pour documenter des procédures opérationnelles",es:"Carpetas y documentos apilados para organizar procedimientos"},
    license: "Unsplash License",
  },
  14: {
    url: "https://images.unsplash.com/photo-1774898989484-0b9becf69efb?auto=format&fit=crop&w=1200&q=75",
    photographer: "Sasun Bughdaryan",
    sourceUrl: "https://unsplash.com/photos/QP7RBa5r8HM",
    alt: {it:"Lucchetto sul computer come simbolo di protezione degli accessi",en:"Padlock on a computer keyboard illustrating access protection",fr:"Cadenas sur un clavier d'ordinateur illustrant la protection des accès",es:"Candado sobre un teclado de ordenador como símbolo de seguridad"},
    license: "Unsplash License",
  },
};

export const BLOG_PHOTO_ATTRIBUTION_LABEL:Record<Language,string>={
  it:"Fotografia",en:"Photograph",fr:"Photographie",es:"Fotografía",

  15: {
    url: "https://images.unsplash.com/photo-1743796055651-41c743ff2465?auto=format&fit=crop&w=1200&q=75",
    photographer: "MJ Duford",
    sourceUrl: "https://unsplash.com/photos/person-is-working-on-a-laptop-and-writing-in-a-notebook-45u1mboQtQE",
    alt: {it:"Persona che scrive su un quaderno accanto alla tastiera del computer",en:"Person writing notes in a notebook beside a laptop keyboard",fr:"Personne prenant des notes dans un carnet à côté d'un ordinateur",es:"Persona escribiendo notas en un cuaderno junto a un ordenador portátil"},
    license: "Unsplash License",
  },
  16: {
    url: "https://images.unsplash.com/photo-1762341112870-1eb70d45b23e?auto=format&fit=crop&w=1200&q=75",
    photographer: "Zulfugar Karimov",
    sourceUrl: "https://unsplash.com/photos/person-writing-on-clipboard-at-desk-with-laptop-Y2NR5WmOPDA",
    alt: {it:"Persona che controlla documenti su una cartellina accanto al computer",en:"Person checking information on a clipboard beside a laptop",fr:"Personne vérifiant des documents sur un porte-bloc à côté d'un ordinateur",es:"Persona revisando documentos en una carpeta junto a un portátil"},
    license: "Unsplash License",
  },
};
