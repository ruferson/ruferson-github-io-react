import { colorThemes } from '@/features/preferences/themes'
import { usePreferences } from '@/features/preferences/usePreferences'
import { useToast } from '@/features/toast/useToast'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'

interface ColorThemePickerProps {
  /** `bar`: top navigation bar (with label). `floating`: mobile floating buttons with shadow. */
  variant?: 'bar' | 'floating'
  className?: string
}

export function ColorThemePicker({ variant = 'bar', className }: ColorThemePickerProps) {
  const { colorTheme, setColorTheme } = usePreferences()
  const { showToast } = useToast()
  const l = useLocalize()

  return (
    <div
      role="group"
      aria-label={l(ui.themeGroup)}
      className={cn(
        'flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-700 dark:bg-slate-800',
        variant === 'floating' && 'shadow-lg',
        className,
      )}
    >
      {variant === 'bar' && (
        <span className="hidden px-1 text-[10px] font-bold text-slate-500 sm:inline dark:text-slate-400">
          {l(ui.themeLabel)}
        </span>
      )}
      {colorThemes.map((theme) => {
        const active = theme.id === colorTheme
        return (
          <button
            key={theme.id}
            type="button"
            title={l(theme.label)}
            aria-label={l(theme.label)}
            aria-pressed={active}
            style={{ backgroundColor: theme.swatch }}
            onClick={() => {
              setColorTheme(theme.id)
              showToast(l(theme.toast))
            }}
            className={cn(
              'retro-control h-5 w-5 rounded-full shadow-xs ring-2 transition hover:scale-110',
              active ? 'scale-110 ring-m3-primary' : 'ring-white dark:ring-slate-900',
            )}
          />
        )
      })}
    </div>
  )
}
