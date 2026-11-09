import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import type { Text } from '@/types/i18n'

interface FooterProps {
  location: Text
  status: Text
  /** Right-side text; defaults to "Last updated". */
  updated?: Text
  className?: string
}

export function Footer({ location, status, updated = ui.footerUpdated, className }: FooterProps) {
  const l = useLocalize()
  return (
    <footer
      aria-label={l(ui.footerLabel)}
      className={cn(
        'mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400',
        className,
      )}
    >
      <div>
        {l(location)} • {l(status)}
      </div>
      <div className="font-medium">{l(updated)}</div>
    </footer>
  )
}
