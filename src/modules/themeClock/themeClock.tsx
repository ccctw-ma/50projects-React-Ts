/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: msc
 * @Date: 2022-08-08 22:39:03
 * @LastEditTime: 2022-08-09 00:20:41
 * @LastEditors: msc
 * @Description:
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const ThemeClock: React.FC = () => {
    const days: Array<string> = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months: Array<string> = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const [timeStr, setTime] = useState<string>();
    const [mw, setMw] = useState<string>();
    const [day, setDay] = useState<number>();
    const [dark, setDark] = useState<boolean>(false);
    const hourEl = useRef<HTMLDivElement>(null);
    const minutesEl = useRef<HTMLDivElement>(null);
    const secondsEl = useRef<HTMLDivElement>(null);
    const updateTime = () => {
        const time = new Date();
        const month = time.getMonth();
        const day = time.getDay();
        const date = time.getDay();
        const hours = time.getHours() % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = time.getHours() > 12 ? "PM" : "AM";

        hourEl.current!.style.transform = `translate(-50%, -100%) rotate(${scale(
            hours,
            0,
            12,
            0,
            360
        )}deg)`;
        minutesEl.current!.style.transform = `translate(-50%, -100%) rotate(${
            (hours * 60 + minutes) * 6
        }deg)`;
        secondsEl.current!.style.transform = `translate(-50%, -100%) rotate(${
            (hours * 60 + minutes * 60 + seconds) * 6
        }deg)`;
        setTime(`${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`);
        setMw(`${days[day]}, ${months[month]}`);
        setDay(date);
    };

    const scale = (
        num: number,
        in_min: number,
        in_max: number,
        out_min: number,
        out_max: number
    ) => {
        return (
            ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    };
    useEffect(() => {
        const interVal = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interVal);
        };
    }, []);
    return (
        <div className={`${styles.main} ${dark && styles.dark}`}>
            <button
                className={styles.toggle}
                onClick={() => {
                    setDark(!dark);
                }}
            >
                {dark ? "Light mode" : "Dark mode"}
            </button>
            <div className={styles.container}>
                <div className={styles.clock}>
                    <div
                        className={`${styles.needle} ${styles.hour}`}
                        ref={hourEl}
                    />
                    <div
                        className={`${styles.needle} ${styles.minute}`}
                        ref={minutesEl}
                    />
                    <div
                        className={`${styles.needle} ${styles.second}`}
                        ref={secondsEl}
                    />
                    <div className={styles.centerPoint} />
                </div>
                <div className={styles.time}>{timeStr}</div>
                <div className={styles.date}>
                    {mw}
                    <span className={styles.circle}>{day}</span>
                </div>
            </div>
        </div>
    );
};

export default ThemeClock;
