import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simplest Working Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
