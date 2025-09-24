<template>
  <div id="app" :class="[theme.isDark ? 'dark-mode' : '', textSize.sizeClass]">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <Notification />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Notification from './components/Notification.vue'
import { useThemeStore } from './stores/theme'
import { useTextSizeStore } from './stores/textSize'

const theme = useThemeStore()
const textSize = useTextSizeStore()
</script>

<style>
:root {
  --forest-green: #2e5f3e;      /* deep forest green */
  --olive: #6b8e23;
  --light-pink: #f7e6e6;
  --cream: #fffdf8;
  --text-color: #2f2f2f;
}

body,
#app {
  margin: 0;
  font-family: Georgia, serif;
  color: var(--text-color);
  background: var(--cream);
  transition: background 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content { flex: 1; }

.text-small { font-size: 14px; }
.text-medium { font-size: 16px; }
.text-large { font-size: 18px; }

/* ---------- LIGHT THEME (default) ---------- */
.navbar,
footer,
.banner,
.page-banner {
  background-color: var(--forest-green);
  color: #fff;
}

.navbar .nav-link,
.navbar .navbar-brand {
  color: #fff !important;
}

footer { padding: 1.5rem 0; }

.page-banner {
  padding: 3rem 1rem;
  text-align: center;
}
.page-banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

/* ---------- DARK MODE ---------- */
.dark-mode {
  --cream: #1a1a1a;
  --text-color: #f0f0f0;
  --forest-green: #1f3f2b; /* darker forest tone for dark mode */
  --light-pink: #a86d86;
  background: var(--cream);
  color: var(--text-color);
}

.dark-mode .navbar,
.dark-mode footer,
.dark-mode .banner,
.dark-mode .page-banner {
  background: var(--forest-green) !important;
  color: #fff !important;
}

.dark-mode .form-card {
  background: #2b2b2b;
  color: var(--text-color);
}

.dark-mode input,
.dark-mode textarea,
.dark-mode select {
  background: #333;
  color: var(--text-color);
  border-color: #555;
}

.dark-mode .carousel-caption {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}

/* ---------- Shared Components ---------- */
.form-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .08);
  padding: 24px;
}

.btn-olive {
  background: var(--forest-green);
  color: #fff;
  border: none;
}
.btn-olive:hover { filter: brightness(1.05); }

.container { max-width: 1100px; margin: 0 auto; }

.dark-mode .btn.btn-olive {
  background-color: var(--forest-green) !important;
  color: #fff !important;
  border: none;
}
.dark-mode .btn.btn-olive:hover {
  filter: brightness(1.1);
}
</style>

