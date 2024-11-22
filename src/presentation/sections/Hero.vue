<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-top row justify-content-center align-items-center">
        <div class="col-md-7 col-sm-12">
          <h1 class="hero-title text-align-left">Collectible Sneakers</h1>
          <p class="hero-description">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div class="hero-buttons d-flex align-items-center">
            <a href="#" class="button-link">Sign up now</a>
            <img
              class="watch-demo-icon"
              src="../assets/images/svg/vector.svg"
              alt="Watch demo"
            />
            <a href="#" class="watch-demo-text d-flex align-items-center">
              Watch Demo
            </a>
          </div>
        </div>
        <div
          class="col-md-5 col-sm-12 up-hero-right justify-content-center align-items-center"
        >
          <div class="hero-image-background"></div>
          <div class="hero-image w-100">
            <img
              src="../assets/images/shoes.png"
              alt="Sneaker"
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <div class="hero-bottom">
        <div class="feature-cards d-flex justify-content-center flex-wrap">
          <div class="feature-card text-left">
            <div class="icon mb-3">
              <img
                src="../assets/images/Icon.png"
                alt="Trophy Icon"
                class="icon-image"
              />
            </div>
            <h3>Nibh viverra</h3>
            <p class="feature-description">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div class="feature-card text-left">
            <div class="icon mb-3">
              <img
                src="../assets/images/Icon3.png"
                alt="Mountain Icon"
                class="icon-image"
              />
            </div>
            <h3>Cursus amet</h3>
            <p class="feature-description">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div class="feature-card text-left">
            <div class="icon mb-3">
              <img
                src="../assets/images/Icon2.png"
                alt="TV Icon"
                class="icon-image"
              />
            </div>
            <h3>Ipsum fermentum</h3>
            <p class="feature-description">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-bottom: 60px;
  background-color: #fff8e5;
  background: linear-gradient(155deg, #fffbec 55%, #fef3c7 45%);
}

.up-hero-right {
  display: flex;
  position: relative;
}

.hero-content {
  display: flex;
  gap: 40px;
}

.hero-top {
  height: 583px;
  display: flex;
}

.hero-bottom {
  margin-top: 40px;
}

.text-content {
  max-width: 50%;
}

.hero-title {
  font-family: "Roboto";
  font-size: 72px;
  font-weight: 800;
  line-height: 79.2px;
  color: #000;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.hero-description {
  margin: 16px 0;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  color: #0f172a;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.hero-buttons .button-link {
  background: none;
  border: 2px solid #78350f;
  border-radius: 8px;
  padding: 10px 20px;
  color: #804000;
  text-decoration: none;
  font-weight: 500;
  margin-right: 16px;
  font-size: 20px;
}

.hero-buttons .button-link:hover {
  background-color: #78350f;
  color: #fff;
}

.hero-buttons .watch-demo-text {
  color: #804000;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  padding: 0px 8px 0px 8px;
}

.hero-buttons .icon-play {
  margin-right: 8px;
}

.hero-image-background {
  background-color: #fbbf24;
  border-radius: 50px;
  width: 70%;
  height: auto;
  position: absolute;
  z-index: 0;
  aspect-ratio: 1;
}

.hero-image {
  z-index: 1;
  position: relative;
}

.hero-image img {
  max-width: 100%;
  display: block;
}

.feature-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15%;
}

.feature-card {
  text-align: left;
  max-width: 300px;
  margin-bottom: 20px;
}

.icon-image {
  width: 64px;
  height: auto;
}

.feature-description {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: left;
  text-decoration-skip-ink: none;
  color: #0f172a;
  padding-top: 14px;
}

.feature-card .icon {
  font-size: 32px;
  margin-bottom: 16px;
  color: #804000;
}

.feature-card h3 {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

@media (max-width: 767px) {
  .hero-section {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .hero-bottom {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .hero-title {
    font-size: 56px;
    font-weight: 800;
    line-height: 61.6px;
    text-align: center;
  }

  .hero-description {
    font-size: 18px;
    line-height: 28.8px;
    text-align: center;
  }

  .hero-buttons {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }

  .hero-buttons .button-link {
    font-size: 18px;
  }

  .hero-buttons .watch-demo-text {
    font-size: 14px;
  }

  .up-hero-right {
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 250px;
  }

  .feature-card .icon {
    margin-bottom: 8px;
    text-align: center;
  }

  .feature-card .icon-image {
    width: 64px;
    height: auto;
  }

  .hero-image-background {
    width: 50%;
    aspect-ratio: 1;
  }

  .hero-image img {
    max-width: 80%;
    height: auto;
    margin: 0 auto;
  }

  .feature-card h3 {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }

  .feature-card .feature-description {
    text-align: center;
  }

  .feature-cards {
    gap: 20px;
    justify-content: center;
  }
}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hero-section",
  setup() {
    return {};
  },
});
</script>
