<template>
  <header class="header">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <nav class="navbar navbar-expand-sm w-100"> 
          <a class="logo text-decoration-none fw-bold text-brown">Collers</a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse ms-auto" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-0 d-flex align-items-center list-unstyled">
              <li class="nav-item">
                <a class="nav-link text-brown px-3 py-2" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-brown px-3 py-2" href="#">Solutions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-brown px-3 py-2" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-brown px-3 py-2" href="#">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-brown px-3 py-2" href="#">Log In</a>
              </li>
              <li class="nav-item">
                <a href="#" class="button-link btn btn-outline-brown text-brown px-4 py-2 rounded-3">Sign up now</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header-section",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.header {
  background-color: #fff8e5;
}

.logo {
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 35.2px;
  text-decoration: none;
  color: #78350f;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #78350f;
  padding: 12px 8px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #5a2e0d;
}

.button-link {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: #78350f;
  border: 2px solid #78350f;
  border-radius: 8px;
  padding: 12px;
  width: 149px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}

.button-link:hover {
  background-color: #78350f;
  color: #fff;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .logo {
    font-size: 28px;
  }

  .navbar-nav {
    gap: 12px;
  }

  .nav-link {
    font-size: 15px;
  }
}
</style>
