import { Link } from "wouter";
import { useHighContrast } from "@/hooks/use-theme";
import { Menu, X, Globe, User, ChevronDown, Accessibility } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavProps {
  highContrast: boolean;
  toggleHighContrast: () => void;
}

export function Navigation({ highContrast, toggleHighContrast }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-colors-all">
      {/* Utility Nav */}
      <div className="bg-secondary text-white py-2 px-4 md:px-8 text-xs font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-white/80 transition-colors focus:outline-none">
                <Globe className="w-3 h-3 mr-1" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleHighContrast}
              className={cn(
                "flex items-center hover:text-white/80 transition-colors focus:outline-none",
                highContrast ? "text-primary font-bold" : ""
              )}
            >
              <Accessibility className="w-3 h-3 mr-1" />
              <span>High Contrast</span>
            </button>
            <Link href="/support" className="hover:text-white/80 transition-colors">
              Customer Support
            </Link>
            <Link href="/contact" className="hover:text-white/80 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav 
        className={cn(
          "w-full transition-all duration-300 border-b border-transparent bg-background/95 backdrop-blur-sm",
          isScrolled ? "shadow-md py-3 border-border/10" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* Simple geometric logo placeholder */}
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              H
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
              HubStyle
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-secondary">
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary transition-colors focus:outline-none group">
                Products <ChevronDown className="w-4 h-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2">
                <DropdownMenuItem className="cursor-pointer font-medium">Marketing Hub</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Sales Hub</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Service Hub</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">CMS Hub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary transition-colors focus:outline-none group">
                Resources <ChevronDown className="w-4 h-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2">
                <DropdownMenuItem className="cursor-pointer font-medium">Blog</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Ebooks</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Case Studies</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Community</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="flex items-center text-secondary font-medium hover:text-primary transition-colors">
              <User className="w-4 h-4 mr-1" /> Log in
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              Get started free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
            <div className="space-y-2">
              <h3 className="font-bold text-muted-foreground text-xs uppercase tracking-wider mb-2">Products</h3>
              <Link href="#" className="block py-2 text-secondary font-medium hover:text-primary">Marketing Hub</Link>
              <Link href="#" className="block py-2 text-secondary font-medium hover:text-primary">Sales Hub</Link>
            </div>
            <div className="space-y-2 border-t border-border pt-4">
              <h3 className="font-bold text-muted-foreground text-xs uppercase tracking-wider mb-2">Resources</h3>
              <Link href="#" className="block py-2 text-secondary font-medium hover:text-primary">Blog</Link>
              <Link href="#" className="block py-2 text-secondary font-medium hover:text-primary">Academy</Link>
            </div>
            <div className="pt-4 flex flex-col space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">Get started free</Button>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">Log in</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
