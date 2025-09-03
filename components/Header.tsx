'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollUtils';

const navItems = [
  { name: 'About', section: 'about' },
  { name: 'Live', section: 'live' },
  { name: 'Work', section: 'work' },
  { name: 'Skills', section: 'skills' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      navItems.forEach(({ section }) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-white text-xl font-medium tracking-tight"
          >
            Portfolio
          </Link>
          
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className={`text-sm font-medium transition-colors relative group ${
                      activeSection === item.section ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                        activeSection === item.section ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
