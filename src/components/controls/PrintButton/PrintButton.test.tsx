import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/test/renderWithProviders'
import { PrintButton } from './PrintButton'

describe('PrintButton', () => {
  it('calls onPrint handler when clicked', async () => {
    const onPrint = vi.fn()
    renderWithProviders(<PrintButton onPrint={onPrint} />)
    await userEvent.click(
      screen.getByRole('button', { name: 'Imprimir currículum o guardar como PDF' }),
    )
    expect(onPrint).toHaveBeenCalledOnce()
  })

  it('triggers window.print by default', async () => {
    const print = vi.spyOn(window, 'print').mockImplementation(() => {})
    renderWithProviders(<PrintButton />)
    await userEvent.click(screen.getByRole('button'))
    expect(print).toHaveBeenCalled()
  })

  it('displays the localized label in English', () => {
    renderWithProviders(<PrintButton />, { preferences: { language: 'en' } })
    expect(screen.getByText('Print / PDF')).toBeInTheDocument()
  })
})
