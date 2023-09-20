import React from 'react'

interface ErrorMessageProps {
    children: React.ReactNode;
}

export const ErrorMessage:React.FC<ErrorMessageProps> = ({children}) => {
  return (
    <p className="text-xs mt-1 text-red-500">{children}</p>
  )
}
