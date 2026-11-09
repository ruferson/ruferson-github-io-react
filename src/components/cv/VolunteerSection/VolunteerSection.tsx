import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { VolunteerItem } from '@/types/cv'
import type { Text } from '@/types/i18n'
import { BulletList } from '../../ui/BulletList/BulletList'
import { Card } from '../../ui/Card/Card'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { Timeline, TimelineItem } from '../Timeline/Timeline'

interface VolunteerSectionProps {
  items: VolunteerItem[]
  title?: Text
}

export function VolunteerSection({ items, title = ui.volunteer }: VolunteerSectionProps) {
  const l = useLocalize()
  return (
    <section
      aria-labelledby="voluntariado-titulo"
      className="border-t border-slate-200/50 pt-4 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:border-slate-800/50"
    >
      <SectionHeading id="voluntariado-titulo" icon="volunteer_activism" variant="muted" title={l(title)} />
      <Timeline variant="compact">
        {items.map((item) => (
          <TimelineItem key={item.id} variant="compact">
            <Card as="article" variant="subtle">
              <div className="mb-1 flex flex-wrap items-start justify-between gap-1">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{l(item.title)}</h3>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{l(item.period)}</span>
              </div>
              <div className="mb-2 text-[11px] font-medium italic text-slate-600 dark:text-slate-400">
                {l(item.note)}
              </div>
              <BulletList
                items={item.bullets.map(l)}
                className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400"
              />
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
