import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders the Todo List Application title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Todo List Application/i);
    expect(titleElement).toBeInTheDocument();
  });
});
