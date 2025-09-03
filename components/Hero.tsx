'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Diagonal White Shape */}
      <div className={styles.diagonalShape}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Left Side: Bold Name */}
          <div className="text-white z-10 max-w-lg">
            <h1 className={`text-5xl text-black md:text-7xl font-bold tracking-tight`}>
              Ankit Thakur
            </h1>
            <p className="text-xl text-black md:text-2xl mt-4">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
      {/* Right Side: Centered Profile Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex justify-center items-center z-0">
        <Image
          src="/Profile.jpg" // Replace with your profile image path
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-white shadow-lg"
          priority
        />
      </div>
    </section>
  );
}