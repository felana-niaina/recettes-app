import React from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Utensils, ChefHat } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

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
      <div className="fixed top-4 left-4 z-50">
        <Link href="/recipes">
          <Button variant="outline" size="icon" className="shadow-lg">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>
      <div className="p-2 fixed top-2 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-md shadow-md">
        <ThemeToggle />
      </div>
      <Head>
        <title>{recipe.name}</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6 pb-20">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-6 p-8 md:p-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {recipe.name}
        </motion.h1>

        {/* Image */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={1000}
            height={500}
            className="rounded-xl object-cover w-full max-h-[500px]"
          />
        </motion.div>

        {/* Info badges */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-6 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Cook Time: {recipe.cookTimeMinutes} min
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            Difficulty: {recipe.difficulty}
          </Badge>
        </motion.div>

        {/* Ingredients */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Utensils className="w-6 h-6 text-primary" />
            Ingredients
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {recipe.ingredients.map((ingredient: any, index: any) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-primary" />
            Instructions
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            {recipe.instructions.map((step: any, index: any) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </motion.div>
      </div>
    </>
  );
};

export default DetailsRecipe;
