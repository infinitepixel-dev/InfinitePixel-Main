<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Update path to your Vue Review card
// import Review from "@/components/cards/Review.vue"

const sectionRef = ref(null)
const headingRef = ref(null)
const textRef1 = ref(null)
const textRef2 = ref(null)

onMounted(() => {
  // GSAP must only run on client
  gsap.registerPlugin(ScrollTrigger)

  const sectionEl = sectionRef.value
  const headingEl = headingRef.value
  const textEl1 = textRef1.value
  const textEl2 = textRef2.value

  if (!sectionEl || !headingEl || !textEl1 || !textEl2) return

  gsap.fromTo(
    sectionEl,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  gsap.fromTo(
    headingEl,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingEl,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  gsap.fromTo(
    textEl1,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textEl1,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  gsap.fromTo(
    textEl2,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textEl2,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    },
  )
})
</script>

<template>
  <section ref="sectionRef" class="relative bg-white text-sky-950 inter-para-regular">
    <div class="mx-auto max-w-6xl text-center">
      <h2 ref="headingRef" class="sm:mb-2 md:mb-8 p-8 font-extrabold text-4xl md:text-5xl">
        Professional Websites, Affordable Prices
      </h2>

      <h3 class="sm:mb-2 md:mb-8 px-8 font-medium text-xl md:text-2xl">
        At <span>Infinite Pixel</span>, we specialize in creating custom websites tailored to the
        unique needs of small businesses. Our experienced designers offer professional services you
        can trust.
      </h3>

      <div
        class="gap-8 grid grid-cols-1 md:grid-cols-6 p-4 md:p-8 font-normal text-blue-950 text-left leading-relaxed"
      >
        <div class="items-start md:col-span-3 col-start-1 mt-8">
          <Review />
        </div>

        <div class="justify-center items-center grid grid-rows-2 md:col-span-3 pb-5">
          <p ref="textRef1">
            We understand the challenges small businesses face, which is why we're committed to
            delivering clean, functional websites that are affordable without compromising on
            quality. Whether you're building your online presence for the first time or improving an
            existing one,
            <strong> Infinite Pixel</strong> has you covered.
          </p>

          <span class="border-yellow-600 border-t-2"></span>

          <p ref="textRef2">
            Our experienced team crafts high-performance websites with a focus on usability and
            modern design. We collaborate closely with you to create a site that authentically
            represents your brand and drives your business forward.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
