import { usePreferences } from '@/features/preferences/usePreferences'
import { useToast } from '@/features/toast/useToast'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import { Button } from '../../ui/Button/Button'
import { ColorThemePicker } from '../ColorThemePicker/ColorThemePicker'
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle'
import { RetroModeToggle } from '../RetroModeToggle/RetroModeToggle'

/** Floating quick controls, visible on small screen viewports. */
export function MobileControls({ className }: { className?: string }) {
  const { language, toggleLanguage } = usePreferences()
  const { showToast } = useToast()
  const l = useLocalize()

  const handleLanguage = () => {
    showToast(ui.toastLang[language === 'es' ? 'en' : 'es'])
    toggleLanguage()
  }

  return (
    <div
      role="group"
      aria-label={l(ui.mobileLabel)}
      className={cn(
        'no-print fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 sm:hidden',
        className,
      )}
    >
      <RetroModeToggle variant="icon" />
      <Button
        size="icon"
        title={l(ui.toggleLangAria)}
        aria-label={l(ui.toggleLangAria)}
        onClick={handleLanguage}
      >
        <span aria-hidden="true">{language === 'es' ? '🇬🇧' : '🇪🇸'}</span>
      </Button>
      <DarkModeToggle variant="icon" />
      <ColorThemePicker variant="floating" />
    </div>
  )
}
