import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { RetroModeToggle } from './RetroModeToggle'

describe('RetroModeToggle', () => {
  it('toggles 8-bit retro mode class on document.body', async () => {
    renderWithProviders(<RetroModeToggle />)
    await userEvent.click(screen.getByRole('button', { name: 'Activar modo retro de 8 bits' }))
    expect(document.body).toHaveClass('retro-mode')
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent('¡Modo Retro 8-Bits activado!'),
    )
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar a Estilo Moderno' }))
    expect(document.body).not.toHaveClass('retro-mode')
  })

  it('updates button text label according to mode', async () => {
    renderWithProviders(<RetroModeToggle />)
    expect(screen.getByText('8-Bit Mode')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Estilo Moderno')).toBeInTheDocument()
  })

  it('does not render text label in icon variant', () => {
    renderWithProviders(<RetroModeToggle variant="icon" />)
    expect(screen.queryByText('8-Bit Mode')).not.toBeInTheDocument()
  })
})
