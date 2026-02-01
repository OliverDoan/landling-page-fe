"use client"

import Image from "next/image"
import { useI18n, type Locale } from "@/lib/i18n"

type Section = {
  title: string
  description: string
  image: string
  contentColor: string
  gradient: string
}

const sectionsData: Record<Locale, Section[]> = {
  en: [
    {
      title: "Human-Centric Personalization",
      description:
        "NewEra Inc. builds flexible digital platforms, leveraging AI to personalize experiences based on behavior and context, bringing technology closer to more than 100 million Vietnamese.",
      image: "/why-01.webp",
      contentColor: "text-blue-600",
      gradient: "linear-gradient(180deg, #FDFDFD 0%, #E8F4FF 100%)",
    },
    {
      title: "Powerful Technology, Reliable Operations",
      description:
        "Integrating payment, artificial intelligence, IoT, and big data, NewEra Inc. enhances security and optimizes performance, bringing smooth, safe, and reliable experiences to more than 100 million Vietnamese users.",
      image: "/why-02.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #E8F4FF 0%, #4A7DC9 100%)",
    },
    {
      title: "Global Scalability, Seamless Connectivity",
      description:
        "With multi-channel, multilingual, and multi-method support, NewEra Inc. helps partners accelerate growth while optimizing experiences tailored to align with local cultures and needs.",
      image: "/why-03.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #4A7DC9 0%, #2861B8 100%)",
    },
    {
      title: "Distinctive Digital Experiences with Real Value",
      description:
        "NewEra Inc. creates unique, trend-aware digital experiences that focus on real impact—ensuring technology not only impresses, but inspires and elevates human potential.",
      image: "/why-04.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #2861B8 0%, #173DC9 100%)",
    },
  ],
  vi: [
    {
      title: "CÁ NHÂN HOÁ, TẬP TRUNG VÀO CON NGƯỜI",
      description:
        "NewEra Inc. xây dựng các nền tảng số tuỳ biến linh hoạt, ứng dụng AI để cá nhân hoá trải nghiệm theo hành vi và ngữ cảnh, giúp gắn kết công nghệ với hơn 100 triệu người Việt Nam.",
      image: "/why-01.webp",
      contentColor: "text-blue-600",
      gradient: "linear-gradient(180deg, #FDFDFD 0%, #E8F4FF 100%)",
    },
    {
      title: "CÔNG NGHỆ MẠNH MẼ, VẬN HÀNH TIN CẬY",
      description:
        "Tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu lớn, NewEra Inc. tăng cường bảo mật, tối ưu hiệu năng và khai thác chuyên sâu, mang lại trải nghiệm số mượt mà, an toàn và đáng tin cậy cho người dùng.",
      image: "/why-02.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #E8F4FF 0%, #4A7DC9 100%)",
    },
    {
      title: "MỞ RỘNG TOÀN CẦU, GIÚP KẾT NỐI LIỀN MẠCH",
      description:
        "Với đa kênh, đa ngôn ngữ và hỗ trợ đa phương thức, NewEra Inc. giúp đối tác mở rộng thị trường nhanh chóng, đồng thời tối ưu trải nghiệm theo từng khu vực để phù hợp với văn hoá và nhu cầu địa phương.",
      image: "/why-03.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #4A7DC9 0%, #2861B8 100%)",
    },
    {
      title: "TRẢI NGHIỆM CÔNG NGHỆ KHÁC BIỆT, GIÀU GIÁ TRỊ",
      description:
        "NewEra Inc. tạo ra những trải nghiệm số độc đáo nhằm bắt nhịp xu hướng, nhưng luôn hướng đến giá trị thật — để công nghệ không chỉ \"ấn tượng\", mà còn truyền cảm hứng và nâng tầm tiềm năng con người.",
      image: "/why-04.webp",
      contentColor: "text-white",
      gradient: "linear-gradient(180deg, #2861B8 0%, #173DC9 100%)",
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
    <div className="relative w-full">
      {/* Header Section */}
      <div className="relative w-full py-16 bg-gradient-to-b from-[#FDFDFD] to-[#E8F4FF]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col items-center gap-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300/20 rounded-full">
              <div className="w-2 h-2 bg-[#346AFF] rounded-sm"></div>
              <span className="text-sm text-gray-700 font-medium">{header.tag}</span>
            </div>

            {/* Tagline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 max-w-4xl">
              {header.tagline}
            </h1>
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-full min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out"
          style={{
            background: section.gradient,
          }}
        >
          <div className="flex w-full max-w-6xl gap-12 px-8 py-20">
            {/* Image Section */}
            <div className="relative flex flex-1 items-center justify-center">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-1 flex-col justify-center gap-6 pr-12">
              <h2 className={`text-4xl font-bold leading-tight ${section.contentColor}`}>
                {section.title}
              </h2>
              <p className={`text-lg leading-relaxed ${section.contentColor === 'text-blue-600' ? 'text-blue-600/80' : 'text-white/90'}`}>
                {section.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScrollingSections
