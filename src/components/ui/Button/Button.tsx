import type { ButtonHTMLAttributes } from 'react'
import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/pixelIcons'
import { buttonStyles, type ButtonSize, type ButtonVariant } from './buttonStyles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: IconName
  trailingIcon?: IconName
}

export function Button({
  variant = 'neutral',
  size = 'sm',
  leadingIcon,
  trailingIcon,
  className,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonStyles({ variant, size, className })} {...props}>
      {leadingIcon && (
        <Icon
          name={leadingIcon}
          size={size === 'icon' ? 20 : 17}
          className={variant === 'outline' ? 'text-m3-primary' : undefined}
        />
      )}
      {children}
      {trailingIcon && (
        <Icon name={trailingIcon} size={14} className="text-slate-400 group-hover:text-m3-primary" />
      )}
    </button>
  )
}
