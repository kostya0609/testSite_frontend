<template>
  <pre-loader :loading="loading" class="p-3">
    <question-template
      v-for="(item, idx) in value"
      :key="'q_' + item.id + '_' + idx"
      v-model:question="value[idx]"
      class="mb-5"
    />
    <div class="flex justify-between">
      <blue-button
        action="add"
        label="вопрос"
        @click="addQuestion"
      />
      <blue-button
          action="save"
        label="вопросы"
        @click="saveQuestions"
      />
    </div>
  </pre-loader>

</template>

<script setup>
import QuestionTemplate from "@/pages/admin/components/questionTemplate"
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
      question : 'Тут необходимо ввести содержание этого вопроса'
    });

    if (result.data) {
      questionsList.push(
        {
          id       : result.data.question_id,
          question : '',
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

const saveQuestions = async() => {

  let questionToSave = []; //надо будет собрать данные для бэка чтоб сохранить вопросы

  try{
    loading.value = true;
    await QuestionRepo.save({
      user_id : user.id,
      questionToSave
    });

    notify({title : `Сохранение вопросов`, message : 'Вопросы успешно сохранены', type : 'success', duration : 2000});

  } catch (e) {
    notify({title : `Добавление вопроса`, message : e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>

</style>