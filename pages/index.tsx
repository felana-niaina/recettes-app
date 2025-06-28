import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ChefHat } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-background text-foreground transition-colors relative overflow-hidden">
      
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

        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to <span className="text-primary">Recipe Galaxy</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-muted-foreground mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Discover unique and tasty recipes from around the globe.  
          Let your taste buds travel through flavors.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/recipes">
            <Button className="text-lg px-6 py-4 transition-all hover:scale-105 hover:shadow-lg">
              Browse Recipes
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
