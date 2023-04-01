/*
 * @Author: msc
 * @Date: 2022-08-05 22:36:08
 * @LastEditTime: 2022-08-05 23:06:45
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
const BackgroundSlider: React.FC = () => {
    const urls: Array<string> = [
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
        "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
        "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    ];
    const [index, setIndex] = useState<number>(0);
    const body = useRef<HTMLDivElement>(null);

    useEffect(() => {
        body.current!.style.backgroundImage = `url(${urls[index]})`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className={styles.main} ref={body}>
            <div className={styles.container}>
                {urls.map((u, i) => {
                    return (
                        <div
                            className={`${styles.slide} ${
                                i === index && styles.active
                            }`}
                            style={{ backgroundImage: `url(${u})` }}
                            key={i}
                        ></div>
                    );
                })}

                <button
                    className={`${styles.arrow} ${styles.leftArrow}`}
                    onClick={() => {
                        setIndex((index + 1) % 5);
                    }}
                >
                    <VscArrowLeft
                        style={{
                            fontWeight: "bolder",
                            fontSize: "48px",
                        }}
                    />
                </button>
                <button
                    className={`${styles.arrow} ${styles.rightArrow}`}
                    onClick={() => {
                        setIndex((index + 4) % 5);
                    }}
                >
                    <VscArrowRight
                        style={{
                            fontWeight: "bolder",
                            fontSize: "48px",
                        }}
                    />
                </button>
            </div>
        </div>
    );
};
export default BackgroundSlider;
