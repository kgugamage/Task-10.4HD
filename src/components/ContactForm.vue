<template>
  <div class="form-card">
    <form @submit.prevent="submitForm" class="row g-3" novalidate>
      <div class="col-md-6">
        <label class="form-label">Full Name</label>
        <input v-model="form.name" type="text" class="form-control" required />
        <div v-if="errors.name" class="text-danger small">{{ errors.name }}</div>
      </div>

      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control" required />
        <div v-if="errors.email" class="text-danger small">{{ errors.email }}</div>
      </div>

      <div class="col-md-6">
        <label class="form-label">Phone</label>
        <input v-model="form.phone" type="tel" pattern="[0-9]{10}" class="form-control" placeholder="10 digits" />
        <div v-if="errors.phone" class="text-danger small">{{ errors.phone }}</div>
      </div>

      <div class="col-md-6">
        <label class="form-label">Age</label>
        <input v-model.number="form.age" type="number" min="1" class="form-control" />
        <div v-if="errors.age" class="text-danger small">{{ errors.age }}</div>
      </div>

      <div class="col-12">
        <label class="form-label d-block">Preferred Contact</label>
        <div class="form-check form-check-inline">
          <input v-model="form.preference" type="radio" value="Email" class="form-check-input" />
          <label class="form-check-label">Email</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="form.preference" type="radio" value="Phone" class="form-check-input" />
          <label class="form-check-label">Phone</label>
        </div>
        <div v-if="errors.preference" class="text-danger small">{{ errors.preference }}</div>
      </div>

      <div class="col-md-6">
        <label class="form-label">Topic</label>
        <select v-model="form.topic" class="form-select">
          <option value="">Choose...</option>
          <option v-for="opt in topics" :key="opt">{{ opt }}</option>
        </select>
        <div v-if="errors.topic" class="text-danger small">{{ errors.topic }}</div>
      </div>

      <div class="col-12">
        <label class="form-label">Message</label>
        <textarea v-model="form.message" rows="4" class="form-control"></textarea>
        <div v-if="errors.message" class="text-danger small">{{ errors.message }}</div>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input v-model="form.newsletter" type="checkbox" class="form-check-input" id="newsletter" />
          <label class="form-check-label" for="newsletter">Subscribe to our slow-fashion newsletter</label>
        </div>
      </div>

      <div class="col-12 text-center">
        <button class="btn btn-olive btn-lg" type="submit">Send Message</button>
        <div v-if="success" class="text-success mt-2">Form submitted successfully!</div>
      </div>

      <div v-if="sentCopy" class="col-12 mt-3">
        <pre>{{ sentCopy }}</pre>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ initialName: { type: String, default: 'Default Name' } })
const emit = defineEmits(['form-submitted'])

const topics = ["Order enquiry", "Product question", "Returns & exchanges", "Wholesale"]

const form = ref({
  name: props.initialName,
  email: '',
  phone: '',
  age: null,
  preference: '',
  topic: '',
  message: '',
  newsletter: false
})

const errors = ref({})
const success = ref(false)
const sentCopy = ref(null)

function validate() {
  errors.value = {}
  if (!form.value.name) errors.value.name = 'Name required'
  if (!form.value.email) errors.value.email = 'Email required'
  if (!form.value.phone) errors.value.phone = 'Phone required'
  if (!form.value.age || form.value.age <= 0) errors.value.age = 'Valid age required'
  if (!form.value.preference) errors.value.preference = 'Choose a contact method'
  if (!form.value.topic) errors.value.topic = 'Please select a topic'
  if (!form.value.message) errors.value.message = 'Message required'
  return Object.keys(errors.value).length === 0
}

function submitForm() {
  if (!validate()) return
  const payload = { ...form.value }
  emit('form-submitted', payload) 
  sentCopy.value = payload       
  success.value = true

  setTimeout(() => {
    form.value = {
      name: props.initialName,
      email: '',
      phone: '',
      age: null,
      preference: '',
      topic: '',
      message: '',
      newsletter: false
    }
    success.value = false
    sentCopy.value = null
  }, 2000)
}
</script>