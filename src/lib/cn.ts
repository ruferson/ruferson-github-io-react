export type ClassValue = string | false | null | undefined

/** Merges CSS classes, omitting falsy values. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
