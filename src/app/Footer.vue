<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

// Font Awesome (Vue)
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

// Register icons locally
library.add(faFacebook, faLinkedin)

const currentYear = ref("")
const footerRef = ref(null)

onMounted(() => {
  currentYear.value = new Date().getFullYear().toString()

  gsap.fromTo(
    footerRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }
  )
})
</script>

<template>
  <footer
    ref="footerRef"
    class="bg-gradient-to-t from-zinc-900 to-zinc-950 px-4 py-8 w-full text-white"
  >
    <div class="flex flex-col items-center space-y-4">
      <p class="font-semibold text-sm text-center tracking-wide">
        © {{ currentYear }} Infinite Pixel Web Design
      </p>

      <p class="text-gray-200 text-sm">Find us on socials</p>

      <div class="flex items-center space-x-6">
        <a
          href="https://www.facebook.com/profile.php?id=61574753346703"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page (opens in a new tab)"
          class="hover:text-blue-400 transition-colors duration-200"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" />
          <span class="sr-only">
            Visit our Facebook page (opens in a new tab)
          </span>
        </a>

        <a
          href="https://www.linkedin.com/company/infinite-pixel-web-design"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn page (opens in a new tab)"
          class="hover:text-blue-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
          <span class="sr-only">
            Visit our LinkedIn page (opens in a new tab)
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
