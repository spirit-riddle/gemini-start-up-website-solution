
import React from 'react';
import Layout from '../components/organisms/Layout';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';

const AboutPage: React.FC = () => {
  return (
    <Layout title="About Us" description="Learn more about our company and mission.">
      <Heading level={2}>About Our Company</Heading>
      <Paragraph>
        We are a team of passionate individuals dedicated to providing innovative solutions.
        Our mission is to [insert your company's mission statement here].
      </Paragraph>
    </Layout>
  );
};

export default AboutPage;