'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollUtils';
import { Menu } from 'lucide-react';

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsDrawerOpen(false);
  };

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
            className="text-xl font-bold text-white"
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
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
                        activeSection === item.section ? 'w-full' : ''
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-3/5 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={toggleDrawer}
            aria-label="Close menu"
          >
            ✕
          </button>
          
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <li key={item.section}>
                <button
                  onClick={() => handleNavClick(item.section)}
                  className={`text-xl font-medium text-white hover:text-gray-300 transition-colors ${
                    activeSection === item.section ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
