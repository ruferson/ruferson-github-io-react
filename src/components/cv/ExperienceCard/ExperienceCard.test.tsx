import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ExperienceCard } from './ExperienceCard'

const item = experience[0]

describe('ExperienceCard', () => {
  it('displays title, company organization, and period in Spanish by default', () => {
    renderWithProviders(<ExperienceCard item={item} />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Desarrollador Frontend • React' }),
    ).toBeInTheDocument()
    expect(screen.getByText('NTT DATA')).toBeInTheDocument()
    expect(screen.getByText('Abr 2024 – Jul 2024')).toBeInTheDocument()
  })

  it('displays localized text contents when switched to English', () => {
    renderWithProviders(<ExperienceCard item={item} />, { preferences: { language: 'en' } })
    expect(screen.getByRole('heading', { name: 'Frontend Developer • React' })).toBeInTheDocument()
    expect(screen.getByText('Apr 2024 – Jul 2024')).toBeInTheDocument()
  })

  it('lists achievements and technology tags', () => {
    renderWithProviders(<ExperienceCard item={item} />)
    const techs = screen.getByRole('list', { name: 'Tecnologías usadas' })
    expect(within(techs).getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getAllByRole('listitem').length).toBe(item.bullets.length + 3)
  })

  it('omits technology list when no technologies are specified', () => {
    renderWithProviders(<ExperienceCard item={{ ...item, technologies: undefined }} />)
    expect(screen.queryByRole('list', { name: 'Tecnologías usadas' })).not.toBeInTheDocument()
  })
})
