import { useCallback } from 'react'

/** Returns a function that copies text to clipboard and resolves with `true` on success. */
export function useCopyToClipboard() {
  return useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }, [])
}
