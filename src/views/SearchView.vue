<script setup lang="ts">
import { reactive, ref } from "vue";

const showList = [
  {
    src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
  },
  { src: "../public/qqqq.jpg" },
  { src: "../assets/images/284_1690357473.mp4" },
  { src: "../public/wallhaven-q6gg9l.jpeg" },
  { src: "../public/WechatIMG2193.jpeg" },
  { src: "../assets/images/284_1690357473.mp4" },
];
const mediaType = function (src: string) {
  let a = src.indexOf("mp4") > 0 ? "media" : "image";

  return a;
};

const showMediaSrc = ref("../assets/images/284_1690357473.mp4");
const showMedia = function (src: string) {
  showMediaSrc.value = src;
  console.log(showMediaSrc);
};
</script>

<template>
  <main>
    <div class="show-box">
      {{ showMediaSrc }}
      <div class="video">
        <video controls class="video">
          <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            type="video/mp4"
          />
          <!-- <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> -->
          Download the
          <a href="/media/cc0-videos/flower.webm">WEBM</a>
          or
          <a href="/media/cc0-videos/flower.mp4">MP4</a>
          video.
        </video>
      </div>

      <div class="show show-list">
        <div
          class="show-item"
          v-for="(value, key) of showList"
          :key="key"
        ></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.video {
  position: relative;
  max-width: 53rem;
  width: 53rem;
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

.show {
  display: flex;
  &-box {
    max-width: 53rem;
    overflow: hidden;
  }
  &-list {
    margin: 1rem 0;
  }
  &-item {
    margin-right: 1rem;
  }
  .video-box {
    position: relative;
  }
  .media-box {
    width: 10rem;
    height: 6rem;
    background: #000;
    overflow: hidden;
    display: flex;
    align-items: center;
    video {
      width: 10rem;
      height: 6rem;
    }
    img.media-img {
      margin: 0 auto;
      height: 6rem;
    }
  }
  &-item-video-icon {
    position: absolute;
    bottom: 0.8rem;
    right: 1rem;
    width: 1rem;
    height: 1rem;
    background: #000;
    border-radius: 0.5rem;
    z-index: 99;
  }
}
</style>
