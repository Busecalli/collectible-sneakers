<template>
  <section class="join-us-section">
    <div class="container shadow-container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6 text-content">
          <h2 class="section-title">Why join us</h2>
          <ul class="list-unstyled">
            <li>
              <span class="tick-icon">&#10004;</span> Est et in pharetra magna
              adipiscing ornare aliquam.
            </li>
            <li>
              <span class="tick-icon">&#10004;</span> Tellus arcu sed consequat
              ac velit ut eu blandit.
            </li>
            <li>
              <span class="tick-icon">&#10004;</span> Ullamcorper ornare in et
              egestas dolor orci.
            </li>
          </ul>
          <a href="#" class="button-link">Sign Up Now</a>
        </div>

        <div class="col-md-6 image-container">
          <div class="position-relative">
            <img
              src="../assets/images/section3/deco-video.png"
              alt="Decorative Background"
              class="deco-image"
            />
            <img
              src="../assets/images/section3/desktop.png"
              alt="Video Image"
              class="video-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "join-section",
});
</script>

<style scoped>
.join-us-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;
  background-color: #fefdf8;
}

.shadow-container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001a;
  padding: 40px 80px;
}

.section-title {
  font-family: "Roboto", sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 61.6px;
  color: #0f172a;
  margin-bottom: 24px;
}

ul {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: #0f172a;
  margin: 0;
  padding: 0;
}

ul li {
  margin-bottom: 8px;
}

.tick-icon {
  color: green;
  font-size: 20px;
  margin-right: 10px;
}

.button-link {
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: #78350f;
  border: 2px solid #78350f;
  border-radius: 8px;
  padding: 12px 24px;
  display: inline-block;
  margin-top: 24px;
  transition: all 0.2s ease;
  text-align: center;
  z-index: 4;
}

.button-link:hover {
  background-color: #78350f;
  color: #fff;
}

.image-container {
  position: relative;
  text-align: center;
}

.deco-image {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1;
  width: 100%;
}

.video-image {
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .join-us-section {
    padding: 15px;
    margin-bottom: 50px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 35.2px;
    text-align: center;
    margin-bottom: 24px;
  }

  ul {
    font-size: 16px;
    line-height: 28px;
  }

  ul li {
    margin-bottom: 8px;
  }

  .button-link {
    display: block;
    width: 179px;
    height: 56px;
    margin: 24px auto;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid #78350f;
    opacity: 1;
    z-index: 4;
    position: relative;
  }

  .button-link:hover {
    background-color: #78350f;
    color: #fff;
    border-color: #78350f;
  }

  .image-container {
    position: relative;
    text-align: center;
    height: 100%;
  }

  .deco-image {
    width: 165%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .video-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    position: relative;
    z-index: 2;
  }
}
</style>
