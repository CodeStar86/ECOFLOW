import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sun, Moon } from 'lucide-react';
import { EcoButton } from './ui/eco-button';

type NavigationProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Projects', id: 'projects' },
    { label: 'Impact', id: 'impact' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--ec-n-0)]/95 backdrop-blur-md shadow-[var(--ec-sh-sm)] border-b border-[var(--ec-n-200)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <Leaf className="w-8 h-8 text-[var(--ec-brand)]" />
            <span className="text-xl font-semibold text-[var(--ec-secondary)] font-[var(--ec-f-display)]">
              EcoFlow Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[var(--ec-n-600)] hover:text-[var(--ec-brand)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-100)] transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[var(--ec-n-600)]" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--ec-n-600)]" />
              )}
            </button>
            <EcoButton 
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Get a Quote
            </EcoButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-100)] transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--ec-n-600)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--ec-n-600)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[var(--ec-n-0)] border-t border-[var(--ec-n-200)] shadow-[var(--ec-sh-md)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-[var(--ec-r-md)] text-[var(--ec-n-600)] hover:text-[var(--ec-brand)] hover:bg-[var(--ec-n-50)] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 text-[var(--ec-n-600)] hover:text-[var(--ec-brand)] transition-colors duration-200"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
              <div className="px-3 py-2">
                <EcoButton 
                  variant="primary" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Get a Quote
                </EcoButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}