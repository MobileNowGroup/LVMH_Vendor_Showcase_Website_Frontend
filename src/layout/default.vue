<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import HeadComponent from "@/components/HeadComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import { onMounted, onBeforeUpdate, ref, watch } from "vue";
import { authStore } from "../stores/authStore";
import { storeToRefs } from "pinia";

const $router = useRouter();
const $route = useRoute();
const pathArray = ["/login", "/", ""];
let showModel = ref(true);

let store = authStore();
const { cookiesIsSave, userName, StorageTime, ExpirationTime } =
  storeToRefs(store);

let loginPage = ref(false);

onMounted(() => {
  console.log(cookiesIsSave.value);
  // cookiesIsSave.value ? (showModel.value = false) : (showModel.value = true);
  if ($route.path !== "/vendorlisting") {
  }
  // 判断路由，控制当前导航标签
  loginPage.value = pathArray.some((item) => {
    return $route.path === item;
  });
});

onBeforeUpdate(() => {});

// 判断路由，控制当前导航标签
watch(
  () => $route.path,
  (newPath, oldPath) => {
    if (newPath !== "/vendorlisting") {
    } else {
      // showCookies.value = true;
    }
    loginPage.value = pathArray.some((item) => {
      return newPath === item;
    });
  },
  { immediate: true }
);
const closeCookies = () => {
  showModel.value = false;
};
const agreeSaveCookies = () => {
  // 保存用户名什么的
  store.saveCookiesFn();
  showModel.value = false;
};
</script>

<template>
  <div class="layout" ref="layoutDom">
    <div v-if="loginPage">
      <RouterView />
    </div>
    <div v-else>
      <div v-if="showModel" class="fixed w-screen h-screen z-50 bg-black/50">
        <div
          class="absolute bottom-0 w-screen h-fit lg:px-32 py-10.5 px-16 flex justify-between bg-black items-center"
        >
          <img
            class="absolute top-8 right-14 cursor-pointer"
            @click="closeCookies"
            src="../assets/images/icon/close_white.svg"
            alt=""
          />
          <div class="lg:mt-0 mt-16 w-full flex justify-between items-center">
            <p class="text-[#E9EAEC] lg:w-190 text-[14px] font-medium leading-normal">
              We use essential cookies to make our site work. With your content,
              we may also use non-essential cookies to improve user experience
              and analyze website traffic. By clicking ”Accept”, you agree to
              put website’s cookies use as described in our “<router-link
                class="underline"
                to="/Policy"
                >Cookie Policy</router-link
              >”.
            </p>
            <div class="flex">
              <button
                class="py-2.5 w-[160px] text-[#E9EAEC] text-center h-min text-[14px] font-medium border-[#E9EAEC] border mr-[16px]"
                @click="closeCookies"
              >
                Reject
              </button>
              <button
                class="py-2.5 w-[160px] text-black text-center h-min text-[14px] font-medium bg-[#E9EAEC] border-[#E9EAEC]"
                @click="agreeSaveCookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <HeadComponent></HeadComponent>
      <RouterView />
      <FootComponent></FootComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .cookies {
//   position: fixed;
//   z-index: 99999;
//   width: 100vw;
//   height: 100vh;
//   &-item {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     img {
//       position: absolute;
//       top: 2rem;
//       right: 2rem;
//     }
//   }
// }
</style>
