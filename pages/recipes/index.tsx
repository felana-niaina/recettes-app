import { GetStaticProps } from "next";
import RecipeCard from "@/components/RecipeCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
type Recipe = {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cookTimeMinutes: number;
  slug: string;
};

type Props = {
  recipes: Recipe[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return {
    props: { recipes: data.recipes },
    revalidate: 60,
  };
};

export default function RecipesPage({ recipes }: Props) {
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? recipes.filter((r) => r.difficulty === filter)
    : recipes;

  return (
    <div>
      <div className="p-4">
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px] mb-4">
            <SelectValue placeholder="Filter by difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
