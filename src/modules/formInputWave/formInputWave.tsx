/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: msc
 * @Date: 2022-07-27 20:49:22
 * @LastEditTime: 2022-07-27 21:19:44
 * @LastEditors: msc
 * @Description:
 */

import React from "react";

import styles from "./index.module.css";

export default function FormInputWave() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Please Login</h1>
                <form>
                    <div className={styles.formControl}>
                        <input type="text" required />
                        <label>
                            {"Email".split("").map((c, i) => (
                                <span
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    {c}
                                </span>
                            ))}
                        </label>
                    </div>
                    <div className={styles.formControl}>
                        <input type="password" required />
                        <label>
                            {"Password".split("").map((c, i) => (
                                <span
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    {c}
                                </span>
                            ))}
                        </label>
                    </div>
                    <button className={styles.btn}>Login</button>
                    <p className={styles.text}>
                        Don't have an account?
                        <a href="#">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
