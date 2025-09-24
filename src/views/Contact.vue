<template>
  <main>
    <header class="page-banner">
      <h1>Contact / Query</h1>
    </header>

    <section class="container my-5 contact-section">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <ContactForm :initial-name="initialName" @form-submitted="handleSubmission" />

          <div v-if="submittedData" class="mt-4 p-3 rounded bg-light">
            <h2 class="h5 fw-bold">Thank you, {{ submittedData.name }}!</h2>
            <ul class="mb-0 small">
              <li><strong>Email:</strong> {{ submittedData.email }}</li>
              <li><strong>Phone:</strong> {{ submittedData.phone }}</li>
              <li><strong>Age:</strong> {{ submittedData.age }}</li>
              <li><strong>Topic:</strong> {{ submittedData.topic }}</li>
              <li><strong>Preference:</strong> {{ submittedData.preference }}</li>
              <li><strong>Newsletter:</strong> {{ submittedData.newsletter ? 'Yes' : 'No' }}</li>
              <li><strong>Message:</strong> {{ submittedData.message }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import { useFeedbackStore } from '../stores/feedback'

const initialName = 'Default Name'
const submittedData = ref(null)
const feedback = useFeedbackStore()

function handleSubmission(data) {
  submittedData.value = data
  feedback.submit(data.message || '')
}
</script>

<style scoped>
.page-banner {
  background-color: var(--olive);
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
}
.contact-section {
  background-color: var(--light-pink);
  border-radius: 8px;
  padding: 2rem;
}
</style>