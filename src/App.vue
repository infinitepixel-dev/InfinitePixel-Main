<script setup>
import ContactModal from "./components/contact/ContactModal.vue"
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Box,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Facebook,
  Gauge,
  Instagram,
  Linkedin,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Sparkles,
  Star,
  X,
} from "lucide-vue-next"

gsap.registerPlugin(ScrollTrigger)

const page = ref(null)
const mobileOpen = ref(false)

const showContactModal = ref(false)

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
]

const stats = [
  { value: "50+", label: "Projects completed", icon: Box },
  { value: "100%", label: "Client focused", icon: Check },
  { value: "5.0", label: "Average rating", icon: Star },
]

const services = [
  {
    title: "Built for Performance",
    description:
      "Lean, fast-loading experiences engineered to keep visitors engaged.",
    icon: Rocket,
  },
  {
    title: "Custom Design",
    description:
      "Distinct visual systems shaped around your brand—not a recycled template.",
    icon: PenTool,
  },
  {
    title: "Scalable & Future-Ready",
    description:
      "Flexible architecture that grows with your content, team, and business.",
    icon: BarChart3,
  },
  {
    title: "Secure & Reliable",
    description:
      "Modern standards, clean dependencies, and thoughtful implementation.",
    icon: LockKeyhole,
  },
  {
    title: "Perfect on Every Device",
    description:
      "Responsive layouts tested for desktop, tablet, and mobile experiences.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clean & Modern Code",
    description:
      "Maintainable Vue components, semantic markup, and purposeful animations.",
    icon: Code2,
  },
]

const projects = [
  {
    category: "Home & Living",
    title: "Northline Interiors",
    description: "Editorial e-commerce experience",
    accent: "from-amber-400/75 via-orange-300/20 to-transparent",
    label: "Elevate Your Everyday",
  },
  {
    category: "Industrial Co.",
    title: "Ironwell Fabrication",
    description: "Conversion-focused business platform",
    accent: "from-emerald-400/65 via-teal-300/15 to-transparent",
    label: "Built for What’s Next",
  },
  {
    category: "Fitness Brand",
    title: "Kinetic House",
    description: "Bold membership and coaching site",
    accent: "from-sky-400/75 via-cyan-300/15 to-transparent",
    label: "Stronger Every Day",
  },
]

let ctx

onMounted(async () => {
  await nextTick()

  ctx = gsap.context(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reduceMotion) return

    /*
     * Hero text entrance.
     */
    gsap.set("[data-hero-reveal]", {
      y: 28,
      opacity: 0,
    })

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    })

    heroTimeline
      .to("[data-hero-reveal]", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(
        "[data-swoosh-stage]",
        {
          opacity: 0,
          y: 42,
          scale: 0.92,
          duration: 1.15,
        },
        "-=0.55",
      )

    /*
     * Draw each illuminated line into view.
     * The paths use SVG stroke dashes so they feel like moving light trails.
     */
    gsap.fromTo(
      "[data-swoosh-path]",
      {
        strokeDasharray: 1400,
        strokeDashoffset: 1400,
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2.2,
        stagger: 0.12,
        ease: "power3.out",
      },
    )

    /*
     * Continuously move the bright highlights along the curves.
     * Different durations keep the animation from feeling repetitive.
     */
    gsap.utils.toArray("[data-swoosh-runner]").forEach((path, index) => {
      gsap.to(path, {
        strokeDashoffset: -900,
        duration: 5.5 + index * 0.9,
        ease: "none",
        repeat: -1,
      })
    })

    /*
     * Add a slow, restrained drift to the complete artwork.
     */
    gsap.to("[data-swoosh-core]", {
      x: 12,
      y: -10,
      rotation: 1.5,
      transformOrigin: "center center",
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })

    /*
     * Pulse the background glow independently from the line movement.
     */
    gsap.to("[data-swoosh-glow]", {
      scale: 1.12,
      opacity: 0.85,
      duration: 3.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    })

    /*
     * Reveal section content as it enters the viewport.
     */
    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.from(element, {
        y: 34,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true,
        },
      })
    })

    /*
     * Reveal service, process, and portfolio cards.
     */
    gsap.utils.toArray("[data-card]").forEach((element, index) => {
      gsap.from(element, {
        y: 30,
        opacity: 0,
        duration: 0.72,
        delay: (index % 3) * 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
      })
    })

    /*
     * Slightly shift the hero background while scrolling.
     */
    gsap.to("[data-hero-glow]", {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
  }, page.value)

  ScrollTrigger.refresh()
})

onBeforeUnmount(() => {
  ctx?.revert()
})

/*
 * Opens the shared project inquiry modal.
 * Closing the mobile navigation first prevents the menu from remaining open
 * behind the modal on smaller screens.
 */
const openContactModal = () => {
  mobileOpen.value = false
  showContactModal.value = true
}

/*
 * Closes the mobile navigation after a visitor chooses a navigation link.
 */
const closeMenu = () => {
  mobileOpen.value = false
}
</script>

<template>
  <div
    ref="page"
    class="isolate relative bg-ink-950 overflow-hidden text-white"
  >
    <header
      class="top-0 z-50 fixed inset-x-0 bg-ink-950/75 backdrop-blur-xl border-white/[0.06] border-b"
    >
      <div class="flex justify-between items-center h-20 container-shell">
        <a
          href="#home"
          class="flex items-center"
          aria-label="Infinite Pixel home"
        >
          <img
            src="/logo.svg"
            alt="Infinite Pixel"
            class="w-auto h-10 hover:scale-105 transition-transform duration-300"
          />
        </a>

        <nav
          class="hidden lg:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="font-medium text-slate-300 hover:text-white text-sm transition"
          >
            {{ link.label }}
          </a>
        </nav>

        <button
          type="button"
          @click="openContactModal"
          class="hidden lg:inline-flex items-center gap-2 bg-brand-500/10 hover:bg-brand-500/15 px-5 py-3 border border-brand-400/35 hover:border-brand-400/70 rounded-xl font-semibold text-sm transition"
        >
          Let’s Talk
          <ArrowUpRight :size="17" />
        </button>

        <button
          type="button"
          class="lg:hidden place-items-center grid bg-white/[0.04] border border-white/10 rounded-xl size-11"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>

      <div
        v-if="mobileOpen"
        class="lg:hidden bg-ink-950 px-4 py-5 border-white/10 border-t"
      >
        <nav class="flex flex-col gap-2 mx-auto max-w-xl">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="hover:bg-white/[0.05] px-4 py-3 rounded-xl text-slate-200 transition"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </header>

    <main>
      <section
        id="home"
        class="relative pt-32 lg:pt-36 min-h-screen overflow-hidden"
      >
        <div data-hero-glow class="-z-10 absolute inset-0 pointer-events-none">
          <div
            class="absolute inset-0 pointer-events-none"
            style="
              background: linear-gradient(
                to bottom,
                rgba(2, 6, 23, 0.15),
                rgba(2, 6, 23, 0.05) 30%,
                transparent 60%,
                rgba(2, 6, 23, 0.25)
              );
            "
          ></div>
          <div
            class="top-[48%] left-[35%] absolute bg-gradient-to-r from-transparent via-mint-400/25 to-transparent w-[60rem] h-px -rotate-[18deg]"
          ></div>
        </div>

        <div
          class="items-center gap-14 lg:gap-8 grid lg:grid-cols-[0.82fr_1.18fr] pb-20 lg:pb-16 container-shell"
        >
          <div class="z-10 relative">
            <h1
              data-hero-reveal
              class="font-semibold xl:text-[5.25rem] text-5xl sm:text-6xl text-balance leading-[0.98] tracking-[-0.055em]"
            >
              Custom websites built for
              <span
                class="bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-mint-400 text-transparent"
                >growth.</span
              >
            </h1>

            <p
              data-hero-reveal
              class="mt-7 max-w-xl text-slate-300 text-base sm:text-lg leading-7"
            >
              We design and build fast, strategic websites that sharpen your
              brand, simplify your message, and turn more visitors into
              customers.
            </p>

            <div data-hero-reveal class="flex sm:flex-row flex-col gap-3 mt-9">
              <a
                href="#portfolio"
                class="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 shadow-[0_16px_50px_rgba(35,136,244,.25)] px-6 py-3.5 rounded-xl font-semibold text-sm transition hover:-translate-y-0.5"
              >
                View our work
                <ArrowRight :size="17" />
              </a>
              <button
                type="button"
                @click="openContactModal"
                class="inline-flex justify-center items-center gap-2 bg-white/[0.03] hover:bg-white/[0.06] px-6 py-3.5 border border-white/15 hover:border-white/30 rounded-xl font-semibold text-sm transition"
              >
                Schedule a call
              </button>
            </div>

            <div
              data-hero-reveal
              class="grid grid-cols-3 mt-12 divide-x divide-white/10 max-w-2xl"
            >
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="px-3 sm:px-6 sm:first:pl-0 first:pl-0"
              >
                <component
                  :is="stat.icon"
                  :size="21"
                  class="mb-3 text-brand-400"
                />
                <p
                  class="font-semibold text-2xl sm:text-3xl tracking-[-0.04em]"
                >
                  {{ stat.value }}
                </p>
                <p
                  class="mt-1 text-[0.68rem] text-slate-400 sm:text-xs leading-4"
                >
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>

          <div
            data-swoosh-stage
            class="relative mx-auto lg:-mr-8 w-full max-w-[820px]"
          >
            <!-- Ambient glow behind the line work. -->
            <div
              data-swoosh-glow
              class="top-1/2 left-1/2 absolute bg-brand-500/15 blur-[110px] rounded-full w-[72%] h-[62%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            ></div>

            <!-- Faint technical grid gives the visual some depth without adding panels. -->
            <div
              class="absolute inset-[10%] opacity-25"
              aria-hidden="true"
              style="
                background-image:
                  linear-gradient(
                    rgba(255, 255, 255, 0.04) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.04) 1px,
                    transparent 1px
                  );
                background-size: 44px 44px;
                mask-image: radial-gradient(
                  circle at center,
                  black 8%,
                  transparent 72%
                );
              "
            ></div>

            <svg
              data-swoosh-core
              viewBox="0 0 900 680"
              role="img"
              aria-label="Animated blue and mint light trails sweeping through the Infinite Pixel hero"
              class="block z-10 relative w-full h-auto overflow-visible"
            >
              <defs>
                <!-- Main brand gradient used by the broad light trails. -->
                <linearGradient
                  id="swoosh-main"
                  x1="80"
                  y1="620"
                  x2="820"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b1220" stop-opacity="0" />
                  <stop
                    offset="0.24"
                    stop-color="#2388f4"
                    stop-opacity="0.45"
                  />
                  <stop offset="0.58" stop-color="#45d7ba" />
                  <stop offset="0.82" stop-color="#7dd3fc" />
                  <stop offset="1" stop-color="#2388f4" stop-opacity="0" />
                </linearGradient>

                <!-- Secondary gradient adds a warmer highlight for visual contrast. -->
                <linearGradient
                  id="swoosh-accent"
                  x1="30"
                  y1="570"
                  x2="850"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2388f4" stop-opacity="0" />
                  <stop offset="0.35" stop-color="#38bdf8" />
                  <stop offset="0.64" stop-color="#f3a950" />
                  <stop offset="1" stop-color="#f3a950" stop-opacity="0" />
                </linearGradient>

                <!-- Soft outer glow for the wider paths. -->
                <filter
                  id="swoosh-blur"
                  x="-45%"
                  y="-45%"
                  width="190%"
                  height="190%"
                >
                  <feGaussianBlur stdDeviation="18" />
                </filter>

                <!-- Tighter neon glow for the sharp foreground lines. -->
                <filter
                  id="swoosh-neon"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <!-- A radial glow keeps the composition visually anchored. -->
                <radialGradient
                  id="swoosh-center-glow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0" stop-color="#45d7ba" stop-opacity="0.22" />
                  <stop
                    offset="0.45"
                    stop-color="#2388f4"
                    stop-opacity="0.12"
                  />
                  <stop offset="1" stop-color="#02050a" stop-opacity="0" />
                </radialGradient>
              </defs>

              <!-- Soft central atmosphere. -->
              <ellipse
                cx="500"
                cy="350"
                rx="280"
                ry="230"
                fill="url(#swoosh-center-glow)"
              />

              <!-- Broad blurred ribbons create depth behind the crisp strokes. -->
              <g
                fill="none"
                filter="url(#swoosh-blur)"
                opacity="0.65"
                aria-hidden="true"
              >
                <path
                  d="M-30 585 C150 500 230 355 390 315 C555 273 630 420 930 88"
                  stroke="url(#swoosh-main)"
                  stroke-width="34"
                  stroke-linecap="round"
                />
                <path
                  d="M-65 650 C195 565 248 430 435 405 C620 380 735 490 970 180"
                  stroke="url(#swoosh-accent)"
                  stroke-width="22"
                  stroke-linecap="round"
                  opacity="0.46"
                />
              </g>

              <!-- Structural lines define the overall sweep. -->
              <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path
                  data-swoosh-path
                  d="M-40 590 C145 505 234 352 390 315 C550 277 633 414 940 72"
                  stroke="url(#swoosh-main)"
                  stroke-width="5.5"
                  filter="url(#swoosh-neon)"
                />
                <path
                  data-swoosh-path
                  d="M-55 626 C165 547 244 402 423 370 C605 338 700 451 958 137"
                  stroke="url(#swoosh-main)"
                  stroke-width="2.6"
                  opacity="0.76"
                />
                <path
                  data-swoosh-path
                  d="M-80 663 C172 595 270 468 460 438 C650 409 760 490 990 224"
                  stroke="url(#swoosh-accent)"
                  stroke-width="2"
                  opacity="0.58"
                />
                <path
                  data-swoosh-path
                  d="M105 682 C200 548 230 305 408 252 C595 197 694 382 870 65"
                  stroke="url(#swoosh-main)"
                  stroke-width="1.25"
                  opacity="0.48"
                />
                <path
                  data-swoosh-path
                  d="M258 694 C287 566 316 485 421 420 C566 330 720 419 904 116"
                  stroke="url(#swoosh-main)"
                  stroke-width="1"
                  opacity="0.3"
                />
              </g>

              <!-- Moving dashed highlights travel continuously along the same curves. -->
              <g
                fill="none"
                stroke-linecap="round"
                filter="url(#swoosh-neon)"
                aria-hidden="true"
              >
                <path
                  data-swoosh-runner
                  d="M-40 590 C145 505 234 352 390 315 C550 277 633 414 940 72"
                  stroke="#dbeafe"
                  stroke-width="3"
                  stroke-dasharray="70 830"
                  stroke-dashoffset="0"
                  opacity="0.95"
                />
                <path
                  data-swoosh-runner
                  d="M-55 626 C165 547 244 402 423 370 C605 338 700 451 958 137"
                  stroke="#5eead4"
                  stroke-width="2"
                  stroke-dasharray="46 854"
                  stroke-dashoffset="-280"
                  opacity="0.82"
                />
                <path
                  data-swoosh-runner
                  d="M-80 663 C172 595 270 468 460 438 C650 409 760 490 990 224"
                  stroke="#fbbf6a"
                  stroke-width="1.7"
                  stroke-dasharray="32 868"
                  stroke-dashoffset="-560"
                  opacity="0.7"
                />
              </g>

              <!-- Small points make the animation feel precise rather than decorative. -->
              <g fill="#e0f2fe" aria-hidden="true">
                <circle cx="389" cy="315" r="3.5" opacity="0.8" />
                <circle cx="605" cy="338" r="2.7" opacity="0.55" />
                <circle cx="698" cy="451" r="2.2" opacity="0.42" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section
        id="services"
        class="bg-ink-900/70 border-white/[0.06] border-y section-pad"
      >
        <div class="container-shell">
          <div data-reveal class="mx-auto max-w-2xl text-center">
            <p
              class="font-semibold text-brand-400 text-xs uppercase tracking-[0.2em]"
            >
              Why choose Infinite Pixel
            </p>
            <h2
              class="mt-4 font-semibold text-4xl sm:text-5xl text-balance tracking-[-0.045em]"
            >
              More than just a <span class="text-mint-400">website</span>
            </h2>
            <p class="mx-auto mt-5 max-w-xl text-slate-400 leading-7">
              Design, clean code, and strategy come together to create a site
              that looks sharp and performs with purpose.
            </p>
          </div>

          <div class="gap-5 grid md:grid-cols-2 lg:grid-cols-3 mt-12">
            <article
              v-for="service in services"
              :key="service.title"
              data-card
              class="group bg-gradient-to-br from-white/[0.055] to-white/[0.018] p-6 panel-border hover:border-brand-400/30 rounded-2xl transition hover:-translate-y-1 duration-300"
            >
              <div class="flex justify-between items-start gap-5">
                <div
                  class="place-items-center grid bg-brand-500/10 border border-brand-400/15 rounded-xl size-12 text-brand-400"
                >
                  <component :is="service.icon" :size="23" />
                </div>
                <span
                  class="place-items-center grid border border-white/10 group-hover:border-brand-400/30 rounded-full size-9 text-slate-400 group-hover:text-brand-400 transition"
                >
                  <ChevronRight :size="16" />
                </span>
              </div>
              <h3 class="mt-7 font-semibold text-lg tracking-[-0.025em]">
                {{ service.title }}
              </h3>
              <p class="mt-3 text-slate-400 text-sm leading-6">
                {{ service.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="process" class="relative overflow-hidden section-pad">
        <div
          class="top-1/2 left-1/2 -z-10 absolute bg-mint-400/[0.035] blur-3xl rounded-full w-[45rem] h-[26rem] -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="lg:items-center gap-12 grid lg:grid-cols-[0.72fr_1.28fr] container-shell"
        >
          <div data-reveal>
            <p
              class="font-semibold text-mint-400 text-xs uppercase tracking-[0.2em]"
            >
              A clearer process
            </p>
            <h2
              class="mt-4 font-semibold text-4xl sm:text-5xl tracking-[-0.045em]"
            >
              Strategy before decoration.
            </h2>
            <p class="mt-5 max-w-lg text-slate-400 leading-7">
              Every project starts with your audience and business goals. Then
              we turn that strategy into a polished, responsive experience.
            </p>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 mt-8 font-semibold text-brand-400 hover:text-brand-300 text-sm"
            >
              See how we work
              <ArrowRight :size="17" />
            </a>
          </div>

          <div class="gap-4 grid sm:grid-cols-2">
            <div
              v-for="(item, index) in [
                'Discover',
                'Design',
                'Develop',
                'Refine',
              ]"
              :key="item"
              data-card
              class="bg-white/[0.025] p-6 panel-border rounded-2xl"
            >
              <div class="flex justify-between items-center">
                <span class="font-semibold text-brand-400 text-sm"
                  >0{{ index + 1 }}</span
                >
                <Gauge v-if="index === 0" :size="19" class="text-slate-500" />
                <PenTool
                  v-else-if="index === 1"
                  :size="19"
                  class="text-slate-500"
                />
                <Code2
                  v-else-if="index === 2"
                  :size="19"
                  class="text-slate-500"
                />
                <Sparkles v-else :size="19" class="text-slate-500" />
              </div>
              <h3 class="mt-8 font-semibold text-xl">{{ item }}</h3>
              <p class="mt-3 text-slate-400 text-sm leading-6">
                {{
                  [
                    "We define the audience, message, goals, and required functionality.",
                    "We shape the visual direction and make every screen feel intentional.",
                    "We build responsive Vue components with clean, maintainable code.",
                    "We test, polish, optimize, and prepare the site for launch.",
                  ][index]
                }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        class="bg-ink-900/65 border-white/[0.06] border-y section-pad"
      >
        <div class="container-shell">
          <div class="lg:items-end gap-8 grid lg:grid-cols-[0.55fr_1.45fr]">
            <div data-reveal>
              <p class="font-semibold text-amber-400 text-sm">Selected work</p>
              <h2
                class="mt-4 font-semibold text-4xl sm:text-5xl tracking-[-0.045em]"
              >
                Websites that make an <span class="text-brand-400">impact</span>
              </h2>
              <p class="mt-5 max-w-md text-slate-400 leading-7">
                A few example directions showing how the same system can adapt
                to very different brands.
              </p>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 mt-8 px-5 py-3 border border-white/15 hover:border-white/30 rounded-xl font-semibold text-sm"
              >
                View all projects
                <ArrowRight :size="17" />
              </a>
            </div>

            <div class="gap-5 grid md:grid-cols-3">
              <article
                v-for="project in projects"
                :key="project.title"
                data-card
                class="group bg-white/[0.025] panel-border rounded-2xl overflow-hidden"
              >
                <div
                  class="relative bg-[#090d13] p-4 border-white/[0.07] border-b aspect-[4/3] overflow-hidden"
                >
                  <div
                    :class="[
                      'absolute inset-0 bg-gradient-to-br opacity-40 transition duration-500 group-hover:opacity-65',
                      project.accent,
                    ]"
                  ></div>
                  <div
                    class="relative bg-ink-950 shadow-2xl border border-white/10 rounded-lg h-full overflow-hidden"
                  >
                    <div
                      class="flex items-center gap-1.5 px-3 border-white/[0.06] border-b h-7"
                    >
                      <span class="bg-white/20 rounded-full size-1.5"></span>
                      <span class="bg-white/20 rounded-full size-1.5"></span>
                      <span class="bg-white/20 rounded-full size-1.5"></span>
                    </div>
                    <div class="flex items-end p-4 h-[calc(100%-1.75rem)]">
                      <div>
                        <p
                          class="text-[0.55rem] text-slate-400 uppercase tracking-[0.18em]"
                        >
                          {{ project.category }}
                        </p>
                        <p
                          class="mt-2 max-w-[9rem] font-semibold text-xl uppercase leading-[0.95] tracking-[-0.05em]"
                        >
                          {{ project.label }}
                        </p>
                        <span
                          class="inline-flex mt-4 px-2.5 py-1 border border-white/15 rounded text-[0.5rem]"
                          >Explore</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <div class="flex justify-between items-start gap-4">
                    <div>
                      <h3 class="font-semibold">{{ project.title }}</h3>
                      <p class="mt-1 text-slate-400 text-xs">
                        {{ project.description }}
                      </p>
                    </div>
                    <ExternalLink
                      :size="17"
                      class="text-slate-500 group-hover:text-brand-400 transition"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section-pad">
        <div class="container-shell">
          <div
            data-reveal
            class="lg:items-center gap-10 grid lg:grid-cols-[0.9fr_1.1fr] bg-gradient-to-br from-white/[0.055] to-white/[0.018] p-7 sm:p-10 panel-border rounded-3xl"
          >
            <div>
              <div class="text-brand-400 text-5xl leading-none">“</div>
              <blockquote
                class="mt-2 max-w-xl text-slate-200 text-lg leading-8"
              >
                Infinite Pixel took our ideas and turned them into a polished
                website that finally feels like our brand. The process was
                clear, thoughtful, and genuinely collaborative.
              </blockquote>
              <div class="flex items-center gap-4 mt-7">
                <div>
                  <p class="font-semibold">- Cory Pack</p>
                </div>
              </div>
            </div>

            <div id="contact" class="lg:pl-12 lg:border-white/10 lg:border-l">
              <p
                class="font-semibold text-mint-400 text-xs uppercase tracking-[0.2em]"
              >
                Ready to elevate your online presence?
              </p>
              <h2
                class="mt-4 font-semibold text-4xl sm:text-5xl text-balance tracking-[-0.045em]"
              >
                Let’s build something
                <span class="text-brand-400">remarkable</span> together.
              </h2>
              <button
                type="button"
                @click="openContactModal"
                class="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 mt-8 px-6 py-3.5 rounded-xl font-semibold text-sm transition"
              >
                Start Your Project
                <ArrowRight :size="17" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="pb-20">
        <div
          class="sm:flex sm:justify-between sm:items-center bg-white/[0.02] px-6 py-6 panel-border rounded-2xl container-shell"
        >
          <div>
            <p class="font-semibold">Built to grow with your business.</p>
            <p class="mt-1 text-slate-400 text-sm">
              Whether you're launching a new brand or refreshing an existing
              one, we create digital experiences that leave a lasting
              impression.
            </p>
          </div>
          <a
            href="#home"
            class="inline-flex items-center gap-2 mt-4 sm:mt-0 font-semibold text-brand-400 text-sm"
          >
            Back to top
            <ArrowUpRight :size="16" />
          </a>
        </div>
      </section>
    </main>

    <footer class="py-8 border-white/[0.07] border-t">
      <div
        class="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-6 container-shell"
      >
        <a
          href="#home"
          class="inline-flex items-center"
          aria-label="Infinite Pixel home"
        >
          <img
            src="/logo.svg"
            alt="Infinite Pixel"
            class="opacity-90 hover:opacity-100 w-auto h-9 hover:scale-105 transition-all duration-300"
          />
        </a>
        <p class="text-slate-500 text-sm">
          © {{ new Date().getFullYear() }} Infinite Pixel. All rights reserved.
        </p>
        <div class="flex items-center gap-4 text-slate-400">
          <a href="#" aria-label="Facebook" class="hover:text-white transition"
            ><Facebook :size="18"
          /></a>
          <a href="#" aria-label="Instagram" class="hover:text-white transition"
            ><Instagram :size="18"
          /></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-white transition"
            ><Linkedin :size="18"
          /></a>
        </div>
      </div>
    </footer>
    <ContactModal v-model="showContactModal" />
  </div>
</template>
