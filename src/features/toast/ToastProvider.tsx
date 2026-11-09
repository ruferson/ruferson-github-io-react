import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Toast } from '@/components/ui/Toast/Toast'
import { ToastContext } from './context'

interface ToastProviderProps {
  children: ReactNode
  /** Duration in milliseconds that the notification stays visible. */
  duration?: number
}

export function ToastProvider({ children, duration = 2500 }: ToastProviderProps) {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const showToast = useCallback(
    (next: string) => {
      clearTimeout(timer.current)
      setMessage(next)
      setVisible(true)
      timer.current = setTimeout(() => setVisible(false), duration)
    },
    [duration],
  )

  useEffect(() => () => clearTimeout(timer.current), [])

  const api = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <Toast message={message} visible={visible} />
    </ToastContext.Provider>
  )
}
