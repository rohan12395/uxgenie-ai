
import { FadeIn } from './ui-animations';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-50 to-white border-t border-indigo-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FadeIn delay={0.1} direction="up">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  UI
                </div>
                <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">DesignAI</span>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Revolutionizing the way interfaces are designed with the power of artificial intelligence.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <div>
              <h4 className="font-medium mb-4 text-indigo-800">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Reviews</a></li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <div>
              <h4 className="font-medium mb-4 text-indigo-800">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">API</a></li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <div>
              <h4 className="font-medium mb-4 text-indigo-800">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">Contact</a></li>
              </ul>
            </div>
          </FadeIn>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} DesignAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-indigo-700 transition-colors">Terms</a>
              <a href="#" className="text-slate-500 hover:text-indigo-700 transition-colors">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-indigo-700 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
