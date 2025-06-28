import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { motion } from "framer-motion";

const page404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground">
      {/* Ghost icon animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Ghost className="w-20 h-20 text-primary mb-6" />
      </motion.div>

      <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>

      <p className="text-muted-foreground mb-6 max-w-md">
        The page you're looking for doesn't exist. Let’s get
        you back to safety.
      </p>

      <Link href="/">
        <Button className="text-base px-6 py-3 hover:scale-105 transition-transform">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default page404;
