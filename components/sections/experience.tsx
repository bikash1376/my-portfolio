"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "buildspace",
      position: "Software Developer",
      period: "Jun 2024 - Sep 2024",
      description: "Built EatSmart, an AI-powered nutrition tracker to analyze dietary patterns. Used OpenCV, Python, React.js, and FastAPI.",
      skills: ["OpenCV", "Python", "React.js", "FastAPI"],
      logo: "B",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQH4v0G7qtO5UQ/company-logo_200_200/company-logo_200_200/0/1668195915807/buildspaceso_logo?e=1756339200&v=beta&t=CZXZQFWq5Yjg95cmv_f8yVaUuDM8Z8WLbPfVXXHjIoU"
    },
    {
      company: "Suggaa",
      position: "Full Stack Developer Intern",
      period: "Sep 2024 - Nov 2024",
      description: "Developed in-house admin dashboard components, integrated APIs, and built a push notification system using Next.js, TypeScript, and custom libraries.",
      skills: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
      logo: "S",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQH46GNVGBpW1g/company-logo_200_200/company-logo_200_200/0/1630524653077?e=1756339200&v=beta&t=Q9HjO45D0HYS-L-tqwXj77nkwWEnLpOMHzGtF9dvLhs"
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-4"
          >
            <div className="mt-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                <img src={exp.image} alt={exp.company} className="w-10 h-10 object-contain rounded-full" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-medium text-lg">{exp.company}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-sm font-medium mb-2">{exp.position}</p>
              <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}