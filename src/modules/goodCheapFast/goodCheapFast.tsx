/*
 * @Author: msc
 * @Date: 2022-08-24 22:36:32
 * @LastEditTime: 2022-08-24 23:53:34
 * @LastEditors: msc
 * @Description:
 */
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const GoodCheapFast: React.FC = () => {
    const [good, setGood] = useState<boolean>(false);
    const [cheap, setCheap] = useState<boolean>(false);
    const [fast, setFast] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(1);

    const goodCheckBox = useRef<HTMLInputElement>(null);
    const cheapCheckBox = useRef<HTMLInputElement>(null);
    const fastCheckBox = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (good && cheap && fast) {
            selected === 1 && setFast(false);
            selected === 2 && setGood(false);
            selected === 3 && setCheap(false);
        }
    }, [good, cheap, fast, selected]);

    return (
        <div className={styles.main}>
            <h2>How do you want your project to be?</h2>
            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    name="good"
                    id="good"
                    checked={good}
                    // defaultChecked={false}
                    className={styles.toggle}
                    ref={goodCheckBox}
                    onChange={(e) => {
                        setSelected(1);
                        setGood(e.target.checked);
                    }}
                />
                <label htmlFor="good" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Good</span>
            </div>
            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    name="cheap"
                    id="cheap"
                    className={styles.toggle}
                    checked={cheap}
                    // defaultChecked={false}
                    ref={cheapCheckBox}
                    onChange={(e) => {
                        setSelected(2);
                        setCheap(e.target.checked);
                    }}
                />
                <label htmlFor="cheap" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Cheap</span>
            </div>
            <div className={styles.toggleContainer}>
                <input
                    type="checkbox"
                    name="fast"
                    id="fast"
                    className={styles.toggle}
                    ref={fastCheckBox}
                    // defaultChecked={false}
                    checked={fast}
                    onChange={(e) => {
                        setSelected(3);
                        setFast(e.target.checked);
                    }}
                />
                <label htmlFor="fast" className={styles.label}>
                    <div className={styles.ball}></div>
                </label>
                <span>Fast</span>
            </div>
     
        </div>
    );
};
export default GoodCheapFast;
