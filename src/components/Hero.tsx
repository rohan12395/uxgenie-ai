
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Leaf, Search, Sparkles } from "lucide-react";
import { FadeIn, MorphingBackground, FloatingElement } from './ui-animations';

const Hero = () => {
  return (
    <MorphingBackground className="min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.5}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-green-100 border border-green-200">
              <span className="text-sm font-medium text-green-700 flex items-center">
                <Leaf className="h-3.5 w-3.5 mr-2" />
                Identify Any Plant In Seconds
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Discover the world of plants at your fingertips
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.9}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
              Point your camera at any plant and instantly receive detailed information about species, care instructions, and interesting facts. Our AI-powered recognition works with over 10,000 plant species.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-shine group bg-green-600 hover:bg-green-700">
                Identify a plant now
                <Camera className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                See plant database
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 relative">
          <FloatingElement className="absolute -top-16 -left-10 hidden lg:block opacity-80">
            <div className="p-4 rounded-xl glass-card shadow-lg bg-green-50/80 backdrop-blur-lg border border-green-100/70">
              <Camera className="h-8 w-8 text-green-600" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute -top-12 -right-8 hidden lg:block opacity-80" delay={1.5}>
            <div className="p-4 rounded-xl glass-card shadow-lg bg-green-50/80 backdrop-blur-lg border border-green-100/70">
              <Search className="h-8 w-8 text-green-600" />
            </div>
          </FloatingElement>

          <FadeIn delay={1.4} className="relative">
            <div className="bg-gradient-to-b from-green-50 to-green-100/30 rounded-2xl p-4 md:p-8 shadow-xl border border-green-200/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <div className="w-full h-64 md:h-80 bg-green-50 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                      alt="Plant recognition mobile app" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/30 backdrop-blur-md p-3 rounded-full">
                        <Camera className="h-10 w-10 text-green-700" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium text-green-800">Mobile App</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <div className="w-full h-64 md:h-80 bg-green-50 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                      alt="Plant recognition web interface" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/30 backdrop-blur-md p-3 rounded-full">
                        <Leaf className="h-10 w-10 text-green-700" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium text-green-800">Web Interface</p>
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
