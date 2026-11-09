import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ExperienceSection } from './ExperienceSection'

describe('ExperienceSection', () => {
  it('displays section heading and an article card for each experience item', () => {
    renderWithProviders(<ExperienceSection items={experience} />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experiencia Profesional' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(experience.length)
  })

  it('accepts a custom section title', () => {
    renderWithProviders(<ExperienceSection items={[]} title="Trabajos" />)
    expect(screen.getByRole('heading', { name: 'Trabajos' })).toBeInTheDocument()
  })

  it('translates the section heading when switched to English', () => {
    renderWithProviders(<ExperienceSection items={experience} />, {
      preferences: { language: 'en' },
    })
    expect(screen.getByRole('heading', { name: 'Professional Experience' })).toBeInTheDocument()
  })
})
