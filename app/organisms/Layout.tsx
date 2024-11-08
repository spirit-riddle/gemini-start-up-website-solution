
import React from 'react';
import Footer from '../molecules/Footer';
import Hero from '../molecules/Hero';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div className="layout">
      <Navigation />
      {title && (
        <Hero title={title} description={description} />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;