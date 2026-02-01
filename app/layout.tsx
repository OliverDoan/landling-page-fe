import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
  description:
    "NewEra Inc. - Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu cho ngành bán lẻ.",
  keywords: [
    "NewEra",
    "công nghệ",
    "bán lẻ",
    "chuyển đổi số",
    "thanh toán",
    "AI",
    "IoT",
  ],
  openGraph: {
    title: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
    description:
      "Hệ sinh thái công nghệ toàn diện, tích hợp thanh toán, trí tuệ nhân tạo, Internet vạn vật và dữ liệu cho ngành bán lẻ.",
    url: "https://newera.0x1d.xyz",
    siteName: "NewEra Inc.",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewEra Inc. | Kiến tạo kỷ nguyên công nghệ mới",
    description:
      "Hệ sinh thái công nghệ toàn diện cho ngành bán lẻ.",
  },
  robots: {
    index: true,
    follow: true,
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
