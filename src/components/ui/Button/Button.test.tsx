import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'
import { buttonStyles } from './buttonStyles'

describe('Button', () => {
  it('calls onClick handler when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    await userEvent.click(screen.getByRole('button', { name: 'Click me' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('has type="button" by default', () => {
    render(<Button>Ok</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('applies the variant classes correctly', () => {
    render(<Button variant="primary">Ok</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-m3-primary')
  })

  it('displays leading and trailing icons', () => {
    render(
      <Button leadingIcon="print" trailingIcon="content_copy">
        Ok
      </Button>,
    )
    expect(screen.getByText('print')).toBeInTheDocument()
    expect(screen.getByText('content_copy')).toBeInTheDocument()
  })

  it('respects disabled attribute and does not fire onClick', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Ok
      </Button>,
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })
})

describe('buttonStyles', () => {
  it('includes additional custom classes', () => {
    expect(buttonStyles({ variant: 'dark', className: 'extra' })).toContain('extra')
  })
})
