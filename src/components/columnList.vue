<template>
  <div class="list">
    {{ val }}
  </div>
</template>
<script setup>

  const val = withDefaults(defineProps, {
    id: 0,
    title: '--',
    description: '默认描述'
  })
</script>
<style lang="scss">

</style>