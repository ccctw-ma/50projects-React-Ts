/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: msc
 * @Date: 2022-08-01 23:11:38
 * @LastEditTime: 2022-08-01 23:50:26
 * @LastEditors: msc
 * @Description:
 */

import React from "react";
import styles from "./index.module.css";

const AnimatedNavigation: React.FC = () => {
    return (
        <div className={styles.main}>
            <nav className={styles.active} id="nav">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Works</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button
                    className={styles.icon}
                    id="toggle"
                    onClickCapture={(e) => {
                        e.currentTarget.parentElement?.classList.toggle(
                            styles.active
                        );
                    }}
                >
                    <div className={`${styles.line} ${styles.line1}`}></div>
                    <div className={`${styles.line} ${styles.line2}`}></div>
                </button>
            </nav>
        </div>
    );
};
export default AnimatedNavigation;
