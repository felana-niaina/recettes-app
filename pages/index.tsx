import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChefHat,
  UtensilsCrossed,
  Soup,
  EggFried,
  Sandwich,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTheme } from 'next-themes'

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigate = async () => {
    setLoading(true);
    await router.push("/recipes");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-foreground transition-colors relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/kitchen.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="opacity-40 blur-[2px]"
          priority
        />
      </div>
      {/* Animated Particle Background */}
      <ParticlesBackground />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center max-w-xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated ChefHat */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <ChefHat className="mx-auto w-20 h-20 text-primary mb-6" />
        </motion.div>

        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to <span className="text-primary">Recipe Galaxy</span>
        </motion.h1>

        <motion.p
          className="text-lg text-foreground mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Discover unique and tasty recipes from around the globe. Let your
          taste buds travel through flavors.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mb-10 text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <UtensilsCrossed className="w-8 h-8" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Soup className="w-8 h-8" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <EggFried className="w-8 h-8" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sandwich className="w-8 h-8" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="text-lg px-6 py-4 transition-all hover:scale-105 hover:shadow-lg"
            onClick={handleNavigate}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              "Browse Recipes"
            )}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
