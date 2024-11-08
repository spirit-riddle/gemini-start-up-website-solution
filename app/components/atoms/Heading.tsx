
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ children, level }) => {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
};

export default Heading;