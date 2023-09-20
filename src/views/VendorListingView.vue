<script setup lang="ts">
import { reactive, ref } from "vue";
import mockData from "../util/mockData";
import vendorList from "@/components/vendorListComponent.vue";
import { authStore } from "../stores/authStore";

let store = authStore();

let resultCount = ref(19);

let vendorListArray = ref();
vendorListArray.value = mockData.vendorListMock;

const openCookie = () => {
  //  store.CookiesModelopen()
};
</script>

<template>
  <main class="vendor-listing" :class="{ hasdeco: true }">
    <div class="vendor-list">
      <!-- 展示所有数据 -->
      <div
        class="result font-weight"
        v-if="resultCount > 0"
        @click="openCookie"
      >
        All Results: {{ resultCount }} Agencies
      </div>
      <vendorList
        v-show="vendorListArray.length > 0"
        :vendorListArray="vendorListArray"
      ></vendorList>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vendor-listing {
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
  background: url("../assets/images/page_bg.png") repeat;
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
    font-family: lvmh_italic;
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
