<script setup lang="ts">
import { onMounted, computed, reactive, ref } from "vue";
import { isMobile, setVideoPosterFn } from "@/util/common";

const isMobileDevice = ref(isMobile());

const showList = [
  {
    src: "http://www.w3school.com.cn/i/movie.mp4",
  },
  {
    src: "https://gd-hbimg.huaban.com/1bc498878d9f9a52de872f143b40e6f4c5a7541f98a0-YI3ytv_fw1200",
  },
  {
    src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
  },
  {
    src: "http://vjs.zencdn.net/v/oceans.mp4",
  },
  {
    src: "https://gd-hbimg.huaban.com/467722e905f3fe3ed64d4ddc8b0736da6281f98e19010a-3eLYnS",
  },
  {
    src: "https://gd-hbimg.huaban.com/e6d260daa7c31af126b9a4252ac65cf59fe7cba41b2173-RVNo9U_fw658webp",
  },
  {
    src: "http://vjs.zencdn.net/v/oceans.mp4",
  },
  {
    src: "https://gd-hbimg.huaban.com/e6d260daa7c31af126b9a4252ac65cf59fe7cba41b2173-RVNo9U_fw658webp",
  },
  {
    src: "https://gd-hbimg.huaban.com/e6d260daa7c31af126b9a4252ac65cf59fe7cba41b2173-RVNo9U_fw658webp",
  },
];

let demoLink = ref("ddddd"); // demolink的地址
const showMediaSrc = ref(showList[0].src); // 当前展示的多媒体地址

onMounted(() => {
  // carousel on init
  const frameZones = Array.from(document.querySelectorAll(".show-item"));
  frameZones[0].className = "show-item show-item-active";
});

/** 判断当前多媒体资源是视频还是图片 */
const mediaType = function (src: string) {
  let a = src.indexOf("mp4") > 0 ? "media" : "image";
  return a;
};

/** 点击展示当前的slide */
const showSlideMedia = function (src: string, _key: number) {
  // choose whitch slide to show
  showMediaSrc.value = src;
  const changeVideoSource = document.querySelector("video");
  // 每次更新video资源时手动load一次资源
  changeVideoSource && changeVideoSource.load();
  // 对下面的slide样式进行改变
  const frameZones = Array.from(document.querySelectorAll(".show-item"));
  frameZones.forEach((element, index) => {
    if (_key === index) {
      element.className = "show-item show-item-active";
    } else {
      element.className = "show-item";
    }
  });
};
/** 点击右箭头换下一个slide */
const nextShow = function () {
  // 对下面的slide样式进行改变
  const frameZones = Array.from(document.querySelectorAll(".show-item"));
  const frameDom = document.querySelector(".show-list") as Element;
  console.log();
  for (let i = 0; i < frameZones.length; i++) {
    if (frameZones[i].className === "show-item show-item-active") {
      frameZones[i].className = "show-item";
      if (frameZones[i + 1]) {
        frameZones[i + 1].className = "show-item show-item-active";
        // 修改地址
        showMediaSrc.value = showList[i + 1].src;
        // 修改选中元素与左边边距
        frameDom.scrollLeft = 175 * (i + 1);
      } else {
        frameZones[0].className = "show-item show-item-active";
        // 修改地址
        showMediaSrc.value = showList[0].src;
        // 修改选中元素与左边边距
        frameDom.scrollLeft = 0;
      }
      break;
    }
  }
};
/** 设置每个video的预览图 setVideoPosterFn */

/**demolink 点击事件 */
const clickNothing = function () {};
</script>

<template>
  <main :class="{ hasdeco: true }">
    <div class="bg-white pb-[10rem] lg:mx-0 mx-4">
      <div>
        <div class="title-box">
          <h2 class="title">
            <div class="flex items-center justify-center">
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:mr-[24px] mr-[16px]"
              ></div>
              <span class="block flex-none">project 1</span>
              <div
                class="h-[1px] w-[272px] bg-[#3E65D0] lg:ml-[24px] ml-[16px]"
              ></div>
            </div>
          </h2>
        </div>
        <div v-if="demoLink" class="demo-box">
          <!-- <p class="demo-desc">Click the link to view demo</p> -->
          <button class="demo-button" @click="clickNothing">
            <img src="../assets/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <div class="show-box">
          <div class="slide">
            <div class="slide-video" v-if="mediaType(showMediaSrc) === 'media'">
              <video
                controls
                preload="metadata"
                :poster="`${showMediaSrc}?x-oss-process=video/snapshot,t_1,m_fast`"
                class="video"
                @loadeddata="setVideoPosterFn($event)"
              >
                <source :src="showMediaSrc" type="video/mp4" />
              </video>
            </div>
            <div v-else class="slide-image">
              <img :src="showMediaSrc" alt="" />
            </div>
          </div>
          <div class="show" ref="slide">
            <div class="show-list">
              <div
                class="show-item"
                v-for="(value, key) of showList"
                :key="key"
                @click="showSlideMedia(value.src, key)"
              >
                <div
                  class="media-box video-box"
                  v-if="mediaType(value.src) === 'media'"
                >
                  <img
                    class="icon show-item-video-icon"
                    src="../assets/images/24gf-videoCamera.png"
                    alt=""
                  />
                  <video
                    preload="metadata"
                    :poster="`${value.src}?x-oss-process=video/snapshot,t_1,m_fast`"
                    @loadeddata="setVideoPosterFn($event)"
                  >
                    <source :src="value.src" type="video/mp4" />
                  </video>
                </div>
                <div class="media-box image-box" v-else>
                  <img class="media-img" :src="value.src" alt="" />
                </div>
              </div>
            </div>
            <div class="show-control">
              <img
                v-if="!isMobileDevice"
                class=""
                src="../assets/images/icon/close_circle.svg"
                @click="nextShow"
                alt="decoration img for slide control"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
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
          <!-- <p class="demo-desc">Click the link to view demo</p> -->
          <button class="demo-button" @click="clickNothing">
            <img src="../assets/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <div class="show-box">
          <div class="slide">
            <div class="slide-video" v-if="mediaType(showMediaSrc) === 'media'">
              <video
                controls
                preload="metadata"
                :poster="`${showMediaSrc}?x-oss-process=video/snapshot,t_1,m_fast`"
                class="video"
                @loadeddata="setVideoPosterFn($event)"
              >
                <source :src="showMediaSrc" type="video/mp4" />
              </video>
            </div>
            <div v-else class="slide-image">
              <img :src="showMediaSrc" alt="" />
            </div>
          </div>
          <div class="show" ref="slide">
            <div class="show-list">
              <div
                class="show-item"
                v-for="(value, key) of showList"
                :key="key"
                @click="showSlideMedia(value.src, key)"
              >
                <div
                  class="media-box video-box"
                  v-if="mediaType(value.src) === 'media'"
                >
                  <img
                    class="icon show-item-video-icon"
                    src="../assets/images/24gf-videoCamera.png"
                    alt=""
                  />
                  <video
                    preload="metadata"
                    :poster="`${value.src}?x-oss-process=video/snapshot,t_1,m_fast`"
                    @loadeddata="setVideoPosterFn($event)"
                  >
                    <source :src="value.src" type="video/mp4" />
                  </video>
                </div>
                <div class="media-box image-box" v-else>
                  <img class="media-img" :src="value.src" alt="" />
                </div>
              </div>
            </div>
            <div class="show-control">
              <img
                v-if="!isMobileDevice"
                class=""
                src="../assets/images/icon/close_circle.svg"
                @click="nextShow"
                alt="decoration img for slide control"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
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
          <!-- <p class="demo-desc">Click the link to view demo</p> -->
          <button class="demo-button" @click="clickNothing">
            <img src="../assets/images/icon/button_link.svg" alt="" /> Demo link
          </button>
        </div>
        <div class="show-box">
          <div class="slide">
            <div class="slide-video" v-if="mediaType(showMediaSrc) === 'media'">
              <video
                controls
                preload="metadata"
                :poster="`${showMediaSrc}?x-oss-process=video/snapshot,t_1,m_fast`"
                class="video"
                @loadeddata="setVideoPosterFn($event)"
              >
                <source :src="showMediaSrc" type="video/mp4" />
              </video>
            </div>
            <div v-else class="slide-image">
              <img :src="showMediaSrc" alt="" />
            </div>
          </div>
          <div class="show" ref="slide">
            <div class="show-list">
              <div
                class="show-item"
                v-for="(value, key) of showList"
                :key="key"
                @click="showSlideMedia(value.src, key)"
              >
                <div
                  class="media-box video-box"
                  v-if="mediaType(value.src) === 'media'"
                >
                  <img
                    class="icon show-item-video-icon"
                    src="../assets/images/24gf-videoCamera.png"
                    alt=""
                  />
                  <video
                    preload="metadata"
                    :poster="`${value.src}?x-oss-process=video/snapshot,t_1,m_fast`"
                    @loadeddata="setVideoPosterFn($event)"
                  >
                    <source :src="value.src" type="video/mp4" />
                  </video>
                </div>
                <div class="media-box image-box" v-else>
                  <img class="media-img" :src="value.src" alt="" />
                </div>
              </div>
            </div>
            <div class="show-control">
              <img
                v-if="!isMobileDevice"
                class=""
                src="../assets/images/icon/close_circle.svg"
                @click="nextShow"
                alt="decoration img for slide control"
              />
            </div>
          </div>
        </div>
      </div>
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
    text-align: center;
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
      90deg,
      rgba(255, 255, 255, 0.3),
      rgb(255, 255, 255, 0.96) 50%,
      white
    );
    z-index: 9999;
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
      height: 19.4rem;
      img {
        margin: 0;
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
