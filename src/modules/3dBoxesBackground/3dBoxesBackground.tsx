/*
 * @Author: msc
 * @Date: 2022-09-06 23:06:31
 * @LastEditTime: 2022-09-06 23:20:09
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";
export default function ThreeDBoxesBackground() {
    const [show, setShow] = useState<boolean>(false);
    const boxNum = 16;
    return (
        <div className={styles.main}>
            <button
                className={styles.magic}
                onClick={() => setShow((pre) => !pre)}
            >
                Magic 🎩
            </button>
            <div className={`${styles.boxes} ${show && styles.big}`}>
                {new Array(boxNum).fill(0).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={styles.box}
                            style={{
                                backgroundPosition: `${-(i % 4) * 125}px ${-(
                                    ~~(i / 4) * 125
                                )}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
