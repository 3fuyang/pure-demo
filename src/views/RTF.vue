<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const iframe = window.frames[0].document
  iframe.designMode = 'on'
  const text = document.createTextNode('使用iframe实现富文本编辑。')
  console.dir(iframe.execCommand)
  iframe.body.appendChild(text)
})
</script>

<template>
<div class="wrapper">
  <h2>富文本编辑</h2>
  <div class="container">
    <iframe
      class="richedit"/>
    <div
      class="content-editable"
      contenteditable>
      使用 contenteditable 属性实现富文本编辑。
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
h2 {
  letter-spacing: 1px;
  color: #666;
}
.wrapper {
  background-color: white;
  padding: 1em;
  border-radius: .5em;
  & h2 {
    margin: 0;
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
.richedit {
  box-sizing: border-box;  
  width: 10em;
  height: 10em;
  border: 1px solid #eee;
}
.content-editable {
  box-sizing: border-box;
  width: 10em;
  height: 10em;
  padding: .5em;
  border: 1px solid #eee;
  &:focus {
    outline: none;
  }
}
</style>