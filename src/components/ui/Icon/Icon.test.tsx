import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders both modern and retro versions', () => {
    const { container } = render(<Icon name="mail" />)
    expect(screen.getByText('mail')).toHaveClass('material-symbols-outlined', 'icon-modern')
    expect(container.querySelector('svg.icon-retro')).toBeInTheDocument()
  })

  it('uses branded vector SVG for github', () => {
    const { container } = render(<Icon name="github" />)
    expect(screen.queryByText('github')).not.toBeInTheDocument()
    expect(container.querySelector('svg.icon-modern')).toBeInTheDocument()
  })

  it('applies custom size and styling classes', () => {
    render(<Icon name="work" size={30} className="text-red-500" />)
    const el = screen.getByText('work')
    expect(el).toHaveStyle({ fontSize: '30px' })
    expect(el).toHaveClass('text-red-500')
  })
})
