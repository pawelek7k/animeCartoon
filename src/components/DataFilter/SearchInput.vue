<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const router = useRouter()
</script>

<template>
  <div>
    <div class="form-control">
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f3ebe9df"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input class="input input-alt" placeholder="Search anime!" type="text" />
      <span class="input-border input-border-alt"></span>
    </div>
  </div>
</template>

<style scoped>
.icon-container {
  display: flex;
  align-items: center;
}
.form-control {
  display: flex;
}
.input {
  color: #fff;
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-border {
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: width 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.input:focus {
  outline: none;
}

.input:focus + .input-border {
  width: 100%;
}

.form-control {
  position: relative;
  --width-of-input: 300px;
}

.input-alt {
  font-size: 1.2rem;
  padding-inline: 1em;
  padding-block: 0.8em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-border-alt {
  height: 3px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
  transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}

.input-alt:focus + .input-border-alt {
  width: 100%;
}

.data-filter-content.is-closed .input-alt {
  padding-inline: 0em;
  padding-block: 0.8em 0em;
}
</style>
