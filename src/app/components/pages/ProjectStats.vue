<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const stats = [
  { label: "Projects Completed", value: 14 },
  { label: "States Reached", value: 8 },
  { label: "Countries Delivered", value: 3 },
]

const countersRef = ref([])

onMounted(() => {
  // Register plugin ONLY on client
  gsap.registerPlugin(ScrollTrigger)

  countersRef.value.forEach((el, index) => {
    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        duration: 2,
        innerText: stats[index].value,
        ease: "power1.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          el.innerText = Math.floor(el.innerText)
        },
      }
    )
  })
})
</script>

<template>
  <div class="bg-gray-900 px-4 md:px-12 py-12 w-full text-white">
    <div
      class="gap-8 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl text-center"
    >
      <div v-for="(stat, index) in stats" :key="index">
        <div ref="countersRef" class="font-bold text-blue-500 text-4xl">0</div>

        <p class="mt-2 text-white text-sm uppercase tracking-wide">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </div>
</template>
