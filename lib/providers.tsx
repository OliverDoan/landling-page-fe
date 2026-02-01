"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "./i18n";
import { ReactNode, Suspense } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Suspense>
        <I18nProvider>{children}</I18nProvider>
      </Suspense>
    </ThemeProvider>
  );
}
