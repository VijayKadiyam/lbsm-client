import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    beforeEnter: authenticate,
    redirect: "/app/dashboards/dashboard.v5",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"), //dashboard
        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/app/dashboards/dashboard.v1"),
          },
          {
            path: "dashboard.v2",
            name: "dashboard.v2",
            component: () => import("./views/app/dashboards/dashboard.v2"),
          },
          {
            path: "dashboard.v3",
            name: "dashboard.v3",
            component: () => import("./views/app/dashboards/dashboard.v3"),
          },
          {
            path: "dashboard.v4",
            name: "dashboard.v4",
            component: () => import("./views/app/dashboards/dashboard.v4"),
          },
          {
            path: "dashboard.v5",
            name: "dashboard.v5",
            component: () => import("./views/app/dashboards/dashboard.v5"),
          },
        ],
      },
      // Sites
      {
        path: "/app/sites",
        component: () => import("./views/app/sites"),
        redirect: "/app/sites/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/sites/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/sites/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/sites/id"),
          },
        ],
      },
      // Users
      {
        path: "/app/users",
        component: () => import("./views/app/users"),
        redirect: "/app/users/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/users/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/users/create"),
          },
          {
            path: "upload",
            component: () => import("./views/app/users/upload"),
          },
          {
            path: ":id",
            component: () => import("./views/app/users/id"),
          },
        ],
      },
      // Permissions
      {
        path: "/app/permissions",
        component: () => import("./views/app/permissions"),
        redirect: "/app/permissions/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/permissions/list"),
          },
        ],
      },
      // Programs
      {
        path: "/app/programs",
        component: () => import("./views/app/programs"),
        redirect: "/app/programs/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/programs/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/programs/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/programs/id"),
          },
        ],
      },
      // Values
      {
        path: "/app/values",
        component: () => import("./views/app/values"),
        redirect: "/app/values/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/values/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/values/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/values/id"),
          },
        ],
      },
      // Value-Lists
      {
        path: "/app/value-lists",
        component: () => import("./views/app/value-lists"),
        redirect: "/app/value-lists/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/value-lists/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/value-lists/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/value-lists/id"),
          },
        ],
      },
      // Program Posts
      {
        path: "/app/program-posts",
        component: () => import("./views/app/program-posts"),
        redirect: "/app/program-posts/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/program-posts/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/program-posts/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/program-posts/id"),
          },
        ],
      },
      // Program Tasks
      {
        path: "/app/programs/:program_id/program-tasks",
        component: () => import("./views/app/program-tasks"),
        redirect: "/app/programs/:program_id/program-tasks/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/program-tasks/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/program-tasks/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/program-tasks/id"),
          },
        ],
      },
      // User Programs
      {
        path: "/app/user-programs",
        component: () => import("./views/app/user-programs"),
        redirect: "/app/user-programs/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-programs/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-programs/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/user-programs/id"),
          },
        ],
      },
      // User Program Posts
      {
        path: "/app/user-program-posts",
        component: () => import("./views/app/user-program-posts"),
        redirect: "/app/user-program-posts/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-program-posts/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-program-posts/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/user-program-posts/id"),
          },
        ],
      },
      // User Program Tasks
      {
        path: "/app/user-program-tasks",
        component: () =>
          import("./views/app/user-program-tasks/user-program-list"),
        redirect: "/app/user-program-tasks/list",
        children: [
          {
            path: "list",
            component: () =>
              import("./views/app/user-program-tasks/user-program-list"),
          },
        ],
      },
      // User Program Tasks details
      {
        path: "/app/user-program/:user_program_id/user-program-tasks",
        component: () => import("./views/app/user-program-tasks"),
        redirect: "/app/user-program/:user_program_id/user-program-tasks/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-program-tasks/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-program-tasks/create"),
          },
          {
            path: ":id",
            component: () => import("./views/app/user-program-tasks/id"),
          },
        ],
      },
      // KARCO Tasks
      {
        path: "/app/karco-tasks",
        component: () =>
          import("./views/app/karco-tasks"),
        redirect: "/app/karco-tasks/list",
        children: [
          {
            path: "list",
            component: () =>
              import("./views/app/karco-tasks/list"),
          },
          {
            path: "upload",
            component: () =>
              import("./views/app/karco-tasks/upload"),
          },
        ],
      },
    ],
  },
  // sessions
  {
    path: "/app/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/app/sessions/signIn",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/sessions/signIn"),
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp"),
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot"),
      },
    ],
  },

  {
    path: "/vertical-sidebar",
    component: () => import("./containers/layouts/verticalSidebar"),
  },
  {
    path: "*",
    component: () => import("./views/app/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
