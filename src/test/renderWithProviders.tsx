import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import type { Preferences } from '@/features/preferences/types'
import { AppProviders } from '@/providers/AppProviders'

interface Options extends Omit<RenderOptions, 'wrapper'> {
  preferences?: Partial<Preferences>
}

export function renderWithProviders(ui: ReactElement, { preferences, ...options }: Options = {}) {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <AppProviders preferences={preferences}>{children}</AppProviders>
  )
  return render(ui, { wrapper: Wrapper, ...options })
}
