"use client"

import Head from "next/head"
import Header from "@components/pages/Header"
import WhatWeDo from "@components/pages/WhatWeDo"
import ProjectStats from "@components/pages/ProjectStats"
import WhyCustomWebsite from "@components/pages/WhyCustomWebsite"
import ScrollingIconsBar from "@components/utils/ScrollingIconsBar"
import AboutUs from "@components/pages/AboutUs"
import ContactForm from "@components/pages/ContactForm"
import Map from "../../old-react/components/cards/Map"
import Script from "next/script"
// Any animation hooks or side effects go here
export default function Home() {
  return (
    <>
      <Head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Infinite Pixel",
              url: "https://www.infinitepixel.dev",
              logo: "https://www.infinitepixel.dev/images/logo.ico",
              description:
                "Infinite Pixel offers affordable and professional custom web design services tailored for small businesses.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@infinitepixel.dev",
                contactType: "customer service",
                areaServed: "Nashville, TN",
                availableLanguage: "English",
              },
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: ["https://www.facebook.com/infinitepixel.dev/"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              /* schema.org JSON-LD */
            }),
          }}
        />
        <meta
          name="impact-site-verification"
          value="0b1c9781-9e69-4636-b7e0-f2d1295d4034"
        ></meta>
      </Head>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="8f4b2199-8e18-478e-be08-235bffa2533b"
        strategy="afterInteractive"
        async
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WZFYHKC4YC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WZFYHKC4YC');
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WZFYHKC4YC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WZFYHKC4YC');
        `}
      </Script>

      {/* Website components */}
      <Header />
      <WhatWeDo />
      <ProjectStats />
      <WhyCustomWebsite />
      <ScrollingIconsBar />
      <AboutUs />
      <ContactForm />
      <Map />
    </>
  )
}
