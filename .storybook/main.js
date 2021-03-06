module.exports = {
    // 如何查找
    stories: [
        "../components/Introduction.stories.mdx",
        "../components/Install.stories.mdx",
        "../components/Components.stories.mdx",
        "../components/**/*.stories.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    // 插件
    addons: ['@storybook/addon-essentials'],
};