<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PrimaryButton from './PrimaryButton.vue'

const isModalVisible = ref(false)

const closeModalAndSetCookie = () => {
  document.cookie = 'privacyPolicyAccepted=true; path=/; max-age=31536000'
  isModalVisible.value = false
}

const checkCookie = () => {
  return document.cookie
    .split(';')
    .some((cookie) => cookie.trim().startsWith('privacyPolicyAccepted='))
}

onMounted(() => {
  if (!checkCookie()) {
    isModalVisible.value = true
  }
})
</script>

<template>
  <div class="overlay" v-if="isModalVisible">
    <div class="container">
      <div><h2>Privacy Policy</h2></div>
      <div>
        <p>
          Your privacy is important to us. Our app collects and processes user data in accordance
          with applicable data protection regulations.
        </p>
      </div>
      <PrimaryButton label="I understand" @click="closeModalAndSetCookie" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  border: thin solid var(--text-accent);
  border-radius: 2rem;
  z-index: 999;
  background-color: var(--primary-bg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  -webkit-box-shadow: 0px 0px 24px 0px rgba(35, 39, 49, 1);
  -moz-box-shadow: 0px 0px 24px 0px rgba(35, 39, 49, 1);
  box-shadow: 0px 0px 24px 0px rgba(35, 39, 49, 1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0a0c10af;
  z-index: 998;
}
</style>
