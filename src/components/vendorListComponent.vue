<script setup lang="ts" name="vendorListComponent">
import { useRouter } from 'vue-router'
import { VendorItemModel } from '@/model/vendor.model'
const props = defineProps({
  vendorListArray: Array<VendorItemModel>,
})
const emit = defineEmits(['change', 'delete'])
const vendorBriefString = (briefArr:Array<any>)=>{
  let briefStr = ""
  briefArr.forEach(element => {
    briefStr = briefStr + element.value
  });
  return briefStr
}
const $router = useRouter()
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
          <div class="vendor-logo">
            <img :src="vendor.logo" alt="" style="object-fit: contain" />
          </div>

          <div>
            <p class="vendor-name">
              {{ vendor.shortName }}
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
            <span class="vendor-category">{{ vendor.category }}</span>
            <span
              class="vendor-category-num"
              v-show="1 < parseInt(vendor.categoryCount.toString())"
            >
              +{{ vendor.categoryCount }}
            </span>
          </div>
        </div>
        <div class="vendor-main">
          <p class="vendor-brief">{{ vendorBriefString(vendor.introductions) }}</p>
          <p>
            <span
              class="vendor-tag"
              v-for="(tag, tagIndex) of vendor.tags"
              :key="tagIndex"
            >
              {{ tag.value }}
            </span>
          </p>
        </div>
        <div class="vendor-foot">
          <p class="vendor-status">{{ vendor.status }}</p>
          <div class="vendor-dots">
            <div
              class="vendor-dot"
              :class="{ 'vendor-dot-level': vendor.dot > valueIndex }"
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
  box-shadow: 0px 7px 14px 0px rgba(62, 101, 208, 0.1);
  // min-width: 345px;
  &-listing-component {
    display: grid;
    grid-gap: 3.2rem 2.4rem;
    grid-template-columns: repeat(3, 1fr);
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
    min-width: 5rem;
    min-height: 5rem;
    border-radius: 50%;
    margin-right: 1.2rem;
    background: #fff;
    display: flex;
    align-items: center;
    img {
      width: 3.3rem;
      height: 3.3rem;
      margin: auto;
    }
  }
  &-name {
    color: #ecf0fa;
    font-family: Avenir;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    @include ellipsisLn(1);
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
    @include ellipsisLn(3);
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
