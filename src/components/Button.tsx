import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  className,
  children,
  onClick,
  type
}) => {
  return (
    <button
      className={clsx(
        'rounded-full border border-primary-100 px-6 py-3 font-open-sans font-semibold hover:bg-white hover:text-gray-900',
        variant === 'primary' && 'bg-primary-100 text-white',
        variant === 'outline' && 'text-gray-950',
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
