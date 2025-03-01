
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DesignGenerator from '@/components/DesignGenerator';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother initial animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-subtle">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/80 flex items-center justify-center text-primary-foreground font-bold">
              UI
            </div>
            <span className="font-semibold text-2xl tracking-tight">DesignAI</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DesignGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
