import { Header } from '@/components/sections/header';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}