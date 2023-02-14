import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Checker from "vite-plugin-checker"

import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 1420,
        strictPort: true
    },
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    build: {
        target: ["esnext"]
    },
    plugins: [
        Vue(),
        AutoImport({
            imports: ["vue"],
            dts: "./types/auto-imports.d.ts"
        }),
        Checker({
            vueTsc: { tsconfigPath: "tsconfig.json" },
            eslint: {
                lintCommand:
                    "eslint \
                    --config .eslintrc.json \
                    --ignore-path .gitignore \
                    --no-error-on-unmatched-pattern \
                    ./**/*.{js,ts,vue}"
            }
        })
    ]
})
