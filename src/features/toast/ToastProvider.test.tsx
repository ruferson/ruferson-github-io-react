import { act, render, renderHook, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ToastProvider } from './ToastProvider'
import { useToast } from './useToast'

function Trigger() {
  const { showToast } = useToast()
  return <button onClick={() => showToast('Hello')}>show</button>
}

describe('ToastProvider', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('displays the message and hides it after the duration expires', () => {
    render(
      <ToastProvider duration={1000}>
        <Trigger />
      </ToastProvider>,
    )
    act(() => screen.getByText('show').click())
    expect(screen.getByRole('status')).toHaveTextContent('Hello')
    expect(screen.getByRole('status')).toHaveClass('opacity-100')
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByRole('status')).toHaveClass('opacity-0')
  })

  it('throws an error outside the provider', () => {
    expect(() => renderHook(() => useToast())).toThrow(
      'useToast must be used within <ToastProvider>',
    )
  })
})
