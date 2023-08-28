<template>
  <el-button
    class="uppercase blueButton"
  >
    <el-icon v-if="action === 'add'"><Plus /></el-icon>
    <el-icon v-if="action === 'remove'"><Delete /></el-icon>
    <el-icon v-if="action === 'save'"><Check /></el-icon>
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