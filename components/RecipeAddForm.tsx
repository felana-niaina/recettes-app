import { useState } from "react";

type RecipeAddFormProps = {
  onSubmit: (data: { name: string }) => void;
};

export default function RecipeAddForm({ onSubmit }: RecipeAddFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name });
    setName("");
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
