<script setup lang="ts" name="vendorListComponent">
import { useRouter } from 'vue-router'
import { isMobile, setVideoPosterFn } from '@/util/common'
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'

const isMobileDevice = ref(isMobile())

const props = defineProps({
  projectExample: { type: Object, reauired: true },
})
const showList = reactive([
  {
    exampleDesc: 'bvlgari size guide:',
    exampleType: '',
    exampleSrc:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E7%BA%AA%E6%A2%B5%E5%B8%8CGivenchy.mp4',
  },
] as any)
let showMediaSrc = ref('')
showList.values = props.projectExample

onMounted(() => {
  showMediaSrc.value = showList.values[0].exampleSrc // 当前展示的多媒体地址

  console.log(showList.values)
})
/** 判断当前多媒体资源是视频还是图片 */
const mediaType = function (src: string) {
  let a = src.indexOf('mp4') > 0 ? 'media' : 'image'
  return a
}

/** 点击展示当前的slide */
const showSlideMedia = function (src: string, _key: number, $event: any) {
  // choose whitch slide to show
  console.log($event.target.parentNode.parentNode.parentNode.children)
  showMediaSrc.value = src
  const changeVideoSource = document.querySelector('video')
  // 每次更新video资源时手动load一次资源
  changeVideoSource && changeVideoSource.load()
  // 对下面的slide样式进行改变
  const frameZones = $event.target.parentNode.parentNode.parentNode.children

  for (let i = 0; i < frameZones.length; i++) {
    if (_key === i) {
      console.log(frameZones[i])
      frameZones[i].className = 'show-item show-item-active'
    } else {
      frameZones[i].className = 'show-item'
    }
  }
  //   frameZones.forEach((element: any, index: any) => {
  //     if (_key === index) {
  //       element.className = "show-item show-item-active";
  //     } else {
  //       element.className = "show-item";
  //     }
  //   });
}
/** 点击右箭头换下一个slide */
const nextShow = function ($event: any) {
  // console.log($event.target.parentNode.previousElementSibling);
  // 对下面的slide样式进行改变
  // const frameZones = Array.from(document.querySelectorAll(".show-item"));
  // const frameDom = document.querySelector(".show-list") as Element;
  const frameZones = $event.target.parentNode.previousElementSibling.children
  const frameDom = $event.target.parentNode.previousElementSibling
  console.log()
  for (let i = 0; i < frameZones.length; i++) {
    if (frameZones[i].className === 'show-item show-item-active') {
      frameZones[i].className = 'show-item'
      if (frameZones[i + 1]) {
        frameZones[i + 1].className = 'show-item show-item-active'
        // 修改地址
        showMediaSrc.value = showList[i + 1].exampleSrc
        // 修改选中元素与左边边距
        frameDom.scrollLeft = 175 * (i + 1)
      } else {
        frameZones[0].className = 'show-item show-item-active'
        // 修改地址
        showMediaSrc.value = showList[0].exampleSrc
        // 修改选中元素与左边边距
        frameDom.scrollLeft = 0
      }
      break
    }
  }
}
/** 设置每个video的预览图 setVideoPosterFn */
</script>

<template>
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
    <div v-if="1 < showList.length" class="show" ref="slide">
      <div class="show-list">
        <div
          class="show-item"
          v-for="(value, key) of showList"
          :key="key"
          @click="showSlideMedia(value.exampleSrc, key, $event)"
        >
          <div class="media-box video-box" v-if="value.exampleDesc === 'video'">
            <img
              class="icon show-item-video-icon"
              src="/images/24gf-videoCamera.png"
              alt=""
            />
            <video
              preload="metadata"
              :poster="`${value}?x-oss-process=video/snapshot,t_1,m_fast`"
              @loadeddata="setVideoPosterFn($event)"
            >
              <source :src="value.exampleDesc" type="video/mp4" />
            </video>
          </div>
          <div class="media-box image-box" v-else>
            <img class="media-img" :src="showMediaSrc" alt="" />
          </div>
        </div>
      </div>
      <div class="show-control">
        <img
          v-if="!isMobileDevice"
          class=""
          src="/images/icon/close_circle.svg"
          @click="nextShow($event)"
          alt="decoration img for slide control"
        />
      </div>
    </div>
  </div>
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
../model/vendor.model
