import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';
import clsx from 'clsx';

import { ErrorMessage } from '.';
import { Label } from '.';

interface InputFieldProps {
  type?: 'text' | 'number' | 'email' | 'password';
  label?: string;
  className?: string;
  placeholder?: string;
  iconPosition?: 'start' | 'end';
  icon?: React.ReactNode;
  isDisabled?: boolean;
  hasError: FieldError | undefined;
  withIcon?: boolean;
  canPressSpace?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  min?: string;
  max?: string;
  value?: string | number;
  isRequired?: boolean;
  errorMessage?: string | undefined;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  icon,
  label,
  hasError,
  className,
  placeholder,
  registration,
  withIcon = false,
  iconPosition = 'end',
  canPressSpace = true,
  min,
  max,
  value,
  isDisabled = false,
  isRequired,
  errorMessage
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (e: any) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const { name } = registration;

  return (
    <div>
      {!!label && (
        <Label htmlFor={name} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <div className="relative">
        <input
          className={clsx(
            'font-WorkSans focus-within:border-secondary h-14 w-full rounded-2xl border bg-gray-150 px-4 text-gray-950 placeholder-gray-950 outline-none placeholder:text-sm disabled:bg-gray-100',
            hasError && 'border-red-500',
            className
          )}
          type={type}
          disabled={isDisabled}
          name={name}
          value={value}
          id={name}
          placeholder={placeholder}
          onKeyDown={canPressSpace ? undefined : handleKeyDown}
          min={min}
          max={max}
          {...registration}
        />
        {withIcon && (
          <span
            className={clsx(
              'absolute inset-y-0 flex items-center',
              iconPosition === 'start' ? 'left-0' : 'right-0'
            )}
          >
            <span className="p-1">{icon}</span>
          </span>
        )}
      </div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
