import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { education } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { EducationCard } from './EducationCard'

const [degree, cert, fce] = education

describe('EducationCard', () => {
  it('displays a degree qualification with period and key highlights', () => {
    renderWithProviders(<EducationCard item={degree} />)
    expect(screen.getByRole('heading', { name: 'Grado Superior en DAW' })).toBeInTheDocument()
    expect(screen.getByText('CIFP Carlos III, Cartagena')).toBeInTheDocument()
    expect(screen.getByText('2020 – 2022')).toBeInTheDocument()
    expect(screen.getByText('Matrícula de Honor (Nota media: 9.0)')).toBeInTheDocument()
    expect(screen.getByText(/2º Puesto/)).toBeInTheDocument()
  })

  it('displays a certification with issue date', () => {
    renderWithProviders(<EducationCard item={cert} />)
    expect(screen.getByText('Agosto 2023')).toBeInTheDocument()
  })

  it('displays the language proficiency level badge', () => {
    renderWithProviders(<EducationCard item={fce} />)
    expect(screen.getByText('Nivel B2')).toBeInTheDocument()
  })

  it('translates text contents when English is selected', () => {
    renderWithProviders(<EducationCard item={fce} />, { preferences: { language: 'en' } })
    expect(screen.getByText('Level B2')).toBeInTheDocument()
  })
})
