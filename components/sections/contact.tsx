"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { BsTwitterX } from 'react-icons/bs';

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Want to chat? Just shoot me a dm with a direct question!
        </p>
        
        <div className="space-y-4">
          <div>
            <a 
              href="mailto:bikash13763@gmail.com" 
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              bikash13763@gmail.com
            </a>
          </div>
          <div>
            <a 
              href="https://x.com/bikash1376" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
        
              <BsTwitterX />
              @bikash1376
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}