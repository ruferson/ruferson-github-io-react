import { cn } from '@/lib/cn'
import { Icon } from '../Icon/Icon'

interface ToastProps {
  message: string
  visible: boolean
  className?: string
}

/** Floating notification toast (presentational). State is managed by <ToastProvider>. */
export function Toast({ message, visible, className }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'no-print pointer-events-none fixed bottom-32 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-xs text-white shadow-xl transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6 sm:justify-start dark:bg-slate-100 dark:text-slate-900',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        className,
      )}
    >
      <Icon name="check_circle" size={16} className="text-emerald-400 dark:text-emerald-600" />
      <span>{message}</span>
    </div>
  )
}
