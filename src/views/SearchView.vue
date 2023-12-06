<script setup lang="ts">
import { onUpdated, onMounted, computed, reactive, ref, watch } from 'vue'
import mockData from '../util/mockData'
import vendorList from '@/components/vendorListComponent.vue'
import { authStore, commonStore } from '../stores/authStore'
import { useRouter, useRoute } from 'vue-router'
// import { AnyARecord } from 'dns'
let store = authStore()
let cStore = commonStore()
let resultCount = ref(0)

let vendorListArray = ref([] as any)
const $router = useRouter() // router 路由操作
const $route = useRoute() // 路由信息

var param = $route.query.queryParam
var searchType = $route.query.searchType
var filterList = mockData.filterListMock
const updateState = computed(() => $route.query.update)
const filterDataFn = () => {
  vendorListArray.value = []
  if (searchType === 'search') {
    filterList = mockData.filterListMock
    if (param) {
      mockData.vendorListMock.forEach((element, index) => {
        param = param ? param.toLocaleString().toLocaleLowerCase() : ''
        if (element.vendorName.toLocaleLowerCase().indexOf(param) != -1) {
          const newArr = vendorListArray.value.filter((item: any) => {
            return item.id === element.id
          })
          if (newArr.length == 0) {
            vendorListArray.value.push(element)
          }
        }
        if (element.vendorCategory.toLocaleLowerCase().indexOf(param) != -1) {
          const newArr = vendorListArray.value.filter((item: any) => {
            return item.id === element.id
          })
          if (newArr.length == 0) {
            vendorListArray.value.push(element)
          }
        }
        if (element.vendorStatus.toLocaleLowerCase().indexOf(param) != -1) {
          const newArr = vendorListArray.value.filter((item: any) => {
            return item.id === element.id
          })
          if (newArr.length == 0) {
            vendorListArray.value.push(element)
          }
        }
        const newTagsArr = element.vendorTags.filter(obj => {
          param = param ? param.toLocaleString().toLocaleLowerCase() : ''
          return obj.toLocaleLowerCase().indexOf(param) != -1
        })
        if (newTagsArr.length) {
          const newArr = vendorListArray.value.filter((item: any) => {
            return item.id === element.id
          })
          if (newArr.length == 0) {
            vendorListArray.value.push(element)
          }
        }
      })
    } else {
      vendorListArray.value = mockData.vendorListMock
    }
  } else if (searchType === 'filter') {
    let tempArry: any = []
    filterList.forEach((items, itemsindex) => {
      tempArry.push(JSON.parse(JSON.stringify(items.menuItemList)))
    })
    tempArry.forEach((itema: any, indexa: any) => {
      itema.forEach((itemb: any, indexb: any) => {
        if (itemb.isChoosed) {
          mockData.vendorListMock.forEach((element, index) => {
            if (itemb.type === 'category') {
              //category
              if (
                itemb.desc
                  .toLocaleLowerCase()
                  .indexOf(element.vendorCategory.toLocaleLowerCase()) > -1
              ) {
                const newArr = vendorListArray.value.filter((item: any) => {
                  return item.id === element.id
                })
                if (newArr.length == 0) {
                  vendorListArray.value.push(element)
                }
              }
            } else if (itemb.type === 'tags') {
              //tags
              // debugger
              const newTagsArr = element.vendorTags.filter(obj => {
                const itemDesc = itemb.desc
                  ? `#${itemb.desc}`.toLocaleLowerCase()
                  : ''
                return obj.toLocaleLowerCase().indexOf(itemDesc) != -1
              })
              if (newTagsArr.length) {
                const newArr = vendorListArray.value.filter((item: any) => {
                  return item.id === element.id
                })
                if (newArr.length == 0) {
                  vendorListArray.value.push(element)
                }
              }
            } else if (itemb.type === 'status') {
              //status
              if (
                element.vendorStatus
                  .toLocaleLowerCase()
                  .indexOf(itemb.desc.toLocaleLowerCase()) > -1
              ) {
                const newArr = vendorListArray.value.filter((item: any) => {
                  return item.id === element.id
                })
                if (newArr.length == 0) {
                  vendorListArray.value.push(element)
                }
              }
            }
          })
        }
      })
    })
  } else {
    mockData.vendorListMock.forEach((element, index) => {
      vendorListArray.value.push(element)
    })
  }
  // 设置搜索数据总数
  resultCount.value = vendorListArray.value.length
}

watch(updateState, (newValue, oldValue) => {
  if (newValue) {
    searchType = $route.query.searchType
    param = $route.query.queryParam
    filterDataFn()
  }
})
onMounted(() => {
  filterDataFn()
})
const openCookie = () => {
  //  store.CookiesModelopen()
}
</script>

<template>
  <main class="vendor-listing" :class="{ hasdeco: true }">
    <div class="vendor-list">
      <!-- 搜索到无结果 -->
      <div class="result" v-if="resultCount === 0">
        <div>All Results: 0 Agency</div>
        <div class="noresult">
          <p class="noresult-desc">
            Sorry, there is no relevant search result.
          </p>
          <button
            class="noresult-button"
            @click="
              () => {
                cStore.clearFilter(true)
                $router.push({
                  name: 'vendorlisting',
                })
              }
            "
          >
            BACK
          </button>
        </div>
      </div>
      <!-- 搜索到有无结果 -->
      <div class="result" v-else>
        <div style="padding-bottom: 20px">
          <span v-if="searchType === 'search' && param">
            Search Results - “{{ param }}”: {{ resultCount }} Agency
          </span>
          <span v-else>Search Results: {{ resultCount }} Agency</span>
        </div>
        <vendorList
          v-show="vendorListArray.length > 0"
          :vendorListArray="vendorListArray"
        ></vendorList>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vendor-listing {
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
  background: url('/images/page_bg.png') repeat;
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
