import { useToast } from '@/features/toast/useToast'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { ui } from '@/i18n/ui'
import { useLocalize } from '@/i18n/useLocalize'
import { cn } from '@/lib/cn'
import type { Profile } from '@/types/cv'
import type { Text } from '@/types/i18n'
import { Button } from '../../ui/Button/Button'
import { buttonStyles } from '../../ui/Button/buttonStyles'
import { Chip } from '../../ui/Chip/Chip'
import { Icon } from '../../ui/Icon/Icon'

interface ContactBarProps {
  profile: Pick<Profile, 'location' | 'phone' | 'phoneDisplay' | 'email' | 'github'>
  className?: string
}

export function ContactBar({ profile, className }: ContactBarProps) {
  const l = useLocalize()
  const copy = useCopyToClipboard()
  const { showToast } = useToast()

  const handleCopy = async (value: string, message: Text) => {
    const ok = await copy(value)
    showToast(ok ? l(message) : value)
  }

  return (
    <address
      aria-label={l(ui.contactLabel)}
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 pt-1 text-xs not-italic md:justify-start',
        className,
      )}
    >
      <Chip variant="outline" icon="location_on">
        {l(profile.location)}
      </Chip>

      <Button
        variant="outline"
        leadingIcon="call"
        trailingIcon="content_copy"
        aria-label={`${l(ui.copyPhoneAria)}: ${profile.phoneDisplay}`}
        onClick={() => handleCopy(profile.phone, ui.toastPhoneCopied)}
      >
        {profile.phoneDisplay}
      </Button>

      <Button
        variant="outline"
        leadingIcon="mail"
        trailingIcon="content_copy"
        aria-label={`${l(ui.copyEmailAria)}: ${profile.email}`}
        onClick={() => handleCopy(profile.email, ui.toastEmailCopied)}
      >
        {profile.email}
      </Button>

      <a
        href={profile.github.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={l(ui.githubAria)}
        className={buttonStyles({ variant: 'dark' })}
      >
        <Icon name="github" size={14} />
        <span>{profile.github.label}</span>
      </a>
    </address>
  )
}
