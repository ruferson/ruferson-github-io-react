import { usePreferences } from '@/features/preferences/usePreferences'
import { useToast } from '@/features/toast/useToast'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { Language } from '@/types/i18n'
import { SegmentedControl, type SegmentedOption } from '../../ui/SegmentedControl/SegmentedControl'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = usePreferences()
  const { showToast } = useToast()
  const l = useLocalize()

  const options: SegmentedOption<Language>[] = [
    {
      value: 'es',
      ariaLabel: l(ui.langEsAria),
      label: (<><span aria-hidden="true">🇪🇸</span> <span>ES</span></>),
    },
    {
      value: 'en',
      ariaLabel: l(ui.langEnAria),
      label: (<><span aria-hidden="true">🇬🇧</span> <span>EN</span></>),
    },
  ]

  return (
    <SegmentedControl
      className={className}
      ariaLabel={l(ui.langGroup)}
      options={options}
      value={language}
      onChange={(next) => {
        setLanguage(next)
        showToast(ui.toastLang[next])
      }}
    />
  )
}
