/*
 * @Author: msc
 * @Date: 2022-06-14 10:58:52
 * @LastEditTime: 2022-07-28 01:11:55
 * @LastEditors: msc
 * @Description:
 */

import { useEffect, useMemo } from "react";
import styles from "./App.module.css";
import Card from "./components/card";
const modules = require.context("./modules", true, /\.tsx$/);

export default function App() {
    const moduleNames: Array<string> = useMemo(() => {
        return modules.keys().map((module: string): any => {
            const res = module.match(/\/(\w+)\.tsx$/);
            const name = res![1];
            return name;
        });
    }, []);

    useEffect(() => {
        console.log(moduleNames.length);
    }, [moduleNames]);

    return (
        <div className={styles.App}>
            <h1>WelCome To My 50projects </h1>

            <div className={styles.container}>
                {moduleNames.map((name) => (
                    <Card moduleName={name} key={name} />
                ))}
            </div>
        </div>
    );
}
