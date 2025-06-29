import { render, screen, fireEvent } from '@testing-library/react';
import RecipeAddForm from '@/components/RecipeAddForm';

describe('RecipeForm', () => {
  it('calls onSubmit with the input value', () => {
    const mockSubmit = jest.fn();
    render(<RecipeAddForm onSubmit={mockSubmit} />);

    const input = screen.getByTestId('recipe-input');
    fireEvent.change(input, { target: { value: 'Pancakes' } });

    fireEvent.click(screen.getByText('Add'));

    expect(mockSubmit).toHaveBeenCalledWith({ name: 'Pancakes' });
  });
});
