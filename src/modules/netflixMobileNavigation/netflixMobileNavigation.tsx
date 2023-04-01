/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: msc
 * @Date: 2022-09-15 22:21:17
 * @LastEditTime: 2022-09-16 17:04:34
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";

export default function NetflixMobileNavigation() {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className={styles.main}>
            <button
                className={`${styles.navBtn} ${styles.openBtn}`}
                onClick={() => setShow(true)}
            >
                open
            </button>
            <div
                className={`${styles.nav} ${styles.navBlack} ${
                    show && styles.visible
                }`}
            >
                <div
                    className={`${styles.nav} ${styles.navRed} ${
                        show && styles.visible
                    }`}
                >
                    <div
                        className={`${styles.nav} ${styles.navWhite} ${
                            show && styles.visible
                        }`}
                    >
                        <button
                            className={`${styles.navBtn} ${styles.closeBtn}`}
                            onClick={() => setShow(false)}
                        >
                            close
                        </button>
                        <ul className={styles.list}>
                            <li>
                                <a href="#">Teams</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Life at Netflix</a>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <a href="#">Netflix culture memo</a>
                                    </li>
                                    <li>
                                        <a href="#">Work life balance</a>
                                    </li>
                                    <li>
                                        <a href="#">Inclusion & diversity</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
