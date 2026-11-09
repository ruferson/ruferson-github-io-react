import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { Button } from '../../ui/Button/Button'

interface PrintButtonProps {
  /** Defaults to opening the browser native print dialog. */
  onPrint?: () => void
}

export function PrintButton({ onPrint = () => window.print() }: PrintButtonProps) {
  const l = useLocalize()
  return (
    <Button
      variant="primary"
      size="md"
      leadingIcon="print"
      title={l(ui.printAria)}
      aria-label={l(ui.printAria)}
      onClick={onPrint}
    >
      {l(ui.printBtn)}
    </Button>
  )
}
