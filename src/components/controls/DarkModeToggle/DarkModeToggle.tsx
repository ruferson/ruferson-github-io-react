import { usePreferences } from '@/features/preferences/usePreferences'
import { useToast } from '@/features/toast/useToast'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { Button } from '../../ui/Button/Button'

interface DarkModeToggleProps {
  /** `bar`: icon + text. `icon`: circular icon-only button. */
  variant?: 'bar' | 'icon'
}

export function DarkModeToggle({ variant = 'bar' }: DarkModeToggleProps) {
  const { isDark, toggleDark } = usePreferences()
  const { showToast } = useToast()
  const l = useLocalize()
  const label = l(ui.titleDarkMode)
  const icon = isDark ? 'light_mode' : 'dark_mode'

  const handleClick = () => {
    showToast(l(isDark ? ui.toastDarkOff : ui.toastDarkOn))
    toggleDark()
  }

  if (variant === 'icon') {
    return <Button size="icon" leadingIcon={icon} title={label} aria-label={label} onClick={handleClick} />
  }

  return (
    <Button leadingIcon={icon} title={label} aria-label={label} onClick={handleClick}>
      <span className="hidden sm:inline">{l(isDark ? ui.modeLight : ui.modeDark)}</span>
    </Button>
  )
}
