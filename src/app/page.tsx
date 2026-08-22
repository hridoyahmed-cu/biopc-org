import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { About } from '@/components/sections/about';
import { Academy } from '@/components/sections/academy';
import { Research } from '@/components/sections/research';
import { Services } from '@/components/sections/services';
import { Olympiad } from '@/components/sections/olympiad';
import { Milestones } from '@/components/sections/milestones';
import { Founder } from '@/components/sections/founder';
import { Team } from '@/components/sections/team';
import { Contact } from '@/components/sections/contact';
import { JsonLd } from '@/components/site/json-ld';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Academy />
        <Research />
        <Services />
        <Olympiad />
        <Milestones />
        <Founder />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
