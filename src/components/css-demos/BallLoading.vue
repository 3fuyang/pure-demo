<script lang="ts" setup>
// 使用滤镜filter: blur(), contrast()

// 融合效果

</script>

<template>
  <div class="container">
    <div class="g-container">
      <!--第一个球-->
      <div class="g-first"/>
      <!--随后七个球-->
      <div v-for="n in 7" class="g-ball"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
$count: 7;

.container {
  filter: contrast(8);
  height: 3.6em;
  width: 14em;
  box-sizing: border-box;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.g-container {
  filter: blur(4px);
  position: relative;
  height: 1.5em;
  width: 1.5em;
}

.g-first, .g-ball {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  transform: translate(-500%, 0);
  opacity: 0;
}

@for $i from 0 through $count {
  .g-ball:nth-child(#{$i}) {
    animation-name: move;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-delay: #{$i * 0.2 + 0.1}s;
    animation-timing-function: linear;
  }
}

.g-first {
  animation: scaleMove 2.5s infinite linear;
}

@keyframes move {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }
    50% {
        opacity: 1;
        transform: translate(1vw, 0);
    }
    75%,
    100% {
        opacity: 0;
        transform: translate(500%, 0);
    }
}


@keyframes scaleMove {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }
    35% {
        opacity: 1;
        transform: scale(1);
    }
    70% {
        opacity: 1;
        transform: translate(1vw, 0) scale(2);
    }
    90%,
    100% {
        opacity: 0;
        transform: translate(1vw, 0) scale(1);
    }
}
</style>