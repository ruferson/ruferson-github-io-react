import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
  it('renders as a div by default', () => {
    render(<Card data-testid="c">Hello</Card>)
    expect(screen.getByTestId('c').tagName).toBe('DIV')
  })

  it('can be rendered as an article element', () => {
    render(<Card as="article">Hello</Card>)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('applies variant and custom CSS classes', () => {
    render(<Card variant="hero" className="mb-8" data-testid="c" />)
    expect(screen.getByTestId('c')).toHaveClass('rounded-3xl', 'mb-8', 'retro-box')
  })
})
