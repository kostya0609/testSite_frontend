import { createRouter, createWebHistory } from 'vue-router'
import ListContracts from "@/pages/contracts";
import AddEditContract from "@/pages/contracts/add_edit";
import DetailContract from "@/pages/contracts/detail";

import ListContractsNeedAction from "@/pages/contracts_need_action";

import ListUsers from "@/pages/users";
import UserAddEdit from "@/pages/users/add_edit";

const routes = [
  {
    path: '/contract-work/contracts/',
    children : [
      {
        path: 'list',
        name: 'ListContracts',
        component: ListContracts,
        meta : {name : 'Договоры', forAdmin : false, path : '/contract-work/contracts/add', label : 'договор'},
      },
      {
        path: 'add',
        name: 'addContract',
        component: AddEditContract,
      },
      {
        path: 'edit/:id',
        name: 'editContract',
        component: AddEditContract,
      },
      {
        path: 'detail/:id/:tab?',
        name: 'detailContract',
        component: DetailContract,
      },

    ]
  },
  {
    path: '/contract-work/contracts-need-action/',
    children: [
      {
        path: 'list',
        name: 'listContractsNeedAction',
        component: ListContractsNeedAction,
        meta: {name: 'Требует вашей реакции', forAdmin: false, path: '/contract-work/contracts/add', label: 'договор'},
      },
    ]
  },
  {
    path: '/contract-work/users',
    children: [
      {
        path: 'list',
        name: 'listUsers',
        component: ListUsers,
        meta : {name : 'Администрирование', forAdmin : true, path : '/contract-work/users/add', label : 'пользователя'},
      },
      {
        path: 'add',
        name: 'userAdd',
        component: UserAddEdit,
      },
      {
        path: 'edit/:id',
        name: 'userEdit',
        component: UserAddEdit,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  previous : null,
})

router.beforeEach((to, from, next) => {
  router.previous = from.name;
  !router.getRoutes().find(el => {return el.name === to.name}) ? router.push({name : 'ListContracts'}) : '';
  next();
})

export default router
