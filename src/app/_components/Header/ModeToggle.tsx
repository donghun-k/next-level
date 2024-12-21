'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none shadow-none focus-visible:ring-0"
      onClick={toggleTheme}
    >
      <Sun className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 max-md:size-4" />
      <Moon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 max-md:size-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
