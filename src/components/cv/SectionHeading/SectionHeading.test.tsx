import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders an h2 heading with id and title text', () => {
    render(<SectionHeading id="t" title="Experiencia" icon="work" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Experiencia' })).toHaveAttribute(
      'id',
      't',
    )
  })

  it('applies the secondary tone container styling', () => {
    const { container } = render(
      <SectionHeading id="t" title="X" icon="school" tone="secondary" />,
    )
    expect(container.querySelector('.bg-m3-secondary-container')).toBeInTheDocument()
  })

  it('applies uppercase typography for the muted variant', () => {
    render(<SectionHeading id="t" title="X" icon="volunteer_activism" variant="muted" />)
    expect(screen.getByRole('heading')).toHaveClass('uppercase')
  })
})
