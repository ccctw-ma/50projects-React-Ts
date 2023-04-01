/**
 * @Author: msc
 * @Date: 2022-06-14 10:48:24
 * @LastEditTime: 2022-06-14 11:16:39
 * @LastEditors: msc
 * @Description:
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";

const modules = require.context("../modules", true, /\.tsx$/);

//根据pages里的文件自动导入路由
const moduleComponents = modules.keys().map((key: string): any => {
    // console.log(key);
    const matchRes = key.match(/\/(\w+)\.tsx$/);
    // console.log(matchRes);
    const moduleName = matchRes![1];
    const E = modules(key).default;
    return <Route path={moduleName} element={<E />} key={key} />;
});

const Router = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}></Route>

            {moduleComponents}
        </Routes>
    </BrowserRouter>
);

export default Router;

