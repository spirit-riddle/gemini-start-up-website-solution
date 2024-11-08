
import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Paragraph;