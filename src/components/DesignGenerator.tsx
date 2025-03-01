
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import PlatformSelector, { Platform } from './PlatformSelector';
import GeneratedDesign from './GeneratedDesign';
import { FadeIn } from './ui-animations';
import { toast } from "sonner";

const DesignGenerator = () => {
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState<Platform>('both');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<{ mobile?: string; web?: string }>({});
  
  const generateDesignWithAI = async (prompt: string, designType: 'mobile' | 'web') => {
    try {
      // In a real implementation, this would be an API call to a service like DALL-E, Midjourney, etc.
      // For demo purposes, we're creating a realistic simulation with a delay
      
      // Here's where we'd make the actual API call in production
      // const response = await fetch('https://api.openai.com/v1/images/generations', {...})
      
      // Create specific prompts based on the platform type
      const designPrompt = designType === 'mobile' 
        ? `Mobile app interface based on: ${prompt}. Show a realistic mobile app UI with clean design.`
        : `Web app interface based on: ${prompt}. Show a realistic website UI with modern layout.`;
      
      console.log(`Generating ${designType} design with prompt: ${designPrompt}`);
      
      // Simulate API response with themed images based on common UI patterns
      // In a production app, these would come from the AI service
      const mockDesigns = {
        mobile: {
          'dashboard': 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1',
          'social': 'https://images.unsplash.com/photo-1621274147744-cfb5730c1560', 
          'ecommerce': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb',
          'default': 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960'
        },
        web: {
          'dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
          'social': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
          'ecommerce': 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
          'default': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d'
        }
      };
      
      // Basic keyword matching to determine design type
      let designCategory = 'default';
      const lowerPrompt = prompt.toLowerCase();
      
      if (lowerPrompt.includes('dashboard') || lowerPrompt.includes('analytics') || lowerPrompt.includes('admin')) {
        designCategory = 'dashboard';
      } else if (lowerPrompt.includes('social') || lowerPrompt.includes('profile') || lowerPrompt.includes('feed')) {
        designCategory = 'social';
      } else if (lowerPrompt.includes('shop') || lowerPrompt.includes('product') || lowerPrompt.includes('ecommerce')) {
        designCategory = 'ecommerce';
      }
      
      return mockDesigns[designType][designCategory];
    } catch (error) {
      console.error(`Error generating ${designType} design:`, error);
      toast.error(`Failed to generate ${designType} design. Please try again.`);
      return null;
    }
  };
  
  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    const designs: { mobile?: string; web?: string } = {};
    
    try {
      if (platform === 'mobile' || platform === 'both') {
        const mobileDesign = await generateDesignWithAI(description, 'mobile');
        if (mobileDesign) designs.mobile = mobileDesign;
      }
      
      if (platform === 'web' || platform === 'both') {
        const webDesign = await generateDesignWithAI(description, 'web');
        if (webDesign) designs.web = webDesign;
      }
      
      setGeneratedDesigns(designs);
      
      if (Object.keys(designs).length > 0) {
        toast.success('Designs generated successfully!', {
          description: 'Your AI-powered UI designs are ready.'
        });
      } else {
        toast.error('Failed to generate designs.');
      }
    } catch (error) {
      console.error('Error in design generation:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
  
  const hasGeneratedDesigns = Object.keys(generatedDesigns).length > 0;
  
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <Card className="border-purple-200 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-100 to-purple-100 border-b border-purple-200">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                    Design Generator
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-indigo-800">Describe your design</label>
                    <Textarea
                      placeholder="Describe the UI you want to generate (e.g., 'A modern e-commerce product page with shopping cart and checkout button')"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[120px] resize-none focus-ring border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-indigo-800">Select platform</label>
                    <PlatformSelector
                      selectedPlatform={platform}
                      onSelect={setPlatform}
                    />
                  </div>
                  
                  <div className="pt-3">
                    <Button
                      onClick={handleGenerate}
                      disabled={!description.trim() || isGenerating}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white btn-shine"
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
