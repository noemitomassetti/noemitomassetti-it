import type { Language } from "./i18n/types";

/**
 * Curated editorial photography for every blog article, shared across four
 * languages. Each source and image must be checked before the release.\n * November 2026 editorial replacements were individually checked on Unsplash\n * and labelled "Free to use under the Unsplash License". Existing images\n * retain source links for independent verification and visual review.
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
    url: "https://images.unsplash.com/photo-1740220501390-90302389b06a?auto=format&fit=crop&w=1200&q=75",
    photographer: "Jakub Żerdzicki",
    sourceUrl: "https://unsplash.com/photos/a-person-using-a-cell-phone-while-sitting-in-front-of-a-laptop-zqdB9BVHp5s",
    alt: {it:"Persona che consulta lo smartphone davanti a un computer portatile",en:"Person using a smartphone beside an open laptop",fr:"Personne consultant son téléphone devant un ordinateur portable",es:"Persona que consulta el móvil junto a un ordenador portátil"},
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
    alt: {it:"Persona che consulta un libro tenendo una penna in mano",en:"Person consulting a book while holding a pen",fr:"Personne consultant un livre avec un stylo à la main",es:"Persona que consulta un libro con un bolígrafo en la mano"},
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
    url: "https://images.unsplash.com/photo-1758876017768-458c975e92ed?auto=format&fit=crop&w=1200&q=75",
    photographer: "Vitaly Gariev",
    sourceUrl: "https://unsplash.com/photos/woman-working-at-a-desk-with-laptop-and-notebook-N3BArCmKE9o",
    alt: {it:"Professionista che pianifica il lavoro al computer prendendo appunti",en:"Professional planning work at a laptop and taking notes",fr:"Professionnelle organisant son travail sur ordinateur et prenant des notes",es:"Profesional que organiza su trabajo con el portátil y toma notas"},
    license: "Unsplash License",
  },
  8: {
    url: "https://images.unsplash.com/photo-1736667245201-2eea25a07f55?auto=format&fit=crop&w=1200&q=75",
    photographer: "Jakub Żerdzicki",
    sourceUrl: "https://unsplash.com/photos/a-person-typing-on-a-laptop-on-a-desk-a1MHEv62kdo",
    alt: {it:"Persona che scrive al computer durante il lavoro d'ufficio",en:"Person typing on a laptop in an office workspace",fr:"Personne saisissant un texte sur un ordinateur portable au bureau",es:"Persona escribiendo en un portátil en su puesto de trabajo"},
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
    url: "https://images.unsplash.com/photo-1758876020290-8b5e2a326a97?auto=format&fit=crop&w=1200&q=75",
    photographer: "Vitaly Gariev",
    sourceUrl: "https://unsplash.com/photos/man-with-beard-working-on-laptop-and-clipboard-DJzvXcGT5ds",
    alt: {it:"Professionista che consulta il computer e prende appunti su una cartellina",en:"Professional reviewing information on a laptop and taking notes on a clipboard",fr:"Professionnel consultant son ordinateur et prenant des notes sur un porte-bloc",es:"Profesional que consulta información en el portátil y toma notas en una carpeta"},
    license: "Unsplash License",
  },
  13: {
    url: "https://images.unsplash.com/photo-1768055104910-8c8d213835fb?auto=format&fit=crop&w=1200&q=75",
    photographer: "Jakub Żerdzicki",
    sourceUrl: "https://unsplash.com/photos/hand-writing-a-checklist-in-a-notebook-TB7aNN4blTQ",
    alt: {it:"Mano che completa una lista di controllo scritta su un quaderno",en:"Hand marking tasks on a written checklist in a notebook",fr:"Main cochant les étapes d'une liste de contrôle dans un carnet",es:"Mano que marca las tareas de una lista de control en un cuaderno"},
    license: "Unsplash License",
  },
  14: {
    url: "https://images.unsplash.com/photo-1774898989484-0b9becf69efb?auto=format&fit=crop&w=1200&q=75",
    photographer: "Sasun Bughdaryan",
    sourceUrl: "https://unsplash.com/photos/QP7RBa5r8HM",
    alt: {it:"Lucchetto sul computer come simbolo di protezione degli accessi",en:"Padlock on a computer keyboard illustrating access protection",fr:"Cadenas sur un clavier d'ordinateur illustrant la protection des accès",es:"Candado sobre un teclado de ordenador como símbolo de seguridad"},
    license: "Unsplash License",
  },
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

export const BLOG_PHOTO_ATTRIBUTION_LABEL:Record<Language,string>={
  it:"Fotografia",en:"Photograph",fr:"Photographie",es:"Fotografía",

};
