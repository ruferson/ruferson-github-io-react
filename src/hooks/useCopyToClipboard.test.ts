import { renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { useCopyToClipboard } from './useCopyToClipboard'

describe('useCopyToClipboard', () => {
  it('copies text and returns true', async () => {
    userEvent.setup() // installs mock clipboard
    const { result } = renderHook(() => useCopyToClipboard())
    await expect(result.current('hello')).resolves.toBe(true)
    expect(await navigator.clipboard.readText()).toBe('hello')
  })

  it('returns false when clipboard write fails', async () => {
    userEvent.setup()
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('fail'))
    const { result } = renderHook(() => useCopyToClipboard())
    await expect(result.current('hello')).resolves.toBe(false)
  })
})
