"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML", "CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      name: "Blockchain",
      skills: ["Solidity", "Ethers.js", "Web3.js", "Hardhat"]
    },
    {
      name: "Tools",
      skills: ["Git", "Docker", "Figma", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-medium text-muted-foreground">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  className="bg-accent hover:bg-accent/80 text-accent-foreground transition-colors px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}