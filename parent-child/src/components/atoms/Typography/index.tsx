import React from 'react';
import Typography from '@mui/material/Typography';

interface TextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign = 'left',
  lineHeight,
}) => {
  return (
    <Typography
      style={{
        fontFamily: 'Gilroy, sans-serif', // Custom font
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        textAlign: textAlign,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </Typography>
  );
};
