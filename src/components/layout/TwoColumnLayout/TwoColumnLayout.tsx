import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TwoColumnLayoutProps {
  main: ReactNode
  aside: ReactNode
  className?: string
}

/** 12-column responsive grid: 7 columns for primary content, 5 columns for sidebar on large screens. */
export function TwoColumnLayout({ main, aside, className }: TwoColumnLayoutProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-8 lg:grid-cols-12', className)}>
      <div data-testid="column-main" className="space-y-6 lg:col-span-7">{main}</div>
      <div data-testid="column-aside" className="space-y-6 lg:col-span-5">{aside}</div>
    </div>
  )
}
