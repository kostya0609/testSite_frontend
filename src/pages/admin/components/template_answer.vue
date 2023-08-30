<template>
  <pre-loader :loading="loading">

    <el-row class="mb-1 xs:pl-px sm:pl-2 md:pl-3">
      <el-col
        :xs="21" :sm="21" :md="22"
        class="pr-1"
      >
        <label class="font-bold block mb-1">Ответ № - {{number}}</label>
        <el-input
          v-model="answer.answer"
          :class="['w-full', {'border border-red-500' : false}]"
          type="textarea"
          rows="2"
          placeholder="Содержание ответа"
        />
      </el-col>

      <el-col
        v-if="!showEditBtn"
        :xs="3" :sm="3" :md="2"
        class="my-auto"
      >
        <label class="block mb-1"><br/></label>
        <el-button
          type="danger"
          @click="answerDelete(question_id, answer.id)"
        >
          <el-icon><CloseBold /></el-icon>
        </el-button>
      </el-col>

      <el-col
        v-else
        :xs="3" :sm="3" :md="2"
        class="my-auto"
      >
        <blue-button
          action="save"
          @click="editAnswer(answer.id, answer.answer)"
        />
      </el-col>

    </el-row>

  </pre-loader>
</template>

<script setup>
import {inject, ref, watch} from "vue";
import {ElMessageBox} from "element-plus";
const questionsList = inject('questionsList');
import {AnswerRepo} from "@/repositories";
import PreLoader from "@/components/preLoader";
import BlueButton from "@/components/blueButton";

const props = defineProps({
  answer      : Object,
  question_id : Number,
  number      : Number,
});

const user         = inject('user');
const notify       = inject('notify');

const loading      = ref(false);
const showEditBtn  = ref(false);

const editAnswer   = async(answer_id, answer) => {
  try {
    loading.value = true;

    await AnswerRepo.edit({
      user_id : user.id,
      data    : {
        answer_id,
        answer
      }
    });

    showEditBtn.value = false;

  } catch (e) {
    notify({title : 'Ошибка при выполнении запроса на редактирование вопроса', message :e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
};

const answerDelete = async (question_id, answer_id) => {
  await ElMessageBox.confirm(`Вы уверены, что хотите удалить ответ с ID ${answer_id} у вопроса с ID ${question_id} ?`)
  try {
    loading.value = true;

    await AnswerRepo.delete({
      user_id : user.id,
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

watch(
    () => props.answer.answer,
    () => {
      showEditBtn.value =true;
    }
)


</script>

<style scoped>

</style>