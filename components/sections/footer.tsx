"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin} from "lucide-react";
import { cn } from "@/lib/utils";
import { BsTwitterX } from 'react-icons/bs';

export function Footer() {
  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    const date = new Date();
    setCurrentDate(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-primary text-primary-foreground overflow-hidden"
    >
      <div className={cn(
        "relative h-[300px] flex items-center",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r",
        "before:from-primary/90 before:via-primary/80 before:to-primary/90",
      )}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm opacity-70">Last updated: {currentDate}</p>
            </div>
            
            <div className="flex gap-4 justify-center items-center">
              <a 
                href="https://github.com/bikash1376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/bikash1376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/bikash1376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
               
                <BsTwitterX/>

                
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-16 rounded-lg text-center md:text-left">
            <h2 className="text-8xl md:text-9xl font-bold tracking-tighter opacity-90">BKSH.</h2>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}