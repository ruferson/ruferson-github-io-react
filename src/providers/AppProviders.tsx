import type { ReactNode } from 'react'
import { PreferencesProvider } from '@/features/preferences/PreferencesProvider'
import type { Preferences } from '@/features/preferences/types'
import { ToastProvider } from '@/features/toast/ToastProvider'

interface AppProvidersProps {
  children: ReactNode
  preferences?: Partial<Preferences>
}

/** Combines all global providers into a single root wrapper. */
export function AppProviders({ children, preferences }: AppProvidersProps) {
  return (
    <PreferencesProvider initial={preferences}>
      <ToastProvider>{children}</ToastProvider>
    </PreferencesProvider>
  )
}
