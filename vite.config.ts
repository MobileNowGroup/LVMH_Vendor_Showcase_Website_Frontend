import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


const os = require("os")

// 获取本地ip
function getNetWorkIp() {
  // 打开host
  let needHost = ""
  try {
    let network = os.networkInterfaces()

    for (const dev in network) {
      let iface = network[dev]
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i]
        if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
          needHost = alias.address
        }
      }
    }
  } catch (error) {
    needHost = "http://localhost"
  }
  return needHost
}
const IP = getNetWorkIp()

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        additionalData: `@use "@/assets/_mixins.scss" as *;`,
      },
    },
  },
  server: {
    host: "localhost", // 指定服务器主机名
    port: 5173, // 指定服务器端口
    hmr: true, // 开启热更新
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false, // 是否开启 https
  },
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),  // @代替src
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),  // @代替src
      "#": fileURLToPath(new URL("./types", import.meta.url)), // #代替types
    },
  },
});
