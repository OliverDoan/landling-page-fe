"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style/Footer.module.css";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden min-h-screen flex items-end justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/bg-footer.png"
            alt="Footer Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>


      {/* Footer Content */}
      <div className="relative z-10 sm:p-6">
        <div className="container mx-auto max-w-7xl flex flex-col gap-4 sm:gap-6">
          {/* Newsletter Signup Section */}
          <div className={styles.cardBlue}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Left Side - Text Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className={styles.titleCard}>
                  Cập nhật xu hướng công nghệ & bán lẻ cùng NewEra Inc.
                </h3>
                <p className={styles.textCardBlue}>
                  Nhận những chia sẻ ngắn gọn từ đội ngũ NewEra Inc. về công
                  nghệ, giải pháp bán lẻ và cách doanh nghiệp ứng dụng hiệu quả.
                </p>
              </div>

              {/* Right Side - Email Input */}
              <div className="flex-1 flex flex-col gap-2 justify-between lg:items-end">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="px-4 sm:px-6 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:min-w-[280px]"
                  />
                  <button className="px-6 sm:px-8 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors whitespace-nowrap w-full sm:w-auto">
                    Đăng Ký
                  </button>
                </div>
                <p className={`${styles.socialLinksText} text-left lg:text-right`}>
                  NewEra cam kết bảo mật thông tin của bạn. Bạn có thể huỷ đăng
                  ký bất cứ lúc nào.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section - Container với background và blur */}
          <motion.div
            className={styles.cardWhite}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Column - Social Links và Logo */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1">
              {/* Social Links - Top */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#" className={styles.socialLinks}>
                  Facebook
                </a>
                <a href="#" className={styles.socialLinks}>
                  LinkedIn
                </a>
                <a href="#" className={styles.socialLinks}>
                  Twitter
                </a>
              </div>
              {/* Logo - Bottom */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Image
                  src="/logo-white.png"
                  alt="NewEra Logo"
                  width={60}
                  height={60}
                  className="sm:w-[100px] sm:h-[100px]"
                />
                <p className={styles.logoTitle}>NewEra Inc.</p>
              </div>
            </div>

            {/* Right Column - Motto và Copyright */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-between flex-1 items-start ">
              {/* Motto - Top */}
              <div className="">
                <div className={styles.textCard}>Kiến tạo, phát triển</div>
                <div className={styles.textCard}>và khám phá giải pháp.</div>
              </div>

              {/* Copyright - Bottom */}
              <div className={`${styles.copyright} text-left lg:text-right`}>
                ©2026 NEWERA INC. BẢO LƯU MỌI QUYỀN.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
