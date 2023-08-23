<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import HeadComponent from "@/components/HeadComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import { onMounted, ref, watch } from "vue";

const $router = useRouter();
const $route = useRoute();
const pathArray = ["/login", "/", ""];

let loginPage = ref(false);

onMounted(() => {
  // 判断路由，控制当前导航标签
  loginPage.value = pathArray.every((item) => {
    return $route.path === item;
  });
});

// 判断路由，控制当前导航标签
watch(
  () => $route.path,
  (newPath, oldPath) => {
    loginPage.value = pathArray.every((item) => {
      return newPath === item;
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="layout" ref="layoutDom">
    <div class=" w-screen h-screen bg-slate-700">
    jhhjhj
    </div>
    <div v-if="loginPage">
      <RouterView />
    </div>
    <div v-else>
      <HeadComponent></HeadComponent>
      <RouterView />
      <FootComponent></FootComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
