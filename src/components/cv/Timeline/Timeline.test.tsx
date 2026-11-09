import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Timeline, TimelineItem } from './Timeline'

describe('Timeline', () => {
  it('renderiza los elementos con su punto', () => {
    render(
      <Timeline>
        <TimelineItem>Uno</TimelineItem>
        <TimelineItem>Dos</TimelineItem>
      </Timeline>,
    )
    expect(screen.getByText('Uno')).toBeInTheDocument()
    expect(screen.getAllByTestId('timeline-dot')).toHaveLength(2)
  })

  it('la variante compact usa puntos pequeños', () => {
    render(<Timeline variant="compact"><TimelineItem variant="compact">X</TimelineItem></Timeline>)
    expect(screen.getByTestId('timeline-dot')).toHaveClass('h-2.5')
  })
})
