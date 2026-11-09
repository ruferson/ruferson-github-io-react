import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import App from './App'

describe('App', () => {
  it('renders the main CV sections', () => {
    renderWithProviders(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Rubén Fernández Sánchez' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experiencia Profesional' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Formación Académica' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Aptitudes & Competencias' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experiencia de Voluntariado' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('switches all content to English', async () => {
    renderWithProviders(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a Inglés' }))
    expect(
      await screen.findByRole('heading', { name: 'Professional Experience' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills & Competencies' })).toBeInTheDocument()
  })

  it('contains a single <main> landmark and a control bar', () => {
    renderWithProviders(<App />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getByRole('toolbar')).toBeInTheDocument()
  })
})
