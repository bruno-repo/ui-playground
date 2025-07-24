// mockLLM.ts

import { LayoutUpdate } from './promptMappings';

export function mockLLM(prompt: string): LayoutUpdate | null {
  const lower = prompt.toLowerCase();

  if (lower.includes('background') && lower.includes('green')) {
    return { backgroundColor: '#27ae60' };
  }

  if (lower.includes('background') && lower.includes('red')) {
    return { backgroundColor: '#e74c3c' };
  }

  const titleMatch = prompt.match(/(?:set|change).+title.+to (.+)/i);
  if (titleMatch) {
    return { title: titleMatch[1] };
  }

  if (lower.includes('move') && lower.includes('save') && lower.includes('top')) {
    return { buttonPosition: 'top' };
  }

  if (lower.includes('move') && lower.includes('save') && lower.includes('bottom')) {
    return { buttonPosition: 'bottom' };
  }

  if (lower.includes('reset')) {
    return {
      backgroundColor: '#3498db',
      title: 'My Profile',
      buttonPosition: 'bottom',
    };
  }

  return null;
}
