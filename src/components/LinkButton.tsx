import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

interface LinkButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  className,
  children,
  href,
  onClick
}) => {
  return (
    <Link
      className={clsx(
        'inline-block rounded-full border border-primary-100 px-5 py-3 font-open-sans font-semibold hover:bg-white hover:text-gray-900',
        variant === 'primary' && 'bg-primary-100 text-white',
        variant === 'outline' && 'text-gray-950',
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
