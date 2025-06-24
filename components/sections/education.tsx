"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Netaji Subhas University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2022 - 2025"
    }
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-4"
          >
            <div className="mt-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-medium text-lg">{edu.institution}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1 ml-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}