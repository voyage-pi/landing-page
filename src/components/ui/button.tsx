import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export function Button({ className, children, variant = 'default', ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe385c]/50";
  const variantStyles = {
    default: "bg-[#fe385c] hover:bg-[#e42a4e] text-white",
    outline: "border border-[#fe385c] text-[#fe385c] hover:bg-[#fe385c]/10",
    secondary: "bg-[#2c303b] hover:bg-[#21242d] text-white",
    ghost: "hover:bg-[#fe385c]/10 text-[#fe385c]"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`} 
      {...props}
    >
      {children}
    </button>
  )
} 