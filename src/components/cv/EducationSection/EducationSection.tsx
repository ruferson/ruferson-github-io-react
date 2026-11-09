import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { EducationItem } from '@/types/cv'
import type { Text } from '@/types/i18n'
import { EducationCard } from '../EducationCard/EducationCard'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface EducationSectionProps {
  items: EducationItem[]
  title?: Text
}

export function EducationSection({ items, title = ui.education }: EducationSectionProps) {
  const l = useLocalize()
  return (
    <section className="break-inside-avoid space-y-4" aria-labelledby="educacion-titulo">
      <SectionHeading id="educacion-titulo" icon="school" tone="secondary" title={l(title)} />
      {items.map((item) => (
        <EducationCard key={item.id} item={item} />
      ))}
    </section>
  )
}
