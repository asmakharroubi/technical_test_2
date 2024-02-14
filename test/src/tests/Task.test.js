import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from './Task';
import { useDispatch } from 'react-redux';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Task Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  test('render Task component', () => {
    const taskdetails = {
      id: 1,
      description: 'Test task',
      isDone: false,
    };
    const { getByText } = render(<Task taskdetails={taskdetails} />);

    expect(getByText('Test task')).toBeInTheDocument();
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
  });

  test('handleDone function', () => {
    const taskdetails = {
      id: 1,
      description: 'Test task',
      isDone: false,
    };
    const { getByText } = render(<Task taskdetails={taskdetails} />);

    fireEvent.click(getByText('Completed'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CHANGE_DONE',
      payload: 1,
    });
  });

  });
