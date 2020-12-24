import typescript from "rollup-plugin-typescript2";

const libraryName = 'foo-lib'

export default {
    input: "./src/main.ts",
    output: [
        { format: "es", file: 'dist/main.esm.js' },
        { format: "umd", file: 'dist/main.umd.js', name: libraryName },
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        }),
    ]
}
