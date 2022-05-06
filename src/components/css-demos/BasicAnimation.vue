<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <p class="moving">
      <slot>
      </slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: .3em .6em;
  width: 14em;
  overflow: hidden;
  background-color: hsl(160, 50%, 50%);  
  position: relative;
}
.moving {
  cursor: pointer;  
  top: .25em;
  margin: 0;
  position: absolute;
  font-size: 2rem;
  color: #fff;
  animation-name: move;
  animation-timing-function: ease-in;
  animation-duration: 3s;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  width: 10em;
  font-weight: bold;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes move {
  from {
    left: 6em;
  }
  to {
    left: -3em;
  }
}
</style>