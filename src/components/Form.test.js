import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Three sections titles', () => {
  render(<App />);
  const title = screen.getByText('Personal Info');
  expect(title).not.toBeUndefined();

  const expTitle = screen.getByText('Experience');
  expect(expTitle).not.toBeUndefined();

  const eduTitle = screen.getByText('Education');
  expect(eduTitle).not.toBeUndefined();
});

test('renders two add buttons', () => { 
  render(<App />);
  const addButtons = screen.getAllByText('Add');
  expect(addButtons).toHaveLength(2);
});

test('renders two delete buttons', () => { 
  render(<App />);
  const deleteButtons = screen.getAllByText('Delete');
  expect(deleteButtons).toHaveLength(2);
});

test('renders one experience inputGroup', () => { 
  render(<App />);
  const positionInputs = screen.getAllByPlaceholderText('Position');
  expect(positionInputs).toHaveLength(1);

  const companyInputs = screen.getAllByPlaceholderText('Company');
  expect(companyInputs).toHaveLength(1);
});

test('renders one education inputGroup', () => { 
  render(<App />);
  const institutionInputs = screen.getAllByPlaceholderText('Institution');
  expect(institutionInputs).toHaveLength(1);

  const degreeInputs = screen.getAllByPlaceholderText('Degree');
  expect(degreeInputs).toHaveLength(1);
});

test('add button add experience inputGroup', () => {
  render(<App />);
  const positionInputs1 = screen.getAllByPlaceholderText('Position');
  expect(positionInputs1).toHaveLength(1);

  const [addExp, ] = screen.getAllByText('Add');
  userEvent.click(addExp);

  const positionInputs2 = screen.getAllByPlaceholderText('Position');
  expect(positionInputs2).toHaveLength(2);
});

test('add button add education inputGroup', () => {
  render(<App />);
  const institutionInputs1 = screen.getAllByPlaceholderText('Institution');
  expect(institutionInputs1).toHaveLength(1);

  const [, addEdu] = screen.getAllByText('Add');
  userEvent.click(addEdu);

  const institutionInputs2 = screen.getAllByPlaceholderText('Institution');
  expect(institutionInputs2).toHaveLength(2);
});

test('delete button delete experience inputGroup', () => {
  render(<App />);
  const positionInputs1 = screen.getAllByPlaceholderText('Position');
  expect(positionInputs1).toHaveLength(1);

  const [deleteExp, ] = screen.getAllByText('Delete');
  userEvent.click(deleteExp);

  const positionInputs2 = screen.queryAllByPlaceholderText('Position');
  expect(positionInputs2).toHaveLength(0);
});

test('delete button delete education inputGroup', () => {
  render(<App />);
  const institutionInputs1 = screen.getAllByPlaceholderText('Institution');
  expect(institutionInputs1).toHaveLength(1);

  const [, deleteEdu] = screen.getAllByText('Delete');
  userEvent.click(deleteEdu);

  const institutionInputs2 = screen.queryAllByPlaceholderText('Institution');
  expect(institutionInputs2).toHaveLength(0);
});

