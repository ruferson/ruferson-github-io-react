import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ColorThemePicker } from './ColorThemePicker'

describe('ColorThemePicker', () => {
  it('displays all four color themes', () => {
    renderWithProviders(<ColorThemePicker />)
    expect(screen.getAllByRole('button')).toHaveLength(4)
    expect(screen.getByRole('button', { name: 'Tono Esmeralda' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('switches the color theme and triggers a notification toast', async () => {
    renderWithProviders(<ColorThemePicker />)
    await userEvent.click(screen.getByRole('button', { name: 'Tono Índigo' }))
    expect(document.documentElement.dataset.theme).toBe('indigo')
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent('Tono Índigo activado'),
    )
  })

  it('hides the text label in floating variant', () => {
    renderWithProviders(<ColorThemePicker variant="floating" />)
    expect(screen.queryByText('Color:')).not.toBeInTheDocument()
  })
})
