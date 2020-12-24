const libraryName = 'foo-lib'

export default {
    input: "./src/main.js",
    output: [
        { format: "es", file: 'dist/main.esm.js' },
        { format: "umd", file: 'dist/main.umd.js', name: libraryName },
    ],
}