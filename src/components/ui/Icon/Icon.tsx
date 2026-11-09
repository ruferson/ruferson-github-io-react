import { cn } from '@/lib/cn'
import { githubModernPath, pixelIcons, type IconName } from './pixelIcons'

export interface IconProps {
  name: IconName
  /** Size in pixels. */
  size?: number
  className?: string
}

/** Renders both modern (Material Symbols / SVG) and pixel-art retro icons; CSS toggles visibility by mode. */
export function Icon({ name, size = 17, className }: IconProps) {
  return (
    <>
      {name === 'github' ? (
        <svg
          className={cn('icon-modern fill-current', className)}
          style={{ width: size, height: size }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={githubModernPath} />
        </svg>
      ) : (
        <span
          className={cn('material-symbols-outlined icon-modern', className)}
          style={{ fontSize: size }}
          aria-hidden="true"
        >
          {name}
        </span>
      )}
      <svg className={cn('pixel-svg icon-retro', className)} viewBox="0 0 16 16" aria-hidden="true">
        <path d={pixelIcons[name]} />
      </svg>
    </>
  )
}
