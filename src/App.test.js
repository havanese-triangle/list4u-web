import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/list 4 u/i);
  expect(linkElement).toBeInTheDocument();
});
