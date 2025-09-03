"use client";

import { motion } from "framer-motion";
import { FaReact, FaJava, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiPostgresql } from "react-icons/si";

const skills = [
  { icon: <FaJava size={60} />, name: "Java" },
  { icon: <SiSpringboot size={60} />, name: "Spring Boot" },
  { icon: <SiJavascript size={60} />, name: "JavaScript" },
  { icon: <FaReact size={60} />, name: "React / React Native" },
  { icon: <FaNodeJs size={60} />, name: "Node.js" },
  { icon: <SiPostgresql size={60} />, name: "PostgreSQL" },
  { icon: <FaGitAlt size={60} />, name: "Git" },
];

export default function SkillSection() {
  return (
    <section className="bg-black relative min-h-screen py-16">
      <div className="container mx-auto px-4 relative z-10">
      {/* Heading at start */}
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-4xl font-bold mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-yellow-500/50"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: i * 0.2,
            }}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
              transition: { duration: 0.6 },
            }}
          >
            <motion.div
              className="text-yellow-400 mb-2"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      </div>    
    </section>
  );
}
