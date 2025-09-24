<template>
  <main>
    <header class="page-banner">
      <h1>Highlights</h1>
    </header>

    <section class="container my-5 highlights-section">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(img,i) in highlightImgs" :key="i">
          <div class="highlight-card h-100 d-flex flex-column align-items-center justify-content-center">
            <img :src="`/images/${img}`" class="highlight-img rounded mb-3" alt="highlight" />
            <p class="small mb-0">{{ descriptions[i] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const highlightImgs = ['highlight1.jpeg','highlight2.jpeg','highlight3.jpeg']
const descriptions = [
  'We use naturally derived dyes to bring soft, earth-toned colorways into every piece.',
  'Every stitch is done by hand in small batches, ensuring precision and individuality.',
  'All Liyawel garments are made with sustainably sourced materials and fair practices.'
]
</script>

<style scoped>
.page-banner {
  background-color: var(--olive);
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
}

.highlights-section {
  padding: 2rem;
}

.highlight-card {
  background-color: var(--light-pink);
  border-radius: 12px;
  padding: 2rem; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.highlight-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
}
</style>