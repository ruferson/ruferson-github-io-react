import type { Language } from '@/types/i18n'

export type ColorTheme = 'emerald' | 'ocean' | 'indigo' | 'amber'

export interface Preferences {
  language: Language
  colorTheme: ColorTheme
  isDark: boolean
  isRetro: boolean
}

export interface PreferencesApi extends Preferences {
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  setColorTheme: (theme: ColorTheme) => void
  toggleDark: () => void
  toggleRetro: () => void
}

export const defaultPreferences: Preferences = {
  language: 'es',
  colorTheme: 'emerald',
  isDark: false,
  isRetro: false,
}
