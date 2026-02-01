"use client";

import DiscoverButton from "@/components/discover-button";
import { useI18n } from "@/lib/i18n";
import styles from "./style/Header.module.css";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

function Header() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(true);

  // Track scroll position
  const { scrollY } = useScroll();

  // Transform scroll position to padding value (16px when scrollY = 0, 0px when scrollY > 50)
  const padding = useTransform(scrollY, [0, 50], [16, 0]);

  // Transform scroll position to border-radius value (8px when scrollY = 0, 0px when scrollY > 50)
  const borderRadius = useTransform(scrollY, [0, 50], [8, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="h-screen overflow-hidden bg-white"
      style={mounted ? { padding } : { padding: 16 }}
    >
      <motion.div
        style={mounted ? { borderRadius } : { borderRadius: 8 }}
        className="size-full relative overflow-hidden"
      >
        {mounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning
            className={styles.bgImage}
          >
            <source src="/video/video-header.mp4" type="video/mp4" />
          </video>
        )}

        {/* Content Container */}
        <div className={styles.container}>
          {/* Top Section - REIMAGINED Title */}
          <div className={styles.topSection}>
            <motion.h1
              className={styles.mainTitle}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.header.mainTitle}
            </motion.h1>
            <div className={styles.middleSection}>
              <motion.div
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.header.subtitle1}
              </motion.div>
              <br />
              <motion.div
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t.header.subtitle2}
              </motion.div>
            </div>
          </div>

          {/* Bottom Section - Description and CTA */}
          <div className={styles.bottomSection}>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.header.description}
            </motion.p>

            <motion.div
              className={styles.ctaContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <DiscoverButton />
              {/* <button className={styles.ctaButton}>
              Tìm Hiểu Thêm
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4L13 10L7 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
