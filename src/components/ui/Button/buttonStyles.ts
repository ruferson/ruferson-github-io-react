import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'neutral' | 'soft' | 'outline' | 'dark'
export type ButtonSize = 'sm' | 'md' | 'icon'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-m3-primary text-white font-bold shadow-sm hover:brightness-110',
  neutral:
    'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700',
  soft: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold hover:bg-slate-300 dark:hover:bg-slate-700',
  outline:
    'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-xs hover:border-m3-primary',
  dark: 'bg-slate-900 dark:bg-slate-700 text-white font-medium shadow-xs hover:bg-slate-800',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-1.5',
  icon: 'h-10 w-10 justify-center border border-slate-200 dark:border-slate-700 shadow-lg',
}

interface Options {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

/** Pill button styles; also reusable for link <a> elements. */
export function buttonStyles({ variant = 'neutral', size = 'sm', className }: Options = {}) {
  return cn(
    'retro-control group inline-flex items-center gap-1.5 rounded-full text-xs transition',
    variants[variant],
    sizes[size],
    className,
  )
}
