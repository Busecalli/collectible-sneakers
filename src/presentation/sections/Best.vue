<template>
  <section class="best-of-the-best py-5">
    <div class="container">
      <div class="row justify-content-between align-items-center mb-5">
        <div class="col-12 col-md-auto">
          <h2 class="best-title">The best of the best</h2>
        </div>
        <div class="col-12 col-md-auto">
          <button class="btn-sign-up">Sign up now</button>
        </div>
      </div>

      <div class="row g-4">
        <div
          class="col-lg-4 col-md-6"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="card shadow-card">
            <img :src="product.image" class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">{{ product.title }}</h6>
              <p class="card-description">{{ product.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <button class="btn-buy-now">
                <img
                  src="../assets/images/icons/shopping-cart.png"
                  alt="Icon"
                  class="icon"
                />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "best-section",
  setup() {
    const products = ref([
      {
        title: "Title",
        description:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "/section2/1.jpg",
      },
      {
        title: "Title",
        description:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "/section2/2.jpg",
      },
      {
        title: "Title",
        description:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "/section2/3.jpg",
      },
    ]);

    return {
      products,
    };
  },
});
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";

.best-of-the-best {
  background-color: #0f172a;
  color: white;
}

.best-title {
  font-family: "Roboto", sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 61.6px;
  text-align: left;
  color: white;
}

.btn-sign-up {
  background: none;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: 0.3s ease;
}

.btn-sign-up:hover {
  background-color: white;
  color: black;
}

.card {
  background-color: #0f172a;
  border-radius: 10px;
  border: 1px solid #0f172a;
}

.card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-body {
  padding: 32px;
}

.card-title {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 26.4px;
  color: white;
}

.card-description {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  color: white;
}

.btn-buy-now {
  width: 330.67px;
  height: 56px;
  margin: 16px auto;
  border-radius: 8px;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s ease;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.shadow-card {
  box-shadow: 0px 25px 50px -12px #ffffff40;
}

@media (max-width: 768px) {
  .best-title {
    font-size: 32px;
    line-height: 35.2px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
    width: 100%;
    font-weight: 700;
  }

  .btn-sign-up {
    display: block;
    width: 200px;
    margin: 20px auto 0;
    padding: 16px;
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
  }

  .card {
    margin-bottom: 30px;
  }

  .card-img-top {
    height: 200px;
  }

  .btn-buy-now {
    width: 100%;
    font-size: 18px;
  }
}
</style>
