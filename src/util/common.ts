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
//设置cookies
export function setCookie(name: string, value: any, MyDay: any) {
  var ExDate = new Date();
  ExDate.setDate(ExDate.getDate() + MyDay); //如果需要时间的话以这样获取。
  document.cookie = name + "=" + value + ";expires=" + ExDate;
}
//获取cookies
export function getCookie(name: string) {
  //例如cookie是"username=abc; password=123"
  var arr = document.cookie.split("; "); //用“;”和空格来划分cookie
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split("=");
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return ""; //整个遍历完没找到，就返回空值
}
//删除cookies
export function removeCookie(name: string) {
  setCookie(name, "1", -1); //第二个value值随便设个值，第三个值设为-1表示：已经过期。
}

// 防抖
export function debounce(func: Function, delay: number = 300) {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// 节流
export function throttle(func: Function, delay = 300) {
  let timeoutId: NodeJS.Timeout | null;
  return function (this: any, ...args: any) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        func.apply(this, args);
      }, delay);
    }
  };
}

export function openLink(link: string) {
  window.open(link);
}
