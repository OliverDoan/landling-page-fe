"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useSearchParams } from "next/navigation";

export type Locale = "vi" | "en";

const translations = {
  vi: {
    // Navigation
    nav: {
      about: "Về Chúng Tôi",
      ecosystem: "Hệ Sinh Thái",
      team: "Đội Ngũ",
      contact: "Liên Hệ",
    },
    // Header
    header: {
      mainTitle: "REIMAGINED",
      subtitle1: "Kiến tạo, phát triển,",
      subtitle2: "thấu hiểu, cộng hưởng.",
      description:
        "Hệ\u00A0sinh\u00A0thái công\u00A0nghệ toàn\u00A0diện, tích\u00A0hợp thanh\u00A0toán, trí\u00A0tuệ nhân\u00A0tạo, Internet vạn\u00A0vật và dữ\u00A0liệu lớn.",
      cta: "Tìm Hiểu Thêm",
    },
    // About
    about: {
      tag: "Về NewEra Inc.",
      section1: {
        title: "Sứ mệnh",
        content:
          "Sứ\u00A0mệnh của NewEra là kiến\u00A0tạo kỷ\u00A0nguyên mới thông\u00A0qua sự giao\u00A0thoa hoàn\u00A0hảo giữa công\u00A0nghệ và bản\u00A0thể con\u00A0người. Chúng\u00A0tôi phát\u00A0triển công\u00A0nghệ mang tính nhân\u00A0bản để thấu\u00A0hiểu và cộng\u00A0hưởng cùng tiềm\u00A0năng nhân\u00A0loại.",
      },
      section2: {
        title: "GIỚI THIỆU",
        tagline: "NewEra Inc. - Công\u00A0ty công\u00A0nghệ đổi\u00A0mới",
        content1:
          "NewEra Inc. thành\u00A0lập năm 2021.",
        content1b:
          "Trải qua quá\u00A0trình phát\u00A0triển, công\u00A0ty hiện\u00A0tại tập\u00A0trung cung\u00A0cấp giải\u00A0pháp công\u00A0nghệ và chuyển\u00A0đổi số toàn\u00A0diện cho ngành bán\u00A0lẻ.",
        content2:
          "Đội\u00A0ngũ nhân\u00A0sự đến từ các tập\u00A0đoàn hàng\u00A0đầu trong\u00A0nước và thế\u00A0giới.",
      },
      section3: {
        title: "Sản phẩm",
        title2: "& giải pháp",
        card1: "Thanh Toán & Ngân Hàng Số",
        card2: "Giải\u00A0pháp quản\u00A0lý đối\u00A0tác bán\u00A0lẻ",
        card3: "Chuỗi cung\u00a0ứng đầu\u00a0cuối",
        card4: "Bán lẻ thông minh & Internet vạn vật",
        card5: "Quảng cáo tại điểm bán",
        card6: "Tương tác & chăm sóc khách hàng",
        card7: "Dịch vụ tài chính",
        card8: "Dữ liệu & quản trị rủi ro",
      },
    },
    // Banner
    banner: {
      tag: "Điểm khác biệt",
      tagline: "Chúng tôi không chỉ tư vấn giải pháp.",
      title: "NEWERA INC. TẬP TRUNG VÀO XÂY DỰNG, VẬN HÀNH, VÀ NHÂN RỘNG HỆ THỐNG",
      description:
        "Mỗi dự án được triển khai bởi đội ngũ chuyên gia theo từng lĩnh vực cụ thể, với kinh nghiệm thực chiến sâu rộng nhằm giải quyết đúng và trúng các bài toán kinh doanh.",
      bottomTagline: "Cá nhân hoá trải nghiệm, vận hành tin cậy và mở rộng bền vững",
    },
    // Footer
    footer: {
      newsletterTitle:
        "Cập\u00A0nhật xu\u00A0hướng công\u00A0nghệ &\u00A0bán\u00A0lẻ cùng NewEra Inc.",
      newsletterDesc:
        "Nhận những chia\u00A0sẻ ngắn\u00A0gọn từ đội\u00A0ngũ NewEra Inc. về công\u00A0nghệ, giải\u00A0pháp bán\u00A0lẻ và cách doanh\u00A0nghiệp ứng\u00A0dụng hiệu\u00A0quả.",
      emailPlaceholder: "Email của bạn",
      subscribe: "Đăng Ký",
      privacyNote:
        "NewEra cam kết bảo mật thông tin của bạn. Bạn có thể huỷ đăng ký bất cứ lúc nào.",
      motto1: "Kiến tạo, phát triển",
      motto2: "và khám phá giải pháp.",
      copyright: "©2026 NEWERA INC. BẢO LƯU MỌI QUYỀN.",
    },
  },
  en: {
    nav: {
      about: "About Us",
      ecosystem: "Ecosystem",
      team: "Team",
      contact: "Contact",
    },
    header: {
      mainTitle: "REIMAGINED",
      subtitle1: "Create, develop,",
      subtitle2: "understand, resonate.",
      description:
        "A\u00A0comprehensive technology ecosystem integrating payments, artificial\u00A0intelligence, Internet\u00A0of\u00A0Things, and data.",
      cta: "Learn More",
    },
    about: {
      tag: "About NewEra Inc.",
      section1: {
        title: "Mission",
        content:
          "NewEra's mission is to create a new era through the perfect intersection of technology and human nature. We develop human-centric technology to understand and resonate with human potential.",
      },
      section2: {
        title: "INTRODUCTION",
        tagline: "NewEra Inc. - Innovative Technology Company",
        content1:
          "NewEra Inc. was founded in 2021.",
        content1b:
          "Through continuous development, the company currently focuses on providing comprehensive technology solutions and digital transformation for the retail industry.",
        content2:
          "Our team comes from leading domestic and international corporations.",
      },
      section3: {
        title: "Core Product",
        title2: "Pillars",
        card1: "Payment & Banking",
        card2: "Merchant Solution",
        card3: "E2E Supply Chain",
        card4: "IoT & Smart Retail",
        card5: "Retail Media",
        card6: "Engagement & Loyalty",
        card7: "Financial Services",
        card8: "Data & Risk Intelligence (AI & Data)",
      },
    },
    banner: {
      tag: "What Sets Us Apart",
      tagline: "We go beyond consulting.",
      title: "NEWERA INC. FOCUSES ON BUILDING, OPERATING, AND SCALING SYSTEMS",
      description:
        "Each project is delivered by domain-specific experts with deep hands-on experience, focused on solving real business challenges.",
      bottomTagline: "Personalize experiences, reliable operations, and sustainable expansion",
    },
    footer: {
      newsletterTitle:
        "Stay updated on technology & retail trends with NewEra Inc.",
      newsletterDesc:
        "Receive concise insights from the NewEra Inc. team about technology, retail solutions, and how businesses can apply them effectively.",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      privacyNote:
        "NewEra is committed to protecting your information. You can unsubscribe at any time.",
      motto1: "Create, develop",
      motto2: "and discover solutions.",
      copyright: "©2026 NEWERA INC. ALL RIGHTS RESERVED.",
    },
  },
} as const;

type Translations = (typeof translations)[Locale];

interface I18nContextType {
  locale: Locale;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang");
  // Khởi tạo browserLocale ngay từ đầu thay vì dùng useEffect
  const [browserLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined" && navigator.language.startsWith("en")) {
      return "en";
    }
    return "vi";
  });

  const locale: Locale =
    langParam === "en" || langParam === "vi" ? langParam : browserLocale;
  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
