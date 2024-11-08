```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globalStyles.css';
import './styles/formStyles.css';
import Link from './components/atoms/Link';
import Heading from './components/atoms/Heading';
import Paragraph from './components/atoms/Paragraph';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import { sendContactForm } from './components/utils/api';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await sendContactForm({ name, email, message });
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setName('');
      setEmail('');
      setMessage('');
      // Handle success, e.g., display a success message
    } catch (error) {
      setErrorMessage('Oops, something went wrong. Please try again.');
      setSuccessMessage('');
      // Handle error, e.g., display an error message
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Heading level={3}>Contact Form</Heading>
      <Paragraph>
        Please fill out this form to get in touch with us.
      </Paragraph>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <div>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export { Navigation, Form };
```