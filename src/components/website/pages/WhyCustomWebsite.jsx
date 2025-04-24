import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    title: "Performance That Scales",
    fact: "Google research shows that bounce rate increases by 32% as page load time goes from 1s to 3s.",
    desc: "Premade templates are bloated by design. Custom-built sites are lean, loading 30–50% faster. That means better Core Web Vitals and stronger SEO.",
  },
  {
    title: "Brand-First Design",
    fact: "Consistent brand presentation across platforms can increase revenue by up to 23%.",
    desc: "Templates follow trends. Custom sites set them. A bespoke build reflects your brand — not a layout used by 1,000 other businesses.",
  },
  {
    title: "Built for Growth",
    fact: "Over 40% of WordPress plugin vulnerabilities are due to outdated or third-party code conflicts.",
    desc: "Custom sites are modular and scalable. Add features without relying on plugin duct-tape or breaking stuff.",
  },
  {
    title: "Better Security",
    fact: "In 2023, over 30,000 websites were hacked daily — many due to insecure CMS templates.",
    desc: "Custom stacks reduce third-party exposure, using updated libraries and clean code you control.",
  },
  {
    title: "Custom UX & Animations",
    fact: "A well-designed UX can boost conversion rates by up to 400%.",
    desc: "Templates are rigid. Custom websites allow for smooth animations, dynamic interactions, and thoughtful user journeys that feel modern and intuitive — not cookie-cutter.",
  },
]

export default function WhyCustomWebsite() {
  const containerRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reason-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="px-6 py-20 text-white bg-gradient-to-b from-gray-950 via-gray-800 to-neutral-50 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">
          Why Choose a <span className="text-blue-500">Custom Website</span>?
        </h2>
        <div className="space-y-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 border border-blue-800 shadow-lg reason-card bg-gradient-to-tl from-slate-200 to-slate-100 rounded-2xl md:p-8"
            >
              <h3 className="text-2xl font-semibold text-blue-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-slate-900">{reason.desc}</p>
              <p className="mt-4 text-sm italic text-blue-900">
                Fact: {reason.fact}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p
            role="paragraph"
            aria-level="2"
            className="text-xl text-slate-900 md:text-2xl"
          >
            Templates are fine for placeholders. But if you want to{" "}
            <span role="section" className="font-bold text-blue-500">
              stand out, scale up,
            </span>{" "}
            and{" "}
            <span className="font-bold text-blue-500">
              leave a lasting impression
            </span>{" "}
            — custom is the way forward.
          </p>
        </div>
      </div>
    </section>
  )
}
