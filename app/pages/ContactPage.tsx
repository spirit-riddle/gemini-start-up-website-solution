
import React from 'react';
import Layout from '../components/organisms/Layout';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import Form from '../components/organisms/Form';

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact Us" description="Get in touch with us today!">
      <Heading level={2}>Contact Us</Heading>
      <Paragraph>
        Have questions? Want to learn more? Fill out the form below and we'll get back to you soon.
      </Paragraph>
      <Form />
    </Layout>
  );
};

export default ContactPage;