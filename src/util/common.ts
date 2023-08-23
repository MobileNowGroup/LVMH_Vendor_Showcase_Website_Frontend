/** 判断是否为mobile端 isMobile */
export const isMobile = () => {
  const userAgent = window.navigator.userAgent;
  let isFromMobile = false;
  if (
    !!userAgent.match(/AppleWebKit.*Mobile.*/) || // 是否为移动终端
    !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || // ios终端
    userAgent.includes("Android") ||
    userAgent.includes("Linux") ||
    userAgent.includes("iPhone") ||
    userAgent.includes("iPad") ||
    userAgent.includes("MicroMessenger") ||
    window.innerWidth <= 960
  ) {
    isFromMobile = true;
  } else {
    isFromMobile = false;
  }
  return isFromMobile;
};

/** 设置每个video的预览图 setVideoPosterFn */
export const setVideoPosterFn = (event: any) => {
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

/**  */