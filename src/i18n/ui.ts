import type { Localized } from '@/types/i18n'

const t = (es: string, en: string): Localized => ({ es, en })

/** UI text strings (not CV profile content). */
export const ui = {
  barLabel: t('Barra de controles principal', 'Main control bar'),
  toolbarLabel: t('Controles de personalización y acciones', 'Customization and action controls'),
  mobileLabel: t('Controles rápidos para móviles', 'Mobile quick controls'),

  retroOn: t('Estilo Moderno', 'Modern Style'),
  retroOff: t('8-Bit Mode', '8-Bit Mode'),
  retroTitleOn: t('Cambiar a Estilo Moderno', 'Switch to Modern Style'),
  retroTitleOff: t('Activar modo retro de 8 bits', 'Enable 8-Bit Retro Mode'),
  toastRetroOn: t('¡Modo Retro 8-Bits activado!', '8-Bit Retro Mode activated!'),
  toastRetroOff: t('Modo Moderno activado', 'Modern UI Mode restored'),

  langGroup: t('Selector de idioma', 'Language selector'),
  langEsAria: t('Cambiar idioma a Español', 'Switch language to Spanish'),
  langEnAria: t('Cambiar idioma a Inglés', 'Switch language to English'),
  toggleLangAria: t('Cambiar idioma entre Español e Inglés', 'Toggle language between Spanish and English'),
  toastLang: t('Idioma: Español', 'Language: English'),

  themeGroup: t('Selector de tema de color', 'Color theme selector'),
  themeLabel: t('Color:', 'Theme:'),

  titleDarkMode: t('Cambiar entre modo claro y oscuro', 'Toggle light and dark mode'),
  modeDark: t('Modo Oscuro', 'Dark Mode'),
  modeLight: t('Modo Claro', 'Light Mode'),
  toastDarkOn: t('Modo Oscuro activado', 'Dark Mode enabled'),
  toastDarkOff: t('Modo Claro activado', 'Light Mode enabled'),

  printBtn: t('Imprimir / PDF', 'Print / PDF'),
  printAria: t('Imprimir currículum o guardar como PDF', 'Print résumé or save as PDF'),

  contactLabel: t('Información de contacto', 'Contact information'),
  copyPhoneAria: t('Copiar número de teléfono', 'Copy phone number'),
  copyEmailAria: t('Copiar dirección de correo electrónico', 'Copy email address'),
  toastPhoneCopied: t('Teléfono copiado', 'Phone copied to clipboard'),
  toastEmailCopied: t('Email copiado', 'Email copied to clipboard'),
  githubAria: t('Perfil de GitHub (se abre en pestaña nueva)', 'GitHub profile (opens in a new tab)'),

  techLabel: t('Tecnologías usadas', 'Technologies used'),
  experience: t('Experiencia Profesional', 'Professional Experience'),
  volunteer: t('Experiencia de Voluntariado', 'Volunteer Experience'),
  education: t('Formación Académica', 'Education & Qualifications'),
  skills: t('Aptitudes & Competencias', 'Skills & Competencies'),
  footerLabel: t('Pie de página del currículum', 'Résumé footer'),
  footerUpdated: t('Última actualización: 2026', 'Last updated: 2026'),
} as const satisfies Record<string, Localized>
