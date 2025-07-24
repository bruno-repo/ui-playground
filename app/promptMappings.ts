// promptMappings.ts


export type LayoutUpdate = Partial<{
  backgroundColor: string;
  title: string;
  buttonPosition: 'top' | 'bottom';
}>;

export const promptMappings: Record<string, LayoutUpdate> = {
  'make the background green': {
    backgroundColor: '#27ae60',
  },
  'make the background red': {
    backgroundColor: '#e74c3c',
  },
  'change title to settings': {
    title: 'Settings',
  },
  'move save button to top': {
    buttonPosition: 'top',
  },
  'move save button to bottom': {
    buttonPosition: 'bottom',
  },
  reset: {
    backgroundColor: '#3498db',
    title: 'My Profile',
    buttonPosition: 'bottom',
  },
};
