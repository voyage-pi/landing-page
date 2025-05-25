declare module '@/components/next-shim' {
  import React from 'react';

  export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
  }

  export function Image(props: ImageProps): JSX.Element;

  export interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
  }

  export function Link(props: LinkProps): JSX.Element;

  export interface IconProps {
    className?: string;
  }

  export function ChevronRight(props: IconProps): JSX.Element;
} 