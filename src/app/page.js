"use client"

import Header from "@components/pages/Header"
import WhatWeDo from "@components/pages/WhatWeDo"
import ProjectStats from "@components/pages/ProjectStats"
import WhyCustomWebsite from "@components/pages/WhyCustomWebsite"
import ScrollingIconsBar from "@components/utils/ScrollingIconsBar"
import AboutUs from "@components/pages/AboutUs"
import ContactForm from "@components/pages/ContactForm"
import Map from "@components/cards/Map"

// Any animation hooks or side effects go here
export default function Home() {
  return (
    <>
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
