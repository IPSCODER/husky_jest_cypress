// Counter.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Counter from './Button';

test('renders Counter component', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count:/i);
  expect(countElement).toBeInTheDocument();
});

test('initial count is 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count by 1 when button is clicked', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Increment/i);
  fireEvent.click(buttonElement);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});
