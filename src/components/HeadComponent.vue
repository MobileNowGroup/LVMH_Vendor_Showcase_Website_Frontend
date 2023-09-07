<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import mockData from "../util/mockData";
import { throttle } from "@/util/common";

let filterNumber = ref(0);
let searchVisibale = ref(false); // searchbox是否展示
let searchValue = ref(""); // 需要search 的数据
let filterVisibale = ref(false); // filterbox是否展示
let filterVisibaleBg = ref(false); // filterbox background
const filterList = ref(mockData.filterListMock); // filter数据
const filterShow = ref(true); // 是否展示filter
let decoVisiable = ref(false); // 是否展示顶部装饰文本
let decoText = ref("Agency Listing"); // 顶部装饰文本内容
const $route = useRoute(); // router 路由信息
const $router = useRouter(); // router 路由操作
const headerDom = ref(null);
const decoShowArray = ["/vendordetail", "/policy"]; // 不展示agency listing 的页面
decoVisiable.value = decoShowArray.every((item) => {
  return item !== $route.path;
});

onMounted(() => {
  if (window) {
    window.addEventListener("scroll", _onPageScroll);
  }
  // 启用filter功能
  filterShow.value = $route.path !== "/vendordetail";

  // else {
  // (headerDom.value as any).setAttribute(
  //   "style",
  //   "background: rgba(255,255,255,0)",
  // );
  // }
});

watch(
  () => $router.currentRoute.value.path,
  (newPath, oldPath) => {
    //  监听路由变化，动态添加header下面的装饰文本
    decoVisiable.value = decoShowArray.every((item) => {
      if ("/projectdemo" === item) {
        decoText.value = "qi ta ming zi";
      }
      return item !== newPath;
    });

    filterShow.value = newPath !== "/vendordetail";

    // switch (newPath) {
    //   case "/projectdemo":
    //     decoVisiable.value = true;
    //     decoText.value = "qi ta ming zi";
    //     break;
    //   case "/vendorlisting":
    //     decoVisiable.value = true;
    //     decoText.value = "Agency Listing";
    //     break;
    //   default:
    //     decoVisiable.value = false;
    //     break;
    // }
  },
  { immediate: true }
);

/** 返回vendorlisting */
const backToHome = () => {
  $router.push({ name: "vendorlisting" });
};
/** 打开searc或者filter */
const openBox = (e: any, openType: string) => {
  if (openType === "search") {
    searchVisibale.value = true;
    filterVisibale.value = false;
  } else {
    filterVisibale.value = true;
    searchVisibale.value = false;
    filterVisibaleBg.value = true; // bg 展示
  }
};
/** 关闭searc或者filter */
const closeBox = (e: any, closeType: any) => {
  // 点击关闭searchbox
  if (e) e.cancelBubble = true;
  // e.stopPropagation()
  // e.preventDefault()
  if (closeType === "search") {
    // (headerDom.value as any).setAttribute(
    //   "style",
    //   "background: rgba(255,255,255,0.7)"
    // );
    searchVisibale.value = false;
  } else {
    filterNumber.value = 0;
    filterList.value.forEach((menu, menuIndex) => {
      filterNumber.value += menu.selectedCount;
    });
    filterVisibale.value = false;
    setTimeout(() => {
      filterVisibaleBg.value = false;
    }, 800);
  }
  // console.log('关闭',filterVisibale.value)
  return false;
};
/**清空所有filter */
const clearFilter = () => {
  filterList.value.forEach((menu, menindex) => {
    // 清空所有category num
    menu.selectedCount = 0;
    // 清空filter总数量
    filterNumber.value = 0;
    // 所有menuitem选中状态清空
    menu.menuItemList.forEach((menuItem) => {
      menuItem.isChoosed = false;
    });
  });
};
/** 根据filter查询结果 */
const searchResult = (e: any, searchType: string) => {
  // 点击查询结果
  console.log(searchType);
  if (searchType === "search") {
    // 执行search逻辑
  } else {
    // 执行filter逻辑
  }
  $router.push({
    name: "search",
  });
};

/** 页面滚动 */
const _onPageScroll = () => {
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  if (scrollTop > 0) {
    decoVisiable.value = false;
  } else {
    decoVisiable.value = decoShowArray.every((item) => {
      return item !== $route.path;
    });
  }
};
// 页面销毁
onUnmounted(() => {
  window.removeEventListener("scroll", _onPageScroll);
});
</script>
<template>
  <div ref="headerDom" class="header">
    <div class="topbox">
      <img
        class="logo"
        src="../assets/images/logo_black.png"
        @click="backToHome"
        alt=""
      />
      <div class="condition-box is-flex-center">
        <div
          class="condition is-flex-center"
          @click="openBox($event, 'search')"
        >
          <img class="search" src="@/assets/images/icon/search.svg" alt="" />
          <span>search</span>
          <Transition>
            <div class="search-box" v-show="searchVisibale">
              <div class="bg-box">
                <img
                  class="close-icon"
                  src="@/assets/images/icon/close.svg"
                  alt=""
                  @click.stop="closeBox($event, 'search')"
                />
                <div class="inner-box">
                  <div class="input-box">
                    <img
                      class="search-icon"
                      src="@/assets/images/icon/search_gray.svg"
                      alt=""
                    />

                    <input
                      type="text"
                      placeholder="Search here"
                      v-model="searchValue"
                      @focus="
                        (e) => {
                          (e as any).target.previousSibling.setAttribute(
                            'style',
                            'filter: drop-shadow(#000 2000px 0);transform: translateX(-2000px);'
                          );
                        }
                      "
                      @blur="
                        (e) => {
                          (e as any).target.previousSibling.setAttribute(
                            'style',
                            'background: transparent'
                          );
                        }
                      "
                    />
                    <p
                      class="search-clear"
                      @click="
                        () => {
                          searchValue = '';
                        }
                      "
                    >
                      Clear
                    </p>
                  </div>
                  <button
                    @click="
                      searchResult($event, 'search'), closeBox($event, 'search')
                    "
                  >
                    SEARCH
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
          <img class="filter" src="@/assets/images/icon/filter.svg" alt="" />
          <span> filter({{ filterNumber }}) </span>
          <div class="filter-box" v-show="filterVisibaleBg">
            <Transition
              enter-active-class="animate__animated animate__fadeInRight"
              leave-active-class="animate__animated animate__fadeOutRight"
            >
              <div class="bg-box" v-show="filterVisibale">
                <img
                  class="close-icon"
                  src="@/assets/images/icon/close.svg"
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
                            menu.isShow = !menu.isShow;
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
                        <img
                          :class="{ 'menu-title-show': menu.isShow }"
                          src="../assets/images/icon/arrow.svg"
                          alt=""
                        />
                      </p>
                      <div v-show="menu.isShow">
                        <p
                          class="menu-item"
                          v-for="(menuItem, menuItemIndex) of menu.menuItemList"
                          :key="menuItemIndex"
                          @click="
                            (e) => {
                              menuItem.isChoosed = !menuItem.isChoosed;
                              menu.selectedCount = 0;
                              menu.menuItemList.forEach((item) => {
                                if (item.isChoosed) {
                                  menu.selectedCount += 1;
                                }
                              });
                            }
                          "
                        >
                          <input
                            type="checkbox"
                            name="my-checkbox"
                            :checked="menuItem.isChoosed"
                            :id="menuIndex.toLocaleString() + menuItemIndex"
                          />
                          <label
                            :for="menuIndex.toLocaleString() + menuItemIndex"
                            @click="
                              (e) => {
                                menuItem.isChoosed = !menuItem.isChoosed;
                                menu.selectedCount = 0;
                                menu.menuItemList.forEach((item) => {
                                  if (item.isChoosed) {
                                    menu.selectedCount += 1;
                                  }
                                });
                              }
                            "
                            >{{ menuItem.desc }}</label
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="control-box">
                    <button @click="clearFilter" class="clear">CLEAR</button>
                    <button
                      @click="
                        searchResult($event, 'filter'),
                          closeBox($event, 'filter')
                      "
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <Transition
      mode="in-out"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <h1 class="agency-listing" v-show="decoVisiable">{{ decoText }}</h1>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.headbg_07 {
  background: rgba(255, 255, 255, 0.7);
}
.headbg_10 {
  background: rgba(255, 255, 255, 1);
}
.headbg_0 {
  background: rgba(255, 255, 255, 0);
}
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 1.1rem 4rem;

  div.topbox {
    // height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    border-top: 1px solid rgba(36, 55, 160, 0.15);
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .bg-box {
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
      font-family: Avenir Next;
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
      color: var(--lvmh-primary-170, #000);
      padding-bottom: 8px;
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 0;
      margin-left: 1.2rem;
      &::placeholder {
        color: #636776;
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
    border-top: 1px solid rgba(36, 55, 160, 0.15);
    background: rgba(0, 0, 0, 0.5);
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
        font-weight: 600;
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
        input[type="checkbox"] {
          width: 2rem;
          height: 2rem;
          margin-right: 0.8rem;
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }

        input[type="checkbox"]:checked::after {
          content: "\2713";
          display: block;
          cursor: pointer;
          color: #fff;
          text-indent: 0.5rem;
          font-size: 1.65rem;
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
      margin: 0 4rem;
      margin-top: 6rem;
      margin-bottom: 7.2rem;
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
        font-weight: 600;
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
        input[type="checkbox"]:checked::after {
          content: "\2713";
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
      letter-spacing: 0.28px;
      background: #fff;
      border: 1px solid #000;
    }
  }
}
</style>
