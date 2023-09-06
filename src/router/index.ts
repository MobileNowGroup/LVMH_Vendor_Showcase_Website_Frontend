import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import VendorListing from "@/views/VendorListingView.vue";
import vendorDetail from "@/views/VendorDetailView.vue";
import Search from "@/views/SearchView.vue";
import projectDemo from "@/views/ProjectDemoView.vue";
import Policy from "@/views/Policy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: LoginView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/vendorlisting",
      name: "vendorlisting",
      component: VendorListing,
    },
    {
      path: "/vendordetail",
      name: "vendordetail",
      component: vendorDetail,
    },
    {
      path: "/projectdemo",
      name: "projectdemo",
      component: projectDemo,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/Policy",
      name: "Policy",
      component: Policy,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SearchView.vue"),
    },
  ],
});

export default router;
