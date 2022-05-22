import React, { Component } from 'react';
import { mount } from 'enzyme';
import Button from '..';

describe('测试Button组件', () => {
    it('测试Button是否能够正常加载', () => {
        // 组件挂载不报错
        expect(() => mount(<Button>Fllow</Button>)).not.toThrowError();
    });
});