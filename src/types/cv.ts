import type { IconName } from '@/components/ui/Icon/pixelIcons'
import type { Text } from './i18n'

/** Texts accept **bold** via lightweight markdown markup. */
export interface Profile {
  name: string
  brand: string
  role: Text
  status: Text
  footerStatus: Text
  summary: Text
  location: Text
  phone: string
  phoneDisplay: string
  email: string
  github: { url: string; label: string }
  photo: string
  photoAlt: Text
}

export interface TimelineEntry {
  id: string
  title: Text
  period: Text
  bullets: Text[]
}

export interface ExperienceItem extends TimelineEntry {
  organization: string
  technologies?: string[]
}

export interface VolunteerItem extends TimelineEntry {
  note: Text
}

export interface EducationHighlight {
  id: string
  icon: IconName
  tone: 'gold' | 'info'
  text: Text
}

export interface EducationItem {
  id: string
  title: Text
  institution: Text
  period?: Text
  highlights?: EducationHighlight[]
  badge?: Text
}

export interface SkillGroupData {
  id: string
  title: Text
  icon: IconName
  kind: 'chips' | 'list'
  items: Text[]
}
