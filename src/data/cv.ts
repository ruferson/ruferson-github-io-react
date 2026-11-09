import type {
  EducationItem,
  ExperienceItem,
  Profile,
  SkillGroupData,
  VolunteerItem,
} from '@/types/cv'

/** All CV content lives here: edit this file to update the site. */

export const profile: Profile = {
  name: 'Rubén Fernández Sánchez',
  brand: 'Rubén Fernández • CV',
  role: 'Junior Developer • Frontend & Fullstack',
  status: { es: 'Búsqueda Activa de Empleo', en: 'Actively Seeking Employment' },
  footerStatus: {
    es: 'Junior Developer en Búsqueda Activa',
    en: 'Junior Developer • Actively Seeking Opportunities',
  },
  summary: {
    es: '**Junior Developer** entusiasmado por la ingeniería de software y con una fuerte motivación por seguir aprendiendo y perfeccionarme de forma continua. Cuento con capacidad versátil para trabajar en **frontend, backend, APIs y microservicios** (proyectos disponibles en mi GitHub), además de ser **experto en el uso e integración de Inteligencia Artificial (IA) en cualquier caso de uso**.',
    en: 'Enthusiastic **Junior Developer** with a strong passion for software engineering and continuous learning. Possess a versatile skill set across **frontend, backend, APIs, and microservices** (projects available on GitHub), alongside expertise in **integrating Artificial Intelligence (AI) solutions into diverse use cases**.',
  },
  location: { es: 'Cartagena (Murcia), España', en: 'Cartagena (Murcia), Spain' },
  phone: '+34644865406',
  phoneDisplay: '+34 644 86 54 06',
  email: 'fs.ruben02@gmail.com',
  github: { url: 'https://github.com/ruferson', label: 'github.com/ruferson' },
  photo: `${import.meta.env.BASE_URL}profile_photo.jpeg`,
  photoAlt: {
    es: 'Fotografía de Rubén Fernández Sánchez',
    en: 'Portrait of Rubén Fernández Sánchez',
  },
}

export const experience: ExperienceItem[] = [
  {
    id: 'ntt-data',
    title: { es: 'Desarrollador Frontend • React', en: 'Frontend Developer • React' },
    organization: 'NTT DATA',
    period: { es: 'Abr 2024 – Jul 2024', en: 'Apr 2024 – Jul 2024' },
    bullets: [
      {
        es: 'Desarrollo de componentes modulares utilizando **React**, **TypeScript** y **Storybook**.',
        en: 'Developed modular UI components utilizing **React**, **TypeScript**, and **Storybook**.',
      },
      {
        es: 'Migración y actualización de librerías de interfaz, resolviendo conflictos de dependencias.',
        en: 'Migrated and updated UI libraries, resolving complex dependency conflicts.',
      },
      {
        es: 'Colaboración multidisciplinar con equipos de diseño y QA bajo metodologías ágiles.',
        en: 'Multidisciplinary collaboration with design and QA teams under agile methodologies.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Storybook'],
  },
  {
    id: 'looplan',
    title: { es: 'Desarrollador Mobile • React Native', en: 'Mobile Developer • React Native' },
    organization: 'Looplan SL',
    period: { es: 'Sept 2023 – Mar 2024', en: 'Sep 2023 – Mar 2024' },
    bullets: [
      {
        es: 'Creación de aplicaciones móviles con **React Native** y **TypeScript**.',
        en: 'Engineered mobile applications using **React Native** and **TypeScript**.',
      },
      {
        es: 'Implementación de animaciones avanzadas, gestos fluidos y conexión a **Firebase**.',
        en: 'Implemented advanced animations, smooth touch gestures, and **Firebase** backend services integration.',
      },
    ],
    technologies: ['React Native', 'Firebase'],
  },
  {
    id: 'gpm',
    title: { es: 'Desarrollador Web • React & Angular', en: 'Web Developer • React & Angular' },
    organization: 'GreenPowerMonitor (DNV)',
    period: { es: 'Abr 2022 – Jul 2023', en: 'Apr 2022 – Jul 2023' },
    bullets: [
      {
        es: 'Desarrollo de interfaces de usuario para monitorización energética en tiempo real.',
        en: 'Built user interfaces for real-time energy monitoring platforms.',
      },
      {
        es: 'Visualización de gráficos complejos y consumo de APIs con **GraphQL**.',
        en: 'Visualized complex data charts and consumed backend services via **GraphQL**.',
      },
    ],
    technologies: ['React', 'Angular', 'GraphQL'],
  },
]

export const volunteer: VolunteerItem[] = [
  {
    id: 'it-purchasing',
    title: { es: 'Gestión IT & Compras', en: 'IT & Purchasing Management' },
    note: { es: 'Voluntariado No Remunerado', en: 'Unpaid Volunteer Work' },
    period: { es: 'Sept 2024 – Ago 2026', en: 'Sep 2024 – Aug 2026' },
    bullets: [
      {
        es: 'Contacto con proveedores para adquisición de artículos y alquiler de maquinaria.',
        en: 'Communication with vendors and suppliers for item procurement and machinery rentals.',
      },
      {
        es: 'Gestión básica de permisos informáticos y accesos dentro de la organización.',
        en: 'Basic management of user IT permissions and internal organizational access control.',
      },
    ],
  },
]

export const education: EducationItem[] = [
  {
    id: 'daw',
    title: {
      es: 'Grado Superior en DAW',
      en: 'Higher Degree in Web Application Development (DAW)',
    },
    institution: 'CIFP Carlos III, Cartagena',
    period: '2020 – 2022',
    highlights: [
      {
        id: 'honors',
        icon: 'workspace_premium',
        tone: 'gold',
        text: { es: 'Matrícula de Honor (Nota media: 9.0)', en: 'Graduated with Honors (GPA: 9.0/10)' },
      },
      {
        id: 'juezlti',
        icon: 'emoji_events',
        tone: 'info',
        text: {
          es: '2º Puesto Competición JuezLTI (EU Code Week)',
          en: '2nd Place JuezLTI Competition (EU Code Week)',
        },
      },
    ],
  },
  {
    id: 'rn-cert',
    title: { es: 'Certificación en Desarrollo Móvil', en: 'Mobile Development Certification' },
    institution: 'Udemy • React Native',
    period: { es: 'Agosto 2023', en: 'August 2023' },
  },
  {
    id: 'fce',
    title: 'First Certificate in English (FCE)',
    institution: 'Cambridge',
    badge: { es: 'Nivel B2', en: 'Level B2' },
  },
]

export const skillGroups: SkillGroupData[] = [
  {
    id: 'technical',
    title: { es: 'Competencias Técnicas', en: 'Technical Skills' },
    icon: 'code',
    kind: 'chips',
    items: [
      { es: 'Frontend (Web & Mobile)', en: 'Frontend (Web & Mobile)' },
      { es: 'Backend (APIs & Microservicios)', en: 'Backend (APIs & Microservices)' },
    ],
  },
  {
    id: 'soft',
    title: { es: 'Habilidades Profesionales', en: 'Soft Skills' },
    icon: 'psychology',
    kind: 'list',
    items: [
      { es: 'Comunicación con el equipo', en: 'Team Communication' },
      { es: 'Proactividad', en: 'Proactivity' },
      { es: 'Ganas de entender la empresa y sus objetivos', en: 'Eagerness to understand business goals' },
      { es: 'Comprensión del marco completo', en: 'Big-picture understanding' },
      { es: 'Humor', en: 'Sense of Humor' },
    ],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas & Entornos', en: 'Tools & Tech Stack' },
    icon: 'build',
    kind: 'chips',
    items: ['React (Web & Native)', 'Flutter (Web & Mobile)', 'NextJS', 'NestJS', 'FastAPI (Python)'],
  },
]
