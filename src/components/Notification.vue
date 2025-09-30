<template>
  <div v-if="feedback.submitted" class="fixed-bottom p-3" style="z-index:1050;">
    <div class="toast show align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
         <strong>Feedback submitted:</strong> {{ feedback.message }}
        </div>
        <button type="button" class="btn-close me-2 m-auto" @click="feedback.reset()"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFeedbackStore } from '../stores/feedback'
const feedback = useFeedbackStore()
</script>