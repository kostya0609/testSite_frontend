<template>
  <pre-loader :loading="loading">

    <div class="flex justify-between xs:p-1 xs:my-px sm:my-2 md:my-3">
      <h3 class="font-bold text-xl">Администрирование</h3>
      <return-button/>
    </div>

    <el-tabs type="border-card" v-model="page">
      <el-tab-pane v-for="(item, key) in menu" :label="item" :name="key" :key="key"/>
      <tab-questions v-if="page === 'questions' && !loading" v-model:value="questionsList"/>
      <tab-settings  v-if="page === 'settings'  && !loading" :paddings="paddings"/>
    </el-tabs>

  </pre-loader>
</template>

<script setup>
  import {ref, reactive, provide, inject} from "vue";
  import PreLoader from "@/components/preLoader";
  import ReturnButton from "@/components/returnButton";
  import TabQuestions from "@/pages/admin/components/tab_questions"
  import TabSettings from "@/pages/admin/components/tab_settings"
  import {PaddingRepo, QuestionRepo} from "@/repositories";

  const notify  = inject('notify');
  const user    = inject('user');

  const loading = ref(false);

  const page    = ref('questions');

  const menu    = reactive({
    questions : 'Вопросы',
    settings  : 'Настройки',
  })

  const questionsList = reactive([]);

  const paddings      = reactive({
    top    : 0,
    bottom : 0,
  });

  const getQuestions = async() => {
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
  getQuestions();

  const getPadding = async() => {
    try{
      loading.value = true;
      let result = await PaddingRepo.get({
        user_id : user.id
      });

      if (result.data) {
        paddings.top = result.data.padding_top;
        paddings.bottom = result.data.padding_bottom;
      }

    } catch (e) {
      notify({title : `Получение данных о вопросах`, message : e.message, type : 'error', duration : 5000});
    } finally {
      loading.value = false;
    }
  };
  getPadding();


  provide('questionsList', questionsList)

</script>

<style scoped>
.el-tabs >>> .el-tabs__content{
  padding: 0;
}

</style>