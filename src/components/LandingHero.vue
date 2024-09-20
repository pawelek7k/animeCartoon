<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const slides = ref<Array<{ img: string; title: string }>>([])

onMounted(() => {
  fetch('/data/hero.json')
    .then((response) => response.json())
    .then((data) => {
      slides.value = data
    })
    .catch((error) => {
      console.error('Error fetching the data:', error)
    })
})
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[Autoplay]"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <section
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(10,12,16,1) 0%, rgba(0,0,0,0.47942927170868344) 100%), url(${slide.img})`
        }"
      >
        <div>
          <div class="outer">
            <div class="dot"></div>
            <div class="card">
              <div class="ray"></div>
              <h1>{{ slide.title }}</h1>
              <div class="line topl"></div>
              <div class="line leftl"></div>
              <div class="line bottoml"></div>
              <div class="line rightl"></div>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

h1 {
  font-weight: bolder;
  font-size: 3rem;
  background: linear-gradient(45deg, var(--primary) 4%, var(--text), var(--secondary));
  background-clip: text;
  color: transparent;
  font-family: 'Trade Winds', system-ui;
}

.outer {
  border-radius: 10px;
  height: 500px;
  padding: 1px;
  position: relative;
}

.dot {
  width: 5px;
  aspect-ratio: 1;
  position: absolute;
  box-shadow: 0 0 10px #ffffff;
  border-radius: 100px;
  z-index: 2;
  right: 10%;
  top: 10%;
  animation: moveDot 6s linear infinite;
}

@keyframes moveDot {
  0%,
  100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
}

.card {
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: solid 1px #202222;
  background-size: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  color: #fff;
}

.ray {
  width: 220px;
  height: 45px;
  border-radius: 100px;
  position: absolute;
  opacity: 0.4;
  box-shadow: 0 0 50px #fff;
  filter: blur(10px);
  transform-origin: 10%;
  top: 0%;
  left: 0;
  transform: rotate(40deg);
}

.line {
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: #2c2c2c;
}

.topl {
  top: 10%;
  background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
}

.bottoml {
  bottom: 10%;
}

.leftl {
  left: 10%;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, #747474 30%, #222424 70%);
}

.rightl {
  right: 10%;
  width: 1px;
  height: 100%;
}
</style>
