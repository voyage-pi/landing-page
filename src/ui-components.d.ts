declare module '@/components/ui/button' {
  import { ButtonHTMLAttributes } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
  }

  export function Button(props: ButtonProps): JSX.Element;
} 