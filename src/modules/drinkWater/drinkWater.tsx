/*
 * @Author: msc
 * @Date: 2022-08-03 23:33:17
 * @LastEditTime: 2022-08-04 01:36:52
 * @LastEditors: msc
 * @Description:
 */

import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

const DrinkWater: React.FC = () => {
    const [remain, setRemain] = useState<string>("");
    const [per, setPer] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    const remained = useRef<HTMLDivElement>(null);
    const percentage = useRef<HTMLDivElement>(null);
    const cups = useRef<HTMLDivElement>(null);

    const handleClick = (index: number) => {
        const children: HTMLCollection | undefined = cups.current?.children;
        if (children?.item(index - 1)?.classList.contains(styles.full)) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        children?.item(index - 1)?.classList.toggle(styles.full);
    };

    useEffect(() => {
        // console.log(count);
        if (count === 0) {
            percentage.current!.style.visibility = "hidden";
            percentage.current!.style.height = "0";
        } else {
            percentage.current!.style.visibility = "visible";
            percentage.current!.style.height = `${(count / 8) * 330}px`;
            setPer(`${(count / 8) * 100}%`);
        }

        if (count === 8) {
            remained.current!.style.visibility = "hidden";
            remained.current!.style.height = "0";
        } else {
            remained.current!.style.visibility = "visible";
            setRemain(`${2 - (250 * count) / 1000}L`);
        }
    }, [count]);
    return (
        <div className={styles.main}>
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>

            <div className={styles.cup}>
                <div className={styles.remained} ref={remained} id="remained">
                    <span id="liters">{remain}</span>
                    <small>Remained</small>
                </div>
                <div
                    className={styles.percentage}
                    ref={percentage}
                    id="percentage"
                >
                    {per}
                </div>
            </div>
            <p className={styles.text}>
                Select how many glassed of water that you have drank
            </p>
            <div className={styles.cups} ref={cups}>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <div
                            className={`${styles.cup} ${styles.cupSmall}`}
                            key={i}
                            onClick={() => handleClick(i + 1)}
                        >
                            250 ml
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DrinkWater;
