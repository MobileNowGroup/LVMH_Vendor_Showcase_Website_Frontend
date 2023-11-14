<script setup lang="ts">
import { onMounted, computed, ref, reactive } from "vue";
import { isMobile, setVideoPosterFn } from "@/util/common";
import { useRouter, useRoute } from "vue-router";
import projectSlide from "@/components/ProjectSlideComponent.vue";

let demoLink = ref("ddddd"); // demolink的地址

const $route = useRoute();
const $router = useRouter();
const projectDemoData = JSON.parse($route.query.data as string);
const projectSlideData = projectDemoData.filter((item: any, index: number) => {
  return item.exampleType == "Link Only";
});
console.log(projectDemoData, projectSlideData);

onMounted(() => {
  // carousel on init
  const frameZones = Array.from(document.querySelectorAll(".show-list"));
  for (let i = 0; i < frameZones.length; i++) {
    frameZones[i].children[0].className = "show-item show-item-active";
  }
});

/**demolink 点击事件 */
const clickNothing = function (src: any) {
  window.open(src);
};
</script>

<template>
  <main :class="{ hasdeco: true }">
    <div class="bg-white pb-[10rem] lg:mx-0 mx-4">
      <div
        v-for="(projectDemo, projectDemoIndex) of projectDemoData"
        :key="projectDemoIndex"
      >
        <div class="title-box">
          <h2 class="title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none"
                >project {{ projectDemoIndex + 1 }}</span
              >
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </h2>
        </div>
        <div v-if="projectDemo.exampleType === 'video'" class="demo-box">
          <p class="demo-link">{{ projectDemo.exampleDesc }}</p>
        </div>
        <div
          v-else-if="projectDemo.exampleType === 'Link Only'"
          class="demo-box"
        >
          <p class="demo-desc" v-if="projectDemo.exampleType === 'link'">
            {{ projectDemo.exampleDesce }}
          </p>
          <button
            class="demo-button"
            @click="clickNothing(projectDemo.exampleSrc)"
          >
            <img src="/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <div v-else class="demo-box">
          <p class="demo-desc">{{ projectDemo.exampleDesc }}</p>
          <button
            class="demo-button"
            @click="clickNothing(projectDemo.exampleSrc)"
          >
            <img src="/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <!-- <video autoplay src="https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E7%BA%AA%E6%A2%B5%E5%B8%8CGivenchy.mp4"></video> -->
        <projectSlide
          v-if="projectSlideData.length > 0"
          :project-example="projectSlideData"
        ></projectSlide>
      </div>
      <!-- <div>
        <div class="title-box">
          <h2 class="title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none">project 2</span>
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </h2>
        </div>
        <div v-if="demoLink" class="demo-box">
          <p class="demo-link">Link Only</p>
          <p class="demo-desc">Click the link to view demo</p>
          <button class="demo-button" @click="clickNothing">
            <img src="/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
      </div> -->
      <!-- <div>
        <div class="title-box">
          <h2 class="title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none">project 3</span>
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </h2>
        </div>
        <div v-if="demoLink" class="demo-box">
          <p class="demo-link">Media and Link</p>
          <p class="demo-desc">Click the link to view demo</p>
          <button class="demo-button" @click="clickNothing">
            <img src="/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <projectSlide></projectSlide>
      </div> -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
.slide {
  max-width: 93rem;
  height: max-content;
  background: #000;
  transition: all 2s linear;
}
.slide-video {
  position: relative;
  max-width: 93rem;
  width: 93rem;
  display: flex;
  align-items: center;
  video {
    width: 100%;
    transition: all 2s linear;
    margin: 0 auto;
    height: 52.3rem;
  }
  &-control {
    position: absolute;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &-control-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-control-rail {
    width: 70%;
    height: 4px;
    border-radius: 2px;
    background: #ccc;
  }
}
.slide-image {
  max-width: 93rem;
  width: 93rem;
  display: flex;
  align-items: center;
  img {
    transition: all 2s linear;
    height: 52.3rem;
    margin: 0 auto;
  }
}
.title-box {
  margin-top: 10rem;
  position: relative;
  text-align: center;
}

.title {
  color: #3e65d0;
  font-family: lvmh_italic;
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.demo {
  &-box {
    margin-top:2rem;
    text-align: center;
  }
  &-link {
    color: var(--lvmh-primary-1100, #20253b);
    font-family: avenir_next_text;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 2rem;
  }
  &-desc {
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
    margin: 2rem auto;
    color: var(--lvmh-primary-170, #636776);
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #e9eaec;
  }
}
.show-list::-webkit-scrollbar {
  display: none;
  // background: #3e65d0;
}
.show {
  position: relative;

  &-box {
    max-width: 93rem;
    overflow: hidden;
    margin: 0 auto;
  }
  &-list {
    display: flex;
    margin: 1.6rem 0;
    overflow-x: scroll;
  }
  &-control {
    position: absolute;
    top: 2px;
    right: -2px;
    height: 100%;
    padding: 3.5rem 0rem 3.5rem 13.4rem;
    background: linear-gradient(
      89deg,
      rgba(255, 255, 255, 0) 1.25%,
      #fff 73.86%
    );
    z-index: 99;
    img {
      padding-right: 2px;
    }
  }
  &-item {
    margin-right: 0.8rem;
    padding: 0.4rem;
  }
  &-item-active {
    border: 1px solid #3e65d0; //var(--lvmh-secondary-1100, #3E65D0);
  }
  .video-box {
    position: relative;
  }
  .media-box {
    width: 17.5rem;
    height: 9.8rem;
    background: #000;
    overflow: hidden;
    display: flex;
    align-items: center;

    video {
      width: 17.5rem;
      height: 9.8rem;
    }
    img.media-img {
      margin: 0 auto;
      height: 9.8rem;
    }
  }
  &-item-video-icon {
    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;
    width: 2.4rem;
    height: 2.4rem;
    background: #000;
    border-radius: 1.2rem;
    z-index: 99;
  }
}

@media screen and (max-width: 960px) {
  .show {
    &-box {
      margin: 0 1.5rem;
    }
    &-control {
      padding: 3.5rem 0rem 3.5rem 5.9rem;
    }
    .media-box {
      width: 13.5rem;
      height: 7.5rem;
    }
  }
  .slide {
    &-video {
      width: calc(100vw - 3rem);
    }
    &-image {
      width: 100%;
      height: 19.4rem;
      img {
        height: 19.4rem;
      }
    }
    video {
      width: calc(100vw - 3rem);
      height: auto;
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
    position: relative;
    margin-bottom: 3.6rem;
  }
}
</style>
