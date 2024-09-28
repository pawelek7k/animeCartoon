<script setup lang="ts"></script>

<template>
  <footer>
    <div>
      <h3>Navigation</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li>Youtube</li>
        <li>Facebook</li>
        <li>X</li>
        <li>Instagram</li>
      </ul>
    </div>
    <div>
      <h3>AnimeCartoon</h3>
      <ul>
        <li>Help</li>
        <li>Privacy Policy</li>
        <li>Help Center</li>
      </ul>
    </div>
    <div>
      <h3>Account</h3>
      <ul>
        <li>Log in</li>
        <li>Create Account</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 30vh;
  background: linear-gradient(0deg, rgba(142, 43, 23, 1) 0%, rgba(10, 12, 16, 1) 90%);
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

h3 {
  font-family: 'Trade Winds', system-ui;
}
</style>
