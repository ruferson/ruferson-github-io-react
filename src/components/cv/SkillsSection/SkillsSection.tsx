import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import type { SkillGroupData } from '@/types/cv'
import type { Text } from '@/types/i18n'
import { Card } from '../../ui/Card/Card'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SkillGroup } from '../SkillGroup/SkillGroup'

interface SkillsSectionProps {
  groups: SkillGroupData[]
  title?: Text
}

export function SkillsSection({ groups, title = ui.skills }: SkillsSectionProps) {
  const l = useLocalize()
  return (
    <section className="break-inside-avoid space-y-4" aria-labelledby="habilidades-titulo">
      <SectionHeading id="habilidades-titulo" icon="stars" title={l(title)} />
      <Card variant="panel" className="space-y-4">
        {groups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </Card>
    </section>
  )
}
