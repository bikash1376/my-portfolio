"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github} from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    title: "WebIDE",
    description: "A web-based IDE that lets you write, run, and share code in your browser. Built using the MERN stack and Docker.",
    // video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
    image: "/images/webide.png", // <-- Add image path
    date: "2024",
    tags: ["MERN", "Docker", "Web IDE", "Collaboration"],
    liveLink: "#",
    githubLink: "https://github.com/bikash1376/webide"
  },
  {
    title: "Pistash",
    description: "An API client to test APIs, save endpoints, and scrape data using React and localStorage.",
    // video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
    image: "/images/pistash.png",
    date: "2025",
    tags: ["React", "API", "Scraping", "localStorage"],
    liveLink: "https://pistash.vercel.app",
    githubLink: "https://github.com/bikash1376/pistash"
  },
  {
    title: "API Benchmark Tool",
    description: "A Go-based API performance benchmarking tool using goroutines.",
    // video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
    image: "/images/apibenchmark.png",
    date: "2025",
    tags: ["Go", "Benchmark", "Concurrency", "API"],
    liveLink: "#",
    githubLink: "https://github.com/kataaksh/api-benchmark-go"
  },
  {
    title: "Putfolio",
    description: "A digital portfolio to showcase work to the world",
    // video: "https://youtu.be/7EKgIC5I_48?si=3iiUokEdAmOsaDjs",
    image: "/images/putfolio.png",
    date: "2025",
    tags: ["React", "Tailwind", "Nocta UI", "Supabase"],
    liveLink: "https://putfolio.vercel.app/",
    githubLink: "https://github.com/bikash1376/putfolio"
  },
  {
    title: "Eminem Fanpage - Challenge",
    description: "A fanpage for Eminem built with React and Tailwind.",
    // video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
    image: "/images/eminemfanpage.png",
    date: "2024",
    tags: ["React", "Tailwind", "UI", "Design System"],
    liveLink: "https://eminem-fanpage.vercel.app/",
    githubLink: "https://github.com/bikash1376/eminem-fanpage"
  },
  {
    title: "TakeUForward - Redesign",
    description: "A redesign of the TakeUForward website using React Js and Tailwind CSS.",
    // video: "https://www.youtube.com/watch?v=3RWA4IzuVvA",
    image: "/images/takeuforward.png",
    date: "2023",
    tags: ["React", "Tailwind", "CSS", "Design System"],
    liveLink: "https://takeyouforward-blush.vercel.app/",
    githubLink: "https://github.com/bikash1376/takeyouforward"
  },
    {
      title: "Dropdawn",
      description: "Dropdawn is ai powered command palette for the web with some extra tools. Built with Next.js, Gemini AI, and external APIs",
      
      video: "/images/dropdawn.mp4",
      image: "/images/dropdawn.png",
      date: "2025",
      tags: ["Nextjs", "Gemini AI", "External APIs", "AI"],
      liveLink: "https://dropdawn.bksh.site",
      githubLink: "https://github.com/bikash1376/dropdawn"
    },
];

export default function AllProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <section className="py-16">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <Button variant="link" className="p-0 h-auto font-medium text-primary hidden sm:block">
         
        <Link href="/">Home</Link>
        </Button>
      </div>
      <p className="text-muted-foreground mb-10">Explore all my projects, from quick hacks to full-stack builds.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="overflow-hidden h-full flex flex-col border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden flex items-center justify-center bg-muted">
                {project.video ? (
                  project.video.includes("youtube.com") || project.video.includes("youtu.be") ? (
                    <iframe
                      src={project.video.replace("watch?v=", "embed/") + (project.video.includes("autoplay=1") ? "" : "?autoplay=1")}
                      title={project.title}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <CardHeader>
                <Badge variant="outline" className="text-xs font-normal mb-2">
                  {project.date}
                </Badge>
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
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
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
      <div className="mt-8 sm:hidden flex justify-center">
        <Button variant="link" className="p-0 h-auto font-medium text-primary">
        <Link href="/">Home</Link>
        </Button>
      </div>
    </section>
    </div>
  );
}
