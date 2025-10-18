import { Button } from '@mui/material';
import React, { FC } from 'react';

export interface CustomButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  onClick?: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({
  className,
  children,
  variant,
  disabled,
  onClick,
}) => {
  return (
    <Button className={className} variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};
