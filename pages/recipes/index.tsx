import { GetStaticProps } from "next";
import RecipeCard from "@/components/RecipeCard";
import ThemeToggle from "@/components/ThemeToggle";
import RecipeSearchForm from "@/components/RecipeSearchForm";

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
  const [query, setQuery] = useState("");

  const filtered = recipes.filter((r) => {
    const matchesFilter = filter ? r.difficulty === filter : true;
    const matchesQuery = r.name.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div>
      <Head>
        <title>Recipes list</title>
      </Head>
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 bg-background/90 backdrop-blur-sm p-2 rounded-xl shadow-md border border-border max-w-4xl mx-auto">
          {/* Home Button */}
          <Link href="/">
            <Button variant="outline" size="icon" className="shadow">
              <Home className="w-5 h-5" />
            </Button>
          </Link>

          {/* Filter Select */}
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Form */}
          <RecipeSearchForm onSearch={(value) => setQuery(value)} />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-25">
        {filtered.length > 0 ? (
          filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground text-lg mt-10">
            No recipes found.
          </div>
        )}
      </div>
    </div>
  );
}
