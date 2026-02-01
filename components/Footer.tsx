"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style/Footer.module.css";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function Footer() {
  const { t } = useI18n();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          {mounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/video-footer.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 sm:p-6">
        <div className="container mx-auto max-w-7xl flex flex-col gap-4 sm:gap-6">
          {/* Newsletter Signup Section */}
          <motion.div
            className={styles.cardBlue}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <motion.h3
                  className={styles.titleCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {t.footer.newsletterTitle}
                </motion.h3>
                <motion.p
                  className={styles.textCardBlue}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t.footer.newsletterDesc}
                </motion.p>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-between lg:items-end">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <motion.input
                    type="email"
                    placeholder={t.footer.emailPlaceholder}
                    className="px-4 sm:px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:min-w-[280px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  <motion.button
                    className="px-6 sm:px-8 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors whitespace-nowrap w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {t.footer.subscribe}
                  </motion.button>
                </div>
                <motion.p
                  className={`${styles.socialLinksText} text-left lg:text-right`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {t.footer.privacyNote}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer Section */}
          <motion.div
            className={styles.cardWhite}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1">
              <motion.div
                className="flex flex-wrap gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.a
                  href="#"
                  className={styles.socialLinks}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Facebook
                </motion.a>
                <motion.a
                  href="#"
                  className={styles.socialLinks}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="#"
                  className={styles.socialLinks}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Twitter
                </motion.a>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Image src="/logo-white.png" alt="NewEra Logo" width={60} height={60} className="sm:w-[100px] sm:h-[100px]" />
                </motion.div>
                <motion.p
                  className={styles.logoTitle}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  NewEra Inc.
                </motion.p>
              </motion.div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className={styles.textCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t.footer.motto1}
                </motion.div>
                <motion.div
                  className={styles.textCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {t.footer.motto2}
                </motion.div>
              </motion.div>
              <motion.div
                className={`${styles.copyright} text-left lg:text-right`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t.footer.copyright}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
