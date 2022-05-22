module.exports = {
    presets: [
        '@babel/preset-react', // 预设 react编译成es5
        [
            '@babel/preset-env', // es6 编译成es5
            {
                modules: 'auto',
                targets: { // 兼容目标
                browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
                },
            },
        ],
    ],
    plugins: [
        [
            '@babel/plugin-transform-typescript', // 支持typescript
            {
                isTSX: true,
            },
        ],
        ['@babel/plugin-transform-runtime'], // 提取一些编译运行时帮助的方法
    ],
};