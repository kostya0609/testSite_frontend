<template>
  <div class="p-3">
    <question-template
        v-for="(item, idx) in value"
        :key="'q_' + item.id + '_' + idx"
        v-model:question="value[idx]"
        class="mb-5"
    />
    <blue-button
      label="Добавить вопрос"
      @click="addQuestion"
    />
  </div>

</template>

<script setup>
import QuestionTemplate from "@/pages/admin/components/questionTemplate"
import BlueButton from "@/components/blueButton";

const props = defineProps({
  value : Array,
})

const addQuestion = async() => {

}

</script>

<style scoped>

</style>