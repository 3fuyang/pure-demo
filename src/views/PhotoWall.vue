<script lang="ts" setup>

</script>

<template>
  <div class="wall-wrapper">
    <div
      class="photo-wrapper"
      v-for="n in 8">
    </div>
  </div>
</template>

<style scoped lang="scss">
$count: 8;

.wall-wrapper {
  display: grid;
  background-color: rgb(255, 255, 255, .8);
  font-size: 1rem;
  padding: .8em;
  border-radius: .3em .4em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 30em;
  width: 40em;

  &::before {
    object-fit: scale-down;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    backdrop-filter: blur(4px);
  }
}

@for $i from 1 to $count+1 {
  .photo-wrapper:nth-child(#{$i}) {
    position: relative;
    margin: 0.5vw;

    &::after {
      content: "#{$i}";
      position: absolute;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.photo-wrapper {
  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1 / 3;
    background-image: url('../../public/images/1.jpg');
  }
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1 / 4;
    background-image: url('../../public/images/2.jpg');
    background-position: center;    
  }
  &:nth-child(3) {
    grid-column: 3;
    grid-row: 1 / 5;
    background-image: url('../../public/images/3.jpg');    
  }
  &:nth-child(4) {
    grid-column: 4;
    grid-row: 1 / 6;
    background-image: url('../../public/images/4.jpg');
    background-position: center; 
  }
  &:nth-child(5) {
    grid-column: 1;
    grid-row: 3 / 9;
    background-image: url('../../public/images/5.jpg');    
  }
  &:nth-child(6) {
    grid-column: 2;
    grid-row: 4 / 9;
    background-image: url('../../public/images/6.jpg');    
  }
  &:nth-child(7) {
    grid-column: 3;
    grid-row: 5 / 9;
    background-image: url('../../public/images/7.jpg');    
  }
  &:nth-child(8) {
    grid-column: 4;
    grid-row: 6 / 9;
    background-image: url('../../public/images/8.jpg');
    background-position: center;
    background-size: contain;
  }  
}
</style>