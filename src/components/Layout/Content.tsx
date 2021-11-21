import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({
  children,
}: ContentProps) => (
  <main>
    {children}
  </main>
);

export default Content;
