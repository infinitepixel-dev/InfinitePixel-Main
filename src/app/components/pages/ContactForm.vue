<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* ------------------------
   ENV
------------------------ */
const emailEndpoint = import.meta.env.VITE_FORM_EMAIL

/* ------------------------
   STATE
------------------------ */
const formRef = ref(null)

const formData = reactive({
  company: "",
  firstName: "",
  lastName: "",
  email: "",
  message: "",
})

const errors = reactive({})
const submitting = ref(false)
const showThankYou = ref(false)

const maxMessageLength = 800

/* ------------------------
   COMPUTED
------------------------ */
const messageLengthClass = computed(() => {
  const len = formData.message.length
  if (len >= maxMessageLength) return "text-red-800"
  if (len >= maxMessageLength - 20) return "text-orange-600"
  return "text-slate-600 font-semibold"
})

/* ------------------------
   VALIDATION
------------------------ */
const validateForm = () => {
  Object.keys(errors).forEach((k) => delete errors[k])

  if (!formData.firstName.trim()) errors.firstName = "First name is required"
  if (!formData.lastName.trim()) errors.lastName = "Last name is required"
  if (!formData.message.trim()) errors.message = "Message is required"

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = "Email is required"
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = "Invalid email format"
  }

  const spammyPatterns = ["@tempmail", "@10minutemail", "@mailinator"]
  if (spammyPatterns.some((p) => formData.email.toLowerCase().includes(p))) {
    errors.email = "Please use a real email address"
  }

  return Object.keys(errors).length === 0
}

/* ------------------------
   SUBMIT
------------------------ */
const handleSubmit = async () => {
  submitting.value = true

  if (!validateForm()) {
    submitting.value = false
    return
  }

  const payload = new FormData()
  Object.entries(formData).forEach(([key, value]) => {
    payload.append(key, value)
  })

  payload.append("_template", "table")
  payload.append("_subject", "New Contact Submission")
  payload.append("_captcha", "false")

  try {
    const response = await fetch(emailEndpoint, {
      method: "POST",
      body: payload,
    })

    if (response.ok) {
      showThankYou.value = true
      Object.keys(formData).forEach((k) => (formData[k] = ""))
      Object.keys(errors).forEach((k) => delete errors[k])
    } else {
      alert("There was a problem submitting the form.")
    }
  } catch (err) {
    console.error("Form submission error:", err)
  } finally {
    submitting.value = false
  }
}

/* ------------------------
   GSAP
------------------------ */
let ctx

onMounted(() => {
  if (!process.client) return

  ctx = gsap.context(() => {
    const heading = document.querySelector(".heading")
    const subheading = document.querySelector(".subheading")
    const button = document.querySelector(".btn-animate")

    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: -150 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      )
    }

    if (subheading) {
      gsap.fromTo(
        subheading,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.in",
          scrollTrigger: {
            trigger: subheading,
            start: "top 80%",
          },
        }
      )
    }

    if (button) {
      gsap.fromTo(
        button,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.in",
          scrollTrigger: {
            trigger: button,
            start: "top 80%",
          },
        }
      )

      const hover = () => {
        gsap.fromTo(
          button,
          { scale: 1 },
          {
            scale: 1.08,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.out",
          }
        )
      }

      button.addEventListener("mouseenter", hover)

      onBeforeUnmount(() => {
        button.removeEventListener("mouseenter", hover)
      })
    }
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- HEADER -->
    <div class="flex flex-col items-center gap-4 bg-blue-600">
      <h2
        class="p-4 font-bold text-slate-50 text-4xl lg:text-6xl text-center heading"
      >
        Have a Question or a Project in Mind?
      </h2>

      <p
        class="p-5 max-w-screen-md text-slate-100 text-xl text-center subheading"
      >
        We'd love to hear from you! Drop us a message and we'll get back to you.
      </p>
    </div>

    <!-- FORM -->
    <div
      id="contact-form"
      class="flex justify-center bg-gradient-to-b from-blue-600 to-blue-950 p-4 md:p-20 w-full"
    >
      <form
        ref="formRef"
        @submit.prevent="handleSubmit"
        class="space-y-6 bg-slate-100 shadow-lg p-6 rounded-lg w-full max-w-screen-md"
      >
        <div>
          <label class="block font-medium text-sky-950">Company</label>
          <input v-model="formData.company" class="input" />
        </div>

        <div>
          <label class="block font-medium text-sky-950">First Name *</label>
          <input v-model="formData.firstName" class="input" />
          <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
        </div>

        <div>
          <label class="block font-medium text-sky-950">Last Name *</label>
          <input v-model="formData.lastName" class="input" />
          <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
        </div>

        <div>
          <label class="block font-medium text-sky-950">Email *</label>
          <input type="email" v-model="formData.email" class="input" />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <div>
          <label class="block font-medium text-sky-950">Message *</label>
          <textarea
            v-model="formData.message"
            :maxlength="maxMessageLength"
            rows="4"
            class="input"
          />
          <div class="text-sm text-right" :class="messageLengthClass">
            {{ formData.message.length }}/{{ maxMessageLength }}
          </div>
          <p v-if="errors.message" class="error">{{ errors.message }}</p>
        </div>

        <button
          type="submit"
          :disabled="submitting"
          class="bg-gradient-to-br from-zinc-800 to-zinc-900 py-3 rounded-full w-full font-semibold text-white text-lg btn-animate"
        >
          {{ submitting ? "Submitting..." : "Submit" }}
        </button>
      </form>
    </div>

    <!-- THANK YOU MODAL -->
    <div
      v-if="showThankYou"
      class="z-50 fixed inset-0 flex justify-center items-center bg-black/50"
    >
      <div class="bg-white shadow-lg p-8 rounded-lg text-center">
        <h2 class="mb-4 font-bold text-green-600 text-2xl">Thank You!</h2>
        <p>Your message has been submitted successfully.</p>
        <button
          class="bg-blue-600 mt-6 px-4 py-2 rounded text-white"
          @click="showThankYou = false"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
<input
  v-model="formData.firstName"
  class="block mt-1 p-3 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
/>
</style>
