module.exports = {
    // 默认当前目录为根目录，不再向上寻找其他的 eslint 规则
    root: true,
    // 解析器类型，这里我们检查的是 typescript 语法，因此需要使用 @typescript-eslint/parser 该解析器
    parser: '@typescript-eslint/parser',
    // 解析器的配置
    parserOptions: {
        ecmaVersion: 2020, // 可使用 es2019 的最新规范
        sourceType: 'module', // 当前项目是 ES Module 模块
    },
    // extends 是直接使用别人已经写好的 lint 规则，方便快捷
    extends: [
        // 使用 @typescript-eslint/recommended 中的规则
        'plugin:@typescript-eslint/recommended',
        // 使得 @typescript-eslint 中的样式规范失效，遵循 prettier 中的样式规范
        'prettier/@typescript-eslint',
        // eslint 使用 prettier 中的样式规范，且如果使得 ESLint 检测到 prettier 的格式问题，将以 error 的形式抛出
        'plugin:prettier/recommended',
    ],
    // 全局变量的预设，配置了 es6 和 node 中的全局变量
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    // 自定义配置，如果有不适合的规则，可以在此调整
    rules: {
        "no-undef": "error",
        "eqeqeq": "error",
        "no-console": "error"
    },
}
