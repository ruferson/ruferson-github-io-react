import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PageContainer } from './PageContainer'

describe('PageContainer', () => {
  it('renders a main landmark with content', () => {
    render(<PageContainer>Content</PageContainer>)
    expect(screen.getByRole('main')).toHaveTextContent('Content')
  })

  it('accepts additional custom CSS classes on the container sheet', () => {
    render(<PageContainer className="extra">X</PageContainer>)
    expect(screen.getByText('X')).toHaveClass('page-container', 'extra')
  })
})
