/*
 * @Author: msc
 * @Date: 2022-08-22 22:06:41
 * @LastEditTime: 2022-08-22 22:50:07
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function AutoTextEffect() {
    const [speed, setSpeed] = useState<number>(300);
    const [curText, setCurText] = useState<string>("Start");
    const text = "We Love Programing!";

    useEffect(() => {
        let index = 0;
        const writeText = setInterval(() => {
            if (index > text.length) {
                index = 1;
            } else {
                setCurText(text.slice(0, index++));
            }
        }, speed);
        return () => {
            clearInterval(writeText);
        };
    }, [speed]);
    return (
        <div className={styles.main}>
            <h1>{curText}</h1>
            <div>
                <label htmlFor="speed">Speed:</label>
                <input
                    type="number"
                    name="speend"
                    id="speed"
                    defaultValue={1}
                    min={1}
                    max={10}
                    step={1}
                    onChange={(e) => {
                        const num = e.currentTarget.valueAsNumber;
                        console.log(num);
                        if (num < 1 || num > 10) {
                            alert("Wrong Speed");
                            setSpeed(300);
                            return;
                        }
                        setSpeed(300 / e.currentTarget.valueAsNumber);
                    }}
                />
            </div>
        </div>
    );
}
