
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor, Sparkles } from "lucide-react";
import { FadeIn, MorphingBackground, FloatingElement } from './ui-animations';

const Hero = () => {
  return (
    <MorphingBackground className="min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.5}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-indigo-100 border border-indigo-200">
              <span className="text-sm font-medium text-indigo-700 flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-indigo-500" />
                Revolutionizing UI Design with AI
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
              Design beautiful interfaces with a simple description
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.9}>
            <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto text-balance">
              Transform your ideas into stunning UI designs for web and mobile platforms in seconds. Just describe what you need, select your platform, and let AI do the rest.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-shine group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0">
                Try it now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800">
                See examples
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 relative">
          <FloatingElement className="absolute -top-16 -left-10 hidden lg:block opacity-80">
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm shadow-lg border border-white/30">
              <Smartphone className="h-8 w-8 text-purple-500" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute -top-12 -right-8 hidden lg:block opacity-80" delay={1.5}>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm shadow-lg border border-white/30">
              <Monitor className="h-8 w-8 text-blue-500" />
            </div>
          </FloatingElement>

          <FadeIn delay={1.4} className="relative">
            <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-4 md:p-8 shadow-xl border border-slate-200/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-6 bg-white rounded-xl shadow-md border border-slate-100">
                  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <Smartphone className="h-20 w-20 text-pink-300" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium text-indigo-700">Mobile Design</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border border-slate-100">
                  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <Monitor className="h-20 w-20 text-blue-300" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium text-indigo-700">Web Design</p>
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
