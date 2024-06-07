import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { FloatingNav } from "./components/ui/floating-navbar";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ProjectsSection } from "./components/ProjectsSection";

export const metadata = {
  title: "Francis Pagulayan",
  description: "Professional Portfolio of Francis Pagulayan",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <FloatingNav navItems={[
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
      ]} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <BackgroundBeams />
      </div>
      <Footer />
    </main>
  );
}