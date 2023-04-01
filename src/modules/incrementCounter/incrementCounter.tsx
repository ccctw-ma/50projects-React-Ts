/*
 * @Author: msc
 * @Date: 2022-08-02 21:12:44
 * @LastEditTime: 2022-08-02 22:12:20
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function IncrementCounter() {
    const [a, sa] = useState<number>(0);
    const [b, sb] = useState<number>(0);
    const [c, sc] = useState<number>(0);

    const [time, setTime] = useState<string>(Date.now() + "");

    useEffect(() => {
        const ta = 12000,
            tb = 5000,
            tc = 7500;
        const time = 250;
        const da = ta / time,
            db = tb / time,
            dc = tc / time;
        const interval = setInterval(() => {
            sa((a) => {
                if (a > ta) {
                    clearInterval(interval);
                    // sb(tb);
                    // sc(tc);
                    return ta;
                }
                return ~~(a + da);
            });
            sb((b) => (b > tb ? tb : ~~(b + db)));
            sc((c) => (c > tc ? tc : ~~(c + dc)));
        }, 5);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.counter} data-target="12000">
                    {a}
                </div>
                <span>Twitter Followers</span>
            </div>
            <div className={styles.container}>
                <div className={styles.counter} data-target="5000">
                    {b}
                </div>
                <span>YouTube Subscribers</span>
            </div>
            <div className={styles.container}>
                <div className={styles.counter} data-target="7500">
                    {c}
                </div>
                <span>Facebook Fans</span>
            </div>

            <h2>{time}</h2>
        </div>
    );
}
