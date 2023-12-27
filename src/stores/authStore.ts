// 想要使用必须先引入 defineStore；
import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
  state() {
    // 存放的就是模块的变量
    return {
      cookiesIsSave: false, // 是否展示cookies model
      accessToken:"",//当前token
    }
  },
  getters: {
    // 相当于vue里面的计算属性，可以缓存数据
    getAccessToken:(state)=>{
      return state.accessToken
    }
  },
  actions: {
    saveAssessToken(accessToken: string) {
      this.$state.accessToken = accessToken
    },
    clearAccountInfo() {
      this.$state.cookiesIsSave = false
      this.$state.accessToken = ""
    },
    saveCookiesFn() {
      this.$state.cookiesIsSave = true
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
        paths: ['cookiesIsSave', 'accessToken'],
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
