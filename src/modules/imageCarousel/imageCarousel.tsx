/*
 * @Author: msc
 * @Date: 2022-08-31 20:22:23
 * @LastEditTime: 2022-08-31 21:01:00
 * @LastEditors: msc
 * @Description:
 */

import { useEffect, useState } from "react";
import styles from "./index.module.css";

let interval: NodeJS.Timer;
export default function ImageCarousel() {
    const [index, setIndex] = useState<number>(0);
  
    const run = () => {
        setIndex((pre) => {
            if (pre === 3) {
                return 0;
            } else {
                return pre + 1;
            }
        });
    };

    useEffect(() => {
        console.log(index);

        
        clearInterval(interval);
        interval = setInterval(run, 2000);
    }, [index]);

    useEffect(() => {
        interval = setInterval(run, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.carousel}>
                <div
                    className={styles.imageContainer}
                    style={{ transform: `translateX(${-index * 500}px)` }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
                        alt="first"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt="second"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt="third"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
                        alt="fourth"
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            setIndex((pre) => {
                                if (pre === 0) {
                                    return 3;
                                } else {
                                    return pre - 1;
                                }
                            });
                        }}
                    >
                        Prev
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            setIndex((pre) => {
                                if (pre === 3) {
                                    return 0;
                                } else {
                                    return pre + 1;
                                }
                            });
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
