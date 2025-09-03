'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden py-16">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Top Half: Profile Image */}
        <div className="h-1/2 bg-black flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/Profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
              priority
            />
          </div>
        </div>
        
        {/* Bottom Half: Name and Title */}
        <div className="h-1/2 bg-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Ankit Thakur
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-700">
              Software Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen">
        {/* Diagonal White Shape Container */}
        <div className={styles.diagonalShape}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-black z-10 max-w-lg">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Ankit Thakur
              </h1>
              <p className="text-xl md:text-2xl mt-4">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Side: Profile Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/Profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}