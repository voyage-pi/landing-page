import React from 'react';

// Image component shim
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export function Image({ src, alt, width, height, fill, className }: ImageProps) {
  if (fill) {
    return (
      <div className="relative w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          className={`absolute inset-0 w-full h-full object-cover ${className || ''}`} 
        />
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className} 
    />
  );
}

// Link component shim
interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Link({ href, className, children }: LinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

// ChevronRight icon shim
interface IconProps {
  className?: string;
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`lucide lucide-chevron-right ${className || ''}`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
} 