import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

/** Main landmark <main> and sheet container holding the CV. */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className="mx-auto my-6 max-w-5xl px-3 pb-12 sm:px-4 print:my-0 print:px-0">
      <div
        className={cn(
          'page-container retro-box overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl transition-colors sm:p-10 dark:border-slate-800 dark:bg-slate-900',
          className,
        )}
      >
        {children}
      </div>
    </main>
  )
}
