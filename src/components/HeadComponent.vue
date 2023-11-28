<script setup lang="ts">
import {
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
  computed,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import mockData from '../util/mockData'
import { throttle } from '@/util/common'
import { commonStore } from '@/stores/authStore'
import { match } from 'assert'
//使用递归的方式实现数组、对象的深拷贝
const sleepCopy = (obj: any) => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // 创建一个新的数组或对象，以匹配原始数据类型
  let copy: any = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    // 确保key不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归拷贝所有属性
      copy[key] = sleepCopy(obj[key])
    }
  }
  return copy
}
const filterNumber = ref(0)
let searchVisibale = ref(false) // searchbox是否展示
let searchValue = ref('') // 需要search 的数据
let filterVisibale = ref(false) // filterbox是否展示
let filterVisibaleBg = ref(false) // filterbox background
var newFilterArr = reactive(mockData.filterListMock)
let filterList = reactive(sleepCopy(mockData.filterListMock)) // filter数据
const filterShow = ref(true) // 是否展示filter
let decoVisiable = ref(false) // 是否展示顶部装饰文本
let decoText = ref('Agency Listing') // 顶部装饰文本内容
const $route = useRoute() // router 路由信息
const $router = useRouter() // router 路由操作
const headerDom = ref()
const decoShowArray = ['/vendordetail', '/policy'] // 不展示agency listing 的页面
let logoUrl = computed(() => {
  return commonStore().demoUrl
})
const updateState = computed(() => commonStore().isClearFilter)
decoVisiable.value = decoShowArray.every(item => {
  return item !== $route.path
})
// header背景色
const shutDownComponent = ref(true)

onMounted(() => {
  if (window) {
    window.addEventListener('scroll', _onPageScroll)
  }
  // 启用filter功能
  filterShow.value = $route.path !== '/vendordetail'
  // 监听路由匹配不同header背景色
  headerbg()
  // else {
  // (headerDom.value as any).setAttribute(
  //   "style",
  //   "background: rgba(255,255,255,0)",
  // );
  // }
})

const headerbg = () => {
  switch ($route.path) {
    case '/vendorlisting':
      headerDom.value.className = 'header z-10 headbg_07'
      break
    case '/vendordetail':
      headerDom.value.className = 'header z-10 headbg_10'
      break
    case '/projectdemo':
      headerDom.value.className = 'header z-10 headbg_0 headbg_image'
      break
    default:
      headerDom.value.className = 'header z-10 headbg_10'
      break
  }
}

watch(
  () => $router.currentRoute.value.path,
  (newPath, oldPath) => {
    //  监听路由变化，动态添加header下面的装饰文本
    decoVisiable.value = decoShowArray.every(item => {
      if (item === '/projectdemo') {
        decoText.value = 'qi ta ming zi'
      }
      if (item === '/vendordetail') {
        // 绕过agencylisting 动画直接强制关闭这个组件
        shutDownComponent.value = false
      } else {
        shutDownComponent.value = true
      }
      return item !== newPath
    })
    // 在这两个页面不显示filter功能
    filterShow.value = ['/vendordetail', '/projectdemo'].every(item => {
      return newPath !== item
    })
    // 强制每个页面初始化的时候滚动条在最上部
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // 监听路由匹配不同header背景色
    setTimeout(() => {
      headerbg()
    })
  },
  { immediate: true }
)
//当返回列表页面的时候清除filter数据
watch(updateState, (newValue, oldValue) => {
  if (newValue) {
    clearFilter()
    commonStore().clearFilter(false)
  }
})
onBeforeUpdate(() => {})
/** 打开searc或者filter */
const openBox = (e: any, openType: string) => {
  headerDom.value.className = 'header z-10 headbg_10'
  if (openType === 'search') {
    searchVisibale.value = true
    filterVisibale.value = false
  } else {
    filterVisibale.value = true
    searchVisibale.value = false
    filterVisibaleBg.value = true // bg 展示
    applyshowcolor()
  }
}
/** 关闭searc或者filter */
const closeBox = (e: any, closeType: any) => {
  filterList = reactive(sleepCopy(newFilterArr))
  headerbg()
  // 点击关闭searchbox
  if (e) e.cancelBubble = true
  // 获取滚动高度
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  if (scrollTop > 0) {
    headerDom.value.className = 'header z-10 headbg_10'
  }
  // e.stopPropagation()
  // e.preventDefault()
  if (closeType === 'search') {
    searchVisibale.value = false
  } else {
    filterNumber.value = 0
    filterList.forEach((menu: any, menuIndex: any) => {
      filterNumber.value += menu.selectedCount
    })
    filterVisibale.value = false
    setTimeout(() => {
      filterVisibaleBg.value = false
    }, 250)
  }
  // console.log('关闭',filterVisibale.value)
  return false
}
/**清空所有filter */
const clearFilter = () => {
  filterList.forEach((menu: any, menindex: any) => {
    // 清空所有category num
    menu.selectedCount = 0
    // 清空filter总数量
    filterNumber.value = 0
    // 所有menuitem选中状态清空
    menu.menuItemList.forEach((menuItem: any) => {
      menuItem.isChoosed = false
    })
  })
  updateMockData()
  applyshowcolor()
  if ($router.currentRoute.value.path === '/search') {
    searchValue.value = ''
    // 执行filter逻辑,进入search页面
    $router.push({
      name: 'search',
      query: {
        searchType: 'clear',
        update: Math.random(),
      },
    })
  }
}
/** 根据filter查询结果 */
const searchResult = (e: any, searchType: string) => {
  // 点击查询结果
  if (searchType === 'search') {
    filterList.forEach((menu: any, menindex: any) => {
      // 清空所有category num
      menu.selectedCount = 0
      // 清空filter总数量
      filterNumber.value = 0
      // 所有menuitem选中状态清空
      menu.menuItemList.forEach((menuItem: any) => {
        menuItem.isChoosed = false
      })
    })
    updateMockData()
    applyshowcolor()
    // 执行search逻辑,进入search页面
    $router.push({
      name: 'search',
      query: {
        searchType: 'search',
        queryParam: searchValue.value,
        update: Math.random(),
      },
    })
  } else {
    updateMockData()
    searchValue.value = ''
    // 执行filter逻辑,进入search页面
    $router.push({
      name: 'search',
      query: {
        searchType: 'filter',
        update: Math.random(),
      },
    })
  }
}
const updateMockData = () => {
  filterList.forEach((element: any) => {
    newFilterArr.forEach(newElement => {
      if (newElement.id == element.id) {
        newElement.isShow = element.isShow
        newElement.selectedCount = element.selectedCount
        newElement.menuItemList = element.menuItemList
      }
    })
  })
}
/** 页面滚动 */
const _onPageScroll = () => {
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop

  if (scrollTop > 0) {
    decoVisiable.value = false
    // 发生滚动时header背景
    headerDom.value.className = 'header z-10 headbg_10 headshadow'
  } else {
    // 监听路由匹配不同header背景色
    headerbg()
    decoVisiable.value = decoShowArray.every(item => {
      return item !== $route.path
    })
  }
}
// 用来控制filter中的apply 按钮样式
const applyshowcolorVisiable = ref(false)
const applyshowcolor = () => {
  // 判断所有filter中的数据，只要有一个是被选中那么就是true
  applyshowcolorVisiable.value = filterList.some((menu: any, menindex: any) => {
    return menu.menuItemList.some((menuItem: any) => {
      return menuItem.isChoosed
    })
  })
}
// 页面销毁
onUnmounted(() => {
  window.removeEventListener('scroll', _onPageScroll)
})
</script>
<template>
  <div ref="headerDom" class="header z-10">
    <div class="topbox">
      <img
        class="logo"
        src="/images/logo_black.png"
        @click="
          () => {
            $router.push({
              name: 'vendorlisting',
            })
            headerbg()
          }
        "
        alt=""
      />
      <div class="condition-box is-flex-center">
        <div
          class="condition is-flex-center"
          @click="openBox($event, 'search')"
        >
          <img class="search" src="/images/icon/search.svg" alt="" />
          <span>search</span>
          <Transition>
            <div class="search-box" v-show="searchVisibale">
              <div class="bg-box">
                <img
                  class="close-icon"
                  src="/images/icon/close.svg"
                  alt=""
                  @click.stop="closeBox($event, 'search')"
                />
                <div class="inner-box">
                  <div class="input-box">
                    <img
                      class="search-icon"
                      src="/images/icon/search_gray.svg"
                      alt=""
                    />

                    <input
                      type="text"
                      placeholder="Search here"
                      v-model="searchValue"
                      @focus="
                        e => {
                          ;(e as any).target.previousSibling.setAttribute(
                            'src',
                            '/images/icon/search.svg'
                          )
                        }
                      "
                      @blur="
                        e => {
                          ;(e as any).target.previousSibling.setAttribute(
                            'src',
                            '/images/icon/search_gray.svg'
                          )
                        }
                      "
                    />
                    <p
                      class="search-clear"
                      @click="
                        () => {
                          searchValue = ''
                          if ($router.currentRoute.value.path === '/search') {
                            clearFilter()
                            // 执行search逻辑,进入search页面
                            $router.push({
                              name: 'search',
                              query: {
                                searchType: 'clear',
                                queryParam: searchValue,
                                update: Math.random(),
                              },
                            })
                          }
                        }
                      "
                      v-show="searchValue"
                    >
                      Clear
                    </p>
                  </div>
                  <button
                    @click="
                      searchResult($event, 'search'), closeBox($event, 'search')
                    "
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div
          class="condition is-flex-center"
          @click="openBox($event, 'filter')"
          v-if="filterShow"
        >
          <img class="filter" src="/images/icon/filter.svg" alt="" />
          <span>filter({{ filterNumber }})</span>
          <div class="filter-box" v-show="filterVisibaleBg">
            <Transition
              enter-active-class="animate__animated animate__fadeInRight"
              leave-active-class="animate__animated animate__fadeOutRight"
            >
              <div style="width: 100%; height: 100%; display: flex">
                <div
                  style="flex: 1; background: none"
                  @click.stop="closeBox($event, 'filter')"
                />
                <div class="bg-box" v-show="filterVisibale">
                  <img
                    class="close-icon"
                    src="/images/icon/close.svg"
                    alt=""
                    @click.stop="closeBox($event, 'filter')"
                  />
                  <div class="filter-main">
                    <div class="inner-box">
                      <div
                        class="menu-box"
                        v-for="(menu, menuIndex) of filterList"
                        :key="menuIndex"
                      >
                        <p
                          class="menu-title"
                          @click="
                            () => {
                              menu.isShow = !menu.isShow
                            }
                          "
                        >
                          <span>
                            {{ menu.MenuTitle
                            }}{{
                              menu.selectedCount > 0
                                ? ` (${menu.selectedCount})`
                                : null
                            }}
                          </span>
                          <Transition
                            enter-active-class="animate__animated animate__rotateIn"
                            leave-active-class="animate__animated animate__rotateOut"
                          >
                            <img
                              :class="{
                                'menu-title-show': menu.isShow,
                                'menu-title-hide': !menu.isShow,
                              }"
                              src="/images/icon/arrow.svg"
                              alt=""
                            />
                          </Transition>
                        </p>
                        <ul v-show="menu.isShow">
                          <li
                            class="menu-item"
                            v-for="(
                              menuItem, menuItemIndex
                            ) of menu.menuItemList"
                            :key="menuItemIndex"
                            @click="
                              e => {
                                menuItem.isChoosed = !menuItem.isChoosed
                                menu.selectedCount = 0
                                menu.menuItemList.forEach((item: any) => {
                                  if (item.isChoosed) {
                                    menu.selectedCount += 1
                                  }
                                })
                                applyshowcolor()
                              }
                            "
                          >
                            <div class="flex items-center">
                              <span
                                class="inline-block w-[20px] h-[20px] border border-[#A6A8B1] mr-[8px]"
                                :class="{ checkedBg: menuItem.isChoosed }"
                              ></span>
                              <span>{{ menuItem.desc }}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="control-box">
                      <button @click="clearFilter" class="clear">CLEAR</button>
                      <button
                        :class="{ hasfilter: applyshowcolorVisiable }"
                        @click="
                          searchResult($event, 'filter'),
                            closeBox($event, 'filter')
                        "
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <div v-if="shutDownComponent">
      <Transition name="run">
        <div class="agency-listing items-center" v-if="decoVisiable">
          <img
            v-if="$route.path === '/projectdemo'"
            class="lg:w-[136px] lg:h-[78px] w-52 m-auto"
            :src="logoUrl"
            style="object-fit: contain"
            alt=""
          />
          <span v-else>{{ decoText }}</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headbg_07 {
  transition: all 0.5s linear;
  background: rgba(255, 255, 255, 0.7);
}
.headbg_10 {
  transition: all 0.5s linear;
  background: rgba(255, 255, 255, 1);
}
.headbg_0 {
  transition: all 0.5s linear;
  background: rgba(255, 255, 255, 0);
}
.headbg_image {
  transition: all 0.5s linear;
  background: url('/images/page_bg.png') repeat;
}
.headshadow {
  box-shadow: 0 1px 0px 0px #2437a026;
}
.header {
  position: fixed;
  width: 100%;

  div.topbox {
    // height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 4rem;
  }
  .agency-listing {
    height: 12rem;
    color: var(--lvmh-primary-1100, #20253b);
    text-align: center;
    font-family: lvmh_italic;
    font-size: 48px;
    font-style: italic;
    font-weight: 400;
    line-height: 10rem;
  }
  .logo {
    width: 8.1rem;
    height: 5.8rem;
    cursor: pointer;
  }
  .condition {
    margin-left: 2.4rem;
    letter-spacing: 0.075rem;
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
    img {
      margin-right: 0.4rem;
    }
  }
  .search-box {
    position: absolute;
    left: 0;
    top: 8rem;
    width: 100vw;
    height: calc(100vh - 8rem);
    // border-top: 1px solid rgba(36, 55, 160, 0.15);
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .bg-box {
      box-shadow: 0 1px 0px 0px #2437a015 inset;
      background: #fff;
      height: 12rem;
    }
    .close-icon {
      float: right;
      margin: 1.5rem 1.5rem 0;
    }
    .search-icon {
      color: #636776;
    }
    .search-clear {
      color: #a6a8b1;
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: none;
    }

    .inner-box {
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding-top: 4.2rem;
      width: fit-content;
    }
    .input-box {
      display: flex;
      height: 4rem;
      align-items: center;
      border-bottom: 1px solid #20253b;
      margin-right: 1.6rem;
      width: 41.5vw;
    }
    input {
      width: 100%;
      background: transparent;
      outline: none;
      border-style: none;
      color: var(--lvmh-primary-170, #20253b);
      padding-bottom: 8px;
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 0;
      margin-left: 1.2rem;
      &::placeholder {
        color: #d8d8d8;
      }
    }
    button {
      color: #e9eaec;
      font-family: avenir_next_text;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.028px;
      width: 12rem;
      height: 4rem;
      border: 0;
      background: #20253b;
    }
  }
  .filter-box {
    position: absolute;
    right: 0;
    top: 0rem;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .bg-box {
      float: right;
      background: #fff;
      width: 37rem;
      height: 100%;
    }
    .close-icon {
      position: absolute;
      right: 0;
      margin: 1.5rem 1.5rem 0;
    }
    .filter-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: inherit;
    }
    .inner-box {
      height: -webkit-fill-available;
      min-height: 30rem;
      margin: 8rem 0rem 0 4rem;
      padding-right: 3rem;
      overflow-y: scroll;
    }
    .inner-box ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 10px;
    }
    .menu {
      &-box {
        border-bottom: 1px solid #ccc;
      }
      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.5s linear;
        margin: 2.4rem 0;
        color: #20253b;
        font-family: avenir_next_text;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
        text-transform: uppercase;
        img {
          margin-right: -0.4rem;
        }
        &-hide {
          transform: rotate(0deg);
          transition: all 0.3s linear 0s;
        }
        &-show {
          transform: rotate(180deg);
          transition: all 0.3s linear 0s;
        }
      }

      &-item {
        color: var(--lvmh-primary-1100, #20253b);
        font-family: avenir_next_text;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: none;
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
        letter-spacing: -0.1px;
        input[type='checkbox'] {
          width: 2rem;
          height: 2rem;
          border-radius: 0;
          margin-right: 0.8rem;
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }
        .checkedBg {
          width: 20px;
          height: 20px;
          border-color: #20253b;
          background: url('/images/checkbox.png');
          background-size: contain;
        }
      }
    }
    .control-box {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      align-items: center;
      // width: 100%;
      margin: 0 4rem;
      margin-bottom: 6.2rem;
    }
    button {
      color: #a6a8b1;
      font-family: avenir_next_text;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.028px;
      margin: 0.8rem auto;
      width: 100%;
      height: 4rem;
      border: 0;
      background: #e9eaec;
    }
    button.hasfilter {
      color: #e9eaec;
      background: #20253b;
    }
    button.clear {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.28px;
      background: #fff;
      border: 1px solid #000;
    }
  }
}

@media screen and (max-width: 960px) {
  .header {
    width: 100%;
    padding: 1rem 1.5rem;
    div.topbox {
      padding: 0;
    }
    .logo {
      width: 5.6rem;
      height: 4rem;
    }
    .condition {
      margin-left: 2.4rem;
      letter-spacing: 0.075rem;

      font-size: 1.2rem;
      img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.4rem;
      }
    }
    .agency-listing {
      height: 8rem;
      color: var(--lvmh-primary-1100, #20253b);
      text-align: center;
      font-family: lvmh_italic;
      font-size: 2.8rem;
      font-style: italic;
      font-weight: 400;
      line-height: normal;
      line-height: 8rem;
    }
  }
  .search-box {
    top: 6rem !important;
    .bg-box {
      background: #fff;
      height: 16.7rem !important;
    }
    .inner-box {
      display: block !important;
      align-items: center;
      margin: 0 auto;
      padding-top: 0rem !important;
      width: calc(100vw - 3rem) !important;
    }
    .input-box {
      display: flex;
      height: 4rem;
      align-items: center;
      border-bottom: 1px solid #20253b;
      margin: 0rem;
      width: 100% !important;
    }
    button {
      width: 100% !important;
      margin: 2.4rem 0 2.88rem;
    }
  }
  .filter-box {
    position: absolute;
    right: 0;
    top: 0rem;
    width: 100vw;
    height: 100vh;
    border-top: 1px solid rgba(36, 55, 160, 0.15);
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.5s linear;
    .bg-box {
      float: right;
      background: #fff;
      width: 30rem !important;
      height: 100%;
    }
    .close-icon {
      position: absolute;
      right: 0;
      margin: 1.5rem 1.5rem 0;
    }
    .filter-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: inherit;
    }
    .inner-box {
      height: -webkit-fill-available;
      min-height: 30rem;
      margin: 6.6rem 0rem 0 2rem !important;
      padding-right: 2rem !important;
      overflow-y: scroll;
    }
    .inner-box ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 10px;
    }
    .menu {
      &-box {
        border-bottom: 1px solid #ccc;
      }
      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.5s linear;
        margin: 2.4rem 0;
        color: #20253b;
        font-family: avenir_next_text;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
        text-transform: uppercase;
        img {
          margin-right: -0.4rem;
        }
        &-show {
          transform: rotate(180deg);
          transition: all 0.5s linear;
        }
      }

      &-item {
        color: var(--lvmh-primary-1100, #20253b);
        font-family: avenir_next_text;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: none;
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
        letter-spacing: -0.1px;
        input {
          width: 2rem;
          height: 2rem;
          margin-right: 0.8rem;
        }
        input[type='checkbox']:checked::after {
          content: '\2713';
          display: block;
          cursor: pointer;
          color: #fff;
          text-indent: 0.5rem;
          font-size: 1.65rem;
          border-radius: 0.4rem;
          background-color: black;
        }
      }
    }
    .control-box {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      align-items: center;
      // width: 100%;
      margin: 0 2rem !important;
      margin-top: 4rem !important;
      margin-bottom: 4rem !important;
    }
    button {
      color: #e9eaec;
      font-family: avenir_next_text;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.028px;
      margin: 0.8rem auto;
      width: 100%;
      height: 4rem;
      border: 0;
      background: #20253b;
    }
    button.clear {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 0;
      margin-top: 0.8rem;
      letter-spacing: 0.28px;
      background: #fff;
      border: 1px solid #000;
    }
  }
}
</style>
