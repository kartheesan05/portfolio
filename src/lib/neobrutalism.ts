// Utility functions for Neobrutalism styling

type NeobrutAnimation = 'hover' | 'click' | 'pulse' | 'grow';

interface NeobrutOptions {
  animation?: NeobrutAnimation;
  intensity?: 'light' | 'medium' | 'strong';
  shadow?: boolean;
  color?: string;
}

/**
 * Gets a set of Tailwind classes for neobrutalism effects
 */
export function getNeobrutClasses(options: NeobrutOptions = {}): string {
  const {
    animation = 'hover',
    intensity = 'medium',
    shadow = true,
    color,
  } = options;
  
  // Base classes
  let classes = 'border-4 border-border';
  
  // Add shadow if needed
  if (shadow) {
    classes += ' shadow-shadow';
  }
  
  // Handle background color
  if (color) {
    classes += ` bg-[${color}]`;
  } else {
    classes += ' bg-main';
  }
  
  // Add animation effects
  switch(animation) {
    case 'hover':
      const transformAmount = intensity === 'light' ? '1' : intensity === 'medium' ? '2' : '4';
      classes += ` hover:translate-x-${transformAmount} hover:translate-y-${transformAmount}`;
      if (shadow) classes += ' hover:shadow-none';
      break;
    
    case 'click':
      classes += ' active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none';
      break;
      
    case 'pulse':
      classes += ' animate-pulse';
      break;
      
    case 'grow':
      classes += ' hover:scale-105 transition-transform';
      break;
      
    default:
      break;
  }
  
  return classes;
}

/**
 * Utility function to get title box styling
 */
export function getTitleBoxClasses(): string {
  return 'bg-main border-4 border-border shadow-shadow p-6';
}

/**
 * Utility function to get content box styling
 */
export function getContentBoxClasses(): string {
  return 'bg-bw border-4 border-border shadow-shadow p-6';
}

/**
 * Utility function to get input field styling
 */
export function getInputClasses(): string {
  return 'w-full bg-transparent outline-none border-2 border-border p-2';
} 