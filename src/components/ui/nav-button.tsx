import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavButtonProps {
  variant?: 'filled' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export function NavButton({ variant = 'ghost', children, className }: NavButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-full flex items-center gap-2 text-lg font-medium leading-[120%] transition-all active:scale-95',
        variant === 'filled' 
          ? 'bg-[#98FB98] text-black hover:bg-[#7af27a] active:bg-[#98FB98]' 
          : 'text-black hover:text-gray-600 active:text-black',
        className
      )}
    >
      {children}
      <ArrowUpRight className="w-5 h-5" />
    </button>
  );
}