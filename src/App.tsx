/*
 * @Author: msc
 * @Date: 2022-06-14 10:58:52
 * @LastEditTime: 2022-07-28 01:11:55
 * @LastEditors: msc
 * @Description:
 */

import { useEffect, useMemo, useState } from "react";
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

    const [selectedModuleName, setSelectedModuleName] = useState<string>(
        moduleNames[0]
    );

    useEffect(() => {
        console.log(moduleNames.length);
    }, [moduleNames]);

    return (
        <div className={styles.App}>
            <h1>
                <a
                    href="https://github.com/ccctw-ma/50projects-React-Ts.git"
                    target="_blank"
                    title="https://github.com/ccctw-ma/50projects-React-Ts.git" 
                    rel="noreferrer"
                >
                    WelCome To My 50projects
                </a>{" "}
            </h1>

            <div className="h-4/5 flex flex-row mx-16 justify-between gap-16">
                <div className="h-full max-w-[300px] shadow-2xl rounded-lg px-4 py-8">
                    <div
                        className={`${styles.navigation} h-full w-full overflow-scroll flex flex-col items-center`}
                    >
                        {moduleNames.map((module) => {
                            return (
                                <span
                                    key={module}
                                    onClick={() => {
                                        setSelectedModuleName(module);
                                    }}
                                    className={` cursor-pointer w-full my-1 text-ellipsis rounded hover:bg-purple-300 ${
                                        module === selectedModuleName &&
                                        "bg-purple-400"
                                    }`}
                                    title={module}
                                >
                                    {module}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <iframe
                    className={`flex-1 shadow-2xl rounded-2xl h-full block`}
                    src={`/${selectedModuleName}`}
                    title="app"
                ></iframe>
            </div>
        </div>
    );
}
