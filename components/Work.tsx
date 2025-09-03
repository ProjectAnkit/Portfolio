'use client';

import { motion as m } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Variants } from 'framer-motion';

export default function WorkExperience() {

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };

  return (
    <section className="bg-black relative min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
      <m.h2
          className={`text-xl md:text-3xl font-bold text-white mb-12`}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Work Experience
        </m.h2>
        {/* Glowing ambient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-transparent blur-2xl rounded-3xl -z-10" />

        {/* Work Experience Card */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl rounded-2xl p-10 relative overflow-hidden"
        >
          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 shadow-md">
              <Briefcase className="text-purple-400 w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Jellyfish Technologies
            </h2>
          </div>

          {/* Job Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-purple-300">
              Software Engineer
            </h3>
            <p className="text-zinc-400">Duration · Feb 2025 – August 2025</p>
            <p className="text-lg leading-relaxed text-gray-300">
              Built full-stack applications with{" "}
              <span className="text-white font-medium">Nest Js</span> and{" "}
              <span className="text-white font-medium">PostgreSQL</span> and{" "}
              <span className="text-white font-medium">Next Js</span>.  
              Focused on APIs, databases, and UI/UX. Worked on a SaaS application built for Employee Management System. 
              Gained experience with AWS services. Learned how to set up and configure AWS services.
              Worked on new features and bug fixes. Learned how to use Git for version control. 
            </p>
          </m.div>

          {/* Skill Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['Next Js', 'AWS', 'React Js', 'PostgreSQL', 'TailwindCSS', 'TypeScript','Git'].map((skill, i) => (
              <m.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="px-4 py-2 text-sm rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 hover:bg-purple-600/20 hover:text-white transition"
              >
                {skill}
              </m.span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
