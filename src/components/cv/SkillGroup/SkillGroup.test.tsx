import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { skillGroups } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { SkillGroup } from './SkillGroup'

const [technical, soft] = skillGroups

describe('SkillGroup', () => {
  it('muestra el título y las etiquetas', () => {
    renderWithProviders(<SkillGroup group={technical} />)
    expect(screen.getByRole('heading', { level: 4, name: /Competencias Técnicas/ })).toBeInTheDocument()
    expect(screen.getByText('Frontend (Web & Mobile)')).toBeInTheDocument()
  })

  it('muestra una lista de viñetas cuando kind es list', () => {
    renderWithProviders(<SkillGroup group={soft} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(soft.items.length)
    expect(screen.getByText('Proactividad')).toBeInTheDocument()
  })

  it('traduce los elementos', () => {
    renderWithProviders(<SkillGroup group={soft} />, { preferences: { language: 'en' } })
    expect(screen.getByText('Proactivity')).toBeInTheDocument()
  })
})
