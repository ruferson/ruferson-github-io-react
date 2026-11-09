import { useLocalize } from '@/i18n/useLocalize'
import type { SkillGroupData } from '@/types/cv'
import { BulletList } from '../../ui/BulletList/BulletList'
import { Chip } from '../../ui/Chip/Chip'
import { Icon } from '../../ui/Icon/Icon'

interface SkillGroupProps {
  group: SkillGroupData
}

export function SkillGroup({ group }: SkillGroupProps) {
  const l = useLocalize()
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
        <Icon name={group.icon} size={16} className="text-m3-primary" />
        {l(group.title)}
      </h4>
      {group.kind === 'chips' ? (
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li key={l(item)}>
              <Chip variant="skill">{l(item)}</Chip>
            </li>
          ))}
        </ul>
      ) : (
        <BulletList items={group.items.map(l)} className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300" />
      )}
    </div>
  )
}
