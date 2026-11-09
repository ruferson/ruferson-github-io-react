import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { education } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { EducationSection } from './EducationSection'

describe('EducationSection', () => {
  it('displays section heading and a card per education entry', () => {
    renderWithProviders(<EducationSection items={education} />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Formación Académica' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(education.length)
  })

  it('translates the section heading when language is set to English', () => {
    renderWithProviders(<EducationSection items={education} />, { preferences: { language: 'en' } })
    expect(screen.getByRole('heading', { name: 'Education & Qualifications' })).toBeInTheDocument()
  })
})
