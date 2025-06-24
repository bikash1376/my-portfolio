"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "py-5"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="block md:hidden text-2xl font-bold tracking-wider opacity-90 ml-2">
              BKSH.
            </span>
    

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-start justify-center min-h-[70vh] w-full px-4 max-w-3xl mx-auto"
      >
        {/* Profile image */}
        <img
          src="/pfp1.webp"
          alt="Profile"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover mb-8 mt-8 shadow-lg"
        />
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hi, I'm Bikash</h1>
        {/* Subtitle */}
        <div className="text-base sm:text-lg text-muted-foreground mb-6">
          21, M | Jamshedpur, India
        </div>
        {/* Description */}
        <p className="text-lg sm:text-xl max-w-3xl text-foreground">
          I love building web products, learning new tech, and collaborating
          with awesome people. Always up for a challenge!
        </p>
      </motion.section>
    </>
  );
}
