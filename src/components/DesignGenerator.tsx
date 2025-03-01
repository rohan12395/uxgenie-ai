
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, Camera, Leaf } from "lucide-react";
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
      // Plant recognition app specific mockups
      const mockDesigns: { mobile?: string; web?: string } = {};
      
      if (platform === 'mobile' || platform === 'both') {
        mockDesigns.mobile = 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843';
      }
      
      if (platform === 'web' || platform === 'both') {
        mockDesigns.web = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843';
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
                  <Leaf className="h-5 w-5 text-green-600" />
                  Plant Recognition Design Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Describe your plant app design</label>
                    <Textarea
                      placeholder="Describe the plant recognition UI you want to generate (e.g., 'A modern app for identifying plants with a camera button and plant info display')"
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
                      className="w-full btn-shine bg-green-600 hover:bg-green-700"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating plant app designs...
                        </>
                      ) : (
                        <>
                          <Camera className="mr-2 h-4 w-4" />
                          Generate plant recognition UI
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
