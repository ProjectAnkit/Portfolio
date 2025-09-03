"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

const contacts = [
  {
    icon: <FaEnvelope size={40} />,
    label: "Email",
    link: "mailto:xankitxthakurx@gmail.com",
    color: "text-red-400",
  },
  {
    icon: <FaLinkedin size={40} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ankit-thakur-069a92214/",
    color: "text-blue-500",
  },
  {
    icon: <SiX size={40} />,
    label: "X",
    link: "https://x.com/oxoankit",
    color: "text-cyan-400",
  },
];

export default function ConnectSection() {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-white px-6 min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-4xl font-bold mb-12"
      >
        Connect With Me
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-12">
        {contacts.map((contact, i) => (
          <motion.a
            key={i}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, type: "spring" }}
          >
            {/* Icon with hover lift */}
            <motion.div
              className={`${contact.color} mb-4`}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {contact.icon}
            </motion.div>

            {/* Label */}
            <p className="text-lg font-semibold group-hover:text-yellow-400 transition">
              {contact.label}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Subtle floating text */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="mt-12 text-gray-400 text-sm italic"
      >
        I’d love to hear from you! 🚀
      </motion.p>
    </div>
  );
}
