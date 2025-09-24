<template>
  <main id="gallery">
    <header class="page-banner">
      <h1>Gallery</h1>
    </header>

    <section class="container my-5">
      <div class="row g-4 mt-4">
        <div v-for="n in 8" :key="n" class="col-6 col-md-4 col-lg-3">
          <img :src="`/images/${n}.jpeg`" class="gallery-img" :alt="`Look ${n}`" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.gallery-img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 12px;
  background: #fff;
  padding: 6px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.gallery-img:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
</style>