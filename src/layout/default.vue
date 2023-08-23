<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import HeadComponent from "@/components/HeadComponent.vue";
import FootComponent from "@/components/FootComponent.vue";
import { onMounted, ref, watch } from "vue";
const $router = useRouter();

let loginPage = ref(false);

onMounted(() => {
  console.log($router.currentRoute.value.path);
  console.log($router.currentRoute.value.path.indexOf("/login") > 0);
  console.log($router.currentRoute.value.path === "/");
  console.log($router.currentRoute.value.path === "");
  if (
    $router.currentRoute.value.path.indexOf("/login") > 0 ||
    $router.currentRoute.value.path === "/" ||
    $router.currentRoute.value.path === ""
  ) {
    console.log("就进来了？？");
    loginPage.value = true;
  }
});
watch(
  () => $router.currentRoute.value.path,
  (newPath, oldPath) => {
    // console.log(newPath)
    // 监听路由变化，动态添加header下面的装饰文本
    // switch (newPath) {
    //   case "/projectdemo":
    //     break;
    //   case "/vendorlisting":
    //     break;
    //   default:
    //     break;
    // }
    if (newPath.indexOf("/login") > 0 || newPath === "/" || newPath === "") {
      loginPage.value = true;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="layout" ref="layoutDom">
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
