<template>
  <pre-loader :loading="loading">

    <div v-if="isOk">
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
      name : null,
      roles : [],
    });

    const navBarVisible = computed(() => {
      let currentRoute = router.currentRoute.value.name;
      return['ListQuestions'].includes(currentRoute)
    });

    const auth = () => {
      loading.value = true;
      //некое подобие авторизации и получения каких-то прав

        user.name = 'Vasya';
        user.roles.length = 0;
        user.roles.push('admin');
        isOk.value = true;

      loading.value = false;

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
