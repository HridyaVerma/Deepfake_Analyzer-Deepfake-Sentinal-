
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Home, Info, AlertTriangle, Search, Upload, Menu, X 
} from "lucide-react";

const menuItems = [
  { name: "What is Deepfake?", path: "/what-is-deepfake", icon: <Info className="mr-2 h-4 w-4" /> },
  { name: "Why Important?", path: "/why-detection-matters", icon: <AlertTriangle className="mr-2 h-4 w-4" /> },
  { name: "Identify Deepfakes", path: "/how-to-identify", icon: <Search className="mr-2 h-4 w-4" /> },
  { name: "Detect", path: "/detect", icon: <Upload className="mr-2 h-4 w-4" /> },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col continuous-gradient">
      <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-md border-b border-border/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-primary-foreground font-bold purple-glow">
              DS
            </div>
            <span className="text-xl font-bold gradient-heading ml-2">DeepfakeSentinel</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                asChild
                className={cn(
                  "transition-all font-medium",
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                )}
              >
                <Link to={item.path}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/90 backdrop-blur-lg md:hidden pt-16">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "outline"}
                className="w-full justify-start glass-card"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to={item.path} className="flex items-center">
                  {item.icon}
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <main className="flex-grow">
        {pageLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </main>
      
      <footer className="bg-deepfake-900/50 backdrop-blur-md border-t border-border/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-muted-foreground">
                © 2025 DeepfakeSentinel. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
