<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  padding: 1rem;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  backdrop-filter: blur(5px);
}

ul {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding: 0rem 3rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text);
  font-weight: bold;
  transition: 250ms ease-in-out;
  font-family: 'Trade Winds', system-ui;
}

.nav-link:hover {
  color: var(--primary);
}
</style>
