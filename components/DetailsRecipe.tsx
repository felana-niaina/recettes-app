import React from "react";
import Image from "next/image";
import Head from "next/head";
type Recipe = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string;
  cookTimeMinutes: number;
  difficulty: string;
};

const DetailsRecipe = ({ recipe }: { recipe: Recipe | any }) => {
  return (
    <>
      <Head>
        <title>{recipe.name}</title>
      </Head>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={800}
          height={400}
          className="rounded"
        />
        <p className="mt-2">
          <strong>Temps de cuisson :</strong> {recipe.cookTimeMinutes} min
        </p>
        <p>
          <strong>Difficulté :</strong> {recipe.difficulty}
        </p>
        <h2 className="text-xl font-semibold mt-4">Ingrédients</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient: any, index: any) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-4">Instructions</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step: any, index: any) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default DetailsRecipe;
