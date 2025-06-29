import { useState } from 'react';

export default function RecipeAddForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="recipe-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}
