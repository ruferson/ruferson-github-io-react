import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import { ColorThemePicker } from '../ColorThemePicker/ColorThemePicker'
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { PrintButton } from '../PrintButton/PrintButton'
import { RetroModeToggle } from '../RetroModeToggle/RetroModeToggle'

interface ControlBarProps {
  brand: string
  className?: string
}

/** Fixed top navigation bar. On mobile screens, color picker and dark mode are delegated to <MobileControls>. */
export function ControlBar({ brand, className }: ControlBarProps) {
  const l = useLocalize()
  return (
    <header
      aria-label={l(ui.barLabel)}
      className={cn('no-print sticky top-2 z-50 mx-auto max-w-5xl px-3 sm:top-3 sm:px-4', className)}
    >
      <div className="retro-box flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200/90 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-md sm:rounded-full sm:px-4 dark:border-slate-800 dark:bg-slate-900/90">
        <div className="flex items-center gap-2 max-sm:w-full max-sm:justify-center">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            {brand}
          </span>
        </div>

        <div
          role="toolbar"
          aria-label={l(ui.toolbarLabel)}
          className="flex flex-wrap items-center gap-2 text-xs max-sm:w-full max-sm:justify-center"
        >
          <RetroModeToggle />
          <LanguageSwitcher />
          <div className="hidden sm:contents"><ColorThemePicker /></div>
          <div className="hidden sm:contents"><DarkModeToggle /></div>
          <PrintButton />
        </div>
      </div>
    </header>
  )
}
