import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RichText } from './RichText'

describe('RichText', () => {
  it('converts **text** into strong bold elements', () => {
    render(
      <p>
        <RichText>{'Hello **world** and **React**'}</RichText>
      </p>,
    )
    const bold = screen.getAllByText(/world|React/)
    expect(bold).toHaveLength(2)
    bold.forEach((el) => expect(el.tagName).toBe('STRONG'))
  })

  it('leaves plain text intact without markup', () => {
    render(
      <p>
        <RichText>Plain text</RichText>
      </p>,
    )
    expect(screen.getByText('Plain text')).toBeInTheDocument()
  })
})
