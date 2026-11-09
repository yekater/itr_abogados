/**
 * Lawyer-focused copy for the "Dirigido a / Who it is for" section.
 * Shared by /, /ca/ and /en/ through AudienceIntro.astro.
 */
export interface AudienceCopy {
  title: string;
  paragraphs: string[];
  bullets: {lead: string; text: string}[];
}

export const audienceCopy: Record<'es'|'ca'|'en', AudienceCopy> = {
  es: {
    title: 'Investigación digital para reforzar tu práctica jurídica.',
    paragraphs: [
      'Aprende a localizar, contrastar y documentar información pública relevante para tus asuntos. Incorpora una metodología de investigación en fuentes abiertas que te ayude a preparar diligencias, analizar relaciones entre personas y empresas y fundamentar mejor tu estrategia jurídica.',
      'Una formación 100 % online dirigida a abogados, pasantes y equipos jurídicos que quieren incorporar nuevas herramientas a su trabajo diario. Combina el estudio a tu ritmo con <strong>4 clases prácticas con un profesor</strong> para aplicar las técnicas de investigación digital a situaciones del ámbito jurídico.',
      'Trabaja con documentos, registros públicos, sitios corporativos, prensa y otras fuentes abiertas. Aprende a evaluar la fiabilidad de la información, distinguir indicios de conclusiones y organizar tus hallazgos en informes claros, identificando sus fuentes y contexto.'
    ],
    bullets: [
      {lead: 'Abogados y pasantes de despachos pequeños y medianos:', text: 'amplía tus recursos para investigar asuntos, contrastar información y preparar expedientes con una metodología ordenada y reproducible.'},
      {lead: 'Abogados del ámbito civil y mercantil:', text: 'analiza estructuras societarias, administradores y relaciones empresariales para comprender mejor las conexiones relevantes para cada caso.'},
      {lead: 'Abogados penalistas y profesionales que trabajan en asuntos de fraude:', text: 'aprende a reconstruir cronologías, contrastar identidades y documentar conexiones mediante información pública.'},
      {lead: 'Equipos jurídicos internos y especialistas en compliance:', text: 'mejora la revisión de información corporativa, la identificación de riesgos reputacionales y la documentación de hallazgos.'},
      {lead: 'Abogados en formación y estudiantes de Derecho:', text: 'desarrolla competencias prácticas para buscar, analizar y presentar información digital con criterio jurídico y respeto a la privacidad.'}
    ]
  },
  ca: {
    title: "Investigació digital per reforçar la teva pràctica jurídica.",
    paragraphs: [
      "Aprèn a localitzar, contrastar i documentar informació pública rellevant per als teus expedients. Incorpora una metodologia d'investigació en fonts obertes que t'ajudi a preparar diligències, analitzar relacions entre persones i empreses i fonamentar millor la teva estratègia jurídica.",
      'Una formació 100 % en línia adreçada a advocats, passants i equips jurídics que volen incorporar eines noves al treball diari. Combina l\u2019estudi al teu ritme amb <strong>4 classes pràctiques amb un professor</strong> per aplicar les tècniques d\u2019investigació digital a situacions de l\u2019àmbit jurídic.',
      'Treballa amb documents, registres públics, llocs corporatius, premsa i altres fonts obertes. Aprèn a avaluar la fiabilitat de la informació, distingir indicis de conclusions i organitzar els teus resultats en informes clars, identificant-ne les fonts i el context.'
    ],
    bullets: [
      {lead: 'Advocats i passants de despatxos petits i mitjans:', text: 'amplia els teus recursos per investigar assumptes, contrastar informació i preparar expedients amb una metodologia ordenada i reproduïble.'},
      {lead: 'Advocats de l\u2019àmbit civil i mercantil:', text: 'analitza estructures societàries, administradors i relacions empresarials per comprendre millor les connexions rellevants per a cada cas.'},
      {lead: 'Advocats penalistes i professionals que treballen en assumptes de frau:', text: 'aprèn a reconstruir cronologies, contrastar identitats i documentar connexions mitjançant informació pública.'},
      {lead: 'Equips jurídics interns i especialistes en compliance:', text: 'millora la revisió d\u2019informació corporativa, la identificació de riscos reputacionals i la documentació de resultats.'},
      {lead: 'Advocats en formació i estudiants de Dret:', text: 'desenvolupa competències pràctiques per cercar, analitzar i presentar informació digital amb criteri jurídic i respecte a la privacitat.'}
    ]
  },
  en: {
    title: 'Digital investigation to strengthen your legal practice.',
    paragraphs: [
      'Learn to find, verify and document public information relevant to your cases. Incorporate an open-source investigation methodology that helps you prepare enquiries, analyse relationships between people and companies and build stronger legal arguments.',
      'A 100 % online programme for lawyers, trainees and in-house legal teams that want to bring new tools into their daily work. Combine self-paced study with <strong>4 practical classes with a teacher</strong> to apply digital research techniques to legal scenarios.',
      'Work with documents, public records, corporate sites, press and other open sources. Learn to assess the reliability of information, tell clues apart from conclusions and organise your findings into clear reports, identifying their sources and context.'
    ],
    bullets: [
      {lead: 'Lawyers and trainees at small and mid-sized firms:', text: 'broaden your resources to investigate cases, verify information and build case files with a structured, reproducible methodology.'},
      {lead: 'Civil and commercial lawyers:', text: 'analyse corporate structures, directors and business relationships to better understand the connections relevant to each case.'},
      {lead: 'Criminal lawyers and professionals working on fraud matters:', text: 'learn to reconstruct timelines, verify identities and document connections using public information.'},
      {lead: 'In-house legal teams and compliance specialists:', text: 'improve your review of corporate information, identification of reputational risks and documentation of findings.'},
      {lead: 'Lawyers in training and law students:', text: 'develop practical skills to search, analyse and present digital information with legal judgement and respect for privacy.'}
    ]
  }
};
