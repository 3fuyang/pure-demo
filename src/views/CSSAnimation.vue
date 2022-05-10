<script lang="ts" setup>
import WaveText from '@/components/css-animation/WaveText.vue'
import BasicAnimation from '@/components/css-animation/BasicAnimation.vue'
import RandomAnimation from '@/components/css-animation/RandomAnimation.vue'
import BubbleButton from '@/components/css-animation/BubbleButton.vue'
import BallLoading from '@/components/css-animation/BallLoading.vue'
import GradientBackground from '@/components/css-animation/GradientBackground.vue'
</script>

<template>
  <main class="root-wrapper">
    <wave-text>Mix-blend-mode</wave-text>
    <basic-animation>Basic Animation</basic-animation>
    <random-animation/>
    <bubble-button/>
    <ball-loading/>
    <gradient-background>
      Gradient Background
    </gradient-background>
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