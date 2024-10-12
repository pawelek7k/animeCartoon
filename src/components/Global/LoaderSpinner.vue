<template>
  <div class="overlay">
    <div class="loader-container">
      <span class="loader"></span>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 998;
}

.loader-container {
  position: fixed;
  top: 50%;
  z-index: 999;
  left: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 0px 0px 100px 34px rgba(227, 162, 148, 1);
  -moz-box-shadow: 0px 0px 100px 34px rgba(227, 162, 148, 1);
  box-shadow: 0px 0px 100px 34px rgba(227, 162, 148, 1);
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid #ff3d00;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 4px;
  top: 4px;
  border: 2px solid #fff;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
