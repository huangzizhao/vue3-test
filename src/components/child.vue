<template>
  <div class="container">
    x: {{ x }} y: {{ y }}
  </div>
  <button @click="handleEmit">
    按钮
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'
import { useMousePosition } from "../hooks/useMousePosition.js";
const { x, y } = useMousePosition()

const emit = defineEmits(['myclick1'])
const handleEmit = () => {
  emit('myclick1', 'myclick1事件触发')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    
  }
</style>
