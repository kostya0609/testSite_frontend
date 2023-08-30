<template>
  <el-button
    class="blueButton"
  >
    <el-icon v-if="action === 'add'"><Plus /></el-icon>
    <el-icon v-if="action === 'save'"><Check /></el-icon>
    <el-icon v-if="action === 'more'"><More /></el-icon>
    {{label}}
  </el-button>
</template>

<script setup>
  const props = defineProps({
    label  : {type : String, value : ''},
    action : {type : String, value : ''}
  })
</script>

<style scoped>

</style>