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
  <button
    class="btn"
    @click="$router.push('/css')">To CSS</button>
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
.demo-wrapper:hover {
  box-shadow: .1em .1em .5em  #4d4280;
}
.demo-wrapper p {
  margin: 0;
}
.demo-wrapper div {
  margin: 1em 0;
}
.btn {
  outline: none;
  color: #fff;
  background: linear-gradient(90deg, #725392 0%, #b764ac 100%);
  cursor: pointer;
  border-radius: .3em;
  border: 1px solid #4d4280;
  padding: .2em 1em;
  align-self: flex-start;
  transition: box-shadow .2s linear .1s;
}
.btn:hover {
  box-shadow: inset 0 0 .2em 1em #4d4280;
}
</style>