import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveProject from '@/components/LiveSection';
import ProjectSection from '@/components/Projects';
import SkillSection from '@/components/Skills';
import WorkExperience from '@/components/Work';
import ConnectSection from '@/components/Connect';
export default function Home() {
  return (
    <main className="pt-16">
      <Header />
      <Hero />
      <section id="about" className="bg-black flex flex-col items-center justify-center text-white px-6 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-300">
          I’m a passionate Full-Stack Software Engineer with 7 months of practical experience developing dynamic and user-friendly applications using JavaScript frameworks. My expertise spans both frontend (React, React Native) and backend (Spring Boot, Node.js) development, along with experience in working with databases (MongoDB, SQL) and REST APIs.
          <br />
          <br />
          I enjoy solving problems through clean, efficient code and creating applications that deliver value to users. Always eager to learn new technologies, I stay up-to-date with modern tools and best practices to improve my craft.
          </p>
        </div>
      </section>
      <section id="live">
        <LiveProject />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <ConnectSection />
      </section>
      <footer className="bg-black py-4 text-center text-white">
        &copy; 2025 Ankit Thakur. All rights reserved.
      </footer>
    </main>
  );
}