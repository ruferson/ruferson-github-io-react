import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import type { Profile } from '@/types/cv'
import { Card } from '../../ui/Card/Card'
import { Chip } from '../../ui/Chip/Chip'
import { RichText } from '../../ui/RichText/RichText'
import { ContactBar } from '../ContactBar/ContactBar'

interface ProfileHeroProps {
  profile: Profile
  /** Hides the "actively seeking" status badge. */
  showStatus?: boolean
  className?: string
}

export function ProfileHero({ profile, showStatus = true, className }: ProfileHeroProps) {
  const l = useLocalize()
  return (
    <Card as="section" variant="hero" aria-labelledby="perfil-titulo" className={cn('relative mb-8', className)}>
      <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="relative flex-shrink-0">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-200 shadow-md sm:h-36 sm:w-36 dark:border-slate-800 dark:bg-slate-800">
            <img src={profile.photo} alt={l(profile.photoAlt)} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="mb-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <Chip variant="badge">{l(profile.role)}</Chip>
            {showStatus && (
              <Chip variant="success" pulse>
                {l(profile.status)}
              </Chip>
            )}
          </div>

          <h1
            id="perfil-titulo"
            className="mb-1 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {profile.name}
          </h1>

          <p className="mb-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
            <RichText>{l(profile.summary)}</RichText>
          </p>

          <ContactBar profile={profile} />
        </div>
      </div>
    </Card>
  )
}
