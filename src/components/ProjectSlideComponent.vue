<script setup lang="ts" name="vendorListComponent">
import { useRouter } from 'vue-router'
import { isMobile, setVideoPosterFn } from '@/util/common'
import { ref, reactive, onMounted } from 'vue'
const isMobileDevice = ref(isMobile())
const listRef = ref()
let currentIndex = ref(0 as number)
const props = defineProps({
  projectExample: { type: Array, reauired: true },
})
let showList = reactive(props.projectExample as any)
let currentObj = reactive({ value: {} } as any)
onMounted(() => {
  currentObj.value = showList[0]
})
/** 点击展示当前的slide */
const showSlideMedia = function (value: object, _key: number, $event: any) {
  currentIndex.value = _key
  listRef.value.scrollLeft =
    currentIndex.value == 0 ? 0 : 75 * currentIndex.value
  currentObj.value = value
}

/** 点击右箭头换下一个slide */
const nextShow = function ($event: any) {
  currentIndex.value += 1
  if ((showList && showList.length - 1) < currentIndex.value) {
    currentIndex.value = 0
  }
  listRef.value.scrollLeft =
    currentIndex.value == 0 ? 0 : 175 * currentIndex.value
  currentObj.value = showList[currentIndex.value]
}
/** 点击右箭头换下一个slide */
const prevShow = function () {
  currentIndex.value -= 1
  if (showList && currentIndex.value < 0) {
    currentIndex.value = showList.length - 1
  }
  listRef.value.scrollLeft =
    currentIndex.value == 0 ? 0 : 175 * currentIndex.value
  currentObj.value = showList[currentIndex.value]
}
/** 设置每个video的预览图 setVideoPosterFn */
</script>

<template>
  <div class="show-box">
    <div class="box-slide">
      <div
        v-if="!isMobileDevice && 1 < showList.length"
        class="box-slide-arrow box-slide-arrow-left"
        @click="prevShow()"
      ></div>
      <div class="slide">
        <div class="slide-video" v-if="currentObj.value.type === 'video'">
          <video
            controls
            preload="metadata"
            :poster="`${currentObj.value.exampleSrc}?x-oss-process=video/snapshot,t_1,m_fast`"
            class="video"
            @loadeddata="setVideoPosterFn($event)"
            :src="currentObj.value.exampleSrc"
          >
            <!-- <source :src="currentObj.value.exampleSrc" type="video/mp4" /> -->
          </video>
        </div>
        <div v-else class="slide-image">
          <img :src="currentObj.value.exampleSrc" alt="" style="object-fit: contain;" />
        </div>
      </div>
      <div
        v-if="!isMobileDevice && 1 < showList.length"
        class="box-slide-arrow box-slide-arrow-right"
        @click="nextShow"
      ></div>
    </div>
    <div v-if="1 < showList.length" class="show" ref="slide">
      <div class="show-control left">
        <img
          v-if="!isMobileDevice"
          class=""
          src="/images/icon/close_circle_left.svg"
          @click="prevShow"
          alt="decoration img for slide control"
          style="object-fit: contain;"
        />
      </div>
      <div ref="listRef" class="show-list">
        <div
          class="show-item"
          v-for="(value, key) of showList"
          :key="key"
          :class="value.id === currentObj.value.id ? 'show-item-active' : ''"
          @click="showSlideMedia(value, key, $event)"
        >
          <div class="media-box video-box" v-if="value.type === 'video'">
            <img
              class="icon show-item-video-icon"
              src="/images/24gf-videoCamera.png"
              alt=""
              style="object-fit: contain;"
            />
            <video
              preload="metadata"
              :poster="`${value.exampleSrc}?x-oss-process=video/snapshot,t_1,m_fast`"
              @loadeddata="setVideoPosterFn($event)"
            >
              <source :src="value.exampleSrc" type="video/mp4" />
            </video>
          </div>
          <div class="media-box image-box" v-else>
            <img class="media-img" :src="value.exampleSrc" alt="" style="object-fit: contain;"/>
          </div>
        </div>
      </div>
      <div class="show-control right">
        <img
          v-if="!isMobileDevice"
          class=""
          src="/images/icon/close_circle_right.svg"
          @click="nextShow"
          alt="decoration img for slide control"
          style="object-fit: contain;"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-slide {
  display: flex;
  flex-flow: row nowrap;
  &-arrow {
    content: '';
    width: 9rem;
    position: relative;
    top: 0;
    bottom: 0;
    &-right {
      cursor: url('/images/icon/close_circle_right.svg'), pointer;
    }
    &-left {
      cursor: url('/images/icon/close_circle_left.svg'), pointer;
    }
  }
}
.slide {
  width: 93rem;
  height: max-content;
  background: #000;
  transition: all 2s linear;
}
.slide-video {
  position: relative;
  width: 100%;
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
  width: 100%;
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
  padding: 0 7rem;
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
    height: 100%;

    z-index: 99;
  }
  .left {
    position: absolute;
    top: 2px;
    left: 6.8rem;
    padding: 3.5rem 3.4rem 3.5rem 0;
    background: linear-gradient(
      -89deg,
      rgba(255, 255, 255, 0) 1.25%,
      #fff 73.86%
    );
    img {
      padding-right: 2px;
    }
  }
  .right {
    position: absolute;
    top: 2px;
    right: 6.8rem;
    padding: 3.5rem 0rem 3.5rem 3.4rem;
    background: linear-gradient(
      89deg,
      rgba(255, 255, 255, 0) 1.25%,
      #fff 73.86%
    );
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
    padding: 0;
    &-box {
      margin: 0 1.5rem;
    }
    &-control {
      padding: 3.5rem 0rem 3.5rem 5.9rem;
      right: -2px;
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
