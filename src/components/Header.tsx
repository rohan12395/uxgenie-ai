
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { FadeIn } from './ui-animations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <FadeIn delay={0.2} direction="right">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
              UI
            </div>
            <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">DesignAI</span>
          </div>
        </FadeIn>
        
        <nav className="hidden md:flex items-center space-x-8">
          <FadeIn delay={0.3} direction="down">
            <a href="#features" className="text-slate-600 hover:text-indigo-700 transition-colors">Features</a>
          </FadeIn>
          <FadeIn delay={0.4} direction="down">
            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-700 transition-colors">How it works</a>
          </FadeIn>
          <FadeIn delay={0.5} direction="down">
            <a href="#pricing" className="text-slate-600 hover:text-indigo-700 transition-colors">Pricing</a>
          </FadeIn>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <FadeIn delay={0.6} direction="left">
            <Button variant="ghost" className="text-slate-700 hover:text-indigo-700 hover:bg-indigo-50">Log in</Button>
          </FadeIn>
          <FadeIn delay={0.7} direction="left">
            <Button className="btn-shine bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0">Get Started</Button>
          </FadeIn>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-slate-700"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 flex flex-col md:hidden transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          <a href="#features" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
          <a href="#pricing" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <div className="flex flex-col space-y-4 pt-6">
            <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">Log in</Button>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
