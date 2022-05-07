<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { useCounterPersist } from '../stores/counter_persisit'
import { storeToRefs } from 'pinia'

// 返回一个reactive对象
const counterStore = useCounterStore()
// 将property提取为ref对象
const { counter, doubleCount } = storeToRefs(counterStore)

const counterPersistStore = useCounterPersist()
const { counterPersist, doubleCountPersist } = storeToRefs(counterPersistStore)
</script>

<template>
  <main class="demo-wrapper">
    <p class="pinia-title">Pinia 持久存储 Demo</p>
    <p>
      普通Store中的state: counter 为: {{counter}}, getter: doubleCount 为: {{doubleCount}}.
    </p>
    <div>
      Action: 
      <button
        @click="counterStore.increment">
        Increment
      </button>
    </div>
    <p>
      持存Store中的state: counterPersist 为: {{counterPersist}}, getter: doubleCountPersist 为: {{doubleCountPersist}}.
    </p>
    <div>
      Action: 
      <button
        @click="counterPersistStore.increment">
        Increment
      </button>
    </div>
    <button
      @click="$router.go(0)">
      Reflash
    </button>
  </main>
</template>

<style scoped>
.demo-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: .3em;
  background-color: rgb(255, 255, 255, .8);
  transition: box-shadow .1s linear .1s;
}
.pinia-title {
  margin: 0;
  font-size: 1.2rem;
}
.demo-wrapper:hover {
  box-shadow: .1em .1em .5em  #4d4280;
}
.demo-wrapper p {
  margin: 0;
}
.demo-wrapper div {
  margin: 1em 0;
}

</style>