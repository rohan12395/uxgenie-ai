
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import PlatformSelector, { Platform } from './PlatformSelector';
import GeneratedDesign from './GeneratedDesign';
import { FadeIn } from './ui-animations';

const DesignGenerator = () => {
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState<Platform>('both');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<{ mobile?: string; web?: string }>({});
  
  const handleGenerate = () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock design generation - in a real app, this would be an API call
      const mockDesigns: { mobile?: string; web?: string } = {};
      
      if (platform === 'mobile' || platform === 'both') {
        mockDesigns.mobile = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158';
      }
      
      if (platform === 'web' || platform === 'both') {
        mockDesigns.web = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085';
      }
      
      setGeneratedDesigns(mockDesigns);
      setIsGenerating(false);
    }, 3000);
  };
  
  const hasGeneratedDesigns = Object.keys(generatedDesigns).length > 0;
  
  return (
    <section className="py-24 bg-background" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <Card className="border-border/50 shadow-lg overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/50">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Design Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Describe your design</label>
                    <Textarea
                      placeholder="Describe the UI you want to generate (e.g., 'A modern e-commerce product page with shopping cart and checkout button')"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[120px] resize-none focus-ring"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Select platform</label>
                    <PlatformSelector
                      selectedPlatform={platform}
                      onSelect={setPlatform}
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleGenerate}
                      disabled={!description.trim() || isGenerating}
                      className="w-full btn-shine"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating designs...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate designs
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          {hasGeneratedDesigns && (
            <FadeIn className="mt-10">
              <GeneratedDesign 
                designs={generatedDesigns} 
                description={description}
              />
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignGenerator;
