<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

const circlesRef = ref([])
const h1Ref = ref(null)
const h6Ref = ref(null)

const supportsAnimation = () => {
  if (process.server) return false
  return window.CSS && CSS.supports("animation", "name")
}

onMounted(() => {
  if (!supportsAnimation()) return

  // Animate background circles (if you add them later)
  circlesRef.value.forEach((circle) => {
    gsap.to(circle, {
      x: "random(-200, 200)",
      y: "random(-200, 200)",
      scale: "random(0.5, 1.5)",
      duration: "random(5, 10)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  })

  if (h1Ref.value && h6Ref.value) {
    gsap.fromTo(
      h1Ref.value,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.7, ease: "power2.in" }
    )

    gsap.fromTo(
      h6Ref.value,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    )
  }
})
</script>

<template>
  <section class="clip-bottom relative w-full h-screen overflow-hidden">
    <!-- Northern Lights Background -->
    <div class="absolute inset-0">
      <div class="bg-gradient-to-b from-black to-gray-900 w-full h-full">
        <div
          role="presentation"
          class="absolute inset-0 bg-gradient-to-r from-[#ededed] via-[#0874f0] to-[#f10ef1] opacity-50 blur-[100px] animate-northern-lights"
        />
      </div>
    </div>

    <div class="z-10 relative flex flex-col justify-center items-center h-full">
      <h1
        ref="h1Ref"
        class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-[6em] text-white md:text-8xl lg:text-9xl text-center siteTitle"
      >
        Infinite Pixel
      </h1>

      <h6
        ref="h6Ref"
        class="px-5 text-white text-2xl md:text-3xl text-center capitalize"
      >
        Affordable custom web design for small businesses
      </h6>
    </div>
  </section>
</template>

<style lang="postcss">
@keyframes northern-lights {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-northern-lights {
  animation: northern-lights 10s ease-in-out infinite;
  background-size: 200% 200%;
}

.clip-bottom {
  clip-path: polygon(0 0, 100% 0, 190% 85%, 0 100%);
}
</style>
