<script lang="ts" setup>
import { ref, onRenderTracked, onRenderTriggered, onBeforeUpdate } from 'vue'

interface GoodInfo {
	id: string
  title: string
  price: number
  // ...
}

const updateTrigger = ref(0)

const goodInfo = ref<GoodInfo | null>({
	id: '2',
  title: '标题二',
  price: 20.00  
})

onBeforeUpdate(() => {
  goodInfo.value = {
    id: '1',
    title: '标题一',
    price: 10.00
  }
})

onRenderTracked((e) => {
  console.log(e)
})

onRenderTriggered((e) => {
  console.log(e)
})

</script>

<template>
  <div class="wrapper">
    <p>对引用类型的响应式数据，直接修改引用导致冗余的RenderTrack</p>
    <p>{{goodInfo}}</p>
    <p>{{updateTrigger}}</p>
    <btn
      class="btn"
      @click="updateTrigger++">Click to Update, and check DevTool.</btn>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: white;
  padding: 1em;
  border-radius: .5em;
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