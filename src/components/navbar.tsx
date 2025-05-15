import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "./next-shim";

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
    <header className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span>linten</span>
            <span className="text-cyan-400">se</span>
          </h1>
          <span className="text-gray-400 text-xs ml-2 mt-2">LANDING PAGE TEMPLATE</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-cyan-400 hover:text-cyan-300">
            Layouts
          </Link>
          <Link href="#features" className="text-white hover:text-cyan-300">
            Features
          </Link>
          <Link href="#" className="text-white hover:text-cyan-300">
            Updates
          </Link>
          <Link href="#" className="text-white hover:text-cyan-300">
            Support
          </Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Purchase Template</Button>
      </div>
    </header>
  );
} 