import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { DarkModeToggle } from './DarkModeToggle'

describe('DarkModeToggle', () => {
  it('toggles dark mode on and off', async () => {
    renderWithProviders(<DarkModeToggle />)
    const button = screen.getByRole('button', { name: 'Cambiar entre modo claro y oscuro' })
    await userEvent.click(button)
    expect(document.documentElement).toHaveClass('dark')
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent('Modo Oscuro activado'),
    )
    await userEvent.click(button)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('switches icon according to active color scheme', async () => {
    renderWithProviders(<DarkModeToggle variant="icon" />)
    expect(screen.getByText('dark_mode')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('light_mode')).toBeInTheDocument()
  })

  it('translates button accessible label', () => {
    renderWithProviders(<DarkModeToggle />, { preferences: { language: 'en' } })
    expect(screen.getByRole('button', { name: 'Toggle light and dark mode' })).toBeInTheDocument()
  })
})
