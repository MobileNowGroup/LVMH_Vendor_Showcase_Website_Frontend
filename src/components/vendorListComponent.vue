<script setup lang="ts" name="vendorListComponent">
import { useRouter } from "vue-router";
import type vendorItem from "@/model/vendor.model";
// props传值，非ts写法，ts写法后面后面的完整代码有，具体看后面的代码

const props = defineProps({
  vendorListArray: Array<vendorItem>,
});
const emit = defineEmits(["change", "delete"]);

const $router = useRouter();
</script>

<template>
  <main class="vendor-listing-component">
    <div
      class="vendor"
      v-for="(vendor, vendorIndex) of vendorListArray"
      :key="vendorIndex"
    >
      <router-link :to="`/vendordetail?id=${vendor.id}`">
        <div class="vendor-head">
          <img class="vendor-logo" src="@/assets/images/cat.png" alt="" />
          <div>
            <p class="vendor-name">
              {{ vendor.vendorName }}
            </p>

            <!-- <p
            class="vendor-name"
            @click="
              () => {
                $router.push({
                  name: 'vendordetail',
                  query: {
                    id: vendor.id.toLocaleString()
                  }
                })
              }
            "
          >
            {{ vendor.vendorName }}
          </p> -->
            <span class="vendor-category">{{ vendor.vendorCategory }}</span>
            <span class="vendor-category-num">{{
              vendor.vendorCategoryNum
            }}</span>
          </div>
        </div>
        <div class="vendor-main">
          <p class="vendor-brief">{{ vendor.vendorBrief }}</p>
          <p>
            <span
              class="vendor-tag"
              v-for="(tag, tagIndex) of vendor.vendorTags"
              :key="tagIndex"
              >{{ tag }}</span
            >
          </p>
        </div>
        <div class="vendor-foot">
          <p class="vendor-status">{{ vendor.vendorStatus }}</p>
          <div class="vendor-dots">
            <div
              class="vendor-dot"
              :class="{ 'vendor-dot-level': vendor.vendorDot > valueIndex }"
              v-for="(value, valueIndex) of 4"
              :key="valueIndex"
            ></div>
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vendor {
  &-listing-component {
    display: grid;
    grid-gap: 3.2rem 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
  //   max-width: 34.5rem;
  //   margin: 0 auto;
  background: #fff;

  &-head {
    display: flex;
    width: 100%;
    padding: 20px 24px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 2.4rem;
    background: #2437a0;
  }
  &-logo {
    widows: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
  &-name {
    color: #ecf0fa;
    font-family: Avenir;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
  }
  &-category {
    color: #ecf0fa;
    font-family: Avenir;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &-category-num {
    color: #ecf0fa;
    font-family: Avenir;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 2.4rem 0;
    padding-bottom: 2.8rem;
    border-bottom: 1px solid #a6a8b1;
  }
  &-brief {
    overflow: hidden;
    color: #20253b;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: -moz-box;
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    -moz-line-clamp: 3;
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    margin-bottom: 1rem;
  }
  &-tag {
    color: var(--lvmh-secondary-1100, #3e65d0);
    font-family: avenir_next_text;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 2px;
    display: inline-block;
    padding: 0.2rem 0.8rem;
    margin-right: 0.4rem;
    background: var(--lvmh-secondary-110, #ecf0fa);
  }
  &-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 2.4rem 2rem;
  }
  &-status {
    color: var(--lvmh-primary-2100, #2437a0);
    font-family: avenir_next_text;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &-dots {
    display: flex;
    flex-direction: row;
  }
  &-dot {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    margin-left: 0.2rem;
    background: #eaebf6;
  }
  &-dot-level {
    background: #2437a0 !important;
  }
}
@media screen and (max-width: 1500px) {
  .vendor {
    &-listing-component {
      display: grid;
      grid-gap: 3.2rem 2.4rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
@media screen and (max-width: 1250px) {
  .vendor {
    &-listing-component {
      display: grid;
      grid-gap: 3.2rem 2.4rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (max-width: 960px) {
  .vendor {
    &-listing-component {
      grid-gap: 3.2rem 0;
      grid-template-columns: repeat(1, 1fr);
      margin: 0 1.5rem;
    }
  }
}
</style>
../model/vendor.model
