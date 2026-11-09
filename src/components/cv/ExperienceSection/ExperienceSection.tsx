import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { Text } from '@/types/i18n'
import type { ExperienceItem } from '@/types/cv'
import { ExperienceCard } from '../ExperienceCard/ExperienceCard'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { Timeline, TimelineItem } from '../Timeline/Timeline'

interface ExperienceSectionProps {
  items: ExperienceItem[]
  title?: Text
}

export function ExperienceSection({ items, title = ui.experience }: ExperienceSectionProps) {
  const l = useLocalize()
  return (
    <section aria-labelledby="experiencia-titulo">
      <SectionHeading id="experiencia-titulo" icon="work" title={l(title)} />
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={item.id}>
            <ExperienceCard item={item} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
