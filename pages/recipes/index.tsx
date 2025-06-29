import { GetStaticProps } from "next";
import RecipeCard from "@/components/RecipeCard";
import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <Head>
        <title>Recipes list</title>
      </Head>
      <div className="p-2 fixed top-2 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-md shadow-md">
        <ThemeToggle />
      </div>

      <div className="p-2 fixed top-2 left-4 z-50 bg-background/80 backdrop-blur-sm rounded-md shadow-md">
        <Link href="/">
          <Button variant="outline" size="icon" className="shadow-lg">
            <Home className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="p-2 fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-md shadow-md">
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-20">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
