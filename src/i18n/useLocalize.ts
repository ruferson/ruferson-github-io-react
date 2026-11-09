import { useCallback } from 'react'
import { usePreferences } from '@/features/preferences/usePreferences'
import type { Text } from '@/types/i18n'

/** Returns a function that resolves a `Text` value into the active language string. */
export function useLocalize() {
  const { language } = usePreferences()
  return useCallback(
    (text: Text): string => (typeof text === 'string' ? text : text[language]),
    [language],
  )
}
