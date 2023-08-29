<template>
  <pre-loader :loading="loading">
    <el-row class="mb-1 pl-3">
      <el-col :md="12" >
        <label class="font-bold block mb-1">Ответ ID - {{answer.id}}</label>
        <el-input
          v-model="answer.answer"
          :class="['w-full', {'border border-red-500' : false}]"
          type="textarea"
          rows="2"
          placeholder="Содержание ответа"
        />
      </el-col>
      <el-col :md="2" class="lg:ml-3 my-auto">
        <br class="hidden lg:block xl:block 2xl:block" />
        <el-button
          size="small"
          type="danger"
          @click="answerDelete(question_id, answer.id)"
        >
          <el-icon><CloseBold /></el-icon>
        </el-button>
      </el-col>
    </el-row>
  </pre-loader>
</template>

<script setup>
import {inject, ref} from "vue";
import {ElMessageBox} from "element-plus";
const questionsList = inject('questionsList');
import {AnswerRepo} from "@/repositories";
import PreLoader from "@/components/preLoader";

const props = defineProps({
  answer      : Object,
  question_id : Number
});

const user    = inject('user');
const notify  = inject('notify');

const loading = ref(false);

const answerDelete = async (question_id, answer_id) => {
  await ElMessageBox.confirm(`Вы уверены, что хотите удалить ответ с ID ${answer_id} у вопроса с ID ${question_id} ?`)
  try {
    loading.value = true;

    await AnswerRepo.delete({
      user_id : user.id,
      question_id,
      answer_id
    });

    let question_idx  = questionsList.findIndex(el => el.id == question_id);

    let answer_idx = question_idx >= 0 ? questionsList.find(el => el.id == question_id).answers.findIndex(el => el.id == answer_id) : null;

    answer_idx >= 0 ? questionsList[question_idx].answers.splice(answer_idx, 1) : '';

  } catch (e) {
    if (e !== 'cancel')
      notify({title : 'Ошибка при выполнении запроса на удаление ответа', message :e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }

}

</script>

<style scoped>

</style>