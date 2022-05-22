const gulp = require('gulp');
const path = require('path');
// 删除
const rimraf = require('rimraf');
// 将ts编译成js
const ts = require('gulp-typescript');
// 将es6编译成es5
const babel = require('gulp-babel');
// 合并流
const merge2 = require('merge2');

const { compilerOptions } = require('./tsconfig.json');

const tsConfig = {
    noUnusedParameters: true, // 规定不能存在未使用的参数
    noUnusedLocals: true, // 不能有未使用的本地变量
    strictNullChecks: true, // 严格的Null检查
    target: 'es6', // 编译目标
    jsx: 'react', // jsx 的处理： preserve-保留不处理  react-会变成React.createElement()
    moduleResolution: 'node', // 模块的查找规则
    declaration: true, // 生成声明文件
    allowSyntheticDefaultImports: true, // 允许默认导出
    ...compilerOptions,
};
const babelConfig = require('./babel.config');

// 待处理的编译源
const source = [
    'components/**/*.{js,ts,jsx,tsx}',
    '!components/**/*.stories.{js,ts,jsx,tsx}',
    '!components/**/e2e/*',
    '!components/**/unit/*',
];
const base = path.join(process.cwd(), 'components');

function getProjectPath(filePath) {
    return path.join(process.cwd(), filePath);
}
const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

// 配置gulp任务
gulp.task('compile-with-es', (done) => {
    console.log('Compile to es...');
    // compile(false): 即不转化
    compile(false).on('finish', done);
});

gulp.task('compile-with-lib', (done) => {
    console.log('Compile to js...');
    compile().on('finish', done);
});

// gulp.parallel 任务并行
gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'));


/**
 * 执行编译，保留文件结构不变
 * @param {*} modules 
 */
function compile(modules) {
    const targetDir = modules === false ? esDir : libDir;
    rimraf.sync(targetDir);
    const { js, dts } = gulp.src(source, { base }).pipe(ts(tsConfig));
    const dtsFilesStream = dts.pipe(gulp.dest(targetDir));
    let jsFilesStream = js;
    if (modules) {
        // modules为true，则需要用babel进行转译 将es6 转成es5
        jsFilesStream = js.pipe(babel(babelConfig));
    }
    jsFilesStream = jsFilesStream.pipe(gulp.dest(targetDir));
    return merge2([jsFilesStream, dtsFilesStream]);
}