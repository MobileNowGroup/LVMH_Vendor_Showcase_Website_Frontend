<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import mockData from "../util/mockData";
import { useRouter } from "vue-router";
import { isMobile } from "@/util/common";

const $router = useRouter();
const vendor = ref({} as any);
const featureShow = ref("link");

import hennessyLogo from "/images/logo/hennessy logo.png";
import lcLogo from "/images/logo/lc-logo.png";
import leicaLogo from "/images/logo/leica-logo.png";
import sephoraLogo from "/images/logo/sephora-logo.png";
import sweatyLogo from "/images/logo/sweaty-logo.png";
import brand from "/images/brand/brand.png";
import brand1 from "/images/brand/brand-1.png";
import brand2 from "/images/brand/brand-2.png";
import brand4 from "/images/brand/brand-4.png";
const slideList = [
  { slideName: "hennessy", slideSrc: hennessyLogo },
  { slideName: "hennessy", slideSrc: lcLogo },
  { slideName: "hennessy", slideSrc: leicaLogo },
  { slideName: "hennessy", slideSrc: sephoraLogo },
  { slideName: "hennessy", slideSrc: sweatyLogo },
  { slideName: "hennessy", slideSrc: hennessyLogo },
  { slideName: "hennessy", slideSrc: lcLogo },
  { slideName: "hennessy", slideSrc: leicaLogo },
];
const isMobileAgent = ref(isMobile());
onMounted(() => {
  // 进入页面给默认数据
  vendor.value = mockData.vendorListMock[0];
  mockData.vendorListMock.forEach((element, elementINdex) => {
    if (element.id === Number($router.currentRoute.value.query.id)) {
      vendor.value = element;
    }
  });

  // 监听slidelist滚动距离计算下面scrllbar的滚动距离且只在移动端生效
  if (isMobileAgent.value) {
    slideListNode.value.addEventListener("scroll", (e: any) => {
      scrollThumbNode.value.style.marginLeft = e.target.scrollLeft / 5 + "px";
    });
  }
});

const serviceBrandsList = [
  { brandName: "demo", brandSrc: brand },
  { brandName: "demo", brandSrc: brand1 },
  { brandName: "demo", brandSrc: brand2 },
  { brandName: "Coming soon", brandSrc: brand4 },
];
let slideListNode = ref();
let scrollThumbNode = ref();
let count = ref(0);

const sendEmailText = ref("REQUEST");
let sendEmailVisable = ref(false);
// 发送邮件
const sendEmail = () => {
  sendEmailText.value = "Please wait...";
  setTimeout(() => {
    sendEmailVisable.value = true;
    sendEmailText.value = "REQUESTED";
  }, 2000);
};

const gotoDemo = () => {
  $router.push({
    name: "projectdemo",
  });
};

import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css"; // 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = ref([Navigation, Pagination, Grid]); // setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const navigation = ref({
  nextEl: ".button-next",
  prevEl: ".button-prev",
});

let swipers: any = null;
// 初始化swiper
const onSwiper = (swiper: any) => {
  swipers = swiper;
};

const prevEl = () => {
  if (count.value > 0) {
    slideListNode.value.scrollLeft = --count.value * 100;
    scrollThumbNode.value.style.marginLeft = 8 * count.value + "px";
  }
  swipers.slidePrev();
};
const nextEl = () => {
  if (count.value <= slideList.length - 3) {
    slideListNode.value.scrollLeft = count.value++ * 100;
    scrollThumbNode.value.style.marginLeft = 10 * count.value + "px";
  }
  swipers.slideNext();
};

const touchmoves = (swiper: any) => {
  console.log(swiper, swipers.getTranslate());
  if (swiper.translate < 0) {
    scrollThumbNode.value.style.marginLeft =
      (Math.abs(swiper.translate - 30) / 300) * 30 + "px";
    if (isMobileAgent) {
      scrollThumbNode.value.style.marginLeft =
        (Math.abs(swiper.translate - 30) / 270) * 60 + "px";
    }
    return;
  }
  scrollThumbNode.value.style.marginLeft = "0px";
};
</script>

<template>
  <main :class="{ hasnodeco: true }">
    <div class="top" :class="{ top_mobile: isMobileAgent }">
      <div class="vendor-box">
        <div class="vendor-box-in h-[41rem]">
          <h2 class="vendor-name">{{ vendor.vendorName }}</h2>
          <p class="vendor-category">
            <span class="vendor-title">Category: </span
            >{{ vendor.vendorCategory }}
          </p>
          <p class="vendor-found">
            <span class="vendor-title">Founded: </span>{{ vendor.brandFounded }}
          </p>
          <p class="vendor-time">
            <span class="vendor-title">Lead Time: </span>{{ vendor.leadTime }}
          </p>
          <p class="vendor-tag">
            <span v-for="(tag, tagIndex) of vendor.vendorTags" :key="tagIndex">
              {{ tag }}
            </span>
          </p>
          <p class="vendor-intro">
            <span class="vendor-title">Introduction: </span
            >{{ vendor.vendorBrief }}
          </p>
        </div>
      </div>

      <div class="slide-box">
        <div class="slide-arrow slide-arrow-left flex items-center">
          <img
            v-show="count > 0"
            @click.stop="prevEl"
            class=""
            src="/images/icon/left_arrow.svg"
            alt=""
          />
        </div>
        <div class="slide-track">
          <div class="slide-title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] flex-1 bg-[#ECF0FA] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none"> Service Brands</span>
              <div
                class="h-[1px] flex-1 bg-[#ECF0FA] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </div>
          <div class="slide-item-list" ref="slideListNode">
            <swiper
              ref="mySwiper"
              :slidesPerView="5"
              :spaceBetween="isMobileAgent ? 10 : 20"
              :loop="false"
              :centerInsufficientSlides="false"
              :centeredSlides="false"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              :navigation="navigation"
              :modules="modules"
              class="mySwiper"
              @swiper="onSwiper"
              @touchMove="touchmoves"
            >
              <template> </template>
              <swiper-slide
                class=""
                v-for="(slide, slideIndex) of slideList"
                :key="slideIndex"
              >
                <div class="slide-item">
                  <img class="images" :src="slide.slideSrc" alt="" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="scroll-track">
            <div ref="scrollThumbNode" class="scroll-thumb"></div>
            <div class="scroll-track-bottom"></div>
          </div>
        </div>

        <div class="slide-arrow slide-arrow-right flex items-center">
          <img
            v-show="count < slideList.length - 4"
            @click.stop="nextEl"
            src="/images/right_arrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-box content-box-solution">
        <h2 class="title">
          <div class="flex items-center justify-center">
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
            ></div>
            <span class="block flex-none">Solution Case</span>
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
            ></div>
          </div>
        </h2>
        <p class="content-desc content-solution">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="content-box content-box-claimed">
        <h2 class="title">
          <div class="flex items-center justify-center">
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
            ></div>
            <span class="block flex-none">Claimed Kpis</span>
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
            ></div>
          </div>
        </h2>
        <div class="is-flex-row kpibox">
          <p class="content-desc content-claimed is-flex-column">
            <span class="content-kpi">+16%</span>
            <span class="content-kpi-desc">conventions</span>
          </p>
          <p class="content-desc content-claimed is-flex-column">
            <span class="content-kpi">+16%</span>
            <span class="content-kpi-desc">conventions</span>
          </p>
          <p class="content-desc content-claimed is-flex-column">
            <span class="content-kpi">+16%</span>
            <span class="content-kpi-desc">conventions</span>
          </p>
          <p class="content-desc content-claimed is-flex-column">
            <span class="content-kpi">+16%</span>
            <span class="content-kpi-desc">conventions</span>
          </p>
        </div>
      </div>
      <div class="content-box content-box-price">
        <div class="content-box-price-spec">
          <h2 class="title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] flex-1 bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none">Pricing Model</span>
              <div
                class="h-[1px] flex-1 bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </h2>
          <p class="content-desc content-pric">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </p>
        </div>

        <div class="content-price-list">
          <div class="content-price-left">
            <h2>Our Technology</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div class="content-price-right">
            <div>
              <img src="/images/icon/hosting.svg" alt="" />
              <h2 class="">Hosting</h2>
              <p>Back-end Integration</p>
              <p>CRM Integration</p>
              <p>SPECIFIX Integration</p>
            </div>
            <div>
              <img src="/images/icon/integration.svg" alt="" />
              <h2>Hosting</h2>
              <p>Back-end Integration</p>
              <p>CRM Integration</p>
              <p>SPECIFIX Integration</p>
            </div>

            <div>
              <img src="/images/icon/mobileintegration.svg" alt="" />
              <h2>Hosting</h2>
              <p>Back-end Integration</p>
              <p>CRM Integration</p>
              <p>SPECIFIX Integration</p>
            </div>
            <div>
              <img src="/images/icon/PIPL.svg" alt="" />
              <h2>Hosting</h2>
              <p>Back-end Integration</p>
              <p>CRM Integration</p>
              <p>SPECIFIX Integration</p>
            </div>
            <div>
              <img src="/images/icon/MPLS.svg" alt="" />
              <h2>Hosting</h2>
              <p>Back-end Integration</p>
              <p>CRM Integration</p>
              <p>SPECIFIX Integration</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box content-box-feature">
        <h2 class="title">
          <div class="flex items-center justify-center">
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
            ></div>
            <span class="block flex-none">Featured Demo</span>
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
            ></div>
          </div>
        </h2>
        <div v-if="featureShow === 'code'">
          <p class="content-feature-desc">Scan the QR code to view demo</p>
          <img src="/images/qrcode.png" alt="" />
        </div>
        <div v-else-if="featureShow === 'link'">
          <p class="content-feature-desc">Click the link to view demo</p>
          <button class="content-feature-button" @click="">
            <img src="/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <div v-else>
          <p class="content-feature-desc">Click the play button to view demo</p>
          <div class="content-feature-video-box" @click="">
            <img src="/images/icon/video_play.svg" alt="" />
            <!-- <video controls src="/images/284_1690357473.mp4"></video> -->
          </div>
        </div>
      </div>
      <div class="content-box content-box-service">
        <h2 class="title">
          <div class="flex items-center justify-center">
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
            ></div>
            <span class="block flex-none">Service Brands</span>
            <div
              class="h-[1px] flex-1 bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
            ></div>
          </div>
        </h2>
        <div class="content-service-list">
          <div
            @click="gotoDemo"
            v-for="(serviceBrands, serviceBrandsIndex) of serviceBrandsList"
            :key="serviceBrandsIndex"
          >
            <img
              class="content-service-logo"
              :src="serviceBrands.brandSrc"
              alt=""
            />
            <a class="content-desc content-service-desc" href="">{{
              serviceBrands.brandName
            }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <h2 v-if="isMobileAgent">
        Let’s get in touch <br />
        with an awesome team
      </h2>
      <h2 v-else>Let’s get in touch with an awesome team</h2>
      <p>Please click the button below to request contact information</p>
      <button
        @click="sendEmail"
        class="button"
        :class="{ 'button-gray': sendEmailVisable }"
      >
        {{ sendEmailText }}
      </button>
      <div class="information-box">
        <p
          class="information"
          :class="{ 'information-show': sendEmailVisable }"
        >
          <img src="/images/icon/sure.svg" alt="" />
          <span>
            Your request has been sent, we will get back to you as soon as
            possible.
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.top {
  max-width: 100vw;
  height: 36rem;
  padding-top: 6rem;
  background: url("/images/detail_top_bg.png");
  display: flex;
  justify-content: space-between;
}
.top_mobile {
  background: url("/images/PDP-bg@2x.jpg");
  background-size: 100%;
}
.vendor {
  &-box {
    display: inline-block;
    margin-left: 12rem;
    max-width: 55rem;
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    &-in {
      padding: 4rem;
      background: #fff;
      box-shadow: 0px 8px 15px 0px rgba(62, 101, 208, 0.1);
    }
  }
  &-title {
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
  }
  &-category {
    // @include ellipsisLn(1);
  }
  &-name {
    color: var(--lvmh-secondary-1100, #3e65d0);
    font-family: avenir_next_text;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }
  &-time {
    margin-bottom: 1.2rem;
  }

  &-tag {
    margin-bottom: 2rem;
    span {
      color: var(--lvmh-secondary-1100, #3e65d0);
      font-family: avenir_next_text;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: inline-block;
      margin-right: 4px;
      padding: 4px 8px;
      justify-content: center;
      align-items: center;
      gap: 2px;
      border-radius: 2px;
      background: var(--lvmh-secondary-110, #ecf0fa);
    }
  }
  &-intro {
    // @include ellipsisLn(3);
  }
}
.slide {
  &-box {
    float: right;
    // max-width: 48rem;
    margin-right: 7.8rem;
    margin-top: 5.2rem;
    text-align: center;
    display: flex;
  }
  &-arrow {
    width: 2rem;
    &:hover {
      cursor: pointer;
      // opacity: 0.5;
    }
    &-left {
      margin-right: 2.4rem;
    }
    &-right {
      margin-left: 2.4rem;
    }
  }
  &-title {
    color: var(--lvmh-secondary-110, #ecf0fa);
    font-family: lvmh_italic;
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    position: relative;
    margin-bottom: 3.6rem;
  }
  &-track {
  }
  &-item-list {
    width: 48rem;
    max-width: 48rem;
    overflow-x: scroll;
    text-wrap: nowrap;
    :not(:last-child) {
      margin-right: 2rem;
    }
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    background: #3e65d0;
    border-radius: 50%;

    img {
      max-width: 5.2rem;
      // width: 4.5rem;
      // height: 4.5rem;
      // margin: 0 auto;
    }
  }
}
.scroll {
  &-track {
    position: relative;
    margin: 0 auto;
    margin-top: 40px;
    width: 80px;
    height: fit-content;
  }
  &-thumb {
    width: 40px;
    height: 4px;
    background: #ecf0fa;
  }
  &-track-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
  }
}
.slide-item-list {
  &::-webkit-scrollbar {
    display: none;
    width: 10px; // y轴滚动条宽度
    height: 10px; // x轴滚动条宽度
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(60, 186, 146)),
      color-stop(0.72, rgb(253, 187, 45)),
      color-stop(0.86, rgb(253, 187, 45))
    );
    transition: 0.3s ease-in-out;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
}
.title {
  color: #3e65d0;
  font-family: lvmh_italic;
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  margin: 0 auto;
}
.content {
  margin-top: 21rem;
  text-align: center;
  &-box {
    position: relative;
    &-solution,
    &-claimed,
    &-feature,
    &-service {
      margin: 0 21.31%;
      margin-bottom: 8rem;
    }
    &-price {
      margin-bottom: 8rem;
      &-spec {
        margin: 0 21.31%;
      }
    }
  }
  &-desc {
    margin: 0 auto;
    margin-top: 0.4rem;
    max-width: 77.5rem;
    text-align: left;
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  /** kpi  */
  .kpibox {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  &-kpi {
    color: var(--lvmh-secondary-1100, #3e65d0);
    text-align: center;
    font-family: avenir_next_text;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  /** price */
  &-price {
    &-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8rem;
    }
    &-left {
      width: 43.2rem;
      height: 33rem;
      background: url("/images/Media.jpg");
      background-size: 100%;
      padding: 4rem;
      text-align: left;
      h2 {
        color: #fff;
        font-family: lvmh_italic;
        font-size: 36px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 2rem;
      }
      p {
        color: #fff;
        font-family: avenir_next_text;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        width: 21.5rem;
        line-height: 22px; /* 137.5% */
        text-transform: capitalize;
      }
    }
    &-right {
      text-align: left;
      margin-left: 2.4rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.2rem;
      div {
        text-align: center;
        box-shadow: 0px 7px 14px 0px rgba(62, 101, 208, 0.1);
        padding: 2rem;
        img {
          width: 2.8rem;
          height: 2.8rem;
          margin: 0 auto;
        }
      }
      h2 {
        color: var(--lvmh-secondary-1100, #3e65d0);
        text-align: center;
        font-family: avenir_next_text;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 1.2rem;
      }
      p {
        color: var(--lvmh-primary-1100, #20253b);
        text-align: center;
        font-family: avenir_next_text;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
  /** feature */
  &-feature {
    &-desc {
      margin: 2rem 0;
      color: var(--lvmh-primary-1100, #20253b);
      font-family: avenir_next_text;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &-button {
      display: flex;
      padding: 8px 40px;
      align-items: center;
      gap: 2px;
      border: none;
      margin: 0 auto;
      color: var(--lvmh-primary-170, #636776);
      font-family: avenir_next_text;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      background: #e9eaec;
    }
    &-video-box {
      width: 93rem;
      height: 52.3rem;
      margin: 0 auto;
      background: url("/images/2978edfd8198672cbedd2d62ad446d607daa1856f2fb92e6dda9544a274ef680.png");
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  /** servic */
  &-service-list {
    display: flex;
    justify-content: center;
    // grid-template-columns: repeat(4, 1fr);
    // gap: 0 2.4rem;
    // margin: 0 20%;
    margin-top: 4rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2rem 1.7rem 2rem;
      background: #fff;
      box-shadow: 0px 7px 14px 0px rgba(62, 101, 208, 0.1);
      margin: 1.2rem;
      cursor: pointer;

      img {
        display: block;
        width: 12rem;
      }
      a {
        color: var(--lvmh-secondary-1100, #3e65d0);
        font-family: Avenir;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
      }
      &:last-child {
        a {
          color: #d8d8d8;
          text-decoration-line: none;
        }
      }
    }
  }
}

.content-bottom {
  padding: 8rem 0 5.3rem;
  background: #ecf0fa;
  text-align: center;
  h2 {
    color: var(--lvmh-primary-1100, #20253b);
    text-align: center;
    font-family: avenir_next_text;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    margin-top: 0.8rem;
    color: var(--lvmh-primary-170, #636776);
    text-align: center;
    font-family: avenir_next_text;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button.button {
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    width: 140px;
    height: 40px;
    color: var(--lvmh-primary-110, #e9eaec);
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.028px;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border: none;
    background: #20253b;
    &-gray {
      background: var(--lvmh-primary-110, #e9eaec);
      color: var(--lvmh-primary-140, #a6a8b1);
    }
  }
  .information {
    &-box {
      line-height: 1.9rem;
    }
    color: var(--lvmh-secondary-1100, #3e65d0);
    text-align: center;
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    &-show {
      opacity: 1;
    }
    img {
      margin-right: 0.4rem;
    }
  }
}

// 移动端
@media screen and (max-width: 1400px) and (min-width: 960px) {
  .vendor {
    &-box {
      &-in {
        box-shadow: 0px 8px 15px 0px rgba(62, 101, 208, 0.1);
      }
    }
  }
  .slide {
    &-box {
      float: right;
      // max-width: 48rem;
      margin-right: 7.8rem;
      position: relative;
      // max-width: 33vw;
      text-align: center;
      display: flex;
    }
    &-arrow {
      width: 2rem;
      &-left {
        // position: absolute;
        // left: -55px;
        // top: 22px;
        margin-right: 2.4rem;
      }
      &-right {
        margin-left: 2.4rem;
      }
    }
    &-title {
      color: var(--lvmh-secondary-110, #ecf0fa);
      font-family: lvmh_italic;
      font-size: 32px;
      font-style: italic;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      position: relative;
      margin-bottom: 3.6rem;
    }
    &-track {
      width: 100%;
    }
    &-item-list {
      max-width: 100%;
      overflow-x: scroll;
      text-wrap: nowrap;
      :not(:last-child) {
        margin-right: 2rem;
      }
      // overflow-x: scroll;
    }
    &-item {
      // width: 8rem;
      // height: 8rem;
      // border-radius: 50%;
      // background: #3e65d0;
      // display: inline-block;
      // display: flex;
      // align-items: center;

      img {
        width: 4.5rem;
        margin: 0 auto;
      }
    }
  }

  .price {
    &-right {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (max-width: 960px) {
  .top {
    height: 69rem;
    padding-top: 5.2rem;
    flex-direction: column;
    justify-content: flex-start;
  }

  .vendor {
    &-box {
      margin: 0 1.5rem;
      max-width: 100%;

      &-in {
        padding: 4rem;
        background: #fff;
        box-shadow: 0px 8px 15px 0px rgba(62, 101, 208, 0.1);
      }
    }
    &-title {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: avenir_next_text;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px; /* 137.5% */
    }
    &-category {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-transform: capitalize;
    }
    &-found {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-transform: capitalize;
    }

    &-time {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-transform: capitalize;
    }

    &-tag {
      margin-bottom: 2rem;
      span {
        color: var(--lvmh-secondary-1100, #3e65d0);
        font-family: avenir_next_text;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: inline-block;
        margin-right: 4px;
        padding: 4px 8px;
        justify-content: center;
        align-items: center;
        gap: 2px;
        border-radius: 2px;
        background: var(--lvmh-secondary-110, #ecf0fa);
      }
    }
    &-intro {
      color: var(--lvmh-primary-1100, #20253b);
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      // @include ellipsisLn(3);
    }
  }

  .slide {
    &-box {
      margin-top: 3.6rem;
      width: 100%;
      margin-right: 0rem;
      text-align: center;
      display: flex;
    }
    &-arrow {
      margin-top: 8rem;
      &-left {
        display: none;
        margin-right: 2.4rem;
      }
      &-right {
        display: none;
        margin-left: 2.4rem;
      }
    }
    &-title {
      color: var(--lvmh-secondary-110, #ecf0fa);
      font-family: lvmh_italic;
      font-size: 32px;
      font-style: italic;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      position: relative;
      margin: 0 1.5rem;
      margin-bottom: 2rem;
    }
    &-track {
    }
    &-item-list {
      width: calc(100vw - 3rem);
      max-width: 100vw;
      margin: 0 1.5rem;
      overflow-x: scroll;
      text-wrap: nowrap;
      :not(:last-child) {
        margin-right: 1rem;
      }
      // overflow-x: scroll;
    }
    &-item {
      width: 6rem !important;
      height: 6rem !important;
      border-radius: 50%;
      background: #3e65d0;
      // display: inline-block;
      // display: flex;
      // align-items: center;

      img {
        width: 3.3rem;
        // height: 3.3rem;
        margin: 0 auto;
      }
    }
  }
  .scroll {
    &-track {
      margin-top: 2.4rem;
    }
  }
  .title {
    &::after {
      right: 0;
      top: 2.4rem;
    }
    &::before {
      left: 0;
      top: 2.4rem;
    }
  }

  .content {
    margin: 0 1.5rem;
    margin-top: 80px;
    &-box {
      margin: 0;
      margin-bottom: 6rem;
    }
    .content-box-price-spec {
      margin: 0;
    }
    .kpibox {
      // margin: 0 20%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 4.4rem;
      width: fit-content;
      margin: 0 auto;
    }
    &-kpi {
      font-size: 28px;
      &-desc {
        font-size: 14px;
      }
    }
    &-price {
      &-box {
        align-items: center;
        flex-direction: column;
      }
      &-list {
        flex-direction: column;
      }
      &-left {
        width: 100%;
        background-size: 125%;
        p {
          width: 17.6rem;
        }
      }
      &-right {
        margin-left: 0rem;
        margin-top: 2.4rem;
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        div {
          margin: 0 0 1.2rem;
        }
        img {
          margin: 0 auto;
        }
      }
    }
    &-service {
      &-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem 1.2rem;

        div {
          margin: 0;
          img {
            margin: 3.5rem 1.7rem;
          }
        }
      }
    }
  }
  .content-bottom {
    padding: 6rem;
    h2 {
      font-size: 24px;
    }
  }
  .information {
    &-show {
      align-items: flex-start !important;
      opacity: 1;
    }
  }
}

.swiper-wrapper {
  // justify-content: center;
}
</style>
