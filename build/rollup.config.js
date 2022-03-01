import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { name } from "../package.json";
import typescript from "rollup-plugin-typescript2";
const file = (type) => `dist/${name}.${type}.js`;
import { nodeResolve } from "@rollup/plugin-node-resolve";
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["node_modules"],
};
export { name, file };
export default {
  input: "src/index.ts",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    nodeResolve(),
    vue(),
    css({ output: "bundle.css" }),
    ,
    // typescript(),
    typescript({ tsconfigOverride: overrides }),
  ],
  external: ["vue", "lodash-es"],
};
