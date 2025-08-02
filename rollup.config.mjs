
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";


export default [
  // Main runtime bundle
  {
    input: "src/index.js",
    output: [
      {
        file: ".tilepadPlugin/bin/index.mjs",
        format: "es",
      },
    ],
    plugins: [
      // Resolve imported modules
      nodeResolve(),
      // Minify output
      terser(),
    ],
  },

];
