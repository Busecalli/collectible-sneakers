<template>
  <section
    class="testimonial-section d-flex align-items-center justify-content-center"
  >
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="section-title text-center text-md-start w-100 w-md-auto">
          Because they love us
        </h2>
        <div class="btn-group d-none d-md-flex align-items-center">
          <button class="btn" @click="scrollPrev">
            <img src="/section4/buttons/previous.png" alt="Previous" />
          </button>
          <button class="btn" @click="scrollNext">
            <img src="/section4/buttons/continue.png" alt="Next" />
          </button>
        </div>
      </div>

      <div class="bg-highlight py-4 px-3">
        <div ref="cardContainer" class="card-container d-flex gap-4">
          <div
            class="card testimonial-card"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="d-flex align-items-center">
              <img :src="card.icon" alt="icon" class="me-2" />
              <h5 class="card-title mb-0">{{ card.title }}</h5>
            </div>
            <p class="card-description">{{ card.description }}</p>
            <div class="d-flex align-items-center">
              <img :src="card.avatar" alt="avatar" class="avatar me-2" />
              <div class="card-profile">
                <strong class="card-name">{{ card.name }}</strong>
                <small class="card-position d-block">{{ card.position }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "testimonial-section",
  data() {
    return {
      cards: [
        {
          icon: "/section4/vectors/4.png",
          title: "Zoomerr",
          description:
            "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
          avatar: "/section4/users/4.png",
          name: "Hellen Jummy",
          position: "Team Lead",
        },
        {
          icon: "/section4/vectors/1.png",
          title: "SHELLS",
          description:
            "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
          avatar: "/section4/users/1.png",
          name: "Hellena John",
          position: "Co-founder",
        },
        {
          icon: "/section4/vectors/3.png",
          title: "ArtVenue",
          description:
            "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
          avatar: "/section4/users/2.png",
          name: "David Oshodi",
          position: "Manager",
        },
        {
          icon: "/section4/vectors/2.png",
          title: "WAVES",
          description:
            "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
          avatar: "/section4/users/3.png",
          name: "David Oshodi",
          position: "Manager",
        },
        {
          icon: "/section4/vectors/2.png",
          title: "WAVES",
          description:
            "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
          avatar: "/section4/users/3.png",
          name: "David Oshodi",
          position: "Manager",
        },
      ],
    };
  },
  methods: {
    scrollNext() {
      const container = this.$refs.cardContainer as HTMLDivElement;
      container.scrollBy({ left: 400, behavior: "smooth" });
    },
    scrollPrev() {
      const container = this.$refs.cardContainer as HTMLDivElement;
      container.scrollBy({ left: -400, behavior: "smooth" });
    },
  },
});
</script>

<style scoped>
.testimonial-section {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
}

.section-title {
  font-weight: 800;
  font-size: 56px;
  line-height: 61.6px;
  text-align: left;
}

.bg-highlight {
  background-color: #fde68a;
  height: 421px;
  position: relative;
  overflow: visible; 
}

.card-container {
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
}

.card-container::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  flex: 0 0 384px;
  height: 430px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001a;
  padding: 1.5rem;
  scroll-snap-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-description {
  font-weight: 400;
  font-size: 24px;
  line-height: 38.4px;
  margin-bottom: 5px;
  color: #000;
}

.card-profile {
  margin-left: 10px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.card-name {
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: left;
}

.card-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  text-align: left;
  color: #475569;
  padding-top: 16px;
  padding-bottom: 16px;
}

.card-position {
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: #475569;
}

@media (max-width: 768px) {
  .testimonial-section {
    text-align: center;
    min-height: 650px;
  }

  .testimonial-card {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .section-title {
    font-size: 36px;
    line-height: 42px;
    margin: 0px;
  }

  .card-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  }
}
</style>
