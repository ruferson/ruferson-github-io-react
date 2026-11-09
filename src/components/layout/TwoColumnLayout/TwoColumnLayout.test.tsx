import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TwoColumnLayout } from './TwoColumnLayout'

describe('TwoColumnLayout', () => {
  it('places respective content into main and aside columns', () => {
    render(<TwoColumnLayout main={<p>Main</p>} aside={<p>Sidebar</p>} />)
    expect(screen.getByTestId('column-main')).toHaveTextContent('Main')
    expect(screen.getByTestId('column-aside')).toHaveTextContent('Sidebar')
  })

  it('uses 7 and 5 column spans respectively', () => {
    render(<TwoColumnLayout main="a" aside="b" />)
    expect(screen.getByTestId('column-main')).toHaveClass('lg:col-span-7')
    expect(screen.getByTestId('column-aside')).toHaveClass('lg:col-span-5')
  })
})
