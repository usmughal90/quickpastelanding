"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function NavbarClient({ visibleCount, postCount }: { visibleCount: number, postCount: number }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    handleClose();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleOpen = () => {
    setMenuOpen(true);
    // Small delay so the element is mounted before transition starts
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuVisible(true));
    });
  };

  const handleClose = () => {
    setMenuVisible(false);
    // Wait for transition to finish before unmounting
    setTimeout(() => setMenuOpen(false), 300);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "text-[16px] font-medium transition-all duration-300";
    return isActive
      ? `${baseClasses} px-4 py-2 bg-primary text-white dark:bg-white dark:text-black font-bold rounded-xl shadow-lg`
      : `${baseClasses} text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white`;
  };

  const scrollToSection = (id: string) => {
    handleClose();
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/#${id}`;
      }
    }, 350);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {visibleCount > 0 && (
          <Link href="/updates" className={getLinkClasses("/updates")}>
            Updates
          </Link>
        )}
        {postCount > 0 && (
          <Link href="/blog" className={getLinkClasses("/blog")}>
            Blog
          </Link>
        )}
        <button
          onClick={() => scrollToSection('faqs')}
          className="cursor-pointer text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          FAQs
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="cursor-pointer text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          Contact
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-800 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {!mounted ? (
          <div className="w-5 h-5" />
        ) : theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Hamburger Button — mobile only */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-800 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {/* Animated hamburger → X */}
        <div className="w-5 h-5 relative flex flex-col justify-center items-center">
          <span
            className={`absolute block h-0.5 w-5 bg-current rounded transition-all duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-5 bg-current rounded transition-all duration-300 ease-in-out ${
              menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-5 bg-current rounded transition-all duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu — always mounted when menuOpen, visibility driven by menuVisible */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className={`fixed inset-0 top-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
              menuVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Menu Panel */}
          <div
            className={`fixed top-20 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-950 border-b border-black/10 dark:border-white/10 shadow-xl px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              menuVisible ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
            }`}
          >
            <div className="flex flex-col gap-4">
              {visibleCount > 0 && (
                <Link href="/updates" className={getLinkClasses("/updates")} onClick={handleClose}>
                  Updates
                </Link>
              )}
              {postCount > 0 && (
                <Link href="/blog" className={getLinkClasses("/blog")} onClick={handleClose}>
                  Blog
                </Link>
              )}
              <button
                onClick={() => scrollToSection('faqs')}
                className="text-left cursor-pointer text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left cursor-pointer text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}