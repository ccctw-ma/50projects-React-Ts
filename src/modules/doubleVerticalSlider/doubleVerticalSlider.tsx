/*
 * @Author: msc
 * @Date: 2022-08-16 21:49:29
 * @LastEditTime: 2022-08-16 22:40:17
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
const DoubleVerticalSlider: React.FC = () => {
    const slideLeft = useRef<HTMLDivElement>(null);
    const slideRight = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const sliderHeight = slideLeft.current!.parentElement!.clientHeight;
        slideLeft.current!.style.transform = `translateY(${
            index * sliderHeight
        }px)`;
        slideRight.current!.style.transform = `translateY(${
            -index * sliderHeight
        }px)`;
    }, [index]);

    useEffect(() => {
        slideLeft.current!.style.top = `-${300}vh`;
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.leftSide} ref={slideLeft}>
                    <div
                        style={{
                            backgroundColor: "#fd3555",
                        }}
                    >
                        <h1>Nature flower</h1>
                        <p>all in pink</p>
                    </div>
                    <div style={{ backgroundColor: "#2a86ba" }}>
                        <h1>Bluuue Sky</h1>
                        <p>with it's mountains</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#252e33",
                        }}
                    >
                        <h1>Lonely castle</h1>
                        <p>in the wildness</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#ffb866",
                        }}
                    >
                        <h1>Flying eagle</h1>
                        <p>in the sunset</p>
                    </div>
                </div>
                <div className={styles.rightSide} ref={slideRight}>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')",
                        }}
                    ></div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.down}
                        onClick={() => {
                            setIndex((i) => (i === 0 ? 3 : i - 1));
                        }}
                    >
                        <HiArrowDown
                            style={{
                                strokeWidth: 1,
                            }}
                        />
                    </button>
                    <button
                        className={styles.up}
                        onClick={() => setIndex((i) => (i === 3 ? 0 : i + 1))}
                    >
                        <HiArrowUp style={{ strokeWidth: 1 }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoubleVerticalSlider;
