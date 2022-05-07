export const PACKAGES_DATA = [
  {
    package: '@pattern-ui/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@pattern-ui/hooks'],
  },
  {
    package: '@pattern-ui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core'],
  },
  {
    package: '@pattern-ui/form',
    description: 'Form management library',
    dependencies: ['@pattern-ui/form'],
  },
  {
    package: '@pattern-ui/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/dates', 'dayjs'],
  },
  {
    package: '@pattern-ui/notifications',
    description: 'Notifications system',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/notifications'],
  },
  {
    package: '@pattern-ui/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/prism'],
  },
  {
    package: '@pattern-ui/rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/rte'],
  },
  {
    package: '@pattern-ui/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/dropzone'],
  },
  {
    package: '@pattern-ui/modals',
    description: 'Centralized modals manager',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/modals'],
  },
  {
    package: '@pattern-ui/spotlight',
    description: 'Overlay command center',
    dependencies: ['@pattern-ui/hooks', '@pattern-ui/core', '@pattern-ui/spotlight'],
  },
];
