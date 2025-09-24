<template>
  <main>
    <header class="banner text-center">
      <div class="container mb-4">
        <h1>Liyawel</h1>
        <p>Discover garments woven with the delicate essence of Sri Lankan craft</p>
      </div>
    </header>

    <section class="hero-carousel">
      <div id="trendCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/linen.jpeg" class="d-block w-100" alt="Handwoven Linen">
            <div class="carousel-caption d-none d-md-block">
              <h3>Handwoven Linen</h3>
              <p>Inspiration: Coastal Sri Lanka</p>
              <p>★★★★★</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/botanical.jpeg" class="d-block w-100" alt="Botanical Prints">
            <div class="carousel-caption d-none d-md-block">
              <h3>Botanical Prints</h3>
              <p>Inspiration: Temple Gardens</p>
              <p>★★★★★</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/lace.jpeg" class="d-block w-100" alt="Antique Lace">
            <div class="carousel-caption d-none d-md-block">
              <h3>Antique Lace Accents</h3>
              <p>Inspiration: Colonial Heritage</p>
              <p>★★★★★</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#trendCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#trendCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>

    <section class="container my-5 section-light">
      <h2 class="h4 mb-3">About Liyawel</h2>
      <p class="mb-0">
        Vintage elegance, slow fashion values, and artisan techniques define our collections.
        Each piece is crafted with care using natural fibers and considered silhouettes.
      </p>
    </section>
  </main>
</template>

<script setup>
</script>

<style>
.banner {
  background-color: var(--olive);
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
}

.hero-carousel {
  width: 100%;
}

.hero-carousel img {
  height: 50vh;
  object-fit: cover;
  filter: brightness(0.85);
}

.section-light {
  background-color: var(--light-pink);
  border-radius: 8px;
  padding: 1.5rem;
}

.carousel-caption {
  background: rgba(247, 230, 230, 0.83);
  color: #2f2f2f;
  border-radius: 10px;
  padding: 1rem;
}
</style>