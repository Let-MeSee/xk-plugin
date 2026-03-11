import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.cjs.js", format: "cjs", exports: "named" },
    { file: "dist/index.esm.js", format: "es", exports: "named" },
  ],
  // 关键：将 Vant/Vue 标记为外部依赖，不打包进插件
  external: ["vant", "vue"],
  plugins: [
    vue(), // 处理 .vue 文件（若有）
    resolve(),
    commonjs(),
    terser(),
  ],
};
