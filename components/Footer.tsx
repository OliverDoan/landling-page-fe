"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style/Footer.module.css";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/video-footer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 sm:p-6">
        <div className="container mx-auto max-w-7xl flex flex-col gap-4 sm:gap-6">
          {/* Newsletter Signup Section */}
          <div className={styles.cardBlue}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className={styles.titleCard}>{t.footer.newsletterTitle}</h3>
                <p className={styles.textCardBlue}>{t.footer.newsletterDesc}</p>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-between lg:items-end">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder={t.footer.emailPlaceholder}
                    className="px-4 sm:px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:min-w-[280px]"
                  />
                  <button className="px-6 sm:px-8 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors whitespace-nowrap w-full sm:w-auto">
                    {t.footer.subscribe}
                  </button>
                </div>
                <p className={`${styles.socialLinksText} text-left lg:text-right`}>
                  {t.footer.privacyNote}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <motion.div
            className={styles.cardWhite}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#" className={styles.socialLinks}>Facebook</a>
                <a href="#" className={styles.socialLinks}>LinkedIn</a>
                <a href="#" className={styles.socialLinks}>Twitter</a>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <Image src="/logo-white.png" alt="NewEra Logo" width={60} height={60} className="sm:w-[100px] sm:h-[100px]" />
                <p className={styles.logoTitle}>NewEra Inc.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1 items-start">
              <div>
                <div className={styles.textCard}>{t.footer.motto1}</div>
                <div className={styles.textCard}>{t.footer.motto2}</div>
              </div>
              <div className={`${styles.copyright} text-left lg:text-right`}>
                {t.footer.copyright}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
