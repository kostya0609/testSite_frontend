<template>
  <el-row class="mb-1 pl-3">
    <el-col :md="12" >
      <label class="font-bold block mb-1">Ответ ID - {{answer.id}}</label>
      <el-input
          v-model="answer.answer"
          :class="['w-full', {'border border-red-500' : false}]"
          type="textarea"
          rows="2"
          placeholder="Содержание вопроса"
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
</template>

<script setup>
import {inject} from "vue";
const questions_list = inject('questions_list')

const props = defineProps({
  answer      : Object,
  question_id : Number
})

const answerDelete = (question_id, answer_id) => {

  let question_idx  = questions_list.findIndex(el => el.id == question_id);

  let answer_idx = question_idx >= 0 ? questions_list.find(el => el.id == question_id).answers.findIndex(el => el.id == answer_id) : null;

  answer_idx >= 0 ? questions_list[question_idx].answers.splice(answer_idx, 1) : '';

}

</script>

<style scoped>

</style>