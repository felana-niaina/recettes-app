import { render, screen } from '@testing-library/react';
import RecipesPage from '@/pages/recipes';

const mockRecipes = [
  {
    id: 1,
    name: 'Spaghetti',
    image: '/spaghetti.jpg',
    difficulty: 'Easy',
    cookTimeMinutes: 30,
    slug: 'spaghetti',
  },
  {
    id: 2,
    name: 'Tacos',
    image: '/tacos.jpg',
    difficulty: 'Medium',
    cookTimeMinutes: 20,
    slug: 'tacos',
  },
];

describe('RecipesPage', () => {
  it('displays all recipes', () => {
    render(<RecipesPage recipes={mockRecipes} />);

    expect(screen.getByText('Spaghetti')).toBeInTheDocument();
    expect(screen.getByText('Tacos')).toBeInTheDocument();
  });
});
