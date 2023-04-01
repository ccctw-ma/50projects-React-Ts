/*
 * @Author: msc
 * @Date: 2022-07-28 21:39:22
 * @LastEditTime: 2022-07-28 22:16:54
 * @LastEditors: msc
 * @Description:
 */

import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function EventKeyCodes() {
    const [key, setKey] = useState<string>("key");
    const [keyCode, setKeyCode] = useState<number>(0);
    const [code, setCode] = useState<string>("code");

    useEffect(() => {
        const fn = (event: KeyboardEvent) => {
            if (event.key === " ") {
                setKey("space");
            } else {
                setKey(event.key);
            }
            setKeyCode(event.keyCode);
            setCode(event.code);
        };
        window.addEventListener("keydown", fn);
        return () => {
            window.removeEventListener("keydown", fn);
        };
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Press any key to get the keycode</h1>
                <div className={styles.keyContainer}>
                    <div className={styles.key}>
                        {key}
                        <small>event.key</small>
                    </div>
                    <div className={styles.key}>
                        {keyCode}
                        <small>event.keycode</small>
                    </div>
                    <div className={styles.key}>
                        {code}
                        <small>event.code</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
