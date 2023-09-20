import React from 'react'
import clsx from 'clsx'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string
  isRequired?: boolean
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, isRequired, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'mb-2 flex items-end space-x-0.5 text-sm font-semibold',
          className
        )}
        {...props}
      >
        {isRequired && <span className="text-primary">*</span>}

        <span>{props.children}</span>
      </label>
    )
  }
)

Label.displayName = 'Label'
