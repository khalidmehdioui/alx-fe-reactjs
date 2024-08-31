// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: 'New Todo' }
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('can toggle a todo between completed and not completed', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(screen.getByText(/Delete/i));
  expect(todo).not.toBeInTheDocument();
});
