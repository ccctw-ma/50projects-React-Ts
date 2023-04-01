/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: msc
 * @Date: 2022-08-29 23:25:17
 * @LastEditTime: 2022-08-30 00:33:56
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function AnimatedCountDown() {
    const num = 4;
    const [run, setRun] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(num - 1);

    useEffect(() => {
        run && setIndex(num - 1);
    }, [run]);
    return (
        <div className={styles.main}>
            {index}
            <div className={`${styles.counter} ${!run && styles.hide}`}>
                <div className={styles.nums}>
                    {new Array(num).fill(0).map((_, i) => {
                        return (
                            <span
                                key={i}
                                className={`${index === i && styles.in}`}
                                onAnimationEnd={(e) => {
                                    if (
                                        index === i &&
                                        e.currentTarget.classList.contains(
                                            styles.in
                                        )
                                    ) {
                                        e.currentTarget.classList.remove(
                                            styles.in
                                        );
                                        e.currentTarget.classList.add(
                                            styles.out
                                        );
                                    } else if (
                                        index === i &&
                                        e.currentTarget.classList.contains(
                                            styles.out
                                        )
                                    ) {
                                        if (index === 0) {
                                            setRun(false);
                                        } else {
                                            setIndex(index - 1);
                                        }
                                    }
                                }}
                            >
                                {i}
                            </span>
                        );
                    })}
                </div>
                <h4>Get Ready</h4>
            </div>

            <div className={`${styles.final} ${!run && styles.show}`}>
                <h1>Go</h1>
                <button
                    className={styles.replay}
                    onClick={() => {
                        setRun(true);
                    }}
                >
                    <span>Replay</span>
                </button>
            </div>
        </div>
    );
}
