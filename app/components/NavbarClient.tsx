"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect, useRef } from 'react';

type NavGuide = {
  slug: string;
  title: string;
};

type NavbarClientProps = {
  visibleCount: number;
  postCount: number;
  guides: NavGuide[];
};

export default function NavbarClient({
  visibleCount,
  postCount,
  guides,
}: NavbarClientProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const guidesDropdownRef = useRef<HTMLDivElement>(null);

  const hasGuides = guides.length > 0;
  const isGuidesActive = guides.some((guide) => pathname === `/${guide.slug}`);
  const guidesListScrollClasses =
    guides.length > 6 ? "max-h-[15rem] overflow-y-auto overscroll-contain" : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    handleClose();
    setGuidesOpen(false);
    setMobileGuidesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!guidesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        guidesDropdownRef.current &&
        !guidesDropdownRef.current.contains(event.target as Node)
      ) {
        setGuidesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [guidesOpen]);

  const handleOpen = () => {
    setMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuVisible(true));
    });
  };

  const handleClose = () => {
    setMenuVisible(false);
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

  const getSubLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `block px-4 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? "text-primary bg-primary/10"
        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
    }`;
  };

  const handleSectionNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (pathname !== "/") return;
    e.preventDefault();
    handleClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  const guidesTriggerClasses = isGuidesActive
    ? "text-[16px] font-medium transition-all duration-300 px-4 py-2 bg-primary text-white dark:bg-white dark:text-black font-bold rounded-xl shadow-lg flex items-center gap-1.5"
    : "text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1.5";

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
        {hasGuides && (
          <div
            ref={guidesDropdownRef}
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setGuidesOpen((open) => !open)}
              className={guidesTriggerClasses}
              aria-expanded={guidesOpen}
              aria-haspopup="true"
            >
              Guides
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${guidesOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute right-0 top-full pt-2 z-50 transition-all duration-200 ${
                guidesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="min-w-[220px] max-w-[280px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg overflow-hidden">
                <div className={guidesListScrollClasses}>
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/${guide.slug}`}
                      className={getSubLinkClasses(`/${guide.slug}`)}
                      onClick={() => setGuidesOpen(false)}
                    >
                      {guide.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <Link
          href="/#faqs"
          onClick={(e) => handleSectionNav(e, "faqs")}
          className="text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          FAQs
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => handleSectionNav(e, "contact")}
          className="text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          Contact
        </Link>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            onClick={handleClose}
            className={`fixed inset-0 top-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
              menuVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div
            className={`fixed top-20 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-950 border-b border-black/10 dark:border-white/10 shadow-xl px-6 overflow-y-auto transition-all duration-300 ease-in-out ${
              menuVisible ? 'max-h-[80vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
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
              {hasGuides && (
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setMobileGuidesOpen((open) => !open)}
                    className={`${guidesTriggerClasses} w-full justify-between`}
                    aria-expanded={mobileGuidesOpen}
                  >
                    <span>Guides</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileGuidesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileGuidesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className={`flex flex-col gap-1 pl-2 pt-1 ${guidesListScrollClasses}`}>
                      {guides.map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/${guide.slug}`}
                          className={getSubLinkClasses(`/${guide.slug}`)}
                          onClick={handleClose}
                        >
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <Link
                href="/#faqs"
                onClick={(e) => handleSectionNav(e, "faqs")}
                className="text-left text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                FAQs
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleSectionNav(e, "contact")}
                className="text-left text-[16px] font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
