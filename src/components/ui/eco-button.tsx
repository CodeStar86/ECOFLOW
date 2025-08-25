import React from 'react';
import { Loader2 } from 'lucide-react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function EcoButton({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center rounded-[var(--ec-r-md)]',
    'transition-[background-color,box-shadow,transform] duration-[var(--ec-motion)] ease-[var(--ec-ease)]',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ec-brand)]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'font-medium'
  ].join(' ');

  const variants = {
    primary: [
      'bg-[var(--ec-brand)] text-[var(--ec-n-0)]',
      'hover:bg-[var(--ec-brand-600)] hover:shadow-[var(--ec-sh-md)]',
      'active:scale-[0.98] active:shadow-[var(--ec-sh-sm)]'
    ].join(' '),
    secondary: [
      'bg-[var(--ec-n-100)] text-[var(--ec-n-900)] border border-[var(--ec-n-200)]',
      'hover:bg-[var(--ec-n-200)] hover:shadow-[var(--ec-sh-sm)]',
      'active:scale-[0.98]'
    ].join(' '),
    tertiary: [
      'bg-transparent text-[var(--ec-brand)]',
      'hover:bg-[var(--ec-n-100)]',
      'active:scale-[0.98]'
    ].join(' '),
    destructive: [
      'bg-[var(--ec-error)] text-[var(--ec-n-0)]',
      'hover:bg-[#bf443e] hover:shadow-[var(--ec-sh-md)]',
      'active:scale-[0.98]'
    ].join(' '),
    link: [
      'bg-transparent text-[var(--ec-brand)] underline-offset-4',
      'hover:underline',
      'active:scale-[0.98]'
    ].join(' ')
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm gap-2',
    md: 'h-11 px-4 text-base gap-2',
    lg: 'h-12 px-6 text-lg gap-3'
  };

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5'
  };

  return (
    <button
      className={[baseClasses, variants[variant], sizes[size], className].join(' ')}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className={`${iconSize[size]} animate-spin`} />
      ) : iconLeft ? (
        <span className={iconSize[size]}>{iconLeft}</span>
      ) : null}
      
      {children}
      
      {!isLoading && iconRight && (
        <span className={iconSize[size]}>{iconRight}</span>
      )}
    </button>
  );
}