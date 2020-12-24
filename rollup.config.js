import typescript from "rollup-plugin-typescript2";
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const libraryName = 'foo-lib'

export default {
    input: "./src/main.ts",
    output: [
        { format: "es", file: 'dist/main.esm.js', sourcemap: true },
        { format: "umd", file: 'dist/main.umd.js', name: libraryName, sourcemap: true },
    ],
    external: [],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        sourceMaps(),
        terser(),
    ]
}
