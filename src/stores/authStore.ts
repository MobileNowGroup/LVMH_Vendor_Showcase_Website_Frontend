// 想要使用必须先引入 defineStore；
import { defineStore } from 'pinia'
// 这里我们使用的是es6 的模块化规范进行导出的。

// defineStore 方法有两个参数，第一个参数是模块化名字（也就相当于身份证一样，不能重复）

// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const authStore = defineStore('auth', {
  // let showCookiesModel = ref(true)
  // let userName = ref(""); // 用户名
  // let StorageTime = ref(new Date().getTime()); // 保存时间
  // let ExpirationTime = ref(0); // 过期时间
  // const expiredFn = () => {
  //   return Number(ExpirationTime.value) * 24 * 60 * 1000 + Number(StorageTime.value);
  // };
  // const showCookiesModelFn = ()=>{
  //   showCookiesModel.value = false
  // }
  // return {
  //   showCookiesModel,
  //   userName,
  //   StorageTime,
  //   ExpirationTime,
  //   expiredFn,
  //   showCookiesModelFn,
  // };
  state() {
    // 存放的就是模块的变量
    return {
      cookiesIsSave: false, // 是否展示cookies model
      userName: '', // 用户名
      StorageTime: new Date().getTime(), // 保存时间
      ExpirationTime: 0, // 过期时间
    }
  },
  getters: {
    // 相当于vue里面的计算属性，可以缓存数据
  },
  actions: {
    // 可以通过actions 方法，改变 state 里面的值。
    saveUserNameFn(userName: string) {
      this.$state.userName = userName
    },
    clearUser() {
      this.$state.userName = ''
      this.$state.cookiesIsSave = false
      this.$state.StorageTime = new Date().getTime()
      this.$state.ExpirationTime = 0
    },
    saveCookiesFn() {
      // 持久化关闭
      this.$state.cookiesIsSave = true

      console.log(this.$state.cookiesIsSave)
      // 特别注意：在这里this指向的就是当前的实例化出来的对象，piniaAdd 该函数如果换成箭头函数的话，this 指向就会发生 改变，不能再使用 this.count++; 了
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
        paths: ['cookiesIsSave', 'userName', 'ExpirationTime'],
      },
    ],
  },
})
export const commonStore = defineStore('common', {
  state() {
    // 存放的就是模块的变量
    return {
      demoUrl: '', //demo页面的头部icon
      isClearFilter: false, // 是否清除过滤内容
    }
  },
  getters: {
    // 相当于vue里面的计算属性，可以缓存数据
  },
  actions: {
    // 可以通过actions 方法，改变 state 里面的值。
    setDemoUrl(url: string) {
      this.$state.demoUrl = url
    },
    clearDemoUrl() {
      this.$state.demoUrl = ''
    },
    clearFilter(isClear: boolean) {
      this.$state.isClearFilter = isClear
    },
  },
})
// export const useStore = defineStore("user", {
//   state: () => {
//     return { userName: "" };
//   },
//   // 也可以定义为
//   // state: () => ({ count: 0 })
//   getters: {
//     saveCookies: (state) => (state.userName = ""),
//   },
//   actions: {
//     increment() {
//       this.userName = "";
//     },
//   },
// });
