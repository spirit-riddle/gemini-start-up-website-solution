
import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a href={href}>{children}</a>
  );
};

export default Link;