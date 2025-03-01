
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getDirectionClass = () => {
    if (!isVisible && !hasAnimated) {
      switch (direction) {
        case 'up': return 'translate-y-8';
        case 'down': return '-translate-y-8';
        case 'left': return 'translate-x-8';
        case 'right': return '-translate-x-8';
        default: return '';
      }
    }
    return '';
  };
  
  return (
    <div
      className={cn(
        'transition-all',
        isVisible ? 'opacity-100' : 'opacity-0',
        getDirectionClass(),
        className
      )}
      style={{ 
        transitionDuration: `${duration}s`,
        transitionProperty: 'opacity, transform' 
      }}
    >
      {children}
    </div>
  );
};

type StaggeredFadeInProps = {
  children: React.ReactNode[];
  containerClassName?: string;
  childClassName?: string;
  staggerDelay?: number;
  initialDelay?: number;
};

export const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({
  children,
  containerClassName,
  childClassName,
  staggerDelay = 0.1,
  initialDelay = 0,
}) => {
  return (
    <div className={containerClassName}>
      {React.Children.map(children, (child, index) => (
        <FadeIn
          delay={initialDelay + index * staggerDelay}
          className={childClassName}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
};

type MorphingBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export const MorphingBackground: React.FC<MorphingBackgroundProps> = ({ 
  className,
  children
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-[100px] opacity-50 bg-gradient-to-r from-secondary to-secondary/30 animate-morph blur-3xl" />
        <div className="absolute -inset-[100px] top-1/4 left-1/4 opacity-30 bg-gradient-to-r from-primary/20 to-secondary/20 animate-morph animation-delay-1000 blur-3xl" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const FloatingElement: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => {
  return (
    <div 
      className={cn("animate-float", className)} 
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
