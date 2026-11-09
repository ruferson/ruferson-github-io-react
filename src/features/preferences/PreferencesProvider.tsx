import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { PreferencesContext } from './context'
import { defaultPreferences, type Preferences, type PreferencesApi } from './types'

interface PreferencesProviderProps {
  children: ReactNode
  /** Initial preferences values (useful for tests and Storybook). */
  initial?: Partial<Preferences>
}

/** Stores language, color theme, dark mode, and retro mode, reflecting them onto <html> and <body>. */
export function PreferencesProvider({ children, initial }: PreferencesProviderProps) {
  const [prefs, setPrefs] = useState<Preferences>({ ...defaultPreferences, ...initial })

  useEffect(() => {
    const html = document.documentElement
    html.lang = prefs.language
    html.dataset.theme = prefs.colorTheme
    html.classList.toggle('dark', prefs.isDark)
    document.body.classList.toggle('retro-mode', prefs.isRetro)
    return () => {
      html.classList.remove('dark')
      document.body.classList.remove('retro-mode')
    }
  }, [prefs])

  const api = useMemo<PreferencesApi>(
    () => ({
      ...prefs,
      setLanguage: (language) => setPrefs((p) => ({ ...p, language })),
      toggleLanguage: () =>
        setPrefs((p) => ({ ...p, language: p.language === 'es' ? 'en' : 'es' })),
      setColorTheme: (colorTheme) => setPrefs((p) => ({ ...p, colorTheme })),
      toggleDark: () => setPrefs((p) => ({ ...p, isDark: !p.isDark })),
      toggleRetro: () => setPrefs((p) => ({ ...p, isRetro: !p.isRetro })),
    }),
    [prefs],
  )

  return <PreferencesContext.Provider value={api}>{children}</PreferencesContext.Provider>
}
