"use client";

import { useLayoutEffect } from "react";
import "./globals.css";
import RootClientLayout from "@components/RootClientLayout";

// INFO Global Providers
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { UserProvider } from "@context/UserContext";

import { useTheme } from "@hooks/useTheme";
import { metadata } from "./layout-metadata";

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  const attributesToRemove = ["nighteye", "cz-shortcut-listen"];

  /**
   * Apply theme class to HTML element
   */
  const applyTheme = () => {
    const htmlElement = document.documentElement;
    if (theme) {
      htmlElement.className = theme;
    }
  };

  /**
   * Remove specified attributes to prevent conflicts
   */
  const removeAttributes = () => {
    const htmlElement = document.documentElement;
    attributesToRemove.forEach((attr) => {
      if (htmlElement.hasAttribute(attr)) {
        htmlElement.removeAttribute(attr);
      }
    });
  };

  /**
   * Effect to handle theme changes
   */
  useLayoutEffect(() => {
    applyTheme();
  }, [theme]);

  /**
   * Effect to remove unwanted attributes on mount
   */
  useLayoutEffect(() => {
    removeAttributes();
  }, []);

  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_v3_SITE_KEY}
        >
          <RootClientLayout>
            <UserProvider>{children}</UserProvider>
          </RootClientLayout>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
