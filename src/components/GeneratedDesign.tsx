
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone, Download, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FadeIn } from './ui-animations';

interface GeneratedDesignProps {
  designs: {
    mobile?: string;
    web?: string;
  };
  description: string;
}

const GeneratedDesign = ({ designs, description }: GeneratedDesignProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    designs.web ? 'web' : 'mobile'
  );
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState({
    mobile: !!designs.mobile,
    web: !!designs.web
  });
  
  const handleDownload = (type: 'mobile' | 'web') => {
    const imageUrl = type === 'mobile' ? designs.mobile : designs.web;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = imageUrl || '';
    link.download = `${type}-design-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`${type === 'mobile' ? 'Mobile' : 'Web'} design downloaded`, {
      description: "Your design has been saved to your downloads folder.",
    });
  };
  
  const handleCopyCode = () => {
    // In a real implementation, this would generate actual code based on the design
    // For now, we're just copying a placeholder
    navigator.clipboard.writeText(`// Generated UI code for ${activeTab} design based on: "${description}"\n\n// This would contain the actual React/Tailwind code in a real implementation`);
    setIsCopied(true);
    toast.success("Code copied to clipboard");
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleImageLoad = (type: 'mobile' | 'web') => {
    setIsLoading(prev => ({
      ...prev,
      [type]: false
    }));
  };
  
  return (
    <div className="space-y-6">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
          <Sparkles className="inline h-5 w-5 mr-2 text-purple-500" />
          Your AI-generated designs
        </h3>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Card className="shadow-lg border-purple-200 overflow-hidden">
          <Tabs 
            defaultValue={activeTab} 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-between items-center border-b border-purple-200 p-4 bg-gradient-to-r from-indigo-50 to-purple-50">
              <TabsList className="grid grid-cols-2 w-fit bg-white shadow-sm">
                {designs.web && (
                  <TabsTrigger value="web" disabled={!designs.web} className="flex items-center gap-2 data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800">
                    <Monitor className="h-4 w-4" />
                    <span>Web</span>
                  </TabsTrigger>
                )}
                {designs.mobile && (
                  <TabsTrigger value="mobile" disabled={!designs.mobile} className="flex items-center gap-2 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile</span>
                  </TabsTrigger>
                )}
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-purple-200 hover:bg-purple-50 text-purple-700"
                  onClick={() => handleDownload(activeTab as 'mobile' | 'web')}
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-indigo-200 hover:bg-indigo-50 text-indigo-700"
                  onClick={handleCopyCode}
                >
                  {isCopied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">Copy code</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <CardContent className="p-0">
              {designs.web && (
                <TabsContent value="web" className="mt-0">
                  <div className="p-6 flex justify-center">
                    <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-md border border-purple-200">
                      {isLoading.web && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="flex flex-col items-center gap-2">
                            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                            <p className="text-sm text-gray-600">Loading AI design...</p>
                          </div>
                        </div>
                      )}
                      <img 
                        src={designs.web} 
                        alt="Generated web design" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: "16/9" }}
                        loading="lazy"
                        onLoad={() => handleImageLoad('web')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm">Based on: {description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              {designs.mobile && (
                <TabsContent value="mobile" className="mt-0">
                  <div className="p-6 flex justify-center">
                    <div className="relative max-w-[300px] rounded-3xl overflow-hidden shadow-md border-8 border-gray-800">
                      {isLoading.mobile && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="flex flex-col items-center gap-2">
                            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                            <p className="text-sm text-gray-600">Loading AI design...</p>
                          </div>
                        </div>
                      )}
                      <img 
                        src={designs.mobile} 
                        alt="Generated mobile design" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: "9/16" }}
                        loading="lazy"
                        onLoad={() => handleImageLoad('mobile')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm">Based on: {description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
            </CardContent>
          </Tabs>
        </Card>
      </FadeIn>
    </div>
  );
};

export default GeneratedDesign;
