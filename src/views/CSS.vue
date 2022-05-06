<script lang="ts" setup>
import WaveText from '@/components/css-demos/WaveText.vue'
import BasicAnimation from '@/components/css-demos/BasicAnimation.vue'
import RandomAnimation from '@/components/css-demos/RandomAnimation.vue'
</script>

<template>
  <main class="root-wrapper">
    <wave-text>Mix-blend-mode</wave-text>
    <basic-animation>Basic Animation</basic-animation>
    <random-animation/>
  </main>
</template>

<style scoped lang="scss">
.root-wrapper {
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 1em;
  box-sizing: border-box;
  overflow: auto;
  flex-wrap: wrap;
  & > div {
    margin-left: 1em;
  }
}
</style>