<script setup lang="ts">
import StyledLink from './StyledLink.vue'
</script>

<template>
  <footer>
    <div>
      <h3>Navigation</h3>
      <ul>
        <li><StyledLink label="Home" href="/" /></li>
        <li><StyledLink label="About" href="/about" /></li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li><StyledLink label="YouTube" href="https://www.youtube.com" /></li>
        <li><StyledLink label="Facebook" href="https://www.facebook.com" /></li>
        <li><StyledLink label="X" href="https://x.com/X" /></li>
        <li><StyledLink label="Instagram" href="https://www.instagram.com" /></li>
      </ul>
    </div>
    <div>
      <h3>AnimeCartoon</h3>
      <ul>
        <li><StyledLink label="Help" /></li>
        <li><StyledLink label="Privacy Policy" /></li>
        <li><StyledLink label="Help Center" /></li>
      </ul>
    </div>
    <div>
      <h3>Account</h3>
      <ul>
        <li><StyledLink label="Log in" /></li>
        <li><StyledLink label="Create Account" /></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 30vh;
  background: linear-gradient(0deg, var(--secondary) 0%, rgba(10, 12, 16, 1) 90%);
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

h3 {
  font-family: 'Trade Winds', system-ui;
  color: var(--secondary);
}

ul {
  margin-top: 0.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

@media (max-width: 600px) {
  footer {
    height: 100%;
    gap: 2rem;
    flex-direction: column;
  }
}
</style>
