<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import mockData from "../util/mockData";
import vendorList from "@/components/vendorListComponent.vue";
import { authStore } from "../stores/authStore";
import { useRouter, useRoute } from "vue-router";

let store = authStore();

let resultCount = ref(0);

let vendorListArray = ref([] as any);
const $router = useRouter(); // router 路由操作
const $route = useRoute(); // 路由信息

const param = $route.query.queryParam;
// console.log(param)

mockData.vendorListMock.forEach((element, index) => {
  if (!param) return;
  Object.values(element).forEach((value) => {
    if (value.toString().indexOf(param) > -1) {
      vendorListArray.value.push(element);
    }
  });
  // Object.entries(element).forEach((item) => {
  //   console.log(item);
  // });
  // Object.keys(element).forEach((key) => {
  //   console.log(key);
  // });
});
resultCount.value = vendorListArray.value.length;

onMounted(() => {});
const openCookie = () => {
  //  store.CookiesModelopen()
};
</script>

<template>
  <main class="vendor-listing" :class="{ hasdeco: true }">
    <div class="vendor-list">
      <!-- 搜索到无结果 -->
      <div class="result" v-if="resultCount === 0">All Results: 0 Agency</div>
      <!-- 搜索到有无结果 -->
      <div class="result" v-else>
        Search Results - “{{ param }}”: {{ resultCount }} Agency
      </div>
      <vendorList
        v-show="vendorListArray.length > 0"
        :vendorListArray="vendorListArray"
      ></vendorList>
      <div class="noresult">
        <p class="noresult-desc">Sorry, there is no relevant search result.</p>
        <button
          class="noresult-button"
          @click="
            () => {
              $router.push({
                name: 'vendorlisting',
              });
            }
          "
        >
          BACK
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vendor-listing {
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
  background: url("/images/page_bg.png") repeat;
}

.result {
  color: #20253b;
  font-family: avenir_next_text;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 6rem;
  margin-bottom: 2rem;
}
.vendor-list {
  margin: 0 17.8rem;
}
@media screen and (max-width: 1069px) {
  .vendor-list {
    margin: 0 7.8rem;
  }
}
@media screen and (max-width: 960px) {
  .vendor-list {
    margin: 0 auto;
  }

  .result {
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 3rem 1.5rem 1.8rem;
  }
}
.noresult {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
  margin-top: 19.8rem;
  &-desc {
    color: var(--lvmh-primary-1100, #20253b);
    text-align: center;
    font-family: lvmh_regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &-button {
    color: var(--lvmh-primary-110, #e9eaec);
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.028px;
    display: flex;
    width: 12rem;
    height: 4rem;
    margin: 2rem;
    border: none;
    justify-content: center;
    align-items: center;
    background: var(--lvmh-primary-1100, #20253b);
  }
}
</style>
