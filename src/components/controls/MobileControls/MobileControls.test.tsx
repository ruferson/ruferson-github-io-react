import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { MobileControls } from './MobileControls'

describe('MobileControls', () => {
  it('exposes the quick controls group landmark', () => {
    renderWithProviders(<MobileControls />)
    expect(
      screen.getByRole('group', { name: 'Controles rápidos para móviles' }),
    ).toBeInTheDocument()
  })

  it('toggles language when clicking the flag button', async () => {
    renderWithProviders(<MobileControls />)
    await userEvent.click(
      screen.getByRole('button', { name: 'Cambiar idioma entre Español e Inglés' }),
    )
    expect(document.documentElement.lang).toBe('en')
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Language: English'))
  })

  it('includes dark mode toggle and color theme picker', () => {
    renderWithProviders(<MobileControls />)
    expect(
      screen.getByRole('button', { name: 'Cambiar entre modo claro y oscuro' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Selector de tema de color' })).toBeInTheDocument()
  })
})
