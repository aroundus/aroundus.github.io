import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main>{children}</main>;
}
