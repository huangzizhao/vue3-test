<template>
  <columnList :info="info" />
</template>

<script setup>
  import { reactive } from 'vue'
  import columnList from './components/columnList.vue'
  const info = reactive({
    id: 6,
    title: "allen",
    description: "hahaha"
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
