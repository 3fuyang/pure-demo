<script lang="ts" setup>
import WaveText from '@/components/css-demos/WaveText.vue'
import BasicAnimation from '@/components/css-demos/BasicAnimation.vue'
import RandomAnimation from '@/components/css-demos/RandomAnimation.vue'
import BubbleButton from '@/components/css-demos/BubbleButton.vue'
import BallLoading from '@/components/css-demos/BallLoading.vue'
</script>

<template>
  <main class="root-wrapper">
    <wave-text>Mix-blend-mode</wave-text>
    <basic-animation>Basic Animation</basic-animation>
    <random-animation/>
    <bubble-button/>
    <ball-loading/>
  </main>
</template>

<style scoped lang="scss">
.root-wrapper {
  width: 80em;
  display: flex;
  justify-content: center;
  padding: 1em;
  box-sizing: border-box;
  overflow: auto;
  flex-wrap: wrap;
  gap: 1em;
}
</style>