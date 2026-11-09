import type { Preview } from '@storybook/react-vite'
import { AppProviders } from '../src/providers/AppProviders'
import type { ColorTheme, Language } from '../src/features/preferences/types'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  globalTypes: {
    language: {
      name: 'Language',
      description: 'Global language preference',
      defaultValue: 'es',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'es', title: 'Español' },
          { value: 'en', title: 'English' },
        ],
        showName: true,
      },
    },
    colorTheme: {
      name: 'Color Theme',
      description: 'Global color theme',
      defaultValue: 'emerald',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'emerald', title: 'Emerald' },
          { value: 'ocean', title: 'Ocean' },
          { value: 'indigo', title: 'Indigo' },
          { value: 'amber', title: 'Amber' },
        ],
        showName: true,
      },
    },
    darkMode: {
      name: 'Dark Mode',
      description: 'Toggle dark mode',
      defaultValue: false,
      toolbar: {
        icon: 'mirror',
        items: [
          { value: false, title: 'Light' },
          { value: true, title: 'Dark' },
        ],
        showName: true,
      },
    },
    retroMode: {
      name: 'Retro Mode',
      description: 'Toggle 8-bit retro mode',
      defaultValue: false,
      toolbar: {
        icon: 'browser',
        items: [
          { value: false, title: 'Modern' },
          { value: true, title: '8-Bit Retro' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const language = (context.globals.language as Language) ?? 'es'
      const colorTheme = (context.globals.colorTheme as ColorTheme) ?? 'emerald'
      const isDark = Boolean(context.globals.darkMode)
      const isRetro = Boolean(context.globals.retroMode)

      return (
        <AppProviders
          preferences={{
            language,
            colorTheme,
            isDark,
            isRetro,
          }}
        >
          <div className="p-4">
            <Story />
          </div>
        </AppProviders>
      )
    },
  ],
}

export default preview
