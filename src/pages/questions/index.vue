<template>
  <pre-loader :loading="loading">

    <div class="mt-3">

      <div class="mb-3 xs:block sm:block md:flex justify-between">
        <h3 class="font-bold text-xl">Ответы на вопросы</h3>
        <el-switch
          v-model="accordion"
          active-text="Аккордеон"
          inactive-text="Обычный"
        />
      </div>

      <el-collapse
        v-model="activeNames"
        v-for="(question, idx) in questionsList"
        :key="'q_' + idx + '_' + question.id"
        class="questions_block xs:ml-1 sm:ml-2 md:ml-3"
        :accordion="accordion"
      >

        <el-collapse-item  :title="'Вопрос № ' + (idx + 1) + ' - '+ question.question">

          <el-radio-group v-model="selectAnswer[question.id]" class="!block">

            <el-radio
              v-for="(answer, idx) in question.answers"
              :key="'a_' + idx + '_' + answer.id"
              :label="answer.id"
              class="!block xs:ml-1 sm:ml-2 md:ml-3"
            >
              Ответ № {{(idx + 1) + ' - ' + answer.answer}}
            </el-radio>

          </el-radio-group>


        </el-collapse-item>

      </el-collapse>

      <div v-if="showAnswers">
        <h4 class="font-bold text-lg">Ваши ответы</h4>
        <p
          v-for="(value, name) in selectAnswer"
          :key="value + '_' + name"
          class="xs:ml-1 sm:ml-2 md:ml-3"
        >
          Вопрос ID{{name}} - {{value ? 'Ответ ID' + value : ' нет ответа'}}
        </p>
      </div>

    </div>

  </pre-loader>
</template>

<script setup>
import {ref, reactive, watch, inject, computed} from "vue";
  import PreLoader from "@/components/preLoader";
  import {QuestionRepo} from "@/repositories";

  const notify          = inject('notify');

  const loading         = ref(false);

  const activeNames     = ref([]);

  const accordion       = ref(false);

  const selectAnswer    = reactive({});

  const questionsList   = reactive([]);

  const showAnswers     = computed(() => {
    return Object.keys(selectAnswer).length
  });

  const getData = async() => {
    try{
      loading.value = true;
      let result = await QuestionRepo.list({});

      questionsList.length = 0;

      if (result.data) {
        questionsList.push(...result.data);
      }

    } catch (e) {
      notify({title : `Получение данных о вопросах`, message : e.message, type : 'error', duration : 5000});
    } finally {
      loading.value = false;
    }
  };
  getData();

  watch(
    () => accordion.value,
    () => {
      activeNames.value = []
    }
)

</script>

<style scoped>

.questions_block >>> .el-collapse-item__arrow {
  margin: 0 0 0 10px;
}

.el-collapse >>> .el-collapse-item__header{
line-height: normal;
}

.el-radio >>> .el-radio__label{
  line-height: normal;
  white-space: normal;
}
.el-radio-group >>> .\!block{
  display: inline-flex !important;
  height:auto;
  padding: 5px 0;
}

</style>