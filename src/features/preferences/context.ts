import { createContext } from 'react'
import type { PreferencesApi } from './types'

export const PreferencesContext = createContext<PreferencesApi | null>(null)
