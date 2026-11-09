import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { profile } from '@/data/cv'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ContactBar } from './ContactBar'

describe('ContactBar', () => {
  it('displays location, phone, email, and GitHub profile link', () => {
    renderWithProviders(<ContactBar profile={profile} />)
    expect(screen.getByText('Cartagena (Murcia), España')).toBeInTheDocument()
    expect(screen.getByText('+34 644 86 54 06')).toBeInTheDocument()
    expect(screen.getByText(profile.email)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /GitHub/ })
    expect(link).toHaveAttribute('href', profile.github.url)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('copies phone number and displays toast notification', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ContactBar profile={profile} />)
    await user.click(screen.getByRole('button', { name: /Copiar número de teléfono/ }))
    expect(await navigator.clipboard.readText()).toBe(profile.phone)
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Teléfono copiado'))
  })

  it('copies email and displays toast notification in English', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ContactBar profile={profile} />, { preferences: { language: 'en' } })
    await user.click(screen.getByRole('button', { name: /Copy email address/ }))
    expect(await navigator.clipboard.readText()).toBe(profile.email)
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent('Email copied to clipboard'),
    )
  })
})
