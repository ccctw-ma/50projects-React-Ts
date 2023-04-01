/*
 * @Author: msc
 * @Date: 2022-07-25 21:05:35
 * @LastEditTime: 2022-07-26 22:54:23
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function SrollAnimation() {
    const container = useRef<HTMLDivElement>(null);
    const boxs = useRef<Array<HTMLDivElement>>([]);
    const threshold = (window.screen.height * 4) / 5;

    const throttle = (fn: Function, delay: number) => {
        let flag = true;
        return () => {
            if (!flag) {
                return false;
            }
            flag = false;
            setTimeout(() => {
                fn();
                flag = true;
            }, delay);
        };
    };

    const checkBoxes = () => {
        console.log(1);

        boxs.current?.forEach((box: HTMLDivElement) => {
            if (box) {
                const boxTop: number = box.getBoundingClientRect().top;
                if (boxTop < threshold) {
                    box.classList.add(styles.show);
                } else {
                    box.classList.remove(styles.show);
                }
            }
        });
    };

    useEffect(() => {
        checkBoxes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={styles.container}
            ref={container}
            onScroll={throttle(checkBoxes, 100)}
        >
            <h1>Scroll to see the animation</h1>
            {new Array(30).fill(0).map((_, i) => {
                return (
                    <div
                        className={styles.box}
                        key={i}
                        ref={(e: HTMLDivElement) => boxs.current.push(e)}
                    >
                        <h2>Content{i + 1}</h2>
                    </div>
                );
            })}
        </div>
    );
}
