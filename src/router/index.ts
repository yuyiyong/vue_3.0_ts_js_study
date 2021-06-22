/*
 * @LastEditors:  
 * @LastEditTime: 2021-06-22 11:42:44
 * @FilePath: /vue_3.0_ts_study/src/router/index.ts
 */
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  /*  {
    path: "",
    name:'1',
    component: () => import("../views/Base.vue"),
    redirect:'/base'
  }, */ //路由重定向
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/home", "/index"], //路由别名，可以通过/home 访问
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/base",
    name: "Base",
    component: () => import("../views/Base.vue"),
  },

  {
    path: "/todolist",
    name: "todolist",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/composition",
    name: "composition",
    component: () => import("../views/Composition.vue"),
  },
  {
    path: "/tsView",
    name: "tsView",
    component: () => import("../views/TsView.vue"),
    children: [
      {
        path: "/tsView/news1",
        name: "news1",
        component: () => import("../components/tscomp/News.vue"),
      },
      {
        path: "/tsView/news2",
        name: "news2",
        component: () => import("../components/tscomp/News2.vue"),
      },

      {
        path: "/tsView/newscontaint/:id",
        name: "newscontaint",
        component: () => import("../components/tscomp/NewsContaint.vue"),
      },
    ],
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/LayoutComp.vue"),
  },
  {
    path: "/jsView",
    name: "jsView",
    component: () => import("../views/JsView.vue"),
    children: [
      {
        path: "/jsView/variable",
        name: "variable",
        component: () => import("../components/jscomp/variable.vue"),
      },
      
      {
        path: "/jsView/operator",
        name: "operator",
        component: () => import("../components/jscomp/operator.vue"),
      },
      {
        path: "/jsView/Array",
        name: "Array",
        component: () => import("../components/jscomp/Array.vue"),
      },
      {
        path: "/jsView/flowState",
        name: "flowState",
        component: () => import("../components/jscomp/flowState.vue"),
      },
      {
        path: "/jsView/strFunction",
        name: "strFunction",
        component: () => import("../components/jscomp/strFunction.vue"),
      },
      {
        path: "/jsView/functionBase",
        name: "functionBase",
        component: () => import("../components/jscomp/functionBase.vue"),
      },
      {
        path: "/jsView/domBaseOpr",
        name: "domBaseOpr",
        component: () => import("../components/jscomp/domBaseOpr.vue"),
      },
      {
        path: "/jsView/regular",
        name: "regular",
        component: () => import("../components/jscomp/Regular.vue"),
      },
      {
        path: "/jsView/dataType",
        name: "dataType",
        component: () => import("../components/jscomp/DataType.vue"),
      },
      {
        path: "/jsView/JQueryJs",
        name: "JQueryJs",
        component: () => import("../components/jscomp/JQueryJs.vue"),
      },
      {
        path: "/jsView/WindowObj",
        name: "WindowObj",
        component: () => import("../components/jscomp/WindowObj.vue"),
      },
      

    ],
  },
  // {
  //   path: "/tsView/news1",
  //   name: "tsView",
  //   component: () => import('../components/tscomp/News.vue'),
  // },
  // {
  //   path: "/tsView/news2",
  //   name: "tsView",
  //   component: () => import('../components/tscomp/News2.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
