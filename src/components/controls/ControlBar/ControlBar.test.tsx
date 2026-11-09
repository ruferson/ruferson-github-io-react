import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ControlBar } from './ControlBar'

describe('ControlBar', () => {
  it('displays the brand logo text', () => {
    renderWithProviders(<ControlBar brand="Rubén • CV" />)
    expect(screen.getByText('Rubén • CV')).toBeInTheDocument()
  })

  it('groups controls within a dedicated toolbar landmark', () => {
    renderWithProviders(<ControlBar brand="x" />)
    const toolbar = screen.getByRole('toolbar', {
      name: 'Controles de personalización y acciones',
    })
    expect(within(toolbar).getByRole('group', { name: 'Selector de idioma' })).toBeInTheDocument()
    expect(within(toolbar).getByRole('button', { name: /Imprimir/ })).toBeInTheDocument()
  })

  it('translates header labels when language is changed', () => {
    renderWithProviders(<ControlBar brand="x" />, { preferences: { language: 'en' } })
    expect(screen.getByRole('banner', { name: 'Main control bar' })).toBeInTheDocument()
  })
})
