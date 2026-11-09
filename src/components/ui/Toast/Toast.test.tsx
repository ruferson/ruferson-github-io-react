import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Toast } from './Toast'

describe('Toast', () => {
  it('displays the message within a status live region', () => {
    render(<Toast message="Copied" visible />)
    expect(screen.getByRole('status')).toHaveTextContent('Copied')
  })

  it('toggles visibility based on the visible prop', () => {
    const { rerender } = render(<Toast message="Hello" visible />)
    expect(screen.getByRole('status')).toHaveClass('opacity-100')
    rerender(<Toast message="Hello" visible={false} />)
    expect(screen.getByRole('status')).toHaveClass('opacity-0')
  })
})
