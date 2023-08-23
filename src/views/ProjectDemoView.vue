<script setup lang="ts">
import { onMounted, computed, reactive, ref } from "vue";

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
/** 设置每个video的预览图 */
const setVideoPoster = function (event: any) {
  let video = event.target;
  // video.height = video.clientHeight;
  let canvas = document.createElement("canvas"); // 创建 canvas
  const ctx = canvas.getContext("2d");
  video.currentTime = 1; // 第一帧
  video.oncanplay = () => {
    canvas.width = video.clientWidth; // 获取视频宽度
    canvas.height = video.clientHeight; //获取视频高度
    var img = new Image(); // 这里使用img是为了解决视频跨域 canvas.toDataURL会提示错误的问题
    img.onload = function () {
      // canvas绘图
      ctx && ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
      // 转换成base64形式并设置封面
      video.poster = canvas.toDataURL("image/jpeg", 1); // 截取后的视频封面
    };
  };
};

/**demolink 点击事件 */
const clickNothing = function () {};
</script>

<template>
  <main :class="{ hasdeco: true }">
    <div class="title-box">
      <h2 class="title">Claimed Kpis</h2>
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
            @loadeddata="setVideoPoster($event)"
          >
            <source :src="showMediaSrc" type="video/mp4" />
            <!-- <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> -->
            <!-- Download the
            <a href="/media/cc0-videos/flower.webm">WEBM</a>
            or
            <a href="/media/cc0-videos/flower.mp4">MP4</a>
            video. -->
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
                @loadeddata="setVideoPoster($event)"
              >
                <source :src="value.src" type="video/mp4" />
              </video>
            </div>
            <div class="media-box image-box" v-else>
              <img class="media-img" :src="value.src" alt="" />
            </div>
          </div>
        </div>
        <!-- <div class="show-control"> -->
        <img
          class="show-control"
          src="../assets/images/icon/close_circle.svg"
          @click="nextShow"
          alt="decoration img for slide control"
        />
        <!-- </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.slide {
  max-width: 93rem;
  height: 52.3rem;
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

  &::after {
    position: absolute;
    right: 21.4%;
    top: 2.1rem;
    transform: translateY(-50%);
    content: "";
    width: 19%;
    height: 0.05rem;
    background: #3e65d0;
  }
  &::before {
    position: absolute;
    left: 21.4%;
    top: 2.1rem;
    transform: translateY(-50%);
    content: "";
    width: 19%;
    height: 0.05rem;
    background: #3e65d0;
  }
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
    top: 4px;
    right: 0;
    padding: 3.5rem 0rem 3.5rem 13.4rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3),
      rgb(255, 255, 255, 0.96) 50%,
      white
    );
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
