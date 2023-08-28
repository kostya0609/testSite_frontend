<template>
  <pre-loader :loading="loading">

    <div class="px-0 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52 py-5">

      <div class="block sm:flex md:flex lg:flex xl:flex 2xl:flex justify-between">
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
        class="questions_block ml-5"
        :accordion="accordion"
      >

        <el-collapse-item  :title="'Вопрос ID ' + (idx + 1) + ' - '+ question.question">

          <el-radio-group v-model="selectAnswer[question.id]" class="!block">

            <el-radio
              v-for="(answer, idx) in question.answers"
              :key="'a_' + idx + '_' + answer.id"
              :label="answer.id"
              class="!block pl-5 py-1"
            >
              Ответ ID {{(idx + 1) + ' - ' + answer.answer}}
            </el-radio>

          </el-radio-group>


        </el-collapse-item>

      </el-collapse>

      <div v-if="showAnswers">
        <h4 class="font-bold text-lg">Ваши ответы</h4>
        <p
          v-for="(value, name) in selectAnswer"
          :key="value + '_' + name"
          class="pl-5 py-1"
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

</style>