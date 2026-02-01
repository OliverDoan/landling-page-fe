"use client";

import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NewEra Inc.",
  url: "https://newera.0x1d.xyz",
  logo: "https://newera.0x1d.xyz/logo-blue.png",
  description:
    "Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu cho ngành bán lẻ.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NewEra Inc.",
  url: "https://newera.0x1d.xyz",
  description: "Hệ sinh thái công nghệ toàn diện cho ngành bán lẻ",
  inLanguage: ["vi-VN", "en-US"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://newera.0x1d.xyz/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function StructuredData() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
