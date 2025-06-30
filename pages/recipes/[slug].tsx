import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { generateSlug } from "@/lib/slug";
import DetailsRecipe from "@/components/DetailsRecipe";

type Recipe = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  cookTimeMinutes: number;
  difficulty: string;
};

type Props = {
  recipe: Recipe;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  const paths = data.recipes.map((recipe: Recipe) => ({
    params: { slug: generateSlug(recipe.name) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;

  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  const recipe: Recipe | undefined = data.recipes.find((r: Recipe) => generateSlug(r.name) === slug);

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: { recipe },
    revalidate: 60,
  };
};

export default function RecipeDetailPage({ recipe }: Props) {
  return <DetailsRecipe key={recipe.id} recipe={recipe} />;
}
