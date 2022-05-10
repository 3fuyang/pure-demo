<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <p class="text">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 14em;
  background-image: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
  animation: hue-rotate 10s infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
}

@keyframes hue-rotate {
  to {
    filter: hue-rotate(360deg);
  }
}
</style>