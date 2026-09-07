import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline-green' | 'outline-gold' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wide",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base font-semibold tracking-wide shadow-md",
  };

  const variantStyles = {
    primary: "bg-[#163E2D] hover:bg-[#113023] text-white focus:ring-[#163E2D] shadow-warm-sm hover:shadow-warm-md",
    gold: "bg-gradient-to-r from-[#D4A359] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B88636] text-[#141615] font-semibold focus:ring-[#D4A359] shadow-warm-sm hover:shadow-gold-glow",
    'outline-green': "border-2 border-[#163E2D] text-[#163E2D] hover:bg-[#163E2D] hover:text-white focus:ring-[#163E2D]",
    'outline-gold': "border-2 border-[#D4A359] text-[#D4A359] hover:bg-[#D4A359] hover:text-[#141615] focus:ring-[#D4A359]",
    ghost: "text-[#163E2D] hover:bg-[#163E2D]/10 focus:ring-[#163E2D]",
    white: "bg-white text-[#163E2D] hover:bg-[#FAF5EB] shadow-warm-sm hover:shadow-warm-md focus:ring-white",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        leftIcon && <span className="mr-2 inline-flex items-center">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="ml-2 inline-flex items-center">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
