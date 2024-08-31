import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList'; // Adjust the path if necessary

describe('TodoList Component', () => {
  test('renders input and button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  test('adds a task when the add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add Task');

    act(() => {
      fireEvent.change(input, { target: { value: 'Test Task' } });
      fireEvent.click(button);
    });

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('deletes a task when the delete button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add Task');

    act(() => {
      fireEvent.change(input, { target: { value: 'Task to Delete' } });
      fireEvent.click(button);
    });

    const deleteButton = screen.getByText('Delete');
    act(() => {
      fireEvent.click(deleteButton);
    });

    expect(screen.queryByText('Task to Delete')).toBeNull();
  });

  test('toggles task completion', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add Task');

    act(() => {
      fireEvent.change(input, { target: { value: 'Task to Complete' } });
      fireEvent.click(button);
    });

    const task = screen.getByText('Task to Complete');
    act(() => {
      fireEvent.click(task);
    });

    expect(task).toHaveStyle('text-decoration: line-through');

    act(() => {
      fireEvent.click(task);
    });

    expect(task).not.toHaveStyle('text-decoration: line-through');
  });
});
