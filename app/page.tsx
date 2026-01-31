"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* MainContent luôn được render để background sẵn sàng */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <Header />
            {/* <MainContent /> */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Loading overlay */}
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
    </>
  );
}
