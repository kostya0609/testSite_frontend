<template>
  <pre-loader :loading="loading">

    <div class="flex justify-between">
      <h3 class="font-bold text-xl">Страница администрирования</h3>
      <return-button/>
    </div>

  </pre-loader>
</template>

<script setup>
  import {ref} from "vue";
  import PreLoader from "@/components/preLoader";
  import ReturnButton from "@/components/returnButton";

  const loading = ref(false);
</script>

<style scoped>

</style>