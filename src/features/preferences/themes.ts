import type { Localized } from '@/types/i18n'
import type { ColorTheme } from './types'

export interface ColorThemeOption {
  id: ColorTheme
  swatch: string
  label: Localized
  toast: Localized
}

export const colorThemes: readonly ColorThemeOption[] = [
  {
    id: 'emerald',
    swatch: '#006c4c',
    label: { es: 'Tono Esmeralda', en: 'Emerald Theme' },
    toast: { es: 'Tono Esmeralda activado', en: 'Emerald theme enabled' },
  },
  {
    id: 'ocean',
    swatch: '#006399',
    label: { es: 'Tono Azul Océano', en: 'Ocean Blue Theme' },
    toast: { es: 'Tono Azul Océano activado', en: 'Ocean Blue theme enabled' },
  },
  {
    id: 'indigo',
    swatch: '#5256a9',
    label: { es: 'Tono Índigo', en: 'Indigo Theme' },
    toast: { es: 'Tono Índigo activado', en: 'Indigo theme enabled' },
  },
  {
    id: 'amber',
    swatch: '#984800',
    label: { es: 'Tono Ámbar / Terracota', en: 'Amber / Terracotta Theme' },
    toast: { es: 'Tono Ámbar activado', en: 'Amber theme enabled' },
  },
]
