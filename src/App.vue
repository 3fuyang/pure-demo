<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import SunsetCity from './components/SunsetCity.vue'
</script>

<template>
  <SunsetCity />
  <top-nav />
  <RouterView class="view" />
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

body::after {
  content: "";
  position: absolute;
  top: 10vmin;
  right: 20vmin;
  background: #fff;
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  box-shadow: 0 0 20px 2px rgba(253, 220, 189, 0.9);
  -webkit-appearance: none;
  appearance: none;
}

.doodle {
  position: relative;
  cursor: pointer;
}

.view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
}
</style>
