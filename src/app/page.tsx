import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import NewCourse from "@/components/NewCourse";
import About from "@/components/About";

import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <NewCourse />
      <About />
      <Schedule />
      <Footer />
    </main>
  );
}
