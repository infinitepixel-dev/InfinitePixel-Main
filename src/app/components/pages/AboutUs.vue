<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// Register GSAP plugin (client-safe)
gsap.registerPlugin(ScrollTrigger)

console.log("Hello there!!")

// Refs (Vue equivalents of useRef)
const sectionRef = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

let ctx

onMounted(() => {
  // SSR guard (Nuxt best practice)
  if (!process.client) return

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  })

  const imageEl = imageRef.value
  const textEl = textRef.value
  const sectionEl = sectionRef.value

  if (!imageEl || !textEl || !sectionEl) return

  ctx = gsap.context(() => {
    const mm = ScrollTrigger.matchMedia()

    mm.add("(min-width: 0px)", () => {
      gsap.fromTo(
        imageEl,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        textEl,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, sectionEl)
})

onBeforeUnmount(() => {
  ctx?.revert()
})

// Feature list (moved out of template for clarity)
const features = [
  "Responsive and modern designs",
  "Our team is based in the US",
  "User-focused development approach",
  "Secure and reliable technologies",
  "Transparent communication and collaboration",
  "Experienced team delivering high-quality solutions",
]
</script>

<template>
  <section
    ref="sectionRef"
    class="flex md:flex-row flex-col justify-between items-center bg-slate-50 mt-12 p-2"
  >
    <!-- Image -->
    <div ref="imageRef" class="mb-10 w-full md:w-1/2">
      <!-- Nuxt Image (replaces next/image) -->
      <NuxtImg
        src="/images/section3.jpg"
        alt="About Us Image"
        width="900"
        height="400"
        class="shadow-lg rounded-md"
        format="webp"
        sizes="(max-width: 768px) 100vw, 50vw"
        preload
      />
    </div>

    <!-- Text -->
    <div ref="textRef" class="md:pl-8 w-full md:w-1/2 text-left">
      <h2 class="mb-4 font-semibold text-cyan-950 text-3xl">
        Why Use Infinite Pixel?
      </h2>

      <p class="mb-4 text-gray-700 text-lg">
        We specialize in creating custom websites tailored to your business
        needs. With a focus on responsive design, user experience, and modern
        technologies, our team ensures that every project meets the highest
        standards...
      </p>

      <ul class="space-y-2 mb-10 md:mb-0">
        <li
          v-for="(item, index) in features"
          :key="item"
          class="flex items-start motion-preset-blur-down"
          :style="{ animationDelay: `${index * 120}ms` }"
        >
          <!-- Check icon (no dependency needed) -->
          <svg
            class="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="text-gray-700 text-lg">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
