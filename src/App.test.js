import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD Pipeline Working', () => {
  render(<App />);
  const headingElement = screen.getByText('CI/CD Pipeline Working');
  expect(headingElement).toBeInTheDocument();
});
