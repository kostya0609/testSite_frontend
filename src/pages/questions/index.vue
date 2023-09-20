<template>
  <pre-loader :loading="loading">

    <div
      class="wrapper custom-padding mt-3 xs:px-0 sm:px-5"
      :style="{'--paddingTop' : paddings.top + 'px', '--paddingBottom' : paddings.bottom + 'px'}"
    >

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
        class="xs:ml-1 sm:ml-2 md:ml-3"
        :accordion="accordion"
      >

        <el-collapse-item  :title="'Вопрос № ' + (idx + 1) + ' - '+ question.question" class="pb-3">

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
  import {QuestionRepo, PaddingRepo} from "@/repositories";

  const notify          = inject('notify');
  const user            = inject('user');

  const loading         = ref(false);

  const activeNames     = ref([]);

  const accordion       = ref(false);

  const selectAnswer    = reactive({});

  const questionsList   = reactive([]);

  const paddings        = reactive({
    top    : 0,
    bottom : 0,
  });

  const showAnswers     = computed(() => {
    return Object.keys(selectAnswer).length
  });

  const getQuestions = async() => {
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
  getQuestions();

  const getPadding = async() => {
    try{
      loading.value = true;
      let result = await PaddingRepo.get({
        user_id : user.id
      });

      if (result.data) {
        paddings.top = result.data.padding_top;
        paddings.bottom = result.data.padding_bottom;
      }

    } catch (e) {
      notify({title : `Получение данных о padding`, message : e.message, type : 'error', duration : 5000});
    } finally {
      loading.value = false;
    }
  };
  getPadding();

watch(
    () => accordion.value,
    () => {
      activeNames.value = []
    }
)

</script>

<style scoped>
.el-collapse >>> .el-collapse-item__arrow {
  margin: 0 0 0 10px;
}
.el-collapse >>> .el-collapse-item__header{
  line-height: normal;
  height: auto;
}
.el-radio >>> .el-radio__label{
  height: auto;
  line-height: normal;
  white-space: normal;
}
.el-radio-group >>> .\!block{
  height:auto;
  padding: 5px 0;
}
.custom-padding{
  padding-top: var(--paddingTop);
  padding-bottom: var(--paddingBottom);
}
.wrapper::v-deep .el-collapse{
  border-top: none;
  border-bottom: none;
}

.wrapper::v-deep .el-collapse-item__header{
  border-bottom: none;
}
.wrapper::v-deep .el-collapse-item__wrap{
  border-bottom: none;
}

.wrapper::v-deep .el-collapse-item__content{
  padding: 0;
}
</style>