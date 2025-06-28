import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { generateSlug } from "@/lib/slug";

type Recipe = {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cookTimeMinutes: number;
  slug: string;
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card>
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={400}
        height={250}
        className="rounded-t-lg"
      />
      <CardContent>
        <h3 className="text-xl font-bold">{recipe.name}</h3>
        <p>
          {recipe.difficulty} - {recipe.cookTimeMinutes} mins
        </p>
        <Link href={`/recipes/${generateSlug(recipe.name)}`}>
          <Button className="mt-2">See the recipe</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
