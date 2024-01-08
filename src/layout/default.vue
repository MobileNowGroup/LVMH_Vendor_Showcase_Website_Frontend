<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import HeadComponent from '@/components/HeadComponent.vue'
import FootComponent from '@/components/FootComponent.vue'
import { onMounted, onBeforeUpdate, ref, watch } from 'vue'
import { authStore } from '../stores/authStore'

const $router = useRouter()
const $route = useRoute()
let showModel = ref(true)
let loginPage = ref(false)

onMounted(() => {
  // loginPage.value = authStore().accessToken.length === 0
})
onBeforeUpdate(() => {})

// 判断路由，控制当前导航标签
watch(
  () => $route.path,
  (newPath, oldPath) => {
    const isLogin = authStore().accessToken.length === 0 || newPath === '/login'
    if (isLogin) {
      $router.push({
        name: "login",
      }).finally(()=>{
        loginPage.value = true
      });
    }else{
      loginPage.value = newPath === '/'
    }
  },
  { immediate: true }
)
const closeCookies = () => {
  showModel.value = false
}
const agreeSaveCookies = () => {
  // 保存用户名什么的
  authStore().saveCookiesFn()
  showModel.value = false
}
</script>

<template>
  <div class="layout" ref="layoutDom">
    <!-- <div v-if="loginPage">
      <RouterView />
    </div> -->
    <div>
      <div v-if="false" class="fixed w-screen h-screen bg-black/50 z-[999]">
        <div
          class="absolute bottom-0 w-screen h-fit lg:px-32 lg:py-10.5 px-[15px] pt-[40px] pb-[23px] flex justify-between bg-black items-center"
        >
          <img
            class="absolute lg:top-8 lg:right-14 top-[15px] right-[15px] cursor-pointer"
            @click="closeCookies"
            src="/images/icon/close_white.svg"
            alt=""
          />
          <div
            class="w-full flex lg:flex-row flex-col justify-between lg:items-center"
          >
            <p
              class="cookies text-[#E9EAEC] lg:w-190 lg:text-[14px] text-[12px] font-medium leading-normal"
            >
              We use essential cookies to make our site work. With your content,
              we may also use non-essential cookies to improve user experience
              and analyze website traffic. By clicking ”Accept”, you agree to
              put website’s cookies use as described in our “
              <router-link class="underline" to="/Policy">
                Cookie Policy
              </router-link>
              ”.
            </p>
            <div class="buttonbox lg:mt-0 mt-5">
              <button
                class="py-2.5 lg:w-[160px] text-[#E9EAEC] text-center h-min text-[14px] font-medium border-[#E9EAEC] border lg:mr-[16px]"
                @click="closeCookies"
              >
                Reject
              </button>
              <button
                class="py-2.5 lg:w-[160px] text-black text-center h-min text-[14px] font-medium bg-[#E9EAEC] border-[#E9EAEC] border"
                @click="agreeSaveCookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 100vh; display:flex; flex-flow: column nowrap;">
        <HeadComponent v-show="!loginPage"></HeadComponent>
        <RouterView style="flex: 1; overflow-y: auto;" />
        <FootComponent v-show="!loginPage"></FootComponent>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttonbox {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 430px) {
  .buttonbox {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 12px /* 8px */;
  }
}

.cookies {
  color: var(--neutral-0, #fff);
  font-family: avenir_next_text;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
}
</style>
