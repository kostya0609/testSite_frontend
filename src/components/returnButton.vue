<template>
  <blue-button
      label="Назад"
      @click=router.back(1);
  />
</template>

<script setup>

import BlueButton from "@/components/blueButton";
import router from "@/router";

</script>

<style scoped>

</style>