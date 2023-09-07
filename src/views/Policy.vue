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
  <main class="policy">policy page</main>
</template>

<style lang="scss" scoped></style>
