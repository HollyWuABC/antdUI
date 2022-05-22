const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css
const cwd = process.cwd();

module.exports = {
    mode: 'development', // 开发模式
    devtool: false, // 关闭生成sourcemap
    entry: { // 入口文件
        antdUI: './index.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        library: 'antd-ui', // 打包后库的名字
        libraryTarget: 'umd', // 打包后模块的格式 
    },
    externals: { // 外部依赖 组件库代码不需要打包react和react-dom
        react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        },
        'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        },
    },
    resolve: { // 解析配置
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // 指定扩展名
        alias: { // 别名
            antdesign: cwd,
        },
    },
    module: {
        rules: [
        {
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                sourceMap: true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                postcssOptions: {
                    plugins: ['autoprefixer'],
                },
                sourceMap: true,
                },
            },
            ],
        },
        {
            test: /\.less$/,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                sourceMap: true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                postcssOptions: {
                    plugins: ['autoprefixer'],
                },
                sourceMap: true,
                },
            },
            {
                loader: 'less-loader',
                options: {
                lessOptions: {
                    javascriptEnabled: true,
                },
                sourceMap: true,
                },
            },
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
            type: 'asset',
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: '[name].css',
        }),
    ],
};