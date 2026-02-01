import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newera.0x1d.xyz"),
  title: {
    default: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
    template: "%s | NewEra Inc.",
  },
  description:
    "NewEra Inc. - Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu cho ngành bán lẻ. Giải pháp chuyển đổi số hàng đầu cho doanh nghiệp.",
  keywords: [
    "NewEra",
    "công nghệ",
    "bán lẻ",
    "chuyển đổi số",
    "thanh toán",
    "AI",
    "IoT",
    "trí tuệ nhân tạo",
    "Internet vạn vật",
    "hệ sinh thái công nghệ",
    "retail technology",
    "digital transformation",
    "payment solution",
  ],
  authors: [{ name: "NewEra Inc." }],
  creator: "NewEra Inc.",
  publisher: "NewEra Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo-blue.png", type: "image/png" },
      { url: "/logo-white.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/logo-blue.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-blue.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
    description:
      "Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu cho ngành bán lẻ.",
    url: "https://newera.0x1d.xyz",
    siteName: "NewEra Inc.",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/logo-blue.png",
        width: 1200,
        height: 630,
        alt: "NewEra Inc. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
    description:
      "Hệ sinh thái công nghệ toàn diện cho ngành bán lẻ.",
    images: ["/logo-blue.png"],
    creator: "@NewEraInc",
    site: "@NewEraInc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://newera.0x1d.xyz",
    languages: {
      "vi-VN": "https://newera.0x1d.xyz?lang=vi",
      "en-US": "https://newera.0x1d.xyz?lang=en",
    },
  },
  category: "Technology",
  classification: "Business Technology Solutions",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
