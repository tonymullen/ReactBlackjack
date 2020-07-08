import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders top level app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/DEAL/i);
  expect(linkElement).toBeInTheDocument();
});
