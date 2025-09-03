'use client';

import Image from 'next/image';
import { motion as m, Variants } from 'framer-motion';
import { Inter } from 'next/font/google';
import Tilt from 'react-parallax-tilt';
import styles from './LiveProject.module.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function LiveProject() {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const descriptions = [
    {
      title: 'Core Architecture',
      text: 'JeevanRA is built as a full-stack web application to help users monitor and reduce their carbon footprint. The frontend, developed with Next.js, delivers a responsive and interactive interface for logging activities and viewing dashboards. The backend, powered by Spring Boot, handles business logic, user authentication, and exposes REST APIs for seamless communication with the frontend. All data, including user profiles, activities, and emission records, is securely stored in PostgreSQL, ensuring structured, reliable, and scalable data management. This architecture allows for modularity, maintainability, and future expansion of features.',
    },
    {
      title: 'Key Features',
      items: [
        '1. Users can log their daily activities, such as travel, energy usage, or consumption habits, and see the corresponding CO₂ emissions. The app provides visual dashboards and summaries to help users understand their impact over time.',
        '2. JeevanRA encourages engagement by allowing users to join community challenges aimed at reducing carbon footprints. These challenges foster collaboration and motivation among users to adopt eco-friendly practices.',
        '3. As users track activities and participate in challenges, they can earn points and recognition for their sustainable actions. This gamified approach encourages continuous participation and creates a sense of achievement.',
      ],
    },
    {
      title: 'Impact & Vision',
      text: 'JeevanRA’s vision is to empower individuals to take actionable steps toward environmental sustainability. By providing clear insights, encouraging community engagement, and rewarding eco-friendly behaviors, the platform aims to create a positive impact on the environment and promote a conscious, carbon-aware lifestyle.',
    },
  ];

  return (
    <section className="bg-black relative min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <m.h2
          className={`text-xl md:text-3xl font-bold text-white mb-12`}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Live Project
        </m.h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Larger Main Project Card */}
          <m.div className="w-full lg:w-3/5" variants={cardVariants} initial="hidden" animate="visible">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.2} className="w-full h-full">
              <div className={`${styles.card} rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] h-full`}>
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 relative h-[300px] md:h-auto">
                    <Image
                      src="/Project.png"
                      alt="Live Project"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover ${styles.glowImage} transition-transform duration-500 hover:scale-105`}
                      priority
                    />
                  </div>
                  <div className={`md:w-1/2 p-8 flex flex-col justify-between`}>
                    <div>
                      <h3 className="text-3xl font-semibold text-white mb-4">Jeevanra.com</h3>
                      <p className="text-gray-300 text-lg mb-6">
                      Jeevanra is a sustainability-driven web application that helps users track and analyze their daily CO₂ emissions through an interactive dashboard. Built with React for the frontend, Spring Boot for backend APIs, and MongoDB for data storage, it provides real-time insights and personalized suggestions to encourage eco-friendly habits.
                      </p>
                    </div>
                    <a
                      href="https://eco-tracker-jeevanra-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.visitButton} inline-block text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-md`}
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </m.div>

          {/* Auto-Scrolling Descriptions */}
          <div className="w-full lg:w-2/5 h-[550px] relative overflow-hidden">
            <div className={`${styles.blurTop} absolute top-0 left-0 right-0 h-16 z-10`} />
            <div className={`${styles.scroller} flex flex-col gap-8 py-16`}>
              {[...descriptions, ...descriptions].map((desc, index) => (
                <div key={index} className="text-white">
                  <h3 className="text-2xl font-semibold mb-2">{desc.title}</h3>
                  {desc.text ? (
                    <p className="text-gray-200 text-lg max-w-md">{desc.text}</p>
                  ) : (
                    <ul className="space-y-2 text-gray-200 text-lg max-w-md">
                      {desc.items?.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className={`${styles.blurBottom} absolute bottom-0 left-0 right-0 h-16 z-10`} />
          </div>
        </div>
      </div>
    </section>
  );
}