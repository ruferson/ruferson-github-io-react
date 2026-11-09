import { useLocalize } from '@/i18n/useLocalize'
import type { EducationItem } from '@/types/cv'
import { Card } from '../../ui/Card/Card'
import { Chip } from '../../ui/Chip/Chip'

interface EducationCardProps {
  item: EducationItem
}

/** Renders educational degrees (with highlights), certifications (with date), and language proficiency (with badge). */
export function EducationCard({ item }: EducationCardProps) {
  const l = useLocalize()
  return (
    <Card as="article">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold leading-tight text-slate-900 dark:text-white">{l(item.title)}</h3>
          <div className="mt-0.5 text-xs font-semibold text-m3-primary">{l(item.institution)}</div>
        </div>
        {item.badge && <Chip variant="level">{l(item.badge)}</Chip>}
      </div>
      {item.period && (
        <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{l(item.period)}</div>
      )}
      {item.highlights && item.highlights.length > 0 && (
        <div className="mt-2 space-y-1.5">
          {item.highlights.map((h) => (
            <Chip key={h.id} variant={h.tone} icon={h.icon}>
              {l(h.text)}
            </Chip>
          ))}
        </div>
      )}
    </Card>
  )
}
