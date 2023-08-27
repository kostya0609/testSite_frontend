<template>
  <div class="relative">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :router=true
    >
      <template v-for="(item, key) in menu" :key="key">
        <el-menu-item :index="item.path"> {{item.name}} </el-menu-item>
      </template>

    </el-menu>
  </div>

</template>

<script>

import {ref, reactive, inject, watchEffect} from "vue";
import {useRoute, useRouter} from 'vue-router'
export default {
  name: "navBar",
  setup(){
    const user     = inject('user');
    const isAdmin  = ref( user.roles.indexOf('admin') >= 0 ? true : false);

    const route    = useRoute()
    const router   = useRouter()

    const menu     = reactive([]);
    router.getRoutes().forEach(el => {
      if (el.meta.name){

        if(!el.meta.forAdmin)
          menu.push({path : el.path, name : el.meta.name, order : el.meta.order});
            else isAdmin.value ? menu.push({path : el.path, name : el.meta.name, order : el.meta.order}) : ''

      }
    })

    menu.sort((a, b) => a.order - b.order);

    const activeIndex = ref(null);

    watchEffect(() => { activeIndex.value = route.path })

    return{ activeIndex, menu, route, router}
  },
}
</script>

<style scoped>

</style>