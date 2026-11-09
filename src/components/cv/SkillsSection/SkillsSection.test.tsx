import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { skillGroups } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { SkillsSection } from './SkillsSection'

describe('SkillsSection', () => {
  it('muestra el título y un grupo por categoría', () => {
    renderWithProviders(<SkillsSection groups={skillGroups} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Aptitudes & Competencias' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(skillGroups.length)
  })

  it('traduce el título', () => {
    renderWithProviders(<SkillsSection groups={skillGroups} />, { preferences: { language: 'en' } })
    expect(screen.getByRole('heading', { name: 'Skills & Competencies' })).toBeInTheDocument()
  })
})
