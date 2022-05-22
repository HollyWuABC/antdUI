import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import Button from '..';
import 'jest-environment-puppeteer';

// 拓展快照方法
const toMatchSnapshot = configureToMatchImageSnapshot({
    customSnapshotsDir: `${process.cwd()}/snapshots`,
    customDiffDir: `${process.cwd()}/diffSnapshots`,
});
expect.extend({ toMatchSnapshot });

describe('测试Button快照', () => {
    it('测试快照是否正确', async () => {
        await jestPuppeteer.resetPage();
        await page.goto(`file://${process.cwd()}/tests/index.html`);
        const html = ReactDOMServer.renderToString(<Button>按钮</Button>);
        await page.evaluate((innerHTML:string) => {
        document.querySelector('#root')!.innerHTML = innerHTML;
        }, html);
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot();
    });
});
