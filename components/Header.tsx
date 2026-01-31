"use client";

import Image from "next/image";
import React from "react";
import styles from "./style/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/bg-header.png"
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
            REIMAGINED
          </h1>
          <div className={styles.middleSection}>
            <div className={styles.subtitle}>
              Kiến tạo, phát triển,
            </div>
            <br />
            <div className={styles.subtitle}>
              thấu hiểu, cộng hưởng.
            </div>
          </div>
        </div>

        {/* Middle Section - Subtitle */}


        {/* Bottom Section - Description and CTA */}
        <div className={styles.bottomSection}>
          {/* Description Text */}
          <p className={styles.description}>
            Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán,
            trí tuệ nhân tạo, Internet vạn vật và dữ liệu.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
