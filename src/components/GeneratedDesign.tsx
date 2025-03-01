
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone, Download, Copy, Check } from "lucide-react";
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
  
  const handleDownload = (type: 'mobile' | 'web') => {
    // In a real app, this would be a proper download link
    toast.success(`${type === 'mobile' ? 'Mobile' : 'Web'} design downloaded`, {
      description: "Your design has been saved to your downloads folder.",
    });
  };
  
  const handleCopyCode = () => {
    // In a real app, this would copy actual code to clipboard
    navigator.clipboard.writeText(`// Generated code for ${activeTab} design based on: ${description}`);
    setIsCopied(true);
    toast.success("Code copied to clipboard");
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-4 text-center">Your generated designs</h3>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Card className="shadow-lg border-border/50 overflow-hidden">
          <Tabs 
            defaultValue={activeTab} 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-between items-center border-b border-border/50 p-4">
              <TabsList className="grid grid-cols-2 w-fit bg-muted/30">
                {designs.web && (
                  <TabsTrigger value="web" disabled={!designs.web} className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    <span>Web</span>
                  </TabsTrigger>
                )}
                {designs.mobile && (
                  <TabsTrigger value="mobile" disabled={!designs.mobile} className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile</span>
                  </TabsTrigger>
                )}
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => handleDownload(activeTab as 'mobile' | 'web')}
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
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
                    <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={designs.web} 
                        alt="Generated web design" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: "16/9" }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
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
                      <img 
                        src={designs.mobile} 
                        alt="Generated mobile design" 
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: "9/16" }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
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
