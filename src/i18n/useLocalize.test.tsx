import { renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { PreferencesProvider } from '@/features/preferences/PreferencesProvider'
import { useLocalize } from './useLocalize'

const wrapper =
  (language: 'es' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <PreferencesProvider initial={{ language }}>{children}</PreferencesProvider>
  )

describe('useLocalize', () => {
  it('resolves localized text according to active language', () => {
    const { result } = renderHook(() => useLocalize(), { wrapper: wrapper('en') })
    expect(result.current({ es: 'hola', en: 'hello' })).toBe('hello')
  })

  it('returns plain text strings unchanged', () => {
    const { result } = renderHook(() => useLocalize(), { wrapper: wrapper('es') })
    expect(result.current('React')).toBe('React')
  })
})
