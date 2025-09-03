"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "3D-Product Viewer",
    description: "A 3D product viewer built with Three.js and Next.js.",
    link: "https://github.com/ProjectAnkit/3D-Viewer-Frontend",
  },
  {
    title: "Personal Finance Tracker",
    description: "A personal finance tracker built with React Native & Spring Boot.",
    link: "https://github.com/ProjectAnkit/Personal-Finance-Tracker",
  },
  {
    title: "E-commerce Application",
    description: "An e-commerce application built with Flutter & Firebase.",
    link: "https://github.com/ProjectAnkit/ShopME-a-ecommerce-app",
  },
];

export default function ProjectSection() {
  return (
    <div className="bg-black flex flex-col items-start justify-start text-white px-6 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl font-bold mb-12"
        >
          Other Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, type: "spring" }}
            >
              {/* GitHub Icon */}
              <motion.div
                className="text-yellow-400 mb-4"
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaGithub size={40} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Visit Link */}
              <span className="mt-auto text-yellow-400 font-semibold hover:underline">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
