import { render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PreferencesProvider } from './PreferencesProvider'
import { usePreferences } from './usePreferences'

function Probe() {
  const p = usePreferences()
  return (
    <>
      <span data-testid="state">{`${p.language}|${p.colorTheme}|${p.isDark}|${p.isRetro}`}</span>
      <button onClick={p.toggleLanguage}>lang</button>
      <button onClick={() => p.setColorTheme('indigo')}>theme</button>
      <button onClick={p.toggleDark}>dark</button>
      <button onClick={p.toggleRetro}>retro</button>
    </>
  )
}

describe('PreferencesProvider', () => {
  it('uses default values', () => {
    render(
      <PreferencesProvider>
        <Probe />
      </PreferencesProvider>,
    )
    expect(screen.getByTestId('state')).toHaveTextContent('es|emerald|false|false')
    expect(document.documentElement.dataset.theme).toBe('emerald')
  })

  it('updates state and the DOM', async () => {
    const user = userEvent.setup()
    render(
      <PreferencesProvider>
        <Probe />
      </PreferencesProvider>,
    )
    await user.click(screen.getByText('lang'))
    await user.click(screen.getByText('theme'))
    await user.click(screen.getByText('dark'))
    await user.click(screen.getByText('retro'))
    expect(screen.getByTestId('state')).toHaveTextContent('en|indigo|true|true')
    expect(document.documentElement.lang).toBe('en')
    expect(document.documentElement.dataset.theme).toBe('indigo')
    expect(document.documentElement).toHaveClass('dark')
    expect(document.body).toHaveClass('retro-mode')
  })

  it('accepts initial values', () => {
    render(
      <PreferencesProvider initial={{ isDark: true }}>
        <Probe />
      </PreferencesProvider>,
    )
    expect(document.documentElement).toHaveClass('dark')
  })

  it('throws an error outside the provider', () => {
    expect(() => renderHook(() => usePreferences())).toThrow(
      'usePreferences must be used within <PreferencesProvider>',
    )
  })
})
