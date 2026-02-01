"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from "./style/About.module.css";
import { useI18n } from "@/lib/i18n";

function About() {
    const { t } = useI18n();
    const scrollSectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollSectionRef,
        offset: ["start start", "end start"]
    });

    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.33) {
                setCurrentSection(1);
            } else if (latest < 0.66) {
                setCurrentSection(2);
            } else {
                setCurrentSection(3);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const processBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const sections = [
        {
            id: 1,
            title: t.about.section1.title,
            content: (
                <p className={styles.description}>
                    {t.about.section1.content}
                </p>
            ),
            number: "01"
        },
        {
            id: 2,
            title: t.about.section2.title,
            content: (
                <>
                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t.about.section2.tagline}
                    </motion.p>
                    <p className={styles.description}>
                        {t.about.section2.content1}
                        <br />
                        {t.about.section2.content1b}
                    </p>
                    <p className={styles.description}>
                        {t.about.section2.content2}
                    </p>
                </>
            ),
            number: "02"
        },
        {
            id: 3,
            title: t.about.section3.title,
            title2: t.about.section3.title2,
            content: (
                <div className={styles.cardsContainer}>
                    <div className={styles.cardsColumn}>
                        <motion.div className={styles.card} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>01</span>
                                <div className={styles.cardIcon}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 8H6C4.89543 8 4 8.89543 4 10V22C4 23.1046 4.89543 24 6 24H26C27.1046 24 28 23.1046 28 22V10C28 8.89543 27.1046 8 26 8Z" stroke="#346AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 14H28" stroke="#346AFF" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M20 18H24" stroke="#346AFF" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className={styles.cardText}>{t.about.section3.card1}</p>
                        </motion.div>
                        <motion.div className={styles.card} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>02</span>
                                <div className={styles.cardIcon}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 24L12 16L18 20L26 8" stroke="#346AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="6" cy="24" r="2" fill="#346AFF" /><circle cx="12" cy="16" r="2" fill="#346AFF" /><circle cx="18" cy="20" r="2" fill="#346AFF" /><circle cx="26" cy="8" r="2" fill="#346AFF" />
                                    </svg>
                                </div>
                            </div>
                            <p className={styles.cardText}>{t.about.section3.card2}</p>
                        </motion.div>
                    </div>
                    <div className={styles.cardsColumn} style={{ transform: 'translateY(75px)' }}>
                        <motion.div className={styles.card} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>03</span>
                                <div className={styles.cardIcon}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="3" stroke="#346AFF" strokeWidth="2" /><circle cx="24" cy="8" r="3" stroke="#346AFF" strokeWidth="2" /><circle cx="8" cy="24" r="3" stroke="#346AFF" strokeWidth="2" /><circle cx="24" cy="24" r="3" stroke="#346AFF" strokeWidth="2" />
                                        <path d="M11 8L21 8M11 24L21 24M8 11L8 21M24 11L24 21" stroke="#346AFF" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className={styles.cardText}>{t.about.section3.card3}</p>
                        </motion.div>
                        <motion.div className={styles.card} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>04</span>
                                <div className={styles.cardIcon}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="6" y="6" width="20" height="4" rx="1" stroke="#346AFF" strokeWidth="2" /><rect x="6" y="14" width="20" height="4" rx="1" stroke="#346AFF" strokeWidth="2" /><rect x="6" y="22" width="20" height="4" rx="1" stroke="#346AFF" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                            <p className={styles.cardText}>{t.about.section3.card4}</p>
                        </motion.div>
                    </div>
                </div>
            ),
            number: "03"
        }
    ];

    return (
        <section ref={scrollSectionRef} className={styles.scrollSection}>
            <div className={styles.stickyContainer}>
                <div className={styles.backgroundImage}>
                    <Image src="/bg-header.webp" alt="About Background" fill className={styles.bgImage} priority unoptimized />
                </div>

                <div className={styles.topSection}>
                    <div className={styles.topContent}>
                        <div className={styles.tagContainer}>
                            <div className={styles.tagDot}></div>
                            <span className={styles.tagText}>{t.about.tag}</span>
                        </div>
                    </div>
                    <div className={styles.processBarContainer}>
                        <motion.div className={styles.processBar} style={{ width: processBarWidth }} />
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            className={styles.contentSection}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: currentSection === section.id ? 1 : 0,
                                y: currentSection === section.id ? 0 : 20
                            }}
                            transition={{ duration: 0.5 }}
                            style={{ display: currentSection === section.id ? 'block' : 'none' }}
                        >
                            <div className={styles.bottomSection}>
                                <div className={styles.contentContainer}>
                                    <div className={styles.leftColumn}>
                                        <motion.h1 className={styles.title} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                            {section.title}
                                        </motion.h1>
                                        {section.title2 && (
                                            <motion.h1 className={styles.title} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                                                {section.title2}
                                            </motion.h1>
                                        )}
                                    </div>
                                    <div className={styles.rightColumn}>
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.numberCounterWrapper}>
                    <div className={styles.numberCounter}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentSection}
                                className={styles.numberCurrent}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {sections[currentSection - 1].number}
                            </motion.span>
                        </AnimatePresence>
                        <span className={styles.numberSeparator}>/</span>
                        <span className={styles.numberTotal}>03</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
