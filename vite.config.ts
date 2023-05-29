import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
         //importStyle可以配置element-plus的样式引入方式，它默认是css，利用scss变量修改主题时，需要将这个属性设置为scss
        AutoImport({
            resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        }),
        Components({
            resolvers: [
                ElementPlusResolver({ importStyle: "sass" }),
            ],
        }),
    ],
    resolve: {
        alias: {
          '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/element-variables.scss" as *;`,
            },
        },
    },
})
