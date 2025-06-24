// "use client";

// import { Mail, Github, Linkedin, Twitter } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// export function About() {
//   return (
//     <section id="about" className="py-16">
//       <div className="grid md:grid-cols-[2fr _1fr] gap-8 items-start">
//         <motion.div
//           initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
//           whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h2 className="text-2xl font-semibold mb-6">About</h2>
//           <p className="text-muted-foreground mb-4">
//             Hi! I'm Bikash, a 21-year-old developer from Jamshedpur. I love building web products that solve real problems and make life easier. I focus on clean code, great UX, and learning new tech every day.
//           </p>
//           <p className="text-muted-foreground mb-6">
//             My journey includes working on impactful projects and collaborating with amazing teams. I enjoy taking on new challenges and pushing the boundaries of what I can build. Always open to new opportunities and connections!
//           </p>
          
//           <div className="flex flex-wrap gap-2 mb-6">
//             <Badge variant="outline" className="bg-secondary/50">Jamshedpur</Badge>
//             <Badge variant="outline" className="bg-secondary/50">India</Badge>
//           </div>
          
//           <div className="flex gap-3">
//             <a href="mailto:bikash13763@gmail.com" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
//               <Mail className="h-4 w-4" />
//               <span className="sr-only">Email</span>
//             </a>
//             <a href="https://github.com/bikash1376" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
//               <Github className="h-4 w-4" />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a href="https://linkedin.com/in/bikash1376" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
//               <Linkedin className="h-4 w-4" />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//             <a href="https://x.com/bikash1376" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
//               <Twitter className="h-4 w-4" />
//               <span className="sr-only">Twitter</span>
//             </a>
//           </div>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="flex justify-center md:justify-end"
//         >
//           <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-4 border-background shadow-xl">
//             <img 
//               src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" 
//               alt="Profile" 
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }