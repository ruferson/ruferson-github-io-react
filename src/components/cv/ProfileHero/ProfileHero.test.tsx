import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ProfileHero } from './ProfileHero'

describe('ProfileHero', () => {
  it('displays full name, role, status badge, and portrait photo', () => {
    renderWithProviders(<ProfileHero profile={profile} />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Rubén Fernández Sánchez' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Junior Developer • Frontend & Fullstack')).toBeInTheDocument()
    expect(screen.getByText('Búsqueda Activa de Empleo')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Fotografía de Rubén Fernández Sánchez' }),
    ).toBeInTheDocument()
  })

  it('renders summary paragraphs with bold highlights', () => {
    renderWithProviders(<ProfileHero profile={profile} />)
    expect(screen.getAllByText('Junior Developer').some((el) => el.tagName === 'STRONG')).toBe(
      true,
    )
  })

  it('can hide the status badge via prop', () => {
    renderWithProviders(<ProfileHero profile={profile} showStatus={false} />)
    expect(screen.queryByText('Búsqueda Activa de Empleo')).not.toBeInTheDocument()
  })

  it('translates to English and includes contact details', () => {
    renderWithProviders(<ProfileHero profile={profile} />, { preferences: { language: 'en' } })
    expect(screen.getByText('Actively Seeking Employment')).toBeInTheDocument()
    expect(screen.getByText(profile.email)).toBeInTheDocument()
  })
})
