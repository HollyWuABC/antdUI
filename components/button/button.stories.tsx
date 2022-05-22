import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

// 元数据 button组件的描述信息 
export default {
    title: '通用/Button(按钮)',
    component: Button,
} as ComponentMeta<typeof Button>;

// 定义一个组件故事模式
const Template:ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 定义一个基本组件
export const Basic = Template.bind({});

// 定义组件属性
Basic.args = {
    children: "按钮",
};