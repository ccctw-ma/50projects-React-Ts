/*
 * @Author: msc
 * @Date: 2022-08-10 21:56:20
 * @LastEditTime: 2022-08-10 23:30:31
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";

const DragNDrop: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className={styles.main}>
            {new Array(5).fill(0).map((_, i) => {
                return (
                    <div
                        className={styles.empty}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault();
                            e.currentTarget.classList.add(styles.hovered);
                        }}
                        onDragLeave={(e) => {
                            e.currentTarget.classList.remove(styles.hovered);
                        }}
                        onDrop={(e) => {
                            e.currentTarget.className = styles.empty;
                            setIndex(i);
                        }}
                        key={i}
                    >
                        {i === index && (
                            <div
                                className={styles.fill}
                                draggable
                                onDragStart={(e) => {
                                    e.persist();
                                    console.log("直接访问", e);
                                    e.currentTarget.classList.add(styles.hold);
                                    setTimeout(() => {
                                        console.log("异步访问", e);

                                        (e.target as any).className = "";
                                    }, 1000);
                                }}
                                onDragEnd={(e) => {
                                    e.currentTarget.classList.remove(
                                        styles.hold
                                    );
                                }}
                            ></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default DragNDrop;
