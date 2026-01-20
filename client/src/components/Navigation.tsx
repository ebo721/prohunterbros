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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface NavProps {
  highContrast: boolean;
  toggleHighContrast: () => void;
}

export function Navigation({ highContrast, toggleHighContrast }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      <div className="bg-white py-2 px-4 md:px-8 text-xs font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Toggle Button Container */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleHighContrast}
                className="flex items-center focus:outline-none"
              >
                <div className={cn(
                  "relative inline-flex h-5 w-10 items-center rounded-full transition-colors",
                  highContrast ? "bg-secondary" : "bg-secondary"
                )}>
                  <span className={cn(
                    "inline-block h-3 w-3 transform rounded-full bg-white transition-transform",
                    highContrast ? "translate-x-6" : "translate-x-1"
                  )} />
                </div>
                <span className="ml-2 text-xs hover:text-[#df7a27] transition-colors cursor-pointer">High Contrast</span>
              </button>
            </div>
            <a 
              href="#contact-section" 
              className="text-xs hover:text-[#df7a27] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
             <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center hover:primary transition-colors focus:outline-none">
                <Globe className="w-3 h-3 mr-1" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <span className="mr-2">🇺🇸</span> English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span className="mr-2">🇲🇳</span> Mongolia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav 
        className={cn(
          "w-full transition-all duration-300 border-b border-transparent bg-primary/90 backdrop-blur-sm",
          isScrolled ? "shadow-md py-2 border-border/10" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            aria-label="Go to top"
            className="flex items-center space-x-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false); // Хэрэв мобайл меню нээлттэй бол хаана
            }}
            >
            {/* Logo Image Container */}
            <div className="h-12 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img 
                src="icon1.png"
                alt="Huntbrothers Logo" 
                className="w-full h-full object-contain -translate-x-1"
                onError={(e) => {
                  // Хэрэв зураг ачаалахгүй бол оронд нь харагдах текст (Fallback)
                  e.currentTarget.src = "https://placehold.co/100x100?text=HB";
                }}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center space-x-8 text-base text-white flex-1">
               <Link 
                 href="#aboutus" 
                 className="relative group hover:text-secondary transition-colors cursor-pointer"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                 About us
                 <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-secondary -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
               </Link>
            <DropdownMenu
              open={dropdownOpen} 
              onOpenChange={setDropdownOpen} 
              modal={false}>
                <div 
                  onMouseEnter={() => setDropdownOpen(true)} 
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="relative inline-block"
                >
              <DropdownMenuTrigger className="relative flex items-center hover:text-secondary transition-colors focus:outline-none group py-1">
                <span className="relative">
                  Challenge
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-secondary -translate-x-1/2 transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full" />
                </span>
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-data-[state=open]:rotate-180"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={() => setDropdownOpen(true)}
                className="w-48 p-2">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer font-medium">
                    <span className="hover:text-secondary transition-colors w-full">
                      Argali
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-48">
                      <DropdownMenuItem className="cursor-pointer"
                        // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('challenge');
                          if (element) {
                            // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        >
                        Altai</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer"
                        // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('challenge');
                          if (element) {
                            // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        >
                        Khangai</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer"
                        // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('challenge');
                          if (element) {
                            // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        >
                        Gobi</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  
                  <DropdownMenuSubTrigger className="cursor-pointer font-medium">
                    <span className="hover:text-secondary transition-colors w-full">
                      Ibex
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-48">
                      <DropdownMenuItem className="cursor-pointer"
                        // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('Ibex');
                          if (element) {
                            // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        >
                        Altai</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer"
                        // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById('Ibex');
                          if (element) {
                            // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        >
                        Gobi</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                
                
                <DropdownMenuItem className="cursor-pointer font-medium"
                  // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('other');
                    if (element) {
                      // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  >
                  Other</DropdownMenuItem>
              </DropdownMenuContent>
              </div>
            </DropdownMenu>
              <Link 
                 href="#gallery" 
                 className="relative group hover:text-secondary transition-colors cursor-pointer"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
              Gallery
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-secondary -translate-x-1/2 transition-all duration-300 group-hover:w-full"/>
            </Link>
          </div>
          
       
          {/* Desktop CTAs */}
          

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
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
            <nav className="flex flex-col p-6 space-y-6">

              {/* 1. Энгийн линкүүд */}
              <Link 
                 href="#aboutus" 
                 className="relative group hover:text-secondary transition-colors cursor-pointer"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                About us
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

                <Link 
                   href="#gallery" 
                   className="relative group hover:text-secondary transition-colors cursor-pointer"
                   onClick={(e) => {
                     e.preventDefault();
                     document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                Gallery
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* 2. Challenge - Dropdown-ийг гар утсанд зориулж "Accordion" хэлбэрээр хийх нь илүү эвтэйхэн */}
              <div className="space-y-4">
                <div className="text-base">
                  Challenges
                </div>
                <div className="pl-4 flex flex-col space-y-4 border-l-2 border-primary/20">
                  <button 
                    onClick={() => { document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Argali
                  </button>
                  <button 
                    onClick={() => { document.getElementById('Ibex')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Ibex
                  </button>
                  <button 
                    onClick={() => { document.getElementById('other')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Other
                  </button>
                </div>
              </div>
                <Link 
                   href="#contact" 
                   className="relative group hover:text-secondary transition-colors cursor-pointer"
                   onClick={(e) => {
                     e.preventDefault();
                     document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                Contact us
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>
              )}
      </nav>
    </header>
  );
}
