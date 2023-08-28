<template>
  <pre-loader :loading="loading" class="py-3">

    <div class="flex justify-between mb-3">
      <h3 class="font-bold text-xl">Администрирование</h3>
      <return-button/>
    </div>

    <el-tabs type="border-card" v-model="page">
      <el-tab-pane v-for="(item, key) in menu" :label="item" :name="key" :key="key"/>
      <questions v-if="page === 'questions' && !loading" v-model:value="questions_list"/>
      <settings  v-if="page === 'settings'  && !loading"/>
    </el-tabs>

  </pre-loader>
</template>

<script setup>
  import {ref, reactive, provide, inject} from "vue";
  import PreLoader from "@/components/preLoader";
  import ReturnButton from "@/components/returnButton";
  import Questions from "@/pages/admin/components/questions"
  import Settings from "@/pages/admin/components/settings"

  const notify  = inject('notify');

  const loading = ref(false);

  const page    = ref('questions');

  const menu    = reactive({
    questions : 'Вопросы',
    settings  : 'Настройки',
  })

  const questions_list = reactive([
    {
      id : 1,
      question : 'q1',
      answers : [
        {id : 1, answer : 'a11'},
        {id : 2, answer : 'a12'},
        {id : 3, answer : 'a13'},
      ]
    },
    {
      id : 2,
      question : 'q2',
      answers : [
        {id : 4, answer : 'a21'},
        {id : 5, answer : 'a22'},
        {id : 6, answer : 'a23'},
      ]
    },
    {
      id : 3,
      question : 'q3',
      answers : [
        {id : 7, answer : 'a31'},
        {id : 8, answer : 'a32'},
        {id : 9, answer : 'a33'},
      ]
    }
  ]);

  provide('questions_list', questions_list)



</script>

<style scoped>

</style>