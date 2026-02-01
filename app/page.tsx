"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";

const ENABLE_LOADING = process.env.NEXT_PUBLIC_ENABLE_LOADING === "true";

export default function Home() {
  const [isLoading, setIsLoading] = useState(ENABLE_LOADING);

  return (
    <>
      {ENABLE_LOADING ? (
        <>
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
                <About />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
          {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
        </>
      ) : (
        <>
          <Navigation />
          <Header />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}
