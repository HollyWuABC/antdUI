#### 技术栈
- 框架 React
- 测试 jest+enzyme
- 检查 eslint
- 打包 webpack + gulp webpack 打包出dist文件夹 gulp构建出es文件夹（对应es6语法） 和 lib（对应es5语法）
- 文档 bisheng / stroybook
- 钩子husky

#### 源码目录
- husky git钩子
- site 网站
- components 组件
- docs 文档
- dist 打包生成的文件
- es ES6
- lib ESS
- scripts 脚本
- site 组件预览项目
- tests 测试
- typings 类型定义


### 测试
- jest是一个令人愉快的 JavaScript 测试框架
- Enzyme 用于 React 的 JS 测试工具
- puppeteer是一个控制 headless Chrome 的 Node.js API（无头浏览器）
- jest-image-snapshot执行图像比较的Jest匹配器,对于视觉回归测试非常有用


### 编译发布
- rimraf是 node版本的 rm -rf
- gulp将开发流程中让人痛苦或耗时的任务自动化，从而减少你所浪费的时间、创造更大价值。
- merge2合并多个流为同一个


### 持续集成
- Travis CI提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器