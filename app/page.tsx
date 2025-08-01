import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
// import Services from "@/components/Services";
// import Skills from "@/components/Skills";
// import Testimonials from "@/components/testimonials";

import { Portfolio } from "@/utils/interface";


export default async function Home() {
  const portfolio = (await import("@/hassan.json")).default;

  // const { about, testimonials, services, skills, projects, social_handles, timeline, email} = portfolio as Portfolio;

  const { about, social_handles, timeline, projects, email } = portfolio as unknown as Portfolio;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Projects projects={projects} />
      <Timeline timeline={timeline} />
      {/* <Skills skills={skills} />
      <Services services={services} />
 
      <Testimonials testimonials={testimonials} /> */}
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  );
}
