import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { volunteer } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { VolunteerSection } from './VolunteerSection'

describe('VolunteerSection', () => {
  it('muestra título, entradas y nota', () => {
    renderWithProviders(<VolunteerSection items={volunteer} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Experiencia de Voluntariado' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Gestión IT & Compras' })).toBeInTheDocument()
    expect(screen.getByText('Voluntariado No Remunerado')).toBeInTheDocument()
  })

  it('traduce el contenido', () => {
    renderWithProviders(<VolunteerSection items={volunteer} />, { preferences: { language: 'en' } })
    expect(screen.getByText('Unpaid Volunteer Work')).toBeInTheDocument()
  })

  it('no renderiza artículos si no hay elementos', () => {
    renderWithProviders(<VolunteerSection items={[]} />)
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })
})
