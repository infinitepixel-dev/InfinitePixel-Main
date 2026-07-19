<script setup>
import { Check, ArrowRight } from "lucide-vue-next"

defineEmits(["close", "new-inquiry"])
</script>

<template>
  <div class="flex flex-col items-center px-2 py-8 text-center">
    <div
      data-success-icon
      class="place-items-center grid bg-mint-400/10 border border-mint-400/25 rounded-full size-20 text-mint-400"
    >
      <Check :size="34" :stroke-width="2.25" />
    </div>

    <p
      class="mt-7 font-semibold text-mint-400 text-xs uppercase tracking-[0.22em]"
    >
      Inquiry received
    </p>

    <h2 class="mt-3 font-semibold text-3xl sm:text-4xl tracking-[-0.045em]">
      Thanks for reaching out.
    </h2>

    <p class="mt-4 max-w-md text-slate-400 leading-7">
      Your project details have been sent to Infinite Pixel. We’ll review your
      inquiry and follow up within one business day.
    </p>

    <div class="flex sm:flex-row flex-col gap-3 mt-8 w-full sm:w-auto">
      <button
        type="button"
        class="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 px-6 py-3.5 rounded-xl font-semibold text-sm transition"
        @click="$emit('close')"
      >
        Return to the site
        <ArrowRight :size="17" />
      </button>

      <button
        type="button"
        class="inline-flex justify-center items-center bg-white/[0.035] hover:bg-white/[0.07] px-6 py-3.5 border border-white/10 hover:border-white/20 rounded-xl font-semibold text-sm transition"
        @click="$emit('new-inquiry')"
      >
        Send another inquiry
      </button>
    </div>
  </div>
</template>
