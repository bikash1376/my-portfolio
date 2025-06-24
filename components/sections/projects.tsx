"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "WebIDE",
      description: "A web-based IDE that lets you write, run, and share code in your browser. Built using the MERN stack and Docker for secure code execution. Features real-time collaboration, multiple language support, and instant previews.",
      video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
      date: "2024",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/bikash1376/webide"
    },
    {
      title: "Pistash",
      description: "An API client to test APIs, save endpoints, and scrape data. Built using React and localStorage for persistent URL management. Includes scraping functionality for quick data extraction.",
      video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
      date: "2025",
      tags: ["React", "API", "Scraping", "localStorage"],
      liveLink: "#",
      githubLink: "https://github.com/bikash1376/pistash"
    },
    {
      title: "API Benchmark Tool",
      description: "A tool to benchmark API performance, built using Go. Utilizes Go concurrency to run multiple requests in parallel and provides detailed performance metrics.",
      video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
      date: "2025",
      tags: ["Go", "Benchmark", "Concurrency", "API"],
      liveLink: "#",
      githubLink: "https://github.com/kataaksh/api-benchmark-go"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <Button variant="link" className="p-0 h-auto font-medium text-primary hidden sm:block">
         
        <Link href="/projects">View All</Link>
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-8">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="overflow-hidden h-full flex flex-col border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <video 
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-xs font-normal mb-2">
                    {project.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t bg-muted/20 p-4">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* View All button for small screens */}
      <div className="mt-8 sm:hidden flex justify-center">
        <Button variant="link" className="p-0 h-auto font-medium text-primary">
          View All
        </Button>
      </div>
    </section>
  );
}