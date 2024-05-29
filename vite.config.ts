import uno from "@unocss/vite"
import vue from "@vitejs/plugin-vue"
import vueReactivityTransform from "@vue-macros/reactivity-transform/vite"
import autoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        vue(),
        vueReactivityTransform(),
        autoImport({ imports: ["vue"], vueTemplate: true, dts: "types/auto-imports.d.ts" }),
        uno({ mode: "vue-scoped" })
    ]
})
