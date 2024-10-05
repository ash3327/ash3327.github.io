import React from 'react';
import { Button } from '@mui/material';

interface BlackButtonProps {
  children: React.ReactNode; // Content inside the button
  onClick?: () => void; // Optional click handler
  className?: string; // Optional additional class names
  href?: string; // Optional link for anchor behavior
  download?: boolean; // Optional download attribute
}

const BlackButton: React.FC<BlackButtonProps> = ({ children, onClick, className, href, download }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        '&:hover': { backgroundColor: 'gray' },
      }}
      onClick={onClick}
      className={className}
      component={href ? 'a' : 'button'} // Use 'a' if href is provided
      href={href} // Set href if provided
      download={download ? true : undefined} 
    >
      {children}
    </Button>
  );
};

export default BlackButton;