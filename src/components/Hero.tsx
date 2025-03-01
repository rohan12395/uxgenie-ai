
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor, Sparkles } from "lucide-react";
import { FadeIn, MorphingBackground, FloatingElement } from './ui-animations';

const Hero = () => {
  return (
    <MorphingBackground className="min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.5}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/5 border border-primary/10">
              <span className="text-sm font-medium text-primary flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Revolutionizing UI Design with AI
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Design beautiful interfaces with a simple description
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.9}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
              Transform your ideas into stunning UI designs for web and mobile platforms in seconds. Just describe what you need, select your platform, and let AI do the rest.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-shine group">
                Try it now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                See examples
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 relative">
          <FloatingElement className="absolute -top-16 -left-10 hidden lg:block opacity-80">
            <div className="p-4 rounded-xl glass-card shadow-lg">
              <Smartphone className="h-8 w-8 text-primary/80" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute -top-12 -right-8 hidden lg:block opacity-80" delay={1.5}>
            <div className="p-4 rounded-xl glass-card shadow-lg">
              <Monitor className="h-8 w-8 text-primary/80" />
            </div>
          </FloatingElement>

          <FadeIn delay={1.4} className="relative">
            <div className="bg-gradient-to-b from-muted/50 to-muted rounded-2xl p-4 md:p-8 shadow-xl border border-muted-foreground/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-6 bg-card rounded-xl shadow-md">
                  <div className="w-full h-64 md:h-80 bg-black/5 rounded-lg flex items-center justify-center overflow-hidden">
                    <Smartphone className="h-20 w-20 text-muted-foreground/40" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium">Mobile Design</p>
                  </div>
                </div>
                
                <div className="p-6 bg-card rounded-xl shadow-md">
                  <div className="w-full h-64 md:h-80 bg-black/5 rounded-lg flex items-center justify-center overflow-hidden">
                    <Monitor className="h-20 w-20 text-muted-foreground/40" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium">Web Design</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </MorphingBackground>
  );
};

export default Hero;
