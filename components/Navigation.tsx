"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale, t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    const newLang = locale === "vi" ? "en" : "vi";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`?${params.toString()}`);
  };

  const navItems = [t.nav.about, t.nav.ecosystem, t.nav.team, t.nav.contact];

  return (
    <motion.nav
      className="container max-w-7xl w-full fixed top-0 left-0 right-0 z-40 mx-auto p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/logo-blue.png"
              alt="NewEra Logo"
              width={32}
              height={32}
              className="sm:w-10 sm:h-10"
            />
            <span className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 dark:text-blue-300">
              NewEra Inc.
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 bg-[#8B9AD9] dark:bg-[#2D3A6E] rounded-2xl px-2 py-2 h-fit">
            {navItems.slice(0, 3).map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-white hover:opacity-80 transition-opacity px-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            {/* Contact button */}
            <motion.a
              href="#lien-he"
              className="rounded-lg bg-[#2D48CC] px-4 py-2 text-sm font-medium text-white hover:bg-[#2539B3] transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {navItems[3]}
            </motion.a>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLang}
              className="rounded-lg bg-white/20 px-2.5 py-2 text-white hover:bg-white/30 transition-colors text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              aria-label="Toggle language"
            >
              {locale === "vi" ? "🇻🇳" : "🇬🇧"}
            </motion.button>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg bg-white/20 px-2.5 py-2 text-white hover:bg-white/30 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button + Controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg bg-[#8B9AD9] dark:bg-[#2D3A6E] text-white hover:opacity-80 transition-colors h-fit text-sm"
              aria-label="Toggle language"
            >
              {locale === "vi" ? "🇻🇳" : "🇬🇧"}
            </button>

            {/* Theme Toggle Mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-[#8B9AD9] dark:bg-[#2D3A6E] text-white hover:opacity-80 transition-colors h-fit"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}

            <button
              className="p-2 rounded-lg bg-[#8B9AD9] dark:bg-[#2D3A6E] text-white hover:bg-[#7A8BC8] transition-colors h-fit"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-[#8B9AD9] dark:bg-[#2D3A6E] rounded-2xl p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3">
                {navItems.slice(0, 3).map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-medium text-white hover:opacity-80 transition-opacity py-2 px-3 rounded-lg hover:bg-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  href="#lien-he"
                  className="rounded-lg bg-[#2D48CC] px-4 py-2 text-sm font-medium text-white hover:bg-[#2539B3] transition-colors text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[3]}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
