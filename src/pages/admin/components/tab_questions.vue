<template>
  <pre-loader :loading="loading">
    <div class="p-2 xs:p-px">
      <template-question
        v-for="(item, idx) in value"
        :key="'q_' + item.id + '_' + idx"
        v-model:question="value[idx]"
      />

      <blue-button
        action="more"
        label="вопрос"
        @click="addQuestion"
      />
    </div>
  </pre-loader>

</template>

<script setup>
import TemplateQuestion from "@/pages/admin/components/template_question"
import BlueButton from "@/components/blueButton";
import {inject, ref} from "vue";
import {QuestionRepo} from "@/repositories";
import PreLoader from "@/components/preLoader";

const props = defineProps({
  value : Array,
});

const questionsList = inject('questionsList');
const notify        = inject('notify');
const user          = inject('user');

const loading       = ref(false);

const addQuestion   = async() => {
  try{
    loading.value = true;
    let result = await QuestionRepo.add({
      user_id  : user.id,
      data     : {
        question : 'Тут необходимо ввести содержание этого вопроса'
      },
    });

    if (result.data) {
      questionsList.push(
        {
          id       : result.data.question_id,
          question : 'Тут необходимо ввести содержание этого вопроса',
          answers  : []
        }
      );
      notify({title : `Добавление вопроса`, message : 'Успешно добавлен', type : 'success', duration : 2000});
    };

  } catch (e) {
    notify({title : `Добавление вопроса`, message : e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>

</style>