import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { LanguageSwitcher } from './LanguageSwitcher'

describe('LanguageSwitcher', () => {
  it('marks active language option', () => {
    renderWithProviders(<LanguageSwitcher />)
    expect(screen.getByRole('button', { name: 'Cambiar idioma a Español' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('switches language, updates document lang attribute, and shows toast notification', async () => {
    renderWithProviders(<LanguageSwitcher />)
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar idioma a Inglés' }))
    expect(document.documentElement.lang).toBe('en')
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Language: English'))
  })

  it('renders in English when language preference is en', () => {
    renderWithProviders(<LanguageSwitcher />, { preferences: { language: 'en' } })
    expect(screen.getByRole('group', { name: 'Language selector' })).toBeInTheDocument()
  })
})
