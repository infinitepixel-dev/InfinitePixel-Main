<script setup>
import { reactive, ref } from "vue"
import { ArrowRight, LoaderCircle } from "lucide-vue-next"
import { submitContactRequest } from "../../composables/useContact"

const emit = defineEmits(["submitted"])

const projectTypes = [
  "Business website",
  "Web application",
  "E-commerce",
  "Branding",
  "UI/UX design",
  "SEO",
  "Maintenance",
  "Other",
]

const budgets = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
]

const timelines = ["ASAP", "Within 30 days", "1–3 months", "Flexible"]

const form = reactive({
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
})

const errors = reactive({})
const submitting = ref(false)
const submitError = ref("")

const clearErrors = () => {
  Object.keys(errors).forEach((key) => delete errors[key])
  submitError.value = ""
}

const validate = () => {
  clearErrors()

  if (!form.name.trim()) errors.name = "Please enter your name."

  if (!form.email.trim()) {
    errors.email = "Please enter your email address."
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Please enter a valid email address."
  }

  if (!form.projectType) errors.projectType = "Choose a project type."
  if (!form.budget) errors.budget = "Choose an estimated budget."
  if (!form.timeline) errors.timeline = "Choose an estimated timeline."

  if (!form.message.trim()) {
    errors.message = "Tell us a little about your project."
  } else if (form.message.trim().length < 20) {
    errors.message = "Please include at least 20 characters."
  }

  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (submitting.value || !validate()) return

  /* Honeypot: bots often fill hidden fields. */
  if (form.website) {
    emit("submitted")
    return
  }

  submitting.value = true

  try {
    await submitContactRequest(form)
    emit("submitted")
  } catch (error) {
    console.error("Unable to submit contact request:", error)
    submitError.value =
      "We couldn’t send your inquiry. Please try again or email info@infinitepixel.dev."
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form novalidate @submit.prevent="submitForm">
    <div class="gap-5 grid sm:grid-cols-2">
      <div>
        <label for="contact-name" class="font-medium text-slate-200 text-sm">
          Your name <span class="text-brand-400">*</span>
        </label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          placeholder="Jane Smith"
          class="bg-white/[0.035] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white placeholder:text-slate-600 transition"
          :aria-invalid="Boolean(errors.name)"
          :aria-describedby="errors.name ? 'contact-name-error' : undefined"
        />
        <p
          v-if="errors.name"
          id="contact-name-error"
          class="mt-2 text-red-300 text-xs"
        >
          {{ errors.name }}
        </p>
      </div>

      <div>
        <label for="contact-email" class="font-medium text-slate-200 text-sm">
          Email address <span class="text-brand-400">*</span>
        </label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          placeholder="jane@company.com"
          class="bg-white/[0.035] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white placeholder:text-slate-600 transition"
          :aria-invalid="Boolean(errors.email)"
          :aria-describedby="errors.email ? 'contact-email-error' : undefined"
        />
        <p
          v-if="errors.email"
          id="contact-email-error"
          class="mt-2 text-red-300 text-xs"
        >
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label for="contact-company" class="font-medium text-slate-200 text-sm">
          Company <span class="text-slate-500">(optional)</span>
        </label>
        <input
          id="contact-company"
          v-model="form.company"
          type="text"
          autocomplete="organization"
          placeholder="Company name"
          class="bg-white/[0.035] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white placeholder:text-slate-600 transition"
        />
      </div>

      <div>
        <label for="contact-project" class="font-medium text-slate-200 text-sm">
          Project type <span class="text-brand-400">*</span>
        </label>
        <select
          id="contact-project"
          v-model="form.projectType"
          class="bg-[#0c121c] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white transition"
          :aria-invalid="Boolean(errors.projectType)"
        >
          <option value="" disabled>Select a project type</option>
          <option v-for="item in projectTypes" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <p v-if="errors.projectType" class="mt-2 text-red-300 text-xs">
          {{ errors.projectType }}
        </p>
      </div>

      <div>
        <label for="contact-budget" class="font-medium text-slate-200 text-sm">
          Estimated budget <span class="text-brand-400">*</span>
        </label>
        <select
          id="contact-budget"
          v-model="form.budget"
          class="bg-[#0c121c] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white transition"
          :aria-invalid="Boolean(errors.budget)"
        >
          <option value="" disabled>Select a budget</option>
          <option v-for="item in budgets" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <p v-if="errors.budget" class="mt-2 text-red-300 text-xs">
          {{ errors.budget }}
        </p>
      </div>

      <div>
        <label
          for="contact-timeline"
          class="font-medium text-slate-200 text-sm"
        >
          Preferred timeline <span class="text-brand-400">*</span>
        </label>
        <select
          id="contact-timeline"
          v-model="form.timeline"
          class="bg-[#0c121c] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white transition"
          :aria-invalid="Boolean(errors.timeline)"
        >
          <option value="" disabled>Select a timeline</option>
          <option v-for="item in timelines" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <p v-if="errors.timeline" class="mt-2 text-red-300 text-xs">
          {{ errors.timeline }}
        </p>
      </div>
    </div>

    <div class="mt-5">
      <label for="contact-message" class="font-medium text-slate-200 text-sm">
        Tell us about your project <span class="text-brand-400">*</span>
      </label>
      <textarea
        id="contact-message"
        v-model="form.message"
        rows="5"
        placeholder="What are you building, what problem should it solve, and what would success look like?"
        class="bg-white/[0.035] mt-2 px-4 py-3.5 border border-white/10 focus:border-brand-400/60 rounded-xl outline-none focus:ring-4 focus:ring-brand-500/10 w-full text-white placeholder:text-slate-600 transition resize-none"
        :aria-invalid="Boolean(errors.message)"
      ></textarea>
      <div class="flex justify-between gap-4 mt-2">
        <p v-if="errors.message" class="text-red-300 text-xs">
          {{ errors.message }}
        </p>
        <p class="ml-auto text-slate-600 text-xs">
          {{ form.message.length }}/2000
        </p>
      </div>
    </div>

    <input
      v-model="form.website"
      type="text"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
      class="hidden"
    />

    <div
      v-if="submitError"
      role="alert"
      class="bg-red-400/10 mt-5 px-4 py-3 border border-red-400/20 rounded-xl text-red-200 text-sm"
    >
      {{ submitError }}
    </div>

    <div class="sm:flex sm:justify-between sm:items-center gap-5 mt-7">
      <p class="max-w-sm text-slate-500 text-xs leading-5">
        By submitting, you agree that Infinite Pixel may contact you about this
        inquiry. Your information is never sold.
      </p>

      <button
        type="submit"
        class="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-60 shadow-[0_16px_45px_rgba(35,136,244,.2)] mt-4 sm:mt-0 px-6 py-3.5 rounded-xl font-semibold text-sm transition disabled:cursor-not-allowed"
        :disabled="submitting"
      >
        <LoaderCircle v-if="submitting" :size="18" class="animate-spin" />
        <ArrowRight v-else :size="17" />
        {{ submitting ? "Sending inquiry..." : "Send project inquiry" }}
      </button>
    </div>
  </form>
</template>
