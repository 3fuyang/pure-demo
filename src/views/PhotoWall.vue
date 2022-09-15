<script lang="ts" setup>

</script>

<template>
  <div class="grid-container">
    <div v-for="n in 8" :key="n" class="grid-item"  />
  </div>
</template>

<style scoped lang="scss">
$count: 8;

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: .5em;
  
  background-color: rgba(255, 255, 255, .8);
  padding: .8em;
  border-radius: .6em;
  height: 30em;
  width: 40em;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: .6em;

    z-index: -1;
    backdrop-filter: blur(4px);
  }
}

.grid-item {
  background-position: center;
  background-size: cover;

  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1 / 3;
    background-image: url(/images/1.jpg);
  }
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1 / 4;
    background-image: url(/images/2.jpg);
  }
  &:nth-child(3) {
    grid-column: 3;
    grid-row: 1 / 5;
    background-image: url(/images/3.jpg);
  }
  &:nth-child(4) {
    grid-column: 4;
    grid-row: 1 / 6;
    background-image: url(/images/4.jpg);
  }
  &:nth-child(5) {
    grid-column: 1;
    /* end-line is not contained */
    grid-row: 3 / 9;
    background-image: url(/images/5.jpg);
  }
  &:nth-child(6) {
    grid-column: 2;
    grid-row: 4 / 9;
    background-image: url(/images/6.jpg);
  }
  &:nth-child(7) {
    grid-column: 3;
    grid-row: 5 / 9;
    background-image: url(/images/7.jpg);
  }
  &:nth-child(8) {
    grid-column: 4;
    grid-row: 6 / 9;
    background-image: url(/images/8.jpg);
  }  
}
</style>