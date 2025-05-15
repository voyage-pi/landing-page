import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "./next-shim";
import { Image } from "./next-shim";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/voyage.png"
            alt="Voyage Logo"
            width={40}
            height={40}
            className="h-20 w-auto object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-[#fe385c] hover:text-[#fe385c]/80">
            Layouts
          </Link>
          <Link href="#features" className="text-[#2c303b] hover:text-[#fe385c]">
            Features
          </Link>
          <Link href="#" className="text-[#2c303b] hover:text-[#fe385c]">
            Updates
          </Link>
          <Link href="#" className="text-[#2c303b] hover:text-[#fe385c]">
            Support
          </Link>
        </nav>
        <Button className="bg-[#fe385c] hover:bg-[#e42a4e] text-white rounded-full px-6">Purchase Template</Button>
      </div>
    </header>
  );
} 