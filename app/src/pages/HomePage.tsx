
import React from 'react';
import Layout from '../components/organisms/Layout';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';

const HomePage: React.FC = () => {
  return (
    <Layout title="Welcome" description="This is the home page of our virtual project.">
      <Heading level={2}>Welcome to Our Website</Heading>
      <Paragraph>
        Explore our services, products, and more. Get in touch with us for any inquiries.
      </Paragraph>
    </Layout>
  );
};

export default HomePage;