"use client";

import { useI18n } from "@/lib/i18n";
import Image from 'next/image';
import styles from "./style/Banner.module.css";

function Banner() {
    const { t } = useI18n();

    return (
        <>
            <section className="w-full pt-6">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                        {/* Left Column */}
                        <div className="flex flex-col justify-between flex-1">
                            {/* Tag "Điểm khác biệt" */}
                            <div className={styles.topSection} >

                                <div className=" flex items-center justify-start w-fit px-[12px] text-[#173DC9] py-[8px] gap-[12px] rounded-[4px] bg-[rgba(23,61,201,0.2)] backdrop-blur-[6px]  text-[20px] font-semibold leading-[26px] tracking-[0.2px]">
                                    <div className="size-[12px] aspect-square bg-[#173DC9] rounded-[4px]" />
                                    {t.banner.tag}</div>

                                    
                            </div>

                            {/* Tagline - Căn với bottom của right column */}
                            <p className="text-2xl md:text-3xl font-bold text-black mt-auto">
                                {t.banner.tagline}
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 flex-1 ">
                            {/* Main Title */}
                            <div className="space-y-0">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                                    <span className="text-[#373D6B]">{t.banner.title}</span>
                                </h2>

                            </div>

                            {/* Supporting Paragraph */}
                            <p className="text-base md:text-lg text-[#6B7095] font-normal leading-relaxed">
                                {t.banner.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-12">
                        <Image
                            src="/bg-header.png"
                            alt="Banner Image"
                            width={1386}
                            height={384}
                            className="w-full max-h-[384px] h-auto object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full justify-center items-center mt-6'>

                    <div className={styles.title} >

                    </div>
                </div>

            </section >


        </>

    );
}

export default Banner;