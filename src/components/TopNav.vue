<script lang="ts" setup>

</script>

<template>
  <div class="top-wrapper">
    <button
      class="btn"
      @click="$router.push('/pinia')">PiniaPluginPersist</button>    
    <button
      class="btn"
      @click="$router.push('/css-animation')">CSS Animation</button>
    <button
      class="btn"
      @click="$router.push('/photo-wall')">Photo Wall</button>     
    <button
      class="btn"
      @click="$router.push('/vue-debug')">Vue Debug</button>   
    <button
      class="btn"
      @click="$router.push('/rtf')">Rich Text Format</button>
  </div>
</template>

<style scoped>
.top-wrapper {
  max-height: 15vh;
  font-size: 1.2rem;
  height: 2em;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 6;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, .5);
  backdrop-filter: blur(12px);
}
.btn {
  outline: none;
  color: #fff;
  background: linear-gradient(90deg, #725392 0%, #b764ac 100%);
  cursor: pointer;
  border-radius: .3em;
  border: 1px solid #4d4280;
  padding: .2em 1em;
  transition: box-shadow .2s linear .1s;
}
.btn:hover {
  box-shadow: inset 0 0 .2em 1em #4d4280;
}
</style>