import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/pixelIcons'

export type ChipVariant = 'skill' | 'tag' | 'badge' | 'success' | 'gold' | 'info' | 'level' | 'outline'

const variants: Record<ChipVariant, string> = {
  skill:
    'px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200',
  tag: 'px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300',
  badge: 'px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-m3-primary text-white shadow-xs',
  success:
    'px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800',
  gold: 'w-full px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 font-bold text-[11px]',
  info: 'w-full px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200 font-medium text-[11px]',
  level: 'px-3 py-1 rounded-full text-xs font-extrabold bg-m3-primary text-white',
  outline:
    'px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-medium shadow-xs',
}

const iconColors: Partial<Record<ChipVariant, string>> = {
  gold: 'text-amber-600',
  info: 'text-blue-600',
  outline: 'text-m3-primary',
}

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant
  icon?: IconName
  /** Shows an animated status pulse dot (e.g., "actively seeking"). */
  pulse?: boolean
}

export function Chip({ variant = 'skill', icon, pulse, className, children, ...props }: ChipProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5', variants[variant], className)} {...props}>
      {pulse && (
        <span
          data-testid="chip-pulse"
          className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
          aria-hidden="true"
        />
      )}
      {icon && <Icon name={icon} size={16} className={iconColors[variant]} />}
      {children}
    </span>
  )
}
