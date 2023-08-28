<template>
  <div>
    <h3 class="font-bold text-xl mb-1">Вопрос ID - {{question.id}}</h3>
    <el-row class="mb-3 pl-3">
      <el-col :md="12">
        <label class="font-bold block mb-1">Содержание</label>
        <el-input
            v-model="question.question"
            :class="['w-full', {'border border-red-500' : false}]"
            placeholder="Содержание вопроса"
        />
      </el-col>
      <el-col :md="2" class="lg:ml-3 my-auto">
        <br class="hidden lg:block xl:block 2xl:block" />
        <el-button
            size="small"
            type="danger"
            @click="questionDelete(question.id)"
        >
          <el-icon><CloseBold /></el-icon>
        </el-button>
      </el-col>
    </el-row>

    <answer-template
      v-for="(el, idx) in question.answers"
      :key="'a_' + el.id + '_' + idx"
      v-model:answer="question.answers[idx]"
      :question_id="question.id"
      @answerDelete="ff"
    />

    <el-row>
      <el-col :md=12 align="right">
        <blue-button
          label="Добавить ответ"
          @click="addAnswer(question.id)"
        />
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import AnswerTemplate from "@/pages/admin/components/answerTemplate"
import BlueButton from "@/components/blueButton";

const props = defineProps({
  question : Object,
})

const ff = (id1, id2)=>{
  //console.log(id1)
  //console.log(id2)
}

const questionDelete = async(question_id) => {
  console.log(question_id)
};

const addAnswer = async(question_id) => {
  console.log(question_id)
}
</script>

<style scoped>

</style>