/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: msc
 * @Date: 2022-08-18 21:03:59
 * @LastEditTime: 2022-08-18 23:08:25
 * @LastEditors: msc
 * @Description:
 */

import * as React from "react";
import styles from "./index.module.css";
import { AiFillHeart } from "react-icons/ai";
export default function DoubleClickHeart() {
    const [count, setCount] = React.useState<number>(0);
    const [heart, setHeart] = React.useState<JSX.Element>();
    const love = React.useRef<HTMLDivElement>(null);
    let clickTime = 0;

    return (
        <div className={styles.main}>
            <h3>Double click on the image to like it</h3>
            <small>
                You liked it <span>{count}</span>&nbsp;times
            </small>
            <div
                className={styles.love}
                ref={love}
                onClick={(e) => {
                    if (clickTime === 0) {
                        clickTime = new Date().getTime();
                    } else {
                        if (new Date().getTime() - clickTime <= 800) {
                            setCount(count + 1);
                            clickTime = 0;
                            let x = e.clientX;
                            let y = e.clientY;
                            let xInside = x - e.currentTarget.offsetLeft;
                            let yInside = y - e.currentTarget.offsetTop;
                            const newHeart = (
                                <div
                                    className={styles.heart}
                                    style={{
                                        top: `${yInside}px`,
                                        left: `${xInside}px`,
                                        color: "red",
                                    }}
                                >
                                    <AiFillHeart />
                                </div>
                            );
                            setHeart(newHeart);
                            setTimeout(() => {
                                setHeart(undefined);
                            }, 600);
                        } else {
                            clickTime = new Date().getTime();
                        }
                    }
                }}
            >
                {heart}
            </div>
        </div>
    );
}
