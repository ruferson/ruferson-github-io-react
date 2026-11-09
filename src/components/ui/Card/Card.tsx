import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type CardVariant = 'surface' | 'subtle' | 'hero' | 'panel'

const variants: Record<CardVariant, string> = {
  surface:
    'rounded-2xl p-4 bg-m3-surface-container/50 border border-slate-200/70 dark:border-slate-800',
  subtle:
    'rounded-xl p-3 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/50',
  hero: 'rounded-3xl p-4 sm:p-8 bg-m3-surface-container border border-m3-outline-variant/40 overflow-hidden',
  panel: 'rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
}

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article' | 'section'
  variant?: CardVariant
}

export function Card({ as: Tag = 'div', variant = 'surface', className, ...props }: CardProps) {
  return <Tag className={cn('retro-box', variants[variant], className)} {...props} />
}
