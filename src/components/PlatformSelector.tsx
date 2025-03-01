
import { useState } from 'react';
import { Smartphone, Monitor, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeIn } from './ui-animations';

export type Platform = 'mobile' | 'web' | 'both';

interface PlatformSelectorProps {
  selectedPlatform: Platform;
  onSelect: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelect }: PlatformSelectorProps) => {
  return (
    <FadeIn delay={0.2}>
      <div className="bg-muted/30 p-1 rounded-lg flex flex-col sm:flex-row">
        <button
          onClick={() => onSelect('mobile')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all",
            selectedPlatform === 'mobile' 
              ? "bg-background text-foreground shadow-sm" 
              : "hover:bg-background/20 text-muted-foreground"
          )}
        >
          <Smartphone className="h-5 w-5" />
          <span className="font-medium">Mobile</span>
          {selectedPlatform === 'mobile' && (
            <Check className="h-4 w-4 ml-1 text-primary animate-scale-in" />
          )}
        </button>
        
        <button
          onClick={() => onSelect('web')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all",
            selectedPlatform === 'web' 
              ? "bg-background text-foreground shadow-sm" 
              : "hover:bg-background/20 text-muted-foreground"
          )}
        >
          <Monitor className="h-5 w-5" />
          <span className="font-medium">Web</span>
          {selectedPlatform === 'web' && (
            <Check className="h-4 w-4 ml-1 text-primary animate-scale-in" />
          )}
        </button>
        
        <button
          onClick={() => onSelect('both')}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all",
            selectedPlatform === 'both' 
              ? "bg-background text-foreground shadow-sm" 
              : "hover:bg-background/20 text-muted-foreground"
          )}
        >
          <div className="relative">
            <Smartphone className="h-4 w-4" />
            <Monitor className="h-4 w-4 absolute -right-2 -bottom-1" />
          </div>
          <span className="font-medium ml-1">Both</span>
          {selectedPlatform === 'both' && (
            <Check className="h-4 w-4 ml-1 text-primary animate-scale-in" />
          )}
        </button>
      </div>
    </FadeIn>
  );
};

export default PlatformSelector;
