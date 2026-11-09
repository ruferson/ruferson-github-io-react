import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SegmentedControl } from './SegmentedControl'

const options = [
  { value: 'a', label: 'A', ariaLabel: 'Option A' },
  { value: 'b', label: 'B', ariaLabel: 'Option B' },
] as const

describe('SegmentedControl', () => {
  it('marks active option with aria-pressed', () => {
    render(<SegmentedControl options={options} value="a" onChange={() => {}} ariaLabel="Group" />)
    expect(screen.getByRole('button', { name: 'Option A' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Option B' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onChange with the selected value', async () => {
    const onChange = vi.fn()
    render(<SegmentedControl options={options} value="a" onChange={onChange} ariaLabel="Group" />)
    await userEvent.click(screen.getByRole('button', { name: 'Option B' }))
    expect(onChange).toHaveBeenCalledWith('b')
  })

  it('exposes the accessible role="group" landmark', () => {
    render(<SegmentedControl options={options} value="a" onChange={() => {}} ariaLabel="Group" />)
    expect(screen.getByRole('group', { name: 'Group' })).toBeInTheDocument()
  })
})
