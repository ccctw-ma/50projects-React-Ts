/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: msc
 * @Date: 2022-07-26 21:55:23
 * @LastEditTime: 2022-07-26 22:36:57
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef } from "react";
import styles from "./index.module.css";

export default function SplitLandingPage() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.container} ref={container}>
            <div
                className={`${styles.split} ${styles.left}`}
                onMouseEnter={() => {
                    container.current?.classList.add(styles.hoverLeft);
                }}
                onMouseLeave={() => {
                    container.current?.classList.remove(styles.hoverLeft);
                }}
            >
                <h1>PlayStation</h1>
                <a href="#" className={styles.btn}>
                    Buy Now
                </a>
            </div>
            <div
                className={`${styles.split} ${styles.right}`}
                onMouseEnter={() => {
                    container.current?.classList.add(styles.hoverRight);
                }}
                onMouseLeave={() => {
                    container.current?.classList.remove(styles.hoverRight);
                }}
            >
                <h1>XBox Series X</h1>
                <a href="#" className={styles.btn}>
                    Buy Now
                </a>
            </div>
        </div>
    );
}
