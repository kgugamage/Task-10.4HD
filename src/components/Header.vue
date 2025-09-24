<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-olive">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Liyawel</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/gallery">Gallery</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/highlights">Highlights</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-light btn-sm" @click="theme.toggle()">
            {{ theme.isDark ? 'Light' : 'Dark' }} mode
          </button>

          <div class="btn-group">
            <button class="btn btn-outline-light btn-sm" @click="text.setSize('small')">A-</button>
            <button class="btn btn-outline-light btn-sm" @click="text.setSize('medium')">A</button>
            <button class="btn btn-outline-light btn-sm" @click="text.setSize('large')">A+</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'
import { useTextSizeStore } from '../stores/textSize'
const theme = useThemeStore()
const text = useTextSizeStore()
</script>

<style scoped>
.bg-olive { background-color: var(--olive) !important; }
</style>