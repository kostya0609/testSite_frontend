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

      <h4 class="font-bold text-lg">Ваши ответы</h4>
      <p
          v-for="(value, name) in selectAnswer"
          :key="value + '_' + name"
          class="pl-5 py-1"
      >
        Вопрос ID{{name}} - {{value ? 'Ответ ID' + value : ' нет ответа'}}
      </p>

    </div>

  </pre-loader>
</template>

<script setup>
  import {ref, reactive, watch, inject} from "vue";
  import PreLoader from "@/components/preLoader";
  import {QuestionRepo} from "@/repositories";

  const notify          = inject('notify');

  const loading         = ref(false);

  const activeNames     = ref([]);

  const accordion       = ref(false);

  const selectAnswer    = reactive({});

  const questionsList   = reactive([
    {
      id : 1,
      question : 'q1',
      answers : [
        {id : 1, answer : 'a11'},
        {id : 2, answer : 'a12'},
        {id : 3, answer : 'a13'},
      ]
    },
    {
      id : 2,
      question : 'q2',
      answers : [
        {id : 4, answer : 'a21'},
        {id : 5, answer : 'a22'},
        {id : 6, answer : 'a23'},
      ]
    },
    {
      id : 3,
      question : 'q3',
      answers : [
        {id : 7, answer : 'a31'},
        {id : 8, answer : 'a32'},
        {id : 9, answer : 'a33'},
      ]
    }
  ]);

  const getData = async() => {
    try{
      loading.value = true;
      let result = await QuestionRepo.list({
        user_id  : 10
      });

      console.log(result.data)

    } catch (e) {
      notify({title : `Получение данных о вопросах`, message : e.message, type : 'error', duration : 5000});
    } finally {
      loading.value = false;
    }
  };
  getData();

  questionsList.forEach(el => selectAnswer[el.id] = null)

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