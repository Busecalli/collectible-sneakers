<template>
  <div class="footer">
    <div class="container">
      <footer class="py-5">
        <div class="row gy-4">
          <div class="col-12 col-md-3">
            <h5 class="footer-subtitle mb-3">Product</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Pricing</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Overview</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Browse</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Accessibility</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Five</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3">
            <h5 class="footer-subtitle mb-3">Solutions</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Brainstorming</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Ideation</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Wireframing</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Research</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Design</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3">
            <h5 class="footer-subtitle mb-3">Support</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Contact Us</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Developers</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Documentation</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Integrations</a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="footer-menu-item">Reports</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3 d-flex flex-column">
            <div>
              <h5 class="footer-subtitle mb-3">Get the App</h5>
              <div class="app-links">
                <img src="../assets/images/appStore.png" alt="App Store" />
                <img src="../assets/images/googlePlay.png" alt="Google Play" />
              </div>
            </div>
            <div class="mt-auto">
              <h5 class="footer-subtitle mt-4 mb-3">Follow Us</h5>
              <div class="social-links d-flex gap-16">
                <img
                  src="../assets/images/icons/youtube.png"
                  alt="Facebook"
                  class="social-icon"
                />
                <img
                  src="../assets/images/icons/facebook.png"
                  alt="Twitter"
                  class="social-icon"
                />
                <img
                  src="../assets/images/icons/twitter.png"
                  alt="Twitter"
                  class="social-icon"
                />
                <img
                  src="../assets/images/icons/instagram.png"
                  alt="Instagram"
                  class="social-icon"
                />
                <img
                  src="../assets/images/icons/linkedin.png"
                  alt="Facebook"
                  class="social-icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="footer-bottom d-flex justify-content-between align-items-center mt-4 pt-4"
        >
          <p class="mb-0">Collers @ 2023. All rights reserved.</p>
          <div class="d-flex">
            <a href="#" class="footer-bottom-link">Terms</a>
            <a href="#" class="footer-bottom-link">Privacy</a>
            <a href="#" class="footer-bottom-link">Contact</a>
            <div class="d-flex align-items-center gap-2">
              <img
                src="../assets/images/icons/world.png"
                alt="World"
                class="globe-icon"
              />
              <span>EN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer-section",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.footer {
  background-color: #0f172a;
  color: #fff;
}

.footer-subtitle {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 17.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #fff;
}

.footer-menu-item {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  text-decoration: none;
  color: #e2e8f0;
}

.footer-menu-item:hover {
  color: #fff;
}

.app-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.app-links img {
  display: block;
  width: auto;
  height: auto;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.gap-16 {
  gap: 16px;
}

.footer-bottom {
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #334155;
}
.footer-bottom-link {
  font-family: "Roboto", sans-serif;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 4px 12px 4px 12px;
}

.footer-bottom-link:hover {
  color: #fff;
}

.globe-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 767px) {
  .row {
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  .col-12 {
    width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .app-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-bottom: 24px;
  }

  .social-links {
    justify-content: center;
  }

  .footer-subtitle {
    text-align: center;
  }
}
</style>
