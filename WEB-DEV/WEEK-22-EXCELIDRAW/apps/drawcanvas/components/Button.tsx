import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {   
  children: React.ReactNode;
  className?: string;
}

const Button = ({children, className}: ButtonProps) => {
  return (
    <button className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ${className}`} >
      {children}
    </button>
  )
}


export default Button