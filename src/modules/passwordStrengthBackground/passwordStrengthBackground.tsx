/*
 * @Author: msc
 * @Date: 2022-09-05 23:21:40
 * @LastEditTime: 2022-09-06 10:57:28
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef } from "react";
import styles from "./index.module.css";

export default function PasswordStrengthBackground() {
    const bg = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.main}>
            <div className={styles.background} ref={bg}></div>

            <div className={styles.content}>
                <h1 className={styles.header}>Image Password Strength</h1>
                <p className={styles.subHeader}>
                    Change the password to see the effect
                </p>
                <div className={styles.info}>
                    <label
                        htmlFor="email"
                        style={{ color: "rgba(26, 32, 44, 1)" }}
                    >
                        Email:{" "}
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        className={styles.email}
                    />
                </div>

                <div className={styles.info}>
                    <label
                        htmlFor="email"
                        style={{ color: "rgba(26, 32, 44, 1)" }}
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        className={styles.password}
                        onChange={(e) => {
                            let length = e.target.value.length;
                            bg.current!.style.filter = `blur(${
                                20 - length * 2
                            }px)`;
                        }}
                    />
                </div>

                <button className={styles.submit}>Submit</button>
            </div>
        </div>
    );
}
