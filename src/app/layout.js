"use client";

import { useLayoutEffect, useRef } from "react";
import "./globals.css";
import RootClientLayout from "@components/RootClientLayout";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { useTheme } from "@hooks/useTheme";
import { metadata } from "./layout-metadata";

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  const initialized = useRef(false);

  const attributesToRemove = ["nighteye", "cz-shortcut-listen"];
  const maxAttempts = 5;
  const attemptCount = useRef(0);

  /**
   * Function to remove specified attributes and apply theme class
   */
  const removeAttributesAndApplyTheme = () => {
    const htmlElement = document.documentElement;

    // Remove attributes
    attributesToRemove.forEach((attr) => {
      if (htmlElement.hasAttribute(attr)) {
        htmlElement.removeAttribute(attr);
      }
    });

    // Apply theme class
    if (theme) {
      htmlElement.className = theme;
    }

    attemptCount.current += 1;
  };

  /**
   * Combined Pre and Post Hydration Logic
   */
  useLayoutEffect(() => {
    if (!initialized.current) {
      removeAttributesAndApplyTheme();
      initialized.current = true;
    }

    // Re-run periodically to handle any reinjection of attributes
    const interval = setInterval(() => {
      if (attemptCount.current < maxAttempts) {
        removeAttributesAndApplyTheme();
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_v3_SITE_KEY}
        >
          <RootClientLayout>{children}</RootClientLayout>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
