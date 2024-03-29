import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/tab1",
  },
  {
    path: "/todo",
    component: () => import("@/views/pages/Todo.vue"),
  },
  {
    path: "/add",
    component: () => import("@/views/pages/Add.vue"),
  },
  {
    path: '/add/:id',
    component: () => import('@/views/pages/Add.vue')
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
  {
    path: "/vue/state",
    component: () => import("@/views/vue-basic-feature/State.vue"),
  },
  {
    path: "/vue/event",
    component: () => import("@/views/vue-basic-feature/Event.vue"),
  },
  {
    path: "/vue/if",
    component: () => import("@/views/vue-basic-feature/If.vue"),
  },
  {
    path: "/vue/iterator",
    component: () => import("@/views/vue-basic-feature/Iterator.vue"),
  },
  {
    path: "/vue/modal",
    component: () => import("@/views/vue-basic-feature/Model.vue"),
  },
  {
    path: "/vue/lifecycle",
    component: () => import("@/views/vue-basic-feature/Lifecycle.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
