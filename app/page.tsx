import Achievements from '@/components/achievement';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/hero';
import SkillsSection from '@/components/skills';


export default function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <Experience />
      <SkillsSection />
      <Contact />
    </main>
  );
}
