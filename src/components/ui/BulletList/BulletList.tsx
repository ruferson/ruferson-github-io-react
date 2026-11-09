import { cn } from '@/lib/cn'
import { RichText } from '../RichText/RichText'

interface BulletListProps {
  /** Items already localized; supports **bold** markdown. */
  items: string[]
  className?: string
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn('list-inside list-disc leading-relaxed', className)}>
      {items.map((item) => (
        <li key={item}>
          <RichText>{item}</RichText>
        </li>
      ))}
    </ul>
  )
}
