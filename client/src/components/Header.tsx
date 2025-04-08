import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/api", label: "API" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${
      scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md border-border' : 'border-border/50'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <PawPrint className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-foreground">Bionimal</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((navLink) => (
              <Link 
                key={navLink.href} 
                href={navLink.href}
                onClick={closeMobileMenu}
              >
                <span className={`px-3 py-2 text-sm font-medium cursor-pointer ${
                  location === navLink.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}>
                  {navLink.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link href="/contact">
              <Button className="hidden md:inline-flex">
                Book a Demo
              </Button>
            </Link>
            
            <button 
              type="button" 
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3 border-t border-border">
          {navLinks.map((navLink) => (
            <Link 
              key={navLink.href} 
              href={navLink.href}
              onClick={closeMobileMenu}
            >
              <span className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                location === navLink.href 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}>
                {navLink.label}
              </span>
            </Link>
          ))}
          <Link href="/contact" onClick={closeMobileMenu}>
            <span className="block px-3 py-2 text-base font-medium text-primary hover:text-primary/80 cursor-pointer">
              Book a Demo
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
