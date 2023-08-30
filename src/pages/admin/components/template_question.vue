<template>
  <pre-loader :loading="loading">
    <h3 class="font-bold text-xl mb-1">Вопрос № - {{number}}</h3>

    <el-row class="mb-1 xs:pl-0 :sm:pl-0">

      <el-col
        :xs="21" :sm="21" :md="22"
        class="pr-1"
      >
        <label class="font-bold block mb-1">Содержание</label>
        <el-input
          v-model="question.question"
          :class="['w-full', {'border border-red-500' : false}]"
          placeholder="Содержание вопроса"
        />
      </el-col>

      <el-col
        v-if="!showEditBtn"
        :xs="3" :sm="3" :md="2"
      >
        <label class="block mb-1"><br/></label>
        <el-button
          type="danger"
          @click="questionDelete(question.id)"
        >
          <el-icon><CloseBold /></el-icon>
        </el-button>
      </el-col>

      <el-col
        v-else
        :xs="3" :sm="3" :md="2"
      >
        <label class="block mb-1"><br/></label>
        <blue-button
         action="save"
         @click="editQuestion(question.id, question.question)"
        />
      </el-col>

    </el-row>

    <template-answer
      v-for="(el, idx) in question.answers"
      :key="'a_' + el.id + '_' + idx"
      v-model:answer="question.answers[idx]"
      :question_id="question.id"
      :number="idx + 1"
    />


    <el-row>
      <el-col
        :xs="21" :sm="21" :md="22"
        class="pr-1"
        align="right"
      >
        <blue-button
          action="more"
          label="ответ"
          @click="addAnswer(question.id)"
        />
      </el-col>
    </el-row>

  </pre-loader>
</template>

<script setup>
import TemplateAnswer from "@/pages/admin/components/template_answer"
import BlueButton from "@/components/blueButton";
import {inject, ref, watch} from "vue";
import {ElMessageBox }  from 'element-plus';
import {QuestionRepo, AnswerRepo} from "@/repositories";
import PreLoader from "@/components/preLoader";

const props = defineProps({
  question : Object,
  number   : Number,
});

const notify         = inject('notify');
const questionsList  = inject('questionsList');
const user           = inject('user');

const showEditBtn    = ref(false);

const loading        = ref(false);

const editQuestion   = async(question_id, question) => {
  try {
    loading.value = true;

    await QuestionRepo.edit({
      user_id : user.id,
      data    : {
        question_id,
        question
      }
    });

    showEditBtn.value = false;

  } catch (e) {
      notify({title : 'Ошибка при выполнении запроса на редактирование вопроса', message :e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
};

const questionDelete = async(question_id) => {
  await ElMessageBox.confirm(`Вы уверены, что хотите удалить вопрос с ID ${question_id} ?`)
  try {
    loading.value = true;

    await QuestionRepo.delete({
      user_id : user.id,
      question_id,

    });

    let question_idx  = questionsList.findIndex(el => el.id == question_id);
    question_idx >= 0 ? questionsList.splice(question_idx, 1) : '';

  } catch (e) {
    if (e !== 'cancel')
      notify({title : 'Ошибка при выполнении запроса на удаление вопроса', message :e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }

};

const addAnswer = async(question_id) => {
  try{
    loading.value = true;
    let result = await AnswerRepo.add({
      user_id : user.id,
      data    : {
        answer  : 'Тут необходимо ввести содержание этого ответа',
        question_id,
      },
    });

    if (result.data) {
      let question_idx  = questionsList.findIndex(el => el.id == question_id);
      question_idx >= 0 ?
          questionsList[question_idx].answers.push(
              {
                id     : result.data.answer_id,
                answer : 'Тут необходимо ввести содержание этого ответа'
              }
          )
          : '';
      notify({title : `Добавление ответа`, message : 'Ответ в вопрос успешно добавлен', type : 'success', duration : 2000});
    };

  } catch (e) {
    notify({title : `Добавление ответа в вопрос`, message : e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
}

watch(
    () => props.question.question,
    () => {
      showEditBtn.value =true;
    }
)
</script>

<style scoped>

</style>