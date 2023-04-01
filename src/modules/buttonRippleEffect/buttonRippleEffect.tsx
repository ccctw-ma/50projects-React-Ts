/*
 * @Author: msc
 * @Date: 2022-08-09 20:55:43
 * @LastEditTime: 2022-08-09 21:35:21
 * @LastEditors: msc
 * @Description:
 */

import React, { useRef, useState } from "react";
import styles from "./index.module.css";

const ButtonRippleEffect = () => {
    const [show, setShow] = useState<boolean>(false);
    const circle = useRef<HTMLSpanElement>(null);
    return (
        <div className={styles.container}>
            <button
                className={styles.ripple}
                onClick={(e) => {
                    setShow(true);
                    const x = e.clientX;
                    const y = e.clientY;
                    const buttonTop = e.currentTarget.offsetTop;
                    const buttonLeft = e.currentTarget.offsetLeft;
                    const xInside = x - buttonLeft;
                    const yInside = y - buttonTop;
                    console.log(x, y, buttonLeft, buttonTop);

                    circle.current!.style.top = yInside + "px";
                    circle.current!.style.left = xInside + "px";

                    setTimeout(() => {
                        setShow(false);
                    }, 500);
                }}
            >
                Click Me
                <span
                    className={`${show && styles.circle}`}
                    ref={circle}
                    style={{
                        visibility: show ? "visible" : "hidden",
                    }}
                />
            </button>
        </div>
    );
};

export default ButtonRippleEffect;
