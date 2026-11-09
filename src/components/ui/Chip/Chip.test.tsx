import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  it('displays the content', () => {
    render(<Chip>React</Chip>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('applies the variant classes', () => {
    render(<Chip variant="level">B2</Chip>)
    expect(screen.getByText('B2')).toHaveClass('bg-m3-primary')
  })

  it('shows the animated dot when pulse is enabled', () => {
    render(<Chip pulse>Active</Chip>)
    expect(screen.getByTestId('chip-pulse')).toBeInTheDocument()
  })

  it('displays an icon alongside text', () => {
    render(
      <Chip icon="emoji_events" variant="gold">
        Award
      </Chip>,
    )
    expect(screen.getByText('emoji_events')).toBeInTheDocument()
  })
})
