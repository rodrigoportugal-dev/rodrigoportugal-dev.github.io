/*
  ============================================================
  CONTENIDO DE LA WEB
  ============================================================
  Todo el texto de la web está aquí. Para cambiar algo, edita
  este archivo; no hace falta tocar index.html ni script.js.

  Cada texto tiene dos versiones: { es: "...", en: "..." }.
  ============================================================
*/

const PROFILE = {
  name: "Rodrigo Portugal",
  initials: "RP",
  location: { es: "Burgos, España", en: "Burgos, Spain" },
  headline: {
    es: "Estudiante de Ingeniería Informática en la Universidad de Burgos",
    en: "Computer Engineering student at the University of Burgos",
  },
  tags: {
    es: ["Inteligencia Artificial", "Desarrollo de Software", "Erasmus+"],
    en: ["Artificial Intelligence", "Software Development", "Erasmus+"],
  },
  status: {
    es: "Buscando prácticas o primer empleo",
    en: "Open to internships and junior roles",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/rodrigo-portugal-dev/",
    github: "https://github.com/rodrigoportugal-dev",
    cv: { es: "cv/CV_Rodrigo_Portugal_ES.pdf", en: "cv/CV_Rodrigo_Portugal_EN.pdf" },
    email: "",  // Opcional: tu email de contacto. Si lo dejas vacío no aparece.
  },
  about: {
    es: [
      "Estudiante de último curso de Ingeniería Informática en la Universidad de Burgos. Durante el grado he adquirido una base sólida y versátil en distintas áreas de la informática: ingeniería del software, datos e inteligencia artificial, seguridad informática, matemáticas y algoritmia, y gestión de proyectos con metodologías ágiles.",
      "Pasé un curso completo de Erasmus+ en la Universidad de Bohemia Occidental (Plzeň, República Checa), donde estudié asignaturas en inglés y aprendí a desenvolverme en un entorno internacional, conociendo lo básico de su idioma y su cultura.",
      "Busco una oportunidad profesional donde aplicar lo aprendido y seguir creciendo, especialmente en inteligencia artificial y desarrollo de software.",
    ],
    en: [
      "Final-year Computer Engineering student at the University of Burgos. Throughout my degree I have built a solid and versatile foundation across software engineering, data and artificial intelligence, cybersecurity, mathematics and algorithms, and agile project management.",
      "I spent a full academic year on an Erasmus+ exchange at the University of West Bohemia (Plzeň, Czech Republic), taking courses taught in English and learning to thrive in an international environment, while picking up the basics of the Czech language and culture.",
      "I am looking for a professional opportunity where I can apply what I have learned and keep growing, especially in artificial intelligence and software development.",
    ],
  },
};

const EDUCATION = [
  {
    school: { es: "Universidad de Burgos", en: "University of Burgos" },
    degree: { es: "Grado en Ingeniería Informática", en: "BSc in Computer Engineering" },
    dates: { es: "2022 – 2027", en: "2022 – 2027" },
    place: { es: "Burgos, España", en: "Burgos, Spain" },
    text: {
      es: "Base sólida y versátil en ingeniería del software, datos e inteligencia artificial, seguridad informática, matemáticas y algoritmia, y gestión de proyectos con metodologías ágiles.",
      en: "Solid, versatile foundation in software engineering, data and artificial intelligence, cybersecurity, mathematics and algorithms, and agile project management.",
    },
  },
  {
    school: {
      es: "Universidad de Bohemia Occidental (ZČU)",
      en: "University of West Bohemia (ZČU)",
    },
    degree: { es: "Estudiante de intercambio Erasmus+", en: "Erasmus+ Exchange Student" },
    dates: { es: "sept. 2025 – jun. 2026", en: "Sep 2025 – Jun 2026" },
    place: { es: "Plzeň, República Checa", en: "Plzeň, Czech Republic" },
    text: {
      es: "Curso académico completo de intercambio con asignaturas impartidas en inglés, centradas en inteligencia artificial y desarrollo de software.",
      en: "Full academic year abroad with courses taught in English, focused on artificial intelligence and software development.",
    },
  },
];

const EXPERIENCE = [
  {
    role: { es: "Operario de producción", en: "Production Operator" },
    company: "L'Oréal",
    dates: { es: "jun. 2025 – jul. 2025 · Jornada completa", en: "Jun 2025 – Jul 2025 · Full-time" },
    place: { es: "Burgos, España", en: "Burgos, Spain" },
    text: {
      es: "Montaje y preparación de productos en línea de producción, cumpliendo los estándares de calidad y los ritmos de producción.",
      en: "Assembly and preparation of products on a production line, meeting quality standards and production targets.",
    },
    skills: {
      es: ["Control de calidad", "Producción en cadena", "Seguridad en el trabajo", "Trabajo en equipo"],
      en: ["Quality control", "Assembly line production", "Workplace safety", "Teamwork"],
    },
  },
];

const SKILLS = [
  {
    group: { es: "Lenguajes y datos", en: "Languages & data" },
    items: {
      es: ["Java", "Python", "SQL", "PostgreSQL", "Modelado de datos", "Análisis estadístico"],
      en: ["Java", "Python", "SQL", "PostgreSQL", "Data modeling", "Statistical analysis"],
    },
  },
  {
    group: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    items: {
      es: ["Inteligencia artificial", "Aprendizaje automático", "Reconocimiento de patrones"],
      en: ["Artificial intelligence", "Machine learning", "Pattern recognition"],
    },
  },
  {
    group: { es: "Ingeniería del software", en: "Software engineering" },
    items: {
      es: ["Diseño de software", "Arquitectura de software", "Patrones de diseño", "UML", "Ingeniería de requisitos", "Pruebas de software", "Diseño de interfaces"],
      en: ["Software design", "Software architecture", "Design patterns", "UML", "Requirements engineering", "Software testing", "Interface design"],
    },
  },
  {
    group: { es: "Sistemas y seguridad", en: "Systems & security" },
    items: {
      es: ["Linux", "Redes TCP/IP", "Seguridad informática", "Criptografía", "Protección de datos", "Análisis de riesgos"],
      en: ["Linux", "TCP/IP networking", "Cybersecurity", "Cryptography", "Data protection", "Risk analysis"],
    },
  },
  {
    group: { es: "Algoritmia y matemáticas", en: "Algorithms & maths" },
    items: {
      es: ["Diseño de algoritmos", "Estructuras de datos", "Análisis numérico"],
      en: ["Algorithm design", "Data structures", "Numerical analysis"],
    },
  },
  {
    group: { es: "Gestión", en: "Management" },
    items: {
      es: ["Gestión de proyectos", "Scrum", "Metodologías ágiles"],
      en: ["Project management", "Scrum", "Agile methodologies"],
    },
  },
  {
    group: { es: "Personales e idiomas", en: "Soft skills & languages" },
    items: {
      es: ["Resolución de problemas", "Trabajo en equipo", "Comunicación", "Adaptabilidad", "Español (nativo)", "Inglés (B2)"],
      en: ["Problem solving", "Teamwork", "Communication", "Adaptability", "Spanish (native)", "English (B2)"],
    },
  },
];

const COURSES = [
  {
    school: { es: "Universidad de Burgos", en: "University of Burgos" },
    list: [
      "Álgebra Lineal", "Análisis y Diseño de Sistemas", "Arquitectura de Computadores",
      "Arquitecturas Paralelas", "Cálculo", "Estadística",
      "Fundamentos de Computadores", "Fundamentos de Organización y Gestión de Empresas",
      "Fundamentos Deontológicos y Jurídicos de las TIC", "Fundamentos Físicos de la Informática",
      "Gestión de Proyectos", "Informática Básica", "Ingeniería del Software",
      "Inglés Aplicado a la Informática", "Interacción Hombre-Máquina", "Matemática Discreta",
      "Nuevas Tecnologías y Empresa", "Redes", "Seguridad Informática",
    ],
  },
  {
    school: { es: "Universidad de Bohemia Occidental (ZČU)", en: "University of West Bohemia (ZČU)" },
    list: [
      "AI and Pattern Recognition", "Machine Learning", "Basics of Effective Programming",
      "Computers and Programming 2", "Database Systems", "Fundamentals of Operating Systems",
      "Fundamentals of Random Processes", "Fundamentals of Software Engineering",
      "Numerical Methods", "Software System Architectures",
    ],
  },
];

/*
  ============================================================
  PROYECTOS
  ============================================================
  Para añadir un proyecto, copia un bloque { ... } y cambia sus
  datos. Campos:

    status: "done" (terminado), "wip" (en curso) o "planned" (próximamente)
    title, text: texto en los dos idiomas
    tech: lista de tecnologías
    repo: enlace al código (GitHub). Déjalo "" si no hay.
    demo: enlace a una demo o vídeo. Déjalo "" si no hay.
    image: ruta a una captura, p. ej. "img/mi-proyecto.png". "" si no hay.

  Los proyectos aparecen en el mismo orden que aquí.
  ============================================================
*/

const PROJECTS = [
  {
    status: "done",
    title: { es: "Clasificador de noticias con IA", en: "AI news classifier" },
    text: {
      es: "Clasifica noticias de Reuters en 80 temas. Representaciones Binary, TF y TF-IDF y clasificadores Naive Bayes, distancia mínima y KNN programados desde cero, sin librerías de ML. Mejor resultado: 83,9 % de acierto, verificado contra scikit-learn. Proyecto del Erasmus en la ZČU, ampliado después con demo web, tests y métricas por clase.",
      en: "Classifies Reuters news articles into 80 topics. Binary, TF and TF-IDF features and Naive Bayes, Minimum Distance and KNN classifiers written from scratch, with no ML libraries. Best result: 83.9% accuracy, verified against scikit-learn. Erasmus project at ZČU, later extended with a web demo, tests and per-class metrics.",
    },
    tech: ["Python", "Machine Learning", "NLP", "Streamlit", "pytest"],
    repo: "https://github.com/rodrigoportugal-dev/reuters-classifier",
    demo: "https://reuters-classifier-rodrigo.streamlit.app/",
    image: "",
  },
  {
    status: "done",
    title: { es: "Portfolio personal", en: "Personal portfolio" },
    text: {
      es: "Esta misma web: una página bilingüe, con modo claro y oscuro, en la que todo el contenido sale de un único archivo de datos para que añadir proyectos sea inmediato.",
      en: "This very website: a bilingual page with light and dark modes, where all content comes from a single data file so adding new projects takes seconds.",
    },
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    repo: "https://github.com/rodrigoportugal-dev/rodrigoportugal-dev.github.io",
    demo: "",
    image: "",
  },
  {
    status: "planned",
    title: { es: "Trabajo Fin de Grado", en: "Bachelor's Thesis" },
    text: {
      es: "Proyecto de fin de carrera. Se desarrollará durante el segundo semestre del curso 2026-27.",
      en: "Final-year project, to be developed during the second semester of 2026-27.",
    },
    tech: [],
    repo: "",
    demo: "",
    image: "",
  },
];
