<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import HeadComponent from "@/components/HeadComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import { onMounted, ref, watch } from "vue";
import { authStore } from "../stores/authStore";
import { storeToRefs } from "pinia";

const $router = useRouter();
const $route = useRoute();
const pathArray = ["/login", "/", ""];
let store = authStore();
const { showCookiesModel, userName, StorageTime, ExpirationTime } =
  storeToRefs(store);

let loginPage = ref(false);

onMounted(() => {
  console.log(showCookiesModel.value);
  if ($route.path !== "/vendorlisting") {
    
  }
  // 判断路由，控制当前导航标签
  loginPage.value = pathArray.some((item) => {
    return $route.path === item;
  });
});

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
  // showCookies.value = false;
  store.CookiesModelClose();
};
const agreeSaveCookies = () => {
  // 保存用户名什么的
  store.CookiesModelClose()
  // store.$patch({
  //   showCookiesModel: true,
  //   num: store.num + 1,
  // });
};
</script>

<template>
  <div class="layout" ref="layoutDom">
    <div v-if="loginPage">
      <RouterView />
    </div>
    <div v-else>
      <div
        v-if="showCookiesModel"
        class="cookies w-screen h-fit bg-slate-950/50"
      >
        <div
          class="cookies-item w-screen h-36 px-20 py-10.5 flex justify-between bg-black h-max items-center"
        >
          <p class="text-white w-190 text-sm leading-normal">
            We use essential cookies to make our site work. With your content,
            we may also use non-essential cookies to improve user experience and
            analyze website traffic. By clicking ”Accept”, you agree to put
            website’s cookies use as described in our “Cookie Policy”.
          </p>
          <div class="flex">
            <button
              class="px-10.5 py-2.5 text-white h-min border-white border mr-4"
              @click="closeCookies"
            >
              Reject
            </button>
            <button
              class="px-10.5 py-2.5 text-black h-min bg-white border-white"
              @click="agreeSaveCookies"
            >
              Accept
            </button>
          </div>
          <img
            @click="closeCookies"
            src="../assets/images/icon/close_white.svg"
            alt=""
          />
        </div>
      </div>
      <HeadComponent></HeadComponent>
      <RouterView />
      <FootComponent></FootComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  &-item {
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
}
</style>
