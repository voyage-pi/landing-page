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
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-0' : 'bg-transparent py-4'}`}>
      <div className="mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/voyage.png"
            alt="Voyage Logo"
            className="h-28"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="#" className="text-[#fe385c] hover:text-[#fe385c]/80 font-medium">
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
        <div className="flex items-center space-x-4 pr-12">
          <Link href="" className="text-[#2c303b] rounded-full pr-7 font-medium">Login</Link>
          <Button className="bg-[#fe385c] border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#fe385c] hover:text-[#fe385c] text-white rounded-full px-6">
            <strong>Sign up</strong>
          </Button>
        </div>
      </div>
    </header>
  );
} 