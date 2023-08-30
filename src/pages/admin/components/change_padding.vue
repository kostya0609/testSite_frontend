<template>
  <pre-loader :loading="loading">
    <el-tabs v-model="activePadding" class="demo-tabs" @tab-click="changePadding">
      <el-tab-pane
        v-for="(item, idx) in padding_list"
        :key="idx + '_' + item.name"
        :label="item.label"
        :name="item.name"
      />
    </el-tabs>
  </pre-loader>
</template>

<script setup>
import PreLoader from "@/components/preLoader";

import {ref, reactive, inject} from "vue";
import {PaddingRepo} from "@/repositories";

const props = defineProps({
  padding : Number,
  type    : String,
});

const notify        = inject('notify');
const user          = inject('user');

const loading       = ref(false);

const activePadding = ref(props.padding ? props.padding : 0)

const padding_list  = reactive([
  { name : 0,  label : '0px'},
  { name : 10, label : '10px'},
  { name : 15, label : '15px'},
  { name : 20, label : '20px'},
  { name : 25, label : '25px'},
  { name : 30, label : '30px'},
  { name : 35, label : '35px'},
  { name : 40, label : '40px'},
  { name : 50, label : '50px'},
  { name : 60, label : '60px'},
])

const changePadding = async(value) => {
  try{
    loading.value = true;
    await PaddingRepo.change({
      user_id : user.id,
      padding_type : props.type,
      [props.type === 'top' ? 'padding_top' : 'padding_bottom'] : value.props.name
    });

    notify({title : `Изменение padding_${props.type}`, message : 'Успешно изменен', type : 'success', duration : 1000});

  } catch (e) {
    notify({title : `Изменение padding_${props.type}`, message : e.message, type : 'error', duration : 5000});
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>

</style>