import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "SearchShow",
    component: () => import(
      /*webpackChunkName: "search-view"*/ "@/views/SearchShow.vue"
      ),
    children: [
      {
        path: ':chemTransDb/:entity',
        name: 'AgGridShow',
        component: () => import(
          /*webpackChunkName: "query-view"*/ "@/views/AgGridShow.vue"
        ),
        props: route => (
          {
            ...route.params,
            chemTransDb: parseInt(route.params.chemTransDb),
            entity: route.params.entity
          }
          )
      }
    ]
  },
  {
    path: "/post",
    name: "PostShow",
    component: () => import(
      /*webpackChunkName: "post-view"*/ "@/views/PostShow.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
