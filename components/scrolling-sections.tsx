"use client"

import Image from "next/image"
import { useI18n, type Locale } from "@/lib/i18n"
// import styles from "./style/Banner.module.css";

type Section = {
  title: string
  description: string
  image: string
  contentColor: string

}

const sectionsData: Record<Locale, Section[]> = {
  en: [
    {
      title: "Human-Centric Personalization",
      description:
        "NewEra Inc. builds flexible, customizable digital platforms, leveraging AI to personalize experiences based on behavior and context - bringing technology closer to more than 100 million Vietnamese users.",
      image: "/why-01.webp",
      contentColor: "text-blue-600",
    },
    {
      title: "Powerful Technology, Reliable Operations",
      description:
        "Integrating payment, artificial intelligence, IoT, and big data, NewEra Inc. enhances security and optimizes performance, bringing smooth, safe, and reliable experiences to more than 100 million Vietnamese users.",
      image: "/why-02.webp",
      contentColor: "text-white",
    },
    {
      title: "Global Scalability, Seamless Connectivity",
      description:
        "With multi-channel, multilingual, and multi-method support, NewEra Inc. helps partners accelerate growth while optimizing experiences tailored to align with local cultures and needs.",
      image: "/why-03.webp",
      contentColor: "text-white",
    },
    {
      title: "Distinctive Digital Experiences with Real Value",
      description:
        "NewEra Inc. creates unique, trend-aware digital experiences that focus on real impact—ensuring technology not only impresses, but inspires and elevates human potential.",
      image: "/why-04.webp",
      contentColor: "text-white",
    },
  ],
  vi: [
    {
      title: "CÁ NHÂN HOÁ, TẬP TRUNG VÀO CON NGƯỜI",
      description:
        "NewEra Inc. xây dựng các nền tảng số tuỳ biến linh hoạt, ứng dụng AI để cá nhân hoá trải nghiệm theo hành vi và ngữ cảnh, giúp gắn kết công nghệ với hơn 100 triệu người Việt Nam.",
      image: "/why-01.webp",
      contentColor: "text-blue-600",
    },
    {
      title: "CÔNG NGHỆ MẠNH MẼ, VẬN HÀNH TIN CẬY",
      description:
        "Tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu lớn, NewEra Inc. tăng cường bảo mật, tối ưu hiệu năng và khai thác chuyên sâu, mang lại trải nghiệm số mượt mà, an toàn và đáng tin cậy cho người dùng.",
      image: "/why-02.webp",
      contentColor: "text-white",
    },
    {
      title: "MỞ RỘNG TOÀN CẦU, GIÚP KẾT NỐI LIỀN MẠCH",
      description:
        "Với đa kênh, đa ngôn ngữ và hỗ trợ đa phương thức, NewEra Inc. giúp đối tác mở rộng thị trường nhanh chóng, đồng thời tối ưu trải nghiệm theo từng khu vực để phù hợp với văn hoá và nhu cầu địa phương.",
      image: "/why-03.webp",
      contentColor: "text-white",
    },
    {
      title: "TRẢI NGHIỆM CÔNG NGHỆ KHÁC BIỆT, GIÀU GIÁ TRỊ",
      description:
        "NewEra Inc. tạo ra những trải nghiệm số độc đáo nhằm bắt nhịp xu hướng, nhưng luôn hướng đến giá trị thật — để công nghệ không chỉ \"ấn tượng\", mà còn truyền cảm hứng và nâng tầm tiềm năng con người.",
      image: "/why-04.webp",
      contentColor: "text-white",
    },
  ],
}

type HeaderData = {
  tag: string
  tagline: string
}

const headerData: Record<Locale, HeaderData> = {
  en: {
    tag: "Why Choose NewEra Inc.",
    tagline: "Personalize experiences, reliable operations, and sustainable expansion",
  },
  vi: {
    tag: "Lý do lựa chọn NewEra Inc.",
    tagline: "Cá nhân hoá trải nghiệm, vận hành tin cậy và mở rộng bền vững",
  },
}

const ScrollingSections = () => {
  const { locale } = useI18n()
  const sections = sectionsData[locale]
  const header = headerData[locale]

  return (
    <div className="bg-[linear-gradient(180deg,#FDFDFD_0%,#173DC9_100%)]">
      <div className="relative w-full px-4 md:container md:mx-auto md:max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 py-8 md:py-16">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-gray-300/20 rounded-full">
            <div className="flex items-center justify-center px-[12px] text-[#173DC9] py-[8px] gap-[12px] rounded-[8px] bg-[rgba(23,61,201,0.2)] backdrop-blur-[6px] text-[16px] md:text-[20px] font-semibold leading-[22px] md:leading-[26px] tracking-[0.2px]">
              <div className="size-[12px] aspect-square bg-[#173DC9] rounded-[4px]" />
              {header.tag}
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold md:text-center text-gray-900 max-w-4xl px-4">
            {header.tagline}
          </h1>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative w-full md:min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out py-8 md:py-0"
          >
            <div className="flex flex-col md:flex-row w-full gap-6 md:gap-[24px]">
              {/* Image Section */}
              <div className="relative flex flex-1 items-center justify-center order-1 md:order-1">
                <div className="relative w-full h-[300px] md:h-[684px]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover rounded-[12px]"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-1 flex-col justify-center gap-4 md:gap-6 px-0 md:pr-12 border-t border-t-[rgba(253,253,253,0.4)] pt-4 md:pt-0 order-2 md:order-2">
                <h2 className={`text-2xl md:text-[46px] font-bold leading-[32px] md:leading-[56px] tracking-[0.24px] md:tracking-[0.48px] ${section.contentColor}`}>
                  {section.title}
                </h2>
                <p className={`text-base md:text-[24px] font-medium leading-[24px] md:leading-[30px] tracking-[0.16px] md:tracking-[0.24px] ${section.contentColor === 'text-blue-600' ? 'text-blue-600/80' : 'text-white/90'}`}>
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingSections
