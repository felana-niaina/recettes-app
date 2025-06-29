import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchFormProps = {
  onSearch: (query: string) => void;
};

export default function RecipeSearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center max-w-md w-full mx-auto">
      <Input
        type="text"
        placeholder="Search a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <Button type="submit" data-testid="search-button">
        Search
      </Button>
    </form>
  );
}
