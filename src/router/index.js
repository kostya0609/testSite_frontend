import { createRouter, createWebHistory } from 'vue-router'
import ListQuestions from "@/pages/questions";
import AdminPage from "@/pages/admin"

const routes = [
  {
    path: '/site/questions/',
      children : [
        {
          path: 'list',
          name: 'ListQuestions',
          component: ListQuestions,
          meta : {
            name     : 'Вопросы ответы',
            forAdmin : false,
            order    : 1,
          },
        },
    ]
  },
  {
    path: '/site/admin/',
    name: 'AdminPage',
    component: AdminPage,
    meta : {
      name     : 'Администрирование',
      forAdmin : true,
      order    : 2,
    },


  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  previous : null,
})

router.beforeEach((to, from, next) => {
  router.previous = from.name;
  !router.getRoutes().find(el => {return el.name === to.name}) ? router.push({name : 'ListQuestions'}) : '';
  next();
})

export default router
