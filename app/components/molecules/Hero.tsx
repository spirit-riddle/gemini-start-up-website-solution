
import React from 'react';
import Heading from '../atoms/Heading';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="hero">
      <Heading level={1}>{title}</Heading>
      <p>{description}</p>
    </div>
  );
};

export default Hero;