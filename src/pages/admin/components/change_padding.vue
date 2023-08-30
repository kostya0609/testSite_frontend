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

import {ref, reactive} from "vue";

const props = defineProps({
  padding : Number,
  type    : String,
});

const loading       = ref(false);

const activePadding = ref(props.padding)

const padding_list  = reactive([
  { name : 0,  label : '0px'},
  { name : 5,  label : '5px'},
  { name : 10, label : '10px'},
  { name : 15, label : '15px'},
  { name : 20, label : '20px'},
  { name : 25, label : '25px'},
  { name : 30, label : '30px'},
 ])

const changePadding = async() => {

};

</script>

<style scoped>

</style>