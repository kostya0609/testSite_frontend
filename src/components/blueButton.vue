<template>
  <el-button
    class="uppercase blueButton"
  >
    {{label}}
  </el-button>
</template>

<script setup>
  const props = defineProps({
    label: {type : String, value : ''}
  })
</script>

<style scoped>

</style>