<script lang="ts" setup>

</script>

<template>
  <p class="wave">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss">
.wave {
  margin: 0;
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  background: #fff;
  color: #000;
  overflow: hidden;
  padding: .3em .8em;
  &::before, &::after {
    content: "";
    position: absolute;
    top: -30.625em;
    left: 50%;
    width: 62.5em;
    height: 62.5em;
    border-radius: 45% 48% 43% 47%;
    transform: translate(-50%, -50%);
    background: rgba(3, 169, 244, .85);
    animation: rotate 10s infinite linear;
    z-index: 1;
    mix-blend-mode: lighten;  
  }
  &::after {
    border-radius: 43% 47% 44% 48%;
    animation: rotate 10s infinite .5s linear; 
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>