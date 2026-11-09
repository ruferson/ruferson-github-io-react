import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { Footer } from './Footer'

describe('Footer', () => {
  it('displays location, status, and last update information', () => {
    renderWithProviders(<Footer location={profile.location} status={profile.footerStatus} />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(
      'Cartagena (Murcia), España • Junior Developer en Búsqueda Activa',
    )
    expect(footer).toHaveTextContent('Última actualización: 2026')
  })

  it('translates content when language is switched', () => {
    renderWithProviders(<Footer location={profile.location} status={profile.footerStatus} />, {
      preferences: { language: 'en' },
    })
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Last updated: 2026')
  })

  it('accepts a custom update text', () => {
    renderWithProviders(<Footer location="A" status="B" updated="v1.0" />)
    expect(screen.getByText('v1.0')).toBeInTheDocument()
  })
})
