"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Simulate progress from 0 to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Bắt đầu zoom animation sau một chút delay
          setTimeout(() => {
            setIsZooming(true);
            // Sau khi zoom xong thì gọi onComplete (đợi zoom animation + fade out)
            setTimeout(() => {
              onComplete();
            }, 2000);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Tăng progress mỗi 30ms để đạt 100% trong ~3 giây

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isZooming ? 0 : 1 }}
      transition={{ duration: 0.8, delay: isZooming ? 1.2 : 0 }}
    >
      {/* Background Image - Zoom effect when loading completes */}
      <AnimatePresence>
        {isZooming && (
          <motion.div
            className="absolute inset-0"
            initial={{
              scale: 0.15,
              x: "0%",
              y: "calc(50vh - 50px)",
              opacity: 0.8,
            }}
            animate={{
              scale: 4,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              transformOrigin: "center center",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/image.png"
                alt="Background"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content container - Column layout */}
      <motion.div
        className="flex flex-col items-center gap-6 w-full px-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isZooming ? 0 : 1,
          scale: isZooming ? 0.8 : 1,
        }}
        transition={{ 
          duration: 0.6,
          opacity: { delay: isZooming ? 0 : 0 },
        }}
      >
        {/* Logo and Company Name - Horizontal */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isZooming ? 0 : 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: isZooming ? 0 : 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 L10 30 L20 20 L30 30 L30 10"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>
          <motion.span
            className="text-2xl font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isZooming ? 0 : 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            NewEra Inc.
          </motion.span>
        </motion.div>

        {/* Progress Bar Container - Full Width */}
        <motion.div
          className="relative h-[100px] w-full max-w-4xl overflow-hidden rounded-sm"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: isZooming ? 0 : 1, 
            scaleX: isZooming ? 0 : 1,
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            transformOrigin: "left",
          }}
        >
          {/* Background - dark background for progress bar */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Progress Image - scales horizontally */}
          <motion.div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/image.png"
                alt="Progress"
                fill
                className="object-cover object-left"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Percentage */}
        <motion.div
          className="text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isZooming ? 0 : 1, 
            y: isZooming ? -20 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {progress}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
