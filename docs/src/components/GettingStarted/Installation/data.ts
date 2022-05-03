export const PACKAGES_DATA = [
  {
    package: '@pattern/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@pattern/hooks'],
  },
  {
    package: '@pattern/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@pattern/hooks', '@pattern/core'],
  },
  {
    package: '@pattern/form',
    description: 'Form management library',
    dependencies: ['@pattern/form'],
  },
  {
    package: '@pattern/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/dates', 'dayjs'],
  },
  {
    package: '@pattern/notifications',
    description: 'Notifications system',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/notifications'],
  },
  {
    package: '@pattern/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/prism'],
  },
  {
    package: '@pattern/rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/rte'],
  },
  {
    package: '@pattern/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/dropzone'],
  },
  {
    package: '@pattern/modals',
    description: 'Centralized modals manager',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/modals'],
  },
  {
    package: '@pattern/spotlight',
    description: 'Overlay command center',
    dependencies: ['@pattern/hooks', '@pattern/core', '@pattern/spotlight'],
  },
];
