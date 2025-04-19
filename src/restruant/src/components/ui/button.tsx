import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = variant === 'outline' 
    ? 'border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white' 
    : 'bg-[#8B0000] text-white hover:bg-red-900';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;