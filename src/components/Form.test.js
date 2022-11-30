import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders Three sections titles', () => {
  render(<Form />);
  const title = screen.getByText('Personal Info');
  expect(title).not.toBeUndefined();

  const expTitle = screen.getByText('Experience');
  expect(expTitle).not.toBeUndefined();

  const eduTitle = screen.getByText('Education');
  expect(eduTitle).not.toBeUndefined();
});


