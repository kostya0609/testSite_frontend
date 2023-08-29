<template>
  <pre-loader :loading="loading" class="py-3">

    <div class="flex justify-between mb-3">
      <h3 class="font-bold text-xl">Администрирование</h3>
      <return-button/>
    </div>

    <el-tabs type="border-card" v-model="page">
      <el-tab-pane v-for="(item, key) in menu" :label="item" :name="key" :key="key"/>
      <questions v-if="page === 'questions' && !loading" v-model:value="questionsList"/>
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
  import {QuestionRepo} from "@/repositories";

  const notify  = inject('notify');

  const loading = ref(false);

  const page    = ref('questions');

  const menu    = reactive({
    questions : 'Вопросы',
    settings  : 'Настройки',
  })

  const questionsList = reactive([]);

  const getData = async() => {
    try{
      loading.value = true;
      let result = await QuestionRepo.list({});

      questionsList.length = 0;

      if (result.data) questionsList.push(...result.data);

    } catch (e) {
      notify({title : `Получение данных о вопросах`, message : e.message, type : 'error', duration : 5000});
    } finally {
      loading.value = false;
    }
  };
  getData();

  provide('questionsList', questionsList)

</script>

<style scoped>

</style>