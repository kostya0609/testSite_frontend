<template>
  <pre-loader :loading="loading">

    <div v-if="isOk" class="xs:p-px sm:p-2">
      <nav-bar v-if="navBarVisible"/>
      <router-view/>
    </div>

  </pre-loader>
</template>

<script>
import {ref, provide, reactive, computed} from "vue";
import { useRouter, useRoute } from 'vue-router';
import {ElNotification}  from 'element-plus'
import PreLoader from "@/components/preLoader";
import NavBar from "@/components/navBar";

export default {
  name       : 'App',
  components : {PreLoader, NavBar},
  setup(){
    const router  = useRouter();
    const loading = ref(false);
    const isOk    = ref(false);
    const notify  = ({title = '', message = '', type = '', duration = 3000} = {}) => {
      ElNotification({
        title,
        message,
        type,
        duration,
        dangerouslyUseHTMLString: true,
      })
    };
    const user    = reactive({
      name  : '',
      id    : '',
      roles : [],
    });

    const navBarVisible = computed(() => {
      let currentRoute = router.currentRoute.value.name;
      return['ListQuestions'].includes(currentRoute)
    });

    const auth = async() => {
      loading.value = true;
      //некое подобие авторизации и получения каких-то прав
      await setTimeout(() => {
        user.name = 'Vasya';
        user.id   = 15;
        user.roles.length = 0;
        user.roles.push('admin');
        isOk.value = true;
        loading.value = false;
      }, 1000)
    }
    auth();

    provide('user', user);
    provide('notify', notify);

    return{loading, isOk, navBarVisible}
  }
}




</script>

<style>


</style>
