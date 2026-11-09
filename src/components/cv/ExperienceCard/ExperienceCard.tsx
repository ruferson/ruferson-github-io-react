import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { ExperienceItem } from '@/types/cv'
import { BulletList } from '../../ui/BulletList/BulletList'
import { Card } from '../../ui/Card/Card'
import { Chip } from '../../ui/Chip/Chip'

interface ExperienceCardProps {
  item: ExperienceItem
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  const l = useLocalize()
  return (
    <Card as="article">
      <div className="mb-1 flex flex-wrap items-start justify-between gap-1">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">{l(item.title)}</h3>
        <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {l(item.period)}
        </span>
      </div>
      <div className="mb-2 text-xs font-bold text-m3-primary">{item.organization}</div>
      <BulletList
        items={item.bullets.map(l)}
        className="mb-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300"
      />
      {item.technologies && item.technologies.length > 0 && (
        <ul aria-label={l(ui.techLabel)} className="flex flex-wrap gap-1.5 pt-1">
          {item.technologies.map((tech) => (
            <li key={tech}>
              <Chip variant="tag">{tech}</Chip>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
