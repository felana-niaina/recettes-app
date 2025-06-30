import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { generateSlug } from "@/lib/slug";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="overflow-hidden rounded-xl bg-background border border-border shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu">
        <div className="relative w-full h-[200px]">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-4 space-y-3">
          <h3 className="text-lg font-bold text-primary">{recipe.name}</h3>

          <div className="flex gap-2 flex-wrap text-sm">
            <Badge variant="outline" className="flex items-center gap-1">
              <Flame className="w-4 h-4" />
              {recipe.difficulty}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTimeMinutes} min
            </Badge>
          </div>

          <Link href={`/recipes/${generateSlug(recipe.name)}`}>
            <Button
              className="w-full mt-2 bg-primary text-white dark:bg-[#4e4e4e] dark:hover:bg-[#6b6b6b]"
              variant="default"
              size="sm"
              aria-label={`See recipe for ${recipe.name}`}
            >
              See Recipe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecipeCard;
