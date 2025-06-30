import React from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Flame,
  Utensils,
  ChefHat,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import ParticlesBackground from "./ParticlesBackground";

type Recipe = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  cookTimeMinutes: number;
  difficulty: string;
};

const DetailsRecipe = ({ recipe }: { recipe: Recipe }) => {
  return (
    <>
      <Head>
        <title>{recipe.name}</title>
      </Head>

      {/* Particles Background */}
      <ParticlesBackground />

      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Back Button */}
          <Link href="/recipes">
            <Button variant="outline" size="icon" className="shadow-md">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>

          {/* Title recipe*/}
          <motion.h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-2xl font-bold text-primary font-cursive">
            {recipe.name}
            </motion.h1>

          {/* Theme Toggle */}
          <div className="p-1">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 pb-32 relative z-10">
  
        {/* Image */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={1000}
            height={500}
            className="object-cover w-full h-[300px] md:h-[400px]"
            priority
          />
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Badge
            variant="default"
            className="px-3 py-2 flex items-center gap-2 shadow-sm text-sm"
          >
            <Clock className="w-4 h-4" />
            {recipe.cookTimeMinutes} min
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-2 flex items-center gap-2 shadow-sm text-sm"
          >
            <Flame className="w-4 h-4" />
            {recipe.difficulty}
          </Badge>
        </motion.div>

        {/* Ingredients Styled */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-primary">
            <Utensils className="w-6 h-6" />
            Ingredients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recipe.ingredients.map((ingredient, idx) => (
              <div
                key={idx}
                className="bg-background/70 border border-border rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm backdrop-blur-md"
              >
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="text-foreground">{ingredient}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Instructions Styled */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-primary">
            <ChefHat className="w-6 h-6" />
            Instructions
          </h2>
          <div className="space-y-6">
            {recipe.instructions.map((step, idx) => (
              <div
                key={idx}
                className="bg-background/60 border border-border rounded-lg p-4 flex items-start gap-4 shadow-sm backdrop-blur-md"
              >
                <div className="text-primary font-bold text-lg min-w-[32px] h-8 w-8 flex items-center justify-center rounded-full border border-primary">
                  {idx + 1}
                </div>
                <p className="text-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default DetailsRecipe;
