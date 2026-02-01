"use client";

import Image from "next/image";
import React from "react";
import styles from "./style/Header.module.css";
import { useI18n } from "@/lib/i18n";

function Header() {
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/bg-header.webp"
          alt="Header Background"
          fill
          className={styles.bgImage}
          priority
          unoptimized
        />
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        {/* Top Section - REIMAGINED Title */}
        <div className={styles.topSection}>
          <h1 className={styles.mainTitle}>
            {t.header.mainTitle}
          </h1>
          <div className={styles.middleSection}>
            <div className={styles.subtitle}>
              {t.header.subtitle1}
            </div>
            <br />
            <div className={styles.subtitle}>
              {t.header.subtitle2}
            </div>
          </div>
        </div>

        {/* Bottom Section - Description and CTA */}
        <div className={styles.bottomSection}>
          <p className={styles.description}>
            {t.header.description}
          </p>

          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>
              {t.header.cta}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
