import { useState, useEffect } from 'react';

export function useHighContrast() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const toggle = () => setIsHighContrast(prev => !prev);

  return { isHighContrast, toggle };
}
