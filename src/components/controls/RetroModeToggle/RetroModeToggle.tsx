import { usePreferences } from '@/features/preferences/usePreferences'
import { useToast } from '@/features/toast/useToast'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import { Button } from '../../ui/Button/Button'

interface RetroModeToggleProps {
  variant?: 'bar' | 'icon'
}

export function RetroModeToggle({ variant = 'bar' }: RetroModeToggleProps) {
  const { isRetro, toggleRetro } = usePreferences()
  const { showToast } = useToast()
  const l = useLocalize()
  const title = l(isRetro ? ui.retroTitleOn : ui.retroTitleOff)

  const handleClick = () => {
    showToast(l(isRetro ? ui.toastRetroOff : ui.toastRetroOn))
    toggleRetro()
  }

  if (variant === 'icon') {
    return <Button size="icon" leadingIcon="sports_esports" title={title} aria-label={title} onClick={handleClick} />
  }

  return (
    <Button
      variant="soft"
      leadingIcon="sports_esports"
      title={title}
      aria-label={title}
      aria-pressed={isRetro}
      className={cn(isRetro && 'ring-4 ring-emerald-400')}
      onClick={handleClick}
    >
      {l(isRetro ? ui.retroOn : ui.retroOff)}
    </Button>
  )
}
