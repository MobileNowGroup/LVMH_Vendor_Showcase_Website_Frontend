import Vue from "vue";

const onEnterKeyDown = (e, callback) => {
  if (e.keyCode === 13 && callback && typeof callback === "function") {
    callback();
  }
};

Vue.use({
  install(Vue) {
    Vue.prototype.$onkeydown = { onEnterKeyDown };
  },
});
