import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BulletList } from './BulletList'

describe('BulletList', () => {
  it('renders a list item for each entry', () => {
    render(<BulletList items={['One', 'Two **bold**']} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByText('bold').tagName).toBe('STRONG')
  })

  it('accepts additional CSS class names', () => {
    render(<BulletList items={['One']} className="text-xs" />)
    expect(screen.getByRole('list')).toHaveClass('text-xs')
  })
})
