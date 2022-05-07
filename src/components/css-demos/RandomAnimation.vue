<script lang="ts" setup>

</script>

<template>
<div class="container">
  <ul class="list">
    <li
      v-for="i in 10"
      />
  </ul>
</div>
</template>

<style scoped lang="scss">
.container {
  width: 7em;
  font-size: 2rem;
  padding: .3em .6em;
  background-color: hsl(180, 80%, 50%);
  display: flex;
  justify-content: center;
}

.list {
  margin: 0;
  display: flex;
}

.list li {
  margin: 0 10px;
  animation-name: float;
  animation-iteration-count: infinite;
  color: hsl(40, 90%, 50%);
}

@for $i from 1 to 11 {
  li:nth-child(#{$i}) {
    animation-duration: #{calc(random(2000) / 1000) + 2}s;
    animation-delay: #{calc(random(1000) / 1000) + 1}s;
  }
}

@keyframes float {
  from {
    transform: translate(0, 0)
  }
  to {
    transform: translate(0, -15em);
  }
}
</style>