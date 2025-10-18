import React, { FC } from 'react';

interface InputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ className, value, placeholder, type, onChange }) => {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
