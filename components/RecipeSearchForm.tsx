import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"; 

type SearchFormProps = {
  onSearch: (query: string) => void;
};

export default function RecipeSearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  useEffect(() => {
    if (query.trim() === "") {
      onSearch("");
    }
  }, [query, onSearch]);

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center max-w-md w-full mx-auto">
      <Input
        type="text"
        placeholder="Search a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />

      <Button
        type="submit"
        size="icon"
        data-testid="search-button"
        className="shadow"
      >
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}
