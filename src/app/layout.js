"use client";

import { useLayoutEffect, useRef } from "react";
import "./globals.css";
import RootClientLayout from "@components/RootClientLayout";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { useTheme } from "@hooks/useTheme";
import { metadata } from "./layout-metadata";

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_v3_SITE_KEY;
  const initialized = useRef(false);

  const attributesToRemove = [
    "nighteye",
    //can add more attributes as necessary
  ];

  useLayoutEffect(() => {
    if (!initialized.current) {
      const htmlElement = document.documentElement;

      // Remove specified attributes to prevent hydration mismatch
      attributesToRemove.forEach((attr) => {
        if (htmlElement.hasAttribute(attr)) {
          htmlElement.removeAttribute(attr);
        }
      });

      // Set theme class
      if (theme) {
        htmlElement.className = theme;
      }

      initialized.current = true;
    }
  }, [theme]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ReCaptchaProvider reCaptchaKey={siteKey}>
          <RootClientLayout>{children}</RootClientLayout>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
