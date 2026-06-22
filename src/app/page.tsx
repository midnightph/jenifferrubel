import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Courses from "@/components/Courses";
import NewCourse from "@/components/NewCourse";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialLinks />
      <Courses />
      <NewCourse />
      <About />
      <Testimonials />
      <Schedule />
      <Footer />
    </main>
  );
}
