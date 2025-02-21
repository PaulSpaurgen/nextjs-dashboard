import React from 'react';

interface TooltipProps {
  text?: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="tooltip cursor-pointer" data-tip={text}>
      {children}
    </div>
  );
};
