import vue from "@vitejs/plugin-vue"
import vueReactivityTransform from "@vue-macros/reactivity-transform/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [vue(), vueReactivityTransform()]
})
