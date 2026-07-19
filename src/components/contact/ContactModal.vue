<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue"
import { gsap } from "gsap"
import { Mail, X } from "lucide-vue-next"
import ContactForm from "./ContactForm.vue"
import SuccessMessage from "./SuccessMessage.vue"

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["update:modelValue"])

const modalRoot = ref(null)
const modalPanel = ref(null)
const closeButton = ref(null)
const submitted = ref(false)
let previouslyFocused = null

const close = () => {
  emit("update:modelValue", false)
}

const reset = () => {
  submitted.value = false
}

const handleKeydown = (event) => {
  if (!props.modelValue) return

  if (event.key === "Escape") {
    close()
    return
  }

  if (event.key !== "Tab" || !modalPanel.value) return

  const focusable = modalPanel.value.querySelectorAll(
    'button:not([disabled]), a[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )

  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocused = document.activeElement
      document.body.style.overflow = "hidden"
      await nextTick()

      gsap.fromTo(
        modalRoot.value,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" },
      )

      gsap.fromTo(
        modalPanel.value,
        { opacity: 0, y: 28, scale: 0.975 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" },
      )

      closeButton.value?.focus()
      document.addEventListener("keydown", handleKeydown)
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeydown)
      previouslyFocused?.focus?.()
      reset()
    }
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ""
  document.removeEventListener("keydown", handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      ref="modalRoot"
      class="z-[100] fixed inset-0 flex justify-center items-start sm:items-center bg-[#020610]/80 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto"
      role="presentation"
      @mousedown.self="close"
    >
      <section
        ref="modalPanel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        class="relative bg-[#08101c]/95 shadow-[0_40px_140px_rgba(0,0,0,.65)] my-3 sm:my-auto border border-white/10 rounded-[1.75rem] w-full max-w-3xl overflow-hidden"
      >
        <div
          class="-z-10 absolute inset-0 pointer-events-none"
          style="background: radial-gradient(circle at 100% 0%, rgba(35,136,244,.16), transparent 34%), radial-gradient(circle at 0% 100%, rgba(79,209,181,.09), transparent 30%);"
        ></div>

        <button
          ref="closeButton"
          type="button"
          class="top-5 right-5 z-10 absolute place-items-center grid bg-white/[0.045] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 rounded-xl size-11 text-slate-300 hover:text-white transition"
          aria-label="Close project inquiry form"
          @click="close"
        >
          <X :size="20" />
        </button>

        <div class="p-6 sm:p-9">
          <template v-if="!submitted">
            <div class="pr-14">
              <div
                class="place-items-center grid bg-brand-500/10 border border-brand-400/20 rounded-xl size-11 text-brand-400"
              >
                <Mail :size="21" />
              </div>

              <p class="mt-6 font-semibold text-brand-400 text-xs uppercase tracking-[0.22em]">
                Start a project
              </p>

              <h2
                id="contact-modal-title"
                class="mt-3 font-semibold text-3xl sm:text-4xl tracking-[-0.045em]"
              >
                Let’s build something remarkable.
              </h2>

              <p class="mt-4 max-w-2xl text-slate-400 leading-7">
                Tell us what you’re planning, where you are in the process, and
                what success should look like. We’ll respond within one business
                day.
              </p>
            </div>

            <div class="bg-white/[0.018] mt-8 p-5 sm:p-6 border border-white/[0.07] rounded-2xl">
              <ContactForm @submitted="submitted = true" />
            </div>
          </template>

          <SuccessMessage
            v-else
            @close="close"
            @new-inquiry="reset"
          />
        </div>
      </section>
    </div>
  </Teleport>
</template>
